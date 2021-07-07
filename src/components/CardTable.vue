<template>
    <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 rounded"
        style="background: #303030;"
        :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
    >
        <!-- <a id="modalHyperlink" href="#openModal" style="color:white;" >Open Modal</a><br/><br/> -->

        <!-- <div id="openModal" class="modalDialog">
            <div>
                <a href="#close" title="Close" class="close">X</a>

                <br />
                <p>CLIENT DETAILS</p>
                <div id="APIClient"></div>

                <br />
                <p>FIRST API CALL - INITIAL DETAILS</p>
                <div id="API1"></div>

                <br />
                <p>SECOND API CALL - CAR VALUE</p>
                <div id="API2"></div>

                <br />
                <p>THIRD API CALL - HPI Check</p>
                <form action="/API3" method="post" @submit.prevent="API3">
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
                </form>
            </div>
        </div> -->

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
    // import bootstrap from "@/assets/bootstrap.jpg";
    // import angular from "@/assets/angular.jpg";
    // import sketch from "@/assets/sketch.jpg";
    // import react from "@/assets/react.jpg";
    // import vue from "@/assets/react.jpg";

    // import team1 from "@/assets/team-1-800x800.jpg";
    // import team2 from "@/assets/team-2-800x800.jpg";
    // import team3 from "@/assets/team-3-800x800.jpg";
    // import team4 from "@/assets/team-4-470x470.png";

    import { ref } from "vue";

    // import firebase from "firebase";
    import firebase from 'firebase/app';
    import 'firebase/auth';
    import 'firebase/firestore';

    import { onMounted } from "vue";
    import axios from "axios";

    // import JSONFormatter from "json-formatter-js";
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
                /* var text = 'dateOfLastV5CIssued'; */
                var result = camelCase.replace( /([A-Z])/g, " $1" );
                var sentenceCase = result.charAt(0).toUpperCase() + result.slice(1);
                return sentenceCase;
            }

            function ObjectModified (obj) {
                for(var i in obj){
                /* console.log(i, person[i]); */
                var sentenceCase = Camel2Sentence(i);
                obj[sentenceCase] = obj[i];
                delete obj[i];
                }
                return obj;
            }

            function APIClientReduce(res){
                var res2 = [];
                res2 = [ `${res["CarRegistrationNumber"]}, ${res["CarDescription"]}, ${res["CarModel"]}, ${res["CarFuelType"]}, £ ${res["CarValue1"]} - ${res["CarValue2"]}`, `${res["ClientName"]}, ${res["ClientAddress"]}, ${res["ClientMobile"]}`, `${res["CarID"]}`];
                // console.log(res2); 
                return res2;
            }

            function APIClientOriginal(res){
                // var res3 = [];
                // res3 = [ res["ClientName"], res["ClientEmail"], res["ClientMobile"], res["ClientAddress"], res["ClientTown"], res["CarCounty"], res["ClientPostCode"], res["CarMileage"], res["CarScratchDents"], res["CarWarnLights"], res["CarOwnershipTime"], res["CarDetails"]];
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
                // console.log(res2); 
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
                        // res2 = res.map((res) => [
                        //     res.CarRegistrationNumber,
                        //     res.CarMake,
                        //     res.CarModel,
                        //     res.CarID,
                        // ]);

                        var res2 = res.map(APIClientReduce);
                        // console.log(res2);
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
                                    color: "#ffffff",
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

                            // JSONData(res, "APIClient");
                            var temp = JSON.parse(JSON.stringify(args));
                            // console.log(temp);
                            var temp4 = temp[1]._cells[0].data;
                            var temp5 = temp4.split(",");

                            APIClientSingle("APIClient", "CarID",temp5[0])
                                .then((res) => {
                                    var res3 = APIClientOriginal(res[0]);
                                    // console.log(res3);
                                    // res3 = [res3];
                                    // console.log(res3);
                                    // let index = Object.keys(res3).sort();
                                    // console.log(res3);
                                    res3 = ObjectModified(res3);
                                    // console.log(res3);
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
                            // API3(API3Input.value, "API3");
                        });
                    })
                    .catch((e) => console.log(e));
            };

            // var JSONData = (data, handle) => {
            //     const formatter = new JSONFormatter(data, 1);
            //     var divContainer = document.getElementById(handle);
            //     divContainer.innerHTML = "";
            //     divContainer.appendChild(formatter.render());
            // };

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
                        // JSONData(data, handle);
                        // console.log(data);
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
                        // console.log(typeof data);
                        // console.log(data[0].Response.DataItems);
                        // console.log(data[0].Response.DataItems.ValuationList);
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
                // firebase.goOffline();
                // firebase.goOnline();
                firebase
                    .firestore()
                    .collection("API3")
                    .where(firebase.firestore.FieldPath.documentId(), "==", reg)
                    .get()
                    .then((snapshot) => {
                        var data = snapshot.docs.map((doc) => doc.data());
                        // console.log(data);
                        // console.log(data.length == 0);
                        // console.log(Object.keys(data[0]).length >= 1);
                        // console.log(Object.keys(data[0]).length == 0);
                        // console.log(data[0].constructor === Object);
                        

                        // console.log(data.length);
                        // console.log(!(Object.keys(data[0]).length === 0 && data[0].constructor === Object));
                        if (Object.keys(data[0]).length >= 1) {
                            // console.log("hi");
                            console.log("API3 Data fetched from Firestore.");
                            // console.log(data[0].FinanceRecordList[0]);
                            // console.log(data[0].PlateChangeList[0]);
                            // data[0].FinanceRecordList[0] = ObjectModified(data[0].FinanceRecordList[0]);
                            // data[0].PlateChangeList[0] = ObjectModified(data[0].PlateChangeList[0]);
                            data[0] = ObjectModified(data[0]);
                            var temp2 = jsonToTableHtmlString(data[0], {
                                tableStyle:
                                    "color:white; background-color:#505050;table-layout:fixed;width:100%;word-wrap:break-word;",
                                thStyle: "color:white; background-color:#606060;",
                                tdKeyStyle: "background-color:#606060;",
                            });
                            // document.getElementById("API3").innerHTML = temp2;
                            document.getElementById(handle).innerHTML = temp2;
                            return;
                        }
                        else {
                            // document.getElementById(handle).innerHTML = "<p style='color:white;'>API3 not available</p>";
                            // console.log("hi2");
                            // var URL="https://uk1.ukvehicledata.co.uk/api/datapackage/VdiCheckFull?v=2&api_nullitems=1&auth_apikey=87715f2c-f6a3-4f77-8527-94511f3ee5a4&key_VRM="+reg;
                            var URL="https://uk1.ukvehicledata.co.uk/api/datapackage/VdiCheckFull?v=2&api_nullitems=1&auth_apikey=fa6b2f50-90f0-4f58-af30-585e45457b2a&key_VRM="+reg;
                            axios
                                .get(URL)
                                .then((response) => {
                                    API3Output.value = response.data.Response.DataItems;
                                    // console.log(response.data.Response.DataItems);
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
                        }
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            };






            // var API3b = async (reg, handle) => {
            //     var URL =
            //         "https://uk1.ukvehicledata.co.uk/api/datapackage/VdiCheckFull?v=2&api_nullitems=1&auth_apikey=fa6b2f50-90f0-4f58-af30-585e45457b2a&key_VRM=" +
            //         reg;
            //     await axios
            //         .get(URL)
            //         .then((response) => {
            //             API3Output.value = response.data.Response.DataItems;

            //             var temp2 = jsonToTableHtmlString(API3Output.value, {
            //                 tableStyle:
            //                     "color:white; background-color:#505050;overflow:auto;display:block;",
            //                 thStyle: "color:white; background-color:#606060;",
            //                 tdKeyStyle: "background-color:#606060;",
            //             });
            //             document.getElementById(handle).innerHTML = temp2;

            //             const db = firebase.firestore();
            //             db.collection("API3")
            //                 .doc(reg)
            //                 .set(API3Output.value)
            //                 .then(
            //                     console.log("API3 Data entered into Firestore.")
            //                 )
            //                 .catch((e) => console.log(e));
            //         })
            //         .catch((e) => console.log(e));
            // };

            onMounted(() => {
                getData();
                document.getElementById("AdminTwo").style.display = "none";
            });

            return {
                APIClient,
                APIClientSingle,
                API1,
                API1Input,
                API1Output,
                // API2,
                API2Input,
                API2Output,
                API3,
                // API3b,
                API3Input,
                API3Output,
                getData,
                buttonApi3,
            };
        },

        data() {
            return {
                // bootstrap,
                // angular,
                // sketch,
                // react,
                // vue,
                // team1,
                // team2,
                // team3,
                // team4,
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
