const myarr = [1, 2, 3];
  
function copyArrayAndMultiplyBy2(arr){
    var output = [];
     for(var i=0; i < arr.length  ; i++ ){
      
        output.push(arr[i]* 2)
      
     }     
        return output 
  }
 const result = copyArrayAndMultiplyBy2(myarr)
