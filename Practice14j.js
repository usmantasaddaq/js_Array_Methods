1. 
//Breaking the Recoords 
//use Hackerrank
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
//  * Complete the 'breakingRecords' function below.
//  *
//  * The function is expected to return an INTEGER_ARRAY.
//  * The function accepts INTEGER_ARRAY scores as parameter.
//  */

// function breakingRecords(scores) {
//     // Write your code here
// let game =  scores;
// let min =game[0];
// let max =game[0];
// let minCount =0;
// let maxCount =0;
// for(let score of game){
//     if(max<score){
//         max =score;
//         maxCount++;
//     }
//     if(score<min){
//         min = score;
//         minCount++;
//     }
// }
// return [maxCount,minCount]
// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const n = parseInt(readLine().trim(), 10);

//     const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

//     const result = breakingRecords(scores);

//     ws.write(result.join(' ') + '\n');

//     ws.end();
// }

2.
//Subarray Division
//hackerrank
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

/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

// function birthday(s, d, m) {
//     // Write your code here
//     let w = 0,
//         i = 0,
//         sum = 0,
//         j = 0,
//         index = 0;
//     if(s.length === 1 && s[0] === d){
        
//       return 1;
      
//     }
//     for(i = 0; i < s.length - (m -1); i++){
        
//       sum = 0;
      
//       index = i;
      
//       for(j = 0; j < m; j++){
          
//         sum += s[index++]
        
//       }
      
//       if(sum === d){
          
//         w++;
        
//       }
      
//     }
    
//     return w;
     
//     }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const n = parseInt(readLine().trim(), 10);

//     const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

//     const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

//     const d = parseInt(firstMultipleInput[0], 10);

//     const m = parseInt(firstMultipleInput[1], 10);

//     const result = birthday(s, d, m);

//     ws.write(result + '\n');

//     ws.end();
// }
3.
//Divisible sum pairs
//hackerrank

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

/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

// function divisibleSumPairs(n, k, arr) {
//     // Write your code here
// let count=0;
// for(let i =0 ; i < n -1 ; i++){
//     for(let j=i+1 ; j < n ; j++){
//         if( (arr[i]+arr[j])%k ==0){
//             count++;
//         }
//     }
    
// }
// return count

// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

//     const n = parseInt(firstMultipleInput[0], 10);

//     const k = parseInt(firstMultipleInput[1], 10);

//     const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

//     const result = divisibleSumPairs(n, k, ar);

//     ws.write(result + '\n');

//     ws.end();
// }


 4.
 //Migratory Birds
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
//  * Complete the 'migratoryBirds' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts INTEGER_ARRAY arr as parameter.
//  */

// function migratoryBirds(arr) {
//     // Write your code here
//  let obj = {};
//     let maxBid= 0, minBid = 5
    
//     for(let BId of arr){
//         if(!obj.hasOwnProperty(BId)) {
//             obj[BId] = 0;  
//         }
//         obj[BId] += 1;
//         maxBid = Math.max(obj[BId], maxBid);
//     }
        
//     for(let [BId,Count] of Object.entries(obj)){
//         if(Count === maxBid){
//             minBid=Math.min(minBid, BId);
//         }
//     }
    
//     return minBid;
// }



// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const arrCount = parseInt(readLine().trim(), 10);

//     const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

//     const result = migratoryBirds(arr);

//     ws.write(result + '\n');

//     ws.end();
// }

5.
//Bill Division
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
//  * Complete the 'bonAppetit' function below.
//  *
//  * The function accepts following parameters:
//  *  1. INTEGER_ARRAY bill
//  *  2. INTEGER k
//  *  3. INTEGER b
//  */

// function bonAppetit(bill,k, b) {
//     // Write your code here
//  let ans = ''
//     bill.splice(k,1)
//     let billCost = bill.reduce((p, n) => p+ n) / 2
//     if (billCost == b){
//         ans = 'Bon Appetit';
//     } else {
//         ans = b - billCost
//     }
//     console.log(ans)
// }
// function main() {
//     const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

//     const n = parseInt(firstMultipleInput[0], 10);

//     const k = parseInt(firstMultipleInput[1], 10);

//     const bill = readLine().replace(/\s+$/g, '').split(' ').map(billTemp => parseInt(billTemp, 10));

//     const b = parseInt(readLine().trim(), 10);

//     bonAppetit(bill, k, b);
// }
6.
//Sales By Match
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
//  * Complete the 'sockMerchant' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts following parameters:
//  *  1. INTEGER n
//  *  2. INTEGER_ARRAY ar
//  */

// function sockMerchant(n, ar) {
//     // Write your code here
//     let s = {};
//   let ans = 0;
// for (let e of ar) {
//   s[e] = s[e] + 1 || 1;
//     if (s[e] % 2 === 0) {
//       ans += 1;
//     }
//   }
// return ans;

// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const n = parseInt(readLine().trim(), 10);

//     const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

//     const result = sockMerchant(n, ar);

//     ws.write(result + '\n');

//     ws.end();
// }
7.





