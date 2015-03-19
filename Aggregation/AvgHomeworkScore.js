var crsr = db.students.aggregate([
	{$unwind: "$activity"},

	{$match: {"activity.type": "homework"}},

	{$group: 
		{
			_id: {student_id: "$student_id",firstName: "$firstName",lastName: "$lastName"},
			avgHomeworkScore: {$avg: "$activity.score" }
		}
	},

	{$project:
		{
			_id: "$_id.student_id",
			firstName: "$_id.firstName",
			lastName: "$_id.lastName",
			avgHomeworkScore: "$avgHomeworkScore"
		}
	},

	{$sort:{_id:1}}
]);

printjson(crsr);