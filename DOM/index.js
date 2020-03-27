// const selectDiv = document.getElementById('selectDiv');
// const newElement = document.createElement('h1');
// newElement.innerHTML = "hello dmo";
// selectDiv.appendChild(newElement)

// var newDiv = document.createElement('div')
// newDiv.innerHTML = "how you doin?"
// body.appendChild(newDiv)

// const heading = document.createElement('h1')
// heading.innerHTML =  "<span>hello</span>" + document.URL
// document.body.appendChild(heading)

var a = Math.floor(Math.random()*256)
var b = Math.floor(Math.random()*256)
var c = Math.floor(Math.random()*256)


document.body.style.backgroundColor = "rgb(" + a +", " +b + ", " + c + ")"

const generaterandom = function(){
    return Math.floor(Math.random()*256)
}

const createcolor = function(){
    const red = generaterandom();
    const green = generaterandom();
    const blue = generaterandom()
    return `rgb(${red},${green},${blue})`

}
const applycolortobody = function(color){
    console.log(color)
    return  document.body.style.backgroundColor = color;
}

const addrandomtobg = function(){
    const color = createcolor()
    return applycolortobody(color)
    
}

var a = document.getElementById('button');
  a.addEventListener('click', addrandomtobg)

  var b = document.getElementById('stop')

  console.log( addrandomtobg())
  

 var interval = setInterval(addrandomtobg, 1000);
// interval();

b.addEventListener('click' ,()=> clearInterval(interval))


const array = ["hlo","fvvvr","rvr","fvrvvr"]
var body = document.getElementById('body')


for(var i =0; i< array.length ; i++){
   createli(array[i])
}
function createli(name){
    var createli = document.createElement('li')
    var createbtn = document.createElement('button')
    createli.textContent = name
    createbtn.textContent = "button";
    createbtn.addEventListener('click',function(e){

        createli.style.display = "none";
        createbtn.style.display = "none"
    })
    body.appendChild(createli)

    body.appendChild(createbtn)
}
