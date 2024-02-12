// primitive data type
//7 type: string, number,boolian,null,undefined,symbol,Bigint;
// java script is a dynamic data type
const score= 100
const scoreValue=100.3;
const isLoggedIn= false
let userEmail;

//symbol declear
const id= Symbol(123)
const anotherId=Symbol(123)
console.log(id===anotherId)


//refrence type (non primitive)
//Array,object,function,
const heros=["manas","shivakant","doga"];
let={
name:"manas",
age: 22,
}
const myFunction=function(){
    console.log("hellow world");

}
console.log(typeof myFunction);