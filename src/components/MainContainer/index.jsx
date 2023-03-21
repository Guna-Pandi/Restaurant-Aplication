import React, {useEffect, useState } from "react";
import HomeContainer from "../HomeContainer";
import "./index.css";
import { motion } from "framer-motion";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import RowContainer from "./../RowContainer/index";
import { useStateValue } from "./../../context/StateProvider";
import MenuContainer from "../MenuContainer";
import CartContainer from "../CartContainer";

const MainContainer = () => {
  const [{ foodItems }, dispatch] = useStateValue();
  const [scrollValue,setScrollValue] = useState(0);

  useEffect(()=> {},[scrollValue])

  return (
    <div className="main-cont">
      <HomeContainer />
      <section className="mainSect-cont">
        <div className="mainDiv-cont">
          <p className="mainp-cont">Our Fresh & Healthy Fruits..!</p>
          <div className="maindiv-divcont">
            <motion.div whileTap={{ scale: 0.75 }} className="mddiv-divcont" onClick={()=> setScrollValue(-1110)}>
              <MdChevronLeft className="mddiv-divconticon" />
            </motion.div>
            <motion.div whileTap={{ scale: 0.75 }} className="mddiv-divcont" onClick={()=> setScrollValue(1110)}>
              <MdChevronRight className="mddiv-divconticon" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((n) => n.category === "fruits")}
        />
      </section>
      <MenuContainer/>
      <CartContainer/>
    </div>
  );
};

export default MainContainer;
