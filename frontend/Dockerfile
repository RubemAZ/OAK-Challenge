# Base image
FROM node:18 AS builder
WORKDIR /app

# Instalar dependências e buildar o projeto
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

# Servir com Next.js
FROM node:18
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["yarn", "start"]
