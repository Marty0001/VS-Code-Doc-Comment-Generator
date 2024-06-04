// No parameters
function greet() {
    console.log("Hello, world!");
}

// Default parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

// Typed array parameters
function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Function with callback
function processArray(arr, callback) {
    return arr.map(callback);
}

// Function with multiple parameters and default values
function createUser(name, age, isAdmin = false) {
    return { name, age, isAdmin };
}
