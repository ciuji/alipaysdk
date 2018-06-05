var http = require('http');
var url = require('url');
var util = require('util');
 
//req 请求信息   res返回信息
http.createServer(function(req, res){
    res.writeHeader(200, {'Content-Type':'text/javascript;charset=UTF-8'});  //状态码+响应头属性

    // 解析 url 参数
    var params = url.parse(req.url, true).query;  //parse将字符串转成对象,req.url="/?url=123&name=321"，true表示params是{url:"123",name:"321"}，false表示params是url=123&name=321
    console.log(params);
    res.write("params:" + params[1]);
    res.write("\n");

    res.end();
 
}).listen(3000);