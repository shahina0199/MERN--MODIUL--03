function printObjectProperties(obj) {
    if (Object.keys(obj).length === 0) {
      console.log("Object is empty");
    } else {
      for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
      }
    }
  }
  
  // Example usage
  const person = {
    name: "John",
    age: 30,
    occupation: "Engineer"
  };
  
  printObjectProperties(person);
  
  const emptyObject = {};
  
  printObjectProperties(emptyObject);

  


  2. function findMaxNumber(numbers) {
    if (numbers.length === 0) {
      return null;
    }
  
    let max = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  
    return max;
  }
  
  const numbers1 = [10, 20, 5, 30, 25];
  console.log(findMaxNumber(numbers1)); // Output: 30
  
  const numbers2 = [5, 15, 7];
  console.log(findMaxNumber(numbers2)); // Output: 15

  
 
 
 
  3.function mergeArrays(array1, array2) {
    return [...array1, ...array2];
  }
  
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  
  console.log(mergeArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]
  


4. const calculateSquare = number => number * number;

console.log(calculateSquare(5)); // Output: 25
console.log(calculateSquare(8)); // Output: 64



5.function doubleNumbers(numbers) {
  return numbers.map(number => number * 2);
}

const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers)); // Output: [2, 4, 6, 8, 10]



6.class MathUtility {
  static multiply(a, b) {
    return a * b;
  }
}

console.log(MathUtility.multiply(5, 3)); // Output: 15
console.log(MathUtility.multiply(2, 8)); // Output: 16


7. class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  fetch() {
    console.log("Fetching the ball!");
  }
}

const animal = new Animal("Lion", "Roar");
animal.makeSound(); // Output: "Roar"

const dog = new Dog("Buddy", "Woof");
dog.makeSound(); // Output: "Woof"
dog.fetch(); // Output: "Fetching the ball!"


8.class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am majoring in ${this.major}.`);
  }
}

const person1 = new Person("John", 30);
person1.introduce(); // Output: "Hello, my name is John and I am 30 years old."

const student1 = new Student("Alice", 20, "Computer Science");
student1.introduce(); // Output: "Hello, my name is Alice and I am 20 years old. I am majoring in Computer Science."


  
