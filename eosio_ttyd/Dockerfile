FROM eosio/eos-dev as eosdev

FROM tsl0922/ttyd:latest
LABEL maintainer "Nattapon Nimakul - tot@kulap.io"

COPY --from=eosdev /usr/local/lib/* /usr/local/lib/
COPY --from=eosdev /opt/eosio/bin /opt/eosio/bin
COPY --from=eosdev /contracts /contracts
COPY --from=eosdev /config.ini /
COPY --from=eosdev /etc /etc
COPY --from=eosdev /opt/eosio/bin/nodeosd.sh /opt/eosio/bin/nodeosd.sh

ENV EOSIO_ROOT=/opt/eosio
RUN chmod +x /opt/eosio/bin/nodeosd.sh
ENV LD_LIBRARY_PATH /usr/local/lib
ENV PATH /opt/eosio/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

# Install screen
RUN apt-get update -y
RUN apt-get install -y screen

COPY runkeosd /runkeosd
RUN chmod +x /runkeosd

# For unknow reason (maybe a bug), To make cleos work we need to run cleos locally
RUN echo "alias cleos='cleos --url http://eosio:8888 --wallet-url http://eosio:8888'" >> /root/.bashrc

CMD /runkeosd && screen -S kulap bash