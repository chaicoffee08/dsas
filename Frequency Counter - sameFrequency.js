function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
    let arr1 = Array.from(num1.toString()).map(Number);
    let arr2 = Array.from(num2.toString()).map(Number);

    if(arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1) {
        if(!(key in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

console.log(sameFrequency(3589578, 5879385))