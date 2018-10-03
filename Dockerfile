FROM nginx:alpine
COPY nginx-config/nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
copy dist/ .
