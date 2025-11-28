#!/bin/bash

# Script to keep Render.com services alive during testing
# Prevents services from spinning down by periodically pinging them

set -euo pipefail

# Configuration
# Add your Render.com service URLs here (one per line)
# These should be the full URLs to your services, e.g., https://your-service.onrender.com
SERVICES=(
  # "https://gds-next-prototype.onrender.com/"
  # "https://nestjs-frontend-8w7q.onrender.com"
  # "https://react-spa-test.onrender.com"
)

# Default interval between pings (in seconds)
INTERVAL=${INTERVAL:-60}

# Health check endpoint (defaults to /health)
HEALTH_ENDPOINT=${HEALTH_ENDPOINT:-"/health"}

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to ping a service
ping_service() {
  local url=$1
  local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
  
  # Construct full URL with health endpoint
  local full_url="${url}${HEALTH_ENDPOINT}"
  
  echo -e "${BLUE}[${timestamp}]${NC} Pinging ${url}..."
  
  # Use curl to ping the service
  # -s: silent mode (no progress bar)
  # -f: fail silently on HTTP errors
  # -o /dev/null: discard output
  # -w: write format string for status code
  # --max-time: maximum time in seconds for the request
  # --connect-timeout: timeout for connection
  if curl -s -f -o /dev/null -w "%{http_code}" --max-time 10 --connect-timeout 5 "${full_url}" > /tmp/curl_status_$$ 2>&1; then
    local status_code=$(cat /tmp/curl_status_$$)
    rm -f /tmp/curl_status_$$
    
    if [ "${status_code}" -ge 200 ] && [ "${status_code}" -lt 400 ]; then
      echo -e "${GREEN}✓${NC} ${url} responded with status ${status_code}"
      return 0
    else
      echo -e "${YELLOW}⚠${NC} ${url} responded with status ${status_code}"
      return 1
    fi
  else
    rm -f /tmp/curl_status_$$ 2>/dev/null || true
    echo -e "${RED}✗${NC} ${url} failed to respond"
    return 1
  fi
}

# Function to ping all services
ping_all_services() {
  local success_count=0
  local total_count=${#SERVICES[@]}
  
  if [ ${total_count} -eq 0 ]; then
    echo -e "${RED}Error: No services configured!${NC}"
    echo "Please edit this script and add your Render.com service URLs to the SERVICES array."
    exit 1
  fi
  
  echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo -e "${BLUE}Pinging ${total_count} service(s) every ${INTERVAL} seconds${NC}"
  echo -e "${BLUE}Press Ctrl+C to stop${NC}"
  echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo ""
  
  for service in "${SERVICES[@]}"; do
    # Skip empty lines and comments
    [[ -z "${service}" || "${service}" =~ ^[[:space:]]*# ]] && continue
    
    if ping_service "${service}"; then
      ((success_count++))
    fi
    echo ""
  done
  
  echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo -e "Results: ${GREEN}${success_count}${NC}/${total_count} services responded successfully"
  echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo ""
}

# Function to handle script termination
cleanup() {
  echo ""
  echo -e "${YELLOW}Stopping keep-alive script...${NC}"
  rm -f /tmp/curl_status_$$ 2>/dev/null || true
  exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Main loop
main() {
  # Check if curl is available
  if ! command -v curl &> /dev/null; then
    echo -e "${RED}Error: curl is not installed${NC}"
    echo "Please install curl to use this script."
    exit 1
  fi
  
  # Validate interval
  if ! [[ "${INTERVAL}" =~ ^[0-9]+$ ]] || [ "${INTERVAL}" -lt 30 ]; then
    echo -e "${YELLOW}Warning: Interval should be at least 30 seconds. Using default of 300 seconds.${NC}"
    INTERVAL=300
  fi
  
  # Check if services are configured
  if [ ${#SERVICES[@]} -eq 0 ]; then
    echo -e "${RED}Error: No services configured!${NC}"
    echo ""
    echo "To configure services, edit this script and add your Render.com URLs:"
    echo ""
    echo "  SERVICES=("
    echo "    \"https://your-service-1.onrender.com\""
    echo "    \"https://your-service-2.onrender.com\""
    echo "    \"https://your-service-3.onrender.com\""
    echo "  )"
    echo ""
    exit 1
  fi
  
  # Run continuously
  while true; do
    ping_all_services
    echo -e "${BLUE}Waiting ${INTERVAL} seconds until next ping...${NC}"
    echo ""
    sleep "${INTERVAL}"
  done
}

# Show usage if help is requested
if [[ "${1:-}" == "--help" ]] || [[ "${1:-}" == "-h" ]]; then
  echo "Keep Render.com Services Alive"
  echo ""
  echo "Usage: $0 [OPTIONS]"
  echo ""
  echo "Options:"
  echo "  -h, --help              Show this help message"
  echo "  -i, --interval SECONDS  Set ping interval in seconds (default: 300)"
  echo "  -e, --endpoint PATH    Set health check endpoint (default: /health)"
  echo ""
  echo "Environment Variables:"
  echo "  INTERVAL               Ping interval in seconds (default: 300)"
  echo "  HEALTH_ENDPOINT        Health check endpoint path (default: /health)"
  echo ""
  echo "Configuration:"
  echo "  Edit this script and add your Render.com service URLs to the SERVICES array"
  echo ""
  echo "Examples:"
  echo "  $0                                    # Run with default settings"
  echo "  $0 -i 180                            # Ping every 180 seconds"
  echo "  INTERVAL=120 $0                      # Ping every 120 seconds"
  echo "  HEALTH_ENDPOINT=/api/health $0       # Use custom health endpoint"
  exit 0
fi

# Parse command line arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    -i|--interval)
      INTERVAL="$2"
      shift 2
      ;;
    -e|--endpoint)
      HEALTH_ENDPOINT="$2"
      shift 2
      ;;
    *)
      echo -e "${RED}Unknown option: $1${NC}"
      echo "Use --help for usage information"
      exit 1
      ;;
  esac
done

# Run main function
main

