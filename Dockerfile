# Build stage
FROM node:18 AS build

WORKDIR /app

# Copy package.json and package-lock.json for installing dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy the built application from the build stage
COPY --from=build /app/dist ./dist
COPY package*.json ./

# Install only production dependencies, including vite
RUN npm install --production=false

# Add a non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Set environment variable
ENV NODE_ENV=production

# Expose the port your app is running on
EXPOSE 5173

# Health check to ensure the app is running
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s \
  CMD curl -f http://localhost:5173 || exit 1

# Command to start the application in preview mode
CMD ["npm", "run", "preview"]