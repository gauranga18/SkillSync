import { auth } from "./Firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
return createUserWithEmailAndPassword(auth,email,password)
};
export const doSignInWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth,email,password)
}
export const doSignInWithGoogle = async()=>{
const provider = new GoogleAuthProvider();   
const result = await signInWithPopUp(auth, provider);
return result;
}
export const doSignOut=()=>{
return auth.signOut();
}
export const doPasswordReset = (email) => {
return sendPasswordResetEmail(auth,email);
}
export const doPasswordChange=(password)=>{
    return updatePassword(auth.currentUser,password);
}
export const doSendVerificationEmail=()=>{
    return sendEmailVerification(auth.currentUser,{
        url: '${window.location.origin}/home',
    });
};