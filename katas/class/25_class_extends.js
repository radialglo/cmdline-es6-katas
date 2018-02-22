// 25: class - extends
// To do: make all tests pass, leave the assert lines unchanged!
let assert = require('chai').assert

describe('classes can inherit from another', () => {

  describe('the default super class is Object', () => {
  
    it('class A is an instance of Object', () => {
     class A {}
      
      assert.equal(new A() instanceof Object, true);
    });
  
    it('B extends A, B is also instance of Object', () => {
      class A {}
      class B extends A {}
      
      assert.equal(new B() instanceof A, true);
      assert.equal(new B() instanceof Object, true);
    });
    
    it('class can extend `null`, not an instance of Object', () => {
      class NullClass extends null {
          constructor() { 
            // Use `that` instead of `this`, and return it at the end
            // new.target will be the function that is being instantiated
            let that = Object.create(new.target.prototype); 
            return that;
          }
      }
      // Object.getPrototypeOf(NullClass); // Function.prototype
      // Object.getPrototypeOf(NullClass.prototype) // null

      
      let nullInstance = new NullClass();
      assert.equal(nullInstance instanceof Object, false);
    });
    
  });
  
  describe('instance of', () => {
    it('when B inherits from A, `new B()` is also an instance of A', () => {
      class A {};
      class B extends A {}
      
      assert.equal(new B() instanceof A, true);
    });
    
    it('extend over multiple levels', () => {
      class A {}
      class B extends A {}
      class C extends B {}
      
      let instance = new C();
      assert.equal(instance instanceof A, true);
    });
  });
});

