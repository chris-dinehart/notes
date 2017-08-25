//Arrays

    // Adding items to an array:
        .push // Adds value to the end of the array.
        .unshift // Adds value to the beginning of the array at index 0.
        myArray.push
        myArray.unshift

    // Finding/setting length of an array:
        .length // Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.
        .length - 1 // Is index of the last value of array.
        myArray.length
        myArray.length - 1

    // Removing items from an array:
        .pop // Takes last item out of array and returns it. Updates original array.
        
        .shift // Removes first element from the array and shifts everything to the left. Updates original array.
        
        // Splice can be used to cut out items in an array or can be used to add an item into an array at a specific index.
        .splice
            .splice(1,2) // Cuts out items starting at index "1" and removes "2 items". Then slides everything to the left and updates original array.
            .splice(3,0,"Joey") // Start at index 3, remove nothing and place "Joey" in the 3rd index. Slides everything to the right after the 3rd index. Returns values and updates array.
        
        // Slice is used to get a copy of an array or part of it.     
        .slice
            .slice() // Gets copy of an entire array.
            .slice(4) // Gets copy of everything starting at index 4 and after it. 
            .slice(2,5) // Gets copy of everything starting at index 2 and stop at index 5 (index 5 is not included in result). 

        myArray.pop
        myArray.shift
        myArray.splice(1,1)
        myArray.slice()


// For loops:

    // i = "iterator"
    // Incrementor updates iterator.
    // Structure:

    // for(starting point, iterator condition, incrementor) 
    for (var i = 0; /* starts at 0 */ i < 10; /* continues to 10 when becomes false */ i++ /* inrements iterator by +1 */) {
        // Code goes here.
    }


    // Examples:

        var threeHellos = []
        for (var i; i < 3; i++){
            threHellos.push('hello');
        }

        var countToThree = [];
        for (var i = 1; i <= 3; i++){
            countToThree.push(i;)
        }


    // % 2 = Is divisible by 2. Returns value 0 if true, 1 if false. Basically tells us if the value is divisible by 2.
        var nums = [2,31,47,16];
        var evenNums = [];

        for(var i = 0; i < nums.length; i++){
            if (nums[i]  % 2 === 0) { // If nums[index i] is divisible by 2 equals 0 (true).
                evenNums.push(nums[i]); //Push nums[index i] into variable "evenNums".
            }
            return evenNums;
        }

// Objects

    // Creating an object:
        var myObject = {
            // property: value
            name: "DevMountain",
            coolness: 100,
            hometown: "provo"
        };

        // Examples:
            var myDog = {
                name: "Chuckles",
                breed: "German Shepherd"
                age: 2
            };

            var myCar = {
                make: "Ford",
                model: "Fiesta",
                year: 1978,
                accidents: [1982, 1995, 2011]
            }

    // Dot Notation - Can be used to access, change, or create properties on an object.
        
        var myCar = {
            make: "Ford",
            model: "Fiesta",
            year: 1978,
            accidents: [1982, 1995, 2011]
        }

        myCar.accidents; // Accesses the property "accidents" and gives "1982, 1995, 2011".
        myCar.make = "Chevy"; // Updates "make" to Chevy.
        myCar.model = "Cruise"; // Updates "model" to Cruise.
        myCar.color = "Blue"; // Adds "color" property and assigns "Blue".

    // Bracket Notation - Pull informatoin off an object.

            var myCar = {
                make: "Ford",
                model: "Fiesta",
                year: 1978,
                accidents: [1982, 1995, 2011]
            }

            myCar[1] // Gives the value under the first property in the object.
            
            var yearBought = "year";
            myCar[yearBought] // Gives 1978.
        
        // Changing properties on an object with Bracket Notation:

            var chameleon = {
                color: "red",
                texture: "scaly"
            };

            function changeProp(propName, newValue) {
                chameleon[propName] = newValue; // Changes value on chameleon using propName provided and value provided below.
            };

            changeProp("color", "fucsia");

            chameleon.color // Gives fucsia.

        // Combining Strings or Numbers:
            
            var chameleon = {
                color: "red",
                texture: "scaly"
            };
            chameleon["tex" + "ture"] // Gives "scaly". Can combine strings using +.


            var shelves = {
                1:["Beowulf", "Sherlock Holmes"],
                2:"trophy"
            }
            shelves[1][1] // Gives first item in Object:["Beoulf", "Sherlock Holmes"] Gives first index item in the array: ["Sherlock Holmes"]
            shelves[1 + 1] // Gives "trophy".

    // Methods (functions that live on an object)
        //Use Dot Notation to update and access values.

        // Function inside an object:
            var myCat = {
                name: "Excaliber",
                meow: function() {
                    console.log("meow");
                }
            }

            var myCar = {
                miles: 20000,
                drive: function() {
                    myCar.miles++;
                }
            };
            myCar.drive(); // Runs drive function and adds 1 to the # of miles driven.
            myCar.miles // Returns updated number at 20001

            var book = {
                title: "Mistborn"
                pagesLeft: 340,
                read: function() {
                    book.pagesLeft--
                }
            };
            book.read(); // Runs read functoin and subtracts 1 from the pagesLeft.
            book.startOver = function() { // Adds property "startOver" with function as value.
                book.pagesLeft = 540;
            }
            book.startOver(); // Runs startOver function and changes pagesLeft to 540.
    
    
    // Callbacks - When we pass a function into another function as a parameter. (A function that is passed as a parameter into another function which invokes it.)
            doSomethingThatTakesAWhile(function(){
                //code to do when it's done
            })        
    
            takesACallback(15,myFunction);

            createWorldPeace(solveWorldHunger)

        //Examples:
            
            function delayedBirthday() {
                console.log("Happy Late Birthday!");
            }
            setTimeout(delayedBirthday, 1000); // Invokes "delayedBirthday" after 1000 miliseconds.


            array = [2,4,6,8];

            array.forEach(function(num, i, arr) { // Function called "forEach" part of array. 
                return arr[i]++;
            })
                // returns [3,5,7,9]
    

                function takesACallback(num,callback) {
                    callback(num);
                }

    
    
    // Practice:
            
    // Create a newCar function that takes in two parameters: make and model.  
    // Using those parameters, create a car object, give it make and model properties, and return it from the function.

        function newCar(make, model) {
            var car = {
            make: make, 
            model: model
        };
        return car;
        }

    // Create a function called canDrive that takes in a person object that has a name and an age property. 
    // If the person's age is greater than or equal to 16 then return a string concatenating their name with the string " is old enough to drive." 
    // If the person's age is less than 16 then return a string concatenating their name with the string " is not old enough to drive."

        function canDrive (person) {
            if (person.age >= 16) {
            return person.name + " is old enough to drive."
            } else {
            return person.name + " is not old enough to drive."
            }
        }

    // Create a function called changeEmail that takes in a user object and a newEmail string. 
    // Replace the user's current email address (assigned to the email property) with the newEmail string, then return the updated user object.

        var string = "newEmail";
        function changeEmail (user, string) {
        user.email = string;
        return user;
        }

    //Create a function called unknownPerson that takes in a person object. 
    // This person object will have properties such as name, age, gender, etc. 
    // Loop through all the properties of the object and set each value to "Unknown", then return the object. 

    // For example, if "person" is {name: "Dolph L.", age: 33} then the function would return {name: "Unknown", age: "Unknown"}.

        function unknownPerson (person) {
            for (var prop in person) {
            person[prop] = "Unknown";
            }
            return person;
        }

    // Create a function called truthyObject that takes in a user object. 
    // This function should loop through the user object checking to make sure that each of its values is truthy. 
    // If a value is not truthy then remove it from the object. 
    // Return the updated object after looping through it.

        function truthyObject (user) {
            for (var prop in user) {
            if (!user[prop]) {
                delete user[prop];
            }
            }
            return user;
        }

    //Convert the following If statement into a Ternary

        // if (num > 5) {
            
        //      return "greater"
            
        //     } else {
            
        //       return "lesser"
            
        //     }

        function func() {
            var num = 7
            //Write your code below here
            
            return num > 5 ? "greater" : "lesser";
          }
          func()

    // Write a ternary that checks the gender variable. If it is "male" return "Mr", otherwise return "Mrs".

        var gender = "male"
        
        function func() {
        //Write your code below here
        
        return gender == "male" ? "Mr" : "Mrs";
        }

    // Write a Ternary that checks if age is greater than or equal to 18. If it is, set adult to true. If not, set it to false.

        var age = 17
        var adult
        
        function func() {
        return age >= 18 ? adult = true : adult =false;
        }
        func()


// Arrow Functions:

        // Create a one line ES6 arrow function called isGreaterThanTwenty that will take in a parameter and return true if the parameter is greater than 20. The function should return false otherwise.
        // You should not use the ES5 function declaration syntax in your final solution.
        // Your function should not be longer than one line. 

            var isGreaterThanTwenty = (param) => param > 20;
    //-------------------------------------
        // Create a one line ES6 arrow function called seven that will return the number 7.    
        // You should not use the ES5 function declaration syntax in your final solution.
        // Your function should not be longer than one line.
            
            var seven = () => 7;
    //-------------------------------------
        // Re-write the ES5 functions provided as ES6 arrow functions. Name your functions the same as the ES5 versions provided.
        // You should not use the ES5 function declaration syntax in your final solution.
        // Be sure to call the functions the same name as in the ES5 syntax functions.

            Function 1
            // function add(num1, num2){
            //   return num1 + num2;
            // }

            var add = (num1, num2) => num1 + num2

            Function 2
            // function subtract(num1, num2){
            //   return num1 - num2;
            // }

            var subtract = (num1, num2) => num1 - num2

            Function 3
            // function double(num){
            //   return num * 2
            // }

            var double = (num) => num * 2
    //-------------------------------------
        //Create an ES6 arrow function called multiply that will take in two parameters and return the product of the two parameters.
        // You should not use the ES5 function declaration syntax in your final solution.

            var multiply = (param1, param2) => param1 * param2
    //-------------------------------------
        //Create an ES6 multi-line arrow function called isGreaterThanTwenty that will take in a number parameters and return true if the parameter is greater than twenty. The function should return false otherwise.  
        // You should not use the ES5 function declaration syntax in your final solution.
        // Function should be multi-line.

            var isGreaterThanTwenty = (num) => num > 20;
    //-------------------------------------
        //Create an ES6 arrow function called add that will take in two parameters, both numbers. The function will need to add the two parameters passed in. 
        // You should not use the ES5 function declaration syntax in your final solution.

            var add = (num1, num2) => num1 + num2


//--------------------------------
            // Create a function called truthyFalsy that takes a destructured object as it's parameter.
            // The properties of this object will be number and string. 
            // One of these properties will be truthy, the other will be falsy. Return the value that is truthy.   
            // Important: Let and const do not register with Replit's unit testing. You must use var or the tests will fail.

            var truthyFalsy = (obj) => {
                var {number, string} = obj;
                if (!number) {
                return string;
                }
                else {
                return number;
                }
            }
    //------------------------------
        // Write a ternary that assigns either true or false to the variable candyEaten, based off the variable isDiabetic. 
        // If  isDiabetic is true, set candyEaten to false, and vice versa

            var isDiabetic = false;
            var candyEaten;
            
            function func(){
            //write your code below here
            return isDiabetic ? candyEaten = false : candyEaten = true;
            
            }
            
            func();
    //-----------------------------
        //Create a function called outerFn, that takes in a callback as a parameter, and then returns that callback invoked.
        // To see it working, invoke outerFn at the bottom, passing in the InnerFn as the callback. You should now see "The innerFn is a callback!" in the console.

            // Create function here
            function outerFn (callback){
                return callback();
            }
            
            // ===== DO NOT TOUCH CODE BELOW THIS LINE ===== //
            var innerFn = () => {
                return "The innerFn is a callback!";
            }
            // ===== DO NOT TOUCH CODE ABOVE THIS LINE ===== //
            
            // Invoke function here
            outerFn(innerFn);
    //-----------------------------
        //Create a function called fullName, that takes in three parameters: firstName, lastName, and a callback.
        // The fullName function should return the callback, passing in firstName and lastName as parameters.
        // To test, invoke fullName with your first name, last name and the welcomeMessage function as arguments.

            // Create function fullName here
            function fullName(firstName, lastName, callback){
                return callback(firstName, lastName);
            }
            
            
            // ===== DO NOT TOUCH CODE BELOW THIS LINE ===== //
            var welcomeMessage = (first, last) => {
                return `Welcome to DevMountain, ${first} ${last}!`
            }
            // ===== DO NOT TOUCH CODE ABOVE THIS LINE ===== //
            
            
            // Invoke fullName below
            fullName("Chris", "Dinehart", welcomeMessage);

    //----------------------------
        // Write a ternary that checks headPain and distasteOfMedicine. 
        // If headPain is greater than 7 and distasteOfMedicine is less than 5, or if headPain is greater than 9, return true. Otherwise, return false.

            var headPain = 8
            var distasteOfMedicine = 7
            
            function func() {
            return headPain > 7 & distasteOfMedicine <5 | headPain > 9 ? true : false
            }
            
            func()
    //----------------------------
        // Write a ternary that invokes sayHello if goodMood is true, if not, invoke ignore.

            function sayHello() {
                return "hello"
            }
            function ignore() {
                return '...'
            }
            
            var goodMood = true
            
            function func() {
                //Write your code below here
                return goodMood ? sayHello() : ignore();
    //----------------------------
        // Write a ternary that checks to see if age is greater than 18. If it is less than 18, set employed to false. If age is greater than 18, write another ternary inside the first that checks to see if canCode is true or false. 
        // If it is true, set employed to true, otherwise set it to false.

            var age = 21
            var canCode = true
            var employed
            
            function func(){
            //Write your code below here
            return age < 18 ? employed = false : 
            canCode ? employed = true: false
            }
            
            func()
    //---------------------------
        // Write a ternary that checks to see if chocolate is true or false. If it is false, set candy to be "skittles". 
        // If it is true, use another ternary to check to see if caramel is true or false. If it is true, set candy to be "twix", otherwise set candy to be "three musketeers". 

            var chocolate = true
            var caramel = false
            var candy
            
            function func() {
            //Write your code below here
            return !chocolate ? candy = "skittles" : 
            caramel ? candy = "twix": candy = "three musketeers";
            
            }
            func()

    //--------------------------
        //Write two functions, one called add and one called multiply, that each takes in two numbers and returns the appropriate new value.
        // Write a function called math that takes in two numbers, and a function 'operator' as parameters.
        // This function should return a callback invoked with the appropriate arguments.

            function add(num1, num2){
                return num1 + num2;
            }
            
            function multiply(num1, num2){
                return num1 * num2;
            }
            
            function math(num1, num2, operator){
                return operator(num1, num2);
            }

    //--------------------------
        // For this problem, we will be re-creating the functionality of the .filter function.
        // Begin by creating a checkAge function.
        // It needs to take in an array, loop through it, and return a new array containing all the numbers greater than 18.

            function checkAge(array){
                var newArray = [];
                for (var i = 0; i < array.length; i++){
                if (array[i] > 18){
                newArray.push(array[i]);
                }
                }
                return newArray;
            }
    //--------------------------
        // Inside the productOfArray function use the built in reduce method to loop over the array called numbers and return the product of all the numbers in the array. 
        // Make sure to use the arrow function combined with the filter method. 

            var numbers = "TBD";

            var productOfArray = () => {
                // Your Code Here
                return numbers.reduce((answer, value) => {
                return answer *= value},1)
            }