FROM nginx
COPY ./dist/ /usr/web/react-admin-client
COPY ./web.nginx.conf /etc/nginx/conf.d/web.nginx.conf
EXPOSE 80
