// var input1 = document.querySelector("#inp1")
// var input2 = document.querySelector("#inp2")

var form = document.querySelector("form");
var inp = document.querySelectorAll('input[type="text"]');
var h = document.querySelector("h3");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // jab bhi hum forms ke sath deal karte hain tab jab ham submit karte hain form ko reload ho jata hain 
    // isliye humne preventDefault() use kiya hain taaki form reload na ho
    // jab bhi hum form submit karte hain tab uska default action hota hain ki wo reload ho jata hain

    // 1st method
    // esme hame do bar input ko select karna pada so we have another method
    // if(input1.value ===''|| input2.value === ''){
    //     h.textContent=('ERROR..')
    //     // alert("Please fill the input field");
    // }
    // else{
    //     h.textContent=('');
    // }

    // 2nd method
    // if(inp[0].value === '' || inp[1].value === ''){
    //     h.textContent = 'ERROR..';
    // } else {
    //     h.textContent = '';
    // }

    // 3rd method
    var hasError = false;

    for (var i = 0; i < inp.length; i++) {
        // here we use trim() for dont count space in input 
        if (inp[i].value.trim() === '') {
            h.textContent = "ERROR.......";
            h.style.color = 'red';
            hasError = true;
            break;
        }
    }

    if (!hasError) {
        h.textContent = '';
    }
});
