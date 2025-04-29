// ✅ 1. Print Even Numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}

// ✅ 2. Find the Largest of Three Numbers
let a = 5,
  b = 10,
  c = 7;
let largest = a;
if (b > largest) largest = b;
if (c > largest) largest = c;
console.log("Largest:", largest);

// ✅ 3. Reverse a String Without Using Built-in Methods
let str = "hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed);

// ✅ 4. Check if a Number is Prime
let num = 7;
let isPrime = true;
if (num <= 1) isPrime = false;
for (let i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}
console.log("Is Prime:", isPrime);

// ✅ 5. Sum of All Elements in an Array
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let n of arr) sum += n;
console.log("Sum:", sum);

// ✅ 6. Count Vowels in a String
let input = "Javascript".toLowerCase();
let vowels = "aeiou";
let count = 0;
for (let ch of input) {
  if (vowels.includes(ch)) count++;
}
console.log("Vowel Count:", count);

// ✅ 7. Check Palindrome
let word = "madam";
let isPalindrome = word === word.split("").reverse().join("");
console.log("Is Palindrome:", isPalindrome);

// ✅ 8. Create an Object for a Student and Access Properties
let student = {
  name: "John",
  age: 16,
  grade: "10th",
};
console.log(
  `Student ${student.name} is ${student.age} years old and is in grade ${student.grade}`
);

// ✅ 9. Remove Duplicates from an Array (Without Set)
let dupArr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [];
for (let el of dupArr) {
  if (!uniqueArr.includes(el)) uniqueArr.push(el);
}
console.log(uniqueArr);

// ✅ 10. FizzBuzz
for (let i = 1; i <= 50; i++) {
  let out = "";
  if (i % 3 === 0) out += "Fizz";
  if (i % 5 === 0) out += "Buzz";
  console.log(out || i);
}

// ✅ 11. Find Factorial of a Number
let factorialNum = 5;
let fact = 1;
for (let i = 1; i <= factorialNum; i++) {
  fact *= i;
}
console.log("Factorial:", fact);

// ✅ 12. Find the Second Largest Number in an Array
let secondArr = [3, 8, 1, 6, 8, 4];
let max = -Infinity,
  second = -Infinity;
for (let n of secondArr) {
  if (n > max) {
    second = max;
    max = n;
  } else if (n > second && n < max) {
    second = n;
  }
}
console.log("Second Largest:", second);

// ✅ 13. Count Occurrences of Each Character in a String
let charStr = "hello world";
let charMap = {};
for (let ch of charStr) {
  if (ch !== " ") charMap[ch] = (charMap[ch] || 0) + 1;
}
console.log(charMap);

// ✅ 14. Merge Two Arrays and Remove Duplicates
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
let merged = [...arr1, ...arr2];
let noDuplicates = [];
for (let el of merged) {
  if (!noDuplicates.includes(el)) noDuplicates.push(el);
}
console.log(noDuplicates);

// ✅ 15. Sort an Array Without Using sort()
let unsorted = [5, 2, 9, 1, 5, 6];
for (let i = 0; i < unsorted.length - 1; i++) {
  for (let j = i + 1; j < unsorted.length; j++) {
    if (unsorted[i] > unsorted[j]) {
      [unsorted[i], unsorted[j]] = [unsorted[j], unsorted[i]];
    }
  }
}
console.log(unsorted);

// ✅ 16. Check if a Year is a Leap Year
let year = 2024;
let isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
console.log("Is Leap Year:", isLeap);

// ✅ 17. Find GCD of Two Numbers
let x = 48,
  y = 18;
while (y !== 0) {
  let temp = y;
  y = x % y;
  x = temp;
}
console.log("GCD:", x);

// ✅ 18. Check if a String is Anagram of Another
let str1 = "listen";
let str2 = "silent";
let isAnagram =
  str1.split("").sort().join("") === str2.split("").sort().join("");
console.log("Is Anagram:", isAnagram);

// ✅ 19. Find the Missing Number in an Array from 1 to N
let series = [1, 2, 3, 5]; // Missing 4
let n = 5;
let expectedSum = (n * (n + 1)) / 2;
let actualSum = series.reduce((acc, val) => acc + val, 0);
console.log("Missing Number:", expectedSum - actualSum);

// ✅ 20. Generate Fibonacci Series up to N Terms
let terms = 7;
let fib = [0, 1];
for (let i = 2; i < terms; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
console.log("Fibonacci:", fib);
