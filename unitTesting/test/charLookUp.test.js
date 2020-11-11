
// WRITE IN TERMINAL => npm test


const expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('lookUpChar', function () {

    describe('Invalid parameters', () => {
        it('should return undefined if first param is not a string', () => {
            expect(lookupChar(13, 0)).to.equal(undefined);
        });

        it('should return undefined when second param is not a number', () => {
            expect(lookupChar('sring', '1')).to.equal(undefined);
        });

        it('should return undefined when second param is floating number', () => {
            expect(lookupChar('string', 1.23)).to.equal(undefined);
        });
    })


    describe('Out of range', function () {
        it('should return incorect index when index is bigger than string.length', () => {
            expect(lookupChar('sting', 6)).to.equal('Incorrect index');
        });

        it('should return Incorect index when index is equal to string.length', () => {
            expect(lookupChar('sting', 5)).to.equal('Incorrect index');
        });

        it('should return Incorect index when second param in negative number', () => {
            expect(lookupChar('string', -1)).to.equal('Incorrect index');
        });
    })


    describe('correct params', () => {
        it('should return s', () => {
            expect(lookupChar('string', 0)).to.equal('s');
        });

        it('should return r', () => {
            expect(lookupChar('string', 2)).to.equal('r');
        });

        it('should return n', () => {
            expect(lookupChar('string', 4)).to.equal('n');
        });
    });``
});


