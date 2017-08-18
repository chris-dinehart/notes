// Javascript 1.1 8/17

// Practice questions

//Create a function called first that has one parameter, which will be an array. First should return the first element of an array that is passed to it.

function first (array) {
    return array[0];
  }
  first ([4,2,3,4])

//   Create a function called last that has one parameter, which will be an array. Last should return the last element of an array that is passed to it. It should work for an array of any length.
  
function last (array) {
    return array.slice(-1)[0];
  }
  
  last ([1,2,3,4,5,6])
  
// Create a function called myLoop that takes in two parameters. The first parameter should represent a starting number and the second is how many times the starting number should be incremented.  
// Use a for loop to increment the first parameter a number of times equal to the second parameter.  Then return the modified number.   
// For example, if the first parameter is 3 and the second parameter is 4, the number three should be increased by one each time the for loop runs, and the for loop should run 4 times. This should return the number 7.

function myLoop (startingNum, increment) {
    for (i = 0; i <= increment; i++) {
    newNum = startingNum + increment;
    return newNum;
    }
  }
  myLoop (6,12);

//   Create a function called exponent that takes in two parameters. 
//   The first parameter should represent a number to be multiplied against itself and the second parameter should represent how many times it is multiplied by itself. 
//   The function should return the result of this operation. 
//   exponent(2,3) should return 8

function exponent (num, exp) {
    return Math.pow(num, exp);
}
exponent (2,3)

// For loops are especially useful when combined with arrays. 

// Create an empty array called myArray 
// Then create a function called arrayFiller that takes one parameter (the parameter will be a number). Then fill myArray with the string "item" the number of times indicated by the parameter. 
// Return the filled array. 

// For example if I were to call arrayFiller(2) I would expect the return value to be ["item","item"] .

var myArray = [];
function arrayFiller (num) {
   for (var i = 0; i < num; i++) {
     myArray.push("item");
   }
   return myArray;
}

// Write a function called 'maker' that creates an array and fills that array with numbers 1 to 25, then returns the array.

function maker(array) {
    
    var array = [];
    
    for(var i = 1;i <= 25; i++){
    array.push(i);
    }
    return array;
  }

// Create a function called "looper" that when passed an array of numbers will increment each value in the array by 5 and then return the updated array. 
// For example: if the looper function were to be passed [ 2, 7 ] it should return [ 7, 12 ]

function looper (array) {
    for(var i = 0; i < array.length; i++) {
      array[i] += 5
    }
    return array;
  }
  console.log(looper([1,2,3]))

// Create a function called 'reversedLooper' that will be passed one parameter, which will be an array. 
// The function will loop through the array backwards and do the following: 

// Subtract 2 from the last element 
// Subtract 1 from the second to last element 
// Subtract 0 from to the third to last element 
// Add one to the fourth to last element
// Add 2 to the fifth to last. 
// Continue increasing the amount added by 1, until it reaches the front of the array.  

// Return the modified array when you are done

function reversedLooper (myArray) {
    var num = 2;
    for (var i = myArray.length - 1; i >= 0; i--){
      myArray[i] -= num;
      num--;
    }
    return myArray;
  }

// Create a function called evenFinder that takes an array as an argument and returns an array with all of the odd numbers removed. 

function evenFinder (myArray) {
    var newArray = [];
    for (i = 0; i < myArray.length; i++) {
      if (myArray[i] % 2 === 0) {
        newArray.push(myArray[i]);
      }
    }
    return newArray;
  }

// Write a function called "oddsAndEvens" that loops through a parameter "nums" (an array).
// For each number in the given array, if it is even, it is added to the evens array, if the number is odd, is added to the odds array.

var evens = []; // Do not edit this line.
var odds = []; // Do not edit this line.

function oddsAndEvens (nums) {
  for (i=0; i < nums.length; i++)
  if (nums[i] % 2 === 0) {
    evens.push(nums[i]);
  } else {
    odds.push(nums[i]);
  }
}

// Write a function called 'findInArray' that takes in two parameters. 
// The first parameter represents the array to be searched and the second parameter represents the value to be searched for. 
// Return true if the value exists in the array. If it doesn't exist return false.

function findInArray (array, value) {
    var num = array.indexOf (value);
    for (i = 0; i < array.length; i++) {
      if (array[num] == value) {
        return true;
      }
      else {
        return false;
      }
    }
  }

// You are provided some code that adds a set of random numbers to both arr1 and arr2.
// Write a function called 'longer' that is given arr1 and arr2 as its only arguments and returns the array that is longer.

var num1 = Math.floor(Math.random() * (30 - 0) + 0);
var num2 = Math.floor(Math.random() * (30 - 0) + 0);
var arr1 = [];
var arr2 = [];
for(var i = 0; i < num1; i++){
  arr1.push(i);
}
for(var i = 0; i < num2; i++){
  arr2.push(i);
}
// Do NOT change the code above

// Your coode goes here
function longer (arr1, arr2) {
  if (arr1.length > arr2.length) {
    return arr1;
  }
  else {
    return arr2;
  }
}

var longerArray = longer(arr1, arr2); // This is for testing purposes. Do not change.

// Write a function called removeItem with two parameters.
// The first parameter is an array called myGroceryList, and the second is an item to remove from myGroceryList. 
// If the second argument (the item to remove) matches an item in myGroceryList, remove that item from your grocery list 
// Return the new, updated grocery list. 
  
// Once you do that, write another function called addItem with two parameters. 
// The first is myGroceryList and the second is an item to add to your grocery list. 
// If the item is already in the grocery list, do not add it a second time. 
// If it's not in the list, then add it to the end of the array.
// Return the new list.

var myGroceryList = [];
var item;
function removeItem (myGroceryList,item) {
  for (var i = 0; i < myGroceryList.length; i++){
    if (myGroceryList[i] === item ){
     myGroceryList.splice(i,1); 
     return myGroceryList;
    }
  }
  return myGroceryList;
}

function addItem (myGroceryList, item) {
  for (var i = 0; i < myGroceryList.length; i++) {
    if (myGroceryList[i] !== item) {
     myGroceryList.push(i);
     return myGroceryList;
    }
  }
  return myGroceryList;
}

// Write a function called addTen that is given 'numbers' as it's only argument and returns a new array after adding ten to each item in numbers. 
// *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]


var numbers = [5, '9', 16, 19, '25', '34', 48];

function addTen(numbers) {
  for (var i = 0; i < numbers.length; i++){
    parseInt(numbers);
    numbers[i] += 10;
  }
  return numbers;
}

// Write a function called 'reverse' with one parameter (string) 
// The function should return that string after it's been reversed.
// For example, if the passed in string is "this is my sentence", the function should return "ecnetnes ym si siht"

function reverse (string) {
    var splitString = string.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  }

// Objects and Arrays practice

// Create a function called getPerson. 
// Inside that function, create a person object with a name property (string) and an age property (number) and return it.

function getPerson (person) {
    person = {
    name: "Chris",
    age: 28
  }
    return person;
  }


//   Create a newCar function that takes in two parameters: make and model.  
//   Using those parameters, create a car object, give it make and model properties, and return it from the function

  function newCar(make, model) {
    var car = {
    make: "Honda", 
    model: "Odessey"
   };
 
   return car;
 }