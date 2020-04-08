const fs = require('fs')
const path = require('path')


const filepath  = path.join(__dirname,'/hello/text.txt')
const readstream = fs.createReadStream(filepath,{encoding:'utf8',highWaterMark: 16 *1024})
const writestream = fs.createWriteStream(__dirname+ '/hello/textdynamic.txt')

readstream.pipe(writestream)
