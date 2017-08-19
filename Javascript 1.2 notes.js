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