var crsr = db.students.aggregate([
	{$unwind: "$activity"},

	{$group: 
		{
			_id: {studentId:"$student_id",activityType:"$activity.type"},
			avgScore: { $avg: "$activity.score" }	
		}
	},

	{$group:
		{
			_id: "$_id.studentId",
			avgScores: {$push: 
				{
					activity: "$_id.activityType",
					avgScore: "$avgScore"
				}
			}
		}
	},

	{$unwind: "$avgScores"},

	{$group:
		{
			_id: "$_id",
			grade: {$avg: "$avgScores.avgScore"}
		}
	},

	{$project:
		{
			_id: 1,
			grade: 1
		}
	},

	{$sort: { _id: 1 }}
]);

printjson(crsr);
