FROM nginx:alpine

# Set working dirctory
ENV INSTALL_PATH /capculator

RUN mkdir $INSTALL_PATH
WORKDIR $INSTALL_PATH

# Install nodejs and make
RUN apk add --update nodejs npm make

ADD package* $INSTALL_PATH/
ADD Makefile $INSTALL_PATH/
RUN make setup
ADD . $INSTALL_PATH
RUN make build
# Copy site to nginx directory
RUN cp $INSTALL_PATH/dist/* /usr/share/nginx/html/
