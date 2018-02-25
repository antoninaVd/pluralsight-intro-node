var request = require('request');

var s = request('https://app.pluralsight.com/library/'); //вернет stream

s.on('data', function(data){
    console.log('>>>>>Data>>>>>'+data);
});

s.on('end', function(){
    console.log('>>>>>Done>>>>>');
});

