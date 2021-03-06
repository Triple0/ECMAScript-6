// import './Movies.Class'; // Bring in our file.

/**
 * Let's see what some of our newer array metods are...
 */

// .find() returns the first occurence

var myArray = ['hello, world!', 2, 3, true, 'abc', 5, null, 38];
var myValue = myArray.find(function (element) { return element > 4 }); // Can be used to see if element exists
console.log(myValue); // Returns 5, an element from our array! Only gives us one item back.

// For Checking if an element exists in the array
var isMyStringInside = myArray.find(function (element) { return element === 'Hello, world!'.toLowerCase(); });
console.log(isMyStringInside); // We would get the matching element.

// Find is helpful for checking if an element exists in an array!
var isMyStringInside = myArray.find(function (element) { return element === 'Goodbye, Everyone :('; });
console.log(isMyStringInside); //Not found :(

/**
 * .findIndex() returns index number
 */
// Still searching for an element!
var findAnIndex = myArray.findIndex(function (element) { return element === 2; });
console.log(findAnIndex); // But this time, it returned the valuse's INDEX


/**
* .entries() returns index number and value of each element of the array
*/

var pairing = myArray.entries();
console.log(pairing); //returns an iterator
console.log(pairing.next().value); // We can keep bumping to the next item, getting a nice key/value array to let us know what's inside!
console.log(pairing.next().value);
console.log(pairing.next().value);
console.log(pairing.next().value);
console.log(pairing.next().value);
console.log(pairing.next().value);
console.log(pairing.next().value);
console.log(pairing.next().value);


/**
 * from() method:
 */
//We can pass a string to Array's "from" method, and break each character put into an array!
var fromArray = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
console.log(fromArray); //Oh geeze, that's a 26 -element array now.

var fromArray2 = Array.from('Hello, World!');
console.log(fromArray2); //Even spaces and special characters will be captures as elements!

/**
 * .filter() method:
 * returns array of all matches
 */

var filtered = myArray.filter(function (element) { return element > 4 });
console.log(filtered); // ALL matches returned! 5 and 38!


/**
* .reduce() method:
* We can add on to a value, returns only a single
*/
var reduceResult = myArray.reduce(function (accumulator, currentVal) {
    return accumulator + currentVal;
});

console.log(reduceResult);

console.log([1, 2, 3, 4, 5].reduce(function (a, v) {
    return a + v;
})); // Because we have numbers in here, they are being added (mathematically.)

/**
 * Let and Const
 */

var x = 3; // Stands=ard variable declaration. Function-scoped.
let y = 7; //Let is block scoped
const z = 36; // Const is block-scoped, but re-assignment is not allowed.

//z = 16; Not allowed! Const must remain with its original assignment.
console.log(z);

y = 13; // Allowed! var and let allow re-assignment.
console.log(y);

// Var is function-scoped, it will persist beyond the for loop
for (var myVar = 0; myVar < 10; myVar++) {
    console.log('myVar = ' + myVar);
}
console.log('myVar = ' + myVar);

// Let is BLOCK scoped... it lives and dies in ANY block (like an if, or a loop!)
for (let myNewVar = 0; myNewVar < 10; myNewVar++) {
    console.log('for loop iteration... = '); // lives and dies here in a block
    console.log('myVar = ' + myNewVar);
}

//console.log( 'myNewVar = '+myNewVar); // We can't access it outside of the block

/**
 * Const can't be re-assigned... but its insides can be manipulated
 */

const myObj = {
    name: 'Henry',
    age: 18
}

myObj.name = 'Sandy'; // Can we update PROPERTIES or array ELEMENTS inside of a const-declared variables?
myObj.hobbies = [];
myObj.hobbies.push('Mountain Climbing');
console.log(myObj);


// myObj = {} // THIS WOULD STILL ERROR. Only insides for a const can be manipulated.

/**
 * Let's shake things up with: FUNCTIONS
 * New syntax
 */

function myFunction(a, b) {
    return Number(a) + Number(b);
}

console.log(myFunction(3, 7));

// ES6 style:
myFunction = (a, b) => Number(a) + Number(b); // Instant return with no curly braces.

console.log(myFunction(3, 8));


// Bigger function (ES6)
myOtherFunction = (a, b) => {
    const myAnswer = Number(a) + Number(b); // Use curly braces for larger, more complex operations.
    return myAnswer;
}

console.log(myOtherFunction(34, 6));

/**
 *  Function default parameter values
 */

// We can set defaults, to prevent errors in case notthing gets passed in for a parameter!
addNums = (x = 0, y = 0) => x + y;

console.log(addNums()); // No arguments! But our default values kick in!

/**
 *  Rest parameter.
 */

findHighNum = (minNum = 0, ...args) => { // ...args will capture any number of arguments that we pass!
    minNum = Number(minNum);
    if (minNum == NaN) minNum = 0;
    const highNums = args.filter((element) => element > minNum);
    //console.log( args ); // It can be called by the name we had inbetweeen our parenthesis.
    return highNums;
}

console.log(findHighNum(5, 2, 20, 50, 3, 0, 10, 24, -508));

addAllNums = (...nums) => nums.reduce((a, v) => a + v);
console.log(addAllNums(64, 6, 10));

/**
 *  Template Literals.
 */

const helloVar = 'Hello, World!';
const sampleName = 'Sam';

constmyNewString = `Hey there, my name is ${sampleName}; I\'d like to give you a big: "${helloVar}"!!`; // works using ` (back ticks)
// The syntax for template literala is: ${variableName}
// NOTE: This only works inside of backticks! but is super useful. It saves us from extra concatenation.
console.log(constmyNewString);

/**
*  Spread Operator
*  *** Don't get this confused with the rest paramenter! Bother are three dots ...
*  *** Remember that rest parameter is aways in PARAMETER area of a function, nowhere else. Spread is used ANYWHERE else, basically.
*/
const newArray = ['Hello', ',', ' ', 'World', '!'];
console.log(newArray);
console.log(...newArray); //Brought the values in the array together as one string. Or did it?

// Spread operator separates into separate values.
const aBunchOfNums = [5, 10, 36, 58];
console.log(addAllNums(5, 10, 36, 58)); // This and the below, are equivalent (our array gets broken up!)
console.log(addAllNums(...aBunchOfNums)); // Spreading an argument.

/**
 *  String Methods!
 */

/**
 *  .search() method:
 *  
 *   Regex Learning Tool: https://regexone.com/
 */

const myTestString = 'Greetings, Programs!';
console.log(myTestString.search(/tings/i)); // i means case INsensitive. returns the index the word starts from. Returns the SUBSTRING POSITION . TING is 4


// if ( prompt( 'enter your pass' ).search( "^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$")))


/**
 *  .replace() method
 */

const myReplacedString = myTestString.replace(/Programs/, 'World'); //Find a string, and replace it! Super cool.
console.log(myReplacedString);

/**
 *  Blocks:
 */

{
    const myBlockNestedVar = 38;
}

//console.log( myBlockNestedVar ); - won't print cos it is outside its block
// We CAN name blocks if we want.

let myFinalResult = 0;
myOrganizeName: { // This could be named anything...
    // We can organise some code in here, and control scope of let/const
    let myBlockNestedVar = 55; // We used the same name as in our unnamed block!? That's okay, it was born in a differently scoped block!
    myBlockNestedVar++;
    console.log(myBlockNestedVar);
    myFinalResult = myBlockNestedVar;
}
console.log(myFinalResult);

/**
*  Classes.
* ***** CHECK OUR IMPORT, THAT'S HOW WE'RE ACCESSING THIS!
*/


class Movie {
    constructor(name, genre, year) {
        this.name = name;
        this.genre = genre;
        this.year = year;
    }

    get getName() { // How we retrieve the property. A GETTER
        return this.name;
    }
    set setName( newName ) { // How we store a new property value. A SETTER
        if ( typeof name === 'string' ){
            this.name = name;
        } else {
            this.name = name.toString();
        }        
    }

    get getYear() {
        return 'Y'+this.year;
    }

    set setYear( year ) {
        this.year = Number( year );
    }

    showPoster() { // This is a method! We can name them as we'd like.
        const info = `
            MOVIE INFO
            ==========
            Name:  ${this.name}
            Genre: ${this.genre}
            Year:  ${this.year}
            `;
            return info;
    }
}



const tron = new Movie('Disney\'s TRON', 'Adventure', 1982);
const dragonheart = new Movie('Dragonheart', 'Medieval Fantasy', 1996);
const godFather = new Movie('GodFather II', 'Action/Thriller', 1974);

console.log(tron);
console.log(dragonheart);
console.log(godFather);


/**
 *  Inheritance.
 */
