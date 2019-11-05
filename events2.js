console.log("more on events");
let btn = document.getElementById('btn');
let div = document.querySelector('.disp');
btn.addEventListener('click',function1);
btn.addEventListener('dblclick',function2);
btn.addEventListener('mousedown',function3);
div.addEventListener('mouseenter',function4);
div.addEventListener('mouseleave',function5);
function function1(e)
{
   // console.log('you clicked!!!!!!!!',e);
    e.preventDefault();// event is binded 

}
//double click :



function function2(e)
{
    console.log("it's a double click !");
    console.log(e);
    e.preventDefault();
}

//mouse down (any thing u did with mouse <right , middle,left click) , it will catch that 

function function3(e)
{
    console.log("it's a Mouse down !");
    console.log(e);
    e.preventDefault();
}

//mouseenter <enter the mouse in the given area !

function function4(e)
{
    console.log("You entered Div!");
   // console.log(e);
    e.preventDefault();
}
function function5(e)
{
    console.log("You left Div!");
    //console.log(e);
    e.preventDefault();
}