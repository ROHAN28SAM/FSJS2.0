// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3 -> true correct
//     - 4 >= 3 -> true correct
//     - 4 < 3 -> false correct
//     - 4 <= 3 -> false correct
//     - 4 == 4 -> true correct
//     - 4 === 4 -> true correct
//     - 4 != 4 -> false correct
//     - 4 !== 4 -> false correct
//     - 4 != '4' -> false correct
//     - 4 == '4' -> true correct
//     - 4 === '4' -> true correct

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

//     - Find the length of python and jargon and make a falsy comparison statement
let language1 = 'python';
let language2 = 'jargon';

let len_language1 = language1.length;
let len_language2 = language2.length;
console.log(len_language1);
console.log(len_language2);

if (len_language1 > len_language2){
    console.log("Comparison is truly");
}else{
    console.log("Comparison is falsy");
}