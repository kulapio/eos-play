FROM ubuntu:18.04
LABEL maintainer "Nattapon Nimakul - tot@kulap.io"

# Install screen, nodejs
RUN apt-get update -y
RUN apt-get install -y screen nodejs npm
RUN npm install -g yarn
RUN yarn add express body-parser cookie-parser \
    shelljs @vue/cli @vue/cli-init axios sleep
COPY code /code
# CMD node /code/server.js