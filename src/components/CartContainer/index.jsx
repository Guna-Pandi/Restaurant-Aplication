import React from "react";
import "./index.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { RiRefreshFill } from "react-icons/ri";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import Emptycart from "../../img/emptyCart.svg";

const CartContainer = () => {
  const [{ cartShow, cartItems, user }, dispatched] = useStateValue();
  const showCart = () => {
    dispatched({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };
  return (
    <motion.div
      className="cart-container"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}>
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
      {cartItems && cartItems.length > 0 ? (
        <div className="cart-bottomsection">
          {/* cart item section */}
          <div className="cart-bottomsecdiv">
            {/* cart items */}
            {cartItems &&
              cartItems.map((item) => (
                <div className="cart-cartitems" key={item.id}>
                  <img src={item.imageURL} alt="" className="cart-cartimg" />
                  {/* Cart name section */}
                  <div className="cart-cartname">
                    <p className="cart-cartpara">{item?.title}</p>
                    <p className="cart-cartpara1">₹ {item?.price}</p>
                  </div>
                  {/* Button Section */}
                  <div className="cart-buttonsec">
                    <motion.div whileTap={{ scale: 0.75 }}>
                      <BiMinus className="cart-btnminus" />
                    </motion.div>
                    <p className="cart-btnsecqty">{item.qty}</p>
                    <motion.div whileTap={{ scale: 0.75 }}>
                      <BiPlus className="cart-btnplus" />
                    </motion.div>
                  </div>
                </div>
              ))}
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
            {user ? (
              <motion.button
              whileTap={{ scale: 0.8 }}
              type="button"
              className="cart-itembutton">
              Check Out
            </motion.button>
            ):(
              <motion.button
              whileTap={{ scale: 0.8 }}
              type="button"
              className="cart-itembutton">
              Login to Checkout
            </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className="emptycart-cart">
          <img src={Emptycart} alt="" className="empty-imgcart" />
          <p className="empty-paracart">Add Some Items To Your Cart...➕</p>
        </div>
      )}
    </motion.div>
  );
};

export default CartContainer;
