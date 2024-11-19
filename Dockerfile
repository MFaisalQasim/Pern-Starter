# Use an official Node.js alpine image runtime as the base image
FROM node:18-alpine3.18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Expose port 3089
EXPOSE 3092

# start the server
CMD [ "npm", "start" ]