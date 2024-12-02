// ----------------------------------------------------------------------------------------------
// Factorial of n
function findFactorial(n) {
  if (n === 1) {
    return n;
  }
  return n * findFactorial(n - 1);
}

const factorial = findFactorial(5);

// console.log(factorial);

// ----------------------------------------------------------------------------------------------
// create an array with range of number
// input => start=1 , end=5  || output => [1, 2, 3, 4, 5]
function createRangeOfNumber(start, end) {
  // 1, 5 || 1, 4 || 1, 3 || 1, 2 || 1, 1 || 1, 0 these are the values recieved in the start and end parameters
  if (end < start) {
    // 0 < 1 which results true
    return [];
  }
  const numbers = createRangeOfNumber(start, end - 1); // 1, 4 || 1, 3 || 1, 2 || 1, 1 || 1, 0 these are the argument that are passes to the start and end parameters
  numbers.push(end); // 1, 2, 3, 4, 5
  return numbers; // [1, 2, 3, 4, 5]
}

const rangeOfNumbers = createRangeOfNumber(1, 5);

// console.log(rangeOfNumbers);

// ----------------------------------------------------------------------------------------------
// Given an integer x, return true if the number is palindrome and false otherwise
// x = 121 => true || x = 123 => false
function isTheNumberPalidrome(n) {
  const nStr = n.toString();

  if (nStr.length === 1) {
    return true;
  }

  if (nStr[0] !== nStr[nStr.length - 1]) {
    return false;
  }

  return isTheNumberPalidrome(nStr.slice(1, nStr.length - 1));
}

const isPalindrome = isTheNumberPalidrome(121);

// console.log(isPalindrome);

// ----------------------------------------------------------------------------------------------
// fibonacci series
// starts by 0, 1 the next number will be the sum of the previous two numbers (ie; 0, 1, 1, 2, 3, 5,...)
function fibonacciSequence(n) {
  const sequence = [];
  function fibonacciNumbers(n1, n2) {
    if (sequence.length == n) {
      return;
    }
    sequence.push(n1);
    fibonacciNumbers(n2, n1 + n2);
  }
  fibonacciNumbers(0, 1);
  return sequence;
}

const fibonacci = fibonacciSequence(5);

// console.log(fibonacci);

// ----------------------------------------------------------------------------------------------
// fibonacci number
function getFibonacciNumber(n) {
  if (n <= 1) {
    return n;
  }
  return getFibonacciNumber(n - 1) + getFibonacciNumber(n - 2);
}

const fibonacciNumber = getFibonacciNumber(4);

// console.log(fibonacciNumber);

// ----------------------------------------------------------------------------------------------
// reverse the given string
// input => str = 'hello' output => 'olleh'
function reverseString(str) {
  if (str.length == 1) {
    return str;
  }
  return reverseString(str.substr(1)) + str.charAt(0);
}

const reversedString = reverseString("hello");

// console.log(reversedString);

// ----------------------------------------------------------------------------------------------
// subsets (Backtracking Algorithm using recursion)
// given and integer array nums of unique elements, return all possible subsets (the power set)
function getTheSubsets(nums) {
  let result = [];
  let temp = [];

  function recursive(nums, index) {
    if (nums.length === index) {
      return result.push([...temp]);
    }
    temp.push(nums[index]);
    recursive(nums, index + 1);
    temp.pop();
    recursive(nums, index + 1);
  }

  recursive(nums, 0);
  return result;
}

const powerSet = getTheSubsets([1, 2, 3]);

console.log(powerSet);

// ----------------------------------------------------------------------------------------------
// given string is palindrome or not
function isStringPalidrome(str) {
  if (str.length == 0) {
    return true
  }
  if (str[0] !== str[str.length - 1]) {
    return false
  }
  return isStringPalidrome(str.slice(1, str.length - 1))
}

// console.log(isStringPalidrome('haiah'))