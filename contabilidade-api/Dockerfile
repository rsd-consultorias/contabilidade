FROM node:16

COPY package*.json ./

RUN npm i

COPY ./build/ .
COPY ./build/core ./core

EXPOSE 4201
CMD ["node", "index.js"]