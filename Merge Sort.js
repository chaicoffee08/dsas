function merge(arr1, arr2) {
    
    var i = 0;
    var j = 0;

    var mergedArr = [];
    
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i])
            i++;
        } else if(arr2[j] < arr1[i]) {
            mergedArr.push(arr2[j])
            j++;
        }
    }

    while(i < arr1.length) {
        mergedArr.push(arr1[i])
        i++;
    }

    while(j < arr2.length) {
        mergedArr.push(arr2[j])
        j++;
    }

    return mergedArr;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left,right);
}

mergeSort([10,24,76,72,1,9])

