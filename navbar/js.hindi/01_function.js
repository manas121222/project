function sayMyName() {
    console.log("m");
    console.log("a");
    console.log("n");
    console.log("a");
    console.log("s");
    
}
//sayMyName()


//function addTwoNumber(number1,number2){
//    console.log(number1+number2);
//}
function addTwoNumber(number1,number2){
    //let result = number1+number2
    ////console.log("manas");
    //return result
    return number1+number2
}

const result = addTwoNumber(3,4)
///console.log ("result",result);
function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a username") ;
        return
    }


    return `${username} just logged in`
}
//console.log(loginUserMessage("manas"));
console.log(loginUserMessage());


