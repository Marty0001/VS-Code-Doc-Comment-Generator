#include <iostream>
#include <vector>

std::vector<int> processArray(std::vector<int> arr, std::string word) {
    for (int &item : arr) {
        item = word.length();
    }
    return arr;
}
