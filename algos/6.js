//6)Write a program to generate Prime  Numbers less than N and Generate ‘N’ Prime Numbers/in givenrange.
function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}
let arr = [2]
function count(num){
   for(var i =3; i < num ; i+= 2){
        if( isPrime(i)){
            arr.push(i)

        }
        

   }console.log(arr)
   console.log(arr.length)

}
count(56)