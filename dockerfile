FROM node:lts-alpine as build-stage

WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install --production
COPY . /usr/src/app
ENV NODE_ENV=production

EXPOSE 80
CMD [ "node", "server.js" ]

