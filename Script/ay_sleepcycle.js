let obj = JSON.parse($response.body);
obj.subscription.features.push("premium-sounds");
obj.subscription.features.push("analysis");
$done({body: JSON.stringify(obj)});