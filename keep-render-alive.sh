#!/bin/bash

# Script to keep Render.com services alive during testing
# Prevents services from spinning down by periodically pinging them

set -euo pipefail

# Configuration
# Add your Render.com service URLs here (one per line)
# These should be the full URLs to your services, e.g., https://your-service.onrender.com
SERVICES=(
  "https://gds-next-prototype.onrender.com/"
  "https://nestjs-frontend-8w7q.onrender.com"
  "https://react-spa-test.onrender.com"
)

# Default interval range between visits (in seconds)
# Random interval will be chosen between MIN_INTERVAL and MAX_INTERVAL
MIN_INTERVAL=${MIN_INTERVAL:-60}
MAX_INTERVAL=${MAX_INTERVAL:-120}

# Endpoint to hit (defaults to root page to mimic browser visit)
ENDPOINT=${ENDPOINT:-"/"}

# Browser User-Agent (mimics Chrome on macOS)
USER_AGENT=${USER_AGENT:-"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"}

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to ping a service (mimics browser visit)
ping_service() {
  local url=$1
  local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
  
  # Remove trailing slash from URL if present, then add endpoint
  local clean_url="${url%/}"
  local full_url="${clean_url}${ENDPOINT}"
  
  echo -e "${BLUE}[${timestamp}]${NC} Visiting ${url} (mimicking browser)..."
  
  # Use curl to mimic a browser request with proper headers
  # -s: silent mode (no progress bar)
  # -f: fail silently on HTTP errors
  # -o /dev/null: discard output
  # -w: write format string for status code
  # -L: follow redirects (like a browser would)
  # --max-time: maximum time in seconds for the request
  # --connect-timeout: timeout for connection
  # -H: add browser-like headers
  if curl -s -f -L -o /dev/null -w "%{http_code}" \
    --max-time 30 \
    --connect-timeout 10 \
    -H "User-Agent: ${USER_AGENT}" \
    -H "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7" \
    -H "Accept-Language: en-GB,en-US;q=0.9,en;q=0.8" \
    -H "Accept-Encoding: gzip, deflate, br" \
    -H "DNT: 1" \
    -H "Connection: keep-alive" \
    -H "Upgrade-Insecure-Requests: 1" \
    -H "Sec-Fetch-Dest: document" \
    -H "Sec-Fetch-Mode: navigate" \
    -H "Sec-Fetch-Site: none" \
    -H "Sec-Fetch-User: ?1" \
    -H "Cache-Control: max-age=0" \
    "${full_url}" > /tmp/curl_status_$$ 2>&1; then
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

# Function to generate random interval between MIN and MAX
get_random_interval() {
  local min=$1
  local max=$2
  # Generate random number between min and max (inclusive)
  echo $((RANDOM % (max - min + 1) + min))
}

# Function to ping all services
ping_all_services() {
  local success_count=0
  local active_count=0
  
  # Count active (non-commented) services
  for service in "${SERVICES[@]}"; do
    # Skip empty lines and comments
    [[ -z "${service}" || "${service}" =~ ^[[:space:]]*# ]] && continue
    ((active_count++))
  done
  
  if [ ${active_count} -eq 0 ]; then
    echo -e "${RED}Error: No services configured!${NC}"
    echo "Please edit this script and add your Render.com service URLs to the SERVICES array."
    echo "Make sure the URLs are not commented out (remove the # at the start of the line)."
    exit 1
  fi
  
  echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo -e "${BLUE}Visiting ${active_count} service(s)${NC}"
  echo -e "${BLUE}(Mimicking browser requests to keep services alive)${NC}"
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
  echo -e "Results: ${GREEN}${success_count}${NC}/${active_count} services responded successfully"
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
  
  # Validate interval range
  if ! [[ "${MIN_INTERVAL}" =~ ^[0-9]+$ ]] || [ "${MIN_INTERVAL}" -lt 30 ]; then
    echo -e "${YELLOW}Warning: MIN_INTERVAL should be at least 30 seconds. Using default of 60 seconds.${NC}"
    MIN_INTERVAL=60
  fi
  
  if ! [[ "${MAX_INTERVAL}" =~ ^[0-9]+$ ]] || [ "${MAX_INTERVAL}" -lt "${MIN_INTERVAL}" ]; then
    echo -e "${YELLOW}Warning: MAX_INTERVAL must be >= MIN_INTERVAL. Setting MAX_INTERVAL to ${MIN_INTERVAL} + 60.${NC}"
    MAX_INTERVAL=$((MIN_INTERVAL + 60))
  fi
  
  # Check if services are configured (will be checked in ping_all_services with better error message)
  
  echo -e "${BLUE}Interval range: ${MIN_INTERVAL}-${MAX_INTERVAL} seconds (randomized)${NC}"
  echo ""
  
  # Run continuously
  while true; do
    ping_all_services
    
    # Generate random interval for this cycle
    local next_interval=$(get_random_interval "${MIN_INTERVAL}" "${MAX_INTERVAL}")
    echo -e "${BLUE}Waiting ${next_interval} seconds until next visit...${NC}"
    echo ""
    sleep "${next_interval}"
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
  echo "  -m, --min SECONDS       Set minimum interval in seconds (default: 60)"
  echo "  -M, --max SECONDS       Set maximum interval in seconds (default: 120)"
  echo "  -e, --endpoint PATH     Set endpoint to visit (default: /)"
  echo ""
  echo "Environment Variables:"
  echo "  MIN_INTERVAL           Minimum visit interval in seconds (default: 60)"
  echo "  MAX_INTERVAL           Maximum visit interval in seconds (default: 120)"
  echo "  ENDPOINT               Endpoint path to visit (default: /)"
  echo "  USER_AGENT             Browser user agent string (default: Chrome on macOS)"
  echo ""
  echo "Configuration:"
  echo "  Edit this script and add your Render.com service URLs to the SERVICES array"
  echo ""
  echo "Note:"
  echo "  The script uses a random interval between MIN_INTERVAL and MAX_INTERVAL"
  echo "  for each cycle to make the pattern less predictable."
  echo ""
  echo "Examples:"
  echo "  $0                                    # Run with default settings (60-120s random)"
  echo "  $0 -m 90 -M 180                      # Random interval between 90-180 seconds"
  echo "  MIN_INTERVAL=45 MAX_INTERVAL=90 $0   # Random interval between 45-90 seconds"
  echo "  ENDPOINT=/health $0                   # Visit /health endpoint instead"
  echo "  ENDPOINT=/api/status $0              # Visit custom endpoint"
  exit 0
fi

# Parse command line arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    -m|--min)
      MIN_INTERVAL="$2"
      shift 2
      ;;
    -M|--max)
      MAX_INTERVAL="$2"
      shift 2
      ;;
    -e|--endpoint)
      ENDPOINT="$2"
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

