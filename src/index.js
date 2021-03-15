module.exports = function reverse (number) {
    if (number < 0 ) {number = number * -1};
    return +number.toString().split("").reverse().join("")
}
