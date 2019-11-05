let name = 'Tarun';
let fruits = 'Orange';
let myHtml = `<html><body>Hello ${name}
            <h1>Heading </h1>
            <p> I like ${fruits}</p>
            </body></html>
            `;
document.body.innerHTML=myHtml;            
let a = window;
// a=prompt('Type your name !');
// console.log(a);
// a=confirm('Are you sure ?');
// console.log(a);
a=window.innerHeight;
console.log(a);
a=window.innerWidth;
console.log(a) ;
a = Window.history;
console.log(a);