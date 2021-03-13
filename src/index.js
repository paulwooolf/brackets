module.exports = function check(str, bracketsConfig) {
    bracketsConfig.forEach((item, index, arr) => {
        if (item[0] === '|') {
            arr[index] = ['<', '>'];
        }
    })
    let result = true;
    const brackets = Object.fromEntries(bracketsConfig);
    const stack = [];
    const string = [];
    let char = '<';
    str.split('').reverse().map((item, index, arr) => {
        if (item === '|') {
            char = char === '<' ? '>' : '<'
            string.push(char);

        } else if (item === '|') {
            char = char === '<' ? '>' : '<'
            string.push(char);
        } else {
            string.push(item);
        }
    });
    string.forEach((item, index) => {
        if (item in brackets) {
            let last = stack.pop();
            if (brackets[item] !== last) {
                result = false;
            }
        } else {
            stack.push(item);
        }
    })
    return result;
}
