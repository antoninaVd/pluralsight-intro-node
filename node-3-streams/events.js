var EventEmmiter = require("events").EventEmitter;

var getResources = function(c){
    var e = new EventEmmiter();
    process.nextTick(function(){
        e.emit('start');
        var count = 0;
        var t = setInterval(function(){
            e.emit('data', ++count);

            if(count === c){
                e.emit('end');
                clearInterval(t);
            }

        },10);
    });
    return(e);
}

var res = getResources(5);

res.on('start', function(){
    console.log('START');
});

res.on('data', function(d){
    console.log('result -> '+d);
});

res.on('end', function(){
    console.log('END');
});