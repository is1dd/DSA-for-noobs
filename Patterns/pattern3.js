// 1
// 12
// 123
// 1234
// 12345

//noobs observation: 1 to i in every row

for(let i=1;i<6;i++){
    let str = ""
    for(let j=1;j<=i;j++){
        str = str + j.toString()
    }
    console.log(str)
}