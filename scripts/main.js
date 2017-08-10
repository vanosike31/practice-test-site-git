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
