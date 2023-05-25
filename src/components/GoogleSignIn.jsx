import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

const GoogleSignIn = ()=>{

const firebaseConfig = {
  apiKey: "AIzaSyCIf7a5PsNDsV1-nlOULpWvBAqgJ4LsDfM",
  authDomain: "college-task-338e8.firebaseapp.com",
  projectId: "college-task-338e8",
  storageBucket: "college-task-338e8.appspot.com",
  messagingSenderId: "489456071845",
  appId: "1:489456071845:web:0b8ea0d465d0a2a61ec94c",
  measurementId: "G-LN0VJ0RVM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider=new GoogleAuthProvider();

const signInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{
        // const user=result.user;
        console.log(result);
    })
}
    return(
        <div>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    );
}

export default GoogleSignIn;