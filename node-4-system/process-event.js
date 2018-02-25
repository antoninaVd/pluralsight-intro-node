process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(data){
    process.stdout.write('Data -> '+data);
});

process.stdin.on('end', function(){
    process.stderr.write('End!');
});

process.stdin.on('SIGTERM', function(){
    process.stdout.write('Why are you trying to terminate me?');
});

console.log('Process id is '+ process.pid);