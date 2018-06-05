var express = require('express');
var app = express();
var AlipaySdk = require("alipay-sdk");

var fs = require("fs");


//19fdddcf7d7d48f8a3a4c3d52349aX77
const alipaySdk = new AlipaySdk.default({
    appId: "2018053160267402",
    privateKey: fs.readFileSync("./RSA/private-key.pem", "ascii"),
    alipayPublicKey: fs.readFileSync("./RSA/public-key.pem", "ascii"),
});
var func = async function () {
    try {
        const result = await alipaySdk.exec("alipay.open.auth.token.app", {
            app_id:"2018053160267402",
            //app_id: "2016091400510407",
            method: "alipay.open.auth.token.app",
            format: "JSON",
            charset: "utf-8",
            sign_type: "RSA2",
            //     sign:"NAb2CT0g7BACAq1ZEw8F7J6bXKsYbCccnlz7rM67CueSV0mJS21NWII2kTplus43O5xpfN7m7ztK/P6NP/6x/7l83QwX87hIABV5CeioPAXEzZ+VVhewNMvjSPcLe1pYobxzNbFpRHeYIZqHW38aUMUcll1yL0G2r6L6pSdl+h/XPHsS/ytVF/JHgHH/Y61hx/dQFCY5wTYiCP2JE1u+Qgb0dmG/pjjHLTdOJARH8YSkLQVKLGNkUTLP0o7ipJN2MzHQc1f61sk7UPfOwKmU7Sjbii2Zymcc5b3i7qsBuN35EQ4OglknuEoucIiDdAbZ7EK3kMzSGJMLnHUJbNpNLg==",
            timestamp: "2018-06-01 12:56:02",
            version: "1.0",
            bizContent: {
                grant_type: "authorization_code",
                code: "6de905eb85b740d28d878699f2657X77",
            }
        }, {
                log: this.logger,
            });
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
func();

/*{ code: '10000',
  msg: 'Success',
  appAuthToken: '201806BB5b522cbf922e425cb623f2e8b954cF77',
  appRefreshToken: '201806BB0b7ffd409b1b4b95a4f27c6295f59X77',
  authAppId: '2018060360283641',
  expiresIn: 31536000,
  reExpiresIn: 32140800,
  tokens:
   [ { app_auth_token: '201806BB5b522cbf922e425cb623f2e8b954cF77',
       app_refresh_token: '201806BB0b7ffd409b1b4b95a4f27c6295f59X77',
       auth_app_id: '2018060360283641',
       expires_in: 31536000,
       re_expires_in: 32140800,
       user_id: '2088212119066770' } ],
  userId: '2088212119066770' }*/