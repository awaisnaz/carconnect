var API1 = require('./components/API1.js');
var APIEmail = require('./components/APIEmail.js');
var config = require('./config.js');
// console.log(config.api2.live);
// console.log(config.api3.live);

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
	axios.get(config.api2.test + req.query.axiosRegNo)
		.then((response) => {
			res.json(response.data);
		})
		.catch((e) => console.log(e));
});

app.get("/api3", function (req, res) {
	axios.get(config.api3.live + req.query.axiosRegNo)
		.then((response) => {
			res.json(response.data);
		})
		.catch((e) => console.log(e));
});

app.get("/firebase", function (req, res) {
	res.json({apiKey: "AIzaSyB_zrkBKkBXVN6d4Cx4y0iSM_Shc39o-PU"});
});

app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`app is listening on port: ${port}`);

