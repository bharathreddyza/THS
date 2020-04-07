function getUser({
    setTimeout(() => {
        
        const userIds = [10,23,30,40]
        console.log("userIds")
       setTimeout((id) => {
           const user = {
               name: 'john doe',
               age: 25,

           }

           console.log(`user id : ${id} username  ${user.name} userage = ${user.age})
           
           setTimeout((age) => {
               console.log(age)
           }, 1500 , user.age);
       }, 1000, userIds[3]);
    }, 1500);
})