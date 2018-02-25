maxTime = 1000;

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
};

var eventDoublerSync = function(v){
    if(v%2){
        throw(new Error('Odd input'));
    } else {
        return v*2;
    }
}

module.exports.eventDoubler = eventDoubler;
module.exports.eventDoublerSync = eventDoublerSync;
module.exports.foo = 'Hi';

