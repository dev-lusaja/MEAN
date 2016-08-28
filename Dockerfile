FROM node:0.12

ADD . /usr/local/mean
WORKDIR /usr/local/mean

RUN npm install nodemon -g
RUN npm install

CMD ["nodemon", "-L", "app/server.js"]