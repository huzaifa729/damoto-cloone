import React from 'react';
import {BiMinus, BiPlus} from 'react-icons/bi';
import { motion } from 'framer-motion';

const CartItem = ({item}) => {
  return (
    <div className='w-full p-1 px-2 rounded-md bg-slate-800  flex items-center gap-2'>
    <img src={item?.imageURL} alt="img" className="w-24 h-24 object-contain"/>

    <div className='flex flex-col gap-2'>
     <p className='text-white font-serif'>{item?.title}</p>
     <p className='text-white font-serif text-xl tracking-wider'>${item?.price}</p>
    </div>

    <div className='group flex items-center gap-2 cursor-pointer ml-auto'>
      <motion.div whileTap={{scale : 0.75}}>
       <BiMinus className="text-white text-xl"/>
      </motion.div>
      <p className=' font-sans items-center flex justify-center rounded-sm'>{item.qty}</p>
      <motion.div whileTap={{scale : 0.75}}>
      <BiPlus className="text-white text-xl"/>
      </motion.div>
    </div>
   </div>
  )
}

export default CartItem