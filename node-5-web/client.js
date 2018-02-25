var http = require('http');
var fs = require('fs');

var opt = {
    host: 'www.google.fr',
    port: 80,
    path: '/',
    method: 'GET'
};

// передали просто url
/*var req = http.request('http://www.google.fr', function(res){
    console.log(res.statusCode);
    res.pipe(process.stdout);
});

req.end();
*/

// передали просто объект с параметрами
/*var req = http.request(opt, function(res){
    console.log(res.statusCode);
    res.pipe(process.stdout);
});

req.end();*/

//сокращенная форма для GET запроса
http.get(opt,function(res){
    console.log(res.statusCode);
    res.pipe(fs.createWriteStream('google.html'));
});


