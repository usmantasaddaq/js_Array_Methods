1.
//Access String Characters
// let str="hello"
// //console.log(str[0])
// console.log(str.charAt(0))
2.
// //we use charAt or arraymethod to access a string charcters
// let a ="hello"
// let b =new String('hello')
// console.log(a)
// console.log(b)
// console.log(typeof a)
// console.log(typeof b)
3.
// let text = "Visit w3school!"; 
// let n = text.search("w3school");
// console.log(n);
// console.log()
4.
// let val ="value of x is not define";
// console.log(val.search('x'))
//console.log(val.replace('x','y'))
5.
// use of new Set()
// let letter =new Set()
// letter.add('a')
// letter.add('b')
// letter.add('c')
// console.log(letter)
// console.log(letter.size)
6.
// let arr =new Set(['a','b','c','d'])
// let text =''
// arr.forEach(function fun(value){
//  text += " " + value
// })
// console.log(text)
// console.log(arr.values())
7.
// let l =new Set(['a','b','c','d'])
// let text =""
// for(x of l){
//     text +=x
//     console.log(x)
// }    
8.
// let fruits = new Map([
// ["apple",500],
// ["orange",300],
// ["mango",200]
// ])
// let val =[]
// for(let x of fruits){
// val +=" "+ " The price of "+x ;
// } 
// console.log(fruits.has("orange"))
9.
// let x=[17,28,30]
// let y=[99,16,8]

// let  Alice=0
// let  bobs=0
// let ans=[];
// function compareTriplets(a,b) { 
//     // Write your code here
   
//     for(let i=0;i<a.length;i++)
//     {
//         if(a[i] > b[i]) 
//                 {
                   
//                 Alice ++
               
//                 } 
                
//     }
//     ans.push(Alice)
//                 for(let i=0;i<a.length;i++)
//                 {
//         if(a[i] < b[i]){
//                     bobs ++
                   
//             }
//         }
//         ans.push(bobs)
                
                
           
//             }
//  compareTriplets(x,y)
// console.log(ans)

10.
// Create a function that reverses an array
// let arr =[1,2,3,4,5]

// // let array= arr.reverse()
// // console.log(array)
// function myFunction(value){
//   return value.reverse().join()
// }
// console.log(myFunction(arr))
11.

// //Create a function that filters out negative numbers
// let number =[1,2,-5,3,4]

// let s=number.filter(e => {
//     if(e>0){
//         return e
//      } 
//   });
 
// console.log(s)
12.
//Calculate the sum of digits of a positive integer number
// let array=[2,3,-4,5,6,7]
// let sum =0
// let z=array.filter(e =>{
//     if(e>0){
//         return  sum=sum+e
//     }})
// console.log(sum)
13.
// let arr = [

//     {
  
//       name: 'Tom',
  
//       age: 21,
  
//       address: {
  
//         city: 'New Yourk',
  
//         country: 'USA'
  
//       },
  
//       job: 'DEVELOPER'
  
//     },
  
//     {
  
//       name: 'Brad',
  
//       age: 27,
  
//       address: {
  
//         city: 'Ontario',
  
//         country: 'Canada'
  
//       },
  
//       job: 'BANKER'
  
//     },
  
//     {
  
//       name: 'Tom',
  
//       age: 30,
  
//       address: {
  
//         city: 'London',
  
//         country: 'England'
  
//       },
  
//       job: 'UNEMPLOYED'
  
//     }
  
//   ]
  //Write a function that takes a job and return the person with that job.

//   let fun = (job) => {
//     return arr.filter((e)=>{
   
//     if(e.job.toLowerCase()=== job.toLowerCase()){
       
//           return e
//     }
    
//     })

// }


//  let x =fun('Unemployed') 

// console.log(x)
14.
//remove specific items from an array



// let number= [1,2,3,4,5]
// let array=[]
// function fun(arr,n){
    
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!==n){
//         array.push(arr[i])
        
//         }

//     }
//     return array
// }
// fun(number,3)
// console.log(array)
15.
//not done
// let  array=[1,2,3,4,6]
// function fun(value,n){
   
//     for(let i=0;i<array.length;i++){
//                 if(array[i]!==n){
                   
//                 console.log(array[i])
//                 }
        
//             }
        
    

//}
//fun(array,3)
16.
// let arr=[1,2,3,4,6];

// function fun(value){
//     let index =value.indexOf(4)

//     if(index > -1){
//     arr.splice(index,1)
//     }
// }
// fun(arr)

// console.log(arr)
17.
// let arr=[1,2,3,4,6];

// function fun(value){
//     let index =value.indexOf(4)
//     if(index > -1){
//      value.splice(index,1)
//     }
//     return value
// }
// let q= fun(arr)

// console.log(q)


let n=5;

function staircase(n){
 for(let i=0;i<n;i++){

  let  ans ='' 
for(let j=0;j<n;j++){
j < (n-1-i)? ans +='': ans+='#'
}
console.log(ans)
}
 }



