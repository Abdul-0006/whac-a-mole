let currmoletile = null
let currplanttile = null
let score = 0
let gameOver = false

window.onload = function(){
    setgame ()

}

function setgame (){
    for (let i=0; i<9; i++){
        let tile = document.createElement("div")
        tile.id = i.toString()
        tile.addEventListener("click", selectTile)
        document.getElementById("board").appendChild(tile)

    }
    
   setInterval(setmole, 1000) ;
   setInterval(setplant, 2000) ;
}

function getRandomtile (){
    let num = Math.floor(Math.random()*9)
    return num.toString( )

}

function setmole (){
    if(gameOver){
        return
    }


    let num = getRandomtile()
    if(currmoletile && currmoletile.id === num){
       return
    }



    let mole = document.createElement("img")
    mole.src = "mole.png"
    
    if(currmoletile){
        currmoletile.innerHTML = ""
    }
    currmoletile = document.getElementById(num)
    currmoletile.appendChild(mole)

}



function setplant (){
    if(gameOver){
        return
    }

    let num = getRandomtile() 
        if(currplanttile && currplanttile.id === num){
          return

    }
    if(currplanttile){
        currplanttile.innerHTML = ""
    }

    
   
    
    
        let plant = document.createElement("img")
        plant.src = "plant.png"
       
        currplanttile = document.getElementById(num)
        currplanttile.appendChild(plant)
    
    }


function selectTile (){
    if(gameOver){
        return
    }

    if (this == currmoletile){
        score += 10
        document.getElementById("score").innerText = score.toString()
    }
    else if(this== currplanttile){
        document.getElementById("score").innerText = GAMEOVER + score.toString()
        gameOver = true
    }
}