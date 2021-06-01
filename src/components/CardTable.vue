<template>
  <!-- <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded" style="background: #303030;"
    :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
  > -->
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 rounded" style="background: #303030;"
    :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
  >
    

    <!-- <div><br/><br/>
      <h3 class="font-semibold text-lg text-blueGray-700">Vehicle Details Entries Fetched from Firestore.</h3><br/>
      {{ vehicle }}
    </div> -->

    <!-- <APICard/> -->
    <!-- <BadgerAccordion/> -->




















    <!-- <textarea id="RawJson"> 
    </textarea> 
    <div id="ControlsRow"> 
      <input type="Button" value="Format" onClick="Process()"/> 
      <span id="TabSizeHolder"> 
        tab size: 
        <select id="TabSize" onChange="TabSizeChanged()"> 
          <option value="1">1</option> 
          <option value="2">2</option> 
          <option value="3" selected="true">3</option> 
          <option value="4">4</option> 
          <option value="5">5</option> 
          <option value="6">6</option> 
        </select> 
      </span> 
      <label for="QuoteKeys"> 
        <input type="checkbox" id="QuoteKeys" onClick="QuoteKeysClicked()" checked="true" /> 
        Keys in Quotes
      </label>&nbsp; 
      <a href="javascript:void(0);" onClick="SelectAllClicked()">select all</a> 
      &nbsp;
      <span id="CollapsibleViewHolder" > 
          <label for="CollapsibleView"> 
            <input type="checkbox" id="CollapsibleView" onClick="CollapsibleViewClicked()" checked="true" /> 
            Collapsible View
          </label> 
      </span> 
      <span id="CollapsibleViewDetail"> 
        <a href="javascript:void(0);" onClick="ExpandAllClicked()">expand all</a> 
        <a href="javascript:void(0);" onClick="CollapseAllClicked()">collapse all</a> 
        <a href="javascript:void(0);" onClick="CollapseLevel(3)">level 2+</a> 
        <a href="javascript:void(0);" onClick="CollapseLevel(4)">level 3+</a> 
        <a href="javascript:void(0);" onClick="CollapseLevel(5)">level 4+</a> 
        <a href="javascript:void(0);" onClick="CollapseLevel(6)">level 5+</a> 
        <a href="javascript:void(0);" onClick="CollapseLevel(7)">level 6+</a> 
        <a href="javascript:void(0);" onClick="CollapseLevel(8)">level 7+</a> 
        <a href="javascript:void(0);" onClick="CollapseLevel(9)">level 8+</a> 
      </span> 
    </div> 
    <div id="Canvas" class="Canvas"></div> 
    
    <form id="InvisibleLink" action="http://www.bodurov.com/JsonFormatter/view.aspx" target="_blank"> 
      <input type="hidden" id="InvisibleLinkUrl" name="json" value="" /> 
    </form> 
    
    <div style="font-size:10px;color:grey;text-align:right;margin-top:20px"> 
      <input type="button" value="link to this json" onClick="LinkToJson()" style="color:#777" /> &nbsp; &nbsp;
      my other tools: &nbsp;
      <a href="http://www.bodurov.com/NearestStars/" class="OtherToolsLink"> 
        Nearest Stars</a> &nbsp; &nbsp;
      <a href="http://www.bodurov.com/VectorVisualizer/" class="OtherToolsLink"> 
        Vector Visualizer</a> &nbsp; &nbsp;
      a href="http://www.bodurov.com/BitmapVectorizer/" class="OtherToolsLink">
        Bitmap Vectorizer</a> 
    </div>  -->


    <Tabs/>





    <div><br/><br/><br/>
      <h3 class="font-semibold text-lg text-blueGray-700" style="color:white;background-color:#505050;width:100%;">CLIENT VEHICLE DETAIL REQUESTS - LATEST 100 REQUESTS.</h3><br/>
      <div id="APIClient"></div>
    </div>
    
    
    <div><br/><br/><br/>
      <h3 class="font-semibold text-lg text-blueGray-700" style="color:white;background-color:#505050;width:100%;">CLIENT CONTACT REQUESTS - LATEST 100 REQUESTS.</h3><br/>
      <div id="APIContact"></div>
    </div>









    <div><br/><br/><br/>
      <h3 class="font-semibold text-lg text-blueGray-700" style="color:white;background-color:#505050;width:100%;">FIRST API CALL - INITIAL DETAILS.</h3><br/>
      <div>
        <form action="/API1" method="post" @submit.prevent="API1">
          <div style=" display: table; margin: 4px; padding: 1px;">
              <div style="display: table-cell;">
                <input
                  v-model="API1Input"
                  required
                  name="API1Input"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="name" 
                  style="margin: 1px;" 
                  placeholder="e.g. AA19AAA"
                />
              </div>
              <div class="ml-2">
                <button
                  name="API1Button"
                  value="Car Details"
                  type="submit"
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 ml-2 mb-1 ease-linear transition-all duration-150"
                  style="margin: 1px; background-color: #fdcc04;" 
                >
                  Initial Details
                </button>
              </div>
          </div>
          <div>
            <div id="API1"></div>
            <!-- {{ API1Output }} -->
          </div>
        </form>
      </div>
    </div><br/><br/><br/>











    <div><br/><br/><br/>
      <h3 class="font-semibold text-lg text-blueGray-700" style="color:white;background-color:#505050;width:100%;">SECOND API CALL - CAR VALUE.</h3><br/>
      <div>
        <form action="/API2" method="post" @submit.prevent="API2">
          <div style=" display: table; margin: 4px; padding: 1px;">
              <div style="display: table-cell;">
                <input
                  v-model="API2Input"
                  required
                  name="API2Input"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="name" 
                  style="margin: 1px;" 
                  placeholder="e.g. AA19AAA"
                />
              </div>
              <div class="ml-2">
                <button
                  name="API2Button"
                  value="Car Valuation"
                  type="submit"
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 ml-2 mb-1 ease-linear transition-all duration-150"
                  style="margin: 1px; background-color: #fdcc04;" 
                >
                  Car Value
                </button>
              </div>
          </div>
          <div>
            <div id="API2"></div>
            <!-- {{ carValuationOutput }} -->
          </div>
        </form>
      </div>
    </div><br/><br/><br/>

    <div><br/><br/><br/>
      <h3 class="font-semibold text-lg text-blueGray-700" style="color:white;background-color:#505050;width:100%;">THIRD API CALL - HPI CHECK.</h3><br/>
      <div>
        <form action="/API3" method="post" @submit.prevent="API3">
          <div style=" display: table; margin: 4px; padding: 1px;">
              <div style="display: table-cell;">
                <input
                  v-model="API3Input"
                  required
                  name="API3Input"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="name" 
                  style="margin: 1px;" 
                  placeholder="e.g. AA19AAA"
                />
              </div>
              <div class="ml-2">
                <button
                  name="API3Button"
                  value="Car Full VDI Check"
                  type="submit"
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-2 ease-linear transition-all duration-150"
                  style="margin: 1px; background-color: #fdcc04;" 
                >
                  HPI Check
                </button>
              </div>
          </div>
          <div>
            <div id="API3"></div>
            <!-- {{ carFullVDIOutput }} -->
          </div>
        </form>
      </div>
    </div><br/><br/><br/>

    <!-- <div><br/><br/><br/>
      <h3 class="font-semibold text-lg text-blueGray-700" style="color:white;">Sample Table.</h3><br/>
    </div><br/>

    
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-lg" style="color:grey;"
            :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
          >
            Customer Details
          </h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      Projects table
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Car Details
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Budget
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Status
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Customer Details
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Further API Calls
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            ></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
            >
              <img
                :src="bootstrap"
                class="h-12 w-12 bg-white rounded-full border"
                alt="..."
              />
              <span
                class="ml-3 font-bold" style="color:grey;"
                :class="[
                  color === 'light' ? 'text-blueGray-600' : 'text-white',
                ]"
              >
                Argon Design System
              </span>
            </th>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style="color:grey;"
            >
              $2,500 USD
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <i class="fas fa-circle text-orange-500 mr-2" style="color:grey;"></i> pending
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <div class="flex">
                <img
                  :src="team1"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                />
                <img
                  :src="team2"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
                <img
                  :src="team3"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
                <img
                  :src="team4"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
              </div>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <div class="flex items-center">
                <span class="mr-2" style="color:grey;">60%</span>
                <div class="relative w-full">
                  <div
                    class="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                  >
                    <div
                      style="width: 60%;"
                      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                    ></div>
                  </div>
                </div>
              </div>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
            >
              <table-dropdown />
            </td>
          </tr>
          <tr>
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
            >
              <img
                :src="angular"
                class="h-12 w-12 bg-white rounded-full border"
                alt="..."
              />
              <span
                class="ml-3 font-bold" style="color:grey;"
                :class="[
                  color === 'light' ? 'text-blueGray-600' : 'text-white',
                ]"
              >
                Angular Now UI Kit PRO
              </span>
            </th>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style="color:grey;"
            >
              $1,800 USD
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <i class="fas fa-circle text-emerald-500 mr-2" style="color:grey;"></i>
              completed
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <div class="flex">
                <img
                  :src="team1"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                />
                <img
                  :src="team2"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
                <img
                  :src="team3"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
                <img
                  :src="team4"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
              </div>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <div class="flex items-center">
                <span class="mr-2" style="color:grey;">100%</span>
                <div class="relative w-full">
                  <div
                    class="overflow-hidden h-2 text-xs flex rounded bg-emerald-200"
                  >
                    <div
                      style="width: 100%;"
                      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                    ></div>
                  </div>
                </div>
              </div>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
            >
              <table-dropdown />
            </td>
          </tr>
          <tr>
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
            >
              <img
                :src="sketch"
                class="h-12 w-12 bg-white rounded-full border"
                alt="..."
              />
              <span
                class="ml-3 font-bold" style="color:grey;"
                :class="[
                  color === 'light' ? 'text-blueGray-600' : 'text-white',
                ]"
              >
                Black Dashboard Sketch
              </span>
            </th>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style="color:grey;"
            >
              $3,150 USD
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <i class="fas fa-circle text-red-500 mr-2" style="color:grey;"></i> delayed
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <div class="flex">
                <img
                  :src="team1"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                />
                <img
                  :src="team2"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
                <img
                  :src="team3"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
                <img
                  :src="team4"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
              </div>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <div class="flex items-center">
                <span class="mr-2" style="color:grey;">73%</span>
                <div class="relative w-full">
                  <div
                    class="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                  >
                    <div
                      style="width: 73%;"
                      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                    ></div>
                  </div>
                </div>
              </div>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
            >
              <table-dropdown />
            </td>
          </tr>
          <tr>
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
            >
              <img
                :src="react"
                class="h-12 w-12 bg-white rounded-full border"
                alt="..."
              />
              <span
                class="ml-3 font-bold" style="color:grey;"
                :class="[
                  color === 'light' ? 'text-blueGray-600' : 'text-white',
                ]"
              >
                React Material Dashboard
              </span>
            </th>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style="color:grey;"
            >
              $4,400 USD
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <i class="fas fa-circle text-teal-500 mr-2" style="color:grey;"></i> on schedule
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <div class="flex">
                <img
                  :src="team1"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                />
                <img
                  :src="team2"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
                <img
                  :src="team3"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
                <img
                  :src="team4"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
              </div>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <div class="flex items-center">
                <span class="mr-2" style="color:grey;">90%</span>
                <div class="relative w-full">
                  <div
                    class="overflow-hidden h-2 text-xs flex rounded bg-teal-200"
                  >
                    <div
                      style="width: 90%;"
                      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                    ></div>
                  </div>
                </div>
              </div>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
            >
              <table-dropdown />
            </td>
          </tr>
          <tr>
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
            >
              <img
                :src="vue"
                class="h-12 w-12 bg-white rounded-full border"
                alt="..."
              />
              <span
                class="ml-3 font-bold" style="color:grey;"
                :class="[
                  color === 'light' ? 'text-blueGray-600' : 'text-white',
                ]"
              >
                React Material Dashboard
              </span>
            </th>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style="color:grey;"
            >
              $2,200 USD
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style="color:grey;"
            >
              <i class="fas fa-circle text-emerald-500 mr-2 " ></i>
              completed
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <div class="flex">
                <img
                  :src="team1"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                />
                <img
                  :src="team2"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
                <img
                  :src="team3"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
                <img
                  :src="team4"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
              </div>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <div class="flex items-center">
                <span class="mr-2" style="color:grey;">100%</span>
                <div class="relative w-full">
                  <div
                    class="overflow-hidden h-2 text-xs flex rounded bg-emerald-200"
                  >
                    <div
                      style="width: 100%;"
                      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                    ></div>
                  </div>
                </div>
              </div>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
            >
              <table-dropdown />
            </td>
          </tr>
        </tbody>
      </table>
    </div> -->
  </div>
</template>
<script>
// import TableDropdown from "@/components/TableDropdown.vue";
// import APICard from "@/components/APICard.vue";
// import BadgerAccordion from "@/components/BadgerAccordion.vue";
import Tabs from "@/components/Tabs.vue";

import bootstrap from "@/assets/bootstrap.jpg";
import angular from "@/assets/angular.jpg";
import sketch from "@/assets/sketch.jpg";
import react from "@/assets/react.jpg";
import vue from "@/assets/react.jpg";

import team1 from "@/assets/team-1-800x800.jpg";
import team2 from "@/assets/team-2-800x800.jpg";
import team3 from "@/assets/team-3-800x800.jpg";
import team4 from "@/assets/team-4-470x470.png";

import { ref } from 'vue';
import firebase from "firebase"; 
// import { onMounted} from 'vue';
import {onBeforeMount } from "vue";
import axios from 'axios';

import JSONFormatter from 'json-formatter-js'

export default {
  setup (){
    var API1Input = ref();
    var API1Output = ref();
    var API2Input = ref();
    var API2Output = ref();
    var API3Input = ref();
    var API3Output = ref();
    // var contactus = ref();
    // var client = ref();
    // var carValuationOutput = ref();
    // var carFullVDIOutput = ref();
    // var data = ref();
    // var obj = ref();



    var getData = () => {
      APIClient("APIClient", "Car ID").then( res => {
          for(var i = 0; i<res.length; i++)
            {
              res[i] = Object.keys(res[i]).sort().reduce(
                (obj, key) => { 
                  obj[key] = res[i][key]; 
                  return obj;
                }, 
                {}
              );
            }
          // JSONToHTMLTable(res, "APIClient");
          JSONData(res, "APIClient");
        })
        .catch(e => console.log(e));

      APIContact("APIContact", "ID").then( res => {
          for(var i = 0; i<res.length; i++)
            {
              res[i] = Object.keys(res[i]).sort().reduce(
                (obj, key) => { 
                  obj[key] = res[i][key]; 
                  return obj;
                }, 
                {}
              );
            }
          // JSONToHTMLTable(res, "APIClient");
          JSONData(res, "APIContact");
        })
        .catch(e => console.log(e));
    }


    var JSONData = (data, holder) => {
      const formatter = new JSONFormatter(data, 1, {theme : 'dark'});
      var divContainer = document.getElementById(holder);
      divContainer.innerHTML = "";
      divContainer.appendChild(formatter.render());
    }


    // function JSONToHTMLTable(jsonData, elementToBind) {
    //   //This Code gets all columns for header   and stored in array col
    //   var col = [];
    //   for (var i = 0; i < jsonData.length; i++) {
    //       for (var key in jsonData[i]) {
    //           if (col.indexOf(key) === -1) {
    //               col.push(key);
    //           }
    //       }
    //   }

    //   //This Code creates HTML table
    //   var table = document.createElement("table");
    //   table.style.color = "grey";

    //   //This Code getsrows for header creader above.
    //   var tr = table.insertRow(-1);

    //   for (var p  = 0; p < col.length; p++) {
    //       var th = document.createElement("th");
    //       th.innerHTML = col[p];
    //       tr.appendChild(th);
    //   }

    //   //This Code adds data to table as rows
    //   for (var q = 0; q < jsonData.length; q++) {

    //       tr = table.insertRow(-1);

    //       for (var r = 0; r < col.length; r++) {
    //           var tabCell = tr.insertCell(-1);
    //           tabCell.innerHTML = jsonData[q][col[r]];
    //       }
    //   }

    //   //This Code gets the all columns for header
    //   var divContainer = document.getElementById(elementToBind);
    //   divContainer.innerHTML = "";
    //   divContainer.appendChild(table);
    // }





    var APIClient = (collection, orderField) => {
      return new Promise((res, rej) => {
      firebase
              .firestore()
              .collection(collection)
              .orderBy(orderField,'desc')
              .limit(100)
              .get()
              .then(snapshot => {
                console.log("Client Data fetched from Firestore.");
                var data = snapshot.docs.map(doc => doc.data());

                res(data);
              })
              .catch((e)=>{
                console.log(e);
                rej(e);
              });
      })
    }


    var APIContact = (collection, orderField) => {
      return new Promise((res, rej) => {
      firebase
              .firestore()
              .collection(collection)
              .orderBy(orderField,'desc')
              .limit(100)
              .get()
              .then(snapshot => {
                console.log("Contact Data fetched from Firestore.");
                var data = snapshot.docs.map(doc => doc.data());

                res(data);
              })
              .catch((e)=>{
                console.log(e);
                rej(e);
              });
      })
    }





    var API1 =  async () => {
      await firebase
              .firestore()
              .collection('API1')
              .where('registrationNumber','==', API1Input.value)
              .limit(1)
              .get()
              .then(snapshot => {
                console.log("API1 Data fetched from Firestore.");
                var data = snapshot.docs.map(doc => doc.data());
                JSONData(data, "API1");
              })
              .catch((e)=>{
                console.log(e);
              });
    }






    var API2 = async () => {
      // var match = JSON.parse(`{Vrm: ${API2Input.value}}`);
      // console.log(match);
      // var db = firebase.firestore();
      // db.collection('API2').where("API2Input.value", "array-contains", match).get().then(snapshot => {
      //     const data = snapshot.val();
      //     data.forEach(doc => {
      //       if (doc.exists) {
      //         console.log("exist");
      //       } else {
      //         console.log("not exist");
      //       }
      //     });
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });

      var URL = "https://uk1.ukvehicledata.co.uk/api/datapackage/ValuationData?v=2&api_nullitems=1&auth_apikey=87715f2c-f6a3-4f77-8527-94511f3ee5a4&key_VRM="+API2Input.value;
      await axios.get(URL).then((response) => {
        API2Output.value = response.data;
        JSONData(API2Output.value, "API2");
        const db = firebase.firestore();
        db.collection('API2').add(API2Output.value).then(
            console.log("API2 Data entered into Firestore.")
          )
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
    }


    var API3 = async () => {
      var URL = "https://uk1.ukvehicledata.co.uk/api/datapackage/VdiCheckFull?v=2&api_nullitems=1&auth_apikey=87715f2c-f6a3-4f77-8527-94511f3ee5a4&key_VRM="+API3Input.value;
      await axios.get(URL).then((response) => {
        API3Output.value = response.data;
        JSONData(API3Output.value, "API3");
        const db = firebase.firestore();
        db.collection('API3').add(API3Output.value).then(
            console.log("API3 Data entered into Firestore.")
          )
          .catch(e => console.log(e));
        })
        .catch(e => console.log(e));

    }







    // var getContactus = async  () => {
    // await firebase
    //         .firestore()
    //         .collection('contactus')
    //         .orderBy('Date Created','desc')
    //         .get()
    //         .then(snapshot => {
    //           contactus.value = snapshot.docs.map(doc => doc.data());
    //           console.log(contactus.value);
    //           JSONToHTMLTable(contactus.value, "contactus");
    //         }
    //         )
    
    // // console.log(contactus.value);
    // return contactus.value;
    // }



    onBeforeMount(() => {
      getData();
      // getContactus();
      // firebaseFetch();
      // JSONData();
      // display();
    })

    return {
      APIClient,
      APIContact,
      API1,
      API1Input,
      API1Output,
      API2,
      API2Input,
      API2Output,
      API3,
      API3Input,
      API3Output,
      getData,
      JSONData,
      // JSONToHTMLTable,
      // contactus,
      // data,
      // client,
      // carValuationOutput,
      // carFullVDICheck,
      // carFullVDIOutput,

      // firebaseFetchAPI1,
      // obj,


      // display,
      // LinkToJson,
      // SelectAllClicked,
      // TabSizeChanged,
      // CollapseLevel,
      // ExpImgClicked,
      // ExpandAllClicked,
      // CollapseAllClicked,
      // QuoteKeysClicked,
      // CollapsibleViewClicked,
    }

  },

  data() {
    return {
      bootstrap,
      angular,
      sketch,
      react,
      vue,
      team1,
      team2,
      team3,
      team4,
      
    };
  },
  components: {
    // BadgerAccordion,
    // TableDropdown,
    // APICard,
    Tabs,
  },
  props: {
    color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style scoped>

.th-90 {background-color:#000; color:#fff}
.th-90,.td-90 {padding:10px}

.tr-90:nth-child(odd) {
    background-color: #f2f2f2      
}

.json-formatter-dark{
  background-color: #FF0000 !important;
}

</style>