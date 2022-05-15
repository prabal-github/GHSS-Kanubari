import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { firebaseApp } from '../firebaseConfig';
import { useRouter } from 'next/router';

const about = () => {
  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  const signIn = async () => {
    const {user} = await signInWithPopup(firebaseAuth, provider);
    const {refreshToken, providerData} = user;
    localStorage.setItem('user', JSON.stringify(providerData));
    localStorage.setItem('accessToken', JSON.stringify(refreshToken));
    router.push("/adminpanel");
  };

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-white relative'>
      <img className="absolute top-0 left-0 h-screen w-screen object-cover" src="/login-background.jpg" />
      {/* <div className='bg-black/50 z-10'></div> */}

      <div className='z-10 flex justify-center items-center border-2 border-gray-300 rounded-full p-2 bg-white/60 cursor-pointer
      hover:transition duration-500 ease-in-out hover:shadow-lg hover:bg-white/100'
        onClick={signIn}>
        <FcGoogle fontSize={30} />
        <p className='text-lg font-semibold ml-1.5 mb-0 text-black'> Sign in with Google</p>
      </div>
      {/* <button type="button" className="btn btn-success"><i className="fa fa-google fa-fw"></i> Login with Google</button> */}

    </div>
  )
}

export default about