var myImage = document.querySelector('img');

// Sets variable myImage to the document.querySelector function, which selects the first instance
//of the element put in the parentheses, and returns it out of the function

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === '/home/vanosike31/Documents/website-projects/practice-test-site-git/images/Samus-Aran-metroid-prime-2943285-262-262.jpg') {
		myImage.setAttribute('src', '/home/vanosike31/Documents/website-projects/practice-test-site-git/images/zerosuit_samus.jpg')
	} else {
		myImage.setAttribute('src', '/home/vanosike31/Documents/website-projects/practice-test-site-git/images/Samus-Aran-metroid-prime-2943285-262-262.jpg')
	}
}


//variable myImage is attatched to the .onclick event, which allows it to listen for a click to the varable myImage
//myImage.onclick is set to a FUNCTION THAT INITIATES WHEN THE PICTURE IS CLICKED
//This fuction sets the variable mySrc to the .getAttribute function of variable myImage, which recieves the 
//src attribute of the original myImage element
//Conditional states that if mySrc is set to the varia suit samus src clicking the src is changed to zss, and vice versa

var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

//Defines the variables myHeading and myButtion as functions that pull and return the first instances of the selected elements

function setusername () {
	var myName = prompt('Please enter name ');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Meet Samus, ' + myName; 
}

//defines setusername as a function that does mutliple things
//prompt is a function that creates a prompt for creating info
//myName is equal to the answer that you type into the prompt
//localStorage.setItem function is will memorize a data item 'name' as the variable myName
//myHeading's textcontent property is set to the written string

if (!localStorage.getItem('name')) {
	setusername();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Meet Samus, ' + storedName;
}


//conditional that allows a new username to be set if one doesn't already exist
//! means not available; if the 'name' data item isnt in local storage, than the seyusername function is activated
//if it is, the variable storedName takes info from the localstorage datatype set as name, and then set as heading

myButton.onclick = function() {
	setusername();
}

//function setusername is activated via the onclick event
