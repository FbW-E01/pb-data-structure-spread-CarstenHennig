// # Spread the Word

// #### 1. Combining Arrays
// * Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
// * Once again create two arrays. Save all elements of both arrays to another variable.

const euroCountries = ["France", "Italy", "Greece", "Spain", "Portugal"];
const asianCountries = ["Laos", "Myanmar", "Philippines", "South Korea"];
euroCountries.push(asianCountries);
console.log(euroCountries);

const array1 = ["aa", "bb", "cc"];
const array2 = ["dd", "ee", "ff"];
const sumArray = [...array1, ...array2];
console.log(sumArray);

// #### 2. Copying Arrays
// * Copy an array using the spread operator. Store the copied array in another variable.

// see lines 12-15

// #### 3. Find the Largest...
// Create a function to find the largest number in an array.

const nums = [1, 91, 57, 16, 7.6, 91.2, -1, 78];
const biggestNum = Math.max(...nums);
console.log(`The biggest number is ${biggestNum}`);

// #### 4. Find the Smallest
// Create a function to find the smallest number in an array.

const smallesNum = Math.min(...nums);
console.log(`The smallest number is ${smallesNum}`);

// #### 5. Clone and Merge
// Given two objects:
// ```javascript
// const person = {name: "John"}
// const job = {role: "Teacher"}
// ```
// * 5.1 Clone the person object.
// * 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
// * 5.3 Then change the values of the properties in the employee object.

const person = { name: "John" };
const job = { role: "Teacher" };
const employee = Object.assign({}, person, job);
console.log(JSON.stringify(employee));
employee.name = "Joel";
employee.role = "Coder";
console.log(employee);
const arrayChanger = [{ ...person, ...job }];
arrayChanger[0].name = "Milad";
arrayChanger[0].role = "WebDev";
console.log(arrayChanger);

// #### Bonus: 6.  Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true
// or false depending on whether the average of all the arguments is a whole number or not.
// * Examples
// * isWhole(1, 2, 3, 4) ➞ false
// * isWhole(9, 2, 2, 5) ➞ false

grades = [9, 2, 2, 5];
let avg;
function average(num1, num2, num3, num4) {
  //   for (let i = 0; i < grades.length; i++) {
  //     console.log(grades[i]);
  //     avg = (grades[i] / grades.length) * grades.length;
  avg = (num1 + num2 + num3 + num4) / 4;
  console.log("Average is " + avg);
}
let result = avg - Math.floor(avg) !== 0;
// console.log(result);
if (result) console.log("FALSE Average has a decimal place");
else console.log("TRUE Average is a whole number");

average(9, 2, 2, 5);

// * Once you have created a function, pass in an array as an argument which contains four elements -
// check if this method still outputs the correct result!
