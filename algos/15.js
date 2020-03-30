


  //  15)Write a program to find the highest and the lowest number in array
  var arr1 = [23,56,78,42,5,80];
  var max = arr1.reduce(function(a,b){
    return Math.max(a, b);
  })

  var min = arr1.reduce(function(a, b){
    return Math.min(a, b);
  })
