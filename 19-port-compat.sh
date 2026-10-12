#!/bin/sh
set -eu
if [ "${PORT:-8080}" != "80" ] && ! grep -q 'listen 80;' /etc/nginx/templates/default.conf.template; then
  sed -i '/listen ${PORT};/a\    listen 80;' /etc/nginx/templates/default.conf.template
fi
