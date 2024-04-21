if (!$response.body) $done({});
const url = $request.url;
let obj = JSON.parse($response.body);

if (url.includes("/prod")) {
  const existedItems = source[0]['navigationAll']
  const deletedItems = ['出行', '财富']
  
  const length = existedItems.length
  for (var i = 0; i < length; ++i) {
    var item = existedItems[i]
    const itemName = item['lableName']
    if (deletedItems.indexOf(itemName) !== -1) {
      delete existedItems[i]
    } 
  }
} 
