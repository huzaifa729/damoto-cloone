import React from 'react'
import I1 from '../img/i1.png'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'

const RowContainer = ({flag, data}) => {
  console.log(data);
  return (
    <div className={`w-full flex gap-4 my-12 ${flag ? 'overflow-x-scroll' : "overflow-x-hidden flex-wrap" }`}>
       {data && data.map(item => (
         <div key={item.id} className="w-300 md:w-275 my-12 h-auto bg-black shadow-md backdrop:blur-lg">
         <div className="w-full flex items-center justify-between">
             <motion.img src={I1} alt="img" className='w-44 -mt-5'/>
             <motion.div whileTap={{scale : 0.75}} className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <MdShoppingBasket className='text-black text-2xl'/>
             </motion.div>
         </div>
         <div className="flex flex-col gap-2 items-end justify-end w-full">
       <p className="text-xl text-white mt-1 font-serif tracking-wider">Chocolate & Vanilla</p>
       <p className="text-white mt-1 font-serif text-xl tracking-wide">45 Calories</p>
       <div className="flex items-center gap-4">
         <p className="text-xl text-white font-serif tracking-wider"><span>$</span>500</p>
       </div>
     </div>
     </div>
       ))}
    </div>
  )
}

export default RowContainer;