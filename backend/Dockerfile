# Base image
FROM node:18
WORKDIR /app

# Instalar dependências
COPY package.json yarn.lock ./
RUN yarn install

# Copiar o código
COPY . .

# Prisma
RUN npx prisma generate

EXPOSE 5000
CMD ["yarn", "start"]
