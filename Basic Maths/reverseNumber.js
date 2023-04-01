// Example 1:
// Input: N = 123
// Output: 321
// Explanation: The reverse of 123 is 321

function reverseNumber(num){
    let rev = "";
    while(num!=0){
        rev = rev + (num % 10 ).toString()
        num = Math.floor(num/10)
    }
    return rev;
}
console.log(reverseNumber(123))