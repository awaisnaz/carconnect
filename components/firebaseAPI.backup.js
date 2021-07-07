// FIREBASE
var admin = require('firebase-admin');
const serviceAccount = require('./mindful-accord-312605-fa1077552409.json');
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
  });
const db = admin.firestore();
db
	.collection('car-connect')
	.doc('car-connect')
	.set({
	first: 'Ada2',
	last: 'Lovelace',
	born: 1815
	})
	.then(
		console.log("Data entered into Google Cloud DB")
	)
	.catch(e => console.log(e));