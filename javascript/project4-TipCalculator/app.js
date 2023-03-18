const billAmtEl = document.querySelector("#totalbill")
const tip5El = document.querySelector("#tip-5")
const tip10El = document.querySelector("#tip-10")
const tip15El = document.querySelector("#tip-15")
const tip25El = document.querySelector("#tip-25")
const tip50El = document.querySelector("#tip-50")
const tipInputEl = document.querySelector("#tip-input")
const totalPeopleEl = document.querySelector("#total-persons")
const tipAmtEl = document.querySelector("#tip-amt")
const totalAmtEl = document.querySelector("#total-amt")
const resetEl = document.querySelector("#calculate")

let billAmt = 0
let tipPer = 0
let totalPeople = 1
let tipAmt = 0.00
let totalAmt = 0.00

tip5El.addEventListener("click",()=>{
    tipPer = 5
    tipInputEl.value = 5
})

tip10El.addEventListener("click",()=>{
    tipPer = 10
    tipInputEl.value = 10
})

tip15El.addEventListener("click",()=>{
    tipPer = 15
    tipInputEl.value = 15
})

tip25El.addEventListener("click",()=>{
    tipPer = 25
    tipInputEl.value = 25
})

tip50El.addEventListener("click",()=>{
    tipPer = 50
    tipInputEl.value = 50
})

resetEl.addEventListener("click",()=>{
    billAmtEl.value = ""
    tipInputEl.value = 20
    totalPeopleEl.value = ""
    totalAmtEl.value = `₹${0.00}`
    tipAmtEl.value = `₹${0.00}`
})

const calculateTip = () =>{
    tipPer = tipInputEl.value
    billAmt = billAmtEl.value

    totalPeople = totalPeopleEl.value
    if (totalPeople>=1) {
        totalPeople = totalPeopleEl.value
    }else{
        totalPeople = 1
    }

    tipPer /= 100
    tipAmt = ((billAmt*tipPer)/totalPeople).toFixed(2) //(tipPer/billAmt)*100
    totalAmt = ((Number(billAmt) + Number(tipAmt) )/totalPeople).toFixed(2)
    tipAmtEl.textContent = `₹${tipAmt}`
    totalAmtEl.textContent = `₹${totalAmt}`
}

setInterval(calculateTip,1000);
