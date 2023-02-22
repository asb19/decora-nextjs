# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install app dependencies
RUN yarn install --network-timeout 100000

# Copy the rest of the app source code to /app
COPY . .

# Build the app
RUN yarn build

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]
