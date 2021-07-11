var API1 = require('./components/API1.js');
var APIEmail = require('./components/APIEmail.js');
// var config = require('./config.js');
// console.log(config);

const express = require("express");
const path = require("path");
// var cors = require('cors');

var multer = require('multer'); // v1.0.5
const { default: axios } = require('axios');
// var cookieParser = require('cookie-parser');
var upload = multer(); // for parsing multipart/form-data

const app = express();
app.use(require('express-status-monitor')());
app.use(express.json()); //Used to parse JSON bodies

app.use(express.urlencoded({extended: true})); //Parse URL-encoded bodies

// app.use(cookieParser());
app.use(require('cookie-parser')());

app.use(express.static(__dirname + '/dist'));

app.use(require('cors')());
// app.use(cors());

app.post('/submit', upload.array(), (req, res) => {
	API1(req.body.vehicle)
		.then((response)=>{ 
			res
				.cookie("API1", response);
			response = JSON.parse(response);
			res
				.cookie("fuel",response.fuelType)
				.cookie("regNo",response.registrationNumber)
				.cookie("make",response.make)
				.cookie("model",response.yearOfManufacture)
				.cookie("color",response.colour)
				.cookie("regError",false)
				
				.redirect("/details");
		})
		.catch((e) => {
			console.log(e);
			res
				.cookie("regError",true)
				.redirect("/");
			
		});
	});

app.post('/contact', upload.array(), (req,res)=>{
	APIEmail("info@carconnect.uk", `Visitor ${req.body.name} [ ${req.body.email} ] has sent you "${req.body.message}".`)
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

app.post('/contact2', upload.array(), (req,res)=>{
	APIEmail(req.body.data.email, "We have received your message and we will get back to your within 24 hours.")
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

app.get("/api2", function (req, res) {

	// console.log(req.query.axiosRegNo);

	axios.get("https://uk1.ukvehicledata.co.uk/api/datapackage/ValuationData?v=2&api_nullitems=1&auth_apikey=fa6b2f50-90f0-4f58-af30-585e45457b2a&key_VRM=" + req.query.axiosRegNo)
		.then((response) => {
			// console.log(response);
			res.json(response);
		})
		.catch((e) => console.log(e));
});

app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`app is listening on port: ${port}`);

