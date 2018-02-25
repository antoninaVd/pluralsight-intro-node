process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(data){
    process.stdout.write('Data -> '+data);
});

process.stdin.on('end', function(){
    process.stderr.write('End!');
});