import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CereateContainer, Header, MainContainer } from "./components";
import { useStateValue } from "./context/StateProvider";
// import { getAllFoodItems } from "./utils/firebaseFunction";
import { actionType } from "./context/reducer";
import { getAllFoodItems } from "./utilis/firebaseFunction";


const App = () => {
  const [{foodItems}, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then(data => {
    //  console.log(data);
    dispatch({
      type : actionType.SET_FOOD_ITEMS,
      foodItems : data,
    })
    })
  };

  useEffect(() => {
    fetchData();
  },[]);
  return( 
 <AnimatePresence exitBeforeEnter>
   <div className="star">
    <Header/>

    <main className="-mt-5 p-8 w-full">
     <Routes>
      <Route path="/*" element={<MainContainer/>}></Route>
      <Route path="/createItem" element={<CereateContainer/>}></Route>
     </Routes>
    </main>
  </div>
  </AnimatePresence>
  );
};

export default App;