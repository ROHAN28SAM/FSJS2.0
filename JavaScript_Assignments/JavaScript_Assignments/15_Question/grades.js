// Write a program which can give grades to students according to theirs scores:
//     - 90-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let marks = 90;

if (marks >= 90){
    console.log("You passed with A grade");
} else if (marks >= 70){
    console.log("You passed with B grade");
} else if (marks >= 60){
    console.log("You passed with C grade");
} else if (marks >= 50){
    console.log("You passed wih D grade");
} else {
    console.log("You are failed with F grade");
}