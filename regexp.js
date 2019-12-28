/*
==================================================================================
	NOTE:
	
	The use of global variables is not recommended, due to higher risk of errors.
	
	The code below serves only demonstration purposes and could be improved.
	
==================================================================================
*/


//=======
// INTERN
//=======

// Purpose: Contains a list of used html tags
var HTML_Tags = 
{
	Span_Search: document.getElementById('code'),	// Gets "Search for:" area
	Span_Flags: document.getElementById('flags'),	// Gets "Use flag(s)" area
	Span_Token: document.getElementById('token'), 	// Gets "Used token:" area
	Span_Test: document.getElementById('test'), 	// Gets "Test" in area "Result"
	Span_Match: document.getElementById('match'), 	// Gets "Match" in area "Result"
	Textarea_text:document.getElementById('text')	// Gets "Text" area
	
}


// Purpose: Contains the system solutions which are compared to the user given solution
const Solutions = [];


//=========
// COMMANDS
//=========

// Purpose: Shows the user given token on web browser
function getToken(token)
{
		
	// Showing string value in "Your RegEx Code" area
	HTML_Tags.Span_Token.innerHTML += token + " ";
	
}


// Purpose: Refreshes web page
function deleteAll()
{
	location.reload();
}


// Purpose: Compares the user given tokens to system solutions and shows the "match" and "test" results on web page
function start()
{		
	// Variables
	var myExpression 	= HTML_Tags.Span_Search.value;
	var myFlag		 	= HTML_Tags.Span_Flags.value;
	var myTokens		= HTML_Tags.Span_Token.innerHTML;
	var myTestArea		= HTML_Tags.Span_Test;
	var myMatchArea		= HTML_Tags.Span_Match;
	var myText		 	= HTML_Tags.Textarea_text.value;
	

	// Checking if any flag is selected
	if(myFlag !== "none")
	{
		var myRegexp 	= new RegExp(myExpression, myFlag);
	}
	else
	{
		var myRegexp 	= new RegExp(myExpression);
	}
	
	
	//-----START: Comparing system defined regex to user given regex-----//
	if(myExpression === "[0-9]+" || myExpression === "[A-Z]+")
	{
		
		if( Solutions[0] === myTokens)
		{
			myTestArea.innerHTML = myRegexp.test(myText);
			myMatchArea.innerHTML = myText.match(myRegexp);		
			//MONITOR
			console.table(myText.match(myRegexp))
				
		}
		else
		{
			myTestArea.innerHTML 	= "No test done, due to failure in used tokens!";
			myMatchArea.innerHTML 	= "No match done, due to failure in used tokens!";
			
		}
		
	}
	else if(myExpression === "c+|l+")
	{
		
		if( Solutions[1] === myTokens)
		{
			myTestArea.innerHTML = myRegexp.test(myText);
			myMatchArea.innerHTML = myText.match(myRegexp);
			//MONITOR
			console.table(myText.match(myRegexp))
			
		}
		else
		{
			myTestArea.innerHTML 	= "No test done, due to failure in used tokens!";
			myMatchArea.innerHTML 	= "No match done, due to failure in used tokens!";
			
		}
		
	}
	else if(myExpression === "\\(.+\\)")
	{
		
		if( Solutions[2] === myTokens)
		{
			myTestArea.innerHTML = myRegexp.test(myText);
			myMatchArea.innerHTML = myText.match(myRegexp);	
			//MONITOR
			console.table(myText.match(myRegexp))			
			
		}
		else
		{
			myTestArea.innerHTML 	= "No test done, due to failure in used tokens!";
			myMatchArea.innerHTML 	= "No match done, due to failure in used tokens!";
			
		}
		
	}
	else if(myExpression === "[A-Za-z]*ion")
	{
		
		if( Solutions[3] === myTokens)
		{
			myTestArea.innerHTML = myRegexp.test(myText);
			myMatchArea.innerHTML = myText.match(myRegexp);	
			//MONITOR
			console.table(myText.match(myRegexp))			
			
		}
		else
		{
			myTestArea.innerHTML 	= "No test done, due to failure in used tokens!";
			myMatchArea.innerHTML 	= "No match done, due to failure in used tokens!";
			
		}
		
	}
	else if(myExpression === "[^A-Za-z]")
	{
		
		if( Solutions[4] === myTokens)
		{
			myTestArea.innerHTML = myRegexp.test(myText);
			myMatchArea.innerHTML = myText.match(myRegexp);	
			//MONITOR
			console.table(myText.match(myRegexp))			
			
		}
		else
		{
			myTestArea.innerHTML 	= "No test done, due to failure in used tokens!";
			myMatchArea.innerHTML 	= "No match done, due to failure in used tokens!";
			
		}
		
	}
	//-----END:Comparing system defined regex to user given regex-----//
	
}

//=============
// INITIALIZING
//=============

// Filling solutions into specific array which will be compared with user given input
Solutions.push("[ ltrStr - ltrStr ] + ");
Solutions.push("ltrStr + | ltrStr + ");
Solutions.push("ltrStr . + ltrStr ");
Solutions.push("[ ltrStr - ltrStr ltrStr - ltrStr ] * ltrStr ltrStr ltrStr ");
Solutions.push("[ ^ ltrStr - ltrStr ltrStr - ltrStr ] ");