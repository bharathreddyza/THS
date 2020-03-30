// // const selectbtn = document.getElementById('button')
// var form = document.forms.item(0)
// console.log(form)
// document.getElementById('button1').addEventListener('click', loaddata)

// function loaddata(){
//     // create anew xml http request object 
//     const xhr = new XMLHttpRequest()
//    //open the connection 
//    //1st item is method --> GET 
//    // second is url 
//    // boolean value for execution 
//    xhr.open('GET','https://api.github.com',true)
//    // then execution of xhr 
//    //status codes 
//    //200: correct
//    // 403 : forbidden 
//    // 404 : not found 
//    xhr.onload = function(){
// // console.log(this)
// //        debugger
//        if(this.status == 200){
//            console.log(this)
//        const feeddata = JSON.parse(this.responseText)

//        let output = ''
//        feeddata.forEach(function(user){
//         output += `
//         <div class="col-sm=3">
//           <img src="${user.avatar_url}" style ="width:100%">
//           <div style ="text-align: center" >
//                 <h4>${user.login}</h4> </div>
//         </div>`
//        })
//        document.getElementById('getData').innerHTML = output
//     }
//    }
//    //onreadystatechange
// //    xhr.onreadystatechange = function(){
// //        console.log('hellooo perfect', xhr.readyState)
// //        // ready state 
// //        // 0 -unsent 
// //        // 1 - opened 
// //        // 2 - received 
// //        // 3 -loading 
// //        // 4 - done 

// //        if(this.status ===200 && this.readyState ===3){
// //            console.log(" loading.. .. . .")
// //        }
// //        if(this.status == 200 && this.readyState == 4){
// //            console.log("this is the response " ,this.response)
// //            document.getElementById("output").innerHTML = this.response
// //        }
// //    }
    
//    // xhr request must be send 
//    xhr.send()


// }


//select 
document.getElementById('button1').addEventListener('click', loadData)

//xhr
//create xhr
//onload
//send


function loadData(){
    const xhr = new XMLHttpRequest()

    //open
    xhr.open('GET', 'https://api.github.com/users' , true)
    //onload  
    xhr.onload= function(){
        if(this.status==200){
          const feedData = JSON.parse(this.responseText)

            let output = ''
            feedData.forEach(function(user){
                output +=`
                    <div class="col-sm-3">
                    <img src="${user.avatar_url}" style="width:100%">
                     <div style="text-align : center">
                       <h4>${user.login}</h4>
                     </div>
                    </div>
                `
            })
            document.getElementById('getData').innerHTML=output
        }
    }  

    //send
    xhr.send()
} 