function isBalanced(parentheses) {
  let stack = [];
  let opening = new Set(["(", "{", "["]);
  let closing = new Set([")", "}", "]"]);
  let matches = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let char of parentheses) {
    if (opening.has(char)) {
      stack.push(char);
    } else if (closing.has(char)) {
      if (stack.length === 0 || stack[stack.length -1] !== matches[char]) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(isBalanced("[3+5 x ((4-1) - 39)]"));