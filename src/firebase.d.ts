declare module '@/firebase.js' {
  import type { Auth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
  import type { Firestore } from 'firebase/firestore';
  export const auth: Auth;
  export const provider: GoogleAuthProvider;
  export const signInWithPopup: typeof signInWithPopup;
  export const signOut: typeof signOut;
  export const db: Firestore;
}
