console.log("local storage tut");
// LOCAL STORAGE -- every wensite has its own
//add key-val inside local storage
localStorage.setItem('Name','Tarun');
localStorage.setItem('Name2','Aman');

let arr = ['onion','potato','tomato'];
// localStorage.clear -- TO CLEAR THE LOCAL STORAGE
//get the itm frm local storage
localStorage.setItem('Veggies',JSON.stringify(arr));//CONVERT THE ITEMS INTO STRING 
let name = JSON.parse(localStorage.getItem('Veggies'));//CONVERTED TO ARRAY (obk)

for (let i = 0 ; i<=name.length;i++){ //elements can be accessed like normally
    console.log(name[i]);
}

//console.log(name);

sessionStorage.setItem('Name','Tarun');
sessionStorage.setItem('Name2','Aman');