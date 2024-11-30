// length of string
// const str1 = "hello";
// const str2 = "hello";
// const str3 = `hello`;

// const str4 = `
// hello
// this string spans in
// multiple lines
// `;

const str = "Helleo Everyone.";

// looping;
for (let i = 0; i < str.length; i++) {
  //   console.log(str[i]);
}

console.log(str.length);
console.log(str[0]);
console.log(str.charAt(0));
console.log(str.replace("e", "E")); // replace the first occurence of the charater with the second parameter we given
console.log(str.replaceAll("e", "E")); // replace all the occurence of the charater with the second parameter

const newStr = str.concat("This is new string concatinated to str");

// console.log(newStr);

const strr = "   Hello   ";

// console.log(strr);

const newStr1 = strr.trim();

// console.log(newStr1);
// console.log(strr);

console.log("------------------------");

// searching
const str1 = "Hello World";

console.log(str1);
console.log(str1.indexOf("lo")); // 4 (returns the index of first occurence of the character in the string)
console.log(str1.lastIndexOf("o")); // 7 (returns the index of the last occurence of the string)

console.log(str1.startsWith("h")); // false consider h and H differently
console.log(str1.startsWith("H")); // true

console.log(str1.endsWith("D")); // false
console.log(str1.endsWith("d")); // true

console.log("--------------------------");

// substring

const str2 = "Good morning all";

console.log(str2.substring(3, 4));

console.log(str2.slice(0, 4));

console.log("--------------------------");

console.log(str.charCodeAt(0)); // gives ascii code of the character located at 0th index

console.log(String.fromCharCode(65)); // which convert the ascii to character (65 => A)

const stringOne = "apple";
const stringTwo = "orange";

console.log(stringOne.localeCompare(stringTwo)); // return -1 because the two strings arent the same

const stringOneSame = "apple";
const stringTwoSame = "apple";

console.log(stringOneSame.localeCompare(stringTwoSame)); // returns 0 string are the same

const stringForIncludesCheck =
  "let check the character is includes in the string";

console.log(stringForIncludesCheck.includes("a")); // returns true

console.log(stringForIncludesCheck.includes("z")); // returns false
