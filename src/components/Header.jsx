import React from 'react';
//  import { AiFillHome } from './aifillhome';
import HomeIcon from '@mui/icons-material/Home';
import ContrastIcon from '@mui/icons-material/Contrast';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { MdShoppingBasket } from "react-icons/md";
import { Avatar } from '@mui/material';
import { motion } from 'framer-motion';


const Header = () => {
  return (
    <div className="header sticky">
      <div className='flex  mt-1 ml-5 items-center justify-between'>
        <div className='img&txt flex cursor-pointer'>
     <img className=" -mt-2 w-32" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZ9OgNT4ywo5LRX8ZeRyAGNtHuqfvrMQgYg&usqp=CAU'/>
     <p className="mt-6 -ml-4 text-3xl italic tracking-wider underline-offset-8">Damoto</p>
   </div>

   <div className='ul -ml-12 m-7 '>
    <ul className="flex space-x-4 p-2">
      <li className='text-teal-50 font-serif text-xl mt-1 tracking-wide hover:text-orange-400 ease-in-out duration-1000  cursor-pointer'><HomeIcon fontSize='small' className="-mt-1 mr-1"/>Home
      </li>
      <li className='text-teal-50 font-serif text-xl mt-1 tracking-wide hover:text-orange-400 ease-in-out duration-1000 cursor-pointer'><ContrastIcon fontSize='small'  className="-mt-1 mr-1"/>About</li>
      <li className='text-teal-50 font-serif text-xl mt-1 tracking-wide hover:text-orange-400 ease-in-out duration-1000 cursor-pointer'><PhoneIcon fontSize='small'  className="-mt-1 mr-1"/>Contact</li>
      <li className='text-teal-50 font-serif text-xl mt-1 tracking-wide hover:text-orange-400 ease-in-out duration-1000 cursor-pointer'><AccountBalanceWalletIcon fontSize='small' className="-mt-1 mr-1"/>Account</li>
    </ul>
   </div>

<div className='flex'>
   <div className="relative flex items-center justify-center -mt-0">
   <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer -ml-20"/>
   <div className='absolute -top-3 right-4 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center'>
            <p className='text-xs text-white font-semibold'>0</p>    
          </div> 
   </div>

   <div className='avatar mr-12 -mt-2'>
    <Avatar fontSize='small'/>
   </div>

   </div>
  </div>
</div>
  )
}

export default  Header;