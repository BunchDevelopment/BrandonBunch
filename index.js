import Navigation from "./components/Navigation.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Content from "./components/Content.js";
import * as states from "./store";

import Navigo from 'navigo';



const router = new Navigo(window.location.origin);
const root = document.querySelector("#root");

router
    .on(":page", handleRoute)
    .on("/", () => render(states.Home))
    .resolve();

function handleRoute(params){
    const page = params.page;
    render(states[page]);
}

function render(state) {
    root.innerHTML = `
        ${Navigation(state)}
        ${Header(state)}
        ${Content(state)}
        ${Footer()}
    `;

    router.updatePageLinks();
}


    // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyDI44IgKM5LKbmTzCojkmLhUQ-6hN1n-ZI",
//     authDomain: "intheround-2e6ac.firebaseapp.com",
//     databaseURL: "https://intheround-2e6ac.firebaseio.com",
//     projectId: "intheround-2e6ac",
//     storageBucket: "intheround-2e6ac.appspot.com",
//     messagingSenderId: "422980801384",
//     appId: "1:422980801384:web:291f68ea04c7754f"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   var firestore = firebase.firestore();

//   const docRef = firestore.doc("samples/sandwichData");
//   const outputHeader = document.querySelector("#hotDogOutput");
//   const inputTextField = document.querySelector("#latestHotDogStatus");
//   const saveButton = document.querySelector("#saveButton");

//   saveButton.addEventListener("click", function() {
//       const textToSave = inputTextField.value;
//       console.log(`I am going to save ${textToSave} to Firestore.`);
//       docRef.set({
//           hotDogStatus: textToSave
//       });
//   })