FROM nginx:stable-alpine
ENV PORT=8080
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
COPY index.html landing.css app.js robots.txt sitemap.xml ads.txt app-ads.txt delete-account.html /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
COPY privacy /usr/share/nginx/html/privacy
COPY datingmatch /usr/share/nginx/html/datingmatch
EXPOSE 8080
