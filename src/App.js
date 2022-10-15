import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import CereateContainer from './components/CereateContainer';
import MainContainer from './components/MainContainer';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <AnimatePresence>
    <div className="star">
      <Header/>

      <main className='mt-24 p-8 w-full'>
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