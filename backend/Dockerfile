# Defining a node image to be used as giving it an alias of "build"
FROM node:alpine AS build
# Create a Working Directory inside the docker image
WORKDIR /app
# Copy package.json package-lock.json into Working Directory
COPY package.json package-lock.json ./
# Install Angular dependencies from the lock file
RUN npm ci --quiet
# Copy files from local machine to Working Directory in docker image
COPY . .
# Run server
CMD ["npm", "run", "start"]
