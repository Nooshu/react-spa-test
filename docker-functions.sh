# Add these functions to your ~/.zshrc for global Docker commands

# Docker commands for React A11y Test project
docker-up() {
    local project_dir="/Users/MattHobbs/Development/react-a11y-test"
    if [ -d "$project_dir" ]; then
        (cd "$project_dir" && docker-compose up)
    else
        echo "❌ React A11y Test project not found at $project_dir"
        echo "   Please update the path in your ~/.zshrc"
    fi
}

docker-down() {
    local project_dir="/Users/MattHobbs/Development/react-a11y-test"
    if [ -d "$project_dir" ]; then
        (cd "$project_dir" && docker-compose down)
    else
        echo "❌ React A11y Test project not found at $project_dir"
        echo "   Please update the path in your ~/.zshrc"
    fi
}

docker-build() {
    local project_dir="/Users/MattHobbs/Development/react-a11y-test"
    if [ -d "$project_dir" ]; then
        (cd "$project_dir" && docker build -t react-a11y-test .)
    else
        echo "❌ React A11y Test project not found at $project_dir"
        echo "   Please update the path in your ~/.zshrc"
    fi
}

docker-dev() {
    local project_dir="/Users/MattHobbs/Development/react-a11y-test"
    if [ -d "$project_dir" ]; then
        (cd "$project_dir" && docker-compose --profile dev up)
    else
        echo "❌ React A11y Test project not found at $project_dir"
        echo "   Please update the path in your ~/.zshrc"
    fi
}

docker-logs() {
    local project_dir="/Users/MattHobbs/Development/react-a11y-test"
    if [ -d "$project_dir" ]; then
        (cd "$project_dir" && docker-compose logs -f)
    else
        echo "❌ React A11y Test project not found at $project_dir"
        echo "   Please update the path in your ~/.zshrc"
    fi
}
