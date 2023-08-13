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
  

  