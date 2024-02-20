function calculateCartPrice (Val1,Val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400,500));

const user={
    userName : "manas",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
}
handleObject(user)

const myNewArray = [200,300,400]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));