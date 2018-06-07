## intro
use [alipay-sdk](https://www.npmjs.com/package/alipay-sdk) to get user information to validate wheather a user is a real name user. <br>
read [alipay-sdk探究](http://ciuji.me/#/post/10) for more information.

## simple process description
1. use `express` to run a server as the redirect_url to receive the request from alipay.
2. open a url such as `https://openauth.alipay.com/oauth2/appToAppAuth.htm?app_id=2015101400446982&redirect_uri=http%3A%2F%2Fexample.com` to login.
3. send a request to alipay, then alipay would send another request to your redirect_url in process 1.
4. run `node appauthtoken.js`: change the auth_code to access_token.
5. run `node main.js`: use access_token to get user info.
