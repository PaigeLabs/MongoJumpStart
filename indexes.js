db.system.indexes.find()
db.collectionName.ensureIndex({'fieldName':1})

db.collectionName.dropIndex({'fieldName':1})
{ "nIndexesWas":3, "ok":1 }

//Compound Indexes
db.collectionName.ensureIndex({'fieldName':1, 'NutherFieldName': -1})