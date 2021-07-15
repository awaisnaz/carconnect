<template>
    <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 rounded"
        style="background: #303030;"
        :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
    >
        <div id="APIClientTable"></div>

        <br /><br />

        <div id="AdminTwo">
        <div>
            <h3
                class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
                style="color:white;"
            >
                Client Details
            </h3>
        </div>
        <br />
        <div id="APIClient"></div>

        <br /><br />
        <div>
            <h3
                class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
                style="color:white;"
            >
                API1 - Initial Details
            </h3>
        </div>
        <br />
        <div id="API1"></div>

        <br /><br />
        <div>
            <h3
                class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
                style="color:white;"
            >
                API2 - Car Value
            </h3>
        </div>
        <br />
        <div id="API2"></div>

        <br /><br />
        <div>
            <h3
                class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
                style="color:white;"
            >
                API3 - HPI Check
            </h3>
        </div>
        <br />
            <div
                id="container-api3"
                style=" display: table; margin: 4px; padding: 1px;"
            >
                <div style="display: table-cell;">
                    <input
                        v-model="API3Input"
                        required
                        name="API3Input"
                        type="hidden"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        id="API3Input"
                        style="margin: 1px;"
                        placeholder="e.g. AA19AAA"
                    />
                </div>
                <div id="button-api3" class="ml-2">
                    <button
                        name="API3Button"
                        value="Car Full VDI Check"
                        type="submit"
                        class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-2 ease-linear transition-all duration-150"
                        style="margin: 1px; background-color: #fdcc04;"
                        v-on:click="buttonApi3"
                    >
                        HPI Check
                    </button>
                </div>
            </div>
            <div>
                <div id="API3"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import { ref } from "vue";

    import firebase from 'firebase/app';
    import 'firebase/auth';
    import 'firebase/firestore';

    import { onMounted } from "vue";
    import axios from "axios";

    const { jsonToTableHtmlString } = require("json-table-converter");

    import { Grid, html} from "gridjs";

    export default {
        setup() {
            var API1Input = ref();
            var API1Output = ref();
            var API2Input = ref();
            var API2Output = ref();
            var API3Input = ref();
            var API3Output = ref();

            function buttonApi3() {
                API3(API3Input.value, "API3");
                document.getElementById("container-api3").style.display =
                    "none";
                document.getElementById("API3").style.display = "block";
            }

            function Camel2Sentence (camelCase) {
                var result = camelCase.replace( /([A-Z])/g, " $1" );
                var sentenceCase = result.charAt(0).toUpperCase() + result.slice(1);
                return sentenceCase;
            }

            function ObjectModified (obj) {
                for(var i in obj){
                var sentenceCase = Camel2Sentence(i);
                obj[sentenceCase] = obj[i];
                delete obj[i];
                }
                return obj;
            }

            function APIClientReduce(res){
                var res2 = [];
                res2 = [ `${res["CarRegistrationNumber"]}, ${res["CarDescription"]}, ${res["CarModel"]}, ${res["CarFuelType"]}, £ ${res["CarValue1"]} - ${res["CarValue2"]}`, `${res["ClientName"]}, ${res["ClientAddress"]}, ${res["ClientMobile"]}`, `${res["CarID"]}`];
                return res2;
            }

            function APIClientOriginal(res){
                delete res.CarValue1;
                delete res.CarValue2;
                delete res.CarFuelType;
                delete res.CarTimestamp;
                delete res.CarMake;
                delete res.CarID;
                delete res.CarModel;
                delete res.CarMileage;
                delete res.CarRegistrationNumber;
                delete res.CarDescription;
                return res;
            }

            var getData = () => {
                APIClient("APIClient", "CarID")
                    .then((res) => {
                        for (var i = 0; i < res.length; i++) {
                            res[i] = Object.keys(res[i])
                                .sort()
                                .reduce((obj, key) => {
                                    obj[key] = res[i][key];
                                    return obj;
                                }, {});
                        }

                        var res2 = res.map(APIClientReduce); 
                        const grid = new Grid({
                            columns: [
                                {
                                    name: "Vehicle Details",
                                    formatter: (cell) => html(`${cell.split(",").join("<br />")}`),
                                },
                                {
                                    name: "Client Details",
                                    formatter: (cell) => html(`${cell.split(",").join("<br />")}`),
                                },
                                {
                                    name: "Date",
                                    formatter: (cell) => html(
                                        `${new Date(
                                            Number(cell)
                                        ).toLocaleString("en-UK").split(",").join("<br />")}`),
                                },
                            ],
                            data: res2,
                            pagination: true,
                            search: true,
                            sort: true,
                            resizable: true,
                            style: {
                                container: {
                                    color: "#000000",
                                    "background-color": "#606060",
                                    "border-radius": "0px",
                                },
                                table: {
                                    color: "#ffffff",
                                    "background-color": "#505050",
                                    "border-radius": "0px",
                                },
                                header: {
                                    "border-radius": "0px",
                                },
                                th: {
                                    "background-color": "#606060",
                                    color: "#ffffff",
                                    "border-bottom": "3px solid #ccc",
                                    "text-align": "center",
                                    "border-radius": "0px",
                                },
                                td: {
                                    color: "#ffffff",
                                    "background-color": "#505050",
                                    "border-radius": "0px",
                                    cursor: "pointer",
                                    "text-align": "left",
                                    "vertical-align": "top",
                                },
                                footer: {
                                    color: "#ffffff",
                                    "background-color": "#606060",
                                    "border-radius": "0px",
                                },
                            },
                        }).render(document.getElementById("APIClientTable"));
                        grid.on("rowClick", (...args) => {
                            document.getElementById("AdminTwo").style.display = "block";

                            var temp = JSON.parse(JSON.stringify(args));
                            var temp4 = temp[1]._cells[0].data;
                            var temp5 = temp4.split(",");

                            APIClientSingle("APIClient", "CarID",temp5[0])
                                .then((res) => {
                                    var res3 = APIClientOriginal(res[0]);
                                    res3 = ObjectModified(res3);
                                    var temp2 = jsonToTableHtmlString(res3, {
                                        tableStyle:
                                            "color:white; background-color:#505050;table-layout:fixed;width:100%;word-wrap:break-word;",
                                        thStyle: "color:white; background-color:#606060;",
                                        tdKeyStyle: "background-color:#606060;",
                                    });
                                    document.getElementById(
                                        "APIClient"
                                    ).innerHTML = temp2;
                                })
                                .catch((e) => console.log(e));
                            


                            API1(temp5[0], "API1");
                            API2(temp5[0], "API2");

                            API3Input.value = temp5[0];
                            document.getElementById(
                                "container-api3"
                            ).style.display = "block";
                            document.getElementById("API3").style.display =
                                "none";
                        });
                    })
                    .catch((e) => console.log(e));
            };

            var APIClient = (collection, orderField) => {
                return new Promise((res, rej) => {
                    firebase
                        .firestore()
                        .collection(collection)
                        .orderBy(orderField, "desc")
                        .limit(100)
                        .get()
                        .then((snapshot) => {
                            console.log("Client Data fetched from Firestore.");
                            var data = snapshot.docs.map((doc) => doc.data());
                            res(data);
                        })
                        .catch((e) => {
                            console.log(e);
                            rej(e);
                        });
                });
            };

            var APIClientSingle = (collection, orderField, reg) => {
                return new Promise((res, rej) => {
                    firebase
                        .firestore()
                        .collection(collection)
                        .where("CarRegistrationNumber", "==", reg)
                        .orderBy(orderField, "desc")
                        .limit(1)
                        .get()
                        .then((snapshot) => {
                            console.log("Client Data fetched from Firestore.");
                            var data = snapshot.docs.map((doc) => doc.data());
                            res(data);
                        })
                        .catch((e) => {
                            console.log(e);
                            rej(e);
                        });
                });
            };

            var API1 = async (reg, handle) => {
                await firebase
                    .firestore()
                    .collection("API1")
                    .where("registrationNumber", "==", reg)
                    .limit(1)
                    .get()
                    .then((snapshot) => {
                        console.log("API1 Data fetched from Firestore.");
                        var data = snapshot.docs.map((doc) => doc.data());
                        data[0] = ObjectModified(data[0]);
                        var temp2 = jsonToTableHtmlString(data[0], {
                            tableStyle:
                                "color:white; background-color:#505050;table-layout:fixed;width:100%;word-wrap:break-word;",
                            thStyle: "color:white; background-color:#606060;",
                            tdKeyStyle: "background-color:#606060;",
                        });
                        document.getElementById("API1").innerHTML = temp2;
                        document.getElementById(handle).innerHTML = temp2;

                        return data;
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            };

            var API2 = async (reg, handle) => {
                await firebase
                    .firestore()
                    .collection("API2")
                    .where(firebase.firestore.FieldPath.documentId(), "==", reg)
                    .get()
                    .then((snapshot) => {
                        console.log("API2 Data fetched from Firestore.");
                        var data = snapshot.docs.map((doc) => doc.data());
                        data[0].Response.DataItems.ValuationList = ObjectModified(data[0].Response.DataItems.ValuationList);
                        data[0].Response.DataItems = ObjectModified(data[0].Response.DataItems);
                        var temp2 = jsonToTableHtmlString(data[0].Response.DataItems, {
                            tableStyle:
                                "color:white; background-color:#505050;table-layout:fixed;width:100%;word-wrap:break-word;",
                            thStyle: "color:white; background-color:#606060;",
                            tdKeyStyle: "background-color:#606060;",
                        });
                        document.getElementById("API2").innerHTML = temp2;
                        document.getElementById(handle).innerHTML = temp2;

                        return data;
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            };





            var API3 = (reg, handle) => {
                reg = reg.toString();
                firebase
                    .firestore()
                    .collection("API3")
                    .where(firebase.firestore.FieldPath.documentId(), "==", reg)
                    .get()
                    .then((snapshot) => {
                        var data = snapshot.docs.map((doc) => doc.data());
                        // console.log(data[0]);
                        if (data[0] != undefined) {
                            console.log("API3 Data fetched from Firestore.");
                            data[0] = ObjectModified(data[0]);
                            var temp2 = jsonToTableHtmlString(data[0], {
                                tableStyle:
                                    "color:white; background-color:#505050;table-layout:fixed;width:100%;word-wrap:break-word;",
                                thStyle: "color:white; background-color:#606060;",
                                tdKeyStyle: "background-color:#606060;",
                            });
                            document.getElementById(handle).innerHTML = temp2;
                            return;
                        }
                        else {
                            // console.log("Fetching Data from API3.");
                            axios.get('/api3', {
                                params: {
                                    axiosRegNo: reg
                                }
                            })
                                .then((response) => {

                                    // console.log("hi"); 
                                    // console.log(response);

                                    API3Output.value = response.data.Response.DataItems;
                                    if(Object.keys(API3Output.value).length >= 1){
                                        var temp2 = jsonToTableHtmlString(API3Output.value, {
                                        tableStyle:
                                            "color:white; background-color:#505050;overflow:auto;",
                                        thStyle: "color:white; background-color:#606060;",
                                        tdKeyStyle: "background-color:#606060;",
                                        });
                                        document.getElementById(handle).innerHTML = temp2;

                                        const db = firebase.firestore();
                                        db.collection("API3")
                                            .doc(reg)
                                            .set(API3Output.value)
                                            .then(
                                                console.log("API3 Data entered into Firestore.")
                                            )
                                            .catch((e) => {
                                                console.log(e);
                                                });
                                    }
                                    else {
                                        document.getElementById(handle).innerHTML = "<p style='color:white;'>No Results</p>";
                                    }

                                })
                                .catch((e) => {
                                    document.getElementById(handle).innerHTML = "<p style='color:white;'>No Results</p>";
                                    console.log(e)
                                });

                            // var URL="https://uk1.ukvehicledata.co.uk/api/datapackage/VdiCheckFull?v=2&api_nullitems=1&auth_apikey=fa6b2f50-90f0-4f58-af30-585e45457b2a&key_VRM="+reg;
                            // axios
                            //     .get(URL)
                            //     .then((response) => {
                            //         API3Output.value = response.data.Response.DataItems;
                            //         if(Object.keys(API3Output.value).length >= 1){
                            //             var temp2 = jsonToTableHtmlString(API3Output.value, {
                            //             tableStyle:
                            //                 "color:white; background-color:#505050;overflow:auto;",
                            //             thStyle: "color:white; background-color:#606060;",
                            //             tdKeyStyle: "background-color:#606060;",
                            //             });
                            //             document.getElementById(handle).innerHTML = temp2;

                            //             const db = firebase.firestore();
                            //             db.collection("API3")
                            //                 .doc(reg)
                            //                 .set(API3Output.value)
                            //                 .then(
                            //                     console.log("API3 Data entered into Firestore.")
                            //                 )
                            //                 .catch((e) => {
                            //                     console.log(e);
                            //                     });
                            //         }
                            //         else {
                            //             document.getElementById(handle).innerHTML = "<p style='color:white;'>No Results</p>";
                            //         }
                            //     })
                            //     .catch((e) => {
                            //         document.getElementById(handle).innerHTML = "<p style='color:white;'>No Results</p>";
                            //         console.log(e)
                            //     });
                        }
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            };

            onMounted(() => {
                getData();
                document.getElementById("AdminTwo").style.display = "none";

                // axios.get('/firebase')
                //     .then((res)=>{

                //         var apikey = res.data.apiKey; 
                //         console.log(apikey);
                //         console.log(typeof apikey);

                //         const firebaseConfig = {
                //         apiKey: apikey,
                //         authDomain: "car-connect-e8da5.firebaseapp.com",
                //         projectId: "car-connect-e8da5",
                //         storageBucket: "car-connect-e8da5.appspot.com",
                //         messagingSenderId: "864993183927",
                //         appId: "1:864993183927:web:810059a116a4f9d8992532",
                //         measurementId: "G-B1K3THS4VB"
                //         };
                //         firebase.initializeApp(firebaseConfig);
                //         console.log(firebaseConfig);
                //         console.log(firebase);
                        
                //         })
                //     .catch((e) => console.log(e));
            });

            return {
                APIClient,
                APIClientSingle,
                API1,
                API1Input,
                API1Output,
                API2Input,
                API2Output,
                API3,
                API3Input,
                API3Output,
                getData,
                buttonApi3,
            };
        },

        data() {
            return {
            };
        },
        components: {},
        props: {
            color: {
                default: "light",
                validator: function(value) {
                    return ["light", "dark"].indexOf(value) !== -1;
                },
            },
        },
    };
</script>

<style scoped>
    @import "https://www.w3schools.com/w3css/4/w3.css";

    .city {
        display: none;
    }

    .th-90 {
        background-color: #000;
        color: #fff;
    }
    .th-90,
    .td-90 {
        padding: 10px;
    }

    .tr-90:nth-child(odd) {
        background-color: #f2f2f2;
    }

    .json-formatter-dark {
        background-color: #ff0000 !important;
    }

    @import "accordion-js/dist/accordion.min.css";

    .gridjs-pagination {
        color: #ffffff !important;
    }


    @import "gridjs/dist/theme/mermaid.css";


</style>
