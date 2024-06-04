public class java {

    // No parameters
    public static void greet() {
        System.out.println("Hello, world!");
    }

    // Default parameters (emulated)
    public static void greetUser(String name) {
        if (name == null) {
            name = "Guest";
        }
        System.out.println("Hello, " + name + "!");
    }

    // Function with array parameter
    public static int sumArray(int[] numbers) {
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        return sum;
    }

    // Function with callback
    public static int[] processArray(int[] arr, Object test) {
        return arr;
    }

    // Function with multiple parameters and default values (emulated)
    public static class User {
        String name;
        int age;
        boolean isAdmin;

        User(String name, int age, boolean isAdmin) {
            this.name = name;
            this.age = age;
            this.isAdmin = isAdmin;
        }
    }

    public static User createUser(String name, int age, boolean isAdmin) {
        return new User(name, age, isAdmin);
    }
}
