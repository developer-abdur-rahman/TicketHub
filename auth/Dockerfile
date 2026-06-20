FROM node:alpine

RUN npm install -g pnpm

WORKDIR /app

COPY pnpm-workspace.yaml ./
COPY package.json pnpm-lock.yaml* ./

RUN pnpm install

COPY . .

CMD [ "pnpm", "run", "dev"]