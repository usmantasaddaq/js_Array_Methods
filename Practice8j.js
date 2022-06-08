// let users = [

//     {

//         username: 'larry',

//         email: 'larry@foo.com',

//         yearsExperience: 22.1,

//         favoriteLanguages: ['Perl', 'Java', 'C++'],

//         favoriteEditor: 'Vim',

//         hobbies: ['Fishing', 'Sailing', 'Hiking'],

//         hometown: {

//             city: 'San Francisco',

//             state: 'CA',

//         },

//     },

//     {

//         username: 'jane',

//         email: 'jane@test.com',

//         yearsExperience: 33.9,

//         favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],

//         favoriteEditor: 'Emacs',

//         hobbies: ['Swimming', 'Biking', 'Hiking'],

//         hometown: {

//             city: 'New York',

//             state: 'NY',

//         },

//     },

//     {

//         username: 'sam',

//         email: 'sam@test.com',

//         yearsExperience: 8.2,

//         favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],

//         favoriteEditor: 'Atom',

//         hobbies: ['Golf', 'Cooking', 'Archery'],

//         hometown: {

//             city: 'Fargo',

//             state: 'SD',

//         },

//     },

//     {

//         username: 'anne',

//         email: 'anne@test.com',

//         yearsExperience: 4,

//         favoriteLanguages: ['C#', 'C++', 'F#'],

//         favoriteEditor: 'Visual Studio Code',

//         hobbies: ['Tennis', 'Biking', 'Archery'],

//         hometown: {

//             city: 'Albany',

//             state: 'NY',

//         },

//     },

//     {

//         username: 'david',

//         email: 'david@test.com',

//         yearsExperience: 12.5,

//         favoriteLanguages: ['JavaScript', 'C#', 'Swift'],

//         favoriteEditor: 'VS Code',

//         hobbies: ['Volunteering', 'Biking', 'Coding'],

//         hometown: {

//             city: 'Los Angeles',

//             state: 'CA',

//         },

//     },

// ]; 
// 1.
// //Write a function called printEmails which console.log's each email for the users.



//     function printEmails(value){
//           value.forEach(e => {
//              console.log(e.email)
//           })
//    }
// printEmails(users)
// 2.
// // Write a function called printHobbies which console.log's each hobby for each user.

// function printHobbies(value){
//     value.forEach(e => {
//        console.log(e.username,e.hobbies)
//     })
// }
// printHobbies(users)
// 3.
// // Write a function called findHometownByState which returns the first user which has a hometown of the state that is passed in

// function findHometownByState(e){
//  return  users.find((f)=>{
//      if(e==f.hometown.state){
//         return f
//      }
 
//     })
// }

// let x =findHometownByState('CA')
// console.log(x)

4.
// function vowelCount(str1)
//  {
//  let vowel = 'aeiouAEIOU';
//  let vcount = 0;

//  for(let i = 0; i < str1.length ; i++)
//  {
//       if (vowel.indexOf(str1[i]) !== -1)
// {
//  vcount += 1;
//  }

//  }
//  return vcount;
// }
// let ans =vowelCount("The quick brown fox")
// console.log(ans)
5.
// function Person() {
//     this.name = 'muhammad'
// }
// Person.prototype.name = 'usman';
// Person.prototype.age = 23

// let  person1 = new Person();
// console.log(person1.name); 
// console.log(person1.age);  
6.
// program to generate random strings
// const char ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

// function str(len) {

//     let ans = ' ';

//     let  charlen = char.length;

//     for ( let i = 0; i < len; i++ ) {

//         ans += char.charAt(Math.floor(Math.random() * charlen));

//     }

//     return ans;
// }

// console.log(str(4));

7.
//js program to perform string comparison
// let str1="Hello World"
// let str2="hello world";
// let comp=''
// if(comp=str1.toUpperCase()===str2.toUpperCase()){
//     console.log("Both are similar")
// }else {
//     console.log("Both are different")
// }

8.
//program to insert an item at a specific index into an array


// function addElement(){

//     let array=[1,2,3,4,6];

// let index =2;

// let addNumber=9;

//  array.splice(index, 0,addNumber)

//  console.log(array)

// }

// addElement()
9.
// program to empty an array

// let  array = [1, 2 ,3];

// function emptyArray(arr) {

//     arr = [];
    
//     return arr;
// }
// console.log(array);

// let result = emptyArray(array);

// console.log(result);


10.
//adding element in start of an array

// let array=[2,3,4,5];

// function addElement(arr){

// return arr.unshift(1)

// }
// console.log(array)

// addElement(array)

// console.log(array)

11.
//adding element in start of an array(by using splice)

// let array=[3,4,5,6,7]

// function addElement(arr){

// arr.splice(0,0,1)

// }
// console.log(array)

// addElement(array)

// console.log(array)

12.
//Spread Operator
//The spread operator ... is used to expand or spread an iterable or an array.

// let array=['apple','orange','mango'];

// console.log(array);

// console.log(...array)
13.
//Copy Array Using Spread Operator
//(we use the spread syntax ... to copy the items into a single array.)
// let array1=['a','b'];

// let array2=['c','d','e']

// let array=['a','b',...array2]

// console.log(array)
14.
//Spread Operator with Object
//we also use the spread operator with object literals.
// let obj1={
// Name:"Ali",age:23
// }
// let obj2={
//     Education:"BSC",GPA:3.5
// }
// obj={
//     ...obj1,...obj2
// }
// console.log(obj)

15.
//concatination of an Array

// array1=[1,2,3,4,5];
// array2=[6,7,8,9,10];
// array3=[11,12,13,14,15];
// let ans=[]
//  function conCat(arr1,arr2,arr3){

   
//      //ans.push(arr1.concat ( arr2.concat(arr3) )  )
//      return  arr1.concat ( arr2.concat(arr3) )
//     //return a
// //return ans 
//  }


// let b = conCat(array1,array2,array3)

// console.log(b)
16.
//program to get the file extension


// function fileExtension(ext){
   
// let extention =ext.split('.').pop()
// return extention;
// }
// let x=fileExtension('modolus.js')

// console.log(x)

// let y=fileExtension('modolus.text')

// console.log(y)

17.

// program to trim a string

// let str = '         Hello World       ';

// let result = str.split('  ').join('');

//console.log(result);
18.

// program to convert date to number
// create date

// let date = new Date()

// console.log(date)

// let ans =date.getTime()

// console.log(ans)

19.
// program to create JavaScript object using object literal
// let  person = { 
//     name: 'ali',
//     age: 23,
//     hobbies: ['reading', 'games'],
//     greet: function() {
//         console.log('Hy everyone');
//     },
//     score: {
//         Urdu: 55,
//         english: 60,
//         computer:13
//     }
// };

// console.log(typeof person); 

// console.log(person);

// console.log(person.hobbies[1]);

// person.greet();
// console.log(person.score.Urdu);
