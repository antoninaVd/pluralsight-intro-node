var Resource = require('./resource');

var res = new Resource(3);

res.on('start', function(){
    console.log('START');
});

res.on('data', function(d){
    console.log('result -> '+d);
});

res.on('end', function(){
    console.log('END');
});