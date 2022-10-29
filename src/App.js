import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import CereateContainer from './components/CereateContainer';
import MainContainer from './components/MainContainer';
import { AnimatePresence } from 'framer-motion';
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utilis/firebaseFunction';
import { actionType } from './context/reducer';

const App = () => {
  const [{foodItems}, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then(data => {
      // console.log(data);
      dispatch({
        type : actionType.SET_FOOD_ITEMS,
        foodItems : data,
      });
    });
  };

  useEffect(()=>{
    fetchData();

  },[])
  return (
    <AnimatePresence exitBeforeEnter>
    <div className="star">
      <Header/>

      <main className='-mt-5 p-8 w-full'>
        <Routes>
          <Route path='/*' element={<MainContainer/>}/>
          <Route path='/createItem' element={<CereateContainer/>}/>
        </Routes>
      </main>
  </div>
  </AnimatePresence>
  )
}

export default App;