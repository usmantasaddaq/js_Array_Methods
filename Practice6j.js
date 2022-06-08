1.
// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age.
//  They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
// ar=[4,4,1,3]
// function birthdayCakeCandles(ar){
//     let   max = ar[0], count = 0;
//     for(let i=0;i<ar.length;i++)
//     {
//         if(ar[i] > max)
//             {
//                 max  = ar[i];
//             }
//     }
//     for(let i=0;i<ar.length;i++)
//     {
//         if(ar[i] == max)
//         count++;
//     }

//     return count;
// }
// let x =birthdayCakeCandles(ar)
// // console.log(x)
// 2.
// function tConvert (time) {
//     // Check correct time format and split into components
//     time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
//     if (time.length > 1) { //if  time format correct
//       time = time.slice (1);  // Remove full string match value
//       time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
//       time[0] = +time[0] % 12 || 12; // Adjust hours
//     }
//     return time.join (''); // return adjusted time or original string
//   }
  
//   let c=tConvert ("18:00:00");
//   console.log(c)


// 3. 

// function gradingStudents(grades) {


//  let my_grades, grades_count,result_count;

//     for(let  i = 0;  i< grades.length; i++)
//     {
//         if(grades[i] < 38) grades[i] = grades[i];

//         else if((grades[i] % 5)==0) grades[i] = grades[i];
//         else
//          {
//              let  num = grades[i];

//              let  num2 = grades[i];

//              while((num % 5) !=0)
//              {
//                 num = num +1;
//              } 
             
        
//              if((num-num2) < 3) grades[i] = num;

//              else grades[i] = num2;

//         }
//     }
    

//     result_count = grades_count;
//     return grades;
// }
4.
// program to remove a property from an object

// // creating an object
// const student = { 
//     name: 'Ali',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
//     greet: function() {
//         console.log('Hello');
//     },
//     score: {
//         maths: 75,
//         science: 60
//     }
// };

// // deleting a property from an object
// delete student.greet;
// delete student['score'];

// console.log(student);

5.




