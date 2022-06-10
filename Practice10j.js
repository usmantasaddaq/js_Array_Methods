
// const  myObj = {
//     type: "number",
//     detail: {
//         test: {
//             type: "number",
            
//             def: {
//                 type: "number"
//             }
//         },
//         type: 'number'
//     },
//     number: {
//         type: 'number'
//     },
//     age: {
//         type: "number"
//     },
//     name: {
//         type: "number"
//     }
// };

// function fun(obj) {
//     for (let key of Object.keys(obj)) { 
//       if (typeof obj[key] === 'object') {
//         if (obj[key]) {
//           fun(obj[key]) }}
//       else {
//         if(key='type'){
//             obj[key]="string"
//         }
//     }
//   }
//     return obj
//   }
//   let x= fun(myObj)
  
//   console.log(x)


//Basic Check Task by imran bhai
// let array=[1,2,3]
// let a=[];
// function pass(arr,n){
//  return arr.push(n)

// }
// let x= pass(array,5)

// console.log(array)

//Concept of Function
1.
//function declaring 
// function functionName(){
//     Body of Function
// }
//Example
2.
//Function with Parameters
// function myObj(name){
//     console.log("Hello"+ " "+name +":")

// }
// myObj("Ali")
3.
// add two arrays 
// let arr1=[1,2,3,4,5]
// let arr2=[6,7,8,9,10]

// function add(array1,array2){

// for(let i=0;i<array1.length && array2.length;i++){
//     arr3=array1[i]+array2[i]
//     console.log(arr3)
// }

// }
// add(arr1,arr2)

4.
// let a='a';
// let b='b';
// if(a<b){
//     console.log(a + ' is less than '+ b)

// }else if(a>b){
//     console.log(a+ " is greater than "+ b);

// }else {
//     console.log(a +" and " +b + ' are equal')
// }

5. 
//Write a JavaScript function to check whether an `input` is a string or no
// function check(sn){
//     if(){
//         console.log('The given input is string');

//     }else
//         console.log('The giving input is number')
//     }
// check('fdfffdfdfdf')
// arr=[
//     {
//     a:'1',b:'2',c:'3',d:4

// }
// , {
//     a:'6',b:'7',c:'8',d:9

// }]
// let x=[];

// let ar = arr.filter((e) => { return x.push(e.a,e.b, e.c,e.d) }).join(',')

// console.log(x)


//Object.keys(arr).map(function(e){return arr[e]})

// let array=[]
// for(let i =0;i<arr.length;i++){
//  console.log(arr[i].a,arr[i].b,arr[i].c,arr[i].d)
// }


// arr=[
//         {
//         a:'1',b:'2',c:'3',d:4
    
//     }]

// x =arr.map((e)=>{

// }) 
// console.log(x)
    


// // for(let i=0;i<arr.length;i++){
// )
// }

// function fun(array){
//    for( Object.keys(array)){

//         if( typeof array[key]==='string')
//             console.log(array.a)
//    }
    
// }

// fun(arr)


// console.log(asplit('').join(','))


1// defining a string
// let str= "I love Programiz.";
// let len = str.length;

// console.log(len);
// 2.
// const message = "w3 m3";
// // replace the first b with c
// let result = message.replace('b', 'c');
// console.log(result);
// 3.
// let  str = "JavaScript is the world's most misunderstood programming language.";

// // indexOf() 
// let  index1 = str.indexOf("language");
// console.log(index1);

// let index2 = str.indexOf("p");
// console.log(index2); 

// let  index3 = str.indexOf("p", 9);
// console.log(index3); 

// var index4 = str.indexOf("Python");
// console.log(index4);
4.
// defining a string
// let str = "Programming";

// // defining a substring 'substr' that holds character 'g'
// let substr = "g";

// let  fromIndex = 6;

// // passing second parameter 'fromIndex' in lastIndexOf()
// let  result = str.lastIndexOf(substr, fromIndex);

// console.log(result);
5.
// text = "Java is to JavaScript what Car is to Carpet.";

// let check = text.startsWith("Java");
// console.log(check); 

// let check1 = text.startsWith("Java is");
// console.log(check1); 

// // case sensitive
// let check2 = text.startsWith("JavaScript");
// console.log(check2); 

// // second argument specifies the starting position
// let check3 = text.startsWith("JavaScript", 11);
// console.log(check3);
6.
// let str = "Hello World!";
// let str1 = "Java is to JavaScript what Car is to Carpet.";

// let ustr = str.toUpperCase();
// console.log(ustr); 

// let uppercase= str1.toUpperCase();
// console.log(uppercase);
7.
// let str = "Java is to JavaScript what Car is to Carpet.";

// let check = str.includes("Java");
// console.log(check);

// // case sensitive
// let check1 = sentence.includes("java");
// console.log(check1); 

// // second argument specifies position to start at
// let check2 = str.includes("Java", 20);
// console.log(check2); 

// let check3 = str.includes("whose");
// console.log(check3); 

// let check4 = str.includes("");
// console.log(check4);
8.
const message = "JavaScript is a fun programming language.";

// regular expression that checks if message contains 'programming'
const exp = /programming/;

// check if exp is present in message
let result = message.match(exp);
console.log(result);

/*
Output: [
  'programming',
  index: 20,
  input: 'JavaScript is a fun programming language.',
  groups: undefined
  ]
*/