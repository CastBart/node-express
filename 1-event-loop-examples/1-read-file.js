const {readFile} = require('fs')

console.log('started first task')
//CHECK FILE PATH
readFile('../content/first.txt', 'utf8',(err, res) =>{
    if(err){
        console.log(err)
        return
    }
    console.log(res)
    console.log('completed first task')
})
console.log('starting next task')
