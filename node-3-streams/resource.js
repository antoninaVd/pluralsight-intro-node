var util = require('util');
var EventEmmiter = require('events').EventEmitter;

function Resource(c){
    var self = this;
    process.nextTick(function(){
        self.emit('start');
        var count = 0;
        var t = setInterval(function(){
            self.emit('data', ++count);

            if(count === c){
                self.emit('end');
                clearInterval(t);
            }

        },10);
    });
}

util.inherits(Resource, EventEmmiter);

module.exports = Resource;