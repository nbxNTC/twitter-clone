FROM node:16-alpine

WORKDIR /code

COPY . .

CMD yarn && yarn dev
