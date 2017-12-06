#!/bin/bash

echo "::> creating nginx conf"
sed -e "s~%%USAFB_API_URL%%~$USAFB_API_URL~" \
    -e "s~%%GIT_DEPLOYED_SHA%%~$GIT_DEPLOYED_SHA~" \
	/etc/nginx/default.conf.tpl > /etc/nginx/conf.d/default

cp /etc/nginx/conf.d/default /etc/nginx/sites-available/default

echo "::> starting nginx"
nginx -g "daemon off;"
