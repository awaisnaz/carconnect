<template>
  <div>
    <div class="sticky">
      <Navbar /><p>HIPIY
        
      </p>
    </div>    
    
    <main>
      <section class="relative w-full h-full py-40 min-h-screen">
        <div
          class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
          :style="`background-image: url('${registerBg2}');`"
        ></div>
        <router-view />
        <footer-small absolute />
      </section>
    </main>
  </div>
</template>
<script>
import Navbar from "@/components/AuthNavbar.vue";
import FooterSmall from "@/components/FooterSmall.vue";

import registerBg2 from "@/assets/register_bg_2.png";

import { onMounted } from "vue";

import Stickyfill from "stickyfilljs";

export default {

  setup(){
    onMounted(() => {
      var elements = document.querySelectorAll('.sticky');
      Stickyfill.add(elements);
    });
  },


  data() {
    return {
      registerBg2,
    };
  },
  components: {
    Navbar,
    FooterSmall,
  },
};
</script>

<style scoped>

.sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
}

.sticky:before,
.sticky:after {
    content: '';
    display: table;
}

</style>