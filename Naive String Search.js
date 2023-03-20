function findSubstring(long, short) {
    var count = 0;
    for(var i = 0; i <= long.length; i++) {
        for(var j = 0; j < short.length; j++) {
            if(short[j] !== long[i+j]) break;
            if(j === short.length - 1) count++;
        }
    }
    return count;
}

findSubstring("dark side of the moon", "side")


// findSubstring("dark side of the moon", "side") true
// findSubstring("dark side of the moon", "ofg") false
// findSubstring("dark side of the moon", "fhd") false