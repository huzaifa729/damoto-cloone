import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { MdFastfood } from 'react-icons/md'
import { useStateValue } from '../context/StateProvider';
import { categories } from '../utilis/Data';
import RowContainer from './RowContainer';

const MenuContainer = () => {
    const [filter, setFilter] = useState("chicken");

    const [{foodItems}, dispatch] = useStateValue();

    // useEffect(() => {}, [filter]);
  return (
    <section className='w-full my-10' id='menu'>
     <div className='w-full flex flex-col items-center justify-center'>
     <p className='text-2xl tracking-wider text-white capitalize font-sans relative before:absolute before:content before:w-16 before:h-1 before:rounded-md before:left-0 before:-bottom-2 before:bg-gradient-to-tr from-orange-400 to-orange-600 mr-auto'>Our Hot Dishes
        </p>
        <div className="w-full flex items-center justify-start lg:justify-center py-10 gap-8 scrollbar-none overflow-x-scroll">
         {categories && categories.map(category => (
               <div key={category.id} className={`group ${filter === category.urlParamName ? 'bg-slate-800': 'bg-white'} w-28 min-w-[94px] h-28 cursor-pointer rounded-md drop-shadow-xl flex flex-col items-center justify-center gap-3 hover:bg-slate-800`} onClick={() => setFilter(category.urlParamName)}>

               <div className={`w-10 h-10 ${filter === category.urlParamName ? 'bg-red-500': 'bg-white'} flex  items-center justify-center bg-red-500 group-hover:bg-white rounded-full`}>
                   <MdFastfood className='text-white group-hover:bg-black text-xl'/>
               </div>
               <p className={`text-xl ${filter === category.urlParamName ? 'text-white': 'text-black'}  group-hover:text-white`}>{category.name}</p>
           </div>
         ))}
        </div>

        <div className='w-full'>
            <RowContainer flag={false} data={foodItems?.filter(n => n.category === filter)}/>
        </div>
     </div>
    </section>
  )
}

export default MenuContainer;