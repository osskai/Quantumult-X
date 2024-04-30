/******************************
脚本功能：cubox VIP
下载地址：http://mtw.so/5IpOxH
软件版本：7.1.1
脚本作者：osskai
更新时间：2024-04-30
*******************************

[rewrite_local]

^https:\/\/cubox\.pro\/c\/api\/userInfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/cubox.js

[mitm] 

hostname = cubox.pro

*******************************/

if (!$response.body) $done({})
const url = $request.url;
let obj = JSON.parse($response.body);

if (url.includes('/userInfo') != -1) {
  obj.data.level = 1;
  obj.data.expireTime = "2099-09-12T23:50:23+08:00";
  obj.data.nickName = "Kaien";
  obj.data.thirdNickName = "Kaien";
  obj.data.isExpire = false;
  obj.data.active = true;
  obj.data.payTime = 1660006006;
}

$done({ body: JSON.stringify(obj) });
