//buffer 
const buffferData = new Buffer("some random string")
const jsondata = buffferData.toJSON(buffferData)
console.log(jsondata)