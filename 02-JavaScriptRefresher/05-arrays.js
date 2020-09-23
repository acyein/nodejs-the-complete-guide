const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
};

// person.greet(); // Hi, I am Max

const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies) {
//    console.log(hobby); // Sports Cooking
// }

// console.log(hobbies.map(hobby => {
//     return `Hobby: ${hobby}`;
// }));

console.log(hobbies.map(hobby => `Hobby: ${hobby}`)); // [ 'Hobbby: Sports', 'Hobby: Cooking' ]
console.log(hobbies); // [ 'Sports', 'Cooking' ]