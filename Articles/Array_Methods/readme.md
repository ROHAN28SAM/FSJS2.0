# Array Methods in JavaScripts

![Array_Method_Cover_Image](./Assets/Cover%20Image%20(Array%20Methods).png)

## Introduction
Arrays are a fundamental data structure in JavaScript, and they offer a variety of methods that can be used to manipulate and transform arrays. These methods provide a simple and efficient way to work with arrays, making them a powerful tool in a JavaScript developer’s arsenal. In this article, we will discuss some of the most commonly used array methods in JavaScript.

- **push()** <br>
The push() method adds one or more elements to the end of an array and returns the new length of the array. Here’s an example:

```
JavaScript

let fruits = ['apple', 'banana', 'orange'];
fruits.push('pear');
console.log(fruits); // ['apple', 'banana', 'orange', 'pear']
```

- **pop()** <br>
The pop() method removes the last element from an array and returns that element. It modifies the original array, reducing its length by one. Here’s an example:

```
JavaScript

let fruits = ['apple', 'banana', 'orange'];
let lastFruit = fruits.pop();
console.log(lastFruit); // 'orange'
console.log(fruits); // ['apple', 'banana']
```

- **shift()** <br>
The shift() method removes the first element from an array and returns that element. It modifies the original array, reducing its length by one. Here’s an example:

```
JavaScript

let fruits = ['apple', 'banana', 'orange'];
let firstFruit = fruits.shift();
console.log(firstFruit); // 'apple'
console.log(fruits); // ['banana', 'orange']
```

- **forEach()** <br>
The forEach() method allows us to execute a function for each element in an array. The function takes three arguments: the current element, the index of the current element, and the array itself. The forEach() method does not return anything.

```
JavaScript

const arr = [1, 2, 3, 4, 5];
arr.forEach((elem, index) => {
  console.log(`Element at index ${index} is ${elem}`);
});
```

- **map()** <br>
The map() method creates a new array by applying a function to each element in the original array. The function takes the current element, the index of the current element, and the array itself as arguments. The map() method returns a new array with the results of the function applied to each element.

```
JavaScript

const arr = [1, 2, 3, 4, 5];
const doubledArr = arr.map(elem => elem * 2);
console.log(doubledArr);
```

- **filter()** <br>
The filter() method creates a new array with all elements that pass a test implemented by a provided function. The function takes the current element, the index of the current element, and the array itself as arguments. The filter() method returns a new array with the elements that pass the test.

```
JavaScript

const arr = [1, 2, 3, 4, 5];
const evenArr = arr.filter(elem => elem % 2 === 0);
console.log(evenArr);
```

- **reduce()** <br>
The reduce() method applies a function to each element in an array and reduces the array to a single value. The function takes two arguments: an accumulator and the current element. The reduce() method also takes an optional initial value for the accumulator. The function returns the accumulated value.

```
JavaScript

const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, elem) => acc + elem, 0);
console.log(sum);
```

- **sort()** <br>
The sort() method sorts the elements of an array in place and returns the sorted array. By default, the sort() method sorts the elements in ascending order. To sort the elements in descending order, we can provide a custom comparison function.

```
JavaScript

const arr = [3, 1, 4, 2, 5];
arr.sort();
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr.sort((a, b) => b - a);
console.log(arr); // Output: [5, 4, 3, 2, 1]
```

In conclusion, these are just a few of the many array methods that JavaScript offers. Understanding these methods and knowing when to use them can help you write more efficient and concise code. By mastering these methods, you can unlock the full potential of JavaScript arrays and become a more effective developer.