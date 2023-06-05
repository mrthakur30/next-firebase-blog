import {initializeApp} from 'firebase/app';
import firebase from 'firebase/app' ;
import {getAuth , GoogleAuthProvider} from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { collection, query, where, limit, getDocs } from 'firebase/firestore';
import {getStorage} from 'firebase/storage' ;
const firebaseConfig = {
  apiKey: "AIzaSyBGbU3lCXdorJcvB02O5DhSpwPTjua2dFY",
  authDomain: "blog-next-c7124.firebaseapp.com",
  projectId: "blog-next-c7124",
  storageBucket: "blog-next-c7124.appspot.com",
  messagingSenderId: "510329164751",
  appId: "1:510329164751:web:1b5d8fa18ea6022b2478ba",
  measurementId: "G-EBCG0SFNZ3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = collection(firestore, 'users');
  const queryRef = query(usersRef, where('username', '==', username), limit(1));
  const querySnapshot = await getDocs(queryRef);
  const userDoc = querySnapshot.docs[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  };
}
