module.exports = function check(str, bracketsConfig) {
    bracketsConfig.forEach((item, index, arr) => {
        if (item[0] === '|') {
            arr[index] = ['<', '>'];
        }
    })
    let result = true;
    const brackets = Object.fromEntries(bracketsConfig);
    const stack = [];

    str.split('').reverse().forEach((item, index) => {
        if (item in brackets) {
            if (brackets[item] !== stack.pop()) {
                result = false;
            }
        } else {
            stack.push(item);
        }
    })
    return result;
}
