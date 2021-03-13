module.exports = function check(str, bracketsConfig) {
    const stack = [];
    const brackets = Object.fromEntries(bracketsConfig);
    str.split('').forEach(item => {
        if (item === brackets[stack[stack.length-1]]) {
            stack.pop();
        } else {
            stack.push(item);
        }
    });
    return stack.length === 0;
}
