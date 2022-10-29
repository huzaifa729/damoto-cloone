import React, { useState } from "react";
import { MdDelete, MdFastfood, MdCloudUpload, MdFoodBank, MdAttachMoney } from "react-icons/md";
import { motion } from "framer-motion";
import { categories } from "../utilis/Data";
import Loader from "./Loader";
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase.config";
import { saveItem } from "../utilis/firebaseFunction";
 import { useStateValue } from '../context/StateProvider';
import { getAllFoodItems } from '../utilis/firebaseFunction';
import { actionType } from '../context/reducer';

const CereateContainer = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [{foodItems}, dispatch] = useStateValue();
 

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    // console.log(imageFile);
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);

    const uploadTask = uploadBytesResumable(storageRef, imageFile);

   

    uploadTask.on('state_changed', (snapshot) => {
      const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes)*100
    }, (error) => {
      console.log(error);
      setFields(true);
      setAlertStatus('danger')
      setMsg('Error while uploading : Try Again 👹')
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
        setImageAsset(downloadURL);
        setIsLoading(false);
        setFields(true);
        setMsg('Image uploaded successfully 😍');
        setAlertStatus('success');
        setTimeout(() => {
          setFields(false);
        }, 4000);

      })
    })
  };

  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(()=>{
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg('Image deleted 😎 successfully ');
      setAlertStatus('success');
      setTimeout(() => {
        setFields(false);
      }, 4000);
    })
  };

  const saveDetails = () => {
    setIsLoading(true);
    try {
      if((!title || !calories || !imageAsset || !price || !categories)){
      setFields(true);
      setAlertStatus('danger')
      setMsg('Required fields can"t be empty')
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);

      }else{
        const data = {
          id : `${Date.now()}`,
          title : title,
          imageURL : imageAsset,
          category : category,
          calories : calories,
          qty : 1,
          price : price,
        }
        saveItem(data);
        setIsLoading(false);
        setFields(true);
        setMsg('Data uploaded successfully 😉');
        clearData();
        setAlertStatus('success');
        setTimeout(() => {
          setFields(false);
        }, 4000);
      }
      
    } catch (error) {
      console.log(error);
      setFields(true);
      setAlertStatus('danger')
      setMsg('Error while uploading : Try Again 👹')
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
      
    }

    fetchData();
  };

  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setCalories("");
    setPrice("");
    setCategory("Select Category");
  };

  const fetchData = async () => {
    await getAllFoodItems().then(data => {
      // console.log(data);
      dispatch({
        type : actionType.SET_FOOD_ITEMS,
        foodItems : data,
      });
    });
  };

  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div className="w-[90%] md:w-[75%] flex flex-col border border-white-600 items-center justify-center  p-4 gap-3">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full text-center   ${
              alertStatus === "danger"
                ? "bg-red-600 text-red-700"
                : "bg-emerald-500 text-white"
            }`}
          >
            {/* Something wrong  //first we have to write this */}
            {msg}
          </motion.p>
        )}

        <div className="w-full border-b border-white-600 py-2 items-center gap-2  flex ">
          <MdFastfood className="text-xl text-gray-500" />

          <input
            type="text"
            required
            value={title}
            placeholder="Give me a title..."
            onChange={(e) => setTitle(e.target.value)}
            className="w-full h-full bg-transparent outline-none text-white  ml-1 placeholder:text-white text-xl font-mono tracking-wide"
          />
        </div>

        <div className="w-full text-xl">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className=" w-full text-base p-2 font-serif  cursor-pointer rounded-sm outline-none  bg-black text-white border border-gray-500"
          >
            <option
              value="other"
              className="text-lg p-5 border-none outline-none "
            >
              Select Category
            </option>
            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  className="text-lg border-red-500 outline-none capitalize font-serif mb-8 pb-5"
                  value={item.urlParamName}
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>

        <div className="flex flex-col items-center justify-center border-2 border-white-700 border-dotted w-full h-225 cursor-pointer rounded-lg">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <MdCloudUpload className="text-5xl text-white" />
                      <p className="text-2xl text-white font-serif tracking-wide">
                        Click here to Upload
                      </p>
                    </div>
                    <input
                      type="file"
                      name="upload image"
                      accept="image/*"
                      onChange={uploadImage}
                      className="w-0 h-0"
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="relative h-full">
                    <img
                      src={imageAsset}
                      name="upload image"
                      className="w-full h-full onject-cover"
                    />
                    <button
                      className="absolute bottom-3 right-3 p-3 bg-red-600 outline-none text-xl rounded-full cursor-pointer"
                      onClick={deleteImage}
                    >
                      <MdDelete className="text-white" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        <div className="w-full flex flex-row items-center gap-3 ">
         <div className="w-full py-2 flex  items-center gap-2 border-b border-white">
             <MdFoodBank className="text-white-600 text-2xl"/>
             <input type="text" required value={calories} onChange={(e) => setCalories(e.target.value)} placeholder="Calories" className="w-full h-full outline-none border-none bg-transparent text-white-500 placeholder:text-white font-serif text-xl tracking-wide"/>
         </div>

         <div className="w-full py-2 flex  items-center gap-2 border-b border-white">
             <MdAttachMoney className="text-white-600 text-2xl"/>
             <input type="text" required value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" className="w-full h-full outline-none border-none bg-transparent text-white-500 placeholder:text-white font-serif text-xl tracking-wide"/>
         </div>
        </div> 

       <div className="flex items-center w-full ml-0">
        <button type="button" className="border-none text-xl font-semibold outline-none text-white px-12  font-serif bg-emerald-500 w-190  rounded-sm h-9" onClick={saveDetails}>Save</button>
       </div>
      </div>
    </div>
  );
};

export default CereateContainer;
