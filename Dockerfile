FROM ubuntu:latest

ARG GIT_DEPLOYED_SHA
ENV GIT_DEPLOYED_SHA ${GIT_DEPLOYED_SHA}
ARG USAFB_API_URL
ENV USAFB_API_URL ${USAFB_API_URL}

COPY . /application

RUN apt-get update && \
		apt-get install -y nginx

RUN groupmod --gid 80 --new-name www www-data && \
    usermod --uid 80 --home /data/www --gid 80 --login www --shell /bin/bash --comment www www-data

RUN groupadd www-data && useradd -g www-data www-data

COPY /docker/nginx/nginx.conf /etc/nginx/default.conf.tpl

RUN ln -sf /dev/stdout /var/log/nginx/access.log && ln -sf /dev/stderr /var/log/nginx/error.log
RUN ln -sf /dev/stdout /var/log/nginx/application.access.log && ln -sf /dev/stderr /var/log/nginx/nginx_error_log.log

EXPOSE 80 443

ENTRYPOINT . /application/start_nginx.sh