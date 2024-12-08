class Stack {
  constructor() {
    this.stack = [];
  }
  reverseString(str) {
    for (let i = 0; i < str.length; i++) {
      this.stack.push(str[i]);
    }
    let reversedStr = "";
    while (this.stack.length > 0) {
      reversedStr += this.stack.pop();
    }
    return reversedStr;
  }
}

const st = new Stack();

const reversedString = st.reverseString("Albin");

console.log(reversedString);
