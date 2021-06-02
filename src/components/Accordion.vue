<template>
    <div>

        <!-- <div
            class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
        >
            <i class="fas fa-rocket text-xl"></i>
        </div> -->
        <!-- <h3 class="text-3xl mb-2 font-semibold leading-normal center"  style="color:white;">
            
        </h3><br/> -->



        <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
            <h2 class="text-4xl font-semibold text-white">
                Frequently Asked Questions
            </h2>
            </div>
        </div><br/>


        <div class="accordion-container">
            <div class="ac">
                <h2 class="ac-header">
                    <button class="ac-trigger">
                        <p>What is Car-Connect?</p>
                    </button>
                </h2>
                <div class="ac-panel">
                    <div class="ac-text">
                        <p>Car-Connect helps hundreds of people everyday to sell their cars quickly and easily, by finding the car dealer that’ll pay the most for your car.</p><br/>
                        <p>Unlike your other options, we won’t make you choose between price and convenience – you can have both, with no extra effort. We’ll guide you through the process to get a great result, and leave you feeling like a pro.</p>
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
                        <p>No. To complete the entire process, all we need you to do is enter your reg, provide the details and photos requested, accept your highest offer from our verified dealer network, then arrange the collection with the dealer at a time suitable for you. Car-Connect handles everything else for you. </p>
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
                        <p>1. Get your instant Free Online valuation in seconds.</p><br/>
                        <p>2. Book an appointment that suits you.</p><br/>
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
                        <p>We try to keep our online valuations as consistent as possible, but if there are major shifts in the market that affect your car’s value – up or down – we’ll react to them to ensure the fairest price.</p>
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
                        <p>No. We pride ourselves on no hidden charges, and we don’t charge a transaction fee. </p>
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
                        <p>you should refresh your valuation to make sure the figure you’ve got is up to date.</p>
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
                        <p>All the cars we buy are subject to inspection and the online valuations we issue are not contractual offers, but we pride ourselves on our fair prices and paying the online valuation figure as often as possible. If, when we inspect the car we find faults or damage that we weren’t aware of from the information you supplied online, then the price you’re offered at inspection may be different to your online valuation. However, unlike other car buyers, we won’t try to drive down your price by penalising you for fair wear and tear or over-charge you for inexpensive repairs.</p>
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
                        <p>Our online valuations are not contractual offers, and any car we buy is subject to inspection, which means that we need to see and check your car before finalising our offer to buy it.</p>
                    </div>
                </div>
            </div>

            <div class="ac">
                <h2 class="ac-header">
                    <button class="ac-trigger">
                         <p>Will the dealer collect my car? </p>
                    </button>
                </h2>
                <div class="ac-panel">
                    <div class="ac-text">
                        <p>Once you have agreed the sale, the dealer will be in touch within two working days to arrange collection. You agree a time and date suitable to you both, and the dealer (or their driver) will come to your home or workplace to inspect and collect the vehicle. Our sales support team will ensure that this happens in a timely fashion, and are on hand to help with any queries. </p>
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
                        <p>While we manage price expectations as best we can, sometimes cars do not sell on the first day with Car Connect, this can be for a number of reasons, including the current popularity of your make of car or recent high volumes of a particular model in the market at the time. On these occasions we will discuss with you whether an adjusted price would enable the car to sell to a verified dealer in our network, or if an alternative approach is required. </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- <dl class="badger-accordion">
            <dt>
                <button class="badger-accordion-header">
                    Header Content
                </button>
            </dt>
            <dd class="badger-accordion__panel badger-accordion-panel">
                <div class="badger-accordion-panel-inner">
                    Panel Content
                </div>
            </dd>
        </dl> -->
    </div>
</template>

<script>
    import Accordion from "accordion-js";
    // import BadgerAccordion from 'badger-accordion';

    import { onMounted } from "vue";
    // import { ref } from "vue";

    export default {
        // mounted() {
        //     console.log("mounted!");
        //     var accordionDomNode = document.querySelector(
        //         ".js-badger-accordion"
        //     );
        //     var accordionTag = new BadgerAccordion(accordionDomNode);
        // },
        // data(){
        //     return{
        //         accordionTag,
        //     };
        // },
        setup() {
            // var accordionDomNode = document.querySelector(
            //     ".js-badger-accordion"
            // );
            // var accordionTag = new BadgerAccordion(accordionDomNode);

            // var accordionTag = ref();

            // var accordionTag = new BadgerAccordion(accordionDomNode);
            // console.log(accordionTag);

            // function accordion(){
            //     var accordionDomNode = document.querySelector('.js-badger-accordion');
            //     var accordionTag = new BadgerAccordion(accordionDomNode);
            //     console.log(accordionTag);
            // }

            onMounted(() => {
                new Accordion(".accordion-container");
            });

            return {
                // accordion,
                // accordionTag,
            };
        },
    };
</script>

<style scoped>
    @import "accordion-js/dist/accordion.min.css";
    /* @import "badger-accordion/dist/badger-accordion.css"; */


/* .badger-accordion__panel {
    max-height: 75vh;
    overflow: hidden;
}
.badger-accordion__panel.-ba-is-hidden {
    max-height: 0 !important;
    visibility: hidden;
}
.badger-accordion--initalised .badger-accordion__panel {
    transition: max-height ease-in-out 0.2s;
} */

/* .accordion-container{

} */

.ac{
    margin:0px;
    border:0px;
    color: white !important;
}

/* .ac-header{
    background:#303030;
} */

.ac-trigger{
    background:#303030;
    color: white !important;
}

.ac-panel{
    background:#202020;
    color: white !important;
}

.ac-text{
    background: #202020;
    color: white !important;
}

</style>
