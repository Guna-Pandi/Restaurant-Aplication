import React, { useEffect, useRef } from "react";
import "./index.css";
import { IoMdBasket } from "react-icons/io";
import { motion } from "framer-motion";

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <div
      ref={rowContainer}
      className={`mainrow-cont ${flag ? "scroll " : "hidden"}`}>
      {data &&
        data.map((item) => (
          <div key={item.id} className="rowcont-div">
            <div className="rowcontdiv-div">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={item?.imageURL}
                alt=""
                className="rowcontdiv-img"
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="rowcontdiv-ddiv">
                <IoMdBasket className="rowcontddd-icon" />
              </motion.div>
            </div>
            <div className="rowcontdiv-divdiv">
              <p className="rowcontdiv-divdivpara1">{item?.title}</p>
              <p className="rowcontdiv-divdivpara2">{item?.caloreis} Calories</p>
              <div className="rowcontdiv-divdivprice">
                <p className="rowcontdiv-divdivpricepara">
                  <span className="rowcont-sapn1">₹</span>{item?.price}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RowContainer;
