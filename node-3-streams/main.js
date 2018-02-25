var mathfun = require("./mathfun");

mathfun.eventDoubler(2,function(err, results, time){
    if(err){
        console.log("ERROR: " + err.message);
    } else {
        console.log("Result: "+results + " ("+time+")");
    }
});

var count = 0;

for(var i = 0; i<10; i++){
    console.log("Number "+i);

    mathfun.eventDoubler(i,function(err, results, time){
        if(err){
            console.log("ERROR: " + err.message);
        } else {
            console.log("Result: "+results + " ("+time+")");
        }

        count = count + 1;
        if(count == 10){
            console.log("Done");
        }
    });
}
    
