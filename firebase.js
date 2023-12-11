import { initializeApp } from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC9ikgLsbk3b7rqxOICmGrpJK20ukZClEg",
    authDomain: "rn-test-auth-db651.firebaseapp.com",
    projectId: "rn-test-auth-db651",
    storageBucket: "rn-test-auth-db651.appspot.com",
    messagingSenderId: "736861052684",
    appId: "1:736861052684:web:6dd2c19a24b86cf82b3329"
  };
  
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export const signUp = async (email, password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password)
        console.log('new user registred')
    } catch (error) {
        console.error(error)
    }
  }

  export default app;
