var input = document.querySelector("input");

var Data = [
    { name: "abhishek", src:"https://pbs.twimg.com/profile_images/1737855635801489408/VkBhGKOR_400x400.jpg" },
    { name: "kanishk", src:"https://pbs.twimg.com/profile_images/1700195106207444995/Z6Q5dBjv_400x400.jpg" },
    { name: "vishesh", src:"https://pbs.twimg.com/profile_images/1649788993935142912/lrCpyn2v_400x400.jpg" },
    { name: "sanika", src:"https://pbs.twimg.com/profile_images/1797194984950747136/SL9AXjOg_400x400.jpg" },
    { name: "shivam", src:"https://pbs.twimg.com/profile_images/1791463372145172480/-_YpkZOe_400x400.jpg" },
    { name: "zomato", src:"https://pbs.twimg.com/profile_images/1453981755925434375/qKrFmKJF_400x400.jpg" },
];


var pers = '';
Data.forEach((elem)=>{
pers += `<div class="person">
                    <img src="${elem.src}" alt="">
                    <h3>${elem.name}</h3>
                </div>`
})

document.querySelector(".persons").innerHTML = pers;

input.addEventListener("input", function() {
var matching = Data.filter((elem)=>{
  return elem.name.startsWith(input.value)
})
var newusers = '';
matching.forEach((elem)=>{
    newusers += `<div class="person">
                        <img src="${elem.src}" alt="">
                        <h3>${elem.name}</h3>
                    </div>`
    })
    
    document.querySelector(".persons").innerHTML = newusers;

})