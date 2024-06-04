#include <iostream>
#include <vector>
#include <functional>

// No parameters
void greet() {
    std::cout << "Hello, world!" << std::endl;
}

// Default parameters
void greetUser(std::string name = "Guest") {
    std::cout << "Hello, " << name << "!" << std::endl;
}

// Function with array parameter
int sumArray(std::vector<int> numbers) {
    int sum = 0;
    for (int num : numbers) {
        sum += num;
    }
    return sum;
}

// Function with callback
std::vector<int> processArray(std::vector<int> arr, std::function<int(int)> callback) {
    for (int &item : arr) {
        item = callback(item);
    }
    return arr;
}

// Function with multiple parameters and default values
struct User {
    std::string name;
    int age;
    bool isAdmin;
};

User createUser(std::string name, int age, bool isAdmin = false) {
    return {name, age, isAdmin};
}
