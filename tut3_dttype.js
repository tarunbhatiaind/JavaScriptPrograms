/*
DATA TYPES IN JS :
Primitive data type --stored in stack --strings ,num,boolean,null,undefined ,symbol
Ref data type --stored in heap -- arrays , object literals , functions, dates
*/
let name  = "Tarun";
console.log("Name of user is :" +name);
console.log("Datatype of name is :"+(typeof name));

//null

let nullval = null;
console.log("Datatype of null is :"+(typeof null));

//undefined

let unndefVar = undefined;
console.log("Datatype of undefined is :"+(typeof undefined));

//REFERENCE DATA TYPES 

arr1 = [2,3,4,false,"string"];
console.log("Datatype of array is :"+(typeof arr1));

//object Literals

let marks = {
    Taarun: 90,
    Rohan : 45,
    Sid : 45
}
console.log(marks)
console.log("Datatype of marks is :"+(typeof marks));


function findname()
        {
                        }

  console.log(typeof findname);
  
  let date = new Date()
  console.log("Datatype of date is :"+(typeof date));