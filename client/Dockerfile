FROM node:20-alpine
LABEL maintainer="https://t.me/evgeniy_Wis"

WORKDIR /project/client

COPY package.json .
COPY package-lock.json .

RUN npm install --force

COPY . .

EXPOSE 5173

ENTRYPOINT ["npm"]

CMD ["run", "dev"]