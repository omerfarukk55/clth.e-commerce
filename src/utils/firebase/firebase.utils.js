import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqVWkQ5Ga_YACxeJYmkKIaA1tM4TljksQ",
  authDomain: "crwn-clothing-db-f9378.firebaseapp.com",
  projectId: "crwn-clothing-db-f9378",
  storageBucket: "crwn-clothing-db-f9378.appspot.com",
  messagingSenderId: "505464335609",
  appId: "1:505464335609:web:15e06dc0f63823f48f0628",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
//setcustom amacı sağlayıcı ile her etkileşime girdiğinde
//onu her zaman bir bir hesap seçmeye zorlamak
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth,additionalInformation = {}) => {
  if(!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  
  const userSnapshot = await getDoc(userDocRef);


  if(!userSnapshot.exists()){
    const {displayName,email} = userAuth;
    const createdAt=new Date();
    try{
      await setDoc(userDocRef ,{
        displayName,
        email,
        createdAt
        
      });
    }catch(error){
    console.log(`error creating ${error.massage}`);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email,password)=>{
  if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password);
};
export const signInAuthUserWithEmailAndPassword = async (email,password)=>{
  if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password);
};