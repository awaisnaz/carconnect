// MONGODB
function database(action, data){
	return new Promise((res, rej) => {
		const MongoClient = require("mongodb").MongoClient;
		const url = 'mongodb+srv://awaisnaz:UFXmatE7pw393hgS@cluster0.etiyl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
		var dbName = "car-connect";
		var clName = "car-connect"
		MongoClient
			.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
				if (err) {
					console.log("database: Error connecting to MongoDB.");
				} else {
					console.log("database: MongoDB connection Extablished.");
				}
				if (action == "insert") {
					client.db(dbName).collection(clName).insertOne(data, function (error, response) {
						if(error) {
							console.log('database: Error occurred while inserting');
							rej(err);
						// return 
						} else {
							console.log('database: Data inserted into MongoDB.', response.ops[0]);
							res(response);
						// return 
						}
					});
					// console.info("Data successfully inserted into MongoDB Database.")
				};
				if (action == "find") {
					client.db(dbName).collection(clName).findOne(data, function (error, response) {
						if(response.length === 0 || error) {
							console.log('database: Error occurred while finding in MongoDB');
							rej(err);
						// return 
						} else {
							console.log("database: Data retrieved from MongoDB.", response);
							// console.log(response);
							// return 
							res(response);
						}
					});
					// console.info("Data successfully inserted into MongoDB Database.")
				};
			})
	})
}
// database("insert", `{"3may" : "3may"}`);
// console.log(database("find", {"registrationNumber" : "AA19AAA"}));