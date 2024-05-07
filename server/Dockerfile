FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon
# Copy backend files
COPY . .

# Expose port
EXPOSE 5000

# Command to run the backend server
CMD ["npm", "start"]
