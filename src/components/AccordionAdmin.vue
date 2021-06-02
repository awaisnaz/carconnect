<template>
    <div>
        <div class="accordion-container">
            <div class="ac">
                <h2 class="ac-header">
                    <button class="ac-trigger">
                        <p>Clients</p>
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
                        <p>Contacts</p>
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
                        <p>APIs</p>
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
        </div>
    </div>
</template>

<script>
    import Accordion from "accordion-js";

    import { onMounted } from "vue";

    export default {
        setup() {
            onMounted(() => {
                new Accordion(".accordion-container");
            });

            return {
            };
        },
    };
</script>

<style scoped>
@import "accordion-js/dist/accordion.min.css";

.ac{
    margin:0px;
    border:0px;
    color: white !important;
}

.ac-trigger{
    background:#505050;
    color: white !important;
}

.ac-panel{
    background:#202020;
    color: white !important;
}

.ac-text{
    background: #404040;
    color: white !important;
}

</style>
