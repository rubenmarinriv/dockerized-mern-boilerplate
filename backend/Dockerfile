# node image, alpine is lighter
FROM node:10.15.3-alpine

# create app directory
WORKDIR /usr/src/app

# copy package.json and package package-lock.json
# to the WORKDIR
COPY package*.json ./

# install app dependencies
RUN npm install
# if you are building your code for production
# RUN npm ci --only=production

# bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "run", "dev" ]
