# case-sheng-yi-nuxt

### Deploy

1. `ssh web-admin@xxxxxxx`
2. `cd /var/www/xxxxxxx/client`
3. `git pull origin master`
4. `npm run build`
5. `pm2 restart shengyi`
6. `systemctl restart httpd`
