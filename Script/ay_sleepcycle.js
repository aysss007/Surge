let obj = JSON.parse($response.body);
obj.subscription.features.push("premium-sounds");
$done({body: JSON.stringify(obj)});