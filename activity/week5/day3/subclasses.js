//Create an object adminFunctionStore that has access to all methods in the userFunctionStore object, without copying them over individually.

const userFunctionStore = {
    sayType: function() {
      console.log("I am a " + this.type);
    }
  }
  
  function userFactory(name, score) {
    let user = Object.create(userFunctionStore);
    user.type = "User";
    user.name = name;
    user.score = score;
    return user;
  }

  const AdminFunctionStore = {
       getaccess :function(){ 
          Object.create(userFunctionStore)
      } 
  }



//Create an adminFactory function that creates an object with all the same data fields (and default values) as objects of the userFactory class, but without copying each data field individually.




// var me = new AdminFunctionStore('bharath','reddy')


//Create an adminFactory function that creates an object with all the same data fields (and default values) as objects of the userFactory class, but without copying each data field individually.

function AdminFactory(a,b) {
    const lee = Object.create(userFactory)
    AdminFunctionStore.call(this,a,b)
    return lee
 }

var real = new AdminFactory("bharath","reddy")



///Then make sure the value of the 'type' field for adminFactory objects is 'Admin' instead of 'User'.
