//----------------------LET/CONST--------------------------------------------------------------------

/*console.log("Hello there!")

const shourya = 1 ; 

shourya = 34 ; 
console.log(shourya)*/

//-----------------------DATA TYPES-------------------------------------------------------------------

/*string , Numbers , Boolean , null , undefined

const name = 'Akansha' ;
const score = 100 ; 
const isKamina = true ;
const z = null ; 
const mue = undefined ; 

console.log(typeof mue) */

//--------------------------STRINGS------------------------------------------------------------------

/*const name = 'shourya';
const age = 11;
console.log("My name is " + " "+  name + "and my age is" + age  )

older version and now in new version we do it as 

console.log(`My name is ${name} and my age is ${age}`)

LENGTH PROPERTY 

const name = "hello , my name is akansha";

const length = name.substring(0,6); // if we want to just print upto 6 letters 
const length = name.split('') // splits every single alphabet
const length = name.split (' ,') //splits every single word after every comma
console.log(length)*/


//-----------------------------ARRAYS----------------------------------------------------------------

//ARRAYS : - VARIABLE THAT HOLDS MULTIPLE VALUES
/*
const fruits = new Array('Banana' , 'Mango' , 'Grapes' , 10 , true); // new means we are construction an array

fruits[5] = 'PEAR' //to add inbetween

fruits.push('Pineapple') // to add on last

fruits.unshift("strawberry") //to add on first 

console.log(Array.isArray(fruits))
console.log(fruits.indexOf('PEAR'));

console.log(fruits)
*/

//----------------------------------OBJECT LITERALS---------------------------------------------------

/*const project = {
    stack : ["html" , "css" ,"javascript", "node.js" ," react.js"],
    interest : "node.js",
    projects : {
        js : "game",
        website : "tindog" ,
        specializaton : "js"
    },
    fav_site : "color hunt"
}
//console.log(project.stack[1] , project.projects.js)
//const {stack , interest , projects : {js}} = project;
//console.log(js)

project.email = 'akipanchal33@gmal.com'
console.log(project) */


//----------------------------ARRAY OF OBJECTS--------------------------------------------

/*const toDOList = [
    {
        id : 1 ,
        text : 'Make an app like instagram',
        isCompleted : false 
    },
    {
        id : 2 ,
        text : 'Make them cry by your work, not slap',
        isCompleted : true
    },
    {
        id : 3 ,
        text : 'spread love and positivity',
        isCompleted : true 
    },

]
const todolistJSON = JSON.stringify(toDOList);
console.log(todolistJSON);

//for(let i = 0 ; i<=10 ;i++){
//    console.log(`My i is printing ${i}`)
//}
//--------------------------------------------FOR LOOP/WHILE/DO-WHILE-------------------------------------

let i=0 ;
while (i<=100){
    console.log(`My i is printing again ${i}`)
    i++;
}
let j = 0 ; 
do 
{console.log(`My j is printing ${j}`)
j++
}while (j<10)  */

//---------------------------------------------PRACTICE--------------------------------------------

// const todos = [
//     {  id : 1,
//        task : 'Make an application',
//        isComplete : false

//     },
//          {  id : 2,
//        task : 'Shourya become topper',
//        isComplete : true

//     },
//          {  id : 3,
//        task : 'Spread love and positivity',
//        isComplete : true

//     },

// ]
// for (let i= 0 ; i< todos.length ; i++){
//    console.log(todos[i].task)
// }

// for (let todo of todos) {
//     console.log(todo.task)
// }   // for dash of dash

//--------------------------FOR EACH------------------------
// todos.forEach(function(todo){
//     console.log(todo.task)
// })

//MAP RETURNS AN ARRAY

// const todoCompleted = todos.filter(function(todo){
//   return todo.isComplete===true;
// }).map(function(todo){
//     return todo.task
// })
// console.log(todoCompleted)

//--------------------------------------------CONDITIONAL STATEMENTS---------------------------------------





































