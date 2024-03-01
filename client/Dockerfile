FROM node:20.11
LABEL maintainer="https://t.me/evgeniy_Wis"

WORKDIR /project/client

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]