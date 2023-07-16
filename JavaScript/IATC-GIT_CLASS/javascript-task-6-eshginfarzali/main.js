// 1. Make a constructor function.
//    Check it with instanceof operator

function User() {}
  
const user = new User();

console.log('user instanceof User', user instanceof User); // true



// 2. Write two functions, one for constructing User, other for Employee.
//    Employee instance should be instance of User too

function User() {}
function Employee() {}

Employee.prototype = Object.create(User.prototype);

const e = new Employee();

console.log('e instanceof Employee', e instanceof Employee); // true
console.log('e instanceof User', e instanceof User); // true







// 3. Make function, which can create a new object with new keyword.
//    But object should be instance of another object

function User() {}
function Weirdo() {}

Weirdo.prototype = Object.create(User.prototype);

const weirdo = new Weirdo();

console.log('weirdo instanceof Weirdo', weirdo instanceof Weirdo); // true
console.log('weirdo instanceof User', weirdo instanceof User); // true

    



// 4. Use generator function to generate 'count' numbers from 'start'

function* rangeGenerator(start, count, step) {
    for (let i = 0; i < count; i++) {
      yield start + i * step;
    }
  }
  
  function range(start = 0, count = 10, step = 1) {
    return [...rangeGenerator(start, count, step)];
  }
  
  console.log(range()); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log(range(1)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(2020, 3)); // [2020, 2021, 2022]
  

  
// 5. Make a function to return array of last 3 years: {years: month[]} or {years: quarters[]} or years[]
function lastThreeYears(date, mode = 'year') {
    const currentYear = date.getFullYear();
    const years = [currentYear - 2, currentYear - 1, currentYear];
  
    if (mode === 'year') {
      return years;
    } else if (mode === 'month') {
      const months = Array.from({ length: 12 }, (_, i) => i);
      return years.reduce((result, year) => {
        result[year] = [...months];
        return result;
      }, {});
    } else if (mode === 'quarter') {
      const quarters = Array.from({ length: 4 }, (_, i) => i + 1);
      return years.reduce((result, year) => {
        result[year] = [...quarters];
        return result;
      }, {});
    } 
  }
  
  const date = new Date(2023, 5, 30);
  
  console.log(lastThreeYears(date)); 
  console.log(lastThreeYears(date, 'year')); 
  console.log(lastThreeYears(date, 'month'));
  console.log(lastThreeYears(date, 'quarter'));

  
  console.log("-------------------------------------------------------");


  // 6. What will we see in console
/*
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(); //macro 1
    });
  }).then(() => {
    console.log('promise'); //micro 1
  });

  setTimeout(() => {
    console.log('timeout');
  }); //macro 2

  console.log('hello'); //main

  requestIdleCallback(() => {
    console.log('requestIdleCallback');
  }); //son
*/
// hello
// promise
// timeout
// requestIdleCallback



// 7. What will we see in console
/*

    setTimeout(() => console.log('timeout 1')); //macro 1
  
    Promise.resolve().then(() => setTimeout(() => console.log('timeout 2'))); // micro1 macro 2
  
    Promise.resolve().then(() => console.log('promise 1')); //micro 2
  
    Promise.resolve().then(() => console.log('promise 2')); //micro 3
  
    setTimeout(() => console.log('timeout 3')); //macro 3 */
    // promise 1
    // promise 2
    // timeout 1
    // timeout 3
    // timeout 2


    // 8. What will we see in console

  
    globalThis.name = 'foo';
  
    function log(name) {
      new Function('\tconsole.log(name);')();
    }
  
    log('bar');
    // bar
    //foo we see in console "foo"


    // 9. What will we see in console

//     const obj = {
//       name: 'foo',
//       log: function () {
//         console.log(this.name);
//       },
//     };
  
//     const log = obj.log;
//   console.log(log);
//     log();

    //foo
    

    // 10. Write this function to make it work

    const person = {
        name: 'foo',
        age: 20,
        [Symbol.toPrimitive](hint) {
          if (hint === 'number') {
          return this.age;
          }
          if (hint === 'string') {
          return   this.name;
          }
        },
      };
      
      console.log(Number(person) + 10); // 30
      console.log(`${person} is ${Number(person) > 18 ? 'adult' : 'child'}`); // 'foo is adult'
                  