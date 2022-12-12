// function display(){
//     console.log("Button Clicked!.")
// }


const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")


let myLeads = []

//Event listner is used to perforn operations
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads(){
    let listItems = ""
for(let i =0; i<myLeads.length; i++){
    
    listItems += `<li>
                  <a href=${myLeads[i]}> ${myLeads[i]} </a>
                  </li>`
    // const el = document.createElement("li")
    // el.textContent = myLeads[i]
    // ulEl.append(el)
    }
   ulEl.innerHTML = listItems
}
// textContant = "used to print what it has"
// innerHTML = "manupulate the tags inside js code itself"
// createElement(element name) = "used to create Element"
     // create element using crateElement()
     // assign to a variable
     // append the item 