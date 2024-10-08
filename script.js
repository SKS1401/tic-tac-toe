let boxes=document.querySelectorAll(".box");
let turn0=0;
let result=document.querySelector(".msg");

boxes.forEach((box)=> {
    box.addEventListener("click",()=> {
        if(turn0===0)
        {
            box.innerHTML="O";
            turn0=1;
            checkWinner();
        }
        else {
            box.innerHTML="X";
            turn0=0;
            checkWinner();
        }
        box.disabled=true;
    })
})
const winpattern= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],

];
function showWinner(){
         result.innerText=`Player ${turn0} is the Winner!!`;
            
       }
function checkWinner() {
    for (pattern of winpattern) {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        
        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                showWinner();
            }
               
        }
    }
}
