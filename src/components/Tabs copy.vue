<template>
    <div class="tab-container">
        <div class="tabs">
            <a class="tab active">Home</a>
            <a class="tab">Profile</a>
            <a class="tab">Messages</a>
        </div>
        <div class="tab-panes">
            <div class="tab-pane active">home</div>
            <div class="tab-pane">profile</div>
            <div class="tab-pane">message</div>
        </div>
    </div>
</template>

<script>
    import tabs from "tabs";
    import {onBeforeMount} from "vue";

    export default {
        setup() {
            onBeforeMount(() => {
                var container = document.querySelector(".tab-container");
                tabs(container);
            })
        },
    };
</script>

<style scoped>
    .tab-panes .tab-pane {
        display: none;
    }
    .tab-panes .active {
        display: block;
    }

    .tab-container .tabs {
        width: 100%;
        display: grid;
        grid-template-columns: auto auto auto;
        justify-items: center;
    }

    .tab-container .tabs .tab.active {
        display: inline-block !important;
        cursor: pointer !important;
        
        text-align: center !important;
        background-color: #505050 !important;
        color: #ffffff !important;
        line-height: 30px !important;
        width: 100% !important;
    }

    .tab-container .tabs .tab {
        display: inline-block !important;
        cursor: pointer !important;
        width: 100px !important;
        text-align: center !important;
        height: 30px !important;
        line-height: 30px !important;
        color: #ffffff !important;
    }

    .tab-container .tab-panes {
        background: #404040 !important;
        color: #ffffff !important;
    }
</style>
