import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

export const firebaseApp = firebase.initializeApp({
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_API_PROJECT_ID,
    storageBucket: process.env.VUE_API_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_API_ID
})

export default function install(Vue) {
    Object.defineProperty(Vue.prototype, '$firebase', {
        get() {
            return firebaseApp
        }
    })
}