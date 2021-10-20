// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
(function (window) {
  'use strict';
  var App = window.App || {};

  var FirebaseConfig = {
    apiKey: "AIzaSyBM-1F0B2d3kvzfSqEGcQNoaBQmQ9seNfo",
    authDomain: "coffeerun-56801.firebaseapp.com",
    projectId: "coffeerun-56801",
    storageBucket: "coffeerun-56801.appspot.com",
    messagingSenderId: "423921834577",
    appId: "1:423921834577:web:1da56d883e8140ddd83670",
    measurementId: "G-0TSL9GGTME"
  };
  App.FirebaseConfig = FirebaseConfig;
  firebase.initializeApp(App.FirebaseConfig);

  window.App = App;

  })(window);