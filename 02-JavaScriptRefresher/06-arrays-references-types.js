const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
};

const hobbies = ['Sports', 'Cooking'];

hobbies.push('Programming');
console.log(hobbies); // [ 'Sports', 'Cooking', 'Programming' ]