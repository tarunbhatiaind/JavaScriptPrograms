console.log('arrow functions tut');

//one way of making function
function fun2(){

    console.log('Tarun1')
}
fun2();


//another way of making function
const fun1 = function (){

    console.log('Tarun')
}
fun1();

//one more way of making funtion, to use arrow function :

const tarun = () => {
        return "Arrow function used";
}

console.log(tarun());

//another way to return value :

const bhatia = () => "Arrow function without retun";

console.log(bhatia());

//passing args in arrow functions :

const abc = greet => greet + "Tarun"

console.log(abc('Hello '));

// if we want to pass 2 args ?

const bcd = (x,y) => x+y;

console.log(bcd('wassup ','dude'));