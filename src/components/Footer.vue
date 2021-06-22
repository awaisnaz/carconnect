<template>
  <footer class="relative bg-black pt-8 pb-6">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
      style="transform: translateZ(0);"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-blueGray-200 fill-current"
          points="2560 0 2560 100 0 100"
          style="fill:#000000;"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-center lg:text-left">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl font-semibold"  style="color:white;">Let's keep in touch!</h4>
          <h5 class="text-lg mt-0 mb-2 text-blueGray-600"  style="color:grey;">
            Find us on any of these platforms. We respond within 24 hours.
          </h5>
          <div class="mt-6 lg:mb-0 mb-6">
            <button
              class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
              style="margin:2px;"
            >
              <i class="fas fa-map-marker-alt"></i>
               
            </button><span style="color:white; margin:2px;">Avenfield House ,Dunraven St, London W1K 7FG, U.K.</span> <br/>
            <!-- <button
              class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
              style="margin:2px;"
            >
              <i class="fas fa-phone"></i>
               
            </button><span style="color:white; margin:2px;">+44 7405 555520</span><br/> -->
            <button
              class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
              style="margin:2px;"
            >
              <i class="fas fa-envelope"></i>
              
              
            </button><span style="color:white; margin:2px;">info@carconnect.uk</span><br/>
            <button
              class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
              style="margin:2px;"
            >
              <i class="fab fa-facebook-square"></i>
              
            </button><span style="color:white; margin:2px;"><a href="https://facebook.com/car-connect">facebook.com/car-connect</a></span><br/>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span
                class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
                style="color:white;"
              >
                Useful Links
              </span>
              <ul class="list-unstyled">
                <li>
                  <router-link
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    to="#"
                    style="color:grey;"
                    v-scroll-to="'#top'"
                  >
                      Sell Car Instantly!
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    to="#"
                    style="color:grey;"
                    v-scroll-to="'#whyus'"
                  >
                    Why Us?
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    to="#"
                    style="color:grey;"
                    v-scroll-to="'#faq'"
                  >
                    FAQs
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    to="#"
                    style="color:grey;"
                    v-scroll-to="'#contactus'"
                  >
                    Contact Us
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span
                class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
                style="color:white;"
              >
                Other Resources
              </span>
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="/"
                    style="color:grey;"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="/"
                    style="color:grey;"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="/"
                    style="color:grey;"
                  >
                    Privacy Policy
                  </a>
                </li>
                <!-- <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/contact-us?ref=vn-footer"
                    style="color:grey;"
                  >
                    Contact Us
                  </a>
                </li> -->
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-blueGray-300" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-blueGray-500 font-semibold py-1"  style="color:white;">
            Copyright © {{ date }} 
            <a
              href="https://www.creative-tim.com?ref=vn-footer"
              class="text-blueGray-500 hover:text-blueGray-800"
              style="color:white;"
            >
              Car Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
