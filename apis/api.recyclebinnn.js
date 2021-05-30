//API
function api(reg) {
	return new Promise((res, rej) => {
		const axios = require("axios");
		var data = JSON.stringify({ registrationNumber: `${reg}` });
		var config = {
		method: 'post',
		url: 'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles',
		headers: {
			'x-api-key': 'lnJTBRkwbm4Fxf5SWwCAi9l7OPV9pDTB7OvGpt6H',
			'Content-Type': 'application/json',
		},
		data: data,
		};
		axios
			.get(config)
			.then(function(response) {
				res(true);
				console.log(response);
				// console.log(response.data);
				// return response.data;
				// database("insert", response.data)
				// 	.then( ()=>{
				// 		console.log("api: axios: Data inserted into MongoDB.");
				// 		res(true);
				// 		})
				// 	.catch(()=>console.log("Error getting data into MongoDB."));
				})
			.catch(function(err) {
				console.log(err);
				rej(err);
				});
	})
}
console.log(api("AA19AAA"));

module.exports = {
	api: api,
}