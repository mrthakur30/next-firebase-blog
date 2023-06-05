import { useAuthState } from "react-firebase-hooks/auth"
import { useEffect , useState } from "react";
import { auth , firestore } from "@/libraries/firebase";
import { doc, onSnapshot } from 'firebase/firestore';

export function useUserData(){
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);
  let unsubscribe ;
  useEffect(() => {
    if (user) {
      const userRef = doc(firestore, 'users', user.uid);
      unsubscribe = onSnapshot(userRef, (doc) => {
        setUsername(doc.data()?.username);
      });
    } else {
      setUsername(null);
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user]);

  return {user, username};
}