if (!$response.body) $done({});
const url = $request.url;
let obj = JSON.parse($response.body);

if (url.includes("/prod")) {
  const deletedItems = ['出行', '财富']
  for (var i = 0; i < 2; ++i) {
      const existedItems = obj[i]['navigationAll']
      obj[i]['navigationAll'] = existedItems.filter((item) => {
          const itemName = item['lableName']
          return deletedItems.indexOf(itemName) === -1
      })

      const contentItems = obj[i]['content']
      obj[i]['content'] = contentItems.filter((item) => {
          const sortIndex = parseInt(item['sort'])
          return sortIndex < 2
      })
  }
} 

$done({ body: JSON.stringify(obj) });
