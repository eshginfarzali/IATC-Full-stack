let letters = ['s', 'z', 'k'];
let target = 'a';
let charCodeA = target.charCodeAt();

let newArr = [];
for (let letter of letters) {
    newArr.push(letter.charCodeAt() - charCodeA);
}

let subtrack = newArr.sort((a, b) => a - b)[0];
let subtrackSum = String.fromCharCode(subtrack + charCodeA);

console.log(subtrackSum); // k


// let targetCode = target4.charCodeAt(0);
// let min = Infinity;
// for (let char of letters4) {
// 	let charCode = char.charCodeAt(0);
// 	let diff = charCode - targetCode;

// 	if (diff > 0 && diff < min) {
// 		min = diff;
// 	}
// }

// let result =
// 	min === Infinity ? letters4[0] : String.fromCharCode(targetCode + min);

// console.log(result);


/*
let letters2 = ['s', 'z', 'k', 'a'];
let target2 = 'k';

let result2 = letters2[0];

for (let i = 0; i < letters2.length; i++) {
  if (letters2[i] > target2) {
    result2 = letters2[i];
    break;
  }
}

if (result2 <= target2) {
  result2 = letters2[0];
}

console.log(result2);  // Output: 's'
*/

let obj1 = {};
// result: object is empty
let isEmpty1 = Object.keys(obj1).length === 0;
console.log(isEmpty1);  // Output: true

let obj2 = {
  key: 'value'
};
//result: object is not empty
let isEmpty2 = Object.keys(obj2).length === 0;
console.log(isEmpty2);  // Output: false


// ## Clean nullish values from object

/*
let obj = {
    key1: null,
    key2: 0,
    key3: 'string',
  };
  
  let result = {};
  
  for (const key in obj) {
    const value = obj[key];
    if (value !== null) {
      result[key] = value;
    }
  }
  
  console.log(result);
 */ 
// result: {
//   key2: 0,
//   key3: 'string'
// }
//




//  ## Clean falsy values from object



// ## Clean falsy values from object
/*

let obj = {
    key1: null,
    key2: 0,
    key3: 'string',
  };
  
  let result = {};
  
  for (const key in obj) {
    const value = obj[key];
    if (value) {
      result[key] = value;
    }
  }
  
  console.log(result);
  */
// result: {
//   key3: 'string'
// }

