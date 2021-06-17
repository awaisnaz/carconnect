<template>
  <div class="flex flex-wrap main">
    <div class="w-full lg:w-4/12 px-4 left">
      <CardProfile />
    </div>
    <div class="w-full lg:w-8/12 px-4 right">
      <CardSettings />
    </div>
  </div>
</template>
<script>
import CardSettings from "@/components/CardSettings.vue";
import CardProfile from "@/components/CardProfile.vue";

export default {
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