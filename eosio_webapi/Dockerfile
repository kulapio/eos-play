FROM ubuntu:18.04
LABEL maintainer "Nattapon Nimakul - tot@kulap.io"

COPY server.js /code/server.js

WORKDIR /code

# Install screen
RUN apt-get update -y
RUN apt-get install -y \
    screen nodejs npm \
 && rm -rf /var/lib/apt/lists/*

RUN npm install express cors shelljs sleep
