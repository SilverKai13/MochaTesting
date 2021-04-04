var MyClass = require('../src/myClass.js');
var myobj = new MyClass();
var chai = require('chai');
var expect = chai.expect;

describe("Test suite",function(){
    it("should return add method",function(){
        expect(myobj.add(1,2)).to.be.equal(3);
    });
});