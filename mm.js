// const fs= require('fs')
// fs.writeFileSync('hi.txt','helloooo everyone')
// console.log('file content:',data)


// fs.readFileSync('hi.txt','utf_8')
// console.log('messages:',data)

// const express= require ('express')
// const app=express()
// app.use((err,req,res,next)=>{
//     console.log('hello')
//     res.status(500).send('error Occured')
// })

// app.get('/',(req,res)=>{
//     res.send('hellow')
// }).listen(3000,()=>console.log('running'))


// const fs=require('fs')
// let data =fs.readFileSync('hi.txt','utf-8')
// console.log(data)

// fs.unlink('exampl.txt',(err)=>{
//     if(err){ throw err
//     console.log('File deleting')}
// })

// fs.rename('hi.txt','hii.txt',(err)=>{

// })


// fs.writeFileSync('helo.txt','i can  crack my review very easily')

// fs.appendFileSync('helo.txt'," hellow every one ")

// const a =((req,res,next)=>{
//     console.log('hellow every one')
//     next()
// })
// app.use(a)

const express= require('express')
const app = express()
// app.get('/',(req,res)=>{
//     const num1= Number(req.query.num1)
//     const num2=Number(req.query.num2)
//     const sum=num1 + num2
//     res.send(`sum is ${sum}`)

// })

app.get('/:num1/:num2',(req,res)=>{
    const num1=Number(req.params.num1)
    const num2=Number(req.params.num2)
    const sum = num1+num2
    res.send(`sum is:${sum} `)
})




app.listen(3000,()=>{
    console.log('server running')
})















// const fs = require('fs')
// const readable =fs.createReadStream("hii.txt",'utf-8')


// const writable=fs.createWriteStream('output.txt')
// writable.write('helooooooow cochi')
// readable.pipe(writable)



