import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import VueCookies from 'vue3-cookies';

import axios from 'axios'
import VueAxios from 'vue-axios'

// import firebase from "firebase";
// import "firebase/firestore";
// import firebase from "firebase";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB_zrkBKkBXVN6d4Cx4y0iSM_Shc39o-PU",
  authDomain: "car-connect-e8da5.firebaseapp.com",
  projectId: "car-connect-e8da5",
  storageBucket: "car-connect-e8da5.appspot.com",
  messagingSenderId: "864993183927",
  appId: "1:864993183927:web:810059a116a4f9d8992532",
  measurementId: "G-B1K3THS4VB"
};
firebase.initializeApp(firebaseConfig);


import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/tailwind.css";

import App from "@/App.vue";

import Home from "@/components/Home.vue";
import Dashboard from "@/components/Dashboard.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import Details from "@/components/Details.vue";

import VueScrollTo from 'vue-scrollto';
// window.$ = window.jQuery = require('jquery');

const routes = [
  {
    path: "/",
    component: Home,
    name: 'Home',
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/details",
    component: Details,
  },
  { 
    path: "/:pathMatch(.*)*", redirect: "/" 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .use(VueCookies)
  .use(VueScrollTo)
  .use(VueAxios, axios)
  
  .mount("#app");

