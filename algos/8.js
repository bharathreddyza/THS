//8)Write a program to find GCD (Greatest Common Divisor) or HCF (Highest Common Factor) of twonumbers is the largest number that divides both of them using recursion.
twonumbers(356,290)

function twonumbers(x, y){
        if (!y) {
          return x;
        }
      
        return gcd(y, x % y);
      }
      

}
