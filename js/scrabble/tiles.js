/*
    Name: Elliot Ignatyev
    Email: anna_ignatyev@student.uml.edu
    Course: Fall 2019 GUI Programming I
    Date: 12/19/19
    Assignment: Assignment 9
    Notes: Used ScrabbleTiles as provided by assignment. It is properly creditted below. 
*/

/*  File:  /~heines/91.461/91.461-2015-16f/461-assn/Scrabble_Pieces_AssociativeArray_Jesse.js
 *  Jesse M. Heines, UMass Lowell Computer Science, heines@cs.uml.edu
 *  Copyright (c) 2015 by Jesse M. Heines.  All rights reserved.  May be freely
 *    copied or excerpted for educational purposes with credit to the author.
 *  updated by JMH on November 21, 2015 at 10:27 AM
 *  updated by JMH on November 25, 2015 at 10:58 AM to add the blank tile
 *  updated by JMH on November 27, 2015 at 10:22 AM to add original-distribution

 -Modified to add images to each element-
 */

var ScrabbleTiles = [] ;
ScrabbleTiles["A"] = { "value" : 1,  "originalDistribution" : 9,  "numberRemaining" : 9, "image" : "<img id='A' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/A.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["B"] = { "value" : 3,  "originalDistribution" : 2,  "numberRemaining" : 2, "image" : "<img id='B' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/B.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["C"] = { "value" : 3,  "originalDistribution" : 2,  "numberRemaining" : 2, "image" : "<img id='C' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/C.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["D"] = { "value" : 2,  "originalDistribution" : 4,  "numberRemaining" : 4, "image" : "<img id='D' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/D.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["E"] = { "value" : 1,  "originalDistribution" : 12, "numberRemaining" : 12, "image" : "<img id='E' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/E.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>" } ;
ScrabbleTiles["F"] = { "value" : 4,  "originalDistribution" : 2,  "numberRemaining" : 2, "image" : "<img id='F' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/F.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["G"] = { "value" : 2,  "originalDistribution" : 3,  "numberRemaining" : 3, "image" : "<img id='G' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/G.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["H"] = { "value" : 4,  "originalDistribution" : 2,  "numberRemaining" : 2, "image" : "<img id='H' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/H.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["I"] = { "value" : 1,  "originalDistribution" : 9,  "numberRemaining" : 9, "image" : "<img id='I' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/I.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["J"] = { "value" : 8,  "originalDistribution" : 1,  "numberRemaining" : 1, "image" : "<img id='J' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/J.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["K"] = { "value" : 5,  "originalDistribution" : 1,  "numberRemaining" : 1, "image" : "<img id='K' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/K.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["L"] = { "value" : 1,  "originalDistribution" : 4,  "numberRemaining" : 4, "image" : "<img id='L' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/L.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["M"] = { "value" : 3,  "originalDistribution" : 2,  "numberRemaining" : 2, "image" : "<img id='M' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/M.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["N"] = { "value" : 1,  "originalDistribution" : 6,  "numberRemaining" : 6, "image" : "<img id='N' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/N.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["O"] = { "value" : 1,  "originalDistribution" : 8,  "numberRemaining" : 8, "image" : "<img id='O' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/O.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["P"] = { "value" : 3,  "originalDistribution" : 2,  "numberRemaining" : 2, "image" : "<img id='P' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/P.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["Q"] = { "value" : 10, "originalDistribution" : 1,  "numberRemaining" : 1, "image" : "<img id='Q' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/Q.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["R"] = { "value" : 1,  "originalDistribution" : 6,  "numberRemaining" : 6, "image" : "<img id='R' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/R.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["S"] = { "value" : 1,  "originalDistribution" : 4,  "numberRemaining" : 4, "image" : "<img id='S' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/S.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["T"] = { "value" : 1,  "originalDistribution" : 6,  "numberRemaining" : 6, "image" : "<img id='T' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/T.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["U"] = { "value" : 1,  "originalDistribution" : 4,  "numberRemaining" : 4, "image" : "<img id='U' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/U.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["V"] = { "value" : 4,  "originalDistribution" : 2,  "numberRemaining" : 2, "image" : "<img id='V' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/V.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["W"] = { "value" : 4,  "originalDistribution" : 2,  "numberRemaining" : 2, "image" : "<img id='W' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/W.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["X"] = { "value" : 8,  "originalDistribution" : 1,  "numberRemaining" : 1, "image" : "<img id='X' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/X.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["Y"] = { "value" : 4,  "originalDistribution" : 2,  "numberRemaining" : 2, "image" : "<img id='Y' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/Y.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["Z"] = { "value" : 10, "originalDistribution" : 1,  "numberRemaining" : 1, "image" : "<img id='Z' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/Z.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;
ScrabbleTiles["_"] = { "value" : 0,  "originalDistribution" : 2,  "numberRemaining" : 2, "image" : "<img id='_' class='draggable ui-widget-content tiles' src='images/ScrabbleTile/Blank.jpg' alt='A wooden scrabble tile for the letter A with a 1 point modifier'>"  } ;

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_";

/*
    tile generation
*/
$(function(){
    tileGeneration();
});

/*--------------------------
    tileGeneration
    
    This makes it so that 7 tiles are generated onto the corresponding html section.
    Whenever a tile is used on the board, its numberRemaining is updated, and here it is checked
        to make sure that it doesn't get placed on the board if there are zero remaining.
    Tiles are randomly placed on the board. If the randomly generated tile has zero numberRemaining,
        then a new tile is generated. In case the tiles generated keep having zero numberRemaining, 
        there is a countdown to keep the loop from going forever. If this countdown reaches zero, 
        that specific tile is skipped. 
    
--------------------------*/

function tileGeneration() {
    //tests to make sure adding images to the tiles works
    //$("#tilePlacement").append(ScrabbleTiles["A"].image);
    //var i;
    //for(i = 22; i < 27; i++)
    //{
    //    $("#tilePlacement").append(ScrabbleTiles[alphabet[i]].image);
    //}

    //randomly generate tiles
    var i;
    for(i = 0; i < 7; i++)
    {
        var j;
        j = Math.floor(Math.random() * 27);

        //check how many of the specified tile remain
        var letter;
        var countdown = 10;
        letter = ScrabbleTiles[alphabet[j]];
        while(letter.numberRemaining == 0 && countdown > 0){
            j = Math.floor(Math.random() * 27);
            countdown--;
        }

        if(countdown > 0){
            //letter.numberRemaining = letter.numberRemaining - 1;
            $("#tilePlacement").append(letter.image);
        }
    }

}

/*--------------------------
    clearTiles
    
    This removes all tiles from the board, and then generates new tiles. 
    After the tiles are generated, they are then made to be draggable elements.
    The boardTiles are then enabled again if they were disabled when a tile was dropped onto them. 
        
-------------------------*/

function clearTiles() {
    $(".tiles").detach();
    tileGeneration();
    newTiles();
    $(".boardTiles").droppable("enable");

}
