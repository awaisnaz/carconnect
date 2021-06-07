<template>
    <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 rounded"
        style="background: #303030;"
        :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
    >
        <p>hi1</p>
        <div v-html="temp" style="background-color:#303030">
        </div>
        <p>hi2</p>

        <!-- <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        Accordion Item #1
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                >
                    <div class="accordion-body">
                        <strong
                            >This is the first item's accordion body.</strong
                        >
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                    >
                        Accordion Item #2
                    </button>
                </h2>
                <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                >
                    <div class="accordion-body">
                        <strong
                            >This is the second item's accordion body.</strong
                        >
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                    >
                        Accordion Item #3
                    </button>
                </h2>
                <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                >
                    <div class="accordion-body">
                        <strong
                            >This is the third item's accordion body.</strong
                        >
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                    </div>
                </div>
            </div>
        </div> -->

        <!-- <JSONCards/> -->
        <!-- <div class="accordion-container">
            <div class="ac">
                <h2 class="ac-header">
                    <button class="ac-trigger">
                        <p>What is Car-Connect?</p>
                    </button>
                </h2>
                <div class="ac-panel">
                    <div class="ac-text">
                        <p>
                            Car-Connect helps hundreds of people everyday to
                            sell their cars quickly and easily, by finding the
                            car dealer that’ll pay the most for your car.
                        </p>
                        <br />
                        <p>
                            Unlike your other options, we won’t make you choose
                            between price and convenience – you can have both,
                            with no extra effort. We’ll guide you through the
                            process to get a great result, and leave you feeling
                            like a pro.
                        </p>
                    </div>
                </div>
            </div>

            <div class="ac">
                <h2 class="ac-header">
                    <button class="ac-trigger">
                        <p>Is it complicated?</p>
                    </button>
                </h2>
                <div class="ac-panel">
                    <div class="ac-text">
                        <p>
                            No. To complete the entire process, all we need you
                            to do is enter your reg, provide the details and
                            photos requested, accept your highest offer from our
                            verified dealer network, then arrange the collection
                            with the dealer at a time suitable for you.
                            Car-Connect handles everything else for you.
                        </p>
                    </div>
                </div>
            </div>

            <div class="ac">
                <h2 class="ac-header">
                    <button class="ac-trigger">
                        <p>What are the key steps?</p>
                    </button>
                </h2>
                <div class="ac-panel">
                    <div class="ac-text">
                        <p>
                            1. Get your instant Free Online valuation in
                            seconds.
                        </p>
                        <br />
                        <p>2. Book an appointment that suits you.</p>
                        <br />
                        <p>3. We'll buy your car in under an hour.</p>
                    </div>
                </div>
            </div>

            <div class="ac">
                <h2 class="ac-header">
                    <button class="ac-trigger">
                        <p>Can the online valuation change?</p>
                    </button>
                </h2>
                <div class="ac-panel">
                    <div class="ac-text">
                        <p>
                            We try to keep our online valuations as consistent
                            as possible, but if there are major shifts in the
                            market that affect your car’s value – up or down –
                            we’ll react to them to ensure the fairest price.
                        </p>
                    </div>
                </div>
            </div>

            <div class="ac">
                <h2 class="ac-header">
                    <button class="ac-trigger">
                        <p>Is there a transaction fee?</p>
                    </button>
                </h2>
                <div class="ac-panel">
                    <div class="ac-text">
                        <p>
                            No. We pride ourselves on no hidden charges, and we
                            don’t charge a transaction fee.
                        </p>
                    </div>
                </div>
            </div>

            <div class="ac">
                <h2 class="ac-header">
                    <button class="ac-trigger">
                        <p>Valuation is valid for how much time?</p>
                    </button>
                </h2>
                <div class="ac-panel">
                    <div class="ac-text">
                        <p>
                            you should refresh your valuation to make sure the
                            figure you’ve got is up to date.
                        </p>
                    </div>
                </div>
            </div>

            <div class="ac">
                <h2 class="ac-header">
                    <button class="ac-trigger">
                        <p>Will online valuation offer change?</p>
                    </button>
                </h2>
                <div class="ac-panel">
                    <div class="ac-text">
                        <p>
                            All the cars we buy are subject to inspection and
                            the online valuations we issue are not contractual
                            offers, but we pride ourselves on our fair prices
                            and paying the online valuation figure as often as
                            possible. If, when we inspect the car we find faults
                            or damage that we weren’t aware of from the
                            information you supplied online, then the price
                            you’re offered at inspection may be different to
                            your online valuation. However, unlike other car
                            buyers, we won’t try to drive down your price by
                            penalising you for fair wear and tear or over-charge
                            you for inexpensive repairs.
                        </p>
                    </div>
                </div>
            </div>

            <div class="ac">
                <h2 class="ac-header">
                    <button class="ac-trigger">
                        <p>What does subject to inspection mean?</p>
                    </button>
                </h2>
                <div class="ac-panel">
                    <div class="ac-text">
                        <p>
                            Our online valuations are not contractual offers,
                            and any car we buy is subject to inspection, which
                            means that we need to see and check your car before
                            finalising our offer to buy it.
                        </p>
                    </div>
                </div>
            </div>

            <div class="ac">
                <h2 class="ac-header">
                    <button class="ac-trigger">
                        <p>Will the dealer collect my car?</p>
                    </button>
                </h2>
                <div class="ac-panel">
                    <div class="ac-text">
                        <p>
                            Once you have agreed the sale, the dealer will be in
                            touch within two working days to arrange collection.
                            You agree a time and date suitable to you both, and
                            the dealer (or their driver) will come to your home
                            or workplace to inspect and collect the vehicle. Our
                            sales support team will ensure that this happens in
                            a timely fashion, and are on hand to help with any
                            queries.
                        </p>
                    </div>
                </div>
            </div>

            <div class="ac">
                <h2 class="ac-header">
                    <button class="ac-trigger">
                        <p>What if my car doesn’t sell?</p>
                    </button>
                </h2>
                <div class="ac-panel">
                    <div class="ac-text">
                        <p>
                            While we manage price expectations as best we can,
                            sometimes cars do not sell on the first day with Car
                            Connect, this can be for a number of reasons,
                            including the current popularity of your make of car
                            or recent high volumes of a particular model in the
                            market at the time. On these occasions we will
                            discuss with you whether an adjusted price would
                            enable the car to sell to a verified dealer in our
                            network, or if an alternative approach is required.
                        </p>
                    </div>
                </div>
            </div>
        </div> -->

        <!-- <div>
            <div class="accordion-container">
                <div class="ac">
                    <h2 class="ac-header">
                        <button class="ac-trigger">
                            <p>Clients</p>
                        </button>
                    </h2>
                    <div class="ac-panel">
                        <div class="ac-text">
                            <div id="APIClient"></div>
                            
                        </div>
                    </div>
                </div>

                <div class="ac">
                    <h2 class="ac-header">
                        <button class="ac-trigger">
                            <p>Contacts</p>
                        </button>
                    </h2>
                    <div class="ac-panel">
                        <div class="ac-text">
                            <div id="APIContact"></div>
                        </div>
                    </div>
                </div>

                <div class="ac">
                    <h2 class="ac-header">
                        <button class="ac-trigger">
                            <p>APIs</p>
                        </button>
                    </h2>
                    <div class="ac-panel">
                        <div class="ac-text">
                            <div>
                                <div>
                                    <br /><br /><br />
                                    <h3
                                        class="font-semibold text-lg text-blueGray-700"
                                        style="color:white;background-color:#505050;width:100%;"
                                    >
                                        FIRST API CALL - INITIAL DETAILS.
                                    </h3>
                                    <br />
                                    <div>
                                        <form
                                            action="/API1"
                                            method="post"
                                            @submit.prevent="API1"
                                        >
                                            <div
                                                style=" display: table; margin: 4px; padding: 1px;"
                                            >
                                                <div
                                                    style="display: table-cell;"
                                                >
                                                    <input
                                                        v-model="API1Input"
                                                        required
                                                        name="API1Input"
                                                        type="text"
                                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        id="API1Input"
                                                        style="margin: 1px;"
                                                        placeholder="e.g. AA19AAA"
                                                    />
                                                </div>
                                                <div class="ml-2">
                                                    <button
                                                        name="API1Button"
                                                        value="Car Details"
                                                        type="submit"
                                                        class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 ml-2 mb-1 ease-linear transition-all duration-150"
                                                        style="margin: 1px; background-color: #fdcc04;"
                                                    >
                                                        Initial Details
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <div id="API1"></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <br /><br /><br />

                                <div>
                                    <br /><br /><br />
                                    <h3
                                        class="font-semibold text-lg text-blueGray-700"
                                        style="color:white;background-color:#505050;width:100%;"
                                    >
                                        SECOND API CALL - CAR VALUE.
                                    </h3>
                                    <br />
                                    <div>
                                        <form
                                            action="/API2"
                                            method="post"
                                            @submit.prevent="API2"
                                        >
                                            <div
                                                style=" display: table; margin: 4px; padding: 1px;"
                                            >
                                                <div
                                                    style="display: table-cell;"
                                                >
                                                    <input
                                                        v-model="API2Input"
                                                        required
                                                        name="API2Input"
                                                        type="text"
                                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        id="API2Input"
                                                        style="margin: 1px;"
                                                        placeholder="e.g. AA19AAA"
                                                    />
                                                </div>
                                                <div class="ml-2">
                                                    <button
                                                        name="API2Button"
                                                        value="Car Valuation"
                                                        type="submit"
                                                        class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 ml-2 mb-1 ease-linear transition-all duration-150"
                                                        style="margin: 1px; background-color: #fdcc04;"
                                                    >
                                                        Car Value
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <div id="API2"></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <br /><br /><br />

                                <div>
                                    <br /><br /><br />
                                    <h3
                                        class="font-semibold text-lg text-blueGray-700"
                                        style="color:white;background-color:#505050;width:100%;"
                                    >
                                        THIRD API CALL - HPI CHECK.
                                    </h3>
                                    <br />
                                    <div>
                                        <form
                                            action="/API3"
                                            method="post"
                                            @submit.prevent="API3"
                                        >
                                            <div
                                                style=" display: table; margin: 4px; padding: 1px;"
                                            >
                                                <div
                                                    style="display: table-cell;"
                                                >
                                                    <input
                                                        v-model="API3Input"
                                                        required
                                                        name="API3Input"
                                                        type="text"
                                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        id="API3Input"
                                                        style="margin: 1px;"
                                                        placeholder="e.g. AA19AAA"
                                                    />
                                                </div>
                                                <div class="ml-2">
                                                    <button
                                                        name="API3Button"
                                                        value="Car Full VDI Check"
                                                        type="submit"
                                                        class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-2 ease-linear transition-all duration-150"
                                                        style="margin: 1px; background-color: #fdcc04;"
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
                                <br /><br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
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

    // import Accordion from "accordion-js";
    import { Grid } from "gridjs";
    import Jsontableify from "jsontableify";

    // import JSONCards from "@/components/JSONCards.vue";

    export default {
        setup() {
            var API1Input = ref();
            var API1Output = ref();
            var API2Input = ref();
            var API2Output = ref();
            var API3Input = ref();
            var API3Output = ref();
            var temp = ref();

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
                        new Grid({
                            // columns: ["Name", "Email", "Phone Number"],
                            // data: [
                            // ["John", "john@example.com", "(353) 01 222 3333"],
                            // ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
                            // ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
                            // ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
                            // ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
                            // ],
                            data: res,
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
                                },
                                footer: {
                                    // 'text-align': 'center',
                                    color: "#ffffff !important",
                                    "background-color": "#606060",
                                    "border-radius": "0px",
                                },
                            },
                        }).render(document.getElementById("APIClient"));
                        // console.log(document.getElementById("APIClient"));
                    })
                    .catch((e) => console.log(e));

                APIContact("APIContact", "ContactID")
                    .then((res) => {
                        for (var i = 0; i < res.length; i++) {
                            res[i] = Object.keys(res[i])
                                .sort()
                                .reduce((obj, key) => {
                                    obj[key] = res[i][key];
                                    return obj;
                                }, {});
                        }
                        // JSONToHTMLTable(res, "APIClient");
                        // JSONData(res, "APIContact");
                        // console.log(JSON.stringify(res));
                        // res = [{"ContactEmail":"a@b.com","ContactID":"1622706526600","ContactMessage":"d"},{"ContactEmail":"a@b.com","ContactID":"1622705891445","ContactMessage":"vxcv"}];
                        new Grid({
                            // columns: ["Name", "Email", "Phone Number"],
                            // data: [
                            // ["John", "john@example.com", "(353) 01 222 3333"],
                            // ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
                            // ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
                            // ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
                            // ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
                            // ],
                            data: res,
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
                                },
                                footer: {
                                    // 'text-align': 'center',
                                    color: "#ffffff !important",
                                    "background-color": "#606060",
                                    "border-radius": "0px",
                                },
                            },
                        }).render(document.getElementById("APIContact"));
                    })
                    .catch((e) => console.log(e));
            };

            var JSONData = (data, holder) => {
                const formatter = new JSONFormatter(data, 1, { theme: "dark" });
                var divContainer = document.getElementById(holder);
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

            var APIContact = (collection, orderField) => {
                return new Promise((res, rej) => {
                    firebase
                        .firestore()
                        .collection(collection)
                        .orderBy(orderField, "desc")
                        .limit(100)
                        .get()
                        .then((snapshot) => {
                            console.log("Contact Data fetched from Firestore.");
                            var data = snapshot.docs.map((doc) => doc.data());

                            res(data);
                        })
                        .catch((e) => {
                            console.log(e);
                            rej(e);
                        });
                });
            };

            var API1 = async () => {
                await firebase
                    .firestore()
                    .collection("API1")
                    .where("registrationNumber", "==", API1Input.value)
                    .limit(1)
                    .get()
                    .then((snapshot) => {
                        console.log("API1 Data fetched from Firestore.");
                        var data = snapshot.docs.map((doc) => doc.data());
                        // JSONData(data, "API1");
                        var html = new Jsontableify({
                            // headerList: ['Phone', 'Attachments', 'PersonCompetency'], // optional - will be shown as header to table
                            // dateFormat: 'DD-MM-YYYY', // optional- date format to be converted to if date found
                            // replaceTextMap: { YearsOfExperience: 'Years Of Experience' }, // optional - key will be replaced by its value
                            // excludeKeys: ['Current CTC'], // optional - these fields will not be displayed
                        }).toHtml(data);
                        console.log(data);
                        console.log(html);
                        var divContainer = document.getElementById("API1");
                        divContainer.innerHTML = "";
                        divContainer.appendChild(html);
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            };

            var API2 = async () => {
                // var match = JSON.parse(`{Vrm: ${API2Input.value}}`);
                // console.log(match);
                // var db = firebase.firestore();
                // db.collection('API2').where("API2Input.value", "array-contains", match).get().then(snapshot => {
                //     const data = snapshot.val();
                //     data.forEach(doc => {
                //       if (doc.exists) {
                //         console.log("exist");
                //       } else {
                //         console.log("not exist");
                //       }
                //     });
                //   })
                //   .catch(error => {
                //     console.log(error);
                //   });

                var URL =
                    "https://uk1.ukvehicledata.co.uk/api/datapackage/ValuationData?v=2&api_nullitems=1&auth_apikey=87715f2c-f6a3-4f77-8527-94511f3ee5a4&key_VRM=" +
                    API2Input.value;
                await axios
                    .get(URL)
                    .then((response) => {
                        API2Output.value = response.data;
                        JSONData(API2Output.value, "API2");
                        const db = firebase.firestore();
                        db.collection("API2")
                            .add(API2Output.value)
                            .then(
                                console.log("API2 Data entered into Firestore.")
                            )
                            .catch((e) => console.log(e));
                    })
                    .catch((e) => console.log(e));
            };

            var API3 = async () => {
                var URL =
                    "https://uk1.ukvehicledata.co.uk/api/datapackage/VdiCheckFull?v=2&api_nullitems=1&auth_apikey=87715f2c-f6a3-4f77-8527-94511f3ee5a4&key_VRM=" +
                    API3Input.value;
                await axios
                    .get(URL)
                    .then((response) => {
                        API3Output.value = response.data;
                        JSONData(API3Output.value, "API3");
                        const db = firebase.firestore();
                        db.collection("API3")
                            .add(API3Output.value)
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

            var obj = {
                CardA: {
                    Header: "Header1",
                    Body: "Body1"
                },
                CardB: {
                    Header: "Header2",
                    Body: "Body2"
                },
            };

            function MakeAccordion(obj) {
                // var htmlcode = '<div class="accordion" id="accordionExample">';
                var htmlcode = "<div class='container mx-auto'><div class='m-8 rounded overflow-hidden'>";
                var i = 1;
                for (var key in obj) {
                    // htmlcode = htmlcode + "<div class='accordion-item' style='margin:10px;'>";
                    


                    // htmlcode = htmlcode + `<h2 class='accordion-header' style='background-color:#303030' id='heading${i}'><button class='accordion-button' style='background-color:#303030;color:white;' type='button' data-bs-toggle='collapse' data-bs-target='#collapse${i}' aria-expanded='true' aria-controls='collapse${i}'>` + obj[key]["Header"] + "</button></h2>";
                    htmlcode = htmlcode + `<div class='group outline-none accordion-section' tabindex='${i}'><div class='group bg-gray-900 flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative' style='background:#ff0000'><div class='group-focus:text-white transition ease duration-500'>`;
                    htmlcode = htmlcode + obj[key]["Header"];
                    htmlcode = htmlcode + "</div><div class='h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2'><i class='fas fa-chevron-down'></i></div></div><div class='group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500'><p class='p-2 text-gray-400 text-justify'>";
                    htmlcode = htmlcode + obj[key]["Body"];
                    htmlcode = htmlcode + "</p></div></div>";
                    // htmlcode = htmlcode + `<div id='collapse${i}' class='accordion-collapse collapse show' style='background-color:#202020' aria-labelledby='heading${i}' data-bs-parent='#accordionExample'><div class='accordion-body'>` + obj[key]["Body"] + "</div></div>";
                    // htmlcode = htmlcode + "</div>";
                    i = i+1;
                }
                htmlcode = htmlcode + "</div></div>";
                console.log(htmlcode);
                return htmlcode;
            }

            onMounted(() => {
                // new Accordion(".accordion-container");
                getData();
                temp.value = MakeAccordion(obj);
                // console.log(temp.value);
            });

            // onBeforeMount(() => {
            //     // getData();
            //     // new Accordion(".accordion-container");
            // });

            return {
                APIClient,
                APIContact,
                API1,
                API1Input,
                API1Output,
                API2,
                API2Input,
                API2Output,
                API3,
                API3Input,
                API3Output,
                getData,
                JSONData,
                // JSONToGrid,
                MakeAccordion,
                temp,
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

@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css");
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700;900&display=swap");


body {
  font-family: "Rubik", sans-serif;
}

/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}
main {
  display: block;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
pre {
  font-family: monospace, monospace;
  font-size: 1em;
}
a {
  background-color: transparent;
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
[type="button"],
[type="reset"],
[type="submit"],
button {
  -webkit-appearance: button;
}
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
progress {
  vertical-align: baseline;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
details {
  display: block;
}
summary {
  display: list-item;
}
[hidden],
template {
  display: none;
}
blockquote,
dd,
dl,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
pre {
  margin: 0;
}
button {
  background-color: transparent;
  background-image: none;
}
button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}
fieldset,
ol,
ul {
  margin: 0;
  padding: 0;
}
ol,
ul {
  list-style: none;
}
html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  line-height: 1.5;
}
*,
:after,
:before {
  box-sizing: border-box;
  border: 0 solid #e2e8f0;
}
hr {
  border-top-width: 1px;
}
img {
  border-style: solid;
}
textarea {
  resize: vertical;
}
input::-moz-placeholder,
textarea::-moz-placeholder {
  color: #a0aec0;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: #a0aec0;
}
input::-ms-input-placeholder,
textarea::-ms-input-placeholder {
  color: #a0aec0;
}
input::placeholder,
textarea::placeholder {
  color: #a0aec0;
}
[role="button"],
button {
  cursor: pointer;
}
table {
  border-collapse: collapse;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
a {
  color: inherit;
  text-decoration: inherit;
}
button,
input,
optgroup,
select,
textarea {
  padding: 0;
  line-height: inherit;
  color: inherit;
}
code,
kbd,
pre,
samp {
  font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
}
audio,
canvas,
embed,
iframe,
img,
object,
svg,
video {
  display: block;
  /* vertical-align: middle; */
}
img,
video {
  max-width: 100%;
  height: auto;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
.bg-gray-100 {
  --bg-opacity: 1;
  background-color: #f7fafc;
  background-color: rgba(247, 250, 252, var(--bg-opacity));
}
.bg-gray-800 {
  --bg-opacity: 1;
  background-color: #2d3748;
  background-color: rgba(45, 55, 72, var(--bg-opacity));
}
.bg-gray-900 {
  --bg-opacity: 1;
  background-color: #1a202c;
  background-color: rgba(26, 32, 44, var(--bg-opacity));
}
.bg-red-700 {
  --bg-opacity: 1;
  background-color: #c53030;
  background-color: rgba(197, 48, 48, var(--bg-opacity));
}
.border-gray-700 {
  --border-opacity: 1;
  border-color: #4a5568;
  border-color: rgba(74, 85, 104, var(--border-opacity));
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-full {
  border-radius: 9999px;
}
.border {
  border-width: 1px;
}
.cursor-pointer {
  cursor: pointer;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.h-8 {
  height: 2rem;
}
.m-8 {
  margin: 2rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.mt-2 {
  margin-top: 0.5rem;
}
.mr-2 {
  margin-right: 0.5rem;
}
.mb-auto {
  margin-bottom: auto;
}
.ml-auto {
  margin-left: auto;
}
.max-h-0 {
  max-height: 0;
}
.group:focus .group-focus\:max-h-screen {
  max-height: 100vh;
}
.outline-none {
  outline: 0;
}
.overflow-hidden {
  overflow: hidden;
}
.p-2 {
  padding: 0.5rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.pr-10 {
  padding-right: 2.5rem;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.top-0 {
  top: 0;
}
.right-0 {
  right: 0;
}
.bottom-0 {
  bottom: 0;
}
.text-center {
  text-align: center;
}
.text-justify {
  text-align: justify;
}
.text-white {
  --text-opacity: 1;
  color: #fff;
  color: rgba(255, 255, 255, var(--text-opacity));
}
.text-gray-400 {
  --text-opacity: 1;
  color: #cbd5e0;
  color: rgba(203, 213, 224, var(--text-opacity));
}
.text-gray-500 {
  --text-opacity: 1;
  color: #a0aec0;
  color: rgba(160, 174, 192, var(--text-opacity));
}
.group:focus .group-focus\:text-white {
  --text-opacity: 1;
  color: #fff;
  color: rgba(255, 255, 255, var(--text-opacity));
}
.w-8 {
  width: 2rem;
}
.w-full {
  width: 100%;
}
.transform {
  --transform-translate-x: 0;
  --transform-translate-y: 0;
  --transform-rotate: 0;
  --transform-skew-x: 0;
  --transform-skew-y: 0;
  --transform-scale-x: 1;
  --transform-scale-y: 1;
  transform: translateX(var(--transform-translate-x))
    translateY(var(--transform-translate-y)) rotate(var(--transform-rotate))
    skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y))
    scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));
}
.group:focus .group-focus\:-rotate-180 {
  --transform-rotate: -180deg;
}
.transition {
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
}
.duration-500 {
  transition-duration: 0.5s;
}
@media (min-width: 640px) {
  .sm\:container {
    width: 100%;
    max-width: 640px;
  }
  @media (min-width: 768px) {
    .sm\:container {
      max-width: 768px;
    }
  }
  @media (min-width: 1024px) {
    .sm\:container {
      max-width: 1024px;
    }
  }
  @media (min-width: 1280px) {
    .sm\:container {
      max-width: 1280px;
    }
  }
}
@media (min-width: 768px) {
  .md\:container {
    width: 100%;
  }
  @media (min-width: 640px) {
    .md\:container {
      max-width: 640px;
    }
  }
  @media (min-width: 768px) {
    .md\:container {
      max-width: 768px;
    }
  }
  @media (min-width: 1024px) {
    .md\:container {
      max-width: 1024px;
    }
  }
  @media (min-width: 1280px) {
    .md\:container {
      max-width: 1280px;
    }
  }
}
@media (min-width: 1024px) {
  .lg\:container {
    width: 100%;
  }
  @media (min-width: 640px) {
    .lg\:container {
      max-width: 640px;
    }
  }
  @media (min-width: 768px) {
    .lg\:container {
      max-width: 768px;
    }
  }
  @media (min-width: 1024px) {
    .lg\:container {
      max-width: 1024px;
    }
  }
  @media (min-width: 1280px) {
    .lg\:container {
      max-width: 1280px;
    }
  }
}
@media (min-width: 1280px) {
  .xl\:container {
    width: 100%;
  }
  @media (min-width: 640px) {
    .xl\:container {
      max-width: 640px;
    }
  }
  @media (min-width: 768px) {
    .xl\:container {
      max-width: 768px;
    }
  }
  @media (min-width: 1024px) {
    .xl\:container {
      max-width: 1024px;
    }
  }
  @media (min-width: 1280px) {
    .xl\:container {
      max-width: 1280px;
    }
  }
}
</style>
