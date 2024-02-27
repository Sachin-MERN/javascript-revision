const accountName = 'sachin'; // you cannot change the value of the const variables
let accountId = 123456;
var accountPassword = '12345sa';
accountCity = 'pune';

console.table([accountName,accountId,accountPassword,accountCity]);

//  accountName = 'madas'; TypeError: Assignment to constant variable.
// console.log(accountName); // 

accountId = 45612;
accountPassword = '325641sa';
accountCity = 'mumbai';
console.table([accountId,accountPassword,accountCity])

/*
   const not allowed to use 
   because block level and functonal scoping issue
*/


