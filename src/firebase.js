import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyBXgQRLWcaRVCrADB0ZoZzO3JYnH9hAbbM",
  authDomain: "crudonfire.firebaseapp.com",
  databaseURL: "https://crudonfire-default-rtdb.firebaseio.com",
  projectId: "crudonfire",
  storageBucket: "crudonfire.appspot.com",
  messagingSenderId: "226020567267",
  appId: "1:226020567267:web:647b6314336d99a307bdd6",
};

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();

// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/database";

// // var firebaseConfig = {
// //   apiKey: "AIzaSyA4dbzBoY-oFU7bkt7M8IE0wBpe5bOAiHQ",
// //   authDomain: "firecrud-001.firebaseapp.com",
// //   databaseURL: "https://firecrud-001-default-rtdb.firebaseio.com",
// //   projectId: "firecrud-001",
// //   storageBucket: "firecrud-001.appspot.com",
// //   messagingSenderId: "1028484668783",
// //   appId: "1:1028484668783:web:fc345d4fe335d8e6bd5c9a",
// // };

// const firebaseConfig = {
//   apiKey: "AIzaSyBXgQRLWcaRVCrADB0ZoZzO3JYnH9hAbbM",
//   authDomain: "crudonfire.firebaseapp.com",
//   projectId: "crudonfire",
//   storageBucket: "crudonfire.appspot.com",
//   messagingSenderId: "226020567267",
//   appId: "1:226020567267:web:ac0f56ea31f2b1c807bdd6",
// };

// // Initialize Firebase
// var fireDb = firebase.initializeApp(firebaseConfig);

// export default fireDb.database().ref();
