
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
var fromArray = Array.from( 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' );
console.log( fromArray ); //Oh geeze, that's a 26 -element array now.

var fromArray2 = Array.from( 'Hello, World!' );
console.log( fromArray2 ); //Even spaces and special characters will be captures as elements!

/**
 * .filter() method:
 * returns array of all matches
 */

 var filtered = myArray.filter( function ( element ) { return element > 4 } );
 console.log( filtered ); // ALL matches returned! 5 and 38!


 /**
 * .reduce() method:
 * We can add on to a value, returns only a single
 */
var reduceResult = myArray.reduce( function ( accumulator, currentVal ) {
    return accumulator + currentVal;
});

console.log(reduceResult);

console.log([ 1, 2, 3, 4, 5].reduce( function ( a, v ) {
    return a + v;
} ) ); // Because we have numbers in here, they are being added (mathematically.)

