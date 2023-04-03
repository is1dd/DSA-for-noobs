// Sum of first N Natural Numbers using recursion

function summation(num, sum) {
  if (num < 1) {
    console.log(sum);
    return;
  }

  summation(num - 1, sum + num);
}
summation(4, 0);

//better way 

function sum(num){
    if(num==0) return 0;
    return num + sum(num-1)
}
console.log(sum(4))