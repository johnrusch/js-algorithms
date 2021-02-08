function BracketValidator(string) {
    const bracketHash = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    let stack = [];

    stack.push(string.charAt(0));
    for (let i = 1; i < string.length; i++) {
        let currentElement = string.charAt(i);
        if (Object.keys(bracketHash).includes(currentElement)) {
            stack.push(currentElement);
        } else if (currentElement === bracketHash[stack[stack.length - 1]]) {
            stack.pop();
        } else {
            return false;
        }

    }
    return stack.length === 0;
}