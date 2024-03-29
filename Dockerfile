# Use the official image as a parent image.
FROM node:16-alpine

# Set the working directory.
WORKDIR /usr/src/app

# Copy the file from your host to your current location.
COPY package.json .
COPY yarn.lock .

# Run the command inside your image filesystem.
RUN yarn install

# Add metadata to the image to describe which port the container is listening on at runtime.
EXPOSE 3000

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . ./

RUN yarn build

# Run the specified command within the container.
CMD [ "yarn", "start" ]