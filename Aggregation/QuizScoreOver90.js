var crsr = db.students.aggregate([
	{$unwind: "$activity"},  

	{$match: {"activity.type": "quiz"}},  

	{$match: {"activity.score": {$gte:90}}},  

	{$group: {_id:"$student_id", count:{$sum: 1}}},

	{$group: {_id:null, count:{$sum:1}}} 
]);

printjson(crsr);