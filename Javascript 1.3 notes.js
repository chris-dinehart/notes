//Functions built on Array's

    .indexOf // A method on arrays that finds the first instance of a value.
             // If value is not found .indexOf will return -1.
             // Only looks for first occurence of match in a string.

        array.indexOf('a') // 'a' is the value to be searched for.
        
        // Example:
            var fruits - ["apple", "banana", "cherry", "apple"];
            var bananaPlace = fruits.indexOf("banana";) // Returns 1. Be careful, case sensitive.

    .forEach // A method on arrays that allows you to run a function based on each element.
             // Does a "for" loop for you passing in each value of the array one at a time.
             // Updates original array of values and returns it.

        array.forEach(function(val,i,arr){ // 'val' is value of the current element. 'i' is index of current element. 'arr' is array the method is called on.
            // This will return undefined.
        })

        // Example:
            var ages = [53, 50, 29, 22, 16];
            ages.forEach(function (val, i , arr){
                arr[i = val +1;]
            }) // Adds 1 to every value in this array.
        
    .map // Creates new array of values and returns it.

        var ages2016 = [53,50,29,22,16];
        var ages2017 = ages2016.map(function(element){
            return element + 1;
        }) // Adds 1 to every value in the array and returns the new array. Old array is unmodified.
    
    .filter // A way to pull out pieces of the array based off certain criteria. Creates a new array with results of boolean statement.

        var names = ["Suzie","Ben","Mark","Franklin"]
        var shortNames = names.filter(function(){
            return val.length < 5;
        })


// Prototypes

    // This is a constructor function because of the name of the function being capitalized.
    // You can also tell it's a constructor function because of the "this" keyword being used.

        function Dog () {
            this.legs = 4;
            this.bark = function() {
                return 'arf arf;;
            }
        }

        vargermanShepherd = new Dog();
     // This creates "bark" over and over and over again. Rather than doing what's above we will build a prototype as follows:

        function Dog () {
            this.legs = 4;
        }
        Dog.prototype.bark = function () {
            return "arf arf";
        }
        var corgi = new Dog ();
        corgi // Gives "legs: 4".
        corgi.bark(); // Gives "arf arf". Looks on the prototype when calling.

//Classes

    // Class is a fancy name for "Constructor Function".

    // Example:

        class Burger {
            constructor(layers) { // "Constructor" is entry point that's invoked when we say the "new" keyword.
                this.layers = layers;
                this.percentLeft = 100;
            }
            eat() { // Function that doesn't require "function" keyword because it's inside the class "Burger".
                this.percentLeft - -; // Decrements from "percentLeft".
            }
        }

        var tripleBigBoy = new Burger (3);

// Deleting properties from Objects.
    
    // Use "delete" keyword.

        delete "property"; // This deletes the property.
    
        // Examples:

            myObj = {
                code: 'awesome',
                boredom: 'lame'
            }
            delete myObj.boredom;

        //-----------------------------
            var work = {
                success: 'great',
                mistake: 'woops'
            }
            delete work.mistake;
            delete work['success'];

// For In Loops - Used to loop over all the items in an object and interact dynamically with that object as we go.


        // Example:
            var favorites = {
                color: 'red',
                flavor: 'vanilla'
            };

            for (var prop in favorites) {
                console.log(favorites[prop]);
            }

// Copying with Assign - Making a copy of objects, or merging objects together.
        
        Object.assign ()

        // Examples:
            var obj = {
                name: 'Joseph'
            };
            var obj2 = Object.assign({},obj);

        //--------------------------
            var cat = {
                name: 'Fluffles'
            }
            var tuna = {
                container: 'can'
            }

            var dogFood = Object.assign(cat,tuna); // Copies TO cat object all properties FROM the tuna object.
            var dogFood = Object.assign({},cat,tuna); // Copies cat object merged with tuna object because empty object was passed in first. 


// Object destructuring:

        // Examples:

            // Intro:
            // Object destructuring allows you to "unpack" properties from objects and assign them to variables. 

            // Problem:
            // Here you are given the object animalCount. Destructure this object so that you have 3 distinct variables with the values of the matching properties from animalCount.
            // Important: Let and const do not register with Replit's unit testing. You must use var or the tests will fail.

                let animalCount = {
                    cats: 2,
                    dogs: 5,
                    mice: 0
                }
                
                var{cats, dogs, mice} = animalCount;    

        //----------------------------
            //Intro:
            // Now that you have some experience with destructuring, we will take it one step further. Instead of using a variable to assign values, we will use an object literal. Uncomment the code on the side to see an example of this.
            // Problem:
            // Create an object literal to assign the variables students, mentors and instructors a value through destructuring. Set the value of students to be 24, mentors to be 3, and instructors to be 5.

                var {students, mentors, instructors} = {students: 24, mentors: 3, instructors: 5}  
            
        //-----------------------------   
            // Create an object named languages. Give it the properties 'French', 'English' and 'Spanish'. Give these properties the value true if you speak the language, false if you do not.
            // Use destructuring to assign the values of these properties to new variables.
            // Important: Let and const do not register with Replit's unit testing. You must use var or the tests will fail.

                languages = {
                    French: false,
                    English: true,
                    Spanish: true
                }
                
                var{French, English, Spanish} = languages
        //-----------------------------
            //Write a function called subtraction with an object parameter. The object passed in this function will have the property names num1 and num2. Use object destructuring to assign the values of these properties to new variables. Subtract num1 from num2 and return the result. 
            // Important: Let and const do not register with Replit's unit testing. You must use var or the tests will fail.

                var subtraction = (obj) => {
                    var {num1, num2} = obj;
                    var total = num1 - num2;
                    return total;
                }
        //-----------------------------
              // Create a function called zooAnimals that will take an object parameter. The object passed to this function will have the property names lion, tiger, and bear. The values of these properties will be a number representing the count of that animal in the zoo. 
              // Using object destructuring, return the value of all of these properties combined.

                var zooAnimals = (obj) => {
                    var {lion, tiger, bear} = obj;
                    var total = lion + tiger + bear;
                    return total;
                }