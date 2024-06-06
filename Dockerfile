# Dockerfile

# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy application files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["yarn", "dev"]
