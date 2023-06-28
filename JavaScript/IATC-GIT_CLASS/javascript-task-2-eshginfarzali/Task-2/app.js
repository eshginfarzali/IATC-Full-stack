// 1. Write program that will reverse string: `'Hello world' => 'dlrow olleH'`
/*
let str ='Hello world'
let revStr =str.split("").reverse().join("")
console.log(revStr);
*/
// 2. Write program to repeat every character in string 3 times: `'Hello world!' => 'HHHeeellllllooo wwwooorrrlllddd!!!'`

// const str = 'Hello world!';
// const result = [...str].map(char => char.repeat(3)).join('');
// console.log(result);

//2nd way

// const str = 'Hello world!';
// let result = '';

// for (let i = 0; i < str.length; i++) {
//   const char = str[i];
//   result += char.repeat(3);
// }

// console.log(result);



/*// 3. Write program to repeat given string n times: `'Hello world', 3 => 'Hello worldHello worldHello world'`
let str = 'Hello world' 
let repStr = str.repeat(3)
console.log(repStr);
*/
//2nd way
/*
let newStr =""
for (let i = 0; i < 3; i++) { 
 newStr+=str
}
console.log(newStr);
*/




// 4. Write program to find the first not repeated character: `'abacddbec' => 'e'`
/*
const str = 'abacddbec';
const arr = str.split('');

const newArr = arr.filter((char) => {

    console.log(arr.indexOf(char))
    console.log(arr.lastIndexOf(char));
  return arr.indexOf(char) === arr.lastIndexOf(char);
});


console.log(newArr);
*/

// 5. Write program to find the first repeated character: `'abacddbec' => 'a'`
/*
const str = 'abacddbec';
const arr = str.split('');

const newArr = arr.filter((char) => {
  return arr.indexOf(char) !== arr.lastIndexOf(char);
});


console.log(newArr[0]);
*/


// 6. Write program to find the count of each character: `'abacddbec' => {a: 2, b: 2, c: 1, d: 3, e: 1}
/*
const str = 'abacddbec';
const counts = {};

for (let i = 0; i < str.length; i++) {
  const char = str[i];
  counts[char] = (counts[char] || 0) + 1;
  console.log( counts[char]);
}

console.log(counts);
*/


// 7. Write program that truncates string in a given length: `'Hello world', 5 => 'Hello...'`
/*
function truncateString(text, defaultLength) {
  return text.length <= defaultLength ? text : `${text.slice(0, defaultLength)}...`;
}

const truncatesString = truncateString("Hello world", 5);
console.log(truncatesString);
*/





// 8. Write program that truncates string in a given length, but it should not break the word: `'Hello world, nice talking to you', 20 => 'Hello world, nice...'`
/*
const truncateString = (str, maxLength) => str.length <= maxLength ? str :
(str.slice(0, maxLength).lastIndexOf(' ') !== -1 ?
 str.slice(0, str.slice(0, maxLength).lastIndexOf(' ')) + '...' :
  str.slice(0, maxLength) + '...');

const truncated = truncateString('Hello world, nice talking to you', 20);
console.log(truncated);

*/




// 9. Create a program to calculate the sum of the elements in an array of numbers: `[1, 2, 3, 4, 5] => 15`

/*
let numArray =[1, 2, 3, 4, 5]
let sum = 0;
for (const num of numArray) {
  sum +=num
}
console.log(sum);
*/

// 10. Create a program to calculate the average of the elements in an array of numbers: `[1, 2, 3, 4, 5] => 3`

/*
let numArray =[1, 2, 3, 4, 5]
let sum = 0;
for (const num of numArray) {
  sum +=num
}
let calcAverge = sum/(numArray.length)
console.log(calcAverge);

*/

//2nd way

/*
function calcAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;

  return average;
}

const numArray = [1, 2, 3, 4, 5];
const average = calcAverage(numArray);

console.log(average);

*/





// 11. Create a program to find the maximum number in an array of numbers: `[1, 2, 3, 4, 5] => 5`
/*
let numbersArray = [1, 2, 3, 4, 5]
let maxNuber =0
for (let i = 0; i <numbersArray.length; i++) {
 if (numbersArray[i]>maxNuber) {
  maxNuber =numbersArray[i]
 }
}
console.log(maxNuber);
*/

//2nd way
/*
const numbersArray = [1, 2, 3, 4, 5];
const maxNumber = Math.max(...numbersArray);

console.log(maxNumber);
*/


// 12. Create a program to find the minimum number in an array of numbers: `[1, 2, 3, 4, 5] => 1`
/*
let numbersArray = [1, 2, 3, 4, 5];
let minNumber = numbersArray[0];
for (let i = 1; i < numbersArray.length; i++) {
  if (numbersArray[i] < minNumber) {
    minNumber = numbersArray[i];
  }
}
console.log(minNumber);
*/

//2nd way
/*
const numbersArray = [1, 2, 3, 4, 5];
const minNumber = Math.min(...numbersArray);

console.log(minNumber);
*/

//3rd way
/*
const numbersArray = [1, 2, 3, 4, 5];
let sortNumber = numbersArray.sort((a,b)=> a-b)
let minNumber = sortNumber[0]
console.log(minNumber);
*/


// 13. Create a program to find the second largest number in an array of numbers: `[1, 2, 3, 4, 5] => 4`
/*
const numbersArray = [1, 2, 3, 4, 5];
const sortedArray = numbersArray.sort((a, b) => b - a);
const secondLargest = sortedArray[1];

console.log(secondLargest);

*/
// 2nd way

/*
function findSecondLargest(numbers) {
  if (numbers.length < 2) {
    return undefined;
  }

  const sortedNumbers = [...numbers].sort((a, b) => b - a);
  return sortedNumbers[1];
}

const numbersArray = [1, 2, 3, 4, 5];
const secondLargest = findSecondLargest(numbersArray);

console.log(secondLargest);
*/

// 14. Create a program to find the second smallest number in an array of numbers: `[1, 2, 3, 4, 5] => 2`
/*
const numbersArray = [1, 2, 3, 4, 5];
const sortedArray = numbersArray.sort((a, b) => a - b);
const secondSmallest = sortedArray[1];

console.log(secondSmallest);
*/

// 15. Create a program to find the count of each element in an array of numbers: `[1, 2, 3, 4, 5, 1, 2, 3, 4, 5] => {1: 2, 2: 2, 3: 2, 4: 2, 5: 2}`

/*
function countElements(numbers) {
const countEach={}

for (const num of numbers) {
  if (countEach[num]) {
    countEach[num]++
    
  }else{
    countEach[num] =1
  }
  
}
return countEach

}
const numbersArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const countResult = countElements(numbersArray);

console.log(countResult);
*/

// 16. Create a program to find the sum of the odd numbers in an array of numbers: `[1, 2, 3, 4, 5] => 9`

/*
const numbersArray =[1, 2, 3, 4, 5]
let sumOddNumbers= 0
for (const num of numbersArray) {
  if (num%2!==0) {
    sumOddNumbers+=num   
  }
}
console.log(sumOddNumbers);
*/


// 17. Create a program to find the sum of the even numbers in an array of numbers: `[1, 2, 3, 4, 5] => 6`

/*
const numbersArray =[1, 2, 3, 4, 5]
let sumEvenNumbers= 0
for (const num of numbersArray) {
  if (num%2===0) {
    sumEvenNumbers+=num   
  }
}
console.log(sumEvenNumbers);
*/