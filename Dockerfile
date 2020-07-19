FROM node:current-alpine3.12
WORKDIR /usr/src/app
COPY ./ ./
RUN yarn add sqlite3
RUN yarn install

