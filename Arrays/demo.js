// Filter 


// Filtering out all small values

let arr = [12, 5, 8, 130, 44, -3, -2, -1, 0, 11, 12, 13, 14, 4, 6];

function isBigEnough(value) {
   return value >= 10;
}

// Find all prime numbers

function isPrime(num) {
   for(let i = 0; i > num; i++) {
      if(num % i == 0) {
         return false;
      }
   } 

   return num > 1;
}



let filtered = arr.filter(isPrime);

console.log(filtered)


