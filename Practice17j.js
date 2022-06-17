1.
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
//  * Complete the 'findDigits' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts INTEGER n as parameter.
//  */

// function findDigits(n) {
//     // Write your code here
// let arr=(""+n).split('')

//  let count =0;
//     for(let i=0;i < arr.length; i++){
        
//          if(n % arr[i]===0){
//               count++
//          }
//         //  else {
//         //     return "false"
//         //  }
         
//         }
//         return count
// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const t = parseInt(readLine().trim(), 10);

//     for (let tItr = 0; tItr < t; tItr++) {
//         const n = parseInt(readLine().trim(), 10);

//         const result = findDigits(n);

//         ws.write(result + '\n');
//     }

//     ws.end();
// }
2.
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
//  * Complete the 'extraLongFactorials' function below.
//  *
//  * The function accepts INTEGER n as parameter.
//  */

// function extraLongFactorials(n) {
//     // Write your code here

//     let  bigInt = BigInt(n);
//     let fac = BigInt(1)
//     for(var i= bigInt;i>0;i--){
//             fac = fac * i;
//             }
// console.log(fac)
// }
// function main(){
    
//     const n = parseInt(readLine().trim(), 10);

//     extraLongFactorials(n);
// }
3.
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
//  * Complete the 'utopianTree' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts INTEGER n as parameter.
//  */

// function utopianTree(n) {
//     // Write your code here

// let height = 1;
        
//         for (let i = 0; i < n; i++) {
//             if (i % 2 == 0) {
//                 height *= 2
//             } else {
//                 height += 1;
//             }
//         }
//     return height;
// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const t = parseInt(readLine().trim(), 10);

//     for (let tItr = 0; tItr < t; tItr++) {
//         const n = parseInt(readLine().trim(), 10);

//         const result = utopianTree(n);

//         ws.write(result + '\n');
//     }

//     ws.end();
// }
4.
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
//  * Complete the 'angryProfessor' function below.
//  *
//  * The function is expected to return a STRING.
//  * The function accepts following parameters:
//  *  1. INTEGER k
//  *  2. INTEGER_ARRAY a
//  */

// function angryProfessor(k, a) {
//   let p=0,l=0;
//       // Write your code

//   for(let i=0;i<=a.length;i++){
   
//       if(a[i]<=0){
//            p++
     
//           }
//         if(a[i]>0){
//               l++
//       } 
//       }

//       if(p<k){
//            return "YES"
//        }
//         if(p>=k){
//            return  "NO"
//         }


// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const t = parseInt(readLine().trim(), 10);

//     for (let tItr = 0; tItr < t; tItr++) {
//         const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

//         const n = parseInt(firstMultipleInput[0], 10);

//         const k = parseInt(firstMultipleInput[1], 10);

//         const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

//         const result = angryProfessor(k, a);

//         ws.write(result + '\n');
//     }

//     ws.end();
// }