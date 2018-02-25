var request = require('request');
var fs = require('fs');

//var s  = request('https://app.pluralsight.com/library/'); // return readable stream
//s.pipe(process.stdout);

//shorter
//request('https://app.pluralsight.com/library/').pipe(process.stdout); 

//write to a file
request('https://app.pluralsight.com/library/').pipe(fs.createWriteStream('pluralsight.html')); 