const boxes = document.querySelectorAll(".box");
console.log(boxes);
const gameInfo = document.querySelector(".game-info");
console.log(gameInfo);
const newGamebtn = document.querySelector(".btn");
console.log(newGamebtn);

let currPlayer;
let gameGrid;

const winingPos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// Initialization of game

function updateGridUI()
{
    boxes.forEach((box,index) => {
        box.innerHTML = gameGrid[index];
        box.style.pointerEvents = "auto";
    })
}

function intiGame()
{
    currPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    updateGridUI();
    gameInfo.innerText = `Current Player - ${currPlayer}`;
}

intiGame();

function swapTurn()
{
    if(currPlayer === "X")
    {
        currPlayer = "O";
    }
    else
    {
        currPlayer = "X";
    }
    gameInfo.innerText = `Current Player - ${currPlayer}`
}


function checkGameOver()
{
    let winer = "";

    winingPos.forEach((position) => {


        if((gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "") && (gameGrid[position[0]] === gameGrid[position[1]] && gameGrid[position[1]] === gameGrid[position[2]]))
        {
            
            winer = gameGrid[position[0]];
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
            gameInfo.innerText = `Winner is - ${winer}`;
        }
    })
}


function handleClick(index)
{
    if(gameGrid[index] === "")
    {
        boxes[index].innerText = currPlayer;
        gameGrid[index] = currPlayer;
        boxes[index].style.pointerEvents = "none";
        swapTurn();
        checkGameOver();

    }
}

boxes.forEach((box, index) => {
    box.addEventListener("click",() => {
        // console.log(index);
        handleClick(index);
    })
})



function removeBG()
{
    winingPos.forEach((position) => {
        if((gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "") && (gameGrid[position[0]] === gameGrid[position[1]] && gameGrid[position[1]] === gameGrid[position[2]]))
        {
            boxes[position[0]].classList.remove("win");
            boxes[position[1]].classList.remove("win");
            boxes[position[2]].classList.remove("win");
        }
    })
}

newGamebtn.addEventListener("click", ()=>{

    removeBG();
    intiGame();
});


