const user ={
    username : "manas",
    price : 999,
    welcomeMessage : function (){
        console.log (`${this.username},welcome to website`);
        console.log(this);
    }
}
//user.welcomeMessage()
//user.username = 'mohit'
//user.welcomeMessage()
console.log(this);

// function chai(){
//     let username = 'MANAS'
//     console.log (this);
// }
// chai()
//onst chai = function (){//
const chai = () => {
    let username = "mana"
    console.log (this);
}
chai()

// const addTwo = (num1 ,num2) => {
//     return num1+num2
// }
// console .log (addTwo(3,4));
const addTwo = (num1 ,num2) => (num1+num2)
console .log (addTwo(3,4));