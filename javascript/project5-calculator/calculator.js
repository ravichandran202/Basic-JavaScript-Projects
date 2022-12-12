let disEl = document.getElementById("dis-el")
let Pnum = ""
let operator = ""

function number0() {
    Pnum += 0
    disEl.innerHTML = Pnum     
}

function number1(){
    Pnum += 1
    disEl.innerHTML = Pnum     
}

function number2(){
    Pnum += 2
    disEl.innerHTML = Pnum     
}

function number3(){
    Pnum += 3
    disEl.innerHTML = Pnum     
}

function number4(){
    Pnum += 4
    disEl.innerHTML = Pnum     
}

function number5(){
    Pnum += 5
    disEl.innerHTML = Pnum     
}

function number6(){
    Pnum += 6
    disEl.innerHTML = Pnum     
}

function number7(){
    Pnum += 7
    disEl.innerHTML = Pnum     
}

function number8(){
    Pnum += 8
    disEl.innerHTML = Pnum     
}

function number9() {
    Pnum += 9
    disEl.innerHTML = Pnum     
}

function AC( ){
    Pnum = "0"
    disEl.innerHTML = Pnum
}
function X(){
    let string = Pnum.split("")
    string.pop()
    Pnum = ""
    for(let i=0; i<string.length; i++){
        Pnum+=string[i]
    }
    disEl.innerHTML = Pnum
}
function Percent(){
    Pnum += " % "
    disEl.innerHTML = Pnum
}

function addition(){
    Pnum += " + "
    disEl.innerHTML = Pnum
}

function division(){
    Pnum += " / "
    disEl.innerHTML = Pnum
}
function multiplication(){
    Pnum += " x "
    disEl.innerHTML = Pnum
}
function subtraction(){
    Pnum += " - "
    disEl.innerHTML = Pnum
}


function decimal(){
    Pnum += "."
    disEl.innerHTML = Pnum
}

function equal(){
    Pnum = ""+answer()
    disEl.innerHTML = Pnum
}

function answer(){
   let string = Pnum.split(" ")
   num1 = string[0]
   operator = string[1]
   num2 = string[2]

   if (operator === "+"){
    return Number(num1)+Number(num2)
   }

   if (operator === "-"){
    return Number(num1)-Number(num2)
   }

   if (operator === "x"){
    return Number(num1)*Number(num2)
   }

   if (operator === "/"){
    if(num2 === 0){
        return "infinity"
    }
    return Number(num1)/Number(num2)
   }

   if (operator === "%"){
    if(num2 === 0){
        return "infinity"
    }
    return Number(num1)%Number(num2)
   }

}



