// Write a program to print all the prime number between 0 to 100 (0 and 100 included).

function printPrimeNumbers() {
    let prime_array = [];
    for (let i = 0; i <= 100; i++) {
        if (isPrime(i)) {
            prime_array.push(i);
        }
    }
    console.log(prime_array);
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

printPrimeNumbers();
