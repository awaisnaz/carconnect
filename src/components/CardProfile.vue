<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16" style="background-color: #303030;"
  >
    <div class="px-6">
      <div class="flex flex-wrap justify-center">
        <div class="w-full px-4 flex justify-center">
          <div class="relative">
            <img
              alt="..."
              :src="team2"
              class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
            />
          </div>
        </div>
        <div class="w-full px-4 text-center mt-20 text-center mt-12" style="display: grid; grid-template-rows: 1fr 1fr; grid-template-areas: 'main' 'details';">
          <div class="flex justify-center py-4 lg:pt-4 pt-8" style="grid-area: main;">
          <h3
            class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2" style="color:white;"
          >
            VEHICLE REGISTRATION NUMBER
          </h3>
          </div>
          <div
            class="text-xl leading-normal mt-0 text-blueGray-400 font-bold uppercase" style="color:grey;"
          >
            <!-- <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" style="justify: left; grid-area: details;"></i> -->
            {{ regNo }}
          </div>
          <!-- <div class="mb-2 text-blueGray-600 mt-10">
            <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
            Solution Manager - Creative Tim Officer
          </div>
          <div class="mb-2 text-blueGray-600">
            <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
            University of Computer Science
          </div> -->
        </div>
        <div class="w-full px-4 text-center ">
          <div class="flex justify-center py-4 lg:pt-4 ">
            <div class="mr-4 p-3 text-center">
              <span
                class="text-xl font-bold block uppercase tracking-wide text-blueGray-600" style="color:white;"
              >
                Make
              </span>
              <span class="text-sm text-blueGray-400" style="color:grey;">{{ make }}</span>
            </div>
            <div class="mr-4 p-3 text-center">
              <span
                class="text-xl font-bold block uppercase tracking-wide text-blueGray-600" style="color:white;"
              >
                Model
              </span>
              <span class="text-sm text-blueGray-400" style="color:grey;">{{ model }}</span>
            </div>
            <div class="lg:mr-4 p-3 text-center">
              <span
                class="text-xl font-bold block uppercase tracking-wide text-blueGray-600" style="color:white;"
              >
                Color
              </span>
              <span class="text-sm text-blueGray-400" style="color:grey;">{{ color }}</span>
            </div>
          </div>
        </div>
      </div>

          
      <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
        <div class="flex flex-wrap justify-center">
          <br/>
          <p style="color:grey;">Not your Vehicle? <a href="/" style="color:white;">Click here</a></p><br/>
          <!-- <div class="w-full lg:w-9/12 px-4">
            <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
              An artist of considerable range, Jenna the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and
              records all of his own music, giving it a warm, intimate feel with
              a solid groove structure. An artist of considerable range.
            </p>
            <a href="javascript:void(0);" class="font-normal text-emerald-500">
              Show more
            </a>
            
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import team2 from "@/assets/img/team-2-800x800.jpg";
import team2 from "@/assets/logo_grey_subtitle_car_only.png";
// import Vehicle from "@/components/Cards/Vehicle.vue";

export default {
  data() {
    return {
      team2,
      regNo: this.$cookies.get('regNo'),
      make: this.$cookies.get('make'),
      model: this.$cookies.get('model'),
      color: this.$cookies.get('color'),
    };
  },
  components: {
      // Vehicle,
  },
};
</script> 
