# Specify base image
FROM node:latest

# Create app directory inside container
WORKDIR /usr/src/app

# Install app dependencies by copying package*.json files to the current container directory
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Your app binds to port 5010 so you'll use the EXPOSE instruction to have it mapped by the docker daemon:
EXPOSE 8080

#Last but not least, define the command to run your app using CMD which defines your runtime. Here we will use node server.js to start your server:
CMD [ "node", "server.js" ]