import React from 'react';
//  import { AiFillHome } from './aifillhome';
import HomeIcon from '@mui/icons-material/Home';
import ContrastIcon from '@mui/icons-material/Contrast';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { MdShoppingBasket, MdAdd, MdLogout, MdSettings, MdAccountBalance, MdReport, MdCall } from "react-icons/md";
import { Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { Link } from 'react-router-dom';
import { useState } from 'react';




const Header = () => {

  const firebaseAuth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const [{user}, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState();

  const login = async () => {

 if(!user){
  const {user : {refreshToken, providerData}} = await signInWithPopup( firebaseAuth, provider );

  dispatch({
    type : actionType.SET_USER,
    user : providerData[0],
  });

  localStorage.setItem("user", JSON.stringify(providerData[0]));
 }else{
  setIsMenu(!isMenu);
 }
};

const logout = () =>{
  setIsMenu(false)
  localStorage.clear()

  dispatch({
    type : actionType.SET_USER,
    user : null,
  });
}

  return (
    <div className="header sticky">
      <div className='flex  mt-1 ml-5 items-center justify-between'>
        <div className='img&txt flex cursor-pointer'>
     <img className=" -mt-2 w-32" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZ9OgNT4ywo5LRX8ZeRyAGNtHuqfvrMQgYg&usqp=CAU'/>
     <p className="mt-6 -ml-4 text-3xl italic tracking-wider underline-offset-8">Damoto</p>
   </div>

   <div className='ul -ml-12 m-7 '>
    <ul className="flex space-x-4 p-2">
      <li className='text-teal-50 font-serif text-xl mt-1 tracking-wide hover:text-orange-400 ease-in-out duration-1000  cursor-pointer'><HomeIcon fontSize='small' className="-mt-1 mr-1"  onClick={() => setIsMenu(false)}/>Home
      </li>
      <li className='text-teal-50 font-serif text-xl mt-1 tracking-wide hover:text-orange-400 ease-in-out duration-1000 cursor-pointer'><ContrastIcon fontSize='small'  className="-mt-1 mr-1" onClick={() => setIsMenu(false)}/>About</li>
      <li className='text-teal-50 font-serif text-xl mt-1 tracking-wide hover:text-orange-400 ease-in-out duration-1000 cursor-pointer'><PhoneIcon fontSize='small'  className="-mt-1 mr-1" onClick={() => setIsMenu(false)}/>Contact</li>
      <li className='text-teal-50 font-serif text-xl mt-1 tracking-wide hover:text-orange-400 ease-in-out duration-1000 cursor-pointer'><AccountBalanceWalletIcon fontSize='small' className="-mt-1 mr-1" onClick={() => setIsMenu(false)}/>Account</li>
    </ul>
   </div>

<div className='flex'>
   <div className="relative flex items-center justify-center -mt-0">
   <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer -ml-20"/>
   <div className='absolute -top-3 right-4 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center'>
            <p className='text-xs text-white font-semibold'>0</p>    
          </div> 
   </div>

   <div className='avatar mr-12 -mt-2 cursor-pointer  relative  '>
    <Avatar src={user ? user.photoURL : Avatar} onClick={login} fontSize='small'/>
   {
    isMenu && (
      <motion.div initial={{opacity:0, scale:0.6}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:0.6}}  className=" absolute w-72 shadow-xl rounded-lg bg-gray-900 flex flex-col  z-50 opacity-50 right-0 top-11  ">

      <p className="flex  items-center px-4 py-2 text-lg text-white-900 gap-3 cursor-pointer border-b-4 border-gray-500">Email:- {user.email}</p>

      <p className="flex items-center text-xl px-4 py-2 text-white-900 gap-3 cursor-pointer border-b-4 border-gray-500">Name:- {user.displayName}</p>

      {
       user && user.email === "huzaifadabir10@gmail.com" && (
      
         <Link to={'/createItem'}>
         <p className="flex items-center text-xl px-4 py-2 text-white-900 gap-3 cursor-pointer border-b-4 border-gray-500" onClick={() => setIsMenu(false)}>New Item <MdAdd/></p>
         </Link>
       )
      }

       <p className="flex items-center text-xl px-4 py-2 text-white-900 gap-3 border-b-4 border-gray-500 cursor-pointer ">Setting<MdSettings/></p>

       <p className="flex items-center text-xl px-4 py-2 text-white-900 gap-3 border-b-4 border-gray-500  cursor-pointer ">Bank & Autopay<MdAccountBalance/></p>

       <p className="flex items-center text-xl px-4 py-2 text-white-900 gap-3 border-b-4 border-gray-500  cursor-pointer ">Reports<MdReport/></p>

       <p className="flex items-center text-xl px-4 py-2 text-white-900 gap-3 border-b-4 border-gray-500  cursor-pointer ">Help & Support<MdCall/></p>

       <p className="flex items-center text-xl px-4 py-2 text-white-900 gap-3" onClick={logout}>Logout <MdLogout/></p>
 
     </motion.div>
    )
   }
   </div>

   </div>
  </div>
</div>
  )
}

export default  Header;