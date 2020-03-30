//16)Write a program  to find Mean of given Array Elements?
[3,4,7,9,4]
function cal(x){
 var sum = 0;
    var num = x.length
for(var i = 0 ; i < x.length ; i++){
   
    sum += x[i]
}     var mean = sum / num
   console.log(mean)
}