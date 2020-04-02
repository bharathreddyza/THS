//4)Write a program to subtract two integers without using Minus (-) operator


function add( a, b)
{
   var x;
  x = a^b;

  while(a&b)
  {
    b = ((a&b)<<1);
    a = x;
    x = a^b;
    //b=(a^b);
  }

  return x;
}
function subtract( x,  y) 
{ 
    if (y == 0) 
        return x; 
    return subtract(x ^ y, (~x & y) << 1); 
} 
