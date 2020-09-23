const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
};

const hobbies = ['Sports', 'Cooking'];

const copiedArray = hobbies.slice();
console.log(copiedArray); // [ 'Sports', 'Cooking', 'Programming' ]

const copiedArray1 = [hobbies];
console.log(copiedArray1); // [ [ 'Sports', 'Cooking', 'Programming' ] ] - a nested array

const copiedArray2 = [...hobbies];
console.log(copiedArray2); // [ 'Sports', 'Cooking', 'Programming' ] - pull out values in the selected array

const copiedPerson = {...person};
console.log(copiedPerson); // { name: 'Max', age: 29, greet: [Function: greet] } - pull out elements from the selected object

const toArray = (arg1, arg2, arg3) => { // limited to 3 arguments only
    return [arg1, arg2, arg3];
};

const toArray1 = (...args) => { // however many arguments
    return args;
};

console.log(toArray(1, 2, 3)); // [ 1, 2, 3 ]
console.log(toArray1(1, 2, 3, 4, 5, 6)); // [ 1, 2, 3, 4, 5, 6 ]