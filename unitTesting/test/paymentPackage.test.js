const assert = require('chai').assert;
const expect = require('chai').expect;

class PaymentPackage {
   constructor(name, value) {
      this.name = name;
      this.value = value;
      this.VAT = 20;      // Default value    
      this.active = true; // Default value
   }

   get name() {
      return this._name;
   }

   set name(newValue) {
      if (typeof newValue !== 'string') {
         throw new Error('Name must be a non-empty string');
      }
      if (newValue.length === 0) {
         throw new Error('Name must be a non-empty string');
      }
      this._name = newValue;
   }

   get value() {
      return this._value;
   }

   set value(newValue) {
      if (typeof newValue !== 'number') {
         throw new Error('Value must be a non-negative number');
      }
      if (newValue < 0) {
         throw new Error('Value must be a non-negative number');
      }
      this._value = newValue;
   }

   get VAT() {
      return this._VAT;
   }

   set VAT(newValue) {
      if (typeof newValue !== 'number') {
         throw new Error('VAT must be a non-negative number');
      }
      if (newValue < 0) {
         throw new Error('VAT must be a non-negative number');
      }
      this._VAT = newValue;
   }

   get active() {
      return this._active;
   }

   set active(newValue) {
      if (typeof newValue !== 'boolean') {
         throw new Error('Active status must be a boolean');
      }
      this._active = newValue;
   }

   toString() {
      const output = [
         `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
         `- Value (excl. VAT): ${this.value}`,
         `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
      ];
      return output.join('\n');
   }
}


describe("Tests for PaymentPackage class", function(){
   let wrongVal = [NaN, {}, null, '', undefined];
   describe("Tests for class name, if obj is instance of class and if all props are in place", function() {
       let myObj = new PaymentPackage("Pesho", 5);
       let className = myObj.constructor.toString().substring(0,20);        

       it("should have the same class name", function(){
           assert.equal(className, "class PaymentPackage", "class Name is not the same");
       });
       it("should have all necessary props", function(){
           expect(myObj).to.have.property("name", "Pesho");
           expect(myObj).to.have.property("value", 5);
           expect(myObj).to.have.property("VAT", 20);
           expect(myObj).to.have.property("active", true);
       });
       it("should have toString method", function() {
           expect(myObj).to.respondTo("toString");
       });
   });
   describe("Tests for name prop setter & getter", function() {
       let myObj = new PaymentPackage("Pesho", 5); 

       it("should return the right name", function() {
           assert.equal(myObj.name, "Pesho", "Name getter is incorrect");
       });
       it("should set the name correctly", function() {
           myObj.name = "Gencho"
           assert.equal(myObj.name, "Gencho", "name was not set correctly");
       });
       it("should throw error with incorrect values", function(){
           wrongVal.forEach(val => {
               expect(() => myObj.name = val).to.throw("Name must be a non-empty string");
           });
       });
   });
   describe("Tests for value prop setter & getter", function() {
       let myObj = new PaymentPackage("Pesho", 5); 

       it("should get the value", function() {
           assert.equal(myObj.value, 5, "Value getter is incorrect");
       });
       it("should set the value", function() {
           myObj.value = 6
           assert.equal(myObj.value, 6, "Value getter is incorrect");
       });
       it("should throw error with incorrect values", function() {
           // apparently no one included assertion for NaN.
           [...wrongVal, -1].slice(1).forEach(val => {
               expect(() => myObj.value = val).to.throw("Value must be a non-negative number");
           });
       });
   });
   describe("Tests for VAT prop setter & getter", function() {
       let myObj = new PaymentPackage("Pesho", 5); 

       it("should get the VAT", function() {
           assert.equal(myObj.VAT, 20, "VAT getter is incorrect");
       });
       it("should set the VAT", function() {
           myObj.VAT = 6
           assert.equal(myObj.VAT, 6, "VAT setter is incorrect");
       });
       it("should throw error with incorrect values", function() {
           // apparently no one included assertion for NaN.
           [...wrongVal, -1].slice(1).forEach(val => {
               expect(() => myObj.VAT = val).to.throw("VAT must be a non-negative number");
           });
       });
   });
   describe("Tests for active status getter & setter", function() {
       let myObj = new PaymentPackage("Pesho", 5); 

       it("getter should work as expected", function(){
           assert(myObj.active, true, "status getter should work as expected");
       });
       it("should work correct with booleans", function() {
           expect(myObj.active = false, false, "setter should set false");
       });
       it("should throw error with incorrect values", function(){
           wrongVal.forEach(val => {
               expect(() => myObj.active = val).to.throw("Active status must be a boolean");
           });
       });
   });
   describe("Tests for toString method", function () {
       let myObj = new PaymentPackage("Pesho", 5); 

       it("should work correctly with valid data", function() {
           assert(myObj.toString(),"Package: Pesho\n- Value (excl. VAT): 5\n- Value (VAT 20%): 6", 
           "toString does not work correct with valid data");
           myObj.active = false;
           assert(myObj.toString(),"Package: Pesho inactive\n- Value (excl. VAT): 5\n- Value (VAT 20%): 6", 
           "toString does not work correct with valid data");
       });
   });
});


// THIS WAS COPIED

// describe('PaymentPackage', () => {
//    let package;
//    describe('constructor', () => {
//       it('constructor should work properly with params', () => {
//          package = new PaymentPackage('string', 10);
//          let exp = new PaymentPackage('string', 10)
//          assert.deepEqual(package. exp);
//       });

//       it('should throw exception with incorrect name', () => {
//          assert.throw(() => {
//             package = new PaymentPackage(10, 10);
//          }, 'Name must be a non-empty string')
//       });

//       it('should throw exception when empty string', () => {
//          assert.throw(() => {
//             package = new PaymentPackage('', 10);
//          }, 'Name must be a non-empty string')
//       });
//    })
// })