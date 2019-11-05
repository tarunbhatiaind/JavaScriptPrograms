//let a = document.getElementsByClassName('disp');
// a[0].style.color = "red";

// or follow the below menthod 
// for (let i =0 ;i<a.length ; i++)
// {
//    console.log(i);
//     console.log(a[i]);
//     a[i].style.color = "red"
// }
// a.styleMedia.color = 'red'
// console.log(a)

// Array.from(a).forEach(function(element) {
//     console.log(element);
//     element.style.color = 'red';
// });

// b = document.getElementById('Country');
// b.style.color = 'red'

// for (let i =0 ; i < b.length ;i++)
// {
//     console.log(b[i])                   //print the elements of id new 

// }
// b = b.childNodes; //DISPLAY IT'S CHILDS
// b = b.parentNode;
// b = document.getElementById('myid');
// b.innerText = 'Tarun';
// b.innerHTML = '<br>I am Good <br>and you?'
//  console.log(b.innerHTML);
//  console.log(b.innerText);s
//  let sel = document.querySelector('#myid');
//   sel = document.querySelector('.newc');
//   sel = document.querySelector('h1');
//   sel = document.querySelector('input');
// //   sel = document.querySelector('div')
// //   sel.style.color = 'green'  ;
 // c = document.getElementsByClassName('container');
  
// //   Array.from(c).forEach(function(element)
// //   {
// //       console.log(element);
// //   }
  
//   //)
//   console.log(c[0].getElementsByClassName('disp2'));
//   let sel = c[0].getElementsByClassName('disp2');
//    sel[0].style.color = 'blue';
//    console.log("hello");
//    elems = document.getElementsByTagName('div');  
//    console.log("hello2");

//    for (let i = 0;i<=elems.length ; i++)
//    {
//          elems[i].style.fontWeight ='bold';
//          console.log("hello"+i);
//    }
// //   console.log(c[0].getElementsByClassName('disp2'));
// //   console.log('ok')
// //  console.log(elems);
// console.log("hello4");
// function kuchbhi(){
let elem = document.getElementsByClassName('disp');
console.log(elem);
function clck(){
for (let i = 0;i<=elem.length ; i++)
{
    elem[i].style.backgroundColor = 'pink';
}//}elem[0].style.backgroundColor = 'pink';
}