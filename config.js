module.exports = {
    api1: {
        url:
            "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles",
        key: "",
    },
    api2: {
        test:
            "https://uk1.ukvehicledata.co.uk/api/datapackage/ValuationData?v=2&api_nullitems=1&auth_apikey=C3BC75FB-2A5D-4246-8FA8-92B76B9B2AE6&key_VRM=",
        live:
            "https://uk1.ukvehicledata.co.uk/api/datapackage/ValuationData?v=2&api_nullitems=1&auth_apikey=F8F84163-24CD-4C65-8EF4-EE5996BDAE71&key_VRM=",
    },
    api3: {
        test:
            "https://uk1.ukvehicledata.co.uk/api/datapackage/VdiCheckFull?v=2&api_nullitems=1&auth_apikey=C3BC75FB-2A5D-4246-8FA8-92B76B9B2AE6&key_VRM=",
        live:
            "https://uk1.ukvehicledata.co.uk/api/datapackage/VdiCheckFull?v=2&api_nullitems=1&auth_apikey=F8F84163-24CD-4C65-8EF4-EE5996BDAE71&key_VRM=",
    },
    email: {
        email: "carconnect.central@gmail.com",
        password: "Cardata@202!"
    }
};

//api2.live costs 15 cents/call.