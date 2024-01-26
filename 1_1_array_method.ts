let fruits = ["apple", "banana", "orange", "grapes", "strawberry"];
console.log(fruits);

// forEach method
console.log("Here the list of array");
fruits.forEach((element) => {
  console.log(element);
});

//map() method
fruits.map((element) => {
  console.log(element);
});

// pop() method to delete the last element of arry
fruits.pop();
console.log(fruits);

// push() method to add new element in the last of array
fruits.push("apple");
console.log(fruits);

// shift() method to remove first element of array
fruits.shift();
console.log(fruits);

// unshift() method to add new element in the start of array
fruits.unshift("stabry");
console.log(fruits);

// splice(2, 1) method to delete 1 element from the array after 2 elements
fruits.splice(2, 1);
console.log(fruits);

// splice(3, 2) method to delete 2 elements from the array after 3 elements
fruits.splice(3, 2);
console.log(fruits);

// splice(2, 0, "orange1") method to delete 0 element and add "orange" in the the array after 2 elements
fruits.splice(2, 0, "orange1");
console.log(fruits);

// splice(2, 1, "orange2") method to delete 1 element and add "orange2" in the the array after 2 elements
fruits.splice(2, 1, "orange2");
console.log(fruits);

// splice(2, 1, "orange2") method to delete 0 element and add "orange3" and "orange4" in the the array after 2 elements
fruits.splice(2, 0, "orange3", "orange4");
console.log(fruits);

// slice(1,4) method return elemtsts fom index 1 to index 3
const newarry1 = fruits.slice(1, 4);
console.log(newarry1);

// slice(2,4) method return elemtsts fom index 2 to index 3
const newarry = fruits.slice(2, 4);
console.log(newarry);
