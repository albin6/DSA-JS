function findSumOfDigits(num) {
  if (num == 0) {
    return num;
  }

  return (num % 10) + findSumOfDigits(Math.floor(num / 10));
}

console.log(findSumOfDigits(12345));
