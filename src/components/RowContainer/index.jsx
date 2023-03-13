import React from "react";
import "./index.css";
import { IoMdBasket } from "react-icons/io";
import { motion } from "framer-motion";

const RowContainer = ({ flag }) => {
  return (
    <div className={`mainrow-cont ${flag ? "scroll " : "hidden"}`}>
      <div className="rowcont-div">
        <div className="rowcontdiv-div">
          <motion.img whileHover={{scale:1.2}} 
            src="https://firebasestorage.googleapis.com/v0/b/sandis-resto.appspot.com/o/Images%2F1678472516637-i6.png?alt=media&token=f5df3f3f-4c30-43d0-9b9f-97abc32b8d39"
            alt=""
            className="rowcontdiv-img"
          />
          <motion.div whileTap={{scale:0.75}} className="rowcontdiv-ddiv">
            <IoMdBasket className="rowcontddd-icon" />
          </motion.div>
        </div>
        <div className="rowcontdiv-divdiv">
          <p className="rowcontdiv-divdivpara1">Triple Cup Combo</p>
          <p className="rowcontdiv-divdivpara2">75 Calories</p>
          <div className="rowcontdiv-divdivprice">
            <p className="rowcontdiv-divdivpricepara"><span className="rowcont-sapn1">₹</span>90</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowContainer;
