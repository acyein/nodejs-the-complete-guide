// Setting promise construction function
const fetchData = callback => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {  // this function is usually already defined and not created by yourself
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

// Asynchronous code - delayed output; handled with callback function but we can prevent nested callback functions using promise
// With promise
setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
        .then(text2 => {
            console.log(text2);
        });
}, 2000);

// Nested callbacks
// setTimeout(() => {
//     console.log('Timer is done!');
//     fetchData(text => {
//         console.log(text);
//     });
// }, 2000);

// Synchronous code - immediate output
console.log('Hello!');
console.log('Hi there!');

// Output
// Hello!
// Hi there!
// Timer is done!
// Done!
// Done!