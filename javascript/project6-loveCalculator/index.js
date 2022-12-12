let perEl = document.getElementById("per-el")
console.log(perEl);
let num = 0
let per = 0
function love(){
    num = Math.random()*100
    per = Math.floor(num)
    perEl.textContent = per+"%"
}