// Map is a collection of elements where each element is stored as a Key, value pair. Map object can hold both objects and primitive values as either key or value. When we iterate over the map object it returns the key,value pair in the same order as inserted.
console.log("maps loaded")

const mymap = new Map(); //initialize map

let key1 = 'str1',
    key2 = {} ,
    key3 = function(){};

// setting the key in mymapp  
 mymap.set(key1,'string');
 mymap.set(key2,'object');
 mymap.set(key3,'function');
 console.log(mymap);

 // get value from map
 let val1 = mymap.get(key1);
 console.log(val1);
 //size of map

 console.log(mymap.size);
// using for-of loop to print map keys and values
 for (let[key,value] of mymap){

    console.log(key,value);
 }

 for (key of mymap){

    console.log('key is',key);
 }
// using foreach loop
 mymap.forEach((value,key) => { //use value first and key post that
     
     console.log('key is',key);
     console.log('value is',value);
 });

 let myarr = Array.from(mymap); //map to array
 console.log(myarr);

//map to keys
 let myarrkeys = Array.from(mymap.keys());
 console.log(myarrkeys);

 //map to values
 let myarrvalues = Array.from(mymap.values());
 console.log(myarrvalues);