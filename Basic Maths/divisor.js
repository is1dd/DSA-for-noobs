// Print all Divisors of a given Number

// I: 8 , O: 1,2,4
// I: 14 , O: 1,2,7

function printAllDivisors(num){
let ans = [];
for (let i = 1; i <= num / 2; i++) {
  if (num % i == 0) {
    ans.push(i);
  }
} return ans;
}
console.log(printAllDivisors(14))
