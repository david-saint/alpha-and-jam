import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyCIqoA7Ft1Quo4oZKu3nzejKFD_fxTJ3oA",
  authDomain: "alpha-jam-traffic.firebaseapp.com",
  databaseURL: "https://alpha-jam-traffic.firebaseio.com",
  projectId: "alpha-jam-traffic",
  storageBucket: "alpha-jam-traffic.appspot.com",
  messagingSenderId: "430808773397"
});

export const db = app.database();

export const goodRef = db.ref('good');
export const mediumRef = db.ref('medium');
export const badRef = db.ref('bad');