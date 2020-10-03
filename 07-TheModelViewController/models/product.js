const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(require.main.filename), 
    'data', 
    'products.json'
);

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        };
    });
};

module.exports = class Product {
    constructor(t) {
        this.title = t;
    };

    save() {
        getProductsFromFile(products => {
            products.push(this); // Make sure arrow function is used so that 'this' refers to the CLass
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    };

    static fetchAll(cb) { // Use static to let fetchAll apply to Product class only
        getProductsFromFile(cb);
    };
};