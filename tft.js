if (!$response.body) $done({});
const url = $request.url;
let obj = JSON.parse($response.body);

if (url.includes("/prod")) {
  const deletedItems = ['出行', '财富']
  for (var i = 0; i < 2; ++i) {
      const existedItems = source[i]['navigationAll']
      const output = existedItems.filter((item) => {
          const itemName = item['lableName']
          return deletedItems.indexOf(itemName) === -1
      })
      source[i]['navigationAll'] = output

      const conentItems = source[i]['content']
      const output2 = conentItems.filter((item) => {
          const sortIndex = parseInt(item['sort'])
          return sortIndex < 2
      })
      source[i]['content'] = output2
  }
} 

$done({ body: JSON.stringify(obj) });
