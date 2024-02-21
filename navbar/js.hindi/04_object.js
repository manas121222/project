 //const tinderuser = new object ()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = 'manas'
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: 'manas121@gmail.com',
    fullname: {
     userfullname: {
         firstname : "manas",
         lastname : "bhardwaj"
     }
    }
}
console.log (regularUser.fullname.userfullname.lastname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4= {4:"a", 5:"b"}
// const obj3 = Object.assign({} ,obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3); 
const users = [
    {
        id: 1,
        email: "manas121@gmail.com",

    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.value(tinderUser));
console.log(Object.entries(tinderUser));
 console.log(tinderUser.hasownproperty("isLoggedIn"))

 