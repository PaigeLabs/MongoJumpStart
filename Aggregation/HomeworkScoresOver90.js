var crsr = db.students.aggregate([
	{$unwind: "$activity"},  

	{$match: {"activity.type": "homework"}},  

	{$match: {"activity.score": {$gte:90}}},  

	//{$group: {_id:null, count:{$sum: 1}}}  
]);
printjson(crsr);