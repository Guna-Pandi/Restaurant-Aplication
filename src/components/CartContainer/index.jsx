import React from "react";
import "./index.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { RiRefreshFill } from "react-icons/ri";
const CartContainer = () => {
  return (
    <div className="cart-container">
      <div className="cart-backoption">
        <motion.div whileTap={{ scale: 0.6 }}>
          <MdOutlineKeyboardBackspace className="cart-backicon" />
          <p className="cart-backpara">Cart</p>
          <p className="cart-backpara1">
            Clear
            <RiRefreshFill />
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CartContainer;
