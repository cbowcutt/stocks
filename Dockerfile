FROM node:current-alpine3.12
WORKDIR /usr/src/app
COPY ./ ./
CMD npm install
