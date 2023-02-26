// Write a program to check that the number given by the user is a prime number or not.
let num = -11;

function isPrime(num) {
    if (num <= 1) {
      console.log("Not a prime number");
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
              console.log("Not a prime number");
            }
        }
        console.log("It is a prime number");
    }
    
}

isPrime(num);
  