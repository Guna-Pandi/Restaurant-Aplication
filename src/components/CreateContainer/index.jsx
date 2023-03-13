import React from "react";
import "./index.css";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MdFastfood,
  MdCloudUpload,
  MdDelete,
  MdFoodBank,
} from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { categories } from "../../utils/data";
import Loader from "../Loader";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../firebase.config";
import { getAllFoodItems, saveItem } from "./../../utils/firebaseFunctions";
import { useStateValue } from './../../context/StateProvider';
import { actionType } from './../../context/reducer';

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [caloreis, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [fields, setFields] = useState(false);
  const [imageAsset, setImageAsset] = useState(null);
  const [alert, setAlert] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isload, setIsload] = useState(false);
  const [{foodItems}, dispatch] = useStateValue();
  // function for uploading image
  const uploadimage = (e) => {
    setIsload(true);
    const imgFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imgFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imgFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error while Uploading : Plz try again...🙏");
        setAlert("danger");
        setTimeout(() => {
          setFields(false);
          setIsload(false);
        }, 5000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsload(false);
          setFields(true);
          setMsg("Image Uploaded Successfully...😁");
          setAlert("success");
          setTimeout(() => {
            setFields(false);
          }, 5000);
        });
      }
    );
  };

  // function to delete uploaded img
  const deletImage = () => {
    setIsload(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsload(false);
      setFields(true);
      setMsg("Image Deleted Successfully...😁");
      setAlert("success");
      setTimeout(() => {
        setFields(false);
      }, 5000);
    });
  };

  // function to save uploaded img
  const saveDetails = () => {
    setIsload(true);
    try {
      if (!title || !caloreis || !imageAsset || !price || !category) {
        setFields(true);
        setMsg("Required Fields Can't be left empty...!😑");
        setAlert("danger");
        setTimeout(() => {
          setFields(false);
          setIsload(false);
        }, 5000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: category,
          caloreis: caloreis,
          qty: 1,
          price: price,
        };
        saveItem(data);
        setIsload(false);
        setFields(true);
        setMsg("Data Uploaded Successfully...😁");
        clearData();
        setAlert("success");
        setTimeout(() => {
          setFields(false);
        }, 5000);
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error while Uploading : Plz try again...🙏");
      setAlert("danger");
      setTimeout(() => {
        setFields(false);
        setIsload(false);
      }, 5000);
    }
    fetchData();
  };

  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setCalories("");
    setPrice("");
  };

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };


  return (
    <div className="create-Cont">
      <div className="subCreate-Cont">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fields-para ${
              alert === "danger" ? "active" : "inactive"
            }`}>
            {msg}
          </motion.p>
        )}
        {/* Title section */}
        <div className="icon-Cont">
          <MdFastfood className="fastfood-icon" />
          <input
            type="text"
            required
            value={title}
            placeholder="Give me a title..."
            className="title-input"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        {/* categories */}
        <div className="category">
          <select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="category-select">
            <option value="other" className="select-option">
            </option>
            {categories &&
              categories.map((n) => (
                <option
                  key={n.id}
                  className="category-option"
                  value={n.urlParamNames}>
                  {n.name}
                </option>
              ))}
          </select>
        </div>
        {/* Files upload section */}
        <div className="group-section">
          {isload ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label className="grpsec-lable">
                    <div className="grpsec-lablediv">
                      <MdCloudUpload className="lable-cloudicon" />
                      <p className="cloudicon-para">
                        Click here or Drag and Drop..!
                      </p>
                    </div>
                    <input
                      type="file"
                      name="uploadimage"
                      accept="image/*"
                      onChange={uploadimage}
                      className="lable-upimg"
                    />
                  </label>
                </>
              ) : (
                <>
                  {" "}
                  <div className="uploaded-img">
                    <img
                      src={imageAsset}
                      alt="uploadedimage"
                      className="uploadedimage-imgtag"
                    />
                    <button
                      type="button"
                      className="img-btn"
                      onClick={deletImage}>
                      <MdDelete className="MdDelete-icon" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        {/* Calories section */}
        <div className="foodbank-cont">
          <div className="foodbank-subcont">
            <MdFoodBank className="MdFoodBank-icon" />
            <input
              type="text"
              required
              value={caloreis}
              onChange={(e) => setCalories(e.target.value)}
              placeholder="Caloreies"
              className="fbank-placeholder"
            />
          </div>
        </div>
        {/* Price section */}
        <div className="foodbank-cont">
          <div className="foodbank-subcont">
            <BiRupee className="MdFoodBank-icon" />
            <input
              type="text"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="fbank-placeholder"
            />
          </div>
        </div>
        {/* save button */}
        <div className="save-button">
          <button
            type="button"
            className="savebutton-tag"
            onClick={saveDetails}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateContainer;
