
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(11) ? "11 is prime" : "11 is not prime");
console.log(isPrime(15) ? "15 is prime" : "15 is not prime");
