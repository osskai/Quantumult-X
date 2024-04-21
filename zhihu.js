if (!$response.body) $done({});
const url = $request.url;
let obj = JSON.parse($response.body);

if (url.includes("/api/v4/answers")) {
  if (obj?.data) {
    delete obj.data;
  }
  if (obj?.paging) {
    delete obj.paging;
  }
} else if (url.includes("/api/v4/articles")) {
  const item = ["ad_info", "paging", "recommend_info"];
  item.forEach((i) => {
    delete obj[i];
  });
}
