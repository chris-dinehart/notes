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
        