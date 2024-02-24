// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if( element == 5){
        //console.log("5 is best number")
    }
    //console.log(element);
    
}
for(let i=0; i<=10;i++){
    //console.log(`outer loopvalue ${i}`);
    for(j=0;j<=20;j++){
  //console.log(`inner loop value ${j} and inner loop${i}`);
  //console.log(i + '*' + j + '=' + i*j);
    }
}


// let array =["manas", "mohit","shivakant"]
// console.log(array.length);
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }


// break,continue
for (let index = 0; index <= 20; index++) {
    // if (index == 5){
    //     console.log(`detect 5`);
    //     break;
    // }
    if (index == 5){
        console.log(`detect 5`);
        continue;
    }
    
    console.log(`value of i is ${index}`);
}