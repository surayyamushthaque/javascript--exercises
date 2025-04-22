// Access the value of a nested property
// const users = {
//     name: "Achu",
//     address: {
//       city: "Kochi",
//       zip: 682001
//     }
//   };
  // Q: How will you print the city?
  //   console.log(users.address.city)




  // Change the city to "Thrissur"
 //   users.address.city='Thrissur'
 //   console.log(users)

 // Add a new key age: 25 to the object above.
 // users.age=25
 // console.log(users)


 // Delete the zip key from the address object.
//  delete users.address.zip
//  console.log(users)

 // Loops and Conditions with Objects
//  // Loop through the following object and print keys with string values only


// const data = {
//     name: "Surayya",
//     age: 23,
//     city: "Calicut",
//     isStudent: false
//   };

  
//   for(let dat in data){
//     if(typeof data[dat] === 'string'){
//         console.log(data[dat])
//     }
//   }

// Count how many keys have values of type string


// let count=0
// for(let dat in data){
//     if(typeof data[dat]==='string'){
//         count++
//     }
// }console.log(count)


// Convert all string values to uppercase in the object.
//  let ar=[] 
// for(let dat in data){
//     if( typeof dat==='string'){
//     }
//    console.log( dat.toUpperCase())  
// }



// From this array, return users who are older than 25:
// const users = [
//     { name: "Achu", age: 24 },
//     { name: "Surayya", age: 27 },
//     { name: "Arun", age: 22 }
//   ];
  
// for(let user of users){
//     if(user.age>25){
//         console.log(user)
//     }
// }


// Add a new key isAdult: true/false based on age >= 18.

// for(let user of users){
//     if(user.age>=18){
//         user.isAdult='true'
//     }else{
//         user.isAdult='false'
//     }
// }
// console.log(users)

// Create a new array of only user names from the array above.

// let ar=[]
// for(let user of users){
//     ar.push(user.name)
// }console.log(ar)

// let sum = 0
// let n= users.length
// for(let user of users){
//     sum+=user.age}
// let average=sum/n
// console.log(average)

// const users = [
//     { name: "Achu", age: 24 },
//     { name: "Surayya", age: 27 },
//     { name: "Arun", age: 22 }
//   ];



//   let largest=0
//  for(let user of users){
//     if(user.age>largest){
//         largest=user.age
//     }

//  }console.log(largest)




// Check if all users are adults.
// for(let user of users){
//     if(user.age>=18){
//         console.log('adult')
//     }
// }

//Check if at least one user is below 18.


// const hasMinor=users.some(user=>user.age<18)
// console.log(hasMinor)


// Add a property: greeting— name must match the user’s name.

// for(let user of users){
//     user.greet=`Hello ${user.name} !`
// }console.log(users)


// for(let user of users){
//     if(user.age>25){
//         user.greet=`hello sir ${user.name}`
//     }else{
//         user.greet=`hey buddy ${user.name}`
//     }
// }console.log(users)





// const users = [
//     { name: "Achu", age: 24 },
//     { name: "Surayya", age: 27 },
//     { name: "Arun", age: 22 },
//     { name: "Chinnu", age: 24 }
//   ];
  
//  let ar ={}
//   for(let user of users){
//     if(user.age[0]===user.age[1]){
//         ar=user.age
//     }
//   }console.log(ar)


// let Obj = {
//   a: 10,
//   b: [1, 2, 3, 4]
// }


// let sum =Obj.a+Obj.b.reduce((acc,cur)=>acc+cur,0)
// console.log(sum)


// let Obj = [{a:3,b:{m:1,n:2}}]

// let totalsum=Obj[0].a+Obj[0].b.m+Obj[0].b.n
// console.log(totalsum)



// let data = { x: 5, y: 10, z: 15 };
// let sum = 0
// for(let i in data){
// sum+=data[i]
// }
// console.log(sum)

// let sum=data.x+data.y+data.z
// console.log(sum)


// let data = {
//   x: 5,
//   y: [10, 20, 30]
// };

// let result=data.x+data.y.reduce((acc,cur)=>acc+cur,0)
// console.log(result)

// let info = [{
//   p: 7,
//   q: { r: 2, s: 3 }
// }];

// let r = info[0].p+info[0].q.r+info[0].q.s
// console.log(r)

// let obj = {
//   a: [1, 2, 3],
//   b: [4, 5]
// };

// let res=obj.a.reduce((acc,cur)=>acc+cur,0)+obj.b.reduce((acc,cur)=>acc+cur,0)
// console.log(res)

// let data = [
//   { x: 4, y: { a: 1, b: 2 } },
//   { x: 6, y: { a: 3, b: 4 } }
// ];
// let  r = data[0].x+data[0].y.a+data[0].y.b 
// let s= data[1].x+data[1].y.a+data[1].y.b
// let sum= r+s

// console.log(sum)


// let complex = {
//   m: 10,
//   n: {
//     o: [5, 5, 5]
//   }
// };

// let sum=complex.m+complex.n.o.reduce((acc,cur)=>acc+cur,0)
// console.log(sum)
// find the total sum of price
// let obj = {
//   products: [
//     { name: "pen", price: 10 },
//     { name: "book", price: 40 },
//     { name: "pencil", price: 5 }
//   ]
// };

// let sum = obj.products.reduce((acc,cur)=>acc+cur.price,0)
// console.log(sum)



// let obj = {
//   products: [
//     { name: "pen", price: 10 },
//     { name: "book", price: 40 },
//     { name: "pencil", price: 5 }
//   ]
// };

// let sum = obj.products.price.reduce((acc,cur)=>acc+cur,0)
// console.log(sum)

// let obj = {
//   products: [
//     { name: "pen", price: 10 },
//     { name: "book", price: 40 },
//     { name: "pencil", price: 5 }
//   ]
// };
// // Q: Return a new array of products with price > 10.
//  let ar=obj.products.filter(product=>product.price>10)
//  console.log(ar)


// let obj = {
//   products: [
//     { name: "pen", price: 10 },
//     { name: "book", price: 40 },
//     { name: "pencil", price: 5 }
//   ]
// };
// // Q: Find the product with the highest price.

// let ar = obj.products.sort((a,b)=>b.price-a.price)
// console.log(ar[0])

// const data = { a: 1, b: 2 };
// // Convert keys to: { A: 1, B: 2 }
// let ar= Object.entries(data).map(([Key,value])=>[Key.toUpperCase(),value])
// let ara=Object.fromEntries(ar)
// console.log(ara)



// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// // Merge obj1 and obj2 into a new object
// const obj={...obj1,...obj2}
// console.log(obj)


// const settings = { theme: "dark", font: "Arial" };
// // Convert to [['theme', 'dark'], ['font', 'Arial']]
// let ar=Object.entries(settings)
// console.log(ar)


 

// const sales = { Monday: 100, Tuesday: 150, Wednesday: 120 };


// let maxSales = 0;

// for (const day in sales) {
//   if (sales[day] > maxSales) {
//     maxSales = sales[day];
    
//   }
// }

// console.log(maxSales); 


// let maxSales =0
// for(const day in sales){
//   if(sales[day]>maxSales){
//     maxsales = sales[day]
//   }
// }
// console.log(maxsales)



// let ob = { a:10,b:12, c:45}
// let ad = ob.a + ob.b + ob.c
// console.log(ad)