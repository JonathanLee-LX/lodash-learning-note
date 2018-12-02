import * as _ from 'lodash';

const data = {
    a: {
        b: {
            c: {
                a: 1, 
                b: 2,
                c: 3,
            }
        }
    }
};

console.log(_.get(data, 'a.b.c'));