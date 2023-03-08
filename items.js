var stickersArray = [];
async function Info() {
    try {
        const options = {
            url: `https://csgofloat.com/api/v1/me/inventory`,
            headers: {
                'Authorization': '',
                'Content-Type': 'application/json'
            },
            json: true
        };
        const output = await require('request-promise')(options);
        for (var i = 0; i < output.length; i++) {
            var assetid = output[i]["asset_id"];
            var name = output[i]["market_hash_name"];
            var float_value = output[i]["float_value"];
            if (output[i]["stickers"]) {
                for (var j = 0; j < output[i]["stickers"].length; j++) {
                    var stickers = output[i]["stickers"][j]["name"];
                    stickersArray.push(stickers);
                }
                console.log(assetid + " " + name + " " + float_value + "\n " + stickersArray.join("\n ") + "\n");
                stickersArray = [];
            }
            // else (console.log(assetid + " " + name + " " + float_value));

        }
    } catch (err) {
        console.log(err);
    }
}

Info();