var should = require('should');
var fun = require('./mathfun');

describe('MathFun', function(){
    describe('When used sync', function(){
        it('should doble even number', function(){
            fun.eventDoublerSync(2).should.equal(4);
        });

        it('should throw an odd number', function(done){
            (function(){ fun.eventDoublerSync(3)}).should.throw(/Odd/);
            done();
        });
    });

    describe('When used async', function(){
        it('should double even number', function(done){
            fun.eventDoubler(2,function(err, res){
                should.not.exist(err);
                res.should.equal(4);
                done();
            });
        });

        it('should throw an odd number', function(){
            fun.eventDoubler(3,function(err, res){
                should.exist(err);
                should.not.exist(res);
                done();
            });
        });
    });
});