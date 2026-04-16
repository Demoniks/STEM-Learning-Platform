import { Code, BookOpen, Lightbulb, Play } from 'lucide-react';

// Python programming topics
export const pythonSections = {
    variables: {
        title: "Variables & Data Types",
        icon: <Code className="w-5 h-5" />,
        description: `Variables are containers that store data. Think of them as labeled 
        boxes.`,
        concepts: [
            {
                name: "Basic Variables",
                code: `# Variables store information
name = "Alice"           # String (text)
age = 25                 # Integer (whole number)
height = 5.6             # Float  (decimal)
is_student = True       #Boolean (True/False)

print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height}")
print(f"Student: {is_student}")`,
                explanation: `Variables don't need declaration - just assign a value!
                Python automatically knows the type.`,
                hasInteractiveButton: true,  // Show "Try Code" button
                whiteboard: null  // Optional: Add Excalidraw whiteboard data here
            },
            {
                name: "Variable Operations",
                code: `# Math with numbers
x = 10
y = 3
print(f"Sum: {x + y}")
print(f"Product: {x * y}")
print(f"Division: {x / y}")

# String operations
first = "Hello"
last = "World"
full = first + " " + last
print(full)
print(f"Repeated: {first * 3}")`,
                explanation: "You can do math with numbers and combine strings with the + operator.",
                hasInteractiveButton: true,  // This is just a visual example, no button
                whiteboard: null
            }
        ]
    },
    conditionals: {
        title: "Conditionals (If/Else)",
        icon: <Lightbulb className="w-5 h-5" />,
        description: "Make decisions in your code based on conditions.",
        concepts: [
            {
                name: "Basic If Statements",
                hasInteractiveButton: true,
                code: `age = 18

if age >= 18:
    print("You can vote!")
else:
    print("Too young to vote")

# Multiple conditions
score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")`,
                explanation: "If statements check conditions. Use 'elif' for multiple options and 'else' as a fallback."
            },
            {
                name: "Logical Operators",
                hasInteractiveButton: true,
                code: `age = 25
has_license = True

# AND operator - both must be true
if age >= 18 and has_license:
    print("Can drive!")

# OR operator - at least one must be true
is_weekend = True
is_holiday = False

if is_weekend or is_holiday:
    print("No work today!")

# NOT operator - reverses the condition
is_raining = False
if not is_raining:
    print("Great day for a walk!")`,
                explanation: "Combine conditions with 'and', 'or', and 'not' to create complex logic."
            }
        ]
    },
    loops: {
        title: "Loops",
        icon: <Play className="w-5 h-5" />,
        description: "Repeat actions multiple times without writing the same code over and over.",
        concepts: [
            {
                name: "For Loops",
                hasInteractiveButton: true,
                code: `# Loop through a range of numbers
for i in range(5):
    print(f"Count: {i}")

# Loop through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")

# Loop with index
for index, fruit in enumerate(fruits):
    print(f"{index + 1}. {fruit}")`,
                explanation: "For loops iterate over sequences. Use range() for numbers, or loop directly through lists."
            },
            {
                name: "While Loops",
                hasInteractiveButton: true,
                code: `# While loop - continues until condition is false
count = 0
while count < 5:
    print(f"Count is: {count}")
    count += 1  # Same as count = count + 1

# Practical example
password = ""
while password != "secret":
    password = "secret"  # Simulating input
    if password == "secret":
        print("Access granted!")
    else:
        print("Try again")`,
                explanation: "While loops keep running as long as the condition is True. Be careful not to create infinite loops!"
            }
        ]
    },
    lists: {
        title: "Lists & Data Structures",
        icon: <BookOpen className="w-5 h-5" />,
        description: "Store multiple items in a single variable.",
        concepts: [
            {
                name: "List Basics",
                hasInteractiveButton: true,
                code: `# Creating and accessing lists
numbers = [1, 2, 3, 4, 5]
print(f"First: {numbers[0]}")
print(f"Last: {numbers[-1]}")

# List methods
numbers.append(6)        # Add to end
print(f"After append: {numbers}")

numbers.insert(0, 0)     # Insert at position
print(f"After insert: {numbers}")

numbers.remove(3)        # Remove specific value
print(f"After remove: {numbers}")`,
                explanation: "Lists are ordered collections. Index starts at 0. Use -1 to access the last item."
            },
            {
                name: "List Operations",
                hasInteractiveButton: true,
                code: `# List slicing
numbers = [0, 1, 2, 3, 4, 5]
print(f"First 3: {numbers[:3]}")
print(f"Last 3: {numbers[-3:]}")
print(f"Middle: {numbers[2:4]}")

# List comprehension (advanced shortcut)
squares = [x**2 for x in range(5)]
print(f"Squares: {squares}")

# Checking membership
if 3 in numbers:
    print("3 is in the list!")`,
                explanation: "Slicing lets you extract portions of lists. List comprehension is a compact way to create new lists."
            }
        ]
    },
    functions: {
        title: "Functions",
        icon: <Code className="w-5 h-5" />,
        description: "Reusable blocks of code that perform specific tasks.",
        concepts: [
            {
                name: "Basic Functions",
                hasInteractiveButton: true,
                code: `# Simple function
def greet():
    print("Hello!")

greet()  # Call the function

# Function with parameters
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Alice")

# Function that returns a value
def add(a, b):
    return a + b

result = add(5, 3)
print(f"5 + 3 = {result}")`,
                explanation: "Functions let you organize code into reusable pieces. Use 'def' to define, and call by name."
            },
            {
                name: "Advanced Functions",
                hasInteractiveButton: true,
                code: `# Default parameters
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Bob"))
print(greet("Bob", "Hi"))

# Multiple return values
def get_stats(numbers):
    return min(numbers), max(numbers), sum(numbers)

nums = [1, 2, 3, 4, 5]
minimum, maximum, total = get_stats(nums)
print(f"Min: {minimum}, Max: {maximum}, Sum: {total}")`,
                explanation: "Functions can have default values and return multiple items as a tuple."
            }
        ]
    },
    classes: {
        title: "Classes & Objects",
        icon: <BookOpen className="w-5 h-5" />,
        description: "Create your own custom data types with properties and behaviors.",
        concepts: [
            {
                name: "Basic Classes",
                hasInteractiveButton: true,
                code: `# Define a class (blueprint)
class Dog:
    def __init__(self, name, age):
        self.name = name  # Property
        self.age = age

    def bark(self):  # Method
        return f"{self.name} says Woof!"

    def birthday(self):
        self.age += 1
        return f"{self.name} is now {self.age}!"

# Create objects (instances)
my_dog = Dog("Buddy", 3)
print(my_dog.bark())
print(my_dog.birthday())`,
                explanation: "__init__ is the constructor - it runs when you create an object. 'self' refers to the instance itself."
            },
            {
                name: "Class Inheritance",
                hasInteractiveButton: true,
                code: `# Base class
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "Some sound"

# Derived class (inherits from Animal)
class Cat(Animal):
    def speak(self):  # Override method
        return f"{self.name} says Meow!"

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

cat = Cat("Whiskers")
dog = Dog("Rex")
print(cat.speak())
print(dog.speak())`,
                explanation: "Inheritance lets classes share common features. Child classes can override parent methods."
            }
        ]
    }
};
