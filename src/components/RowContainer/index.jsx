import React, { useEffect, useRef } from "react";
import "./index.css";
import { IoMdBasket } from "react-icons/io";
import { motion } from "framer-motion";
import NotFound from "../../img/NotFound.svg";
import { useStateValue } from "./../../context/StateProvider";
import { actionType } from "./../../context/reducer";

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();

  const [{ cartItems }, dispatch] = useStateValue();

  const addtocart = (item) => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [...cartItems, item],
    });
  };
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <div
      ref={rowContainer}
      className={`mainrow-cont ${flag ? "scroll " : "hidden"}`}>
      {data && data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className="rowcont-div">
            <div className="rowcontdiv-div">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="rowcontdiv-img">
                <img
                  src={item?.imageURL}
                  alt=""
                  className="rowcontdiv-imgcont"
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="rowcontdiv-ddiv"
                onClick={() => addtocart(item)}>
                <IoMdBasket className="rowcontddd-icon" />
              </motion.div>
            </div>
            <div className="rowcontdiv-divdiv">
              <p className="rowcontdiv-divdivpara1">{item?.title}</p>
              <p className="rowcontdiv-divdivpara2">
                {item?.caloreis} Calories
              </p>
              <div className="rowcontdiv-divdivprice">
                <p className="rowcontdiv-divdivpricepara">
                  <span className="rowcont-sapn1">₹</span>
                  {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="notfound-img">
          <img src={NotFound} alt="" className="notfound-imgtag" />
          <p className="notfound-paratag">Item Not Available...😔</p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
