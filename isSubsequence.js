function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    while (j < str2.length) {
        if(str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}

isSubsequence('hello', 'hello world'); // true