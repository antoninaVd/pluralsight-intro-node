var assert = require('assert');
var fun = require('./mathfun');

//tests for sync function
assert.equal(fun.eventDoublerSync(2),4);
assert.throws(function(){
    fun.eventDoublerSync(3);
}, /Odd/);


//test for async function
fun.eventDoubler(2, function(err, res){
    assert.ifError(err);
    assert.equal(res, 4, 'eventDoubler failed on even number');
});

fun.eventDoubler(3, function(err, res){
    assert.notEqual(err, null);
});