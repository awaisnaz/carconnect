<template>
  <div>
    <br/>
    <H1 style="font-weight:bold;">VEHICLE DETAILS</H1><br/>
    <p name="regNo">Registration No: {{ regNo }}</p>
    <p name="make">Make: {{ make }}</p>
    <p name="model">Model: {{ model }}</p>
    <p name="color">Color: {{ color }}</p>
    <br/>
    <br/>
    <p><a href="/">Not your Vehicle? Click here</a></p><br/>
  </div>
</template>
<script>


export default {
    data() {
        return {
            regNo: this.$cookies.get('regNo'),
            make: this.$cookies.get('make'),
            model: this.$cookies.get('model'),
            color: this.$cookies.get('color'),
        };
    },
    // methods: {
    //     update: function() {
    //         this.vehicle = JSON.parse(this.vehicle);
    //         console.log(this.vehicle);
    //     }
    // },
    // setup() {
    //     const vehicle = this.$cookies.get('vehicle');
    //     return { vehicle }
    // },
    // mounted () {
    //     this.update();
    // },
};
</script>
