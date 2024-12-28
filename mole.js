// let currmoletile = null
// let currplanttile = null
// let score = 0
// let gameOver = false

// window.onload = function(){
//     setgame ()
// }

// function setgame (){
//     for (let i=0; i<9; i++){
//         let tile = document.createElement("div")
//         tile.id = i.toString()
//         tile.addEventListener("click", selectTile)
//         document.getElementById("board").appendChild(tile)
//     }
//    setInterval(setmole, 1000) ;
//    setInterval(setplant, 2000) ;
// }

// function getRandomtile (){
//     let num = Math.floor(Math.random()*9)
//     return num.toString( )

// }

// function setmole (){
//     if(gameOver){
//         return
//     }

//     let num = getRandomtile()
//     if(currplanttile && currplanttile.id === num){
//        return
//     }

//     let mole = document.createElement("img")
//     mole.src = "mole.png"
    
//     if(currmoletile){
//         currmoletile.innerHTML = ""
//     }
//     currmoletile = document.getElementById(num)
//     currmoletile.appendChild(mole)
// }



// function setplant (){
//     if(gameOver){
//         return
//     }

//     let num = getRandomtile() 
//         if(currmoletile && currmoletile.id === num){
//           return

//     }
//     if(currplanttile){
//         currplanttile.innerHTML = ""
//     }
    
//      let plant = document.createElement("img")
//      plant.src = "plant.png"
       
//      currplanttile = document.getElementById(num)
//      currplanttile.appendChild(plant)
    
//     }


// function selectTile (){
//     if(gameOver){
//         return
//     }

//     if (this === currmoletile){
//         score += 10
//         document.getElementById("score").innerText = score.toString() 
      
//         currmoletile.innerHTML = ""; // Remove the mole after scoring
//         currmoletile = null;
    
//     }
   

       
   
//     else if(this === currplanttile){
//         document.getElementById("score").innerText = "GAMEOVER" + score.toString()
//         gameOver = true

//         if (currmoletile) {
//             currmoletile.innerHTML = "";
//         }
//         if (currplanttile) {
//             currplanttile.innerHTML = "";
//         }
//     }
// }


let currmoletile = null;
let currplanttile = null;
let score = 0;
let gameOver = false;

window.onload = function () {
    setgame();
};

function setgame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setmole, 1000);
    setInterval(setplant, 2000);
}

function getRandomtile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setmole() {
    if (gameOver) {
        return; // If the game is over, no new mole should be set.
    }

    let num = getRandomtile();

    // Prevent mole from being placed on the same tile as the plant.
    if (currplanttile && currplanttile.id === num) {
        return;
    }

    let mole = document.createElement("img");
    mole.src = "mole.png";

    // Clear the previous mole tile.
    if (currmoletile) {
        currmoletile.innerHTML = "";
    }

    // Set the new mole tile.
    currmoletile = document.getElementById(num);
    currmoletile.appendChild(mole);
}

function setplant() {
    if (gameOver) {
        return; // If the game is over, no new plant should be set.
    }

    let num = getRandomtile();

    // Prevent plant from being placed on the same tile as the mole.
    if (currmoletile && currmoletile.id === num) {
        return;
    }

    // Clear the previous plant tile.
    if (currplanttile) {
        currplanttile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "plant.png";

    // Set the new plant tile.
    currplanttile = document.getElementById(num);
    currplanttile.appendChild(plant);
}

function selectTile() {
    if (gameOver) {
        return; // If the game is over, clicking tiles should have no effect.
    }

    if (this === currmoletile) {
        // If the clicked tile is the mole tile, increment the score.
        score += 10;

        // Update the score display.
        document.getElementById("score").innerText = score.toString();

        // Remove the mole and reset the mole tile.
        currmoletile.innerHTML = "";
        currmoletile = null;
    } else if (this === currplanttile) {
        // If the clicked tile is the plant tile, end the game.
        document.getElementById("score").innerText = `GAMEOVER ${score}`; // Properly formatted game over message.
        gameOver = true;

        // Clear both the mole and plant visuals after game over.
        if (currmoletile) {
            currmoletile.innerHTML = "";
        }
        if (currplanttile) {
            currplanttile.innerHTML = "";
        }
    }
}
