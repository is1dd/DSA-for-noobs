// *
// **
// ***
// ****
// *****
// Noob observations: for 1 row one star , for 2 row 2 star , for 3rd row 3 stars

// i -> 0, j -> 0
// i -> 1 , j -> 0 , 1
//i  -> 2 , j -> 0,1,2
let number_of_rows = 5;
let number_of_columns = 4;


for (let i = 0; i < number_of_rows; i++) {
  let str = "";
  for (let j = 0; j <= i; j++) {
    str = str + "* ";
  }
  console.log(str);
}