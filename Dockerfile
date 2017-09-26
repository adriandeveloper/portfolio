FROM node:6

COPY . /app

WORKDIR /app

RUN rm -rf node_modules && npm install

EXPOSE 8080 80
