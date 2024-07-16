// Create a Tabbed Interface  where clicking on tabs displays different content sections without page reload.

// var home =document.querySelector("#home");
// var about =document.querySelector("#about");
// var task =document.querySelector("#task ");


// var hometext =document.querySelector("#Hometext");
// var abouttext =document.querySelector("#Abouttext");
// var tasktext =document.querySelector("#Tasktext");



var divs = document.querySelectorAll(".tab");
var h3s = document.querySelectorAll("h3");

// Hide all h3 elements initially
// h3s.forEach(h3 => {
//     h3.style.display = 'none';
// });

// Show the first h3 element
h3s[0].style.display = 'block';
h3s[0].style.width = '50%';

divs.forEach((task, index) => {
    task.addEventListener("click", () => {
        remove();
        h3s[index].style.display = 'block';
    });
});

function remove() {
    h3s.forEach(t => {
        t.style.display = 'none';
    });
}
