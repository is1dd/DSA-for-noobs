// Print numbers from 1 to N with recursion


function print(i , num){
    if(i>num) return;
    console.log(i)
    print(i+1 , num)
}
   
//print n -> 1:
function printReverse(i){
    if(i<1) return;
    console.log(i);
    printReverse(i-1)
}
printReverse(6)