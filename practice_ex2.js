/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/
localStorage.clear();
console.log("we are in practice session!");
let element = document.querySelector('h1');
element.addEventListener('click',fun);
let element2 = document.createElement('div');
let text = document.createElement('textarea');
element2.className = 'disp2';
element2.addEventListener('click',fun2);
text.addEventListener('blur',fun4)
function fun(e){
    element.replaceWith(element2);

}

function fun2(e){
element2.replaceWith(text);
       
}
function fun4(e){
    let textval = text.value;
    localStorage.setItem('valuebyuser',textval);

}