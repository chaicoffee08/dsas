function averagePair(arr, targetAvg){
  // add whatever parameters you deem necessary - good luck!
  if(arr.length == 0) {
      return false;
  }
    
  let i = 0;
  let j = arr.length -1;
  
  while(i < j) {
      let currentAvg = average(arr[i], arr[j])
      if (currentAvg == targetAvg) {
          return true;
      } else if (currentAvg > targetAvg) {
          j--;
      } else {
          i++
      }
  }

    return false;
    
  function average(num1, num2) {
      let avg = (num1 + num2) / 2;
      return avg;
  }
}

averagePair([], 4)