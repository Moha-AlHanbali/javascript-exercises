const fibonacci = function (num) {
    if (num < 0) return "OOPS";
    if (num == 1) return 1;
    if (num == 2) return 1;
    return fibonacci(num - 2) + fibonacci(num - 1);
};

// Do not edit below this line
module.exports = fibonacci;
