const promise1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("resolved promise")
        reject("erro 400")
    }, 1000);
})

const promise = document.getElementById('promise');
promise.onclick = function(){
    promise1.then(function(value){
        alert(`from the block ${value}`)
    })
    promise1.catch(function(err){
        alert(`from the catch block reject ${err}`)
    })
}