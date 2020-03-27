const selectbtn = document.getElementById('button')
selectbtn.addEventListener('click', loaddata)

function loaddata(){
    // create anew xml http request object 
    const xhr = new XMLHttpRequest()
   //open the connection 
   //1st item is method --> GET 
   // second is url 
   // boolean value for execution 
   xhr.open('GET','data.txt',true)
   // then execution of xhr 
   //status codes 
   //200: correct
   // 403 : forbidden 
   // 404 : not found 
   xhr.onload = function(){
       if(this.status == 200){
           console.log("hello perfect " ,  this.response)
       }
   }
   //onreadystatechange
   xhr.onreadystatechange = function(){
       console.log('hellooo perfect', xhr.readyState)
       // ready state 
       // 0 -unsent 
       // 1 - opened 
       // 2 - received 
       // 3 -loading 
       // 4 - done 

       if(this.status ===200 && this.readyState ===3){
           console.log(" loading.. .. . .")
       }
       if(this.status == 200 && this.readyState == 4){
           console.log("this is the response " ,this.response)
           document.getElementById("output").innerHTML = this.response
       }
   }
    
   // xhr request must be send 
   xhr.send()


}