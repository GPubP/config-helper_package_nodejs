FROM node:hydrogen

WORKDIR /app

COPY package*.json .npmrc ./

RUN npm ci

COPY . .

RUN npm run test
RUN npm run lint
RUN npm run build
