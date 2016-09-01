FROM node:0.12

ADD . /usr/local/mean
WORKDIR /usr/local/mean

RUN chmod 755 wait-for-it.sh
RUN npm install nodemon -g
RUN npm install