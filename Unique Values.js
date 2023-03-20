function countUniqueValues(arr){
  // add whatever parameters you deem necessary - good luck!
  let i = 0;
  let j = 1;
  while(j <= arr.length) {
      if(arr[i] == arr[j]) {
          j++;
      } else if (arr[i] != arr[j]) {
          i++;
          arr[i] = arr[j]
          j++;
      }
  }
    return i;
  
}

// countUniqueValues([1,1,1,1,1,2])

countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])

// countUniqueValues([-2,-1,-1,0,1])