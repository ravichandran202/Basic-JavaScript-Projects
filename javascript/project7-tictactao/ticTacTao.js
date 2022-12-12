let d1 = document.getElementById("d1")
let d2 = document.getElementById("d2")
let d3 = document.getElementById("d3")
let d4 = document.getElementById("d4")
let d5 = document.getElementById("d5")
let d6 = document.getElementById("d6")
let d7 = document.getElementById("d7")
let d8 = document.getElementById("d8")
let d9 = document.getElementById("d9")
let pEl = document.getElementById("winner")
let turn = document.getElementById("turn")
let lst = ["","","","","","","","",""]
let marker = ["X","0"]
let play = 1
let count = 0
turn.textContent = "Turn : player 1"


function data1(){
    play+=1
    lst[0] = marker[player()]
    //d1.textContent = lst[0]
    display()
    checkWinner()
}

function data2(){
    play+=1
    lst[1] = marker[player()]
    //d2.textContent = lst[1]
    display()
    checkWinner()
}
function data3(){
    play+=1
    lst[2] = marker[player()]
    //d3.textContent = lst[2]
    display()
    checkWinner()
}
function data4(){
    play+=1
    lst[3] = marker[player()]
    //d4.textContent = lst[3]
    display()
    checkWinner()
}
function data5(){
    play+=1
    lst[4] = marker[player()]
    //d5.textContent = lst[4]
    display()
    checkWinner()
}
function data6(){
    play+=1
    lst[5] = marker[player()]
    //d6.textContent = lst[5]
    display()
    checkWinner()
}
function data7(){
    play+=1
    lst[6] = marker[player()]
    //d7.textContent = lst[6]
    display()
    checkWinner()
}

function data8(){
    play+=1
    lst[7] = marker[player()]
    //d8.textContent = lst[7]
    display()
    checkWinner()
}
function data9(){
    play+=1
    lst[8] = marker[player()]
    //d9.textContent = lst[8]
    display()
    checkWinner()
}

function player ()
{
    count += 1
    if(count==10){
        pEl.textContent = "Draw"
        lst = ["","","","","","","","",""]
        count = 0
    }
    if(play%2 == 0){
    turn.textContent = "Turn : player 2"
      return 0
    }
    turn.textContent = "Turn : player 1"
    return 1

 }

 function checkWinner(){
    if((lst[0]==="X" && lst[1]==="X" && lst[2]==="X") ||
       (lst[3]==="X" && lst[4]==="X" && lst[5]==="X") ||
       (lst[6]==="X" && lst[7]==="X" && lst[8]==="X")
       ){
        lst = ["","","","","","","","",""]
        display()
        pEl.textContent = "Player 1 Won the game"
        count=0
       }
    
    if((lst[0]==="0" && lst[1]==="0" && lst[2]==="0") ||
    (lst[3]==="0" && lst[4]==="0" && lst[5]==="0") ||
    (lst[6]==="0" && lst[7]==="0" && lst[8]==="0")
    ){
    lst = ["","","","","","","","",""]
     display()
     pEl.textContent = "Player 2 Won the game"
     count=0
    }

    if((lst[0]==="X" && lst[3]==="X" && lst[6]==="X") ||
       (lst[1]==="X" && lst[4]==="X" && lst[7]==="X") ||
       (lst[2]==="X" && lst[5]==="X" && lst[8]==="X")
       ){
        let lst = ["","","","","","","","",""]
        display()
        pEl.textContent = "Player 1 Won the game"
        count=0
       }
    
       if((lst[0]==="0" && lst[3]==="0" && lst[6]==="0") ||
       (lst[1]==="0" && lst[4]==="0" && lst[7]==="0") ||
       (lst[2]==="0" && lst[5]==="0" && lst[8]==="0")
       ){
        lst = ["","","","","","","","",""]
        display()
        pEl.textContent = "Player 2 Won the game"
        count=0
       }

       if((lst[0]==="X" && lst[4]==="X" && lst[8]==="X") ||
          (lst[2]==="X" && lst[4]==="X" && lst[6]==="X")){
        lst = ["","","","","","","","",""]
        display()
        pEl.textContent = "Player 1 Won the game"
        count=0
       }

       if((lst[0]==="0" && lst[4]==="0" && lst[8]==="0") ||
          (lst[2]==="0" && lst[4]==="0" && lst[6]==="0")){
        lst = ["","","","","","","","",""]
        display()
        pEl.textContent = "Player 2 Won the game"
        count=0
       }

 }

 function display(){
    d1.textContent = lst[0]
    d2.textContent = lst[1]
    d3.textContent = lst[2]
    d4.textContent = lst[3]
    d5.textContent = lst[4]
    d6.textContent = lst[5]
    d7.textContent = lst[6]
    d8.textContent = lst[7]
    d9.textContent = lst[8]
 }
