def greet():
    print("Hello, world!")

def greet_user(name="Guest"):
    print(f"Hello, {name}!")

def sum_array(numbers: list[int]) -> int:
    return sum(numbers)

def process_array(arr, callback):
    return [callback(item) for item in arr]

def create_user(name: str, age: int, is_admin: bool = False) -> dict:
    return {"name": name, "age": age, "is_admin": is_admin}
