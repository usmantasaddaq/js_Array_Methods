let array =['a','b','c','d']// use array list the element of an array
console.log(array)
console.log(array[1])// we access element of an array
let cars = new Array('Saab','volvo','BMW'); // we can alse declare a new array by using this method
console.log(cars)// 
cars[2]= "Ali";
console.log(cars)
const person =[
    'usman',
    'tasaddaq',
    23

]
console.log(person[2])
let person1={
    firstName:"Ali",
    lastName:"Ahmed",
    fullName: function(){
        return(this.firstName + " " + this.lastName)
    }
}
console.log(person1.fullName(), person1.firstName)
console.log(array.length)
//we use lenght to find the length of an array

// accessing the last element of an array
let fruit =[
    'Banna ',
    'Mango',
    'Apple '
]
//console.log(fruit[fruit.length-1]) // we use this to find LAST element of an array ,
//LOOPING  array elements;
let x=[];

for(let i =0;i<fruit.length;i++)
{
     x = fruit[i]
     console.log(x)
}
// USING Array.forEach()
const Arr= [1,2,34,4,5];
let q=[]
array.forEach(q => {
 return(Arr.lenght-1)

});
console.log(Arr)
//adding array elements ;
Arr.push(12)
console.log(Arr)

//we use push() to add element  at the end of an array 
function myFunction(value){
    let m=[]
   return Arr[Arr.length]=13;

}
let m=myFunction()
console.log(Arr)
let points = new Array(1,3,4,5,6)
let poits = [1,32,4,5,3];
console.log(points,poits)
const point = new Array(40,23)
console.log(point)
let pointss= new Array(40)
console.log(pointss)// if we  use new Array method for array then it creat an error 

let arrr =[34]
console.log(arrr)
//how to recognize an Array 
const  fruits=[
    'wao',
    'happy',
'hoora '
]
let type= typeof fruits
console.log(type) // the type of operator return an object because a js array is an object.
//S#1 To solve this problem we use Array.isArray()
console.log(Array.isArray(fruits))
//S#02 
//the instanceof method 
console.log(fruits instanceof Array)
//Array Methods
//1.
//tostring() method ( converting an  array to string)

let  ar =['Ali','Usman','Ahmed','abdullah'];
let p= ar.toString()
console.log(p)
 //2.
 //join() (join all array elements into strings)
 //same behave like string but in addition you can add sopecify the seperator
 let z=ar.join('*')
 
 console.log(z)
//3.Popping & Pushing 
//popping items out of an array,
//pushing items into an array.
// Js pop()
//example
let c =ar.pop();
console.log(ar)
ar.push("Abdullah")
console.log(ar)
//4.  Shift() return the value that already shifted 
// ar.shift()
//console.log(ar);
//5./unshift()
ar.unshift()
console.log(ar)
//6. chaning elements by index;
//7.adding array elements by using Array lenght;
//8. delete() delete an element through array
console.log(delete ar[2])
console.log(ar)
//9. merging or concatenation Array
let myGirls=['naima','maria','Arzoo'];
let myBoys=[
    'Ali','Usman','Furqan'

]
let a=[]
a= myGirls.concat(myBoys)
console.log(a)
//10.
//splicing  Array (in  this method we add new items to an array )
ar.splice(2,0,"newArray","how are you")
console.log(ar)
// wr aslo use splice to remove elemts in an  array]
ar.splice(0,1)
console.log(ar)
//11. Sliceing an Array(in this method slice out a piece of an array)
//
let number =[
    1,3,4,5,6
]
result= number.slice(2)
console.log(result)
let ans= number.slice(1,4)
console.log(ans)
// 12.  Automatic toString 
//js automatically convert an array  to a comma seperator string when a primitive value is expexted
//
