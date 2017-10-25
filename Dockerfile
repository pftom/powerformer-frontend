FROM alpine

COPY build /pf-client

VOLUME [ "/pf-client" ]