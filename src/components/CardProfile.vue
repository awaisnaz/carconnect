<template>
    <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16"
        style="background-color: #303030;"
    >
        <div class="px-6">
            <div class="flex flex-wrap justify-center">
                <div class="w-full px-4 flex justify-center">
                    <div class="relative">
                        <img
                            alt="..."
                            :src="team2"
                            class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                        />
                    </div>
                </div>

                <div class="container-66">
                    <div class="item-2">
                        <div class="mr-4 text-center">
                            <span
                                class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                                style="color:white;"
                            >
                                VEHICLE REG. NO.
                            </span>
                            <span
                                class="text-sm text-blueGray-400"
                                style="color:grey;"
                                >{{regNo}}</span
                            >
                        </div>
                    </div>
                    <div class="item-3">
                        <div class="mr-4 p-3 text-center">
                            <span
                                class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                                style="color:white;"
                            >
                                Make
                            </span>
                            <span
                                class="text-sm text-blueGray-400"
                                style="color:grey;"
                                >{{make}}</span
                            >
                        </div>
                    </div>
                    <div class="item-4">
                        <div class="mr-4 p-3 text-center">
                            <span
                                class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                                style="color:white;"
                            >
                                Model
                            </span>
                            <span
                                class="text-sm text-blueGray-400"
                                style="color:grey;"
                                >{{model}}</span
                            >
                        </div>
                    </div>
                    <div class="item-5">
                        <div class="lg:mr-4 p-3 text-center">
                            <span
                                class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                                style="color:white;"
                            >
                                Color
                            </span>
                            <span
                                class="text-sm text-blueGray-400"
                                style="color:grey;"
                                >{{color}}</span
                            >
                        </div>
                    </div>
                    <div class="item-6 item-border-top">
                        <div class="lg:mr-4 p-3 text-center">
                            <span
                                class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                                style="color:white;"
                            >
                                YOUR VALUATION RANGE
                            </span>
                            <span
                                class="text-sm text-blueGray-400"
                                style="color:grey;"
                                >£ {{valTrade}} - {{valPrivate}}</span
                            >
                        </div>
                    </div>
                    <div class="item-7">
                        <div class="lg:mr-4 p-3 text-center">
                            <span
                                class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                                style="color:white;white-space:nowrap;"
                            >
                                REF. NO.
                            </span>
                            <span
                                class="text-sm text-blueGray-400"
                                style="color:grey;white-space:nowrap;"
                                >{{ref}}</span
                            >
                        </div>
                    </div>
                    <div class="item-8">
                        <div class="lg:mr-4 p-3 text-center">
                            <span
                                class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                                style="color:white;"
                            >
                                MILES
                            </span>
                            <span
                                class="text-sm text-blueGray-400"
                                style="color:grey;"
                                >{{miles}}</span
                            >
                        </div>
                    </div>
                    <div class="item-9">
                        <div class="lg:mr-4 p-3 text-center">
                            <span
                                class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                                style="color:white;"
                            >
                                Description
                            </span>
                            <span
                                class="text-sm text-blueGray-400"
                                style="color:grey;"
                                >{{desc}}</span
                            >
                        </div>
                    </div>
                    <div class="item-10">
                        <span
                            class="text-sm text-blueGray-400"
                            style="color:grey;"
                            >The above price range is estimated and based on
                            some assumptions. A final valuation will be given on
                            inspection.</span
                        >
                    </div>
                    <div class="item-11 item-border-top">
                        <div class="lg:mr-4 p-3">
                            <span
                                class="text-xl font-bold block uppercase tracking-wide text-blueGray-600 text-center"
                                style="color:white;"
                            >
                                ABOUT YOUR VALUATION
                            </span><br/>
                            <span
                                class="text-sm text-blueGray-400 text-left"
                                style="color:grey;"
                            >
                                The valuation is based on current market prices
                                and the details you have entered. The valuation
                                is not a confirmed price. The final value of
                                your vehicle will be given after inspecting your
                                vehicle. Following factors can determine the
                                vehicle value.
                            </span><br/><br/>
                            <ul
                                class="text-sm text-blueGray-400 text-left"
                                style="color:grey;"
                            >
                                <li>
                                    <div>
                                        <span
                                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                            style="margin-bottom:2px;"
                                        >
                                            <!-- <i class="fas fa-fingerprint"></i> -->
                                            <i class="far fa-paper-plane" ></i>
                                        </span>
                                        <span>MOT</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span
                                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                            style="margin-bottom:2px;"
                                        >
                                            <!-- <i class="fas fa-fingerprint"></i> -->
                                            <i class="far fa-paper-plane"></i>
                                        </span>
                                        <span>Service History</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span
                                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                            style="margin-bottom:2px;"
                                        >
                                            <!-- <i class="fas fa-fingerprint"></i> -->
                                            <i class="far fa-paper-plane"></i>
                                        </span>
                                        <span>Number of owners</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span
                                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                            style="margin-bottom:2px;"
                                        >
                                            <!-- <i class="fas fa-fingerprint"></i> -->
                                            <i class="far fa-paper-plane"></i>
                                        </span>
                                        <span>Insurance written off</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span
                                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                            style="margin-bottom:2px;"
                                        >
                                            <!-- <i class="fas fa-fingerprint"></i> -->
                                            <i class="far fa-paper-plane"></i>
                                        </span>
                                        <span>Insurance stollen</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span
                                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                            style="margin-bottom:2px;"
                                        >
                                            <!-- <i class="fas fa-fingerprint"></i> -->
                                            <i class="far fa-paper-plane"></i>
                                        </span>
                                        <span>Accident Damage</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span
                                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                            style="margin-bottom:2px;"
                                        >
                                            <!-- <i class="fas fa-fingerprint"></i> -->
                                            <i class="far fa-paper-plane"></i>
                                        </span>
                                        <span>Category vehicle</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span
                                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                            style="margin-bottom:2px;"
                                        >
                                            <!-- <i class="fas fa-fingerprint"></i> -->
                                            <i class="far fa-paper-plane"></i>
                                        </span>
                                        <span>Financed</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span
                                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                            style="margin-bottom:2px;"
                                        >
                                            <!-- <i class="fas fa-fingerprint"></i> -->
                                            <i class="far fa-paper-plane"></i>
                                        </span>
                                        <span>Imported Vehicle</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span
                                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                            style="margin-bottom:2px;"
                                        >
                                            <!-- <i class="fas fa-fingerprint"></i> -->
                                            <i class="far fa-paper-plane"></i>
                                        </span>
                                        <span>Exported Vehicle</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span
                                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                            style="margin-bottom:2px;"
                                        >
                                            <!-- <i class="fas fa-fingerprint"></i> -->
                                            <i class="far fa-paper-plane"></i>
                                        </span>
                                        <span>Mechanical Condition</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span
                                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                            style="margin-bottom:2px;"
                                        >
                                            <!-- <i class="fas fa-fingerprint"></i> -->
                                            <i class="far fa-paper-plane"></i>
                                        </span>
                                        <span>Electrical Condition
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span
                                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                            style="margin-bottom:2px;"
                                        >
                                            <!-- <i class="fas fa-fingerprint"></i> -->
                                            <i class="far fa-paper-plane"></i>
                                        </span>
                                        <span>Interior Condition</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span
                                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                            style="margin-bottom:2px;"
                                        >
                                            <!-- <i class="fas fa-fingerprint"></i> -->
                                            <i class="far fa-paper-plane"></i>
                                        </span>
                                        <span>Cleanliness</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span
                                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                            style="margin-bottom:2px;"
                                        >
                                            <!-- <i class="fas fa-fingerprint"></i> -->
                                            <i class="far fa-paper-plane"></i>
                                        </span>
                                        <span>Leather seats, etc.</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span
                                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                            style="margin-bottom:2px;"
                                        >
                                            <!-- <i class="fas fa-fingerprint"></i> -->
                                            <i class="far fa-paper-plane"></i>
                                        </span>
                                        <span>Sat Nav, Stereo</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span
                                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                            style="margin-bottom:2px;"
                                        >
                                            <!-- <i class="fas fa-fingerprint"></i> -->
                                            <i class="far fa-paper-plane"></i>
                                        </span>
                                        <span>Body Condition</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span
                                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                            style="margin-bottom:2px;"
                                        >
                                            <!-- <i class="fas fa-fingerprint"></i> -->
                                            <i class="far fa-paper-plane"></i>
                                        </span>
                                        <span>Paint Condition</span>
                                    </div>
                                </li>
                                    <div>
                                        <span
                                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                            style="margin-bottom:2px;"
                                        >
                                            <!-- <i class="fas fa-fingerprint"></i> -->
                                            <i class="far fa-paper-plane"></i>
                                        </span>
                                        <span>Tyres</span>
                                    </div>
                                <li>
                                    <div>
                                        <span
                                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                            style="margin-bottom:2px;"
                                        >
                                            <!-- <i class="fas fa-fingerprint"></i> -->
                                            <i class="far fa-paper-plane"></i>
                                        </span>
                                        <span>Any extra feature</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-12 item-border-top">
                        <div class="flex flex-wrap justify-center">
                            <br />

                            <p style="color:grey;">
                                Not your Vehicle?
                                <a href="/" style="color:white;">Click here</a>
                            </p>
                            <br /><br/>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div
                    class="w-full px-4 text-center mt-20 text-center mt-12"
                    style="display: grid; grid-template-rows: 1fr 1fr; grid-template-areas: 'main' 'details';"
                >
                    <div
            class="text-xl leading-normal mt-0 text-blueGray-400 font-bold uppercase" style="color:grey;"
          >
            <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" style="justify: left; grid-area: details;"></i> 
            {{ regNo }}
          </div>
                    <div class="mb-2 text-blueGray-600 mt-10">
            <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
            Solution Manager - Creative Tim Officer
          </div>
          <div class="mb-2 text-blueGray-600">
            <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
            University of Computer Science
          </div>
                </div> -->
            <!-- <div class="w-full px-4 text-center ">
                    <div class="flex justify-center py-4 lg:pt-4 ">



                    </div>
                </div> -->

            <!-- <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="w-full lg:w-9/12 px-4">
            <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
              An artist of considerable range, Jenna the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and
              records all of his own music, giving it a warm, intimate feel with
              a solid groove structure. An artist of considerable range.
            </p>
            <a href="javascript:void(0);" class="font-normal text-emerald-500">
              Show more
            </a>
            
          </div>
            </div> -->
        </div>
    </div>
</template>
<script>
    // import team2 from "@/assets/img/team-2-800x800.jpg";
    import team2 from "@/assets/logo_grey_subtitle_car_only.png";
    // import Vehicle from "@/components/Cards/Vehicle.vue";

    import firebase from "firebase";
    import axios from "axios";

    export default {
        data() {
            return {
                team2,
                API1Value: this.$cookies.get("API1"),
                API2Value: "",
                regNo: "",
                make: "",
                model: "",
                color: "",
                valTrade: "",
                valPrivate: "",
                ref: "",
                miles: "",
                desc: "",
            };
        },
        methods: {
            async API1() {
                const db = firebase.firestore();
                await db
                    .collection("API1")
                    .doc(this.API1Value.registrationNumber)
                    .set(this.API1Value)
                    .then(() => {
                        // console.log("API1 Data entered into Firestore.");
                        // console.log(this.API1Value);
                        // this.formSent = "Message sent successfully.";
                        this.regNo = this.API1Value.registrationNumber;
                        this.make = this.API1Value.make;
                        this.model = this.API1Value.yearOfManufacture;
                        this.color = this.API1Value.colour;
                    })
                    .catch((e) => console.log(e));
            },

            async API2() {
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
                    this.API1Value.registrationNumber;
                await axios
                    .get(URL)
                    .then((response) => {
                        this.API2Value = response.data;
                        console.log("API2 Data fetced from the website.");
                        // console.log(typeof this.API2Value);
                        // console.log(this.API2Value);
                        // console.log(this.API2Value.Response.DataItems.ValuationList.TradeAverage);
                        
                        this.ref = `${this.API2Value.Response.DataItems.Vrm}-${(new Date().getFullYear())}`;
                        this.miles = this.API2Value.Response.DataItems.Mileage;
                        this.desc = this.API2Value.Response.DataItems.VehicleDescription;
                        this.valTrade = this.API2Value.Response.DataItems.ValuationList.TradeAverage;
                        this.valPrivate = this.API2Value.Response.DataItems.ValuationList.PrivateAverage;

                        // this.$cookies.set(
                        //     "valTrade",
                        //     this.API2Value.Response.DataItems.ValuationList
                        //         .TradeAverage
                        // );
                        // this.$cookies.set(
                        //     "valPrivate",
                        //     this.API2Value.Response.DataItems.ValuationList
                        //         .PrivateAverage
                        // );
                        // this.$cookies.set(
                        //     "ref",
                        //     `${this.regNo}-${new Date().getFullYear()}`
                        // );
                        // this.$cookies.set(
                        //     "miles",
                        //     this.API2Value.Response.DataItems.Mileage
                        // );
                        // this.$cookies.set(
                        //     "desc",
                        //     this.API2Value.Response.DataItems.VehicleDescription
                        // );

                        const db = firebase.firestore();
                        db.collection("API2")
                            // .add(this.API2Value)
                            .doc(this.API1Value.registrationNumber)
                            .set(this.API2Value)
                            .then(
                                console.log("API2 Data entered into Firestore.")
                            )
                            .catch((e) => console.log(e));
                    })
                    .catch((e) => console.log(e));
            },

        },
        mounted() {
            this.API1();
            this.API2();
        },
        components: {
            // Vehicle,
        },
    };
</script>

<style scoped>
    .container-66 {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
        grid-template-rows: minmax(0, auto) minmax(0, auto) minmax(0, auto) minmax(0, auto) minmax(0, auto) minmax(0, auto) minmax(0, auto);
        grid-gap: 1em 1em;
        place-items: center center;
        place-content: center center;
        margin-top: 90px;
    }

    .item-2 {
        grid-area: 1 / 1 / 2 / 4;
        place-self: start center;
    }

    .item-3 {
        grid-area: 2 / 1 / 3 / 2;
        place-self: start center;
    }

    .item-4 {
        grid-area: 2 / 2 / 3 / 3;
        place-self: start center;
    }

    .item-5 {
        grid-area: 2 / 3 / 3 / 4;
        place-self: start center;
    }

    .item-6 {
        grid-area: 3 / 1 / 4 / 4;
        place-self: start center;
    }

    .item-7 {
        grid-area: 4 / 1 / 5 / 2;
        place-self: start center;
    }

    .item-8 {
        grid-area: 4 / 2 / 5 / 3;
        place-self: start center;
    }

    .item-9 {
        grid-area: 4 / 3 / 5 / 4;
        place-self: start center;
    }

    .item-10 {
        grid-area: 5 / 1 / 6 / 4;
        place-self: start center;
    }

    .item-11 {
        grid-area: 6 / 1 / 7 / 4;
        place-self: start start;
    }

    .item-12 {
        grid-area: 7 / 1 / 8 / 4;
        place-self: start center;
    }

    .item-border-top {
        /* position: relative; */
        border-top: 2px solid grey;
        padding-top: 10px;
        width: 100%;
    }
</style>
