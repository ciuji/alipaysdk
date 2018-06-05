var express = require('express');
var app = express();
var sign= require("./hellosign")

app.get('/', function(req, res){
    var content = 'hello world<hr>';
    content += '<form action="/api/getUser">';
    content += '<input type="submit">';
    content += '</form>';
    res.send(content);
});

app.get('/data', function(req, res){
    res.send('{ "name": "hello world" }');
});

app.get('/api/getUser', function(req, res){
    sign.find(req, function(data){
        //res.render('ruleConfig.html',{user:data});
        res.contentType('json');
        //var data = { name: 'jack' };
        res.write(JSON.stringify(data));
        res.end();
    })
})

app.post('/api/getUser', function(req, res){
    sign.find(req, function(res, data){
        res.contentType('json');
        res.write(JSON.stringify(data));
        res.end();
    })
})

console.log('web server on port 3000');
app.listen(3000);
