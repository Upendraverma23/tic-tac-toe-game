let boxes = document.querySelectorAll(".container");
let resetbtn = document.querySelector("#box1");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#title")
let winbtns =document.querySelector("#winbtn")




let turno = true;

const winpatterns = [
    [0,1,2],
    [3,4,5],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]





boxes.forEach((container) => {
    container.addEventListener("click", () => {
    
       if(turno){
        container.innerText = "O";
        turno = false;
       }
       else{
        container.innerText = "X";
        turno = true;
       }
       container.disabled =true;
       checkwinner();
    });
});

const resetbutton = () =>{
    turno = true ;
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
    msgcontainer.classList.add("msg-container")
}



const disableboxes = () => {
    for(let box of boxes)
    {
      box.disabled = true;
    }
}
const showwinner = (winer) => {
    msg.innerHTML = `congratulation, Winner is ${winer}`;
    msgcontainer.classList.remove("msg-container");
    disableboxes();
};







const checkwinner = () => {
    for( let pattern of winpatterns)
    {
      let pos1 = boxes[pattern[0]].innerText;
      let pos2 = boxes[pattern[1]].innerText;
      let pos3 = boxes[pattern[2]].innerText;

      if(pos1!="" && pos2!="" && pos3!="")
      {
        if(pos1===pos2 && pos2===pos3)
        {
            console.log("winner",pos1)
            
            showwinner(pos1);
        }
      }
      
    }

};

resetbtn.addEventListener("click",resetbutton);
winbtns.addEventListener("click",resetbutton);
