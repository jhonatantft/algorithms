/**
 * How it works
 * 
 * 1 - You compare the firs item with the second. If the first item is bigger than the second item, you swap them so that the bigger one statys in the second position
 * 2 - And then compare the second with thir item. If second item is bigger than the third, we swap them. otherwise, they stayer in their position. Hence, the biggest among first three is in the third position.
 * 3 - We keep doing it until we hit the last element of the array. In that way we bubble up the biggest item of the array to the right most position of the array
 * 4 - Look at the inner loop in the code below
 * 5 - We repeat thi process starting from the last item of the array. Look at the outer loop in the code below. We do thi way, so that after finishing the first inner loop, the biggest one will be in the last item of the array
 * 6 - And then we move backward inside the outer loop
 *  
 */

function bubbleSort(arr) {
  var len = arr.length;
  for (var i = len - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        var temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
bubbleSort([7, 5, 2, 4, 3, 9]); //[2, 3, 4, 5, 7, 9]
bubbleSort([9, 7, 5, 4, 3, 1]); //[1, 3, 4, 5, 7, 9]
bubbleSort([1, 2, 3, 4, 5, 6]); //[1, 2, 3, 4, 5, 6]
