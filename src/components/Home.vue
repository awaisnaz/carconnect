<template>
    <v-content>
        <div>
            <navbar />
            <main>
                <div
                    class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"
                >
                    <div
                        class="absolute top-0 w-full h-full bg-center bg-cover"
                        style="
              <!-- background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'); -->
              <!-- background-color: black; -->
            "
                    >
                        <!-- <span
              id="blackOverlay"
              class="w-full h-full absolute opacity-75 bg-black"
            ></span> -->
                        <span
                            id="blackOverlay"
                            class="w-full h-full absolute opacity-100 bg-black"
                        ></span>
                    </div>
                    <div class="container relative mx-auto">
                        <div class="items-center flex flex-wrap">
                            <div
                                class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center"
                            >
                                <div class="pr-10">
                                    <SectionOne id="top" />
                                    <br /><br />
                                    <!-- <h1 class="text-white font-semibold text-5xl">
                    Your story starts with us.
                    We Buy Cars.
                  </h1> -->
                                    <!-- <p class="mt-4 text-lg text-blueGray-200">
                    This is a simple example of a Landing Page you can build using
                    Vue Notus. It features multiple CSS components based on the
                    Tailwind CSS design system.
                    Enter your Car Registration Number to start ...
                  </p> -->

                                    <form action="/submit" method="post">
                                        <!-- <h4 class="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p class="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Complete this form and we will get back to you in 24 hours.
                    </p> -->

                                        <div class="relative w-full mb-3 mt-8">
                                            <!-- <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label> -->
                                            <div class="container-87">
                                                <div class="top-87">
                                                    <p
                                                        class="text-white font-semibold text-5xl"
                                                    >
                                                        <span
                                                            style="color:green;font-size: 0.7em;"
                                                            >60 second
                                                        </span>
                                                        <span
                                                            style="color:grey;font-size: 0.7em;"
                                                            >car valuation</span
                                                        >
                                                    </p>
                                                </div>
                                                <!-- <div
                                                    class="mid-87"
                                                    style="float: right; width: 100%;"
                                                > -->
                                                    <!-- <div style=" display: table; margin: 4px; padding: 1px; width: 100%;height:100%"> -->
                                                    <div
                                                        class="mid-87a"
                                                        style=" display: inline-block; margin: 4px; padding: 1px; width: 100%;height:100%;"
                                                    >
                                                        <div
                                                            style="display: inline-block; vertical-align: bottom;"
                                                        >
                                                            <input
                                                                v-model="
                                                                    vehicle
                                                                "
                                                                required
                                                                name="vehicle"
                                                                type="text"
                                                                class="inputReg border-0 px-3 py-3 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                                id="name"
                                                                style="min-width:300px;max-width:400px;min-height:80px;max-height:80px;display:inline-block;"
                                                                placeholder="Enter your reg"
                                                                maxlength="7"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div
                                                      class="mid-87b"
                                                    >
                                                        <div
                                                            style="display: inline-block; vertical-align: bottom;justify-content:flex-start!important;"
                                                        >
                                                            <button
                                                                name="category"
                                                                value="vehicle"
                                                                type="submit"
                                                                class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 shadow hover:shadow-lg outline-none focus:outline-none mr-1 ml-2 ease-linear transition-all duration-150"
                                                                style="background-color: #fdcc04; margin-bottom: 0px;min-width:60px;max-width:160px;min-height:80px;max-height:80px;font-size:30px;white-space: nowrap;"
                                                            >
                                                                Go >
                                                            </button>
                                                        </div>
                                                    </div>
                                                <!-- </div> -->

                                                <div class="bot-87">
                                                    <p
                                                        class="text-white font-semibold text-5xl"
                                                    >
                                                        <span
                                                            style="color:grey;font-size: 0.7em;"
                                                            >sell your car in
                                                        </span>
                                                        <span
                                                            style="color:green;font-size: 0.7em;"
                                                            >3 simple
                                                            steps</span
                                                        >
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                        name="email" 
                        id="email" 
                        value="Email Address"
                      />
                    </div> -->

                                        <!-- <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                        name="message" 
                        id="message"
                      />
                    </div> -->
                                        <!-- <div class="text-center mt-6">
                      <button
                        name="category"
                        value="vehicle"
                        type="submit"
                        class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      >
                        Go >
                      </button>
                    </div> -->
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
                                style="fill:#202020;"
                            ></polygon>
                        </svg>
                    </div>
                </div>

                <!-- <section class="pb-20 bg-blueGray-200 -mt-24"> -->
                <section class="pb-20 -mt-24" style="background: #202020;">
                    <div class="container mx-auto px-4">
                        <div class="flex flex-wrap">
                            <div
                                class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"
                            >
                                <!-- <div
                  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                > -->
                                <div
                                    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                                    style="background: #303030;"
                                >
                                    <!-- <div class="px-4 py-5 flex-auto">
                    <div
                      class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                    >
                      <i class="fas fa-award"></i>
                    </div>
                    <h6 class="text-xl font-semibold">Step 1: Free Valuation</h6>
                    <p class="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into parts.
                      A paragraph describing a feature will be enough.
                    </p>
                  </div> -->
                                    <div class="px-4 py-5 flex-auto">
                                        <div
                                            class="mb-5 inline-flex items-center justify-center"
                                            style="width: 30%"
                                        >
                                            <!-- <i class="fas fa-award"></i> -->
                                            <!-- <img src="@/assets/cars_step_1.svg"/> -->
                                            <img src="@/assets/01.png" />
                                        </div>
                                        <!-- <h6 class="text-xl font-semibold">Step 1: Free Valuation</h6> -->
                                        <h6
                                            class="text-xl font-semibold"
                                            style="color:white;"
                                        >
                                            Free valuation
                                        </h6>
                                        <!-- <p class="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into parts.
                      A paragraph describing a feature will be enough.
                    </p> -->
                                        <p
                                            class="mt-2 mb-4 text-blueGray-500"
                                            style="color:white;"
                                        >
                                            Get your instant valuation in
                                            seconds
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full md:w-4/12 px-4 text-center">
                                <div
                                    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                                    style="background: #303030;"
                                >
                                    <!-- <div class="px-4 py-5 flex-auto">
                    <div
                      class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400"
                    >
                      <i class="fas fa-retweet"></i>
                    </div>
                    <h6 class="text-xl font-semibold">Step 2: Book An Apointment</h6>
                    <p class="mt-2 mb-4 text-blueGray-500">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div> -->
                                    <div class="px-4 py-5 flex-auto">
                                        <div
                                            class="mb-5 inline-flex items-center justify-center"
                                            style="width: 30%"
                                        >
                                            <!-- <i class="fas fa-award"></i> -->
                                            <!-- <img src="@/assets/cars_step_2.svg"/> -->
                                            <img src="@/assets/02.png" />
                                        </div>
                                        <h6
                                            class="text-xl font-semibold"
                                            style="color:white;"
                                        >
                                            Book an appointment
                                        </h6>
                                        <p
                                            class="mt-2 mb-4 text-blueGray-500"
                                            style="color:white;"
                                        >
                                            Book an appointment that suits you
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div
                                    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                                    style="background: #303030;"
                                >
                                    <!-- <div class="px-4 py-5 flex-auto">
                    <div
                      class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400"
                    >
                      <i class="fas fa-fingerprint"></i>
                    </div>
                    <h6 class="text-xl font-semibold">Step 3: Buy My Car</h6>
                    <p class="mt-2 mb-4 text-blueGray-500">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div> -->
                                    <div class="px-4 py-5 flex-auto">
                                        <div
                                            class="mb-5 inline-flex items-center justify-center"
                                            style="width: 30%"
                                        >
                                            <!-- <i class="fas fa-award"></i> -->
                                            <!-- <img src="@/assets/cars_step_3.svg"/> -->
                                            <img src="@/assets/03.png" />
                                        </div>
                                        <h6
                                            class="text-xl font-semibold"
                                            style="color:white;"
                                        >
                                            Buy my car
                                        </h6>
                                        <p
                                            class="mt-2 mb-4 text-blueGray-500"
                                            style="color:white;"
                                        >
                                            We'll buy your car instantly
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <SectionTwo id="whyus" />
                        <div class="flex flex-wrap items-center mt-32">
                            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div
                                    class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
                                >
                                    <!-- <i class="fas fa-user-friends text-xl"></i> -->
                                    <i class="fas fa-rocket text-xl"></i>
                                </div>
                                <h3
                                    class="text-3xl mb-2 font-semibold leading-normal"
                                    style="color:white;"
                                >
                                    Why sell your car to Car Connect?
                                </h3>
                                <p
                                    class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"
                                    style="color:grey;"
                                >
                                    Car-Connect have been buying cars for years
                                    and are a trusted name within the car-buying
                                    industry. Our expertise, dedication to
                                    delivering the best in customer service and
                                    secure, simple services means we deliver the
                                    very best in car purchase.
                                </p>
                                <p
                                    class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600"
                                    style="color:grey;"
                                >
                                    With Car-Connect you don’t have to worry
                                    about inconvenience of who is buying your
                                    car, bargaining on price or hassling about
                                    being taken for ride. No meeting strangers –
                                    All our personnel carry appropriate
                                    identification so you do not have to worry
                                    about letting them into your home.
                                </p>
                                <p
                                    class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600"
                                    style="color:grey;"
                                >
                                    We take our customer seriously, which is why
                                    we are one of the leaders in the business.
                                </p>
                                <router-link
                                    to="/"
                                    class="font-bold text-blueGray-700 mt-8"
                                    style="color:white;"
                                    v-scroll-to="'#top'"
                                >
                                    Sell Car Instantly!
                                </router-link>
                                <!-- <router-link
                  to="/"
                  class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                  v-scroll-to="'#top'"
                >
                  Sell Car Instantly
                </router-link> -->
                            </div>

                            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div
                                    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
                                >
                                    <img
                                        alt="..."
                                        src="@/assets/home2.jpg"
                                        class="w-full align-middle rounded-t-lg"
                                    />
                                    <blockquote class="relative p-8 mb-4">
                                        <svg
                                            preserveAspectRatio="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 583 95"
                                            class="absolute left-0 w-full block h-95-px -top-94-px"
                                        >
                                            <polygon
                                                points="-30,95 583,95 583,65"
                                                class="text-emerald-500 fill-current"
                                                style="fill:#10b981;"
                                            ></polygon>
                                        </svg>
                                        <h4
                                            class="text-xl font-bold text-white"
                                        >
                                            Selling your car is Now as Easy as
                                            One , Two, Three.
                                            <!-- Top Notch Services -->
                                        </h4>
                                        <p
                                            class="text-md font-light mt-2 text-white"
                                        >
                                            <!-- Selling your car is Now as Easy as One , Two Three.<br/><br/> -->
                                            Sell your Car in 3 easy steps:<br />
                                            ✅FREE ONLINE VALUATION<br />
                                            ✅FREE INSPECTION<br />
                                            ✅GET INSTANT CASH 💵 💰
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    class="relative py-20"
                    style="background-color: #000000;"
                >
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
                                class="text-white fill-current"
                                points="2560 0 2560 100 0 100"
                                style="fill:#000000;"
                            ></polygon>
                        </svg>
                    </div>

                    <div class="container mx-auto px-4">
                        <div class="items-center flex flex-wrap">
                            <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                                <img
                                    alt="..."
                                    class="max-w-full rounded-lg shadow-lg"
                                    src="@/assets/home3.jpg"
                                />
                            </div>
                            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
                                <div class="md:pr-12">
                                    <div
                                        class="text-emerald-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-emerald-300"
                                    >
                                        <i class="fas fa-rocket text-xl"></i>
                                    </div>
                                    <h3
                                        class="text-3xl font-semibold"
                                        style="color:white;"
                                    >
                                        Top Notch Services
                                    </h3>
                                    <!-- <p class="mt-4 text-lg leading-relaxed text-blueGray-500"  style="color:grey;">
                    There are many reasons to select us for sell your car.
                  </p> -->
                                    <ul class="list-none mt-6">
                                        <li class="py-2">
                                            <div class="flex items-center">
                                                <div>
                                                    <span
                                                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                                    >
                                                        <!-- <i class="fas fa-fingerprint"></i> -->
                                                        <i
                                                            class="far fa-paper-plane"
                                                        ></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4
                                                        class="text-blueGray-500"
                                                        style="color:grey;"
                                                    >
                                                        A competative market
                                                        price.
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-2">
                                            <div class="flex items-center">
                                                <div>
                                                    <span
                                                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                                    >
                                                        <!-- <i class="fab fa-html5"></i> -->
                                                        <i
                                                            class="far fa-paper-plane"
                                                        ></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4
                                                        class="text-blueGray-500"
                                                        style="color:grey;"
                                                    >
                                                        It’s quick and easy –
                                                        with none of the hassle
                                                        of classified ads or
                                                        auction sites.
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-2">
                                            <div class="flex items-center">
                                                <div>
                                                    <span
                                                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                                    >
                                                        <i
                                                            class="far fa-paper-plane"
                                                        ></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4
                                                        class="text-blueGray-500"
                                                        style="color:grey;"
                                                    >
                                                        No obligation to sell
                                                        your car.
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-2">
                                            <div class="flex items-center">
                                                <div>
                                                    <span
                                                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                                    >
                                                        <i
                                                            class="far fa-paper-plane"
                                                        ></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4
                                                        class="text-blueGray-500"
                                                        style="color:grey;"
                                                    >
                                                        Get a free car valuation
                                                        in seconds.
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-2">
                                            <div class="flex items-center">
                                                <div>
                                                    <span
                                                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                                    >
                                                        <i
                                                            class="far fa-paper-plane"
                                                        ></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4
                                                        class="text-blueGray-500"
                                                        style="color:grey;"
                                                    >
                                                        No timewasters – agree
                                                        to our terms and
                                                        conditions and we’ll do
                                                        the rest.
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-2">
                                            <div class="flex items-center">
                                                <div>
                                                    <span
                                                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                                    >
                                                        <i
                                                            class="far fa-paper-plane"
                                                        ></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4
                                                        class="text-blueGray-500"
                                                        style="color:grey;"
                                                    >
                                                        No waiting for cash –
                                                        payment is instant, free
                                                        and secure.
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-2">
                                            <div class="flex items-center">
                                                <div>
                                                    <span
                                                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                                    >
                                                        <i
                                                            class="far fa-paper-plane"
                                                        ></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4
                                                        class="text-blueGray-500"
                                                        style="color:grey;"
                                                    >
                                                        Free online valuation.
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-2">
                                            <div class="flex items-center">
                                                <div>
                                                    <span
                                                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                                    >
                                                        <i
                                                            class="far fa-paper-plane"
                                                        ></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4
                                                        class="text-blueGray-500"
                                                        style="color:grey;"
                                                    >
                                                        Free collection - no
                                                        charge.
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-2">
                                            <div class="flex items-center">
                                                <div>
                                                    <span
                                                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                                                    >
                                                        <i
                                                            class="far fa-paper-plane"
                                                        ></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4
                                                        class="text-blueGray-500"
                                                        style="color:grey;"
                                                    >
                                                        Your money paid quickly
                                                        prior to collection.
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <SectionThree id="faq" />
                <section class="pt-20 pb-48" style="background-color: #000000;">
                    <div class="container mx-auto px-4">
                        <Accordion />

                        <!-- <div class="flex flex-wrap justify-center text-center mb-24">
              <div class="w-full lg:w-6/12 px-4">
                <h2 class="text-4xl font-semibold"  style="color:white;">Here are our heroes</h2>
                <p class="text-lg leading-relaxed m-4 text-blueGray-500"  style="color:grey;">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div> -->
                        <!-- <div class="flex flex-wrap">
              <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div class="px-6">
                  <img
                    alt="..."
                    :src="team1"
                    class="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold"  style="color:white;">Ryan Tompson</h5>
                    <p
                      class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"  style="color:grey;"
                    >
                      Web Developer
                    </p>
                    <div class="mt-6">
                      <button
                        class="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-twitter"></i>
                      </button>
                      <button
                        class="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </button>
                      <button
                        class="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div class="px-6">
                  <img
                    alt="..."
                    :src="team2"
                    class="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold"  style="color:white;">Romina Hadid</h5>
                    <p
                      class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                      style="color:grey;"
                    >
                      Marketing Specialist
                    </p>
                    <div class="mt-6">
                      <button
                        class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-google"></i>
                      </button>
                      <button
                        class="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div class="px-6">
                  <img
                    alt="..."
                    :src="team3"
                    class="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold"  style="color:white;">Alexa Smith</h5>
                    <p
                      class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"  style="color:grey;"
                    >
                      UI/UX Designer
                    </p>
                    <div class="mt-6">
                      <button
                        class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-google"></i>
                      </button>
                      <button
                        class="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-twitter"></i>
                      </button>
                      <button
                        class="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div class="px-6">
                  <img
                    alt="..."
                    :src="team4"
                    class="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold"  style="color:white;">Jenna Kardi</h5>
                    <p
                      class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"  style="color:grey;"
                    >
                      Founder and CEO
                    </p>
                    <div class="mt-6">
                      <button
                        class="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-dribbble"></i>
                      </button>
                      <button
                        class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-google"></i>
                      </button>
                      <button
                        class="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-twitter"></i>
                      </button>
                      <button
                        class="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
                    </div>
                </section>

                <!-- <section class="pb-20 relative block bg-blueGray-800"> -->
                <section
                    class="pb-20 relative block"
                    style="background:#202020"
                >
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
                                class="text-blueGray-800 fill-current"
                                points="2560 0 2560 100 0 100"
                                style="fill:#202020;"
                            ></polygon>
                        </svg>
                    </div>

                    <div
                        class="container mx-auto px-4 lg:pt-24 lg:pb-64"
                        style="background-color: #202020;"
                    >
                        <div
                            class="flex flex-wrap text-center justify-center"
                            style="background: #202020;"
                        >
                            <div
                                class="w-full lg:w-6/12 px-4"
                                style="background: #202020;"
                            >
                                <h2 class="text-4xl font-semibold text-white">
                                    Where can I scrap my car?
                                </h2>
                                <p
                                    class="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400"
                                    style="color:grey;"
                                >
                                    Looking to scrap your car? Instead of
                                    selling to a local scrap dealer, you can
                                    sell your ‘scrap’ car in under an hour at
                                    one of our UK branches.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-wrap mt-12 justify-center ">
                            <div class="w-full lg:w-3/12 px-4 text-center">
                                <div
                                    class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
                                >
                                    <i
                                        class="fas fa-map-marker-alt text-xl"
                                    ></i>
                                </div>
                                <h6
                                    class="text-xl mt-5 font-semibold text-white"
                                >
                                    England
                                </h6>
                                <p
                                    class="mt-2 mb-4 text-blueGray-400"
                                    style="color:grey;"
                                >
                                    Receive a quote in under 60 seconds by
                                    entering your car registration number.
                                </p>
                            </div>
                            <div class="w-full lg:w-3/12 px-4 text-center">
                                <div
                                    class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
                                >
                                    <i
                                        class="fas fa-map-marker-alt text-xl"
                                    ></i>
                                </div>
                                <h5
                                    class="text-xl mt-5 font-semibold text-white"
                                >
                                    Wales
                                </h5>
                                <p
                                    class="mt-2 mb-4 text-blueGray-400"
                                    style="color:grey;"
                                >
                                    Receive a quote in under 60 seconds by
                                    entering your car registration number.
                                </p>
                            </div>
                            <div class="w-full lg:w-3/12 px-4 text-center">
                                <div
                                    class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
                                >
                                    <i
                                        class="fas fa-map-marker-alt text-xl"
                                    ></i>
                                </div>
                                <h5
                                    class="text-xl mt-5 font-semibold text-white"
                                >
                                    Scotland
                                </h5>
                                <p
                                    class="mt-2 mb-4 text-blueGray-400"
                                    style="color:grey;"
                                >
                                    Receive a quote in under 60 seconds by
                                    entering your car registration number.
                                </p>
                            </div>
                            <div class="w-full lg:w-3/12 px-4 text-center">
                                <div
                                    class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
                                >
                                    <i
                                        class="fas fa-map-marker-alt text-xl"
                                    ></i>
                                </div>
                                <h5
                                    class="text-xl mt-5 font-semibold text-white"
                                >
                                    Northern Ireland
                                </h5>
                                <p
                                    class="mt-2 mb-4 text-blueGray-400"
                                    style="color:grey;"
                                >
                                    Receive a quote in under 60 seconds by
                                    entering your car registration number.
                                </p>
                            </div>
                            <div class="w-full lg:w-3/12 px-4 text-center">
                                <div
                                    class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
                                >
                                    <i
                                        class="fas fa-map-marker-alt text-xl"
                                    ></i>
                                </div>
                                <h5
                                    class="text-xl mt-5 font-semibold text-white"
                                >
                                    Ireland
                                </h5>
                                <p
                                    class="mt-2 mb-4 text-blueGray-400"
                                    style="color:grey;"
                                >
                                    Receive a quote in under 60 seconds by
                                    entering your car registration number.
                                </p>
                            </div>
                        </div>

                        <SectionFour id="contactus" />
                    </div>
                </section>
                <br />

                <!-- <section class="relative block py-24 lg:pt-0 bg-blueGray-800"> -->
                <section
                    class="relative block py-24 lg:pt-0"
                    style="background-color: #202020;"
                >
                    <div
                        class="container mx-auto px-4"
                        style="background: #202020;"
                    >
                        <div
                            class="flex flex-wrap justify-center lg:-mt-64 -mt-48"
                            style="background: #202020;"
                        >
                            <div
                                class="w-full lg:w-6/12 px-4"
                                style="background: #202020;"
                            >
                                <div
                                    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200"
                                    style="background: #303030;"
                                >
                                    <div
                                        class="flex-auto p-5 lg:p-10 rounded-lg "
                                        style="background: #303030;"
                                    >
                                        <form
                                            id="contact-form"
                                            name="contact-form"
                                            method="post"
                                            action="/contact"
                                            @submit.prevent="firebaseSubmit"
                                        >
                                            <!-- <form id="contact-form" name="contact-form" method="post" action="/contact"> -->
                                            <h4
                                                class="text-2xl font-semibold form-81"
                                                style="color:white;"
                                            >
                                                Contact Us
                                            </h4>
                                            <p
                                                class="leading-relaxed mt-1 mb-4 text-blueGray-500 form-81"
                                                style="color:grey;"
                                            >
                                                Complete this form and we will
                                                get back to you within 24 hours.
                                            </p>
                                            <div
                                                class="relative w-full mb-3 mt-8 form-81"
                                                style="color:grey;"
                                            >
                                                <label
                                                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="full-name"
                                                    style="color:white;"
                                                >
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    v-model="name"
                                                    required
                                                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="Full Name"
                                                />
                                            </div>

                                            <div
                                                class="relative w-full mb-3 form-81"
                                                style="color:grey;"
                                            >
                                                <label
                                                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="email"
                                                    style="color:white;"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    v-model="email"
                                                    required
                                                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="Your email address"
                                                />
                                            </div>

                                            <div
                                                class="relative w-full mb-3 form-81"
                                                style="color:grey;"
                                            >
                                                <label
                                                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="message"
                                                    style="color:white;"
                                                >
                                                    Message
                                                </label>
                                                <textarea
                                                    name="message"
                                                    v-model="message"
                                                    required
                                                    rows="4"
                                                    cols="80"
                                                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="Type a message..."
                                                />
                                            </div>
                                            <div
                                                class="text-center mt-6 form-81"
                                            >
                                                <button
                                                    name="category"
                                                    value="contact"
                                                    type="submit"
                                                    class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    style="background-color:#fdcc04;"
                                                >
                                                    Send Message
                                                </button>
                                            </div>
                                            <div class="container-88">
                                                <div class="form-sent-88">
                                                    <br />
                                                    <p style="color:#bb86fc;">
                                                        {{ formSent
                                                        }}<a
                                                            class="form-82"
                                                            style="display:none;color:#bb86fc;font-weight:bold;"
                                                            href="/"
                                                            >Home Page</a
                                                        >
                                                    </p>
                                                    <br />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer-component />
        </div>
    </v-content>
</template>
<script>
    import Navbar from "@/components/AuthNavbar.vue";
    import FooterComponent from "@/components/Footer.vue";
    import Accordion from "@/components/Accordion.vue";
    // import FAQ from "@/components/FAQ.vue";

    import team1 from "@/assets/team-1-800x800.jpg";
    import team2 from "@/assets/team-2-800x800.jpg";
    import team3 from "@/assets/team-3-800x800.jpg";
    import team4 from "@/assets/team-4-470x470.png";

    import firebase from "firebase";
    import { ref } from "vue";
    // import axios from 'axios';

    // import * as  from "https://www.google.com/recaptcha/api.js";
    // import * as from "@/assets/js/googleRecaptcha.js";

    export default {
        setup() {
            const name = ref();
            const email = ref();
            const message = ref();
            var formSent = ref();
            var user = ref();
            var created = ref();
            var vehicle = ref();

            const firebaseSubmit = async () => {
                user =
                    "{" +
                    '"ContactName": "' +
                    name.value +
                    '", ' +
                    '"ContactEmail": "' +
                    email.value +
                    '", ' +
                    '"ContactID": "' +
                    new Date().getTime() +
                    '", ' +
                    '"ContactTimestamp": "' +
                    new Date() +
                    '", ' +
                    '"ContactMessage": "' +
                    message.value +
                    '"' +
                    "}";
                user = JSON.parse(user);
                // console.log(user);
                const db = firebase.firestore();
                await db
                    .collection("APIContact")
                    // .doc('contactus')
                    // .set(user)
                    .add(user)
                    .then(() => {
                        console.log(
                            "Contact Data entered into Google Cloud DB"
                        );
                        var x = document.getElementsByClassName("form-81");
                        for (var i = 0; i < x.length; i++) {
                            x[i].style.display = "none";
                        }
                        x = document.getElementsByClassName("form-82");
                        x[0].style.display = "initial";
                        formSent.value =
                            "Your message was sent successfully. We will get back at you asap. Meanwhile you may visit the ";
                    })
                    .catch((e) => console.log(e));
            };

            // const formCar = () => {
            //   console.log(vehicle.value);

            //   var data = JSON.stringify({ registrationNumber: `${vehicle.value}` });
            //   console.log(data);
            //   var config = {
            //   withCredentials: true,
            //   method: 'post',
            //   url: 'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles',
            //   headers: {
            //     'x-api-key': 'lnJTBRkwbm4Fxf5SWwCAi9l7OPV9pDTB7OvGpt6H',
            //     'Content-Type': 'application/json',
            //     'Access-Control-Allow-Origin' : '*',
            //     'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            //     "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length",
            //   },
            //   data: data,
            //   };
            //   console.log(config);

            //   axios(config)
            //     .then(function(response) {
            //       console.log(JSON.stringify(response.data));
            //     })
            //     .catch(function(error) {
            //       console.log(error);
            //     });

            // }

            return {
                name,
                email,
                message,
                user,
                formSent,
                firebaseSubmit,
                // formCar,
                vehicle,
                created,
            };
        },

        data() {
            return {
                team1,
                team2,
                team3,
                team4,
            };
        },
        components: {
            Navbar,
            FooterComponent,
            Accordion,
            // FAQ,
        },
        // methods: {
        //   // onSubmit: function(token) {
        //   //   return window.document.getElementById("contact-form").submit();
        //   // },
        // },

        // mounted () {
        //   // let grecaptcha= window.document.createElement('script');
        //   // grecaptcha.async = true;
        //   // grecaptcha.defer = true;
        //   // grecaptcha.src = "./googleRecaptcha.js";
        //   // window.document.head.appendChild(grecaptcha)

        //   // let recaptcha= window.document.createElement('script');
        //   // recaptcha.async = true;
        //   // recaptcha.defer = true;
        //   // recaptcha.src = "https://www.google.com/recaptcha/api.js";
        //   // window.document.head.appendChild(recaptcha)
        // }
    };
</script>

<style scoped>
    .container-87 {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto auto;
        /* grid-gap: 1em 1em; */
        place-items: end end;
        place-content: end end;
        grid-auto-flow: row;
    }

    .top-87 {
        grid-area: 1 / 1 / 2 / 3;
        place-self: end center;
        margin-bottom:30px;
    }

    .mid-87a {
      grid-area: 2 / 1 / 3 / 2;
        place-self: end end;
        min-height: 80px;
        max-height: 90px;
    }

    .mid-87b {
      grid-area: 2 / 2 / 3 / 3;
        place-self: start start;
        min-height: 80px;
        max-height: 90px;
    }

    .bot-87 {
        grid-area: 3 / 1 / 4 / 3;
        place-self: start center;
    }




    .container-88 {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-auto-columns: 1fr;
        grid-auto-rows: 1fr;
        grid-gap: 1em 1em;
        place-items: center center;
        place-content: center center;
    }

    .form-sent-88 {
        grid-area: 1 / 1 / 2 / 2;
        place-self: center center;
    }

    .inputReg {
        background-image: url("@/assets/gb_eu.jpg");
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
        font-size: 25px !important;
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
</style>
