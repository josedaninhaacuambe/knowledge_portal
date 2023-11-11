# Etapa base
FROM node:latest as base
WORKDIR /src
COPY package*.json ./
EXPOSE 3000

# Etapa de desenvolvimento
FROM base as dev
ENV NODE_ENV=development
COPY . ./
RUN npm install -g nodemon && npm install && npm install --save-dev sequelize-cli
CMD ["nodemon", "bin/www"]

# Etapa de produção
FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY . ./
CMD ["node", "bin/www"]
