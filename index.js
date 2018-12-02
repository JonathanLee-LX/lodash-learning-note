"use strict";
exports.__esModule = true;
var _ = require("lodash");
var data = {
    a: {
        b: {
            c: {
                a: 1,
                b: 2,
                c: 3
            }
        }
    }
};
console.log(_.get(data, 'a.b.c'));
