import React from "react";
import "./index.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { RiRefreshFill } from "react-icons/ri";
import {BiMinus,BiPlus} from "react-icons/bi";

const CartContainer = () => {
  return (
    <div className="cart-container">
      <div className="cart-backoption">
        <motion.div whileTap={{ scale: 0.6 }}>
          <MdOutlineKeyboardBackspace className="cart-backicon" />
        </motion.div>
        <p className="cart-backpara">Cart</p>
        <motion.p whileTap={{ scale: 0.6 }} className="cart-backpara1">
          Clear
          <RiRefreshFill />
        </motion.p>
      </div>
      {/* bottom section */}
      <div className="cart-bottomsection">
        <div className="cart-bottomsecdiv">
          {/* cart items */}
          <div className="cart-cartitems">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/sandis-resto.appspot.com/o/Images%2F1678472549262-i7.png?alt=media&token=db907f17-8d71-436d-8c81-f41c80ab9719"
              alt=""
              className="cart-cartimg"
            />
            {/* Cart name section */}
            <div className="cart-cartname">
              <p className="cart-cartpara">Chocolate Vanilla </p>
              <p className="cart-cartpara1">₹ 90</p>
            </div>
            {/* Button Section */}
            <div className="cart-buttonsec">
              <motion.div whileTap={{scale:0.75}}>
              <BiMinus className="cart-btnminus"/>
              </motion.div>
              <p className="cart-btnsecqty">1</p>
              <motion.div whileTap={{scale:0.75}}>
              <BiPlus className="cart-btnplus"/>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
