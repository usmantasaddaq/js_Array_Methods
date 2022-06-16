// 1.
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
//  * Complete the 'hurdleRace' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts following parameters:
//  *  1. INTEGER k
//  *  2. INTEGER_ARRAY height
//  */

// function hurdleRace(k, height) {
//     // Write your code here
    
//     let count = 0;
//     for (let i = 0; i < height.length; i++) {
        
//         if (height[i] > k) {
            
//            let diff = height[i] - k;
           
//             if (diff > count) {
                
//                 count = diff;
//             }
//         }
//     }
//     if (count === 0) {
//         return 0;
//     }
//     return count;
// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

//     const n = parseInt(firstMultipleInput[0], 10);

//     const k = parseInt(firstMultipleInput[1], 10);

//     const height = readLine().replace(/\s+$/g, '').split(' ').map(heightTemp => parseInt(heightTemp, 10));

//     const result = hurdleRace(k, height);

//     ws.write(result + '\n');

//     ws.end();
// }
// 2.
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
//  * Complete the 'pickingNumbers' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts INTEGER_ARRAY a as parameter.
//  */

// function pickingNumbers(a) {
//     // Write your code here
// let sortedArray = a.sort(function(a,b){
//     return(a - b);
// })

// let currentArray = [];
// let longestArray = 0;
// let startNumber = 0;
// for(let i = 0; i < sortedArray.length; i++){
//     let result = Math.abs(sortedArray[startNumber] - sortedArray[i]);
//     if (result <= 1){
//         currentArray.push(sortedArray[i]);
//         if(currentArray.length > longestArray){
//                 longestArray = currentArray.length
//             };
//     }else {

//         startNumber = i;
//         if(currentArray.length > longestArray){
//             longestArray = currentArray.length
//         }
//         currentArray = [];
//         currentArray.push(sortedArray[i]);
        
//     }

// }
// return longestArray;
// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const n = parseInt(readLine().trim(), 10);

//     const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

//     const result = pickingNumbers(a);

//     ws.write(result + '\n');

//     ws.end();
// }

// 3.
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
//  * Complete the 'climbingLeaderboard' function below.
//  *
//  * The function is expected to return an INTEGER_ARRAY.
//  * The function accepts following parameters:
//  *  1. INTEGER_ARRAY ranked
//  *  2. INTEGER_ARRAY player
//  */

// function climbingLeaderboard(scores,  alice) {
//     // Write your code here
// let rank = [];
//   for (let i = 0; i < scores.length; i++) {
//     if (rank.length === 0) {
//       rank.push(scores[i]);
//     } else {
//       if (rank[rank.length - 1] === scores[i]) {
//         continue;
//       }
//       rank.push(scores[i]);
//     }
//   }
  
//   let res = [];
//   let lowestRank = rank.length;
//   for (let i = 0; i < alice.length; i++) {
//     while (alice[i] >= rank[lowestRank - 1] && lowestRank > 0) {
//       rank.pop;
//       lowestRank--;
//     }
//     res.push(lowestRank + 1);
//   }
//   return res;
// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const rankedCount = parseInt(readLine().trim(), 10);

//     const ranked = readLine().replace(/\s+$/g, '').split(' ').map(rankedTemp => parseInt(rankedTemp, 10));

//     const playerCount = parseInt(readLine().trim(), 10);

//     const player = readLine().replace(/\s+$/g, '').split(' ').map(playerTemp => parseInt(playerTemp, 10));

//     const result = climbingLeaderboard(ranked, player);

//     ws.write(result.join('\n') + '\n');

//     ws.end();
// }
4.
//simple Task
// write a function that takes an

// - array name string

// - array name number

// - two strings

// - two numbers

// and push number into number array

// and push string into string array

// let string =[]
// let number=[]

// function add(s,n,p,q,d,m){
//  n.push(d,m)
//  s.push(p,q)
// }
// add(string,number,'a','b',1,2)
// console.log(string,number)
5.
//hackarrank

// let value =124;

//   let digit=(""+value).split('')

// function divisor(number,arr){
//      let count =0;
//     for(let i=0;i < arr.length; i++){
        
//          if(number % arr[i]==0){
//               count++

//          }
//          else {
//             return "false" 
//          }
         
//         }
//         return count
// }
// let ans= divisor (value,digit)
// console.log(ans)