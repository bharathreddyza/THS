
//7)Write a program that prints the numbers from 1 to 100 and for multiples of '3' print "Fizz" instead ofthe number and for the multiples of '5' print "Buzz".
for(var i = 0 ; i<=100;i++){
    if(i%3 ===0){
   
    console.log("FIZZ")
    }   else if(i%5 ==0){
      console.log("BUZZ")
    }
    else{
    console.log(i)
    }
  }