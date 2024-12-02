// (1) => truncate the text

// input => 'this is the text for the problem' , maxlength = 6
// output => 'this i...'

// input => 'the' , maxlength = 6
// output => 'the...'

function truncateTheText(str, maxlength) {
  if (str.length < maxlength) {
    return str.concat("...");
  }
  return str.substring(0, maxlength + 1).concat("...");
}

const stringAfterTructating = truncateTheText("hellobrooo", 6); // hellobr...
const stringAfterTructatingEdgeCase = truncateTheText("hello", 6); // hello...

// console.log(stringAfterTructating);

// (2) => palindrome number

// input => 121 (which is of type number)
// output => true (because the number is a palindrome)

// input => 12 (which is of type number)
// output => false (because the number is not a palindrome)

function isPalindrome(num) {
  return num === +num.toString().split("").reverse().join("");
}

const is121Palindrome = isPalindrome(121);
const is12Palindrome = isPalindrome(12);

// console.log(is121Palindrome);
// console.log(is12Palindrome);

// (3) => pascalcase to snake case
function convertPascalCaseToSnakeCase(str) {
  let str1 = ''
  for (var i = 0; i < str.length; i++) {
    const char = str[i]
    if (char === str[i].toUpperCase() && i != 0) {
      str1 += '_'
    }
    str1 += char.toLowerCase()
  }
  console.log(str1)
}

// convertPascalCaseToSnakeCase('PascalCase')
