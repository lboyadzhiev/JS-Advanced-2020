const expect = require('chai').expect;

let mathEnforcer = {
   addFive: function (num) {
       if (typeof(num) !== 'number') {
           return undefined;
       }
       return num + 5;
   },
   subtractTen: function (num) {
       if (typeof(num) !== 'number') {
           return undefined;
       }
       return num - 10;
   },
   sum: function (num1, num2) {
       if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
           return undefined;
       }
       return num1 + num2;
   }
};

describe('mathEnforce', function() {
   describe('addFive', function () {
      it('should retunr undefined if param is a string', () => {
         expect(mathEnforcer.addFive('5')).to.equal(undefined);
      });

      it('should retunr undefined if param is empty', () => {
         expect(mathEnforcer.addFive()).to.equal(undefined);
      });

      it('should retunr undefined if param is a object', () => {
         expect(mathEnforcer.addFive({})).to.equal(undefined);
      });

      it('should retunr undefined if param is a array', () => {
         expect(mathEnforcer.addFive([])).to.equal(undefined);
      });

      it('should give 9 if param is 4', () => {
         expect(mathEnforcer.addFive(4)).to.equal(9);
      })

      it('should give -5 if param is -10', () => {
         expect(mathEnforcer.addFive(-10)).to.equal(-5);
      })

      it('should be close to 6 within 6.99', () => {
         expect(mathEnforcer.addFive(1.99)).closeTo(6.99, 0.001);
      })

   });

   describe('substractTen', function () {
      it('should return undefine if param is string', () => {
         expect(mathEnforcer.subtractTen('10')).to.equal(undefined);
      });

      it('should return undefine if param is emtpy', () => {
         expect(mathEnforcer.subtractTen()).to.equal(undefined);
      })

      it('should return undefine if param is an object', () => {
         expect(mathEnforcer.subtractTen({})).to.equal(undefined);
      });

      it('should return undefine if param is not an array', () => {
         expect(mathEnforcer.subtractTen([])).to.equal(undefined);
      });

      it('should return 10 if param is not a 20', () => {
         expect(mathEnforcer.subtractTen(20)).to.equal(10);
      });

      it('should return -20 if param is -10', () => {
         expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
      });

      it('should be close to 6 within 6.99', () => {
         expect(mathEnforcer.subtractTen(16.99)).closeTo(6.99, 0.001);
      })

   });

   describe('sum', function () {
      it('should return undefined if paramOne is not a number', () => {
         expect(mathEnforcer.sum('5', 10)).to.equal(undefined);
      });

      it('should return undefine if paramTwo in not a number', () => {
         expect(mathEnforcer.sum(5, '5')).to.equal(undefined);
      });

      it('should return undefine if params are strings', () => {
         expect(mathEnforcer.sum('5', '5')).to.equal(undefined);
      });

      it("mathEnforcer.sum(-5,-5) should return -10",function(){
         expect(mathEnforcer.sum(-5,-5)).to.equal(-10);
      });

      it("mathEnforcer.sum(5.5, 5.5) should return 11",function(){
         expect(mathEnforcer.sum(5.5, 5.5)).to.equal(11);
      });
   });
});