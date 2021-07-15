<template>
  <div class="flex flex-wrap main">
    <div id="detail1" class="w-full lg:w-4/12 px-4 left">
      <CardProfile />
    </div>
    <div id="detail2" class="w-full lg:w-8/12 px-4 right">
      <CardSettings />
    </div>
  </div>
</template>
<script>
import CardSettings from "@/components/CardSettings.vue";
import CardProfile from "@/components/CardProfile.vue";



export default {
  // setup() {
  //   onMounted(() => {
  //       axios.get('/firebase')
  //           .then((res)=>{

  //               var apikey = res.data.apiKey; 
  //               console.log(apikey);
  //               console.log(typeof apikey);

  //               const firebaseConfig = {
  //               apiKey: apikey,
  //               authDomain: "car-connect-e8da5.firebaseapp.com",
  //               projectId: "car-connect-e8da5",
  //               storageBucket: "car-connect-e8da5.appspot.com",
  //               messagingSenderId: "864993183927",
  //               appId: "1:864993183927:web:810059a116a4f9d8992532",
  //               measurementId: "G-B1K3THS4VB"
  //               };
  //               firebase.initializeApp(firebaseConfig);
  //               console.log(firebaseConfig);
  //               console.log(firebase);
                
  //               })
  //           .catch((e) => console.log(e));
  //   });
  // },

  components: {
    CardSettings,
    CardProfile,
  },
};
</script>

<style scoped>
.main{
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
}

.left {
    position: relative;
}

.right {
    position: relative;
}

@media screen and (min-width:1152px){
  .main {
      justify-content: space-between;
  }

  .left {
      order:2;
  }

  .right {
      order:1;
  }
}

</style>