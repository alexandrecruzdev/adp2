import { auth } from './config/firebase';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

function Auth({ user, setUser,buttonText }) {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => setUser(loggedInUser));
    return () => unsubscribe(); // Cleanup function to unsubscribe from the listener when the component unmounts
  }, [setUser]);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      console.log('Usuario ' + result.user.email + ' logado com sucesso!');
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  const handlerSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  return (
    <>
    {user ? (
      <div className="text-center lg:flex lg:items-center lg:justify-center">
        
        <div className='flex flex-col items-center'>
        <img src={user.photoURL} className="w-12 h-12 rounded-full" alt="asd" />
          <h1 className="mb-2">{user.displayName}</h1>
          <button onClick={handlerSignOut} className="bg-red-500 text-white px-2  rounded text-center">Logout</button>
        </div>
      </div>
    ) : (
      <div className="text-center">
        <button onClick={signInWithGoogle} className="bg-blue-500 text-white px-3 py-1 rounded text-center">{buttonText}</button>
      </div>
    )}
  </>
  );
}

export default Auth;
