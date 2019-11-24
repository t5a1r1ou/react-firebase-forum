import { firestore, initializeApp } from 'firebase/app';
import 'firebase/firestore';

initializeApp({
  apikey: "AIzaSyDm-cO8uE-WikS5OUOG76QqGqwiFbYCV2Y",
  authDomain: "techpit-react.firebaseapp.com",
  databaseURL: "https://techpit-react.firebaseio.com",
  projectId: "techpit-react",
  storageBucket: "techpit-react.appspot.com",
  messagingSenderId: "386908291991",
  appID: "1:386908291991:web:5585668cacd6cc75173ad2"
});

firestore().settings({ timestampsInSnapshots: true });

firestore()
  .enablePersistence({ experimentalTabSynchronization: true })
  .catch(err => {
    console.error(err);
  });
