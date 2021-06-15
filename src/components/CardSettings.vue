<template>
    <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
        id="details"
    >
        <div
            class="rounded-t bg-white mb-0 px-6 py-6"
            style="background-color: #303030;"
        >
            <div class="text-center flex justify-between">
                <h6
                    class="text-blueGray-700 text-xl font-bold "
                    style="color:white;"
                >
                    Get Free Vehicle Valuation
                </h6>
            </div>
        </div>

        <div
            class="flex-auto px-4 lg:px-10 py-10 pt-0"
            style="background-color: #202020;"
        >
            <form
                method="post"
                action="/details"
                @submit.prevent="firebaseDetailsSubmit"
            >
                <h6
                    class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase form-91"
                    style="color:white;"
                >
                    Your Details
                </h6>
                <div class="flex flex-wrap form-91">
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:grey;"
                            >
                                Full Name
                            </label>
                            <input
                                name="fullName"
                                type="text"
                                v-model="fullName"
                                ref="fullName"
                                required
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:grey;"
                            >
                                Email address
                            </label>
                            <input
                                name="email"
                                type="email"
                                v-model="email"
                                ref="email"
                                required
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:grey;"
                            >
                                Mobile Number
                            </label>
                            <input
                                name="mobile1"
                                type="text"
                                v-model="mobile1"
                                ref="mobile1"
                                required
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:grey;"
                            >
                                Confirm Mobile Number
                            </label>
                            <input
                                name="mobile2"
                                type="text"
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>
                </div>

                <!-- <hr class="mt-6 border-b-1 border-blueGray-300 form-91" /> -->

                <!-- <h6
                    class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase form-91"
                    style="color:white;"
                >
                    Optional Information
                </h6> -->
                <div class="flex flex-wrap form-91">
                    <div class="w-full lg:w-12/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:grey;"
                            >
                                Address
                            </label>
                            <input
                                name="address"
                                type="text"
                                v-model="address"
                                ref="address"
                                required
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-4/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:grey;"
                            >
                                Town
                            </label>
                            <input
                                name="town"
                                type="text"
                                v-model="town"
                                ref="town"
                                required
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-4/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:grey;"
                            >
                                County
                            </label>
                            <input
                                name="county"
                                type="text"
                                v-model="county"
                                ref="county"
                                required
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-4/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:grey;"
                            >
                                Post Code
                            </label>
                            <input
                                name="post"
                                type="text"
                                v-model="post"
                                ref="post"
                                required
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>
                </div>

                <hr class="mt-6 border-b-1 border-blueGray-300 form-91" />

                <h6
                    class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase form-91"
                    style="color:white;"
                >
                    Vehicle Details
                </h6>
                <div class="flex flex-wrap form-91">
                    

                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:grey;"
                            >
                                Vehicle Mileage
                            </label>
                            <input
                                name="mileage"
                                type="text"
                                v-model="mileage"
                                ref="mileage"
                                required
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>



                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:grey;"
                            >
                                Any Scratches or Dents?
                            </label>
                            <input
                                name="scratchDents"
                                type="text"
                                v-model="scratchDents"
                                ref="scratchDents"
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Optional"
                            />
                        </div>
                    </div>




                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:grey;"
                            >
                                Any Mechanical or Electrical Details?
                            </label>
                            <input
                                name="mechElectrical"
                                type="text"
                                v-model="mechElectrical"
                                ref="mechElectrical"
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Optional"
                            />
                        </div>
                    </div>




                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:grey;"
                            >
                                Any warning lights on the Dashboard?
                            </label>
                            <input
                                name="warnLights"
                                type="text"
                                v-model="warnLights"
                                ref="warnLights"
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Optional"
                            />
                        </div>
                    </div>



                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:grey;"
                            >
                                For how long you have this vehicle?
                            </label>
                            <input
                                name="howLong"
                                type="text"
                                v-model="howLong"
                                ref="howLong"
                                required
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>
                    
                    <div class="w-full lg:w-12/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:grey;"
                            >
                                More Details
                            </label>
                            <textarea
                                name="details"
                                v-model="details"
                                ref="details"
                                required
                                placeholder="Enter details about Vehicle Mileage? How Long you had this vehicle? Deoes the vehicle has any mechanical issues? Any more details which can expedite the process?"
                                type="text"
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                rows="4"
                            >
                            </textarea>
                        </div>
                    </div>
                </div>
                <input type="hidden" name="regNo" value="{{ regNo }}" />
                <input type="hidden" name="make" value="{{ make }}" />
                <input type="hidden" name="model" value="{{ model }}" />
                <input type="hidden" name="color" value="{{ color }}" />
                <div
                    class="form-91"
                    style="display: grid; place-items: center;"
                >
                    <button
                        type="submit"
                        class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        style="background-color: #fdcc04;min-height:80px;max-height:80px;font-size:20px;"
                    >
                        Get Free Vehicle Valuation
                    </button>
                </div>

                <div class="container-89">
                    <div class="form-sent-89">
                        <br />
                        <p style="color:#bb86fc;">
                            {{ formSent1
                            }}

                            <router-link
                            to="/details#valuation"
                            v-scroll-to="'#valuation'"
                            style="font-weight:bold;display:inline;"
                            >
                            {{formSent1a}}
                            </router-link>

                            {{formSent1b}}
                            <span style="font-weight:bold">{{
                                formSent2
                            }}</span
                            >{{ formSent3 }}
                        </p>
                        <!-- {{ API1Value }} <br/><br/><br/> {{ API2Value }} -->
                    </div>
                </div>

                <!-- {{ regNo }}
        {{ make }}
        {{model}}
        {{color}} -->
            </form>
        </div>
    </div>
</template>

<script>
    import firebase from "firebase";
    // import axios from "axios";
    // import { ref } from 'vue';
    // import VueCookies from 'vue3-cookies';

    export default {
        setup() {
            // const firebaseDetailsSubmit = async () => {
            //   user = "{"+
            //     "\"name\": \""regNo+"\", "+
            //     "\"email\": \""+email.value+"\", "+
            //     "\"message\": \""+message.value+"\""+
            //     "}";
            //   user = JSON.parse(user);
            //   // console.log(user);
            //   const db = firebase.firestore();
            //   await db
            //     .collection('contactus')
            //     // .doc('contactus')
            //     // .set(user)
            //     .add(user)
            //     .then(
            //       console.log("Data entered into Google Cloud DB")
            //     )
            //     .catch(e => console.log(e));

            //     formSent.value = "Message sent successfully.";
            // }

            // var regNo = ref();
            // var make = ref();
            // var model = ref();
            // var color = ref();

            // regNo = this.$cookies.get('regNo');
            // make = this.$cookies.get('make');
            // model = this.$cookies.get('model');
            // color = this.$cookies.get('color');

            // console.log(regNo);

            return {
                // firebaseDetailsSubmit,
                // regNo,
                // make,
                // model,
                // color,
            };
        },

        data() {
            return {
                regNo: this.$cookies.get("regNo"),
                make: this.$cookies.get("make"),
                model: this.$cookies.get("model"),
                fuel: this.$cookies.get("fuel"),
                // color: this.$cookies.get("color"),
                fullName: "",
                email: "",
                mobile1: "",
                address: "",
                town: "",
                county: "",
                post: "",
                details: "",
                mileage: "",
                howLong: "",
                scratchDents: "",
                mechElectrical: "", 
                warnLights: "",
                created: "",
                formSent1: "",
                formSent1a: "",
                formSent1b: "",
                formSent2: "",
                formSent3: "",
                // valTrade: "",
                // valPrivate: "",
                // ref: "",
                // miles: "",
                // third: "",
            };
        },

        methods: {
            async firebaseDetailsSubmit() {
                // console.log(this.regNo);
                // console.log(this.$refs.fullName.value);
                // console.log(this.$refs.email.value);
                // console.log(this.$refs.mobile1.value);
                // console.log(this.$refs.address.value);
                // console.log(this.$refs.city.value);
                // console.log(this.$refs.country.value);
                // console.log(this.$refs.post.value);
                // console.log(this.$refs.details.value);
                var client =
                    "{" +
                    '"CarRegistrationNumber": "' +
                    this.regNo +
                    '", ' +
                    "\"CarMake\": \""+this.make+"\", "+
                    "\"CarModel\": \""+this.model+"\", "+
                    // "\"Car Color\": \""+this.color+"\", "+
                    '"ClientName": "' +
                    this.$refs.fullName.value +
                    '", ' +
                    '"ClientEmail": "' +
                    this.$refs.email.value +
                    '", ' +
                    '"ClientMobile": "' +
                    this.$refs.mobile1.value +
                    '", ' +
                    '"ClientAddress": "' +
                    this.$refs.address.value +
                    '", ' +
                    '"ClientTown": "' +
                    this.$refs.town.value +
                    '", ' +
                    '"ClientCounty": "' +
                    this.$refs.county.value +
                    '", ' +
                    '"ClientPostCode": "' +
                    this.$refs.post.value +
                    '", ' +
                    '"CarID": "' +
                    new Date().getTime() +
                    '", ' +
                    '"CarTimestamp": "' +
                    new Date() +
                    '", ' +
                    '"CarMileage": "' +
                    this.$refs.mileage.value +
                    '", ' +
                    '"CarFuelType": "' +
                    this.fuel +
                    '", ' +
                    '"CarOwnershipTime": "' +
                    this.$refs.howLong.value +
                    '", ' +
                    '"CarDetails": "' +
                    this.$refs.details.value +
                    '",' +
                    '"CarScratchDents": "' +
                    this.$refs.scratchDents.value +
                    '",' +
                    '"CarMechElecDetails": "' +
                    this.$refs.mechElectrical.value +
                    '",' +
                    '"CarValueTrade": "' +
                    this.$cookies.get("valTrade") +
                    '",' +
                    '"CarValuePrivate": "' +
                    this.$cookies.get("valPrivate") +
                    '",' +
                    '"CarWarnLights": "' +
                    this.$refs.warnLights.value +
                    '"' +
                    "}";
                console.log(client);
                client = JSON.parse(client);

                // console.log(this.api1);
                // console.log(typeof this.api1);
                // var api1 = this.api1;
                // var api1 = JSON.parse(this.api1);

                const db = firebase.firestore();

                await db
                    .collection("APIClient")
                    // .doc(this.regNo)
                    .add(client)
                    // .add(client)
                    .then(() => {
                        console.log(
                            "Client Details Data entered into Google Cloud DB"
                        );
                        var x = document.getElementsByClassName("form-91");
                        for (var i = 0; i < x.length; i++) {
                            x[i].style.display = "none";
                        }
                        // x = document.getElementsByClassName("form-92");
                        // x[0].style.display = "initial"
                        this.formSent1 =
                            "Your message was sent successfully and ";
                        this.formSent1a = "here";
                        this.formSent1b = " is your vehicle's rough valuation. An email has also been sent to you for the record. We will get back at you within 24 hours. Furthermore, you can always call us anytime at ";
                        this.formSent2 = "020 8991 2655";
                        this.formSent3 = " for any further queries.";
                        document.getElementById('details').scrollIntoView();


                        var doc = document.getElementsByClassName("valuation");
                        // doc[0].style.display = "block";
                        for (var j = 0; j < doc.length; j++) {
                            doc[j].style.display = "block";
                        }

                    })
                    .catch((e) => console.log(e));
            },

        },
        mounted() {
            // this.API1();
            // this.API2();
        },
    };
</script>

<style scoped>
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
