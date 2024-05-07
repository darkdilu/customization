# Stage 1: Build the React app
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the built files
FROM node:20-alpine

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy the built files from the previous stage
COPY --from=build /app/dist ./dist

EXPOSE 3000

# Command to serve the built React app using serve
CMD ["serve", "-s", "dist"]
