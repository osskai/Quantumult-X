if (!$response.body) 
const url = $request.url;
let obj = JSON.parse($response.body);

if (url.includes("/center220430")) {
  delete obj['data']['instantConfig']
  delete obj['data']['myUseFuntion']
  delete obj['data']['mineResource']
  delete obj['data']['myCreatorFunction']
  obj['data']['top_rightset'].pop()

  $done({ body: JSON.stringify(obj) });
} else if (url.includes("/tab2017")) {
  const keptItems = ['个人中心']
  const newTabSet = obj['data']['tab_set'].filter((item) => {
    const itemTitle = item['title']
    return keptItems.indexOf(itemTitle) !== -1
  })
  obj['data'] = {}
  obj['data']['tab_set'] = newTabSet

  $done({ body: JSON.stringify(obj) });
}

$done({});
