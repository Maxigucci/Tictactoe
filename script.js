var numLeft = 9;
var numGone = 0;
var playerValue = 0;
var botValue = 0;

var playerScore = document.getElementById("points");
var botScore = document.getElementById("round");

 var setCharacterWindow = document.querySelector(".setCharacterWindow");
var chooseCharacter = document.getElementById("chooseCharacter");


class Player{
         constructor(character, tiles){
             this.character = character;
             this.tiles = tiles;
         }
     }
     
     var player = new Player("", []);
     var computer = new Player("", []);


function setPlayerX(){
         player.character = "x";
         computer.character = "o";        
     }

function setPlayerO(){
         player.character = "o";
         computer.character = "x";        
     }


function start(){        
         if(player.character == "x" || player.character == "o"){
             setCharacterWindow.style.visibility = "hidden";
         }else{
             chooseCharacter.innerHTML = "Choose your character";
         }
                
}


window.onload = function(){
        
     var tile1 = document.getElementById("tile1");
     var tile2 = document.getElementById("tile2");
     var tile3 = document.getElementById("tile3");
     var tile4 = document.getElementById("tile4");
     var tile5 = document.getElementById("tile5");
     var tile6 = document.getElementById("tile6");
     var tile7 = document.getElementById("tile7");
     var tile8 = document.getElementById("tile8");
     var tile9 = document.getElementById("tile9");
     
     var tileArray = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9];
     
     function reset(){
         tileArray = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9];
         numLeft = 9;
         numGone = 0;
         
         player.character = "";
         computer.character = "";
         
         for(element of tileArray){
             element.innerHTML = "";
             element.style.background = "orange";
                     
         }
         setCharacterWindow.style.visibility = "visible";
         
     }
     
     
            
     
     function checkTiles(num1, num2, num3){
         if(num1.innerHTML == player.character & num2.innerHTML == player.character & num3.innerHTML == player.character){
             num1.style.background = "blue";
             num2.style.background = "blue";
             num3.style.background = "blue";
          setTimeout(reset, 1000);
          playerValue += 5;
          playerScore.innerHTML = playerValue;
             
         }else if(num1.innerHTML == computer.character & num2.innerHTML == computer.character & num3.innerHTML == computer.character){
             num1.style.background = "green";
             num2.style.background = "green";
             num3.style.background = "green";
             setTimeout(reset, 1000);
             botValue += 5;
             botScore.innerHTML = botValue;
         }
     }
     
     
     function playerPlay(tile){
         tile.innerHTML = player.character;
         
       
         var tileIndex = tileArray.indexOf(tile);
         (player.tiles).push(tileIndex + 1);
         tileArray.splice(tileIndex, 1);
    
         numLeft -= 1;
         numGone += 1;
         checkWin();
     }
     
     function computerPlay(){
         if(numLeft > 0){
             var randomTileIndex =  Math.abs(Math.floor(Math.random() * (numLeft - 0)) + 0);
             if(randomTileIndex < 0){
             randomTileIndex += randomTileIndex
         }
             var nextTile = tileArray[randomTileIndex]
             nextTile.innerHTML = computer.character;
         (computer.tiles).push(tileArray.indexOf(nextTile)+1 + numGone);
    
             tileIndex = tileArray.indexOf(nextTile);
             tileArray.splice(tileIndex, 1);
    
             numLeft -= 1;
             numGone += 1;
             checkWin();
     
         }
     }
     
     
     function checkWin(){
         checkTiles(tile1, tile2, tile3);
         checkTiles(tile4, tile5, tile6);
         checkTiles(tile7, tile8, tile9);
         checkTiles(tile1, tile4, tile7);
         checkTiles(tile2, tile5, tile8);
         checkTiles(tile3, tile6, tile9);
         checkTiles(tile1, tile5, tile9);
         checkTiles(tile3, tile5, tile7);
         if(numLeft == 0){
             setTimeout(reset, 1000);
         }
     }
     
     tile1.addEventListener("click", function(){
    if(tile1.innerHTML == ""){
        playerPlay(tile1);
        
        computerPlay();  
    }   
});    
     
     tile2.addEventListener("click", function(){
    if(tile2.innerHTML == ""){
        playerPlay(tile2);
        
        computerPlay();   
    }       
});

     
     tile3.addEventListener("click", function(){
    if(tile3.innerHTML == ""){
        playerPlay(tile3);
       
        computerPlay();  
    }       
});
     
     tile4.addEventListener("click", function(){
    if(tile4.innerHTML == ""){
        playerPlay(tile4);
       
        computerPlay();   
    }        
});
     
     tile5.addEventListener("click", function(){
    if(tile5.innerHTML == ""){
        playerPlay(tile5);
       
        computerPlay();   
    }      
});
     
     tile6.addEventListener("click", function(){
    if(tile6.innerHTML == ""){
        playerPlay(tile6);
     
        computerPlay();   
    }       
});
     
     tile7.addEventListener("click", function(){
    if(tile7.innerHTML == ""){
        playerPlay(tile7);
       
        computerPlay();   
    }    
});
     
     tile8.addEventListener("click", function(){
    if(tile8.innerHTML == ""){
        playerPlay(tile8);
       
        computerPlay();   
    }        
});
     
     tile9.addEventListener("click", function(){
    if(tile9.innerHTML == ""){
        playerPlay(tile9);
       
        computerPlay();   
    }         
});  
 

}
