// Build a countdown timer that starts when a button 
// is clicked and updates the display in real time 

var start = document.querySelector("#start");
var stop = document.querySelector("#stop");
var h3=document.querySelector("h3");
var int;
start.addEventListener('click',()=>{
    var count=0;

    //here setInterval is a in-build funtion which takes two parameter
    // 1st is callback function and another is time (delay)
    // ye fucntion repeatedly task karne ke liye use kiya jata hain jo har ek milisecond main perform karga.
    int=setInterval(()=>{
        h3.innerHTML=count;
        count++;

    
    },1000)

})

stop.addEventListener('click',()=>{
    clearInterval(int);

});

