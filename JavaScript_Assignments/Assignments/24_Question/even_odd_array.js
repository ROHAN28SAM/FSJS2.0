let evenArray = [];
let oddArray = [];

for (let i=0; i<=100; i++){
    if (i % 2 == 0){
        evenArray.push(i);
    }else{
        oddArray.push(i);
    }
}

console.log(evenArray);
console.log(oddArray);