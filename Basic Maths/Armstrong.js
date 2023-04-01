// what are armstrong numbers ?
// split the digit, raised it to the power of number of digits and take sum of
//  if original number =  sum then yes it is

function countDigits(num){
    let count = 0;
    while(num!=0){
        count++;
        num = Math.floor(num / 10)
    }
        return count;
}
function sumOfDigits(num) {
let count = countDigits(num);
  let sum = 0;
  while (num != 0) {
    sum = sum + (num % 10)**count;
    num = Math.floor(num / 10);
  }
  return sum;
}
function checkArmstrong(num){
    
    return sumOfDigits(num)===num;
}
console.log(checkArmstrong(153))