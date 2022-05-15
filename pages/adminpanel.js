import React, { useEffect, useState } from 'react'
import { userAccessToken, fetchUser } from '../utils/fetchUserDetails'
import { useRouter } from 'next/dist/client/router'
import { IoLogOut } from "react-icons/io5";

const adminpanel = () => {
  const router = useRouter();
  const [user, setuser] = useState()

  // const fetchingUser = () => {
  //   const {userInfo} = fetchUser();    
  //   setuser(userInfo);
  //   console.log(userInfo);
  // };

  // WAS NOT WORKING USING fetchUserDetails so I hardcoded it here
  const fetchingUser = () => {
    const userInfo = localStorage.getItem('user') !== "undefined" 
    ? JSON.parse(localStorage.getItem('user')) 
    : localStorage.clear() && router.push('/login');
    
    // if(localStorage.getItem('user') === null) setuser(userInfo[0]);
    if(localStorage.getItem('user') === null) router.push('/login');
    else setuser(userInfo[0]);
}

  const tokenCheck = () => {
    const accessToken = userAccessToken();
    if (!accessToken) return router.push('/login');
  };

  useEffect(() => {
    tokenCheck();
    fetchingUser();
  });

  const signOut = () => {
    localStorage.clear();
    router.push('/login');
  };

  return (
    <nav className="bg-purple-600 text-white flex justify-between items-center h-20 z-10 w-100 fixed-top opacity-80 align-middle">
      <div className="flex">
        <div className="rounded-full mx-3">
          <img src={user?.photoURL} alt="Logo" className="rounded-full h-12 w-12 shadow-md" />
        </div>
        <div className="text-x1 flex items-center mx-2 font-bold text-2xl justify-start cursor-pointer">Welcome {user?.displayName}!</div>
      </div>
        <div className="mr-5 p-2 mb-0 cursor-pointer hover:bg-purple-900 hover:transition duration-500 ease-in-out rounded-lg font-semibold 
         flex justify-end text-lg align-middle content-center" onClick={signOut}>
          <p className='text-lg font-semibold mx-2 mb-0 text-black'>Logout</p>
          <IoLogOut className='text-black mb-0' fontSize={30} />
        </div>
    </nav>
  )
}

export default adminpanel