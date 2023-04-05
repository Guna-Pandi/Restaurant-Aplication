import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { MdShoppingCart, MdAdd, MdLogout } from "react-icons/md";
import Logo from "../../../src/img/logo.png";
import Avatar from "../../../src/img/avatar.png";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase.config";
import { useStateValue } from "./../../context/StateProvider";
import { actionType } from "./../../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user,cartShow,cartItems }, dispatched] = useStateValue();
  const [isMenu,setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatched({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    }else{
      setIsMenu(!isMenu);
    }
  };

  const logout = () =>{
    setIsMenu(false)
    localStorage.clear()
    dispatched({
      type:actionType.SET_USER,
      user:null
        });
  }
  const showCart =() =>{
    dispatched({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  }

  return (
    <header className="header-start">
      <div className="desktop-view">
        <Link to={"/"} className="logo-img">
          <img src={Logo} alt="img" className="logo-img-img" />
          <p className="desk-head">
            SANDI'S <span className="span-resto">RESTO</span>
          </p>
        </Link>
        {/* navbar links */}
        <div className="menu-nav">
          <motion.ul className="menu-list" 
          initial={{opacity:0,x:200}}
          animate={{opacity:1,x:0}}
          exti={{opacity:0,x:200}}>
            <li className="nav-links">Home</li>
            <li className="nav-links">Menu</li>
            <li className="nav-links">About Us</li>
            <li className="nav-links">Service</li>
          </motion.ul>
          <div className="cart-img" onClick={showCart}>
            <MdShoppingCart className="cart-img-img" />
           {cartItems && cartItems.length > 0 && (
             <div className="round-circle">
             <p className="round-circle-num">{cartItems.length }</p>
           </div>
           )}
          </div>
          <div className="popup-profile">
            <motion.img
              whileTap={{
                scale: 0.6,
              }}
              src={user ? user.photoURL : Avatar}
              alt="userprofile"
              className="avart-img"
              onClick={login}
            />
            {/* drop down div */}
           {isMenu &&(
             <motion.div 
             initial={{opacity:0,scale:0.6}}
             animate={{opacity:1,scale:1}} 
             exit={{opacity:0,scale:0.6}} 
             className="drop-down">
             {user && user.email === "gunapandidurai@gmail.com" && (
               <Link to={"/createContainer"} className="drop-down-link">
                 <p className="drop-down-icons"   onClick ={() => setIsMenu(false)}>
                   New Item <MdAdd />
                 </p>
               </Link>
             )}
             
             <p className="drop-down-icons"onClick={logout}>
               Logout
               <MdLogout />
             </p>
           </motion.div>
           )}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="mobile-view">
      <div className="cart-img">
            <MdShoppingCart className="cart-img-img" onClick={showCart}/>
            {cartItems && cartItems.length > 0 && (
             <div className="round-circle">
             <p className="round-circle-num">{cartItems.length }</p>
           </div>
           )}
          </div>
      <Link to={"/"} className="logo-img">
          <img src={Logo} alt="img" className="logo-img-img" />
          <p className="desk-head">
            SANDI'S <span className="span-resto">RESTO</span>
          </p>
        </Link>
        
        <div className="popup-profile">
            <motion.img
              whileTap={{
                scale: 0.6,
              }}
              src={user ? user.photoURL : Avatar}
              alt="userprofile"
              className="avart-img"
              onClick={login}
            />
            {/* drop down div */}
           {isMenu &&(
             <motion.div 
             initial={{opacity:0,scale:0.6}}
             animate={{opacity:1,scale:1}} 
             exit={{opacity:0,scale:0.6}} 
             className="drop-down">
             {user && user.email === "gunapandidurai@gmail.com" && (
               <Link to={"/createContainer"} className="drop-down-link">
                 <p className="drop-down-icons"  onClick ={() => setIsMenu(false)}>
                   New Item <MdAdd />
                 </p>
               </Link>
             )}
            <ul className="menu-list1">
            <li className="nav-links1" onClick ={() => setIsMenu(false)}>Home</li>
            <li className="nav-links1" onClick ={() => setIsMenu(false)}>Menu</li>
            <li className="nav-links1" onClick ={() => setIsMenu(false)}>About Us</li>
            <li className="nav-links1" onClick ={() => setIsMenu(false)}>Service</li>
            </ul>
             <p className="drop-down-icons1" onClick={logout}>
               Logout
               <MdLogout />
             </p>
           </motion.div>
           )}
          </div>
      </div>
    </header>
  );
};

export default Header;
