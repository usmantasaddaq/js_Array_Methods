

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
//  * Complete the 'permutationEquation' function below.
//  *
//  * The function is expected to return an INTEGER_ARRAY.
//  * The function accepts INTEGER_ARRAY p as parameter.
//  */

// function permutationEquation(p) {
//     // Write your code here

// const arr=[];

//     for (let i = 1; i <=p.length; i++) {
//         arr.push(p.indexOf(p.indexOf(i)+1)+1);
//     }
// return arr
// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const n = parseInt(readLine().trim(), 10);

//     const p = readLine().replace(/\s+$/g, '').split(' ').map(pTemp => parseInt(pTemp, 10));

//     const result = permutationEquation(p);

//     ws.write(result.join('\n') + '\n');

//     ws.end();
// 

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
//  * Complete the 'appendAndDelete' function below.
//  *
//  * The function is expected to return a STRING.
//  * The function accepts following parameters:
//  *  1. STRING s
//  *  2. STRING t
//  *  3. INTEGER k
//  */

// function appendAndDelete(s, t, k) {
//     // Write your code here
//   let sArr = s.split("")
//   let tArr = t.split("")
//   let count = 0
//   for (let i = 0; i === count && i < s.length; i++) {
//       if (sArr[i] === tArr[i]) {
//           count++
//       }
//   }

//   let tCount = t.length - count
//   let sCount = s.length - count

//   let STK = k - (tCount + sCount)

//   if (tCount + sCount < k && t.length + s.length > k && STK % 2 !== 0) {
//       return "No"
//   } else if (tCount + sCount <= k) {
//       return "Yes"
//   } else {
//       return "No"
//   }
// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const s = readLine();

//     const t = readLine();

//     const k = parseInt(readLine().trim(), 10);

//     const result = appendAndDelete(s, t, k);

//     ws.write(result + '\n');

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
//  * Complete the 'squares' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts following parameters:
//  *  1. INTEGER a
//  *  2. INTEGER b
//  */

// function squares(a, b) {
// let square = 0, count = 0;

//     for (let i=1;square <= b;i++) {
        
//         square = i * i;
        
//         if (square >= a && square <= b) {
            
//             count ++;
//         }
//     }
//     return count;

// }       
                                                    

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const q = parseInt(readLine().trim(), 10);

//     for (let qItr = 0; qItr < q; qItr++) {
//         const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

//         const a = parseInt(firstMultipleInput[0], 10);

//         const b = parseInt(firstMultipleInput[1], 10);

//         const result = squares(a, b);

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
//  * Complete the 'libraryFine' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts following parameters:
//  *  1. INTEGER d1
//  *  2. INTEGER m1
//  *  3. INTEGER y1
//  *  4. INTEGER d2
//  *  5. INTEGER m2
//  *  6. INTEGER y2
//  */

// function libraryFine(d1, m1, y1, d2, m2, y2) {
//     // Write your code here

//  if(y1==y2 && m1== m2 && d1> d2)
// {
//     return (15 * (d1-d2))
// }
// else if(y1==y2 && m1>m2){
//     return (500 * (m1-m2))
// }else  if(y1>y2){
//     return 10000
// }else if(y1>=y2 || m1>=m2 || d1>=d2)
// {
//     return 0
// }
// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

//     const d1 = parseInt(firstMultipleInput[0], 10);

//     const m1 = parseInt(firstMultipleInput[1], 10);

//     const y1 = parseInt(firstMultipleInput[2], 10);

//     const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

//     const d2 = parseInt(secondMultipleInput[0], 10);

//     const m2 = parseInt(secondMultipleInput[1], 10);

//     const y2 = parseInt(secondMultipleInput[2], 10);

//     const result = libraryFine(d1, m1, y1, d2, m2, y2);

//     ws.write(result + '\n');

//     ws.end();
// }
5.
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
//  * Complete the 'cutTheSticks' function below.
//  *
//  * The function is expected to return an INTEGER_ARRAY.
//  * The function accepts INTEGER_ARRAY arr as parameter.
//  */

// function cutTheSticks(arr) {
//     // W 
//     let ans = [];
//     while (arr.length != 0) {

//         let minVal = Math.min(...arr);
//         ans.push(arr.length);
//         for (let i = 0; i < arr.length; i++) {
//             let sub = arr[i] - minVal;

//             if (sub === 0) {
//                 arr.splice(i, 1);
//                 i -= 1;
//             } else {
//                 arr[i] = sub;
//             }
//          }
//     }
//     return ans;

// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const n = parseInt(readLine().trim(), 10);

//     const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

//     const result = cutTheSticks(arr);

//     ws.write(result.join('\n') + '\n');

//     ws.end();
// }

