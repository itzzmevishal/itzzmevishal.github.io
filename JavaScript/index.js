let arr = [1,2,3,4,5]
console.log(arr.length); // tell the length of an array.
console.log(arr) // Prints all the elements present in an array.

arr.push("Kumar"); // "push" adds the new elements in the last of an array.
arr.unshift("Vishal"); // "unshift" adds the new elements in the first of an array.
console.log("*******************************");
console.log(arr);

console.log("*******************************");
arr.pop();
arr.shift();
console.log(arr)