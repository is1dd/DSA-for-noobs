// Example 1:
// Input: N = 123
// Output: Not Palindrome Number
// Explanation: 123 read backwards is 321.Since these are two different numbers 123 is not a palindrome.


function checkPalindrome(num){
    let x = num;
    let rev = "";
    while (x != 0) {
      rev = rev + (x % 10);
      x = Math.floor(x / 10);
    }
    return rev==num;
}
console.log(checkPalindrome(111));
