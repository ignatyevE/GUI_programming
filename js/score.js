/*
    Name: Elliot Ignatyev
    Email: anna_ignatyev@student.uml.edu
    Course: Fall 2019 GUI Programming I
    Date:
    Assignment: Assignment 9
    Notes:
*/
var score = 0;

function calculateScore(tile, board){
    //when something is placed on the board(call this function from drop)
    //take the value of the tile being placed and add that to the score
    //the score is then modified and it changes the valuse in numScore
    //after that works, we then check the board modifier and apply that to the score
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
