FROM node:19-alpine3.15
WORKDIR /app/

COPY package.json package-lock.json ./

RUN npm install
