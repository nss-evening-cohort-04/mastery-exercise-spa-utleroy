//augmenting iife
var CarLot = (function(originalCarLot) {

// this is the inventory from the callback on the carlot.js
originalCarLot.populatePage = function(inventory) { 
 var displayCar = document.getElementById("container");
 var output = "";

// loops through inventory so that I can populate the DOM
for(var i = 0; i < inventory.length; i++) {
	var currentCar = inventory[i];


//  <div class="col-xs-3 car ${currentCar.color}"> accesses the color property from the JSON file and references each color via the css properties that were set up for the vehicle color. 
output+= 
`<div class="col-xs-3 car container" style="border-color: ${currentCar.color}">
<img class = "carImg" src ="${currentCar.image}"/>
<h4>${currentCar.price}${currentCar.make}${currentCar.model}</h4>
<p>${currentCar.year}</p>
<h5>${currentCar.color}</h5>
<h6 class="inputBox">${currentCar.description}</h6>
</div>`

displayCar.innerHTML = output; 
}

// this references the activateEvents function in events js
CarLot.activateEvents();

}

return originalCarLot

})(CarLot || {});


// Calling loadInventory which passes populatePage Inventory and builds string/prints to DOM
CarLot.loadInventory(CarLot.populatePage);





