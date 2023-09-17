FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
# prod or dev
RUN npm run build:prod

CMD ["npm", "start"]
