# Use the official Node.js image as a base
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Vite globally for build and preview commands
RUN npm install -g vite

# Copy the rest of the application code
COPY . .

# Build the Vite app for production
RUN npm run build

# Expose the port that matches your Kubernetes configuration
EXPOSE 5174

# Start the Vite preview server binding to 0.0.0.0 and port 5173
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "5174"]
