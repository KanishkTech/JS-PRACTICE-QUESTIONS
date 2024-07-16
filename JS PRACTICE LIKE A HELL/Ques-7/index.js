var progress = document.querySelector("#progress");
var h3 = document.querySelector("h3");

var count=0;
var int=setInterval(()=>{
 if(count===100){
    clearInterval(int);
    h3.textContent='Download Completed..';
    h3.style.textAlign='center';
     
 }

 count++;
 progress.style.width = count + '%';
//  console.log(count)
},1000)