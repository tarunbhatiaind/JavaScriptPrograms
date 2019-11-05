console.log("Events tut");
// https://www.youtube.com/watch?v=rxPw8kJUPQ0&list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL&index=17
//
let element = document.querySelector('.disp2')
.addEventListener('click',function(e){
    let variable ;
    console.log("you have clicked the text!");
    variable = e.target; 
    let variable2 = e.target.className;
    let variable3 = e.target.classList;
    console.log(variable3);//event returns many value , check without the target , but we are intrested with the target amongst all of them 
   // location.href ='//facebook.com';
   //alert("you have clicked !!, you shouldn't have !") 
   Array.from(variable3).forEach(function(element){
        console.log(element);
        })
    let variable4 = e.offsetX;
    console.log(variable4)    ;
    })


//console.log(element);