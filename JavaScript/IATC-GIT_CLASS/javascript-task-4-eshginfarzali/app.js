// 1.
// Create an object named "person" with properties: name, age, and occupation.
// Add a method to the object that returns the person's full name.
// const person = {
//     name: "John",
//     age: 19,
//     occupation: "Student",
// }
// person.fullName = `${person.name} Doe`
// console.log(person);


// 2.
// Create an object named "math" with properties: PI, E, SQRT2, and random.
// Use the math object to log a random number between 0 and 1 to the console.
// const math = {
//     PI: Math.PI,
//     E: Math.E,
//     SQRT2: Math.SQRT2,
//     random: Math.random()
//   }; 
//   console.log(math.random);


// 3.
// Create a string variable and store your full name in it.
// Use the string method to convert the string to uppercase.
// let fullName = "Eshgin Farzaliyev";
// let fullNameUpperCase = fullName.toUpperCase();
// console.log(fullNameUpperCase);


// 4.
// Create a variable and assign it a number.
// Use the Math object to round the number to the nearest integer.
// let number = 3.7;
// let roundedNumber = Math.round(number);
// console.log(roundedNumber);


// 5.
// Create a variable and assign it a large number using BigInt.
// Perform a mathematical operation (e.g., addition) on the BigInt number.
// let largeNumber = BigInt("9007199254740991"); 
// let result = largeNumber + BigInt(123); 
// console.log(Number(result)); 


// 6.
// Create a new Date object and store the current date and time.
// Use the Date object methods to get the current month and year.
// const currentDate = new Date ()
//  const currentMonth = currentDate.getMonth() + 1
//  const currentYear = currentDate.getFullYear()
// console.log( {currentMonth, currentYear});


// 7.
// Use the Math object to generate a random number between 1 and 10.
// Calculate the square root of a given number using the Math object.
// let randomNumber =Math.round( Math.random()*10)
// let squareRoot = Math.sqrt(randomNumber);
// console.log({squareRoot});


// 8.
// Create an object named "car" with properties: make, model, and year.
// Add a method to the object that returns the car's full description.
// const car = {
//     make: "Geely",
//     model: "S200",
//     year: 2023
//   };
// console.log(`Car: ${car.make} ${car.model}, Year: ${car.year}`);
   

// 9.
// Create a string variable and store a sentence in it.
//  Use the string method to check if the sentence contains a specific word.
//let sentence = "The weather is very hot today";
// let specificWord = "very";
// let containsWord = sentence.includes(specificWord);
// console.log(containsWord);


// 10.
// Create a variable and assign it a negative number.
// Use the Math object to get the absolute value of the number.
// let negativeNumber = -19
// let absolutNumber= Math.abs(negativeNumber)
// console.log(absolutNumber);


// 11.
// Create two Date objects representing different dates.
// Use the Date object methods to calculate the difference between the two dates in days.
// const dateOfBirth = new Date("1995-07-30");
// const today = new Date("2023-06-15");
// const timeDifference = today.getTime() - dateOfBirth.getTime();
// const daysLive = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// console.log({ daysLive });


// 12.
// Make an object named "date"
// Add properties: day, month, year
//   day:   1-31        => default: today
//   month: 1-12        => default: today
//   year:  1970-2023   => default: today
// Add methods: getDay, getMonth, getYear
// Add methods: setDay, setMonth, setYear
// Add method: getFullDate (returns full date in format: DD.MM.YYYY using day, month, year)
// Add method: setFullDate (parameter full date in format: DD.MM.YYYY, sets day, month, year)
// Add method: toString (returns full date in format: DD.MM.YYYY)

const date = {
  day: new Date().getDate(),
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),


  getDay: function () {
    return this.day;
  },

  getMonth: function () {
    return this.month;
  },

  getYear: function () {
    return this.year;
  },

  setDay: function (day) {
    if (day >= 1 && day <= 31) {
      this.day = day;
    }
  },

  setMonth: function (month) {
    if (month >= 1 && month <= 12) {
      this.month = month;
    }
  },

  setYear: function (year) {
    if (year >= 1970 && year <= 2023) {
      this.year = year;
    }
  },

  getFullDate: function () {
    const day = String(this.day).padStart(2, '0');
    const month = String(this.month).padStart(2, '0');
    const year = String(this.year).padStart(4, '0');
    return `${day}.${month}.${year}`;
  },

  setFullDate: function (fullDate) {
    const [day, month, year] = fullDate.split('.');
    const parsedDay = parseInt(day, 10);
    const parsedMonth = parseInt(month, 10);
    const parsedYear = parseInt(year, 10);

    if (
      parsedDay >= 1 &&
      parsedDay <= 31 &&
      parsedMonth >= 1 &&
      parsedMonth <= 12 &&
      parsedYear >= 1970 &&
      parsedYear <= 2023
    ) {
      this.day = parsedDay;
      this.month = parsedMonth;
      this.year = parsedYear;
    }
  },

  toString: function () {
    return this.getFullDate();
  },
};


console.log(date.getFullDate()); 
date.setDay(15);
date.setMonth(6);
date.setYear(2022);
console.log(date.getFullDate()); 
console.log(date.toString()); 


// 13.
// Make an object named "math"
// Add properties: PI, E, SQRT2
// Add methods: random (returns random number between 0 and 1)
// const math = {
//     PI: Math.PI,
//     E: Math.E,
//     SQRT2: Math.SQRT2,
//     random(){
//       return Math.random();
//     }
//   };
//   console.log(math.PI);
//   console.log(math.E);
//   console.log(math.SQRT2);
//   console.log(math.random());
  

// 14.
// create 5 objects with properties: title, count, price
// ex: const product1 = { title: 'Pen', count: 1, price: 2 };
// create an array named "products" and add 5 objects to it
// create an object named "cart" with property "products" (empty array)
// add methods: addToCart, removeFromCart, getTotalPrice, getTotalCount
// cart.addToCart(product1); returns: total count of products in cart
// cart.addToCart(product1); returns: total count of products in cart
// you can add same product maximum `product.count` times
// cart.getTotalCount(); returns: 2
// cart.getTotalPrice(); returns: total price of all products in cart
const products = [
  { title: 'Pen', count: 1, price: 2 },
  { title: 'Notebook', count: 3, price: 5 },
  { title: 'Pencil', count: 2, price: 1 },
  { title: 'Eraser', count: 4, price: 0.5 },
  { title: 'Marker', count: 2, price: 3 },
];

const cart = {
  products: [],

  addToCart(product) {
    const existingProduct = this.products.find(p => p.title === product.title);

    if (existingProduct) {
      existingProduct.count = Math.min(existingProduct.count + 1, product.count);
    } else {
      this.products.push({ ...product, count: 1 });
    }

    return this.getTotalCount();
  },

  removeFromCart(product) {
    const index = this.products.findIndex(p => p.title === product.title);

    if (index !== -1) {
      const existingProduct = this.products[index];

      if (existingProduct.count > 1) {
        existingProduct.count--;
      } else {
        this.products.splice(index, 1);
      }
    }

    return this.getTotalCount();
  },

  getTotalPrice() {
    return this.products.reduce((total, product) => total + product.count * product.price, 0);
  },

  getTotalCount() {
    return this.products.reduce((total, product) => total + product.count, 0);
  },
};

console.log(cart.addToCart(products[0]));
console.log(cart.addToCart(products[0]));
console.log(cart.getTotalCount());
console.log(cart.getTotalPrice());