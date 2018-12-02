const _ = require('lodash');

function Foo() {
    this.a = 1;
}

function Bar() {
    this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;


function myExtends(obj, ...others) {
    others.forEach(other => {
        for(let key in other) {
            obj[key] = other[key];
        }
    });
    return obj;
}

// ES6
console.log(myExtends({ 'a': 0 }, new Foo, new Bar));

// lodash
console.log(_.assignIn({ 'a': 0 }, new Foo, new Bar));
