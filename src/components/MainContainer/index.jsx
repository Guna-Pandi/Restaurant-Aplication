import React from "react";
import HomeContainer from "../HomeContainer";
import "./index.css";
import {motion} from "framer-motion";
import {MdChevronRight, MdChevronLeft} from "react-icons/md";
import RowContainer from './../RowContainer/index';

const MainContainer = () => {
  return (
   <div className="main-cont">
    <HomeContainer/>
    <section className="mainSect-cont">
      <div className="mainDiv-cont">
        <p className="mainp-cont">Our Fresh & Healthy Fruits..!</p>
        <div className="maindiv-divcont">
          <motion.div whileTap={{scale:0.5}} className="mddiv-divcont"><MdChevronLeft className="mddiv-divconticon"/></motion.div>
          <motion.div whileTap={{scale:0.5}} className="mddiv-divcont"><MdChevronRight className="mddiv-divconticon"/></motion.div>
        </div>
      </div>
      <RowContainer flag={true} />
    </section>
   </div>
  )
}

export default MainContainer;
