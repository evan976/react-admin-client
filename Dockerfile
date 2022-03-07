FROM nginx
COPY ./dist/ /usr/share/nginx/html/
  COPY ./host.nginx.conf /etc/nginx/conf.d/react-admin-client.conf
EXPOSE 80
