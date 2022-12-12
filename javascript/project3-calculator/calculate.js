let num1 = 100
let num2 = 200


document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2

fun()
function add(){
    document.getElementById("result").textContent = "Sum is : "+(num1+num2)
}

function subtract(){
    document.getElementById("result").textContent = "Subtraction is : "+(num1-num2)
}

function divide(){
    document.getElementById("result").textContent = "Divide is : "+(num1/num2)
}

function multiply(){
    document.getElementById("result").textContent = "Multiply is : "+(num1*num2)
}

