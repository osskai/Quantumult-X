/******************************
脚本功能：money VIP
下载地址：http://mtw.so/5IpOxH
软件版本：7.1.1
脚本作者：osskai
更新时间：2025-04-26
*******************************

[rewrite_local]

^https:\/\/api\.qianjiapp\.com\/vip\/configios url script-response-body https://raw.githubusercontent.com/osskai/Quantumult-X/main/money.js

[mitm] 

hostname = qianjiapp.com

*******************************/

if (!$response.body) $done({})
const url = $request.url;
let obj = JSON.parse($response.body);

if (url.includes('/configios') != -1) {
  obj.data.config.userinfo.vipstart = Date.parse("2025-04-01T23:50:23+08:00");
  obj.data.config.userinfo.vipend = Date.parse("2099-04-01T23:50:23+08:00");
  obj.data.config.userinfo.viptype = 100;
}

$done({ body: JSON.stringify(obj) });
