const expect = require('chai').expect;

function isOddOrEven(string) {
   if (typeof(string) !== 'string') {
       return undefined;
   }
   if (string.length % 2 === 0) {
       return "even";
   }

   return "odd";
}


// Tests

describe('Odd or Even', function() {
   it('should return odd', () => {
      expect(isOddOrEven('bbb')).to.equal('odd');
   });

   it('should return even', () => {
      expect(isOddOrEven('aa')).to.equal('even');
   });

   it('should return undefined for non-strings', () => {
      expect(isOddOrEven(5)).to.equal(undefined);
      expect(isOddOrEven([])).to.equal(undefined);
      expect(isOddOrEven({})).to.equal(undefined);
   })
})
