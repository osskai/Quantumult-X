if (!$response.body) $done({});
const url = $request.url;
let obj = JSON.parse($response.body);

if (url.includes("/prod")) {
  const deletedItems = ['出行', '财富']
  for (var i = 0; i < 2; ++i) {
      const existedItems = obj[i]['navigationAll']
      const output = existedItems.filter((item) => {
          const itemName = item['lableName']
          return deletedItems.indexOf(itemName) === -1
      })
      obj[i]['navigationAll'] = output

      const contentItems = obj[i]['content']
      const output2 = contentItems.filter((item) => {
          const sortIndex = parseInt(item['sort'])
          return sortIndex < 2
      })
      obj[i]['content'] = output2
  }
} 

$done({ body: JSON.stringify(obj) });
