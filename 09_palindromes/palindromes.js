const palindromes = function (str) {
    palindrome = str.toLowerCase().replace(/[^a-z0-9]/g, "")
    return palindrome.split("").reverse().join("") === palindrome.split("").join("")
};

// Do not edit below this line
module.exports = palindromes;
