
// 1. Write a JavaScript program to display numbers as worlds using ASCII code.
// example: [83, 97, 108, 97, 109, 32, 65, 122, 101, 114, 98, 97, 121, 99, 97, 110]
// example: [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
// output: hello world
// example: [106, 97, 118, 97, 115, 99, 114, 105, 112, 116, 32, 105, 115, 32, 98, 111, 109, 98, 97]

// #task1
let num = [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100];

let word = "";

for (let i = 0; i < num.length; i++) {
  word += String.fromCharCode(num[i]);
}
console.log(word);



let asciiCode = [83, 97, 108, 97, 109, 32, 65, 122, 101, 114, 98, 97, 121, 99, 97, 110];
let word1 = "";

for (let i = 0; i < asciiCode.length; i++) {
  word1 += String.fromCharCode(asciiCode[i]);
}
console.log(word1);





// 2. Write a JavaScript program to convert a string to an array of ASCII codes.
// example: hello world
// output: [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
// example: Salam Azerbaycan
// example: javascript is bomba


let str = "hello world";
let toAsciiCode = [];

for (let i = 0; i < str.length; i++) {
  let ascii = str.charCodeAt(i);
  toAsciiCode.push(ascii);
}

console.log(toAsciiCode);



// 3. Write a JavaScript program to convert a string to an array of characters.
// example: hello world
let strToArr = "hello world"
let arr = strToArr.split("")
console.log(arr);

// output: ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]


// 4. Write a JavaScript program to drop the vowels from a string.
// example: hello world
// output: hll wrld

let helloStr =" hello world"
let noVowel =helloStr.replace(/[aeiuo]/gi, "")
console.log(noVowel);

