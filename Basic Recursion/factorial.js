// Factorial of a Number : Iterative and Recursive
//iterative approach
function fact(num) {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res = res * i;
  }
  return res;
}
// console.log(fact(4));

//recursive approach:
function factorial(num){
    if(num==0) {
        return 1;
    };
    return num * factorial(num-1)
}
console.log((factorial(4)))