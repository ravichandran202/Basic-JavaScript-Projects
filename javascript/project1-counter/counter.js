
//document.getElementById("count-el") :  accessing html doc
//.innerHTML=count                    : modifying html elem

// element = document.getElementById("count-el")
// console.log(element)                            // prints the element with id count-el

//code starts here
let str = "Previous Entries"
count = 0
function increment(){
    count+=1
document.getElementById("count-el").innerHTML=count
}

function decrement(){
    count-=1
document.getElementById("count-el").innerHTML=count
}

function save(){
    console.log(count)
    document.getElementById("message").innerHTML += (count+" - ")
    count=0
    document.getElementById("count-el").innerHTML=count //innerHTML == textContent                                       
}



