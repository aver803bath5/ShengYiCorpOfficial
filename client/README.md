# case-sheng-yi-nuxt

### Deploy

1. `ssh web-admin@www.shengyi.com.tw`
2. `cd /var/www/ShengYiCOrt/client`
3. `git pull origin master`
4. `npm run build`
5. `pm2 restart shengyi`
6. `systemctl restart httpd`
