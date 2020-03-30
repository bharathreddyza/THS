//5)Write a program to find remainder of two numbers without using modulus (%) operator
function integers(x, y){
    var greater;
    var lesser;
    if(x > y){
      greater = x
      lesser = y
    }else{
      greater = y
      lesser = x
    }
    var rem = greater - lesser
  
    for(var i =0 ;i <=   rem ; i++){
         if( rem >= lesser){
           return integers(rem,lesser)
         }
         else{
           console.log(rem)
         }
         console.log(rem)
  
    }}