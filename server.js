//ENVIRONMENT


//API Imports
var API1 = require('./components/API1.js');
var APIEmail = require('./components/APIEmail.js');
// var email = require('./apis/nodemailerAPI.js');
// api("AA19AAA").then(res => console.log(res));
// console.log(test);

//EXPRESS
const express = require("express");
const path = require("path");
var cors = require('cors')
// var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var cookieParser = require('cookie-parser');
var upload = multer(); // for parsing multipart/form-data
const app = express()
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({extended: true})); //Parse URL-encoded bodies
app.use(cookieParser());
// app.use(express.session({secret: 'secret'}));
app.use(express.static(__dirname + '/dist'));
app.use(cors());
// app.post('/contact', upload.array(), (req, res) => {
// 	database("insert", req.body);
// 	res.redirect(express.static(__dirname + '/dist'));
// });
// app.post('/register', upload.array(), (req, res) => {
// 	database("insert", req.body);
// 	res.redirect(express.static(__dirname + '/dist'));
// });


app.post('/submit', upload.array(), (req, res) => {
	// console.log(req.body.vehicle);
	API1(req.body.vehicle)
		.then((response)=>{
			// console.log(response);
			res
				.cookie("API1", response);
			response = JSON.parse(response);
			// console.log(response);
			// console.log(response.fuelType);
			// console.log();
			res
				.cookie("fuel",response.fuelType)
				.cookie("regNo",response.registrationNumber)
				.cookie("make",response.make)
				.cookie("model",response.yearOfManufacture)
				.cookie("color",response.colour)
				
				.redirect("/details");
		})
		.catch((e) => {
			console.log(e);
			// res.send('<script>alert("This Registration does not exist.")</script>'); 
			// res.redirect('/');
		});
	});

app.post('/contact', upload.array(), (req,res)=>{
	// console.log(req.body.name);
	// console.log(req.body.email);
	// console.log(req.body.message);
	APIEmail(req.body.email, `${req.body.name} has a message for you: ${req.body.message}. Reply to this email to get in touch with the client!`)
	.then(()=>{
		console.log("Email Sent!");
		res
		.cookie("APIEmail", "1")
		.redirect("/#contactus");
	})
	.catch((e) => {
		console.log(e);
	});
	
})


// app.post('/api2', upload.array(), (req, res) => {
// 	console.log(req.body.carValuation);
// 	api2(req.body.carValuation)
// 		.then((response)=>{
// 			console.log(response);
// 			response = JSON.parse(response);
// 			// console.log(response.registrationNumber);
// 			res
// 				.cookie("regNo",response.registrationNumber)
// 				.cookie("make",response.make)
// 				.cookie("model",response.yearOfManufacture)
// 				.cookie("color",response.colour)
// 				.redirect("/details");
// 		})
// 		.catch((e) => {
// 			console.log(e);
// 			// res.send('<script>alert("This Registration does not exist.")</script>'); 
// 			// res.redirect('/');
// 		});
// 	});




// app.post('/submit', upload.array(), (req, res) => {
// 	api(req.body.vehicle)
// 		.then(()=>{
// 			console.log("express: Data inserted into MongoDB.")
// 			database("find", {"registrationNumber" : `${req.body.vehicle}`})
// 				.then((response)=>{
// 					console.log("express: Data fetched from MongoDB.");
// 					res
// 						.cookie("regNo",response.registrationNumber)
// 						.cookie("make",response.make)
// 						.cookie("model",response.yearOfManufacture)
// 						.cookie("color",response.colour)
// 						.redirect("/admin/settings");
// 					})
// 				.catch(e => console.log(e))
// 		})
// 		.catch(e => console.log(e));
// 	});




// app.get('/vehicle', upload.array(), (req, res) => {
// 	// database("find", {"registrationNumber" : `${req.body.vehicle}`}).then(result => console.log(result));
// });
// app.get('/test', upload.array(), (req, res) => {
// 	res.json({"hi": "hi"});
// });
app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
});

const port = process.env.PORT || 8080;
app.listen(port)
console.log(`app is listening on port: ${port}`);

// function api (reg){
// 	var axios = require('axios');

// 	var data = JSON.stringify({ registrationNumber: `${reg}` });

// 	var config = {
// 	method: 'post',
// 	url:
// 		'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles',
// 	headers: {
// 		'x-api-key': 'lnJTBRkwbm4Fxf5SWwCAi9l7OPV9pDTB7OvGpt6H',
// 		'Content-Type': 'application/json',
// 	},
// 	data: data,
// 	};

// 	axios(config)
// 	.then(function(response) {
// 		console.log(JSON.stringify(response.data));
// 	})
// 	.catch(function(error) {
// 		console.log(error);
// 	});
// }