//const coding = ["manas", "mohit","shivakant"]


// const value = coding.forEach(item => {
//     console.log(item);
//     return item
// });
// console.log(value)
// const myNums =[1,2,3,4,5,6,7,8,9,10]
// const newNums =myNums.filter((num) => num > 4)
// console.log(newNums);

// const newNums = []
// myNums.filter((num) =>  {
//     if (num >4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)
//  const books =[
//     {title:'book one',general : 'fiction',publish: 1981,edition : 2004},
//     {title:'book two',general : 'non fiction',publish: 1984,edition : 2008},
//     {title:'book three',general : 'history',publish: 1985,edition : 2009},
//     {title:'book four',general : ' history',publish: 1986,edition : 2010},
//     {title:'book five',general : 'fiction',publish: 1987,edition : 2015},
//  ];
//  let userBooks = books.filter((bk) => bk.general === 'history') 
//  //console.log(userBooks);
//   userBooks =  books.filter((bk) => bk.publish >= 2000 && bk.general ==="history")
//  console.log(userBooks);


// const myNumbers =[1,2,3,4,5,6,7,8,9,7,0]

// //const newNums = myNumbers.map((num) => num + 10)
// // chaning
// const newNum = myNumbers.map((num) => num*10)
// .map((num) => num + 1 ).filter ((num) => num >=40)
// console.log(newNum)

const myNums =[1,2,3,4]
//  const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc : ${acc} and currval ; ${currval}`)
//     return acc+currval
//  },0)
const myTotal = myNums.reduce((acc,curr) => acc+curr, 0)
 console.log(myTotal)
 
 const shoppingCart =[
    {
        itemName : "jscourse",
        price : 5999
    },
    {
        itemName : "pythan",
        price : 999
    },
    {
        itemName : "data scintist",
        price : 7999
    },
    {
        itemName : "mobile dev course",
        price : 6999
    },
 ]
 const pricetopay = shoppingCart.reduce((acc , item) => acc+item.price ,0)
 console.log(pricetopay)