function bubbleSort(arr) {
    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i+1; j++) {
            if(arr[j] > arr[j+1]) {
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }

    console.log(arr);
}

bubbleSort([3,4,2,6,7,2,4,9,0])