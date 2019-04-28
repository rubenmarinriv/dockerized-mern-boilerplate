# node image, alpine is lighter
FROM node:10.15.3-alpine

# create app directory
WORKDIR /usr/src/app

# copy package.json and package package-lock.json
# to the WORKDIR
COPY package*.json ./

# install app dependencies
RUN npm install

# bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
