var express = require('express');
var app = express();
var AlipaySdk = require("alipay-sdk");

var fs = require("fs");

const alipaySdk = new AlipaySdk.default({
  appId: "2018053160267402",
  privateKey: fs.readFileSync("./RSA/private-key.pem", "ascii"),
  alipayPublicKey: fs.readFileSync("./RSA/public-key.pem", "ascii"),
});

var func = async function () {
  try {
    const result = await alipaySdk.exec("alipay.user.info.share", {
      app_id:"2018053160267402",
      method: "alipay.user.info.share",
      format: "json",
      charset: "UTF-8",
      sign_type: "RSA2",
      timestamp: "2018-06-04 12:56:02",
      version: "1.0",
      auth_token:"authusrB6ec47a730e0548f88adcbb65afd4bX77",
      //app_auth_token: "201806BB5b522cbf922e425cb623f2e8b954cF77",
     
    }, {
        validatieSign:true,
        log: this.logger,
      });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
func(); 
 
/* var func = async function () {
  try {
    const result = await alipaySdk.exec("alipay.system.oauth.token", {
      app_id:"2018053160267402",
      method: "alipay.system.oauth.token",
      format: "json",
      charset: "UTF-8",
      sign_type: "RSA2",
      timestamp: "2018-06-04 12:56:02",
      version: "1.0",
      //auth_token:"authusrBe48828282d4545d1a772063a12264A77",
      //app_auth_token: "201806BB5b522cbf922e425cb623f2e8b954cF77",
      grant_type:"authorization_code",
      code:"a699289fb44a41cba24eb52c43f4SC77",
      //code:"da5c82e6cc7c4f6d8840496ea747OC77",
       bizContent: {
        grant_type:"authorization_code",
        code:"a699289fb44a41cba24eb52c43f4SC77",
        //app_auth_token: "201806BBd1177804a3494e679498f5756c057X77",
      }, 
    }, {
        validatieSign:true,
        log: this.logger,
      });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
func();  */

/*  var func = async function () {
  try {
    const result = await alipaySdk.exec("alipay.open.auth.token.app.query", {
      app_id:"2018053160267402",
      method: "alipay.open.auth.token.app.query",
      format: "json",
      charset: "UTF-8",
      sign_type: "RSA2",
      timestamp: "2018-06-04 12:56:02",
      version: "1.0",
      //app_auth_token: "201806BBd1177804a3494e679498f5756c057X77",
      //grant_type:"authorization_code",
      bizContent: {
        //grant_type:"authorization_code",
        //code:"c4d5dcbea95f40d386c970e9d4dedD77",
        app_auth_token: "201806BBd1177804a3494e679498f5756c057X77",
      },
    }, {
        validatieSign: true,
        log: this.logger,
      });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
func(); */
 

/* 成功
{ code: '10000',
  msg: 'Success',
  appAuthToken: '201805BBa17913b057f5458a90cbd5b17ce56X24',
  appRefreshToken: '201805BBf214155a5ca2458eaae546649b056X24',
  authAppId: '2018053101228871',
  expiresIn: 31536000,
  reExpiresIn: 32140800,
  tokens:
   [ { app_auth_token: '201805BBa17913b057f5458a90cbd5b17ce56X24',
       app_refresh_token: '201805BBf214155a5ca2458eaae546649b056X24',
       auth_app_id: '2018053101228871',
       expires_in: 31536000,
       re_expires_in: 32140800,
       user_id: '2088102176137242' } ],
  userId: '2088102176137242' } */

/*   { accessToken: 'authusrBe48828282d4545d1a772063a12264A77',
  alipayUserId: '20880054990239181745016951317777',
  expiresIn: 1296000,
  reExpiresIn: 2592000,
  refreshToken: 'authusrBe181cbb3ccd34578ac9dbc74c81d1X77',
  userId: '2088212119066770' }
   16c53da30b614d9297a55f9edb0cXX77 
   authusrB6ec47a730e0548f88adcbb65afd4bX77
*/