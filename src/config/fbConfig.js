// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// Initialize Firebase
var firebaseConfig = {
	apiKey: 'AIzaSyCtDWuThIFZYm6GQXsVyQQoqmjjLh_PFfk',
	authDomain: 'prank-vault.firebaseapp.com',
	projectId: 'prank-vault',
	storageBucket: 'prank-vault.appspot.com',
	messagingSenderId: '139841240474',
	appId: '1:139841240474:web:0fd4fabedf05adeb7a8e23',
	measurementId: 'G-RNM5157BT4',
};

// firebase.firestore().settings({ timestampsInSnapshot: true })

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

console.log(firebaseApp);

export default firebaseApp;
