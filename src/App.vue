<template>
  <div id="app">
    <router-view />
  </div>
</template>

<!-- 
// <script>
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

// import { onMounted } from "vue";
// import axios from "axios";

// export default {
//   setup() {
//     onMounted(() => {
//         axios.get('/firebase')
//             .then((res)=>{

//                 var apikey = res.data.apiKey; 
//                 console.log(apikey);
//                 console.log(typeof apikey);

//                 const firebaseConfig = {
//                 apiKey: apikey,
//                 authDomain: "car-connect-e8da5.firebaseapp.com",
//                 projectId: "car-connect-e8da5",
//                 storageBucket: "car-connect-e8da5.appspot.com",
//                 messagingSenderId: "864993183927",
//                 appId: "1:864993183927:web:810059a116a4f9d8992532",
//                 measurementId: "G-B1K3THS4VB"
//                 };
//                 firebase.initializeApp(firebaseConfig);
//                 console.log(firebaseConfig);
//                 console.log(firebase);
                
//                 })
//             .catch((e) => console.log(e));
//     });
//   }
// }
// </script> -->
