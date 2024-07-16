var textarea = document.querySelector("textarea")
var counter = document.querySelector('#counter')

textarea.addEventListener('input', function() {

    counter.textContent = textarea.value.length;
})