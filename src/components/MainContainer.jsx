import React from 'react'
import HomeContainer from './HomeContainer';
// import 'tw-elements';
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider';

const MainContainer = () => {
  const [{foodItems}, dispatch] = useStateValue();
  return (
   <div>
    <HomeContainer/>
    
    <section className='w-full my-10'>
      <div className='w-full flex items-center justify-between '>
        <p className='text-2xl tracking-wider text-white capitalize font-sans relative before:absolute before:content before:w-32 before:h-1 before:rounded-md before:left-0 before:-bottom-2 before:bg-gradient-to-tr from-orange-400 to-orange-600'>Our fresh & healthy fruits
        </p>

        <div className="hidden items-center gap-3 md:flex">

          <motion.div whileTap={{scale : 0.75}} className='w-8 h-8 bg-green-300 rounded-sm items-center justify-center flex cursor-pointer'>
            <MdChevronLeft className="text-2xl text-black"/>
          </motion.div>

          <motion.div whileTap={{scale : 0.75}} className='w-8 h-8 bg-green-300 rounded-sm items-center justify-center flex cursor-pointer'>
            <MdChevronRight className="text-2xl text-black"/>
          </motion.div>
   
        </div>

      </div>

      <RowContainer flag={true} data={foodItems?.filter(n => n.category === "icecream")} />

    </section>
    </div>
  
  )
}

export default MainContainer;