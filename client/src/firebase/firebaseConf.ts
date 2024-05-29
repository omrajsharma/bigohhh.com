import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  Auth,
  UserCredential,
} from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/database";
import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getDatabase, Database } from "firebase/database";
import { getStorage, FirebaseStorage } from "firebase/storage";
import { Zoom, toast } from "react-toastify";

const firebaseConfig: FirebaseOptions = {
};


const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase authentication
const auth: Auth = getAuth(app);

// Initialize Firestore database
const firestore: Firestore = getFirestore(app);

// Initialize Realtime Database
const database: Database = getDatabase(app);

// Initialize Firebase storage
const storage: FirebaseStorage = getStorage(app);

const provider: GoogleAuthProvider = new GoogleAuthProvider();

// Whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({
  prompt: "select_account",
});

const signInWithGooglePopup = async (): Promise<UserCredential> => {
  try {
    return await signInWithPopup(auth, provider);
  } catch (error) {
    console.error(error);
    throw error; // Optional: rethrow the error if you want to handle it outside
  }
};

const signOutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
    localStorage.clear();
    toast.success("Logged out successfully", { transition: Zoom });
    window.location.href = "#/";
    window.location.reload();
  } catch (error) {
    console.error(error);
    throw error; // Optional: rethrow the error if you want to handle it outside
  }
};

export {
  auth,
  firestore,
  database,
  storage,
  app,
  signInWithGooglePopup,
  signOutUser,
};
