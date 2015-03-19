var firstNames = ["Joe", "Dave", "Alice", "Bob", "Tom", "Doug", "Alex", "Stephanie", "Tracy", "Xander", "Zelda"];
var lastNames = ["Andersen", "Baldwin", "Crockett", "Davis", "Davidson", "Eastman", "Young", "Rogers", "McArty", "DeVito"];
var makes = ["Ford", "Chevrolet", "Dodge", "Nissan", "Toyota", "Mazda"];

for (var i = 1000; i > 0; i--) {
	var purchase = {
		"firstName": firstNames[getRandomNumberUpTo(firstNames.length - 1)],
		"lastName": lastNames[getRandomNumberUpTo(lastNames.length - 1)],
		"makePurchased": makes[getRandomNumberUpTo(makes.length - 1)]
	};

	db.purchases.insert(purchase);
}


function getRandomNumberUpTo(max){
	return Math.round(Math.random() * max);
}