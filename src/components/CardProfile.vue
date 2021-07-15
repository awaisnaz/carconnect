<template>
    <div
        class="relative min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg "
        style="display:grid;grid-template-rows:repeat(auto-fit, minmax(100px, 1fr));grid-gap:10px;background-color:#303030;padding:20px;"
    >
        <div
            class="w-full px-4 relative;"
            style="display:grid;grid-template-rows:repeat(auto-fit, minmax(100px, 1fr));grid-gap:10px;place-content:center;"
        >
            <div>
                <img
                    alt="..."
                    :src="team2"
                    class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
            </div>
        </div>
        <div class="mr-4 text-center">
            <span
                class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                style="color:white;"
            >
                VEHICLE REG. NO.
            </span>
            <span
                class="text-2xl text-blueGray-400"
                style="color:#fdcc04;font-weight: bold;"
                >{{ regNo }}</span
            >
        </div>
        <div
            style="display:grid;grid-template-rows:repeat(auto-fit, minmax(100px, 1fr));grid-gap:10px;"
        >
            <div
                style="display:grid;grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));grid-gap:10px;place-content:center;"
            >
                <div>
                    <span
                        class="text-xl font-bold block uppercase tracking-wide text-blueGray-600 "
                        style="color:white;"
                    >
                        Make
                    </span>
                    <span
                        class="text-xl text-blueGray-400"
                        style="color:#fdcc04;font-weight: bold;"
                        >{{ make }}</span
                    >
                </div>
                <div>
                    <span
                        class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                        style="color:white;"
                    >
                        Model
                    </span>
                    <span
                        class="text-xl text-blueGray-400"
                        style="color:#fdcc04;font-weight: bold;"
                        >{{ model }}</span
                    >
                </div>
                <div>
                    <span
                        class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                        style="color:white;"
                    >
                        Color
                    </span>
                    <span
                        class="text-xl text-blueGray-400"
                        style="color:#fdcc04;font-weight: bold;"
                        >{{ color }}</span
                    >
                </div>
                <div>
                    <span
                        class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                        style="color:white;"
                    >
                        Tax
                    </span>
                    <span
                        class="text-xl text-blueGray-400"
                        style="color:#fdcc04;font-weight: bold;"
                        >{{ tax }}</span
                    >
                </div>
                <div>
                    <span
                        class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                        style="color:white;"
                    >
                        MOT EXPIRY DATE
                    </span>
                    <span
                        class="text-xl text-blueGray-400"
                        style="color:#fdcc04;font-weight: bold;"
                        >{{ mot }}</span
                    >
                </div>
            </div>
            <SectionFive id="valuation" />
            <div class="valuation item-border-top">
                    <div class="lg:mr-4 p-3 text-center">
                        <span
                            class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                            style="color:white;"
                        >
                            YOUR VALUATION RANGE
                        </span>
                        <span
                            class="text-5xl text-blueGray-400"
                            style="color:#ff6745;font-weight: bold;"
                            >£ {{val1}} - {{val2}}</span
                        >
                    </div>
            </div>
            <div
                style="display:grid;grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));grid-gap:10px;place-content:center;"
            >
                

                <div class="valuation">
                    <div class="lg:mr-4 p-3 text-center">
                        <span
                            class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                            style="color:white;white-space:nowrap;"
                        >
                            REF. NO.
                        </span>
                        <span
                            class="text-xl text-blueGray-400"
                            style="color:#ff6745;font-weight: bold;white-space:nowrap;"
                            >{{ ref }}</span
                        >
                    </div>
                </div>
                <div class="valuation">
                    <div class="lg:mr-4 p-3 text-center">
                        <span
                            class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                            style="color:white;"
                        >
                            MILES
                        </span>
                        <span
                            class="text-xl text-blueGray-400"
                            style="color:#ff6745;font-weight: bold;"
                            >{{ miles }}</span
                        >
                    </div>
                </div>
                <div class="valuation">
                    <div class="lg:mr-4 p-3 text-center">
                        <span
                            class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                            style="color:white;white-space:nowrap;"
                        >
                            Description
                        </span>
                        <span
                            class="text-xl text-blueGray-400"
                            style="color:#ff6745;font-weight: bold;"
                            >{{ desc }}</span
                        >
                    </div>
                </div>
            </div>
            <div class="valuation item-border-top">
                <div class="container-89">
                    <div id="form-sent-89">
                        <br />
                        <p
                            class="text-2xl text-blueGray-400"
                            style="color:#66c4eb;font-weight: bold;display:block;"
                        >
                            If you are happy with the above valuation, please click the Proceed button below.
                        </p>
                        <br />
                        <!-- <p class="text-5xl text-blueGray-400" style="color:#bb171e;font-weight: bold;text-align: center;display:block;">020 8991 2655</p><br/> -->
                        <form method="post" @submit.prevent="proceed">
                            <div
                                style="display:grid;grid-template-columns:auto;grid-template-rows:auto;justify-content:center;align-content:center;"
                            >
                                <button
                                    type="submit"
                                    class="submit-btn bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xl px-4 py-2 shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    style="background-color: #fdcc04;min-height:80px;max-height:80px;"
                                >
                                    PROCEED
                                </button>
                            </div>
                        </form>
                        <br />
                        <p
                            class="text-2xl text-blueGray-400"
                            style="color:#66c4eb;font-weight: bold;display:block;"
                        >
                            An email has been sent to you. Please check your
                            inbox.
                        </p>
                        <br />
                        <!-- {{ API1Value }} <br/><br/><br/> {{ API2Value }} -->
                    </div>
                    <div id="form-sent-90">
                        <br />
                        <p
                            class="text-2xl text-blueGray-400"
                            style="color:#04aa6d;font-weight: bold;display:block;"
                        >
                            We have received your message and we will get back
                            to your within 24 hours.
                        </p>
                        <br />
                        <!-- <p class="text-5xl text-blueGray-400" style="color:#bb171e;font-weight: bold;text-align: center;display:block;">020 8991 2655</p><br/> -->
                        <!-- {{ API1Value }} <br/><br/><br/> {{ API2Value }} -->
                    </div>
                </div>
            </div>
            <div class="valuation item-border-top">
                <div class="lg:mr-4 p-3">
                    <span
                        class="text-xl font-bold block uppercase tracking-wide text-blueGray-600 text-center"
                        style="color:white;"
                    >
                        ABOUT YOUR VALUATION </span
                    ><br />
                    <span class="text-sm text-blueGray-400" style="color:grey;"
                        >The above price range is estimated and based on some
                        assumptions. A final valuation will be given on
                        inspection.</span
                    >
                    <span
                        class="text-sm text-blueGray-400 text-left"
                        style="color:grey;"
                    >
                        The valuation is based on current market prices and the
                        details you have entered. The valuation is not a
                        confirmed price. The final value of your vehicle will be
                        given after inspecting your vehicle. Following factors
                        can determine the vehicle value. </span
                    ><br /><br />
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
                                    <i class="far fa-paper-plane"></i>
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
                                <span>Electrical Condition </span>
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
            <div class="item-border-top">
                <div class="flex flex-wrap justify-center">
                    <br />

                    <p style="color:white;">
                        Not your Vehicle?
                        <a href="/" style="color:white;">Click here</a>
                    </p>
                    <br /><br />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    // import team2 from "@/assets/img/team-2-800x800.jpg";
    import team2 from "@/assets/logo2.png";
    // import Vehicle from "@/components/Cards/Vehicle.vue";

    // import firebase from "firebase";
    import firebase from 'firebase/app';
    import 'firebase/auth';
    import 'firebase/firestore';

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
                val1: "",
                val2: "",
                ref: "",
                miles: "",
                desc: "",
                tax: "",
                mot: "",
                formSent: this.$cookies.get("formSent"),
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
                        this.tax = this.API1Value.taxStatus;
                        if(this.API1Value.motExpiryDate) this.mot = this.API1Value.motExpiryDate;
                        else this.mot = "Unknown";
                    })
                    .catch((e) => console.log(e));
            },

            async API2() {
                
                // console.log(this.API1Value.registrationNumber);

                axios.get('/api2', {
                    params: {
                        axiosRegNo: this.API1Value.registrationNumber
                    }
                })
                    .then((response) => {
                        // console.log("hi"); 
                        // console.log(response.data);

                        this.API2Value = response.data;
                        console.log("API2 Data fetced from the DVLA API website.");
                        this.ref = `${
                            this.API2Value.Response.DataItems.Vrm
                        }-${new Date().getFullYear()}`;
                        this.$cookies.set("ref", this.ref);
                        this.miles = this.API2Value.Response.DataItems.Mileage;
                        this.$cookies.set("miles", this.miles);
                        this.desc = this.API2Value.Response.DataItems.VehicleDescription;
                        this.$cookies.set("desc", this.desc);
                        this.val1 = this.API2Value.Response.DataItems.ValuationList.TradePoor;
                        this.$cookies.set("val1", this.val1);
                        this.val2 = this.API2Value.Response.DataItems.ValuationList.TradeAverage;
                        this.$cookies.set("val2", this.val2);

                        const db = firebase.firestore();
                        db.collection("API2")
                            .doc(this.API1Value.registrationNumber)
                            .set(this.API2Value)
                            .then(
                                console.log("API2 Data entered into Firestore.")
                            )
                            .catch((e) => console.log(e));


                        })
                    .catch((e) => console.log(e));


                // var URL =
                //     "https://uk1.ukvehicledata.co.uk/api/datapackage/ValuationData?v=2&api_nullitems=1&auth_apikey=87715f2c-f6a3-4f77-8527-94511f3ee5a4&key_VRM=" +
                //     this.API1Value.registrationNumber;
                // await axios
                //     .get(URL)
                //     .then((response) => {

                //         console.log("hi2"); console.log(response);

                //         this.API2Value = response.data;
                //         console.log("API2 Data fetced from the DVLA API website.");
                //         this.ref = `${
                //             this.API2Value.Response.DataItems.Vrm
                //         }-${new Date().getFullYear()}`;
                //         this.$cookies.set("ref", this.ref);
                //         this.miles = this.API2Value.Response.DataItems.Mileage;
                //         this.$cookies.set("miles", this.miles);
                //         this.desc = this.API2Value.Response.DataItems.VehicleDescription;
                //         this.$cookies.set("desc", this.desc);
                //         this.val1 = this.API2Value.Response.DataItems.ValuationList.TradePoor;
                //         this.$cookies.set("val1", this.val1);
                //         this.val2 = this.API2Value.Response.DataItems.ValuationList.TradeAverage;
                //         this.$cookies.set("val2", this.val2);

                //         const db = firebase.firestore();
                //         db.collection("API2")
                //             .doc(this.API1Value.registrationNumber)
                //             .set(this.API2Value)
                //             .then(
                //                 console.log("API2 Data entered into Firestore.")
                //             )
                //             .catch((e) => console.log(e));
                //     })
                //     .catch((e) => console.log(e));
            },

            async proceed() {
                const db = firebase.firestore();
                await db
                    .collection("APIClient")
                    .doc(this.regNo)
                    .update({
                        Proceed: "yes",
                    })
                    .then(() => {
                        console.log("APIClient updated successfully!");
                        document.getElementById("form-sent-89").style.display =
                            "none";
                        document.getElementById("form-sent-90").style.display =
                            "block";
                    });
            },
        },
        mounted() {
            this.API1();
            this.API2();
            this.formSent = this.$cookies.get("formSent");
            if (this.formSent == "0") {
                var doc = document.getElementsByClassName("valuation");
                for (var i = 0; i < doc.length; i++) {
                    doc[i].style.display = "none";
                }
                document.getElementById("form-sent-89").style.display = "none";
                document.getElementById("form-sent-90").style.display = "none";
            }
            if (this.formSent == "1") {
                var doc2 = document.getElementsByClassName("valuation");
                for (var j = 0; j < doc2.length; j++) {
                    doc2[j].style.display = "block";
                }
                document.getElementById("form-sent-89").style.display = "block";
                document.getElementById("form-sent-90").style.display = "none";
            }
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
        grid-template-rows:
            minmax(0, auto) minmax(0, auto) minmax(0, auto) minmax(0, auto)
            minmax(0, auto) minmax(0, auto) minmax(0, auto) minmax(0, auto);
        /* grid-gap: 1em 1em; */
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

    .item-5a {
        grid-area: 3 / 1 / 4/ 2;
        place-self: start center;
    }

    .item-5b {
        grid-area: 3 / 2 / 4 / 3;
        place-self: start center;
    }

    .item-5c {
        grid-area: 3 / 3 / 4 / 4;
        place-self: start center;
    }

    .item-6 {
        grid-area: 4 / 1 / 5 / 4;
        place-self: start center;
    }

    .item-7 {
        grid-area: 5 / 1 / 6 / 2;
        place-self: start center;
    }

    .item-8 {
        grid-area: 5 / 2 / 6 / 3;
        place-self: start center;
    }

    .item-9 {
        grid-area: 5 / 3 / 6 / 4;
        place-self: start center;
    }

    .item-10 {
        grid-area: 6 / 1 / 7 / 4;
        place-self: start center;
    }

    .item-11 {
        grid-area: 7 / 1 / 8 / 4;
        place-self: start start;
    }

    .item-12 {
        grid-area: 8 / 1 / 9 / 4;
        place-self: start center;
    }

    .item-border-top {
        /* position: relative; */
        border-top: 2px solid grey;
        padding-top: 10px;
        width: 100%;
    }

    .container-89 {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-auto-columns: 1fr;
        grid-auto-rows: 1fr;
        grid-gap: 1em 1em;
        place-items: center center;
        place-content: center center;
    }

    .form-sent-89 {
        grid-area: 1 / 1 / 2 / 2;
        place-self: center center;
    }
</style>
