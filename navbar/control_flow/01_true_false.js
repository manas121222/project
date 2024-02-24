const userEmail ="manas121@gmail.com"

if(userEmail){
    console.log("got user email")
}
else{
console.log("don't have  user email")
}

//falsy value 
//false,0,-0,bigint 0n,"",null,undefined,not a number

//truthy value

// "0" ,`false`," ",[],{},function(){},

// const emptyobj = {}
// if(Object.keys(emptyobj).length){
//     console.log("objecet is empty");
// }

// nullish coaliscing operator (??) : nill,undefine

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//var1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

//ternary operator
//condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")



