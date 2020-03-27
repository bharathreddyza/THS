const courses = document.querySelector('#courses-list')
const shoppingcartcontent = document.querySelector('#shopping-cart')
const clearcartbtn = document.querySelector('#clear-cart')
//listeners
loadeventlistener()
function loadeventlistener(){
     // new course is added
    courses.addEventListener('click',buycourse)
    // remove
    // clearcartbtn.addEventListener('click', clearcart)
    shoppingcartcontent.addEventListener('click', removecourse)
    document.addEventListener('DOMContentLoaded', onload)
}
function buycourse(event){
    event.preventDefault()
    if(event.target.classList.contains('add-to-cart')){
        const course = event.target.parentElement.parentElement
        getcourseinfo(course)
    }
}
function getcourseinfo(course){
    //create an object with the course data 
    const courseinfo = {
        image : course.querySelector('img').src,
        title : course.querySelector('h4').textContent,
        price : courses.querySelector('.price').textContent,
        id : course.querySelector('button').getAttribute('data-id')
        
    }
    
    addintocart(courseinfo)
  
}
function addintocart(courseinfo){
    
   let courseinfotocart = courseinfo;
    //create tr
    const row = document.createElement('tr')
    
    //build the temlte 
    row.innerHTML=` <td> <img src='${courseinfo.image}' width =100> </td>
     <td> ${courseinfo.title} </td>
     <td> ${courseinfo.price} </td>
     <button class="clearitem" data-id="${courseinfo.id}" > clear </button>`
     shoppingcartcontent.appendChild(row)
     console.log("addrow", row)

     saveIntoStorage(courseinfotocart)
}
// function clearcart(){
//     shoppingcartcontent.textContent = "none"
// }
function removecourse(e){
        e.stopPropagation()
  if( e.target.classList.contains('clearitem')){
    
    course = e.target.parentElement.parentElement
    courseId = course.querySelector('button').getAttribute('data-id')
    e.target.parentElement.remove()
    removecourseinfofromlocal(courseId)

}
}

function   removecourseinfofromlocal(courseId){
    console.log("single course to be removed from localstorage", course)
    //get the local storage data 
    let courses = getitemsfromlocal()
    //loop through the array and find the index to remove 
    courses.forEach(function(course,index){
        if(course.id == courseId){
            courses.splice(index,1)
        }
    })
    // and update the local storage 
    localStorage.setItem('courses' , JSON.stringify(courses))
}


//save into localstorage 
function saveIntoStorage(course){
    // console.log('course storage' , course)
    let courses = getitemsfromlocal();
    //add a new course, when the user does add to cart
    courses.push(course)
    // set item
    localStorage.setItem('courses' , JSON.stringify(courses))
}








// function addcourseinfotolocal(){
//     localStorage.setItem('image', course.querySelector('img').src, )
//     localStorage.setItem('title',  course.querySelector('h4').textContent,)
//     localStorage.setItem('price',courses.querySelector('.price').textContent)
  
// }
// function addcourseinfotolocal(courseinfo){
//     let asd = getitemsfromlocal()
//     // const existingitems = localStorage.getItem()
//     var newitems = [ 
//          localStorage.setItem('image', courseinfo.image ),
//      localStorage.setItem('title',  courseinfo.title),
//      localStorage.setItem('price',courseinfo.price)
//     ]
//      asd.push(newitems)
//      localStorage.setItem("asd", JSON.stringify(asd));
// } 
function getitemsfromlocal(){
    let courses ;
    if(localStorage.getItem('courses') === null){
        return courses = []
    }else{
        courses = JSON.parse(localStorage.getItem('courses'))
        
    }
    return courses
}




//load when the doc is ready nd print
function onload(){
    
    let courseLS = getitemsfromlocal()
    //loop through and generate the markup
    courseLS.forEach(function(course){
   

        // create a tr
        const row = document.createElement('tr')
        //print the document
        row.innerHTML = `
        <td><img src="${course.image}" width=100></td>
        <td>${course.title}</td>
        <td>${course.price}</td>
        <button class="clearitem" data-id="${course.id}" > clear </button>
        `
        shoppingcartcontent.appendChild(row)
    }) 
}