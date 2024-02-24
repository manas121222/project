// for of

//["", "",]
// const arr = [1,2.,3,4,]
// for (const num of arr)  {
//     console.log(num);
// }

// const greeting = 'manas bhardwaj'
// for (const greet of greeting) {
//     console.log(`each char is ${greet}`);
// }

// maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA',"united state of america")
// map.set('fr',"france")

// //console.log(map);
// for (const [key, value] of map) {
//     console.log(key,`:-`,value );
// }

// const myObject = {
//     js : 'javascript',
//     cpp : 'c++',
//     rb : "ruby",
//     swift :"sweift in apple"
// }
// for (const key in myObject) {
//  //console.log(myObject[key]);
//   console.log(`${key} shortcut is for ${myObject[key]}`);
// }
// const prgramming = ["rb","js",'py',"java","cpp"]
// for (const key in prgramming) {
// console.log(prgramming[key])
// }
// const map = new Map()
//  map.set('IN', "India")
//  map.set('USA',"united state of america")
//  map.set('fr',"france")
//  for (const key in map){
//  console.log(key)
    
 //}
 const coding  = ["js","rubby","javascript","python",]

// //  coding.forEach( function (Item) {
// //  console.log(Item);
// // })
// coding.forEach((item) => {
// console.log(item)
// })

// 
// coding.forEach((item ,index, arr) => {
//     console.log(item ,index , arr)
// })

const myCoding =[
    {
        language: "javascript",
        languageFileNmae : "js"
    },
    {
        language: "java",
        languageFileNmae : "java"
    },
    {
        language: "pythan",
        languageFileNmae : "pythan"
    }
]
myCoding.forEach(item => {
    console.log(item.language)
});