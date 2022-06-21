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

// // Complete the beautifulDays function below.
// function beautifulDays(i, j, k) {
// let count=0

// for(let x=i;x<=j;x++)
// {
//    let y=x.toString().split('').reverse().join('');
//     let sol =Math.abs((x-y)/k)
//     if(Number.isInteger(sol))
//     {
//       count+=1
//     }
// }
// return count
// }
// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const ijk = readLine().split(' ');

//     const i = parseInt(ijk[0], 10);

//     const j = parseInt(ijk[1], 10);

//     const k = parseInt(ijk[2], 10);

//     let result = beautifulDays(i, j, k);

//     ws.write(result + "\n");

//     ws.end();
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
//  * Complete the 'saveThePrisoner' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts following parameters:
//  *  1. INTEGER n
//  *  2. INTEGER m
//  *  3. INTEGER s
//  */

// function saveThePrisoner(n, m, s) {
//     // Write your code here
//     const r = (((m + n) % n) + (s % n) - 1) % n
//     return r == 0 ? n : ((r+n) % n)

// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const t = parseInt(readLine().trim(), 10);

//     for (let tItr = 0; tItr < t; tItr++) {
//         const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

//         const n = parseInt(firstMultipleInput[0], 10);

//         const m = parseInt(firstMultipleInput[1], 10);

//         const s = parseInt(firstMultipleInput[2], 10);

//         const result = saveThePrisoner(n, m, s);

//         ws.write(result + '\n');
//     }

//     ws.end();
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
//  * Complete the 'viralAdvertising' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts INTEGER n as parameter.
//  */

// function viralAdvertising(n) {

//     let shared = 5, like = 0, totalLikes = 0;
//     for (let i = 1; i <= n; i++) {
//         like = Math.floor(shared / 2);
//         shared = like * 3;
//         totalLikes += like;
//     }
//     return totalLikes;
// }


// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const n = parseInt(readLine().trim(), 10);

//     const result = viralAdvertising(n);

//     ws.write(result + '\n');

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
//  * Complete the 'circularArrayRotation' function below.
//  *
//  * The function is expected to return an INTEGER_ARRAY.
//  * The function accepts following parameters:
//  *  1. INTEGER_ARRAY a
//  *  2. INTEGER k
//  *  3. INTEGER_ARRAY queries
//  */

// function circularArrayRotation(a, k, queries) {
//     // Write your code here

//   let result = [];

//   while (k > 0) {
//     let tmp = a.pop();
//     a.unshift(tmp);
//     k--;
//   }

//   for (let i = 0; i < queries.length; i++) {
//     result.push(a[queries[i]]);
//   }

//   return result;
// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

//     const n = parseInt(firstMultipleInput[0], 10);

//     const k = parseInt(firstMultipleInput[1], 10);

//     const q = parseInt(firstMultipleInput[2], 10);

//     const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

//     let queries = [];

//     for (let i = 0; i < q; i++) {
//         const queriesItem = parseInt(readLine().trim(), 10);
//         queries.push(queriesItem);
//     }

//     const result = circularArrayRotation(a, k, queries);

//     ws.write(result.join('\n') + '\n');

//     ws.end();
// }
5.
