# No parameters
def greet():
    print("Hello, world!")

# Default parameters
def greet_user(name="Guest"):
    print(f"Hello, {name}!")

# Typed parameters
def sum_array(numbers: list[int]) -> int:
    return sum(numbers)

# Function with callback
def process_array(arr, callback):
    return [callback(item) for item in arr]

# Function with multiple parameters and default values
def create_user(name: str, age: int, is_admin: bool = False) -> dict:
    return {"name": name, "age": age, "is_admin": is_admin}
