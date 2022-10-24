import React, { useState } from 'react'
import { MdFastfood } from 'react-icons/md'
import { motion } from 'framer-motion';
import { categories } from '../utilis/Data';
import Loader from './Loader';

const CereateContainer = () => {

  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] =  useState(false);
  const [alertStatus, setAlertStatus] = useState('danger');
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  return (
     <div className="w-full h-auto flex items-center justify-center">
      <div className="w-[90%] md:w-[75%] flex flex-col border border-white-600 items-center justify-center  p-4 gap-3">

        {
          fields && (
            <motion.p initial={{opacity : 0}} animate={{opacity : 1}} exit={{opacity : 0}} className={`w-full text-center   ${alertStatus === 'danger' ? 'bg-red-600 text-red-700' : "bg-emerald-500 text-emerald-500"}`}>
              {/* Something wrong  //first we have to write this */ } 
              {msg}
            </motion.p>
          )
        }

        <div className="w-full border-b border-white-600 py-2 items-center gap-2  flex ">

          <MdFastfood className="text-xl text-gray-500"/>
           
           <input type="text" required value={title} placeholder="Give me a title..." onChange={(e) => setTitle(e.target.value)} className="w-full h-full bg-transparent outline-none text-white  ml-1 placeholder:text-white text-xl font-mono tracking-wide"/>

        </div>

          <div className="w-full text-xl">

            <select onChange={(e) => setCategory(e.target.value)} className=" w-full text-base p-2 font-serif  cursor-pointer rounded-sm outline-none  bg-black text-white border border-gray-500">

              <option value='other' className="text-lg p-5 border-none outline-none ">Select Category</option>
              {
                categories && categories.map((item) => (
                  <option key={item.id} className="text-lg border-red-500 outline-none capitalize font-serif mb-8 pb-5" value={item.urlParamName}>
                    {item.name}
                  </option>
                ))
              }

            </select>

          </div>


          <div className='flex flex-col items-center justify-center border-2 border-white-700 border-dotted w-full h-225 cursor-pointer rounded-lg'>

            {
              isLoading ? <Loader/> : <></>
            }

          </div>

        </div> 
     </div>
  )
}

export default CereateContainer