"use strict";

var CarLot = (function(originalCarLot) {

// function for all of the event handlers 
originalCarLot.activateEvents = function() {
	let allCars = document.getElementsByClassName("car");
	for (var i = 0; i < allCars.length; i++) {
		let carDiv = allCars[i];

		carDiv.addEventListener("click", function(){
			let userClick = carDiv.classList.add("clicked");
			originalCarLot.resetBorder(carDiv, userClick, allCars);	

		})

// function to reset the properties of the car div back to the original state
originalCarLot.resetBorder = function(carDiv, userClick, allCars) {
	for (var i = 0; i < allCars.length; i++) {
		let originalBorder = allCars[i]
		originalBorder.classList.remove("clicked")
	}

	originalCarLot.setBorder(carDiv, userClick);

}

// function to set the thicker border upon user click
originalCarLot.setBorder = function(carDiv, userClick) {
	carDiv.classList.add("clicked")
	originalCarLot.clearCard(carDiv);
}

// function that clears the input field and accepts the cursor when the user clicks a car div.
originalCarLot.clearCard = function(carDiv){
	inputBox.value = "";
	inputBox.focus();
	originalCarLot.carDescription(carDiv);
}

// function that displays the users text input as it is typed. 
originalCarLot.carDescription = function(carDiv) {
	let carDescription = carDiv.querySelector("h6");

// receives the keystrokes from the user.
inputBox.addEventListener("keyup", function() {
	if (carDiv.classList.contains("clicked")) {
		carDescription.innerHTML = inputBox.value;

	}
})
}
}   
}

return originalCarLot;

})(CarLot || {});
