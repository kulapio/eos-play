FROM node:8
LABEL maintainer "Nattapon Nimakul - tot@kulap.io"

COPY server.js /code/server.js

WORKDIR /code

# Install screen
RUN apt-get update && apt-get install -y \
    screen* \
 && rm -rf /var/lib/apt/lists/*

RUN npm install express cors shelljs sleep
