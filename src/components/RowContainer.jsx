import React from 'react'
import I1 from '../img/i1.png'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'

const RowContainer = ({flag}) => {
  return (
    <div className={`w-full my-12 ${flag ? 'overflow-x-scroll' : "overflow-x-hidden" }`}>
        <div className="w-300 md:w-225 my-12 h-auto bg-black shadow-md backdrop:blur-lg">
            <div className="w-full flex items-center justify-between">
                <motion.img src={I1} alt="img" className='w-44 -mt-8'/>
                <motion.div whileTap={{scale : 0.75}} className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                   <MdShoppingBasket className='text-black text-2xl'/>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default RowContainer;