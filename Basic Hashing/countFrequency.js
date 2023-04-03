//count frequencies of all character in a string:

function count(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  return obj;
}
// console.log(count("siddharth"))

//find highest and lowest frequency in the object
function highest(str) {
  new_str = count(str);
  let highest = -Infinity;
  for (let key in new_str) {
    if (highest < new_str[key]) {
      highest = new_str[key];
    }
  }
  return highest;
}
console.log(highest("Siddharth"));
