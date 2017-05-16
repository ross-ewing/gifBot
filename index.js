const login = require("facebook-chat-api");
var giphy = require('giphy-api')();
var request = require('request');


login({
    email: 'your username',
    password: 'your password'
}, (err, api) => {
    if (err) {
        console.log(err);
    }

    giphy.random('gif search', function(err, res) {
        if (err) {
            console.log(err);
        }

        var gifResolve = res.data.image_url;
        var sendToID = 761050178;
        var options = {
            url: gifResolve,
        }

        var msg = {
            url: gifResolve
        }

        api.sendMessage(msg, sendToID);

        console.log("We sent a gif!");

    });
});
