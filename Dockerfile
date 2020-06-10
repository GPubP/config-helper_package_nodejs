FROM node:erbium-alpine

WORKDIR /app

COPY package*.json .npmrc ./

RUN npm ci

COPY . .

RUN npm run test
RUN npm run lint
RUN npm run build
