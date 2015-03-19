var firstNames = ["Joe", "Dave", "Alice", "Bob", "Tom", "Doug", "Alex", "Stephanie", "Tracy", "Xander", "Zelda"];
var lastNames = ["Andersen", "Baldwin", "Crockett", "Davis", "Davidson", "Eastman", "Young", "Rogers", "McArty", "DeVito"];

for(i=0;i<1000;i++) {

	var student = { 
		"student_id" : i,
		"firstName" : firstNames[getRandomNumberUpTo(firstNames.length - 1)],
		"lastName" : lastNames[getRandomNumberUpTo(lastNames.length - 1)],
		activity: []
	}

	for (j=0;j<5;j++){
		student.activity.push({
			"type": "homework", 
			"score": getRandomNumberUpTo(100)
		});
	}

	for (j=0;j<2;j++){
		student.activity.push({
			"type": "quiz", 
			"score": getRandomNumberUpTo(100)
		});
	}

	student.activity.push({
		"type": "exam", 
		"score": getRandomNumberUpTo(100)
	});

	db.students.insert(student);
}

function getRandomNumberUpTo(max){
	return Math.round(Math.random() * max);
}