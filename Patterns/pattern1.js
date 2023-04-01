//   # # # #
//   # # # #
//   # # # #
//   # # # #

// noob observations --> there are 4 rows and 4 columns containign "#"
// 0(i) > 3(j) , 1 > 3, 2 > 3 , 3 > 3
let number_of_rows = 4;
let number_of_columns = 4;

for (let i = 0; i < number_of_rows; i++) {
  let str = "";
  for (let j = 0; j < number_of_columns; j++) {
    str = str + "# ";
  }
  console.log(str);
}
