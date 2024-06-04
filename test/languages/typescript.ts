// No parameters
function greet(): void {
    console.log("Hello, world!");
}

// Default parameters with types
function greetUser(name: string = "Guest"): void {
    console.log(`Hello, ${name}!`);
}

// Typed array parameters
function sumArray(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Function with callback and typed parameters
function processArray<T>(arr: T[], callback: (item: T) => T): T[] {
    return arr.map(callback);
}

// Function with multiple parameters and default values
function createUser(name: string, age: number, isAdmin: boolean = false): { name: string, age: number, isAdmin: boolean } {
    return { name, age, isAdmin };
}
