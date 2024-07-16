var ul = document.querySelector("#ul");
var add = document.querySelector("#add");
var remove = document.querySelector("#remove");
var input = document.querySelector("input");

var li;

add.addEventListener("click",()=>{
    if(input.value.trim()===''){}
    else{
        li=document.createElement("li")
        li.textContent=input.value;
        ul.appendChild(li);
        input.value='';
    }
})

remove.addEventListener("click",()=>{
    ul.removeChild(li)
    
})