// prototypable inheritance
 function Usercreator(name,score){
     this.name = name;
     this.score = score
 }

 Usercreator.prototype.increment = function(){
     this.score ++
 }

 Usercreator.prototype.login = function(){
     console.log("your logged in")
 }

 const user1 = new Usercreator('tom' ,4)
 const user2 = new Usercreator('cat',3)
 user1.increment()
 user2.increment()
 