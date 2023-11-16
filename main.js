
// Заданаие 1

function stepen(a, b) {
    let result = a;
    for (let i = 1; i < b; i++){
        result *= a
    }
    return result
}
// console.log(stepen(123, 2))



// Задание 2

function divide(a, b){
    if (b == 0) {
        return a;
    } else {
        return divide(b, a % b);
    }
}
//  console.log(divide(35, 40))


// Задание 3

function findMaxNumber (num, max = 0) {
    if (num === 0) {
        return max;
    } 
    const currentDigit = num % 10;
    if (currentDigit > max) {
        max = currentDigit
    }
    return findMaxNumber(Math.floor(num / 10), max);
}

// console.log(findMaxNumber(723418569));


// Задание 4

  function PrimeNumber(num, divisor = 2) {
    if (num < 2) {
        return false;
    } else if (num === 2) {
        return true;
    } else if (num % divisor === 0) {
        return false;
    } else if (divisor * divisor > num) {
        return true;
    } else {
        return PrimeNumber(num, divisor + 1);
    }
  }
//  console.log(PrimeNumber(93));


// Задание 5
  
function findfactorial(num, divisor = 2) {
    if (num === 1) {
        return '';
    } else if (num % divisor === 0) {
        return divisor + (num === divisor ? '' : ' * ' + findfactorial(num / divisor, divisor));
    } else {
        return findfactorial(num, divisor + 1);
    }
}

// console.log (findfactorial(32));

//  Задание 6

  function fib (e) {
    if(e <= 1) {
        return e
    } else {
        return fib(e - 1) + fib(e - 2)
    }
  }
// console.log(fib(11));