import React, { useEffect, useRef } from 'react'
import I1 from '../img/i1.png'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'

const RowContainer = ({flag, data, scrollValue}) => {
  // console.log(data);
  const rowContainer = useRef();
  useEffect(() => {

    rowContainer.current.scrollLeft += scrollValue;

},[scrollValue])
  return (
    <div ref={rowContainer} className={`w-full flex gap-4 my-12 scroll-smooth ${flag ? 'overflow-x-scroll scrollbar-none' : "overflow-x-hidden flex-wrap" }`}>
       {data && data.map(item => (
         <div key={item?.id} className="w-300 md:w-275 my-12 h-[225inipx] bg-black shadow-md backdrop:blur-lg">
         <div className="w-full flex items-center justify-between">
             <motion.img src={item?.imageURL} alt="img" className='w-44 -mt-5'/>
             <motion.div whileTap={{scale : 0.75}} className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
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
       ))}
    </div>
  )
}

export default RowContainer;