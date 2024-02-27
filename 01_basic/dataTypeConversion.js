// let number = "33"
// console.log(number);// this is string but we need number then we have to convert it into number 
// console.log(typeof number);
// let num  =  Number(number);

// console.log( typeof num); 

// /*
// 33
// string
// number
// */

// //  String conversion

// console.log('1' + 1 + 2); // -----> o/p 122 if 1st operand is string then it consider rest of the operand is string 
// console.log(2 + 2 + '2'); // -----> o/p 42 if any  operand is string then it consider rest of the operand is string here  2 +2 = 4 and then it conver that 4 into string 41
// console.log(2 + 2 + '2' + 2 + '2' + 2); //42222 any where it find the string then all the operand considerd as a string 
 
console.log('sachin' > 'madas'); // return true 
console.log('abhishek' > 'dhone'); // return false it checking the indexing of each letters
console.log('Z' > 'A'); // return true
console.log('A'>'a'); // return false
/*
 sachin > madas it check 1st letter is greater then 1st letter of 2nd string if it is geater then 1st string is geater this thing continue happen untill the end of the string 
 Z  is geater then A becuse indexing
 A is smaller then a because of indexing
*/

// // this all thing happen only with binary  plus (+) operator and in rest of the arithmatic operation they convert it itno the number 

// console.log('6' / 3); // ----> o/p 2
// console.log('3' * 2 ); // -------> o/p 6
// console.log(8 - '9'); // ---------> -1
// //  only binary (+) is concatenate and consider as the string 

// //  boolean conversion 

// // rule for boolean conversion is 
// // null, undefined, NaN , 0, becomes false others are true

// let userName = Boolean (0) ;
// let password = Boolean (1);
// console.log(userName); //-----> o/p false
// console.log(password); // ----> o/p true
// let apple  = '3';
// let mango = '5';

// console.log(apple + mango); // -----> o/p 35
// console.log(+apple + +mango); // -----> o/p 8
// //       or
// console.log(Number(apple) + Number (mango)); // ----> o/p 8

// // null and undefined
 
// console.log(null > undefined); // -----> o/p false
// console.log(null == undefined); // ----> o/p true
// console.log(null>= undefined); // -----> o/p false
// console.log(null === undefined);// ------> o/p false