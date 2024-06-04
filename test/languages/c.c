#include <stdio.h>

// No parameters
void greet() {
    printf("Hello, world!\n");
}

// Default parameters (emulated)
void greet_user(char* name) {
    if (name == NULL) {
        name = "Guest";
    }
    printf("Hello, %s!\n", name);
}

// Function with array parameter
int sum_array(int numbers[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Function with callback
void process_array(int arr[], int size, int (*callback)(int)) {
    for (int i = 0; i < size; i++) {
        arr[i] = callback(arr[i]);
    }
}

// Function with multiple parameters and default values (emulated)
struct User {
    char* name;
    int age;
    int is_admin;
};

struct User create_user(char* name, int age, int is_admin) {
    struct User user;
    user.name = name ? name : "Guest";
    user.age = age;
    user.is_admin = is_admin;
    return user;
}
