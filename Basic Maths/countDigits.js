// // Problem Statement: Given an integer N , write program to count number of digits in N.
// Example 1:
// Input: N = 12345
// Output: 5
// Explanation: N has 5 digits

 //Noob approach
// let number = 24222227;
// let count = 0;
// while (number != 0) {
//   count++;
//   number = Math.floor(number / 10);
// }
// console.log(count);

//noob approach but functional
function countDigits(num){
    let count = 0;
    while(num!=0){
        count++;
        num = Math.floor(num / 10)
    }
        return count;
}
// console.log(countDigits(8394));

//modification in the question give me the sum of the digits

function sumOfDigits(num){
    let sum = 0;
    while(num!=0){
        sum = sum + num % 10;
        num = Math.floor(num/10)
    }
    return sum;
}
console.log(sumOfDigits(8394));