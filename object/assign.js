/**
 *_.assign(object, [sources])
 * object为目标对象，sources为源对象，该参数可选
 * 该方法会将所有的sources对象上可枚举的属性（即存在于sources对象本身的，而不是其原型链上的）混入到object对象上
 */

const _ = require('lodash');

function Foo() {
    this.a = 1;
}

function Bar() {
    this.b = 2;
}

Foo.prototype.c = 3;
Bar.prototype.d = 4;

// ES6 Object.assign
console.log(Object.assign({ a: 0, b: 2 }, new Foo, new Bar));

// ES6 spread and rest
console.log({...{ a: 0, b: 2 }, ...new Foo, ...new Bar});

// lodash
console.log(_.assign({ a: 0, b: 2 }, new Foo, new Bar));

