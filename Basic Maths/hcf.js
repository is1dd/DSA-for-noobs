// find highest common factor

function hcf(num1 , num2){
    let ans = [];
  
    for(let i=1;i<=Math.min(num1,num2);i++){
        if(num1 % i ==0 && num2%i==0){
             ans.push(i);
             
        }
            

    } return ans[ans.length - 1];
}
console.log(hcf(6,15))
// console.log(Math.min(8,16))