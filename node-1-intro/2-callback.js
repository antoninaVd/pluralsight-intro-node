var maxTime = 1000;

var eventDoubler = function(v, callback){
    var waitTime = Math.floor(Math.random()*(maxTime+1));
    if(v%2){
        setTimeout(function(){
            callback(new Error("Odd number"));
        }, waitTime);
    } else {
        setTimeout(function(){
            callback(null, v*2, waitTime);
        }, waitTime);
    }
}

eventDoubler(2, function(err, results, time){
    if(err){
        console.log("ERROR: "+err.message);
    } else {
        console.log("Result:" +results+" ("+time+")");
    }
});

var count = 0;
for(var i=0; i<10; i++){
    console.log("Write number "+i);
    eventDoubler(i, function(err, results, time){
        if(err){
            console.log("ERROR: "+err.message);
        } else {
            console.log("Result:" +results+" ("+time+")");
        }

        count = count + 1;
        if(count == 10){
            console.log("Done");
        }

    });
}

