// if statement
const temperature = 41
// if(temperature === 40){
//     console.log("temperature is greater than 50");
// }
// else{
// console.log("temperature is less than 50 ")
// }
// control condition
//> , < ,<=,>=, == ,!=, === ,!==,

// const score =200;
// if(score > 100)  {
//     const power ="fly"
//     console.log(`user power : $(power)`)
// }
// console.log(`user power : $(power)`)

//const balance = 1000
// if(balance > 500) console.log("test"),
// console.log("test2");

// if(balance < 500){
//     console.log ("less than 500")
// }
// else if (balance < 750){
//     console.log("less than 750")
// }
// else if (balance < 800){
//     console.log("less than 800")
// }
// else{
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitcard && 2==2){
    console.log ("allow to buy course");
}
if ( loggedInFromGoogle || loggedInFromEmail){
    console.log("allow login")
}
else{
    console.log("donot  login")
}
