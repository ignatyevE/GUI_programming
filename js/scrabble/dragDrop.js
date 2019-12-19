/*
    Name: Elliot Ignatyev
    Email: anna_ignatyev@student.uml.edu
    Course: Fall 2019 GUI Programming I
    Date: 12/19/19
    Assignment: Assignment 9 
*/
//because the newTiles() function needs to be used at various points, it is seperate from page loading 
$(function() {
    newTiles();
});

/*---------------------
    newTiles
    
    This makes it so that each tile that is on the map gets modified as a draggable object.
    It also makes it so that the boardTiles are all droppable objects, and upon dropping a
        tile, so that no other tiles can be placed on the same board tile, and makes it so that 
        the amount of tiles for a specific letter is updated. It also gets the information about 
        the tiles so that the score can be calculated.
-----------------------*/

function newTiles() {
    $(".tiles").draggable( {
        snap: ".boardTiles",
        snapMode: "inner",
        snapTolerance: 25,
        revert: "invalid"
    });

    $(".boardTiles").droppable({
        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover"
        },
        drop: function(event, ui) {
            $(ui.draggable[0]).draggable({containment:this});
            $(this).droppable("disable");

            //console.log($(ui.draggable[0]).attr('id'));
            var tileID = $(ui.draggable[0]).attr('id');
            //console.log(tileID);
            //console.log(ScrabbleTiles[tileID].numberRemaining);
            ScrabbleTiles[tileID].numberRemaining = ScrabbleTiles[tileID].numberRemaining - 1;

            //figure out what tile was placed and where, and call calculateScore
            var boardID = $(this).attr('id');
            //console.log(boardID);
            calculateScore(ScrabbleTiles[tileID].value, boardID);
        }
    });
}
