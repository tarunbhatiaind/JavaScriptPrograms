let myvar;
myvar=String(34)
console.log(typeof myvar);
let boolval = String(true);
console.log(typeof boolval);
let date = String(new Date());
console.log(date , typeof date);
let i = true;
console.log(i)
console.log(i.toString());
console.log(Number(i))
let nmvar = Number("45dfg");
console.log(nmvar,typeof nmvar);
let nmvar1 = Number(true);
console.log(nmvar1,typeof nmvar1);

let number = parseInt('56')
console.log("paresint :",typeof number);

let number1 = parseInt('34.897')
console.log(number1,typeof number1);

let number2 = 34.897
console.log(number2,typeof number2);
console.log(number2.toFixed(0));//round off to the specified decimal place 

//Type coercion

let str = "564";
let num = 56;

console.log(str+num); //Returns 56456

let html = "<body> This is the body </body>"

console.log(html.indexOf('This'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(4));
console.log(html.endsWith('</body>'));
console.log(html.includes('bod'));
console.log(html.substring(1,6));
console.log(html.slice(-4));
console.log(html.split(' '));
console.log(html.replace('is','it'))