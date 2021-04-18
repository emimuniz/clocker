import firebase from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyD5HgeTLyFV0tFpw2M7EK6ymo8RLAHbNxs',
  authDomain: 'clocker-da6af.firebaseapp.com',
  projectId: 'clocker-da6af',
  storageBucket: 'clocker-da6af.appspot.com',
  messagingSenderId: '268396370124',
  appId: '1:268396370124:web:659d3f7d616c1114398a69',
  measurementId: 'G-VG64PX2GXT',
};

export default firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig);
