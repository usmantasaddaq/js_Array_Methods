1.
//Drawing book 
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
//  * Complete the 'pageCount' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts following parameters:
//  *  1. INTEGER n
//  *  2. INTEGER p
//  */

// function pageCount(n, p) {
//     // Write your code here
//     let count = 0;
//     let bookHalf = Math.floor(n/2) 
//     let pageDiff = n - p
//     if(p == bookHalf){
// // if page is at the center of the book
//         count = Math.floor(bookHalf/2)
//     }else if(p < bookHalf){
// // if page is closer to the front
//         count = Math.floor(p / 2)
//     } else if(pageDiff == 1 && n%2 == 0){
// // if page is at the end and last page number is even
//         count = Math.ceil(pageDiff / 2)
//     } else if(pageDiff == 1 && n%2 !== 0){
// // if page is at the end and last page number is odd
//         count = Math.floor(pageDiff / 2)
//     }
//     else {
// // if page is closer to the end
//         count = Math.floor(pageDiff / 2)
//     }
//     return count
// }

// function main() {
//                  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//        const n = parseInt(readLine().trim(), 10);

//     const p = parseInt(readLine().trim(), 10);

//     const result = pageCount(n, p);

//     ws.write(result + '\n');

//     ws.end();
// }
2.
// Write a function

// Pass an array

// and two numbers

// add them
// arr=[]
// function add(array,a,b){

//     return (array.push(a+b))
// }

// add(arr,1,6)
// console.log(arr)

3.   
//Electronic shop
// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(str => str.trim());

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// /*
//  * Complete the getMoneySpent function below.
//  */
// function getMoneySpent(keyboards, drives, b) {
//     /*
//      * Write your code here.
//      */
//  let ans=-1;

//          for(let i=0;i<drives.length;i++)
//          {
//              for(let j=0;j<keyboards.length;j++)
//              {
//                  if((drives[i]+keyboards[j]>ans) && (drives[i]+keyboards[j]<=b))
//                  {
//                      ans=drives[i]+keyboards[j];
//                  }
//              }
//          }
//          return ans;
// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const bnm = readLine().split(' ');

//     const b = parseInt(bnm[0], 10);

//     const n = parseInt(bnm[1], 10);

//     const m = parseInt(bnm[2], 10);

//     const keyboards = readLine().split(' ').map(keyboardsTemp => parseInt(keyboardsTemp, 10));

//     const drives = readLine().split(' ').map(drivesTemp => parseInt(drivesTemp, 10));

//     /*
//      * The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
//      */

//     let moneySpent = getMoneySpent(keyboards, drives, b);

//     ws.write(moneySpent + "\n");

//     ws.end();
// }

4.
//Two cat and a mouse 3


// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.replace(/\s*$/, '')
//         .split('\n')
//         .map(str => str.replace(/\s*$/, ''));

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// // Complete the catAndMouse function below.
// function catAndMouse(x, y, z) {
//     let catA = Math.abs(z - x);
//     let catB = Math.abs(z - y);
//     if (catA < catB){
//         return "Cat A";
//     } else if (catB < catA) {
//         return "Cat B";
//     } else {
//         return "Mouse C";
//     }
//     }


// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const q = parseInt(readLine(), 10);

//     for (let qItr = 0; qItr < q; qItr++) {
//         const xyz = readLine().split(' ');

//         const x = parseInt(xyz[0], 10);

//         const y = parseInt(xyz[1], 10);

//         const z = parseInt(xyz[2], 10);

//         let result = catAndMouse(x, y, z);

//         ws.write(result + "\n");
//     }

//     ws.end();
// }
