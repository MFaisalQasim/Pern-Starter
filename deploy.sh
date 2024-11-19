#!/bin/bash
echo "Deployment in progress."

# Define the directory where your app is located
APP_DIR="/home/projects/kidz_bloom_backend/"

# Navigate to the application directory
cd "$APP_DIR" || { echo "Failed to navigate to $APP_DIR. Exiting."; exit 1; }

# Mark the current repository as a safe directory
git config --global --add safe.directory $APP_DIR || { echo "Failed to mark $APP_DIR as a safe directory for Git. Exiting."; exit 1; }



# Pull the latest code from the main branch

git fetch origin main
git reset --hard origin/main
git pull origin main || { echo "Git pull failed. Exiting."; exit 1; }

docker compose down || { echo "Removing the current container "; exit 1; }
# Cleaning up docker system
yes | docker system prune || { echo "Cleaning up docker system "; exit 1; }

# Building docker compose file
docker compose up -d --build || { echo "Docker compose failed. Exiting."; exit 1; }



echo "Deployment successful."
