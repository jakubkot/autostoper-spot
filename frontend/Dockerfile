### STAGE 1:BUILD ###
# Defining a node image to be used as giving it an alias of "build"
FROM node:alpine AS build
# Create a Working Directory inside the docker image
WORKDIR /app
## Install Angular CLI
RUN npm install -g @angular/cli
# Copy package.json package-lock.json into Working Directory
COPY package.json package-lock.json ./
# Install Angular dependencies from the lock file
RUN npm ci --quiet
# Copy files from local machine to Working Directory in docker image
COPY . .
# Build project
RUN ng build --configuration production --base-href=/s/ --deploy-url=/s/ # todo przerzucić gdzieindziej konfigurację, żeby nie instalować cli

### STAGE 2:RUN ###
# Defining nginx image to be used
FROM nginx:latest AS nginx
# Copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf
# Copying compiled app from the build image into node's Root Directory
COPY --from=build /app/dist/spot /usr/share/nginx/html
