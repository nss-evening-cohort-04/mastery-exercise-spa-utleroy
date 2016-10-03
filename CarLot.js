
"use-strict";

//original iife

var CarLot = (function () {
	let inventory = [];

	return {
// populatePage is the callback from quiz.js

loadInventory: function (populatePageCb) {

// loading inventory from inventory.json
let inventoryLoader = new XMLHttpRequest();
inventoryLoader.addEventListener("load", function () {

	let inventoryObject = JSON.parse(this.responseText).cars;
// forEach is looping through inventoryObject

inventoryObject.forEach(function(call) {

// creating array that can't be accessed publicly
inventory.push(call);
})

// executes callback to quiz.js
populatePageCb (inventory);
});

// tells json what to look for to load
inventoryLoader.open("GET", "inventory.json");
inventoryLoader.send();  
}
}

})();











