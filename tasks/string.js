// remove a letter from a string using recursion
function removeLetterRecursive(str, letter) {
  if (str.length == 0) {
    return "";
  }

  if (str[0] == letter) {
    return removeLetterRecursive(str.slice(1), letter);
  } else {
    return str[0] + removeLetterRecursive(str.slice(1), letter);
  }
}

console.log(removeLetterRecursive("hello", "l"));
