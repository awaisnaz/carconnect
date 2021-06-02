<template>
    <div class="tab-container">
        <div class="tabs">
            <div class="tab">
                <input type="radio" id="tab-4" name="tab-group-2" checked />
                <label for="tab-4">Vehicles</label>

                <div class="content">
                    <p>Stuff for Tab One</p>
                </div>
            </div>

            <div class="tab">
                <input type="radio" id="tab-5" name="tab-group-2" />
                <label for="tab-5">Contacts</label>

                <div class="content">
                    <p>Stuff for Tab Two</p>

                    <img src="http://placebear.com/200/100" />
                </div>
            </div>

            <div class="tab">
                <input type="radio" id="tab-6" name="tab-group-2" />
                <label for="tab-6">APIs</label>

                <div class="content">
                    You made it this far?!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import tabs from "tabs";
    // import { onBeforeMount } from "vue";

    export default {
        setup() {
            // onBeforeMount(() => {
            //     var container = document.querySelector(".tab-container");
            //     tabs(container);
            // });
        },
    };
</script>

<style scoped>
    /* body {
        background: #999;
        padding: 20px 40px;
    } */

    .tabs {
        position: relative;
        min-height: 200px; 
        clear: both;
        margin: 35px 0 25px;
    }
    .tab {
        float: left;
    }
    .tab label {
        background: #eee;
        padding: 10px;
        border: 1px solid #ccc;
        margin-left: -1px;
        position: relative;
        left: 1px;
        top: -29px;
        /* -webkit-transition: background-color 0.17s linear; */
    }
    .tab [type="radio"] {
        display: none;
    }
    .content {
        position: absolute;
        top: -1px;
        left: 0;
        background: white;
        right: 0;
        bottom: 0;
        padding: 20px;
        border: 1px solid #ccc;
        /* -webkit-transition: opacity 0.6s linear; */
        opacity: 0;
    }
    [type="radio"]:checked ~ label {
        background: white;
        border-bottom: 1px solid white;
        z-index: 2;
    }
    [type="radio"]:checked ~ label ~ .content {
        z-index: 1;
        opacity: 1;
    }
</style>
