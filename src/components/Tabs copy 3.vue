<template>
    <div>
        <vue-tabs>
            <v-tab title="First tab">
                First tab content
            </v-tab>

            <v-tab title="Second tab">
                Second tab content
            </v-tab>

            <v-tab title="Third tab">
                Third tab content
            </v-tab>
        </vue-tabs>
    </div>
</template>

<script>
    // import { VueTabs, VTab } from "vue-nav-tabs";
    import { onBeforeMount } from "vue";

    export default {
        setup() {
            onBeforeMount(() => {
                // new Tabby("data-tabs");
            });
        },
    };
</script>

<style scoped>

@import 'vue-nav-tabs/themes/vue-tabs.css';

</style>
