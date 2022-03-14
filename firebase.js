// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBR640-ImZdjG2y8NG8Z4jRsaB3FftxO2c',
  authDomain: 'uber-next-clone-live-492f8.firebaseapp.com',
  projectId: 'uber-next-clone-live-492f8',
  storageBucket: 'uber-next-clone-live-492f8.appspot.com',
  messagingSenderId: '1034414451088',
  appId: '1:1034414451088:web:ab54a140a788888db5eb15',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }
