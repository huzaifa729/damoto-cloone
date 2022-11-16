import React from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { motion } from 'framer-motion';
import {RiRefreshFill} from 'react-icons/ri';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import  EmptyCart from "../img/emptyCart.svg";
import CartItem from './CartItem';
const CartContainer = () => {
  const [{cartShow, cartItems, user}, dispatch] = useStateValue();

  const showCart = () => {
    dispatch({
      type : actionType.SET_CART_SHOW,
      cartShow : !cartShow,
    });
   };

  return (
    <div className="fixed top-0 right-0 w-full md:w-375 h-[100vh] bg-slate-900  flex-col  flex drop-shadow-md z-[101]">

      <div className="w-full flex items-center justify-between p-6 cursor-pointer">
      <motion.div whileTap={{scale : 0.75}} onClick={showCart}> <MdOutlineKeyboardBackspace className="text-3xl text-white"/> 
      </motion.div>
      
      <p className="text-white text-xl font-sans">Cart</p>

      <motion.p whileTap={{scale : 0.75}} className="text-white text-xl font-sans flex gap-2 items-center border px-2 py-1 rounded-md">Clear <RiRefreshFill/></motion.p>
     
      </div>

{/* bottom Section */}

{ cartItems && cartItems.length > 0 ? (


      <div className='w-full h-full flex flex-col'>
        <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
          {
            cartItems && cartItems.map(item => (
             <CartItem key={item?.id} item={item}/>
            ))
          }
        </div>

        {/* cart total section */}

        <div className='w-full items-center justify-center flex flex-col flex-1 px-8 py-2 bg-slate-900 rounded-t-[2rem]'>
          <div className='w-full items-center justify-between flex'>
            <p className='text-white font-serif text-xl'>Sub Total</p>
            <p className='text-white font-serif text-xl'>$ 8.6</p>
          </div>

          <div className='w-full items-center justify-between flex'>
            <p className='text-white font-serif text-xl'>Delivery</p>
            <p className='text-white font-serif text-xl'>$ 8.6</p>
          </div>

          <div className='w-full border-b border-white my-5'></div>

          <div className='w-full flex items-center justify-between'>
          <p className='text-white font-serif text-xl'>Total</p>
          <p className='text-white font-serif text-xl'>$ 8.6</p>
          </div>

          {user ? (
            <motion.button whileTap={{scale : 0.7}} type="button" className='w-full py-2 my-8 bg-gray-700 text-white text-xl font-sans tracking-widest rounded-md'>Check Out</motion.button>
          ) : (
            <motion.button whileTap={{scale : 0.7}} type="button" className='w-full py-2 my-8 bg-gray-700 text-white text-xl font-sans tracking-widest rounded-md'>Login to check out</motion.button>
          )}
        </div>
      </div>
       ):(
        <div className='w-full h-full flex flex-col items-center justify-center gap-6'>
          <img src={EmptyCart} className="300" alt='imj'/>
          <p className='text-2xl text-white font-serif'>Add some item to your cart</p>
        </div>
       )}
    </div>

   
  )
}

export default CartContainer;