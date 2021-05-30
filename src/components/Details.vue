<template>
  <div>
    <navbar />
    <main>
      <section class="relative w-full h-full py-40 min-h-screen">
        <!-- <div
          class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
          :style="`background-image: url('${registerBg2}');`"
        ></div> -->
        <div
          class="absolute top-0 w-full h-full bg-black bg-no-repeat bg-full"
          
        ></div>
        <Details2 />
        <footer-small absolute />
      </section>
    </main>
  </div>
</template>
<script>
import Navbar from "@/components/AuthNavbar.vue";
import FooterSmall from "@/components/FooterSmall.vue";

// import registerBg2 from "@/assets/register_bg_2.png";
import Details2 from "@/components/Details2.vue";

export default {
  data() {
    return {
      // registerBg2,
    };
  },
  components: {
    Navbar,
    FooterSmall,
    Details2
  },
};
</script>
