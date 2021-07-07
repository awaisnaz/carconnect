<template>
    <nav
        class="top-0 absolute z-50 w-full flex  items-stretch justify-between px-2 py-3 navbar-expand-lg"
        style="padding-top: 5px;background-color: #000000;padding-bottom: 0px;"
    >
        <div
            class="container px-4 mx-auto flex flex-wrap items-stretch justify-between"
            
        >
            <div
                class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
                style="background:#000000;display:inline-grid;grid-template-rows:auto;grid-template-columns:auto auto;place-content:space-between;"
            >
                <div>
                    <div class="item-nav-1">
                        <router-link
                            class="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                            to="/"
                        >
                            <!-- Vue Notus -->
                            <!-- <img src="../assets/logo_grey_subtitle-removebg-preview.png" style="float: left; width: 30vw;  height: auto;"> -->
                            <!-- <img src="../assets/logo-black-red-yellow-cropped.jpg" style="float: left; width: 50%;  height: auto;"> -->
                            <img
                                src="../assets/logo.png"
                                style="float: left;height:auto;min-width:100px;max-width:150px;"
                            />
                            <!-- <img src="../assets/logo_prev3.jpeg" style="float: left; width: 13vw;  height: auto;"> -->
                            <!-- src\components\Navbars\AuthNavbar.vue
          src\assets\img\logo.png -->
                        </router-link>
                    </div>
                    <form action="/submit" method="post">
                        <div
                            class="item-nav-2 relative w-full mb-3 mt-8"
                            style="margin-top:0px;margin-bottom: 0px;display:inline-grid;grid-template-rows:auto;grid-template-columns:auto auto;place-content:space-between;white-space:nowrap;"
                        >
                            <div
                                style="padding: 1px; width: 100%;height:100%;white-space:nowrap;"
                            >
                                <div
                                    style="vertical-align:bottom;"
                                >
                                    <input
                                        v-model="vehicle"
                                        required
                                        name="vehicle"
                                        type="text"
                                        class="inputReg border-0 px-3 py-3 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="name"
                                        style="max-width:300px;min-height:50px;max-height:50px;display:inline-block;"
                                        placeholder=" Enter your reg"
                                        maxlength="7"
                                    />
                                    <div
                                        id="regError"
                                        class="regError"
                                        style="color:red;white-space:nowrap;overflow:visible;"
                                    >
                                        Reg. No. incorrect.<br/>
                                        <router-link
                                            to="#contactus"
                                            v-scroll-to="'#contactus'"
                                            class="whitespace-nowrap"
                                            style="text-decoration: underline;cursor:pointer;"
                                        >
                                            Submit Manually.
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div
                                    style="display: inline-block; padding: 1px; vertical-align: bottom;justify-content:flex-start!important;"
                                >
                                    <button
                                        name="category"
                                        value="vehicle"
                                        type="submit"
                                        class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none mr-1 ml-2 ease-linear transition-all duration-150"
                                        style="padding-left: 5px; padding-right:5px;background-color: #fdcc04; margin-bottom: 0px;max-width:100px;min-height:50px;max-height:50px;font-size:20px;white-space: nowrap;"
                                    >
                                        Go
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <button
                    class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                    v-on:click="setNavbarOpen"
                >
                    <i class="text-white fas fa-bars"></i>
                </button>
            </div>
            <div
                class="lg:flex flex-grow items-stretch bg-white lg:bg-opacity-0 lg:shadow-none"
                :class="[navbarOpen ? 'block rounded shadow-lg' : 'hidden']"
                id="example-navbar-warning"
            >
                <!-- <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-auth-navbar"
            >
              <i
                class="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"
              />
              Docs
            </a>
          </li>  
        </ul> -->
                <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <!-- <li class="flex items-center">
            <PagesDropdown />
          </li> -->

                    <!-- <li class="flex items-center text-white">
                        <router-link
                            to="/"
                            class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                            v-scroll-to="'#top'"
                            style="color:white; font-size: medium; font-weight: bold;background:#202020; padding-top:0px; padding-bottom:0px; height:33px;"
                        >
                            <button
                                class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                                style="margin:2px; width:25px; height:25px;"
                            >
                                <i
                                    class="fas fa-phone"
                                    style="max-width:25px; max-height:25px;"
                                ></i></button
                            ><span
                                style="color:white; margin:2px;padding:0px; margin:0px"
                                >+44 7405 555520</span
                            ><br />
                        </router-link>
                    </li> -->

                    <li class="flex items-center text-white">
                        <router-link
                            to="/"
                            class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                            v-scroll-to="'#top'"
                            style="color:white; font-size: medium; font-weight: bold;background:#202020;"
                        >
                            Sell Car Instantly!
                        </router-link>
                    </li>

                    <li class="flex items-center text-white">
                        <router-link
                            to="#"
                            class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                            v-scroll-to="'#whyus'"
                            style="color:white; font-size: medium; font-weight: bold;background:#202020;"
                        >
                            Why Us?
                        </router-link>
                    </li>

                    <li class="flex items-center text-white">
                        <router-link
                            to="#"
                            class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                            v-scroll-to="'#faq'"
                            style="color:white; font-size: medium; font-weight: bold;background:#202020;"
                        >
                            FAQs
                        </router-link>
                    </li>

                    <li class="flex items-center text-white">
                        <router-link
                            to="#"
                            class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                            v-scroll-to="'#contactus'"
                            style="color:white; font-size: medium; font-weight: bold;background:#202020;"
                        >
                            Contact Us
                        </router-link>
                    </li>

                    <!-- <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fvue-notus%2F%23%2F"
              target="_blank"
            >
              <i
                class="lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg"
              />
              <span class="lg:hidden inline-block ml-2">Share</span>
            </a>
          </li> -->

                    <!-- <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fvue-notus%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20VueJS%20UI%20Kit%20and%20Admin.%20Let%20Vue%20Notus%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20"
              target="_blank"
            >
              <i
                class="lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg"
              />
              <span class="lg:hidden inline-block ml-2">Tweet</span>
            </a>
          </li> -->

                    <!-- <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://github.com/creativetimofficial/vue-notus?ref=vn-auth-navbar"
              target="_blank"
            >
              <i
                class="lg:text-blueGray-200 text-blueGray-400 fab fa-github text-lg leading-lg"
              />
              <span class="lg:hidden inline-block ml-2">Star</span>
            </a>
          </li> -->

                    <!-- <li class="flex items-center">
            <button
              class="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              type="button"
            >
              <i class="fas fa-arrow-alt-circle-down"></i> Download
            </button>
          </li> -->
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
    // import PagesDropdown from "@/components/PagesDropdown.vue";
    import { onMounted } from "vue";

    export default {
        setup() {
            onMounted(() => {
                // var elements = document.querySelectorAll('.sticky');
                // Stickyfill.add(elements);
                var navBar2 = document.getElementsByClassName("item-nav-2");
                navBar2[0].style.display = "none";
                window.addEventListener("scroll", myScrollFunc);
            });

            var myScrollFunc = function() {
                var navBar1 = document.getElementsByClassName("item-nav-1");
                var navBar2 = document.getElementsByClassName("item-nav-2");
                var y = window.scrollY;
                if (y >= 300) {
                    navBar1[0].style.display = "none";
                    navBar2[0].style.display = "inline-grid";
                } else {
                    navBar1[0].style.display = "block";
                    navBar2[0].style.display = "none";
                }
            };
        },

        data() {
            return {
                navbarOpen: false,
            };
        },
        methods: {
            setNavbarOpen: function() {
                this.navbarOpen = !this.navbarOpen;
            },
        },
        components: {
            // PagesDropdown,
        },
    };
</script>

<style scoped>
    /* .container-87 {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto;
        place-items: center center;
        place-content: center center;
        grid-auto-flow: row;
    }

    .mid-87a {
        grid-area: 2 / 1 / 3 / 2;
        place-self: end end;
    }

    .mid-87b {
        grid-area: 2 / 2 / 3 / 3;
        place-self: start start;
    } */

    .inputReg {
        background-image: url("@/assets/gb_eu.png");
        background-repeat: no-repeat;
        background-size: auto 100%;
        border: 2px solid #202020;
        border-radius: 3px;
        display: inline-block;
        font-family: Helvetica Neue, Impact, Haettenschweiler, Arial Narrow Bold,
            sans-serif;
        height: 100%;
        width: 100%;
        line-height: 2;
        outline: none;
        text-align: center;
        text-transform: uppercase;
        /* padding: 0 0 0 10px; */
        font-size: 12px !important;
        font-weight: 500;
        /* -webkit-writing-mode: horizontal-tb !important; */
        text-rendering: auto;
        color: -internal-light-dark(black, white);
        letter-spacing: normal;
        word-spacing: normal;
        text-indent: 0px;
        text-shadow: none;
        background-color: -internal-light-dark(
            rgb(255, 255, 255),
            rgb(59, 59, 59)
        );
        -webkit-rtl-ordering: logical;
        cursor: text;
        margin: 0em;
        font: 400 13.3333px Arial;
        caret-color: #000;
        font: 400 13.3333px Arial;
    }

    /* .item-nav-1 {
        grid-area: 1 / 1 / 2 / 2;
        place-self: center center;
    }

    .item-nav-2 {
        grid-area: 1 / 2 / 2 / 3;
        place-self: center center;
    } */
</style>
