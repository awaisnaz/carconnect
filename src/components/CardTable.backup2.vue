<template>
    <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 rounded"
        style="background: #303030;"
        :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
    >
        <!-- <a id="modalHyperlink" href="#openModal" style="color:white;" >Open Modal</a><br/><br/> -->

        <div id="openModal" class="modalDialog">
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
        </div>

        <div id="APIClientTable"></div>

                    <br/><br/><div style="grid-column-start: 1;">
                      <h3
                      class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2" style="color:white;"
                      >
                      API1
                      </h3>
                    </div><br/>


        <div id="temp2"></div>
                    <br/><br/><div style="grid-column-start: 1;">
                      <h3
                      class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2" style="color:white;"
                      >
                      API2
                      </h3>
                    </div><br/>
        <div id="temp3"></div>
    </div>
</template>
<script>
    import bootstrap from "@/assets/bootstrap.jpg";
    import angular from "@/assets/angular.jpg";
    import sketch from "@/assets/sketch.jpg";
    import react from "@/assets/react.jpg";
    import vue from "@/assets/react.jpg";

    import team1 from "@/assets/team-1-800x800.jpg";
    import team2 from "@/assets/team-2-800x800.jpg";
    import team3 from "@/assets/team-3-800x800.jpg";
    import team4 from "@/assets/team-4-470x470.png";

    import { ref } from "vue";
    import firebase from "firebase";
    // import { onBeforeMount } from "vue";
    import { onMounted } from "vue";
    import axios from "axios";

    import JSONFormatter from "json-formatter-js";
    // const Jsontableify = require("jsontableify");
    const { jsonToTableHtmlString } = require("json-table-converter");

    // import Accordion from "accordion-js";
    import { Grid, html } from "gridjs";
    // import Jsontableify from "jsontableify";

    // import JSONCards from "@/components/JSONCards.vue";

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

            // function openCity(evt, cityName) {
            //     var i, x, tablinks;
            //     x = document.getElementsByClassName("city");
            //     for (i = 0; i < x.length; i++) {
            //         x[i].style.display = "none";
            //     }
            //     tablinks = document.getElementsByClassName("tablink");
            //     for (i = 0; i < x.length; i++) {
            //         tablinks[i].classList.remove("w3-light-grey");
            //     }
            //     document.getElementById(cityName).style.display = "block";
            //     evt.currentTarget.classList.add("w3-light-grey");
            // }

            var getData = () => {
                APIClient("APIClient", "CarID")
                    .then((res) => {
                        for (var i = 0; i < res.length; i++) {
                            res[i] = Object.keys(res[i])
                                .sort()
                                .reduce((obj, key) => {
                                    obj[key] = res[i][key];
                                    // console.log(obj);
                                    return obj;
                                }, {});
                        }
                        // JSONToHTMLTable(res, "APIClient");
                        // JSONData(res, "APIClient");
                        // console.log(res);
                        // res = [{"CarDetails":"df","CarID":"1622698310783","CarMileage":"sdfs"},{"CarDetails":"vcbcv","CarID":"1622698277599","CarMileage":"cvbc"},{"CarDetails":"dsfs","CarID":"1622698249327","CarMileage":"dfs"}]
                        var res2;
                        res2 = res.map((res) => [
                            res.CarRegistrationNumber,
                            res.CarMake,
                            res.CarModel,
                            res.CarID,
                        ]);
                        const grid = new Grid({
                            // columns: ["Name", "Email", "Phone Number"],
                            // data: [
                            // ["John", "john@example.com", "(353) 01 222 3333"],
                            // ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
                            // ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
                            // ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
                            // ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
                            // ],
                            columns: [
                                "Reg. No.",
                                "Make",
                                "Model",
                                {
                                    name: "Date",
                                    formatter: (cell) => `${new Date(Number(cell)).toLocaleString('en-UK')}`
                                    // formatter: (_, row) => html(`${row.cells[0].data} <button type="button" onclick="alert('Hello world!')">Click Me!</button>`)
                                },
                                {
                                    name: "Actions",
                                    formatter: () =>
                                        html(
                                            // `${row.cells[0].data} <a id="modalHyperlink" href="#openModal" style="color:white;" v-on:click="getModal">Open Modal</a>`
                                            `<a id="modalHyperlink" href="#openModal" style="color:white;" v-on:click="getModal">More Details</a>`
                                        ),
                                    // formatter: (_, row) => html(`${row.cells[0].data} <button type="button" onclick="alert('Hello world!')">Click Me!</button>`)
                                },
                            ],
                            data: res2,
                            pagination: true,
                            search: true,
                            sort: true,
                            resizable: true,
                            // fixedHeader: true,
                            style: {
                                container: {
                                    color: "#ffffff !important",
                                    "background-color": "#606060",
                                    "border-radius": "0px",
                                },
                                table: {
                                    // border: '3px solid #ccc'
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
                                    "text-align": "center",
                                    color: "#ffffff",
                                    "background-color": "#505050",
                                    "border-radius": "0px",
                                    "cursor": "pointer"
                                },
                                footer: {
                                    // 'text-align': 'center',
                                    color: "#ffffff !important",
                                    "background-color": "#606060",
                                    "border-radius": "0px",
                                },
                            },
                        }).render(document.getElementById("APIClientTable"));
                        grid.on("rowClick", (...args) => {
                            JSONData(res, "APIClient");
                            var temp = JSON.parse(JSON.stringify(args));
                            API1(temp[1]._cells[0].data, "API1");
                            API2(temp[1]._cells[0].data, "API2");
                            API3Input.value = temp[1]._cells[0].data;
                            document.getElementById(
                                "container-api3"
                            ).style.display = "block";
                            document.getElementById("API3").style.display =
                                "none";
                            // API3(API3Input.value, "API3");
                        });
                    })
                    .catch((e) => console.log(e));

                // APIContact("APIContact", "ContactID")
                //     .then((res) => {
                //         for (var i = 0; i < res.length; i++) {
                //             res[i] = Object.keys(res[i])
                //                 .sort()
                //                 .reduce((obj, key) => {
                //                     obj[key] = res[i][key];
                //                     return obj;
                //                 }, {});
                //         }
                //         new Grid({
                //             data: res,
                //             pagination: true,
                //             search: true,
                //             sort: true,
                //             resizable: true,
                //             style: {
                //                 container: {
                //                     color: "#ffffff !important",
                //                     "background-color": "#606060",
                //                     "border-radius": "0px",
                //                 },
                //                 table: {
                //                     color: "#ffffff",
                //                     "background-color": "#505050",
                //                     "border-radius": "0px",
                //                 },
                //                 header: {
                //                     "border-radius": "0px",
                //                 },
                //                 th: {
                //                     "background-color": "#606060",
                //                     color: "#ffffff",
                //                     "border-bottom": "3px solid #ccc",
                //                     "text-align": "center",
                //                     "border-radius": "0px",
                //                 },
                //                 td: {
                //                     "text-align": "center",
                //                     color: "#ffffff",
                //                     "background-color": "#505050",
                //                     "border-radius": "0px",
                //                 },
                //                 footer: {
                //                     color: "#ffffff !important",
                //                     "background-color": "#606060",
                //                     "border-radius": "0px",
                //                 },
                //             },
                //         }).render(document.getElementById("APIContact"));
                //     })
                //     .catch((e) => console.log(e));
            };

            var JSONData = (data, handle) => {
                // const formatter = new JSONFormatter(data, 1, { theme: "dark" });
                const formatter = new JSONFormatter(data, 1);
                var divContainer = document.getElementById(handle);
                divContainer.innerHTML = "";
                divContainer.appendChild(formatter.render());
            };

            // function JSONToHTMLTable(jsonData, elementToBind) {
            //   //This Code gets all columns for header   and stored in array col
            //   var col = [];
            //   for (var i = 0; i < jsonData.length; i++) {
            //       for (var key in jsonData[i]) {
            //           if (col.indexOf(key) === -1) {
            //               col.push(key);
            //           }
            //       }
            //   }

            //   //This Code creates HTML table
            //   var table = document.createElement("table");
            //   table.style.color = "grey";

            //   //This Code getsrows for header creader above.
            //   var tr = table.insertRow(-1);

            //   for (var p  = 0; p < col.length; p++) {
            //       var th = document.createElement("th");
            //       th.innerHTML = col[p];
            //       tr.appendChild(th);
            //   }

            //   //This Code adds data to table as rows
            //   for (var q = 0; q < jsonData.length; q++) {

            //       tr = table.insertRow(-1);

            //       for (var r = 0; r < col.length; r++) {
            //           var tabCell = tr.insertCell(-1);
            //           tabCell.innerHTML = jsonData[q][col[r]];
            //       }
            //   }

            //   //This Code gets the all columns for header
            //   var divContainer = document.getElementById(elementToBind);
            //   divContainer.innerHTML = "";
            //   divContainer.appendChild(table);
            // }

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

            // var APIContact = (collection, orderField) => {
            //     return new Promise((res, rej) => {
            //         firebase
            //             .firestore()
            //             .collection(collection)
            //             .orderBy(orderField, "desc")
            //             .limit(100)
            //             .get()
            //             .then((snapshot) => {
            //                 console.log("Contact Data fetched from Firestore.");
            //                 var data = snapshot.docs.map((doc) => doc.data());

            //                 res(data);
            //             })
            //             .catch((e) => {
            //                 console.log(e);
            //                 rej(e);
            //             });
            //     });
            // };

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


                        var temp2 = jsonToTableHtmlString(data, {
                            tableStyle: "color:black; background-color:white;overflow-y:scroll;display:block;", // <table/> Style
                            // trStyle: string,    // <tr/> Style
                            // thStyle: string,    // <th/> Style
                            // tdStyle: string,    // <td/> Style
                            // tdKeyStyle: string, // <td/> Key Style
                            // formatCell: (cellValue, isKeyCell) => newCellValue,
                        });
                        document.getElementById("temp2").innerHTML = temp2;
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
                        // JSONData(data, handle);



                        var temp2 = jsonToTableHtmlString(data, {
                            tableStyle: "color:black; background-color:white;overflow-y:scroll;display:block;", // <table/> Style
                            // trStyle: string,    // <tr/> Style
                            // thStyle: string,    // <th/> Style
                            // tdStyle: string,    // <td/> Style
                            // tdKeyStyle: string, // <td/> Key Style
                            // formatCell: (cellValue, isKeyCell) => newCellValue,
                        });
                        document.getElementById("temp3").innerHTML = temp2;
                        document.getElementById(handle).innerHTML = temp2;


                        return data;
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            };

            // var API2 = async (reg, handle) => {
            //     var URL =
            //         "https://uk1.ukvehicledata.co.uk/api/datapackage/ValuationData?v=2&api_nullitems=1&auth_apikey=87715f2c-f6a3-4f77-8527-94511f3ee5a4&key_VRM=" +
            //         reg;
            //     await axios
            //         .get(URL)
            //         .then((response) => {
            //             API2Output.value = response.data;
            //             JSONData(API2Output.value, handle);
            //             const db = firebase.firestore();
            //             db.collection("API2")
            //                 .add(API2Output.value)
            //                 .then(
            //                     console.log("API2 Data entered into Firestore.")
            //                 )
            //                 .catch((e) => console.log(e));
            //         })
            //         .catch((e) => console.log(e));
            // };

            var API3 = async (reg, handle) => {
                var URL =
                    "https://uk1.ukvehicledata.co.uk/api/datapackage/VdiCheckFull?v=2&api_nullitems=1&auth_apikey=87715f2c-f6a3-4f77-8527-94511f3ee5a4&key_VRM=" +
                    reg;
                await axios
                    .get(URL)
                    .then((response) => {
                        API3Output.value = response.data;
                        JSONData(API3Output.value, handle);
                        const db = firebase.firestore();
                        db.collection("API3")
                            .doc(reg)
                            .set(API3Output.value)
                            // .add(API3Output.value)
                            .then(
                                console.log("API3 Data entered into Firestore.")
                            )
                            .catch((e) => console.log(e));
                    })
                    .catch((e) => console.log(e));
            };

            // var getContactus = async  () => {
            // await firebase
            //         .firestore()
            //         .collection('contactus')
            //         .orderBy('Date Created','desc')
            //         .get()
            //         .then(snapshot => {
            //           contactus.value = snapshot.docs.map(doc => doc.data());
            //           console.log(contactus.value);
            //           JSONToHTMLTable(contactus.value, "contactus");
            //         }
            //         )

            // // console.log(contactus.value);
            // return contactus.value;
            // }

            onMounted(() => {
                getData();
                // API1('AA19AAA');
                // document.getElementById("modalHyperlink").addEventListener("click", API1("AA19AAA"));
                // document.body.appendChild(document.getElementById("openModal"));
            });

            // onBeforeMount(() => {
            //     // getData();
            //     // new Accordion(".accordion-container");
            // });

            return {
                APIClient,
                // APIContact,
                API1,
                API1Input,
                API1Output,
                // API2,
                API2Input,
                API2Output,
                API3,
                API3Input,
                API3Output,
                getData,
                // getModal,
                // JSONData,
                // JSONToGrid,
                // openCity,
                buttonApi3,
            };
        },

        data() {
            return {
                bootstrap,
                angular,
                sketch,
                react,
                vue,
                team1,
                team2,
                team3,
                team4,
            };
        },
        components: {
            // JSONCards,
        },
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

    .modalDialog {
        /* position: fixed; */
        font-family: Arial, Helvetica, sans-serif;
        top: 0;
        /* right: 0; */
        /* bottom: 0; */
        left: 0;
        position: absolute;
        background: rgba(0, 0, 0, 0.8);
        z-index: 99999;
        opacity: 0;
        /* max-height: calc(100vh - 210px); */
        overflow-y: auto;
        overflow-x: auto;
        /* max-height: 90%;
        max-width:90%; */
        /* width:100vw;
        height:100vw; */
        /* -webkit-transition: opacity 400ms ease-in;
    -moz-transition: opacity 400ms ease-in;
    transition: opacity 400ms ease-in; */
        pointer-events: none;
    }
    .modalDialog:target {
        opacity: 1;
        pointer-events: auto;
    }
    .modalDialog > div {
        /* width: 400px; */
        /* width: 100vw; */
        /* height: 100vw; */
        /* width:80%; */
        max-height: calc(100vh - 210px);
        max-width: calc(100vw - 210px);
        overflow-y: auto;
        overflow-x: auto;
        position: relative;
        top: 0;
        left: 0;
        margin: 10% auto;
        padding: 5px 20px 13px 20px;
        border-radius: 10px;
        background: #fff;
        background: -moz-linear-gradient(#fff, #999);
        background: -webkit-linear-gradient(#fff, #999);
        background: -o-linear-gradient(#fff, #999);
    }
    .close {
        background: #606061;
        color: #ffffff;
        line-height: 25px;
        position: absolute;
        right: -12px;
        text-align: center;
        top: -10px;
        width: 24px;
        text-decoration: none;
        font-weight: bold;
        -webkit-border-radius: 12px;
        -moz-border-radius: 12px;
        border-radius: 12px;
        -moz-box-shadow: 1px 1px 3px #000;
        -webkit-box-shadow: 1px 1px 3px #000;
        box-shadow: 1px 1px 3px #000;
    }
    .close:hover {
        background: #00d9ff;
    }
</style>
