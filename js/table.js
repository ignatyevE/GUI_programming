/*
    Name: Elliot Ignatyev
    Email: anna_ignatyev@student.uml.edu
    Course: Fall 2019 GUI Programming I
    Date: 11/14/19
    Assignment: Assignment 6
*/

/* ---------------------
    getSubmitData

    This takes all the values from the form and then converts them to numbers so that they can be compared against one another. This is done to make sure the values go from smallest to largest on the table. It then places a call to generateMultTable().

----------------------- */
function getSubmitData() {
    var s1 = document.forms["multForm"]["firstStartRange"].value;
    var e1 = document.forms["multForm"]["firstEndRange"].value;
    var s2 = document.forms["multForm"]["secondStartRange"].value;
    var e2 = document.forms["multForm"]["secondEndRange"].value;
    var placeholder;

    console.log(s1);
    console.log(e1);
    console.log(s2);
    console.log(e2);

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

    generateMultTable(s1, e1, s2, e2);
    return false;
}
/* ------------------------------

    generateMultTable

    This function goes through the range for both the mutliplier and the multiplicand and evaluates the numbers. These are put into a string that creates the table for the multiplication table. This is then inserted into the section with the table id to generate the table.

-------------------------------- */

function generateMultTable(columnStart, columnEnd, rowStart, rowEnd) {
    var i, j;
    var table = '<table> <tr> <th> </th>';

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
    document.getElementById('table').innerHTML = table;
}

/*
    The following functions were used from bitsofco.de, in particular their form validation tutorial at https://bitsofco.de/realtime-form-validation/
    They were both copied as it and editted as templates to suit the program's needs. 
*/

/* ----------------------------

	CustomValidation prototype

	- Keeps track of the list of invalidity messages for this input
	- Keeps track of what validity checks need to be performed for this input
	- Performs the validity checks and sends feedback to the front end

---------------------------- */

function CustomValidation() {
	this.invalidities = [];
	this.validityChecks = [];
}

CustomValidation.prototype = {
	addInvalidity: function(message) {
		this.invalidities.push(message);
	},
	getInvalidities: function() {
		return this.invalidities.join('. \n');
	},
	checkValidity: function(input) {
		for ( var i = 0; i < this.validityChecks.length; i++ ) {

			var isInvalid = this.validityChecks[i].isInvalid(input);
			if (isInvalid) {
				this.addInvalidity(this.validityChecks[i].invalidityMessage);
			}

			var requirementElement = this.validityChecks[i].element;
			if (requirementElement) {
				if (isInvalid) {
					requirementElement.classList.add('invalid');
					requirementElement.classList.remove('valid');
				} else {
					requirementElement.classList.remove('invalid');
					requirementElement.classList.add('valid');
				}

			} // end if requirementElement
		} // end for
	}
};

/* ----------------------------

	Validity Checks

	The arrays of validity checks for each input
	Comprised of three things
		1. isInvalid() - the function to determine if the input fulfills a particular requirement
		2. invalidityMessage - the error message to display if the field is invalid
		3. element - The element that states the requirement

---------------------------- */

var horizontalRangeValidityChecks = [
	{
		isInvalid: function(input) {
            var numbers = !input.value.match(/^-?[0-9]\d*(\.\d+)?$/);
            return numbers ? true : false;
		},
		invalidityMessage: 'Only numbers are allowed',
		element: document.querySelector('label[for="horizontalRange"] .input-requirements li:nth-child(1)')
	},
	{
		isInvalid: function(input) {
            var num = Number(input.value);
            var numbers = !input.value.match(/^-?[0-9]\d*(\.\d+)?$/);
            if(!numbers)
            {
                if(num > 100 || num < -100)
                    return true;
            }
            else {
                return true;
            }
		},
		invalidityMessage: 'One value cannot be over 100 more than the other',
		element: document.querySelector('label[for="horizontalRange"] .input-requirements li:nth-child(2)')
	}
];

var verticalRangeValidityChecks = [
	{
		isInvalid: function(input) {
            var numbers = !input.value.match(/^-?[0-9]\d*(\.\d+)?$/);
            return numbers ? true : false;
		},
		invalidityMessage: 'Only numbers are allowed',
		element: document.querySelector('label[for="verticalRange"] .input-requirements li:nth-child(1)')
	},
	{
		isInvalid: function(input) {
            var num = Number(input.value);
            var numbers = !input.value.match(/^-?[0-9]\d*(\.\d+)?$/);
            if(!numbers)
            {
                if(num > 100 || num < -100)
                    return true;
            }
            else {
                return true;
            }
		},
		invalidityMessage: 'One value cannot be over 100 more than the other',
		element: document.querySelector('label[for="verticalRange"] .input-requirements li:nth-child(2)')
	}
];

/* ----------------------------

	Check this input

	Function to check this particular input
	If input is invalid, use setCustomValidity() to pass a message to be displayed

---------------------------- */

function checkInput(input) {

	input.CustomValidation.invalidities = [];
	input.CustomValidation.checkValidity(input);

	if ( input.CustomValidation.invalidities.length == 0 && input.value != '' ) {
		input.setCustomValidity('');
	} else {
		var message = input.CustomValidation.getInvalidities();
		input.setCustomValidity(message);
	}
}



/* ----------------------------

	Setup CustomValidation

	Setup the CustomValidation prototype for each input
	Also sets which array of validity checks to use for that input

---------------------------- */

var firstStartRangeInput = document.getElementById('firstStartRange');
var firstEndRangeInput = document.getElementById('firstEndRange');
var secondStartRangeInput = document.getElementById('secondStartRange');
var secondEndRangeInput = document.getElementById('secondEndRange');

firstStartRangeInput.CustomValidation = new CustomValidation();
firstStartRangeInput.CustomValidation.validityChecks = horizontalRangeValidityChecks;

firstEndRangeInput.CustomValidation = new CustomValidation();
firstEndRangeInput.CustomValidation.validityChecks = horizontalRangeValidityChecks;

secondStartRangeInput.CustomValidation = new CustomValidation();
secondStartRangeInput.CustomValidation.validityChecks = verticalRangeValidityChecks;

secondEndRangeInput.CustomValidation = new CustomValidation();
secondEndRangeInput.CustomValidation.validityChecks = verticalRangeValidityChecks;

/* ----------------------------

	Event Listeners

---------------------------- */

var inputs = document.querySelectorAll('input:not([type="submit"])');
var submit = document.querySelector('input[type="submit"');

for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('keyup', function() {
		checkInput(this);
	});
}

submit.addEventListener('click', function() {
	for (var i = 0; i < inputs.length; i++) {
		checkInput(inputs[i]);
	}
});
