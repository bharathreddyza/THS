// var titles = document.getElementsByClassName('title');
// // for(var i =0;i< titles.length;i++){
// //     console.log(titles[i])
// // }

// // console.log(Array.isArray(titles))
// // console.log(Array.isArray(Array.from(titles)
// Array.from(titles).forEach(function(item){
//     console.log(item);
// })


//  const wrap = document.querySelector('#book-list li:nth-child(2) .name');
// //  console.log(wrap)

// // var books = document.querySelector('#book-list li .name');
//  var books = document.querySelectorAll('#book-list li .name');
// console.log(books)

// Array.from(books).forEach(function(book){
// book.textContent += '(book Title)'
// })

// const bookList = document.querySelector('#book-list');
// // bookList.innerHTML = '<h2> books and more books.. </h2>';
// bookList.innerHTML += '<p> this is how you add HTML </p>'

// const banner = document.querySelector('#page-banner')
// console.log('#page-banner node type is:', banner.nodeType);
// console.log('#page-banner node name is:', banner.nodeName);
// console.log('#page-banner has child nodes:', banner.hasChildNodes());

// const clonedbanner = banner.cloneNode(true);
// console.log(clonedbanner)

 const bookList = document.querySelector('#book-list ul');
// console.log('#book-list parent node is:', bookList.parentNode)
// console.log('#book-list parent node is:', bookList.parentElement.parentElement)

// console.log(bookList.children)

// console.log('book-list next sibiling is', bookList.nextSibling);
// console.log('book-list next sibiling is', bookList.previousSibling);

// console.log('book-list next sibiling is', bookList.nextElementSibling);
// console.log('book-list next sibiling is', bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML+='<br> this is a new line </br>'

// var h2 = document.querySelector('#book-list h2')
//  h2.addEventListener('click', function(e){
//   console.log(e.target);
//   console.log(e);
//  })

// var btns = document.querySelectorAll('#book-list .delete ')

// Array.from(btns).forEach(function(btn){
//       btn.addEventListener('click', function(e){
//           const li = e.target.parentElement;
//           li.parentNode.removeChild(li)
//       })
// })

// const link = document.querySelector('#page-banner a');

// link.addEventListener('click',function(e){
//     e.preventDefault();
//     console.log('navigation to ', e.target.textContent, 'was prevented')
// })

const list = document.querySelector('#book-list ul');

// list.addEventListener('click',function(e){
//     if(e.target.className == 'delete'){
//         const li = e.target.parentElement;
//         list.removeChild(li);

//     }
// })


 const addForm = document.forms['add-book'];

  addForm.addEventListener('submit', function(e){
      e.preventDefault();
      const value = addForm.querySelector('input[type="text"]').value;
      
            //create elements 

  
      const li = document.createElement('li');
      const bookname = document.createElement('span');
      const deletebtn = document.createElement('span');
      
      //add content
      deletebtn.textContent = 'delete';
      bookname.textContent = value;

      // apppend the content
      li.appendChild(bookname);
      //add classes
      bookname.classList.add('name')
      deletebtn.classList.add('delete')
      //append to doc
      li.appendChild(deletebtn);
      bookList.appendChild(li)
  })

  // hide books

const hidebook = document.querySelector('#hide');
hidebook.addEventListener('change',function(e){
     if(hidebook.checked){
   list.style.display = "none"
     }else{
         list.style.display = 'initial';
     }
})

const searchbar = document.forms['search-books'].querySelector('input');
searchbar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'Block';
        }else{
            book.style.display = 'none'
        }
    })
})


