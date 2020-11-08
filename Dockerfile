FROM node:13.8.0-slim

RUN mkdir /src
WORKDIR /src

RUN npm install pm2 -g

ADD package.json /src/package.json

RUN npm install

EXPOSE 443
EXPOSE 80

CMD yarn start && yarn run logs
