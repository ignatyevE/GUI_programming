$(function() {
    newTiles();
});

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
