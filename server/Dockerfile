# Stage 1: Build Node.js application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon

# Copy backend files
COPY . .

# Expose port (if needed)
EXPOSE 5000

# Command to run the backend server
CMD ["npm", "start"]

# Stage 2: Build final image with MongoDB
FROM mongo:latest

# No need to specify any additional configurations if you're using the MongoDB image as is
