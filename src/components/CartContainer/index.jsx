import React from "react";
import "./index.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { RiRefreshFill } from "react-icons/ri";
import {BiMinus,BiPlus} from "react-icons/bi";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";

const CartContainer = () => {
  const [{ cartShow }, dispatched] = useStateValue();
  const showCart =() =>{
    dispatched({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  }
  return (
    <motion.div className="cart-container" 
    initial={{opacity:0,x:200}}
    animate={{opacity:1,x:0}}
    exit={{opacity:0,x:200}}
    >
      <div className="cart-backoption">
        <motion.div whileTap={{ scale: 0.6 }} onClick={showCart}>
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
        {/* cart item section */}
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

        {/* cart total section */}

        <div className="cart-total">
          {/* sub total */}
          <div className="cart-itemtotal">
            <p className="cart-itemtolpara">Sub Total</p>
            <p className="cart-itemtolpara">₹ 85/-</p>
          </div>
          {/* delivery amount */}
          <div className="cart-itemtotal">
            <p className="cart-itemtolpara">Delivery</p>
            <p className="cart-itemtolpara">₹ 25/-</p>
          </div>
            {/* Line */}
          <span className="cart-itemdivline"></span>
            {/* Total Amount */}
          <div className="cart-totaltiemlinediv">
            <p className="cart-tolitmlinepara">Total</p>
            <p className="cart-tolitmlinepara">₹ 110/-</p>
          </div>

          {/* Button */}
          <motion.button 
          whileTap={{scale:0.8}}
          type="button"
          className="cart-itembutton">
            Check Out
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartContainer;
