db.students.aggregate([{
		$group: {
			_id: "$firstName",
			"numberOfFolks": {$sum:1}
		}
	}]);

db.students.aggregate([{$group: {_id: "$firstName",	"numberOfFolks": {$sum:1}}}]);



db.students.aggregate([
	{$group: {
			_id: "$lastName",
			"numberOfFolks": {$sum:1}
	}},
	{$match: {_id:"Davidson"}}
]);

db.students.aggregate([{$group: {_id: "$lastName", "numberOfFolks": {$sum:1}}},	{$match: {_id:"Davidson"}}]);


db.students.aggregate([
	{$unwind: "$activity"}
	]);

db.students.aggregate([{$unwind: "$activity"}]);

db.students.aggregate([
	{$unwind: "$activity"},

	{$match: {"activity.score": { $gte: 90 }}},
	
	{$group: 
		{
			_id: "$activity.type",
			numberOfFolks: {$sum:1}
		}
	}
]);

db.students.aggregate([{$unwind: "$activity"},{$match: {"activity.score": { $gte: 90 }}},{$group: {	_id: "$activity.type", numberOfFolks: {$sum:1}}}]);

db.students.aggregate([
	{$unwind: "$activity"},  

	{$match: {"activity.type": "quiz"}},  

	{$match: {"activity.score": {$gte:90}}},  

	{$group: {_id:"$student_id", count:{$sum: 1}}},

	{$group: {_id:null, count:{$sum:1}}} 
]);

db.students.aggregate([
	{$unwind: "$activity"},  

	{$match: {"activity.type": "homework"}},  

	{$match: {"activity.score": {$gte:90}}},  

	{$group: {_id:null, count:{$sum: 1}}}  
]);


db.students.aggregate([
	{$unwind: "$activity"},

	{$match: {"activity.type": "homework"}},

	{$group: 
		{
			_id: "$student_id",
			avgHomeworkScore: {$avg: { "$activity.score" }}
		}
	}
]);


