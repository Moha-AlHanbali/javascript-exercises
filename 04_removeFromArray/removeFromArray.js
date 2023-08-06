const removeFromArray = function(arr, ...args) {

for (let arg of args){
    if (!arr.includes(arg)) continue;
    arr.splice(arr.indexOf(arg), 1);
}
return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
