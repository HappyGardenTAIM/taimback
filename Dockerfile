# Use an official Node.js runtime as the base image
FROM --platform=linux/amd64 node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Generate database
RUN npx prisma generate

# Expose a port (if needed)
EXPOSE 4000

# Define the command to run your application
CMD [ "npm", "start" ]