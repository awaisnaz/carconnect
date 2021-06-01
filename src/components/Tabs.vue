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

export default {
setup(){
    var container=document.querySelector('.tab-container')
    tabs(container);
},

};

</script>

<style scoped>

.tab-panes .tab-pane{
    display: none
}
.tab-panes .active{
    display: block
}

</style>
