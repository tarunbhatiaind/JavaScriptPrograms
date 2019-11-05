console.log("DOM Traverse tut")

// let grab = document.getElementsByClassName('container');
// console.log(grab);

// let cont = document.querySelector('.container');
// console.log(cont.children); //only print children unlike childnodes that display comments , text ,etc

let contget = document.querySelector('.container');
console.log(contget.childNodes);

let nodename = contget.childNodes[1].nodeName
console.log(nodename);

let nodeType = contget.childNodes[2].nodeType
console.log(nodeType);
// Node types
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType

let child = contget.children[0].children[0].children[0];//will print the first list element ..check comment in index.html under disp2
// console.log(child);
console.log(contget.firstChild) //it is text , but if we want element ? :
console.log(contget.firstElementChild) // gives the first element under contget 

console.log(contget.lastChild)
console.log(contget.lastElementChild)

console.log(contget.childElementCount) // count chil elements

console.log(contget.firstElementChild.nextSibling) //will give sibling of this element (firstchild's sibling) --gives text
console.log(contget.firstElementChild.nextElementSibling) //gives element 
console.log(contget.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling)