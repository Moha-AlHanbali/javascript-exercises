const sumAll = function (start, end) {
    if (typeof (start) !== 'number' || typeof (end) !== 'number') return "ERROR";
    if (start < 0 || end < 0) return "ERROR";

    let total = Math.max(start, end);
    for (let i = Math.min(start, end); i <= Math.abs(end - start) ; i++) {
        total += i
    }
    
    return total;
};

// Do not edit below this line
module.exports = sumAll;
