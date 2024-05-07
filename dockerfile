FROM node:22-alpine

WORKDIR /app

COPY . .

EXPOSE 3000

RUN npm install
RUN npm install -g nodemon

CMD npm start
