import { initializeApp } from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC9ikgLsbk3b7rqxOICmGrpJK20ukZClEg",
    authDomain: "rn-test-auth-db651.firebaseapp.com",
    projectId: "rn-test-auth-db651",
    storageBucket: "rn-test-auth-db651.appspot.com",
    messagingSenderId: "736861052684",
    appId: "1:736861052684:web:6dd2c19a24b86cf82b3329"
  };
  
  
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

  export const signUp = async (email, password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.error('registrition failed : ', error)
    }
  }

  export const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.error('login failed : ', error)
    }
  }

  export const signOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('sign out failed : ', error)
    }
  }

  export default app;
