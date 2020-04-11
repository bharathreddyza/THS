//1) anagram

var anagram1 = 'abcd'
var anagram2 = 'dabc'
var count = 0
for(var i =0 ; i <anagram1.length;i++){
    for(var j = 0;j < anagram1.length;j++){
        if(anagram1[i] === anagram2[j]){
            count ++
        }
    }
}
if(count == anagram2.length)(
    console.log(true) 
)



//2) pyaramid
for(var i = '#' ; i.length < 8 ; i+= '#'){
    console.log(i)
}
var size = 7;
triangle = ''
for(var i =0 ; i<=size ; i++){
    for(var j = 0 ;j <=size ; j++){
       triangle +=  '# '
    }
    console.log(triangle)
}

//3) pyramid 
var size = 5
triangle = ''
for(var i = 0 ; i <=size ; i++){
    for(var j = 0 ; j<( size - i); j++){
     triangle += '&nbsp';
    }
    for(var k = 1 ;k <i ; k++){
        triangle +=('* ')
    }
    triangle +='<br/>>'
}


//