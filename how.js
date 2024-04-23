if (!$response.body) $done({});
const url = $request.url;
let obj = JSON.parse($response.body);

if (url.includes("/center220430")) {
  delete obj['data']['instantConfig']
  delete obj['data']['myUseFuntion']
  delete obj['data']['mineResource']
  delete obj['data']['myCreatorFunction']
} 

$done({ body: JSON.stringify(obj) });
