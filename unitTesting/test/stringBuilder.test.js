const assert = require('chai').assert;

class StringBuilder {
  constructor(string) {
    if (string !== undefined) {
      StringBuilder._vrfyParam(string);
      this._stringArray = Array.from(string);
    } else {
      this._stringArray = [];
    }
  }

  append(string) {
    StringBuilder._vrfyParam(string);
    for (let i = 0; i < string.length; i++) {
      this._stringArray.push(string[i]);
    }
  }

  prepend(string) {
    StringBuilder._vrfyParam(string);
    for (let i = string.length - 1; i >= 0; i--) {
      this._stringArray.unshift(string[i]);
    }
  }

  insertAt(string, startIndex) {
    StringBuilder._vrfyParam(string);
    this._stringArray.splice(startIndex, 0, ...string);
  }

  remove(startIndex, length) {
    this._stringArray.splice(startIndex, length);
  }

  static _vrfyParam(param) {
    if (typeof param !== 'string') throw new TypeError('Argument must be string');
  }

  toString() {
    return this._stringArray.join('');
  }
}

describe('StringBulder', function () {
  let builder;

  beforeEach(() => {
    builder = new StringBuilder();
  });

  describe('verifyParams', () => {
    it('should throw exception when param is not a string', () => {
      assert.throw(() => {
        new StringBuilder({});
      }, 'Argument must be string')
    })
  })

  describe('constructor', function () {
    it('should work when pass string', () => {
      builder = new StringBuilder('pesho');

      assert.equal('pesho', builder.toString());
    });
  });

  describe('append', () => {
    it('should append string to end of array', () => {
      builder.append('string');

      assert.equal('string', builder.toString());
    });
  });

  describe('prepend', () => {
    it('should append string to start of array', () => {
      builder.prepend('string');

      assert.equal('string', builder.toString());
    });
  });

  describe('insertAt', () => {
    it('should insert text at given index', () => {
      builder.append('tring');
      builder.insertAt('s', 0);
      assert.equal('string', builder.toString());
    });
  });

  describe('remove', () => {
    it('should remove string from given index to given length', () => {
      builder.append('string');
      builder.remove(0, 1);
      assert.equal('tring', builder.toString());
    });
  });

  describe('toString', () => {
    it('should return a string', () => {
      builder.append('string');
      assert.equal('string', builder.toString());
    });
  });
})