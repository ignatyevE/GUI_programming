/*
    Name: Elliot Ignatyev
    Email: anna_ignatyev@student.uml.edu
    Course: Fall 2019 GUI Programming I
    Date:
    Assignment: Assignment 8
*/

/* ---------------------
    getSubmitData

    This takes all the values from the form and then converts them to numbers so that they can be compared against one another. This is done to make sure the values go from smallest to largest on the table. It then places a call to generateMultTable().

----------------------- */
var submitForm = false;
function getSubmitData() {
    var s1 = document.forms["multForm"]["firstStartRange"].value;
    var e1 = document.forms["multForm"]["firstEndRange"].value;
    var s2 = document.forms["multForm"]["secondStartRange"].value;
    var e2 = document.forms["multForm"]["secondEndRange"].value;
    var placeholder;

    //console.log(s1);
    //console.log(e1);
    //console.log(s2);
    //console.log(e2);

    s1 = Number(s1);
    e1 = Number(e1);
    s2 = Number(s2);
    e2 = Number(e2);

    if(s1 > e1){
        placeholder = s1;
        s1 = e1;
        e1 = placeholder;
    }
    if(s2 > e2){
        placeholder = s2;
        s2 = e2;
        e2 = placeholder;
    }
    if (submitForm){
        addingTabs(s1, e1, s2, e2);
    }

    else {
        generateMultTable(s1, e1, s2, e2);
    }

    return false;
}

/* ------------------------------

    generateMultTable

    This function goes through the range for both the mutliplier and the multiplicand and evaluates the numbers. These are put into a string that creates the table for the multiplication table. This is then inserted into the section with the table id to generate the table.

-------------------------------- */
function generateMultTable(columnStart, columnEnd, rowStart, rowEnd) {
    var i, j;

    var table = '<table id="table' + numTabs+ '"> <tr> <th> </th>';
    //form the table
    for(i = columnStart; i <= columnEnd; i++)
    {
        table += '<th>' + i + '</th>';
    }

    table += '</tr>';

    for(j = rowStart; j <= rowEnd; j++)
    {
        table += '<tr> <th>' + j + '</th>';
        for(i = columnStart; i <= columnEnd; i++)
        {
            //put information into table
            table += '<td>' + i*j + '</td>'
        }
        table += '</tr>';
    }
    table += '</tr> </table>';
    //
    //$("#tableContent").append(table);
    if(submitForm)
    {
        return table;
    }
    else {
        document.getElementById('tableContent').innerHTML = table;
    }


}

/*
    The following section deals with Tabs
        Both the addingTabs function and being able to close the tabs inspect is modified code from : https://jqueryui.com/tabs/#manipulation

*/

$(function() {
    $("#table").tabs();

    var tabs = $("#table").tabs();
    // Close icon: removing the tab on click
    tabs.on( "click", "span.ui-icon-close", function() {
      var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
      $( "#" + panelId ).remove();
      tabs.tabs( "refresh" );
    });

});

var numTabs = 0;
var tabID = "#table" + numTabs;

/*
    addingTabs()
        This function creates the tabs and input the proper content into them

*/

function addingTabs(x1, x2, y1, y2) {

    var tabs = $("#table").tabs();
    var tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>";

    numTabs++;
    var tab = '<li><a href "#table' + numTabs + '">Table ' + numTabs + '</a></li>';

    //content comes from generateMultTable
    var content = generateMultTable(x1, x2, y1, y2)

    //var content = '<div id="tabs-4"><p>here is some stuff i guess!!</p></div>';

    tabs.find(".ui-tabs-nav").append();

    var label = "Table " + numTabs,
    id = "table" + numTabs,
    li = $( tabTemplate.replace( /#\{href\}/g, "#" + id ).replace( /#\{label\}/g, label ) ),
    tabContentHtml = content;

    tabs.find( ".ui-tabs-nav" ).append( li );
    tabs.append( "<div id='" + id + "'>" + tabContentHtml + "</div>" );
    //tabs.append(tabContentHtml);
    tabs.tabs( "refresh" );

}



/*
    The following uses the jQuery Validation Plugin.
    For each section of the form there are rules in place which are then placed to be after the form without cutting into other sections.
*/

$(document).ready(function(){

    $('form[id="multForm"]').validate({
        rules: {
            firstStartRange: {
                required: true,
                number: true,
                range: [-100, 100]
            },
            firstEndRange: {
                required: true,
                number: true,
                range: [-100, 100]
            },
            secondStartRange: {
                required: true,
                number: true,
                range: [-100, 100]
            },
            secondEndRange: {
                required: true,
                number: true,
                range: [-100, 100]
            }
        },
        messages: {
            firstStartRange: {
                required: "This field is required",
                number: "Can only contain numbers",
                range: "The value can be no more than 100 and no less than -100"
            },
            firstEndRange: {
                required: "This field is required",
                number: "Can only contain numbers",
                range: "The value can be no more than 100 and no less than -100"
            },
            secondStartRange: {
                required: "This field is required",
                number: "Can only contain numbers",
                range: "The value can be no more than 100 and no less than -100"
            },
            secondEndRange: {
                required: "This field is required",
                number: "Can only contain numbers",
                range: "The value can be no more than 100 and no less than -100"
            }
        },
        errorPlacement: function(error, element){
            if(element.attr("name") == "firstStartRange") {
                error.appendTo("#first");
            }
            else if(element.attr("name") == "secondStartRange") {
                error.appendTo("#third");
            }
            else if (element.attr("name") == "firstEndRange"){
                error.appendTo("#second");
            }
            else if (element.attr("name") == "secondEndRange"){
                error.appendTo("#fourth");
            }

        },
        submitHandler: function(form) {
            submitForm = true;
            getSubmitData();
            submitForm = false;
        }
    });
});
