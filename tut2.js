console.log('tut2 connected');
/* variables in js
var , let , const 
*/
var name = "Tarun" ;
console.log(name);
var channel ;
//channel ="Youtube";
console.log(channel); // this will return undefined 

const naam = 'Hari';
//naam = 'Harry'//This is not allowed for const variable and will throw error , this is because for const var we cannot assign another value after the first assignment . It's used when dev wants noone to change the val of that var after first assignment.
console.log(naam);

/* let variable -- it has block level scope */
{
let name = 'Harry bhaiya'; //name is iused above but that is global and this is local(blocked level scope)
name = 'Ram'; // This is possoble in let
console.log(name);//will print Ram
}
console.log(name);//will print Tarun

const arr = [14,15,17,54];
arr.push(55);
arr.pop()
console.log(arr);
/*
Case Types :
 1.camelCase
 2.kebab-case
 3.snale_case
 4.PascalCase

 */
