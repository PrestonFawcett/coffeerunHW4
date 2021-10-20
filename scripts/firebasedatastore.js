// import { initializeApp } from 'firebase.app';

(function (window) {
  'use strict';
  var App = window.App || {};
  // var $ = window.jQuery;
  // var firebaseConfig = {
  //   apiKey: "AIzaSyBM-1F0B2d3kvzfSqEGcQNoaBQmQ9seNfo",
  //   authDomain: "coffeerun-56801.firebaseapp.com",
  //   projectId: "coffeerun-56801",
  //   storageBucket: "coffeerun-56801.appspot.com",
  //   messagingSenderId: "423921834577",
  //   appId: "1:423921834577:web:1da56d883e8140ddd83670",
  //   measurementId: "G-0TSL9GGTME"
  // };

  class FirebaseDataStore {
      constructor() {
        console.log('running the FireBaseDataStore function');
        
        // firebase.initializeApp(App.FirebaseConfig);
        this.db = firebase.firestore();
      }
      async add(key, val) {
          console.log('firebase add  ');
          const docRef = this.db.doc(`orders/${this.makeDocHash(20)}`);
          return docRef.set(val); 
      }
      async get(email, cb)  { 
          const docRef = this.db.collection('orders');
          const snapshot = await docRef.where('emailAddress', '==', email).get();
          return await snapshot.docs.map(e => e.data());
      }
      async getAll(cb)    { 
          const docRef = this.db.collection('orders');
          const snapshot = await docRef.get();
          return await snapshot.docs.map(e => e.data());
      }
      async remove(email)   { 
          const docRef = await this.db.collection('orders');
          const batch = this.db.batch();
          const snapshot = await docRef.where('emailAddress', '==', email).get();
          snapshot.forEach(doc => {
              batch.delete(doc.ref);
          });
          await batch.commit();
      }
      makeDocHash(len) {
          var result           = '';
          var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;
          for ( var i = 0; i < len; i++ ) {
             result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return result;
       }
  }
  App.FirebaseDataStore = FirebaseDataStore;
  window.App = App;

})(window);