# Development

FROM node:18.16-alpine as dev
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
EXPOSE 8001
CMD [ "npm", "run", "start:dev" ]

# Production

FROM node:19-alpine3.15 as prod-deps
WORKDIR /app
COPY package*.json ./
RUN npm install --prod

FROM node:18.16-alpine as prod
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY . .
EXPOSE 8001
CMD [ "npm", "start" ]