console.log("new tutorial for DOM");

let a = document ;
// a = document.all;
// a = document.body;
// a = document.forms; //multiple  forms : document.forms[0]
// a = document.links;
// Array.from(a).forEach(function(element) {   
//     console.log(element)    
// })

a = document.links;
link = 'javascript'

// console.log(a);
//Below is the code to determine the links in the webpage having the content 'Javascript'
Array.from(a).forEach(function(element) {   
        
    if (element.href.includes(link))
    {
    console.log(element);
    }})
  
console.log(typeof Array.from(a))

console.log("logic 2")
//Just the change in syntax of the loop 

for (let i=0;i<a.length;i++){
    if (a[i].text.includes(link))
    {
        console.log(i);
        console.log(a[i]);
    }
}    