// Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

function printTriangle(num){
    let string = "";
    for (let i = 1; i <= num; i++) {
        for (let j = 0; j < i; j++) {
            string += "*";
        }
        string += "\n";
    }
    console.log(string);
}

printTriangle(3);
	
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

function printRectangle(num) {
    let string = "";
    for(let i = 0; i < num; i++) {
        for(let j = 0; j < num; j++) {
            string += "*";
        }
        string += "\n";
    }
    console.log(string);
}

printRectangle(3)

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****

function printTriangle2(num){
    let string = "";
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num - i; j++) {
            string += " ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            string += "*";
        }
        string += "\n";
    }
    console.log(string);
}

printTriangle2(3);

