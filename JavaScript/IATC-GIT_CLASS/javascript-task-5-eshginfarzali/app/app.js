
// 1. Check if input is array or not

//    ```javascript
//    let variable1 = [];
//    let variable2 = { length: 1 };
//    let variable3 = new Array(1);
//    ```

/*
   let variable1 = [];
   let variable2 = { length: 1 };
   let variable3 = new Array(1);

   console.log(Array.isArray(variable1));
   console.log(Array.isArray(variable2));
   console.log(Array.isArray(variable3));
*/



// 2. Clone Array

//    ```javascript
//    let array1 = [1, 2, 3];
//    let array2 = copy(array1);
//    array1 === array2; // false
//    array1[0] === array2[0]; // true

//    function copy(array) {
//    your code here...
//    }
//   ```
/*
   let array1 = [1, 2, 3];
   let array2 = copy(array1);
   console.log(array1 === array2); // false
   console.log(array1[0] === array2[0]); // true
   
   function copy(array) {
   let array2 =[]
   for (const item of array) {
    array2.push(item)    
   }
   return array2
   }
   */

// 3. Deep clone array using recursive function

//    ```javascript
//    let array1 = [{ name: 'John' }];
//    let array2 = copy(array1);
//    array1 === array2; // false
//    array1[0] === array2[0]; // false

//    function deepCopy(array) {
    // your code here...
//    }
//    ```

// let array1 = [{ name: 'John' }];
// let array2 = deepCopy(array1);
// console.log(array1 === array2); // false
// console.log(array1[0] === array2[0]); // false

// function deepCopy(array) {
//   let array2 = [];
//   for (let i = 0; i < array.length; i++) {
//     let element = array[i];
//     let copiedElement = {};
//     for (let key in element) {
//       if (typeof element[key] === 'object' && element[key] !== null) {
//         copiedElement[key] = deepCopy(element[key]);
//       } else {
//         copiedElement[key] = element[key];
//       }
//     }
//     array2.push(copiedElement);
//   }
//   return array2;
// }





// 4. Sort given number array like max, min, max, min...

//    ```javascript
//    let array = [1, -4, 5, 6, -2, 0];
//    sorted = [6, -4, 5, -2, 1, 0];
//    ```
/*
let array = [1, -4, 5, 6, -2, 0];
let sorted = [];

array.sort((a, b) => a - b);
console.log(array);
let maxArray = [];
let minArray = [];

for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) {
    maxArray.push(array[i]);
  } else {
    minArray.push(array[i]);
  }
}

console.log({maxArray , minArray});
sorted = maxArray.concat(minArray);

console.log(sorted); 
*/



// 5. Create a function to create array from given parameters

//    ```javascript
//    function range(start, stop, step) {
   // your code here...
//    }

   // default start is 1
   // default stop is 10
   // default step is 1

//    range(7); // [7, 8, 9]
//    range(2020, 2023); // [2020, 2021, 2022]
//    ```

/*
function range(start = 1, stop = 10, step = 1) {
    const arr = [];
    if ((step > 0 && start > stop) || (step < 0 && start < stop)) {
      return arr;
    }
    for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
      arr.push(i);
    }  
    return arr;
  }
  console.log(range(7)); // [7, 8, 9]
  console.log(range(2020, 2023)); // [2020, 2021, 2022]
  
*/



// 6. Create a function to calculate sum of all numbers in a given array or parameters list

//    ````javascript
//     sum([1, 2, 3]); // 6
//     sum([1, 2, 3, 'hello', true]); // 6
//     sum(1, 2, 3); // 6
//     ```
/*
function sum() {
    let numbers = [];
  
    if (Array.isArray(arguments[0])) {
      numbers = arguments[0];
    } else {
      numbers = [...arguments];
    }
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] === 'number' && !isNaN(numbers[i])) {
        total += numbers[i];
      }
    }
    return total;
  }
console.log(sum([1, 2, 3])); // 6
console.log(sum([1, 2, 3, 'hello', true])); // 6
console.log(sum(1, 2, 3)); // 6
*/


// 7. Create a function called `random` to get random integer between `min` and `max`

//    ```javascript
//    random(7); // 99
//    random(1, 5); // 4
//    random(1, 5); // 2
//    random(1, 5); // 1
//    random(-Infinity, Infinity); // 1_312_221_741

   // min is default -2_147_483_648
   // max is default 2_147_483_647
//    ```

/*
function random(min = -21_474_836_48, max = 2_147_483_647) {

  
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  
    return randomNum;
  }
  

 console.log( random(7));
  */

// 8. Create a function called `round`

//    ```javascript
//    round(2.1425); // 2.14
//    round(2.1425, 3); // 2.143

   // default precision is 2
//    ```

/*
function round(number, precision = 2) {
    const decimal = Math.pow(10, precision);
    return Math.round(number * decimal) / decimal;
  }
  
  console.log(round(2.1425)); // Output: 2.14
  console.log(round(2.1425, 3)); // Output: 2.143
  
  */;  

// 9. Create a function called `arithmeticMean`

//    ```javascript
//    arithmeticMean([1, 2, 3, 4, 5]); // 3
//    arithmeticMean([1, 5]); // 3
//    arithmeticMean([3, 3, 3, 3]); // 3
//    ```

/*
function arithmeticMean (array){
    let sum =0;
    for (const num of array) {
        sum+=num
    }
    return sum/array.length
}

  console.log( arithmeticMean([1, 2, 3, 4, 5])); // 3
  console.log( arithmeticMean([1, 5])); // 3
  console.log( arithmeticMean([3, 3, 3, 3])); // 3
*/

// 10. Create a function called `geometricMean`, which calculates arithmetic mean, and returns rounded value

//     ```javascript
//     geometricMean([1, 2, 3, 4, 5]); // 2.61
//     geometricMean([1, 5]); // 2.24
//     geometricMean([5, 5, 5]); // 5
//     ```
/*
function geometricMean (array){
    
    let pow =1;
    for (const num of array) {
        pow*=num
    }
  
    return Math.round( (pow**(1/array.length)*100))/100
}

  console.log( geometricMean([1, 2, 3, 4, 5])); // 2.61
   console.log( geometricMean([1, 5])); // 2.24
   console.log( geometricMean([5, 5, 5])); // 5
*/
// 11. Create a function called `unique`

//     ```javascript
//     unique([1, 1, 1, 5]); // [1, 5]
//     unique([5, 5, 5]); // [5]
//     unique([1]); // [1]
//     ```

/*
function unique (arr){
  let uniqueArr= []
arr.forEach((element)=>{

  if (!uniqueArr.includes(element)) {
    uniqueArr.push(element)
  }
  
})
return uniqueArr

}
   console.log( unique([1, 1, 1, 5])); // [1, 5]
    console.log(unique([5, 5, 5])); // [5]
    console.log(unique([1]) );// [1]

*/


// 12. Create a function called `naturalSum`, it should be recursive function

//     ```javascript
//     naturalSum(3); // 1 + 2 + 3 => 6
//     naturalSum(6); // 1 + ... + 6 => 21
//     naturalSum(9); // 1 + ... + 9 => 45
//     ```
/*
function naturalSum(limit) {
  sum = 0
for (let i = 0; i <= limit; i++) {
  sum+=i
}
return sum
}

    console.log(naturalSum(3) );// 1 + 2 + 3 => 6
    console.log(naturalSum(6)); // 1 + ... + 6 => 21
    console.log(naturalSum(9)); // 1 + ... + 9 => 45
*/
// 13. Make a function called `flat` to falt array of any nested arrays

//     ```javascript
//     flat([1, 2, [3, 4]]); // [1, 2, 3, 4]
//     flat([1, 2, [3, 4, [5, 6]]]); // [1, 2, 3, 4, 5, 6]
//     flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     ```
/*
function flat(arr) {
  let flatArr =[];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      flatArr.push(...flat(element))
      
    }
    else{
      flatArr.push(element)
    }
    
  });
  return flatArr
  
}


    console.log(flat([1, 2, [3, 4]])); // [1, 2, 3, 4]
    console.log(flat([1, 2, [3, 4, [5, 6]]])); // [1, 2, 3, 4, 5, 6]
    console.log(flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2way
function flat(arr) {
  return arr.reduce((result, current) => {
    if (Array.isArray(current)) {
      return result.concat(flat(current));
    }
    return result.concat(current);
  }, []);
}

console.log(flat([1, 2, [3, 4]])); // [1, 2, 3, 4]
console.log(flat([1, 2, [3, 4, [5, 6]]])); // [1, 2, 3, 4, 5, 6]
console.log(flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



*/
// 14. Extend previous function to accept nesting level

//     ```javascript
//     flat([1, 2, [3, 4, [5, 6]]], 1); // [1, 2, 3, 4, [5, 6]]
//     flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]], 2); // [1, 2, 3, 4, 5, 6, [7, 8, [9, 10]]]
//     ```
/*
function flat(arr, level) {
  return arr.reduce((result, current) => {
    if (Array.isArray(current) && level > 0) {
      return result.concat(flat(current, level - 1));
    }
    return result.concat(current);
  }, []);
}
console.log(flat([1, 2, [3, 4, [5, 6]]], 1)); // [1, 2, 3, 4, [5, 6]]
console.log(flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]], 2)); // [1, 2, 3, 4, 5, 6, [7, 8, [9, 10]]]
*/
// 15. Make a function called `collectString` to collect all strings from nested keys

//     ```javascript
//     function collectStrings(deepObject) {
    // Your code here...
//     }
//     const obj = {
//      stuff: "foo",
//      data: {
//       val: {
//        thing: {
//         info: "bar",
//         moreInfo: {
//          evenMoreInfo: {
//           weMadeIt: "baz"
//          },
//         },
//        },
//       },
//      },
//     };
//     collectStrings(obj); // ["foo", "bar", "baz"]
//     ```
/*
function collectStrings(deepObject) {
  const newArr = [];

  function helper(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'string') {
        newArr.push(obj[key]);
      } else if (typeof obj[key] === 'object') {
        helper(obj[key]);
      }
    }
  }

  helper(deepObject);

  return newArr;
}

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz'
          }
        }
      }
    }
  }
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"]
*/
//2way
/*
function collectStrings(deepObject) {
  return Object.values(deepObject).reduce((acc, value) => {
    if (typeof value === 'string') {
      acc.push(value);
    } else if (typeof value === 'object' && value !== null) {
      acc.push(...collectStrings(value));
    }
    return acc;
  }, []);
}

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz'
          }
        }
      }
    }
  }
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"]
*/



// 16. Make random password generator functions

//     ```javascript
//     const generator1 = passwordGenerator(['A', 'a', '9', '@', ' '], ['💕', '💣']);
//     generator1(5); // "@Za9💕"
//     generator1(9); // "Cx$0 9💣kA"
//     const generator2 = passwordGenerator(['9']);
//     generator2(4); // "3277"
//     generator2(5); // "034109"
//     ```
/*
function passwordGenerator(characterRegex, additionalCharacters = []) {
  return function(length) {
    let password = '';

    for (let i = 0; i < length; i++) {
      let randomCharacter = '';

      if (characterRegex instanceof RegExp) {
        const possibleCharacters = [];

        for (let charCode = 32; charCode <= 126; charCode++) {
          const character = String.fromCharCode(charCode);

          if (character.match(characterRegex)) {
            possibleCharacters.push(character);
          }
        }

        randomCharacter = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
      } else {
        const allCharacters = [...characterRegex, ...additionalCharacters];
        randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
      }

      password += randomCharacter;
    }

    return password;
  };
}

const generator1 = passwordGenerator(['A', 'a', '9', '@', ' '], ['💕', '💣']);
console.log(generator1(5)); // "@Za9💕"
console.log(generator1(9)); // "Cx$0 9💣kA"

const generator2 = passwordGenerator(/[0-9]/);
console.log(generator2(4)); // "3277"
console.log(generator2(5)); // "03419"
*/


// 17. Make `ceaserCipherGenerator` and `ceaserCipher` functions

//     ```javascript
//     const ceaserCipher = ceaserCipherGenerator('abcdefghijklmnopqrstuvwxyz');

//     ceaserCipher('Hello', 4); // Olssv
//     ceaserCipher('If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out.', 7); // Pm ol ohk hufaopun jvumpkluaphs av zhf, ol dyval pa pu jpwoly, aoha pz, if zv johunpun aol vykly vm aol slaalyz vm aol hswohila, aoha uva h dvyk jvbsk il thkl vba.
//     ```
/*
function ceaserCipherGenerator(alphabet) {
  const alphabetLength = alphabet.length;

  return function(text, shift) {
    return text
      .split('')
      .map(char => {
        const index = alphabet.indexOf(char.toLowerCase());
        if (index === -1) return char;
        const shiftedIndex = (index + shift) % alphabetLength;
        return char === char.toLowerCase()
          ? alphabet[shiftedIndex]
          : alphabet[shiftedIndex].toUpperCase();
      })
      .join('');
  };
}

const ceaserCipher = ceaserCipherGenerator('abcdefghijklmnopqrstuvwxyz');

console.log(ceaserCipher('Hello', 4)); // Olssv

console.log(
  ceaserCipher(
    'If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out.',
    7
  )
);
*/
// 18. Make `diff` function to find difference between objects

//     ```javascript
//     function diff (arg1, arg2) {
    // Your code here...
//     }

//     diff({ name: 'Jack', age: 22 }, { name: 'John', age: 22 }); // { name: 'John' }
//     diff([1, 2, 3], [1, 2, 3, 4, 5]); // [4, 5]
//     diff('john', 'johnathan'); // 'athan'
//     diff(5, 6); // -1
//     ```
function diff(arg1, arg2) {
  if (arg1 === arg2) {
    return undefined;
  }

  if (Array.isArray(arg1) && Array.isArray(arg2)) {
    const result = arg2.filter(item => !arg1.includes(item));
    return result.length > 0 ? result : undefined;
  }

  if (typeof arg1 === 'string' && typeof arg2 === 'string') {
    if (arg2.includes(arg1)) {
      return arg2.slice(arg1.length);
    } else {
      return arg2;
    }
  }

  if (typeof arg1 === 'number' && typeof arg2 === 'number') {
    return arg1-arg2;
  }

  if (typeof arg1 === 'object' && typeof arg2 === 'object') {
    const result = {};

    for (let key in arg2) {
      if (arg1[key] !== arg2[key]) {
        result[key] = arg2[key];
      }
    }

    return Object.keys(result).length > 0 ? result : undefined;
  }

  return arg2;
}

console.log(diff({ name: 'Jack', age: 22 }, { name: 'John', age: 22 })); // { name: 'John' }
console.log(diff([1, 2, 3], [1, 2, 3, 4, 5])); // [4, 5]
console.log(diff('john', 'johnathan')); // 'athan'
console.log(diff(5, 6)); // 1

// 19. Find missing number in the array

//     ```javascript
//     const array1 = [1, 5, 4, 2];
//     const array2 = [10, 3, 5, 9, 7, 1, 2, 6, 4];

//     findMissing(array1); // 3
//     findMissing(array2); // 8
//     ```

function findMissing(array) {
  // Formula used to calculate expected amount:
  // (array.length + 1) * (array.length + 2) / 2;
  // The above formula is used to calculate the sum of consecutive numbers from 1 to n.
  // Here n is array.length + 1 because the array has no numbers.
  // Then the actualSum variable will be used to calculate the sum.
  const expectedSum = (array.length + 1) * (array.length + 2) / 2;

  const actualSum = array.reduce((sum, num) => sum + num, 1);

  return expectedSum - actualSum;
}

const array1 = [1, 5, 4, 2];
const array2 = [10, 3, 5, 9, 7, 1, 2, 6, 4];

console.log(findMissing(array1)); // 3
console.log(findMissing(array2)); // 8


// 20. Find distance, elevation and angle between given coordinates

//     ```javascript
//     function calculateDistance(coord1, coord2) {
//   Your code here
//     }

//     Coordinates:
//     const coord1 = {
//     X: 5573283,
//     Y: 6309750,
//     Z: 191.5,
//     };
//     const coord2 = {
//     X: 5573791,
//     Y: 6323798,
//     Z: 132.2,
//     };

//     const coord3 = {
//     X: 5573283,
//     Y: 6309750,
//     Z: 191.5,
//     };
//     const coord4 = {
//     X: 5573791,
//     Y: 6323798,
//     Z: 132.2,
//     };

//     calculateDistance(coord1, coord2); // { distance: 14057, elevation: -59, angle: 88 }
//     calculateDistance(coord3, coord4); // { distance: 19457, elevation: 419, angle: -134 }
//     ```


function calculateDistance(coord1, coord2) {
  // Calculate the differences between coordinates
  const deltaX = coord2.X - coord1.X;
  const deltaY = coord2.Y - coord1.Y;
  const deltaZ = coord2.Z - coord1.Z;

  // Calculate the distance using the Euclidean distance formula
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

  // Calculate the elevation (vertical difference)
  const elevation = deltaZ;

  // Calculate the angle using the arctangent function
  const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

  // Return the result as an object
  return { distance, elevation, angle };
}

const coord1 = {
  X: 5573283,
  Y: 6309750,
  Z: 191.5,
};
const coord2 = {
  X: 5573791,
  Y: 6323798,
  Z: 132.2,
};

const coord3 = {
  X: 5573283,
  Y: 6309750,
  Z: 191.5,
};
const coord4 = {
  X: 5573791,
  Y: 6323798,
  Z: 132.2,
};

console.log(calculateDistance(coord1, coord2)); // { distance: 14057, elevation: -59, angle: 88 }
console.log(calculateDistance(coord3, coord4)); // { distance: 19457, elevation: 419, angle: -134 }
