/*
    Name: Elliot Ignatyev
    Email: anna_ignatyev@student.uml.edu
    Course: Fall 2019 GUI Programming I
    Date:
    Assignment: Assignment 8
    KNOWN ERRORS: The sliders do not properly edit the tables, instead just adding another one above the other preexisting tables. 
*/

/* -------------------------
    The following controls the jQuery sliders.
    Code was modified to serve use and comes from:
        https://www.tutorialspoint.com/jqueryui/jqueryui_slider.html and
        from code provided by Jesse Heines during guest lecture.

    Makes it so that the input form and the sliders are tied together,
        the inputted value changing the slider and the slider changing
        the input value
--------------------------- */
$(document).ready(function(){

    $("#fsr").blur(function(){
        $("#fSRSlider").slider("value", parseInt($("#fsr").val()));
        //$("#tableContent").empty();
        $(tabID).empty();
        getSubmitData();
    });

    $("#fSRSlider").slider({
        min: -100,
        max: 100,
        value: 0,
        animate:"slow",
        orientation: "horizontal",
        slide: function(event, ui) {
            $("#fsr").val(ui.value);
            //$("#tableContent").empty();
            $(tabID).empty();
            getSubmitData();

        }
    });
    $("#fsr").val($("#fSRSlider").slider( "value"));


    $("#fer").blur(function(){
        $("#fERSlider").slider("value", parseInt($("#fer").val()));
        //$("#tableContent").empty();
        $(tabID).empty();
        getSubmitData();
    });

    $("#fERSlider").slider({
        min: -100,
        max: 100,
        value: 0,
        animate:"slow",
        orientation: "horizontal",
        slide: function(event, ui) {
            $("#fer").val(ui.value);
            //$("#tableContent").empty();
            $(tabID).empty();
            getSubmitData();
        }
    });
    $("#fer").val($("#fSRSlider").slider( "value"));


    $("#ssr").blur(function(){
        $("#sSRSlider").slider("value", parseInt($("#ssr").val()));
        //$("#tableContent").empty();
        $(tabID).empty();
        getSubmitData();
    });

    $("#sSRSlider").slider({
        min: -100,
        max: 100,
        value: 0,
        animate:"slow",
        orientation: "horizontal",
        slide: function(event, ui) {
            $("#ssr").val(ui.value);
            //$("#tableContent").empty();
            $(tabID).empty();
            getSubmitData();
        }
    });
    $("#ssr").val($("#fSRSlider").slider( "value"));

    $("#ser").blur(function(){
        $("#sERSlider").slider("value", parseInt($("#ser").val()));
        //$("#tableContent").empty();
        $(tabID).empty();
        getSubmitData();
    });

    $("#sERSlider").slider({
        min: -100,
        max: 100,
        value: 0,
        animate:"slow",
        orientation: "horizontal",
        slide: function(event, ui) {
            $("#ser").val(ui.value);
            //$("#tableContent").empty();
            $(tabID).empty();
            getSubmitData();
        }
    });
    $("#ser").val($( "#fSRSlider" ).slider("value"));

});
