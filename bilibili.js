let body = $response.body;
if (body) {
	switch (!0) {
		case /^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab/.test($request.url):
			try {
				const a = new Set([177, 179, 181]);
				let b = JSON.parse(body);
				let c = b.data.bottom.filter(b => a.has(b.id));
				b.data.bottom = c
				body = JSON.stringify(b)
			} catch (a) {
				console.log(`bilibili tabprocess:` + a)
			}
			break;
		case /^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine/.test($request.url):
			try {
				let a = JSON.parse(body);
				const b = new Set([396, 397, 2830, 3072]);
				a.data.sections_v2.forEach((c, d) => {
					let e = c.items.filter(a => b.has(a.id));
					a.data.sections_v2[d].items = e;
					a.data.sections_v2[d].button = {}
				});
			    body = JSON.stringify(a)
			} catch (a) {
				console.log(`bilibili mypage:` + a)
			}
			break;
		default:
			$done({});
	}
	$done({
		body
	})
} else $done({});
