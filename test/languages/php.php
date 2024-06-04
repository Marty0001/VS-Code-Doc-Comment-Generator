<?php

// No parameters
function greet() {
    echo "Hello, world!\n";
}

// Default parameters
function greetUser($name = "Guest") {
    echo "Hello, $name!\n";
}

// Function with array parameter
function sumArray($numbers) {
    return array_sum($numbers);
}

// Function with callback
function processArray($arr, $callback) {
    return array_map($callback, $arr);
}

// Function with multiple parameters and default values
function createUser($name, $age, $isAdmin = false) {
    return ['name' => $name, 'age' => $age, 'isAdmin' => $isAdmin];
}

?>
