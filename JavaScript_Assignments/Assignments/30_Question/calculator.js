// Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

function calculator(val1, op, val2){
    switch(op){
        case (op = '+') :
            console.log("The Addition of ", val1, "and", val2, "is", (val1+val2));
            break;
        case (op = '-'):
            console.log("The Subtraction of ", val1, "and", val2, "is", (val1-val2));
            break;
        case (op = '*'):
            console.log("The Multiplication of ", val1, "and", val2, "is", (val1*val2));
            break;
        case (op = '/'):
            console.log("The Division of ", val1, "and", val2, "is", (val1/val2));
            break;
        case (op = '%'):
            console.log("The Modulaus of ", val1, "and", val2, "is", (val1%val2));
            break;
        default :
        console.log("Please enter valid operater")    

    }
}

calculator(100, '%', 20);