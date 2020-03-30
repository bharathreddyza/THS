//10)Write a program given an array of ‘N’ numbers, find LCM of it.
function smallestCommons(arr) {
    arr = arr.sort(function(a, b){
      return a - b;
    });
    var arrRange = []; 
    var multiArr = []; 
    var min = Math.min(arr[0], arr[1]);
    var max = Math.max(arr[0], arr[1]); 
    var arrA = []; // array created to store all multiples of greatest number to check other LCM's                         against later
    var units = 20; // length that arrA will be. Need better way to find possible LCM's
  
  //create all the missing numbers from arr[0] to arr[1];
    for (i = arr[0]; i <= arr[1]; i ++) {
      arrRange.push(i);
    }
  
  //input any two numbers and it will return the LCM.
    function lcmArr(a, b) {
      var small;
      for (i = 1; i <= units; i ++) {
        arrA.push(i * a);
      }
  
      for (i = 0; i < arrA.length; i ++) {
        if (arrA[i]%b === 0) {
          multiArr.push(arrA[i]); //creates all the multiples for a, b
        }
      }
  
      small = multiArr.shift(); // grabs the first index, which is the LCM for a, b
      return small;   
  
    }
  
  }
  smallestCommons([1,5]);
