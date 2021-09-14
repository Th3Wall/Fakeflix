# Step 1: Build React
FROM node:14 as build

RUN mkdir /app
WORKDIR /app

# Add the source code to app
COPY ./ /app

# Install all the dependencies && Generate the build of the application
RUN npm install 
RUN npm rebuild node-sass
RUN npm run build


# Stage 2: Serve app with nginx server
# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/build /usr/share/nginx/html

# Copy NGINX file
COPY nginx/nginx.config /etc/nginx

# Expose port 80
EXPOSE 80
EXPOSE 443