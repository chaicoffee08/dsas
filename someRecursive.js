function isPalindrome(str) {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1));
    return false;
}

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if(callback(array[0])) return true;
    return someRecursive(array.slice(1), callback);
}

function flatten(oldArr) {
    var newArr = []
    for(var i = 0; i < oldArr.length; i++) {
        if(Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            newArr.push(oldArr[i])
        }
    }
    return newArr;
}

function nestedEvenSum (obj, sum=0) {
    for(var key in obj) {
        if (typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}

