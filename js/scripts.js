
/**
 * Let's see what some of our newer array metods are...
 */

 // .find() returns the first occurence
 
var myArray = [ 'hello, world!', 2, 3, true, 'abc', 5, null, 38 ];
var myValue = myArray.find( function ( element ) { return element > 4 } ); // Can be used to see if element exists
console.log( myValue ); // Returns 5, an element from our array! Only gives us one item back.

// For Checking if an element exists in the array
var isMyStringInside = myArray.find( function ( element ) { return element === 'Hello, world!'.toLowerCase(); } );
console.log( isMyStringInside ); // We would get the matching element.

// Find is helpful for checking if an element exists in an array!
var isMyStringInside = myArray.find( function ( element ) { return element === 'Goodbye, Everyone :('; } );
console.log( isMyStringInside ); //Not found :(

/**
 * .findIndex() returns index number
 */
// Still searching for an element!
 var findAnIndex = myArray.findIndex( function (element ) {return element === 2; } );
 console.log( findAnIndex ); // But this time, it returned the valuse's INDEX


 /**
 * .entries() returns index number and value of each element of the array
 */

 var pairing = myArray.entries();
 console.log( pairing ); //returns an iterator
 console.log( pairing.next().value ); // We can keep bumping to the next item, getting a nice key/value array to let us know what's inside!
 console.log( pairing.next().value );
 console.log( pairing.next().value );
 console.log( pairing.next().value );
 console.log( pairing.next().value );
 console.log( pairing.next().value );
 console.log( pairing.next().value );
 console.log( pairing.next().value );