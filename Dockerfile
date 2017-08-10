FROM node:6

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 8080 80

CMD ["npm", "install"]