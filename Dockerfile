FROM nginx
COPY ./dist/ /usr/share/nginx/html
COPY ./web.nginx.conf /etc/nginx/conf.d/web.nginx.conf
EXPOSE 80
