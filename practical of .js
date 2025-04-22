// function nam(a)
//     {
//     return function (b){
//         return function (c){
//             return (a+b+c)
//         }

//     }
// }
// console.log(nam(4)(5)(6))


// function* gen(){
//     let i=10
//     while(i>=0){
//         if(i%2==0){
//             yield i
//         }
//         i--
//     }
    
    
// }
// let a=gen()
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)


// const  promise =new Promise((resolve,reject)=>{
//     let success=true
//     if(success){
//         resolve('success')
//     }else{
//         reject('error')
//     }
// })
// promise
// .then((result)=>console.log('message'))
// .catch((error)=>console.log(error))


// const ar= {a:1,b:{c:5}}
// const shallo={...ar}
// shallo.b.c=2
// console.log(ar)
// console.log(shallo)


// const deep= structuredClone(ar)
// deep.b.c=8
// console.log(ar)
// console.log(deep)


// const Obj = [{product:'cpu',price:1000},{product : 'ups',price:700}]

// let sum = Obj.reduce((acc,curr)=>acc+=curr.price,0)
 
//  console.log(sum)


// let Obj = [{a:10,b:30},{a:10,b:30},{a:10,b:30},{a:10,b:30}];
// let sumA =Obj.reduce((acc,cur)=>acc+cur.a,0)
// let sumB=Obj.reduce((acc,cur)=>cur.b+acc,0)
// console.log(sumB)
// console.log(sumA)


// let Obj ={
//     a:10,
//     b:[1,2,3,4]
//   }
//   let sum = Obj.b.reduce((acc,cur)=>acc+cur,0)
//   console.log(sum)



// let arr = [{a:1}, {b:2}, {c:3},{d:3},{e:5},{f:2},{g:4}]
// find the sum of even

// let sum = arr.reduce



// const express= require('express')
// const app= express()

// app.use('/',(req,res,next)=>{
// console.log('helo')
// next()
// })
// app.listen(3000,()=>{
//     console.log('running')
// })

let 