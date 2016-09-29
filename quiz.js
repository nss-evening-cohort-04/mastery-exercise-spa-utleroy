	// function for all of the event handlers
	var CarLot = (function(newCarLot) {
		var carsData = [];
		var currentCar;

		function populatePage () {
			carsData = JSON.parse(this.response);;
			var carsElement = document.getElementById("output")
				var currentCarDisplay = "<div>CARS</div>";
			for (var i = 0; i < carsData.cars.length; i++) {
				currentCar = carsData[i];

		carsElement.innerHTML = currentCarDisplay;
			}
		console.log("carsData", carsData)

return newCarLot;
		}




		var oReq = new XMLHttpRequest();
		oReq.addEventListener("load", populatePage);
		oReq.open("GET", "inventory.JSON");
		oReq.send();

})(CarLot || {});




// 	original.activateEvents = function() {
// 		let allCars = document.getElementsByClassName("output");
// 		for (var i = 0; i < allCars.length; i++) {
// 			let carDiv = allCars[i];
// console.log("test")


		// carDiv.addEventListener("click", function(){
		// 	let userClick = carDiv.classList.add("clicked");
		// 	original.resetBorder(carDiv, userClick, allCars);	
		// }
  // Loop over the inventory and populate the page
  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
// }

// Load the inventory and send a callback function to be
// invoked after the process is complete
// CarLot.loadInventory();


// console.log(vehicleDiv)