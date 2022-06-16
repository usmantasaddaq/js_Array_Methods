
1.
// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
    
// }

// /*
//  * Complete the 'countApplesAndOranges' function below.
//  *
//  * The function accepts following parameters:
//  *  1. INTEGER s
//  *  2. INTEGER t
//  *  3. INTEGER a
//  *  4. INTEGER b
//  *  5. INTEGER_ARRAY apples
//  *  6. INTEGER_ARRAY oranges
//  */


// function countApplesAndOranges(s, t, a, b,apples, oranges) {
//     // Write your code here
//     let Apple = 0
//     let Orange = 0;

//     for (let i = 0; i < apples.length; i++) {
//       let  d = apples[i] + a;
//         if (d >= s && d <= t) {
//             Apple++;
//         }
//     }
//     for (let i = 0; i < oranges.length; i++) {
//         let d = oranges[i] + b;
//         if (d >= s && d <= t) {
//             Orange++;
//         }
//     }
//     console.log(Apple);
//     console.log(Orange);
// }

// function main() {
//     const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

//     const s = parseInt(firstMultipleInput[0], 10);

//     const t = parseInt(firstMultipleInput[1], 10);

//     const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

//     const a = parseInt(secondMultipleInput[0], 10);

//     const b = parseInt(secondMultipleInput[1], 10);

//     const thirdMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

//     const m = parseInt(thirdMultipleInput[0], 10);

//     const n = parseInt(thirdMultipleInput[1], 10);

//     const apples = readLine().replace(/\s+$/g, '').split(' ').map(applesTemp => parseInt(applesTemp, 10));

//     const oranges = readLine().replace(/\s+$/g, '').split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

//     countApplesAndOranges(s, t, a, b, apples, oranges);
// }
2.
// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// /*
//  * Complete the 'kangaroo' function below.
//  *
//  * The function is expected to return a STRING.
//  * The function accepts following parameters:
//  *  1. INTEGER x1
//  *  2. INTEGER v1
//  *  3. INTEGER x2
//  *  4. INTEGER v2
//  */
// function kangaroo(x1, v1, x2, v2) {
//     // Write your code here

//   return Math.sign(x1 - x2) === Math.sign(v2 - v1) && 
//           ( v1 === v2 || (x1 - x2) % Math.abs(v2 - v1) === 0) ? "YES" : "NO";
// }
// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

//     const x1 = parseInt(firstMultipleInput[0], 10);

//     const v1 = parseInt(firstMultipleInput[1], 10);

//     const x2 = parseInt(firstMultipleInput[2], 10);

//     const v2 = parseInt(firstMultipleInput[3], 10);

//     const result = kangaroo(x1, v1, x2, v2);

//     ws.write(result + '\n');

//     ws.end();
// }
3.
// .
// // There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

// // The elements of the first array are all factors of the integer being considered
// // The integer being considered is a factor of all elements of the second array
// // These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

// // let a =[2,6];

// // let b= [24,36];

// // //Dynamic values/Keys

// let  arr = ['a','b','c','a','a','a','b','d']
// let  obj = {};
// arr.forEach((e) => 
// {
//   obj[e] = (obj[e] || 0)+1;
// });

// console.log(obj)
4.

// //find factor of a number ;
// let n=5;
// for(let i=0;i<=n;i++){
//     if(n % i ==0){
//         console.log(i)

//     }
// }
5.
// //Merge Property of Two Objects Using Object.assign()
// let obj1={
//     Name:'Ali',age:23
// }
// let obj2={
//     Name:'Ahmed',
//     age:24
// }
// // let obj3=object.assign
// let arr =[1,2,3]
// let array=[4,5,6];
// let x= arr.concat(array)
// console.log(x)
6.
// program to convert an object to a string

// const person = {
//     Name: 'Ali',
//     age: 23
// }

// let result =  JSON.stringify(person);

// console.log(result);
// console.log(typeof result);
7.
// program to convert an object to a string
// 
// let x=[2,3,-4],y=[3,-2,-4];
// function myfunction(a,b){
// let ans =[]
// for (let i=0;i<a.length;i++){
//     ans[i]=a[i]+b[i];
// }
// console.log(ans);
// }
// myfunction(x,y)
8.
//Not Done In processing (on hackerank)
// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.


