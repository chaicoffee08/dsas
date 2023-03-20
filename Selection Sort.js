function selectionSort(arr) {
    for(let i=0; i < arr.length; i++) {
        var lowest = i;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if( i !== lowest) {
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;    
        }  
    }

    console.log(arr)
}

selectionSort([4,7,2,6,9,4,2,1,0])