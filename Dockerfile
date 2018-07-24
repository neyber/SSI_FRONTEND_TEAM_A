FROM node:8.9.3
MAINTAINER Neyber Rojas
RUN npm install -g @angular/cli
RUN npm rebuild node-sass --force
RUN mkdir /code
WORKDIR /code
COPY package.json /code/
ADD . /code/
RUN npm install
CMD [ "ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
