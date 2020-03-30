// json 
// javascript object notation 
// adc74abeab2340f19450e7458d984a8e
var country = 'in'
var url = 'http://newsapi.org/v2/top-headlines?' +
          `country=${country}&` +
          'apiKey=adc74abeab2340f19450e7458d984a8e';
var xhr = new XMLHttpRequest();
xhr.open('GET',url , true)
// fetch(xhr)
//     .then(function(response) {
//         console.log(response.json());})
    
    xhr.onload = function(){
        if(this.status == 200 ){
            var data = JSON.parse(this.responseText)
         console.log(data.articles[0])
        }
    }

    xhr.send()
    
       