import Firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBVLMpP6qB6EI5JCsQTEnY3O9N5EEIFBaM',
  authDomain: 'pizza-planet-b2986.firebaseapp.com',
  databaseURL: 'https://pizza-planet-b2986.firebaseio.com',
  projectId: 'pizza-planet-b2986',
  storageBucket: '',
  messagingSenderId: '180841740035'
}

const firebaseApp = Firebase.initializeApp(config)
const db = firebaseApp.database()
export const dbMenuRef = db.ref('menu')
