FROM node:current-alpine3.12
WORKSPACE /usr/src/app
COPY ./ ./
CMD npm install
