// Example code templates for the Python code editor

export const EXAMPLE_CODES = [
    {
        title: '🔢 Variables',
        description: 'Learn about data types',
        code: `# Variables and Data Types
name = "Alice"
age = 25
height = 5.6
is_student = True

print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height}m")
print(f"Student: {is_student}")`,
    },
    {
        title: '🔁 For Loop',
        description: 'Iterate through numbers',
        code: `# For Loop Example
for i in range(5):
    print(f"Count: {i}")

# Loop through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")`,
    },
    {
        title: '📝 Functions',
        description: 'Create reusable code',
        code: `# Function Example
def greet(name):
    return f"Hello, {name}!"

def add(a, b):
    return a + b

print(greet("Alice"))
print(f"5 + 3 = {add(5, 3)}")`,
    },
    {
        title: '📊 Lists',
        description: 'Work with collections',
        code: `# List Operations
numbers = [1, 2, 3, 4, 5]
print(f"Original: {numbers}")

numbers.append(6)
print(f"After append: {numbers}")

numbers.remove(3)
print(f"After remove: {numbers}")

print(f"First item: {numbers[0]}")
print(f"Last item: {numbers[-1]}")`,
    },
];
