console.log("create and replace element");
let element = document.createElement("div");
element.className = 'disp3';
element.setAttribute("title","mytitle");
element.innerHTML = "<h1>Created dynamically";
let container = document.getElementsByClassName("container");
container[0].appendChild(element)
// container.appendChild(element);
//console.log(container);
let element2 = document.createElement("div");
element2.className = 'disp';
element2.setAttribute("title","mytitle");
element2.innerHTML = "<h1>Created dynamically";
let container1 = document.getElementsByClassName("container");
container1[0].appendChild(element2)
//element.replaceWith(element2);
//Replacing the element :'

//element.replaceWith(element2);

element_list = document.createElement("li");
element_list.className = "this";
element_list.innerHTML ="<ul>hello</ul><ul>hi</ul>"
console.log(element_list);
let element4 = document.getElementsByName('submit');
console.log(element4)
//element4.replaceWith(element_list);
//element4[0].replaceWith(element_list)
let pr = element2.hasAttribute('href')
console.log(pr);
let element5 = document.createElement("h1");
element5.innerHTML = "<a href = 'https://www.codewithharry.com,'>GO to code with harry .com</a>"
container[0].appendChild(element5);