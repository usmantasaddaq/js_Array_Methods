1.
//  let array = [1,2,3,4,5]
//  let u=[]
//  let sum =array.reduce(function(a,b){
//      return (a+b)
//  })
//  console.log(sum)
2. 
//three dimensional array'
// let arr =[[1,2,3],[4,5,6],[9,8,9]]
//    let sum =0
// function myFunction(a){
//     let D1=0,D2=0
//     for(let i=0;i<a.length;i++){
//             if(i==i){
//                D1+=a[i][i]
//             } 
//           D2+=a[i][a.length-i-1]
    
//     }
//    return D2 - D1
// }

// let m=myFunction(arr)
// console.log(m)
3.
//HackerRank
// function diagonalDifference(arr) {
//     let D1=0,D2=0,ans=0
//     for(let i=0;i<arr.length;i++){
//             if(i==i){
//                D1+=arr[i][i]
//             } 
//           D2+=arr[i][arr.length-i-1]
    
//     }
//     if(D1>D2 ||D1===D2){
//         return ans=D1-D2
//     }else if(D2>D1){
//         return ans=D2-D1/
//     }
// }
//Find the maximum number in an array of numbers
// function findMax(ar)
// {
//     let max = ar[0];

//     for(let i = 0; i < ar.length; i++)
//     {
//         if (ar[i] > max)
//         {
//             max = ar[i];
//         }
//     }

//     return max;
// }\



//Calculate the sum of digits of a positive integer number
// function sumDigits(n)
// {
//     let s = n.toString();
//     let sum = 0;

//     for(let char of s)
//     {
//         let digit = parseInt(char);
//         sum += digit;
//     }

//     return sum;
// }
// let sum = sumDigits(1235231);
// console.log("Sum: ", sum);



// var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// var max = findMax(ar);
// console.log("Max: ", max);
// let arr=[1,1,0,-1,-1]
// let len =arr.length
// let sum={}
// let p=0,n=0,z=0,dp=1,dn=1,dz=1,t;
// function   value(num)
// { num.forEach(e=> {
//     if(e>0){
//         p++    
//     }else if(e==0){
//       z++
//     }else if(e<0){
//         n++
//     }
    
// });

//     dp=p/len
//     dn=n/len
//    dz=z/len
//    return sum={dp,dn,dz}
  
// }
// let x=value(arr)
// console.log(x)
// let obj ={ }
// let value=[1,2,3,4,5]

// let key = [ 'one','two','three','four','five']
// for(let i=0;i<key.length;i++){
//     obj[key[i]]= i+1
// }
    

// console.log(obj)
//this code run in hackarank
// let n=5;

// function staircase(n){
//  for(let i=0;i<n;i++){

//   let  ans ='' 
// for(let j=0;j<n;j++){
// j < (n-1-i)? ans +='': ans+='#'
// }
// console.log(ans)
// }
//  }
//  function staircase(n) {
//     // Write your code here

//  for(let i=0;i<n;i++){

//   let  ans ='' 
// for(let j=0;j<n;j++){
// j < (n-1-i)? ans +='': ans+='#'
// }
// let res=ans.padStart(n,' ')

//  console.log(res)
// }
    
 //}

 //hackerrank
//  function miniMaxSum(arr) {
//     // Write your code here
//     let  min = arr[0],
//         max = arr[0],
//         sum = arr[0],
//         i, v;
    
//     for (i = 1; i < arr.length; i++) {
//         v = arr[i];
//         sum += v;
//         if (v > max) max = v;
//         if (v < min) min = v;
//     }
//     console.log(sum - max, sum - min);
// }

   
