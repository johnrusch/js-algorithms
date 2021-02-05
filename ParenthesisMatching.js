function findClosingParenthesis(string, openParenthesisPos) {
  if (string.charAt(openParenthesisPos) !== "(") {
    throw new Error("Bad input: character is not an open parenthesis");
  }

  let openParentheses = 0;

  for (let position = openParenthesisPos + 1; i < string.length; i++) {
    if (string.charAt(position) === "(") {
      openParentheses += 1;
    } else if (string.charAt(position) === ")") {
      if (openParentheses === 0) {
        return position;
      }
      openParentheses -= 1;
    }
  }
  throw new Error("Closing parenthesis not found!");
}
