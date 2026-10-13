FROM nginx:stable-alpine
ENV PORT=8080
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
COPY landing*.css app*.js /usr/share/nginx/html/
COPY index.html robots.txt sitemap.xml ads.txt app-ads.txt delete-account.html /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
COPY en /usr/share/nginx/html/en
COPY privacy /usr/share/nginx/html/privacy
COPY datingmatch /usr/share/nginx/html/datingmatch
COPY 19-port-compat.sh /docker-entrypoint.d/19-port-compat.sh
RUN chmod +x /docker-entrypoint.d/19-port-compat.sh
EXPOSE 80 8080
