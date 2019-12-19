/*
    Name: Elliot Ignatyev
    Email: anna_ignatyev@student.uml.edu
    Course: Fall 2019 GUI Programming I
    Date: 12/19/19
    Assignment: Assignment 9
*/
var score = 0;

/*----------------------------
    calculateScore
    
    Needs to be called with the tile value and the type of board tile the tile was placed on.
    First checks what board tile it is, to see if the tile value needs to be modified. After this, 
        the global variable of Score is updated, and then the html is changed to have the new score.

-----------------------------*/
function calculateScore(tile, board){
    if(board == "double"){
        tile = tile*2;
    }
    else if(board == "triple"){
        tile = tile*3;
    }
    score = score + tile;
    var newScore = "<p id='numScore'>" + score + "</p>";
    $("#numScore").remove();
    $("#score").append(newScore);
}

/*---------------------------
    resetGame
    
    Upon pressing the Start Over button this function is called.
    This resets the score back to 0 and changes the html to reflect this.
    This also used the global variable alphabet to make sure that each scrabble tile's 
        number remaining is back to its original distribution value.
        
---------------------------*/

function resetGame(){
    score = 0;
    var newScore = "<p id='numScore'>" + score + "</p>";
    $("#numScore").remove();
    $("#score").append(newScore);

    //change tiles back to originalDistributions
    var i;
    for(i = 0; i < alphabet.length; i++)
    {
        var tile = ScrabbleTiles[alphabet[i]];
        tile.numberRemaining = tile.originalDistribution;
        console.log(alphabet[i]);
        console.log(tile.numberRemaining);
    }

    clearTiles();
}
