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
                    class="text-blueGray-700 text-xl font-bold uppercase"
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
                    class="text-blueGray-400 text-s mt-3 mb-6 font-bold uppercase form-91"
                    style="color:white;"
                >
                    Your Details
                </h6>
                <div class="flex flex-wrap form-91">
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-s font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:white;"
                            >
                                Full Name
                            </label>
                            <input
                                name="fullName"
                                type="text"
                                v-model="fullName"
                                ref="fullName"
                                required
                                placeholder="Required"
                                class="fullName border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-s font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:white;"
                            >
                                Email address
                            </label>
                            <input
                                name="email"
                                type="email"
                                v-model="email"
                                ref="email"
                                placeholder="Optional"
                                class="email border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-s font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:white;"
                            >
                                Mobile Number
                            </label>
                            <input
                                name="mobile1"
                                type="text"
                                v-model="mobile1"
                                ref="mobile1"
                                required
                                placeholder="Required"
                                class="mobile1 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-s font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:white;"
                            >
                                Confirm Mobile Number
                            </label>
                            <input
                                name="mobile2"
                                type="text"
                                required
                                placeholder="Required"
                                class="mobile2 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                                class="block uppercase text-blueGray-600 text-s font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:white;"
                            >
                                Address
                            </label>
                            <input
                                name="address"
                                type="text"
                                v-model="address"
                                ref="address"
                                placeholder="Optional"
                                class="address border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-4/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-s font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:white;"
                            >
                                Town
                            </label>
                            <input
                                name="town"
                                type="text"
                                v-model="town"
                                ref="town"
                                required
                                placeholder="Town Required"
                                class="town border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-4/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-s font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:white;"
                            >
                                County
                            </label>
                            <input
                                name="county"
                                type="text"
                                v-model="county"
                                ref="county"
                                placeholder="Optional"
                                class="county border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-4/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-s font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:white;"
                            >
                                Post Code
                            </label>
                            <input
                                name="post"
                                type="text"
                                v-model="post"
                                ref="post"
                                placeholder="Optional"
                                class="post border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>
                </div>

                <hr class="mt-6 border-b-1 border-blueGray-300 form-91" />

                <h6
                    class="text-blueGray-400 text-s mt-3 mb-6 font-bold uppercase form-91"
                    style="color:white;"
                >
                    Vehicle Details
                </h6>
                <div class="flex flex-wrap form-91">
                    

                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-s font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:white;"
                            >
                                Vehicle Mileage
                            </label>
                            <input
                                name="mileage"
                                type="text"
                                v-model="mileage"
                                ref="mileage"
                                placeholder="Optional"
                                class="mileage border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>



                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-s font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:white;"
                            >
                                Any Scratches or Dents?
                            </label>
                            <input
                                name="scratchDents"
                                type="text"
                                v-model="scratchDents"
                                ref="scratchDents"
                                
                                class="scratchDents border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Optional"
                            />
                        </div>
                    </div>




                    <!-- <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-s font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:white;"
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
                    </div> -->




                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-s font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:white;"
                            >
                                Any warning lights on the Dashboard?
                            </label>
                            <input
                                name="warnLights"
                                type="text"
                                v-model="warnLights"
                                ref="warnLights"
                                
                                class="warnLights border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Optional"
                            />
                        </div>
                    </div>



                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-s font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:white;"
                            >
                                For how long you have this vehicle?
                            </label>
                            <input
                                name="howLong"
                                type="text"
                                v-model="howLong"
                                ref="howLong"
                                placeholder="Optional"
                                class="howLong border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>
                    
                    <div class="w-full lg:w-12/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="block uppercase text-blueGray-600 text-s font-bold mb-2"
                                htmlFor="grid-password"
                                style="color:white;"
                            >
                                Any Electrical Mechanical Issues?
                            </label>
                            <textarea
                                name="details"
                                v-model="details"
                                ref="details"
                                placeholder="Optional"
                                type="text"
                                class="details border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                        class="submit-btn bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xl px-4 py-2 shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        style="background-color: #fdcc04;min-height:80px;max-height:80px;"
                    >
                        Get Free Vehicle Valuation
                    </button>
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
    import axios from "axios";
    import nod from "nod-validate";
    import { onMounted } from "vue";
    // import { ref } from 'vue';
    // import VueCookies from 'vue3-cookies';

    export default {
        setup() {
            onMounted(() => {

                // 
                // console.log("hi");
                // this.$cookies.set("formSent","0");

                var n = nod();

                // We disable the submit button if there are errors.
                n.configure({
                    submit: '.submit-btn',
                    disableSubmit: true
                });

                // n.classes.successClass = 'has-success';
                // n.classes.errorClass = 'has-error';

                n.add([{
                    selector: '.fullName',
                    validate: 'presence',
                    errorMessage: 'Can\'t be empty'
                },{
                    selector: '.mobile1',
                    validate: /^.{10,20}$/,
                    errorMessage: 'Please enter a valid Contact Number'
                },{
                    selector: '.mobile2',
                    validate: 'same-as:.mobile1',
                    errorMessage: 'The Contact Number does not match.'
                },{
                    selector: '.town',
                    validate: 'presence',
                    errorMessage: 'Can\'t be empty'
                }]);
            });
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
                formSent: "",
                valTrade: this.$cookies.get("valTrade"),
                valPrivate: this.$cookies.get("valPrivate"),
                ref: this.$cookies.get("ref"),
                miles: this.$cookies.get("miles"),
                desc: this.$cookies.get("desc"),
                // third: "",
            };
        },

        methods: {
            async firebaseDetailsSubmit() {
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
                    // '"CarMechElecDetails": "' +
                    // this.$refs.mechElectrical.value +
                    // '",' +
                    '"CarValue1": "' +
                    this.$cookies.get("val1") +
                    '",' +
                    '"CarValue2": "' +
                    this.$cookies.get("val2") +
                    '",' +
                    '"CarDescription": "' +
                    this.$cookies.get("desc") +
                    '",' +
                    '"CarWarnLights": "' +
                    this.$refs.warnLights.value +
                    '"' +
                    "}";
                // console.log(client);
                client = JSON.parse(client);

                // console.log(this.api1);
                // console.log(typeof this.api1);
                // var api1 = this.api1;
                // var api1 = JSON.parse(this.api1);

                const db = firebase.firestore();

                await db
                    .collection("APIClient")
                    .doc(this.regNo)
                    .set(client)
                    // .add(client)
                    .then(() => {
                        console.log(
                            "APIClient Data entered into Firestore."
                        );
                        var x = document.getElementsByClassName("form-91");
                        for (var i = 0; i < x.length; i++) {
                            x[i].style.display = "none";
                        }

                        document.getElementById("detail1").className += "w-full lg:w-6/12 px-4 left";
                        document.getElementById("detail2").style.display = "none";

                        this.$cookies.set("formSent","1");
                        this.formSent = 1;

                        if(this.formSent == "0") {
                            var doc = document.getElementsByClassName("valuation");
                            for (var k = 0; k < doc.length; k++) {
                                doc[k].style.display = "none";
                            }
                            document.getElementById("form-sent-89").style.display = "none";
                            document.getElementById("form-sent-90").style.display = "none";
                        }
                        if(this.formSent == "1") {
                            var doc2 = document.getElementsByClassName("valuation");
                            for (var j = 0; j < doc2.length; j++) {
                                doc2[j].style.display = "block";
                            }
                            document.getElementById("form-sent-89").style.display = "block";
                            document.getElementById("form-sent-90").style.display = "none";
                        }


                        // x = document.getElementsByClassName("form-92");
                        // x[0].style.display = "initial"

                        

                        document.getElementById('valuation').scrollIntoView();

                        var doc3 = document.getElementsByClassName("valuation");
                        for (var l = 0; l < doc3.length; l++) {
                            doc3[l].style.display = "block";
                        }


                        axios.post('http://localhost:8080/contact2', {data: this.$data})
                            .then(console.log("Email Sent to endpoint from Frontend. But not confirm from backend."))
                            .catch((e) => console.log(e));

                    })
                    .catch((e) => console.log(e));
            },

        },

        mounted (){
            this.$cookies.set("formSent","0");
            this.formSent = 0;

            if(this.formSent == "0") {
                var doc = document.getElementsByClassName("valuation");
                for (var k = 0; k < doc.length; k++) {
                    doc[k].style.display = "none";
                }
                document.getElementById("form-sent-89").style.display = "none";
                document.getElementById("form-sent-90").style.display = "none";
            }
            if(this.formSent == "1") {
                var doc2 = document.getElementsByClassName("valuation");
                for (var j = 0; j < doc2.length; j++) {
                    doc2[j].style.display = "block";
                }
                document.getElementById("form-sent-89").style.display = "block";
                document.getElementById("form-sent-90").style.display = "none";
            }
            
        },

    };
</script>

<style scoped>


    .nod-success {
    color:green;
    }

    .nod-error {
        color:red;
    }

    .nod-error-message {
        color: #c00;
    }
</style>
