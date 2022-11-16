import React, { useEffect, useRef, useState } from 'react'
import I1 from '../img/i1.png'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import NotFound from '../img/NotFound.svg'
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer'

const RowContainer = ({flag, data, scrollValue}) => {
  // console.log(data);
  const rowContainer = useRef();

  const [items, setItems] = useState([]);

  const [{cartItems}, dispatch] = useStateValue();

  const addtoCart = () => {
   
    dispatch({
      type : actionType.SET_CARTITEMS,
      cartItems : items,
    });

    localStorage.setItem("cartItems", JSON.stringify(items));
};

  useEffect(() => {

    rowContainer.current.scrollLeft += scrollValue;

},[scrollValue]);

useEffect(() => {
  addtoCart()
}, [items])


  return (
    <div ref={rowContainer} className={`w-full flex gap-4 my-12 scroll-smooth ${flag ? 'overflow-x-scroll scrollbar-none' : "overflow-x-hidden flex-wrap justify-center" }`}>

       {data && data.length > 0 ?  data.map(item => (
         <div key={item?.id} className="w-300 md:w-275 my-12 h-[225inipx] bg-black shadow-md backdrop:blur-lg">
         <div className="w-full flex items-center justify-between">
          <motion.div className='w-44 h-44 -mt-5 drop-shadow-2xl'>
             <img src={item?.imageURL} alt="img" className='w-full h-full object-contain'/>
             </motion.div>

             <motion.div whileTap={{scale : 0.75}} className="w-8 h-8 bg-white rounded-md flex items-center justify-center" onClick={() =>  setItems([...cartItems, item])}>
                <MdShoppingBasket className='text-black text-2xl'/>
             </motion.div>
         </div>
         <div className="flex flex-col gap-2 items-end justify-end w-full">
       <p className="text-xl text-white mt-1 font-serif tracking-wider">{item?.title}</p>
       <p className="text-white mt-1 font-serif text-xl tracking-wide">{item?.calories} Calories</p>
       <div className="flex items-center gap-4">
         <p className="text-xl text-white font-serif tracking-wider"><span>$</span>{item?.price}</p>
       </div>
     </div>
     </div>
       )) : <div className='w-full flex flex-col items-center justify-center'> 
       <img src={NotFound} className="h-340 "/>
       <p className="text-white text-2xl font-sans my-3 tracking-wide underline ">Items Not Available</p>
       </div>}
    </div>
  )
}

export default RowContainer;