var axios = require('axios');

module.exports = function api(reg) {

    return new Promise((res, rej) => {

        var data = JSON.stringify({ registrationNumber: `${reg}` });

        var config = {
        method: 'post',
        url:
            'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles',
        headers: {
            'x-api-key': 'lnJTBRkwbm4Fxf5SWwCAi9l7OPV9pDTB7OvGpt6H',
            'Content-Type': 'application/json',
        },
        data: data,
        };

        axios(config)
        .then(function(response) {
            // res(true);
            res(JSON.stringify(response.data));
            // console.log(JSON.stringify(response.data));
            // return JSON.stringify(response.data);

        })
        .catch(function(error) {
            console.log(error);
            // window.location.href = "/";
            rej(err);
        });
    })

}

// api("AA19AAA");

