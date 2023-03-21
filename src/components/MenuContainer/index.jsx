import React, { useEffect, useState } from "react";
import "./index.css";
import { IoFastFoodOutline } from "react-icons/io5";
import { categories } from "../../utils/data";
import {motion} from "framer-motion";
import RowContainer from './../RowContainer/index';
import { useStateValue } from './../../context/StateProvider';

const MenuContainer = () => {
  const [filter, setFilter] = useState("chicken");
  const [{foodItems} , dispatch] = useStateValue();

  return (
    <section className="menucont-sec" id="menu">
      <div className="menusec-div">
        <p className="menup-cont">Our Hot Dishes..!</p>
        <div className="menudiv-cont">
          {categories &&
            categories.map((category) => (
              <motion.div whileTap={{scale:0.7}}
                key={category.id}
                className={`menudiv-div ${
                  filter === category.urlParamNames
                    ? "menudiv-div1"
                    : "menudiv-div2"
                }`}onClick = {() => setFilter(category.urlParamNames)}
                 >
                <div
                  className={`menudiv-divdiv ${
                    filter === category.urlParamNames
                      ? "menudiv-div2"
                      : "menudiv-div1"
                  }`}>
                  <IoFastFoodOutline
                    className={`menudiv-divicon ${
                      filter === category.urlParamNames
                        ? "menudiv-divicon1"
                        : "menudiv-divicon2"
                    }`}
                  />
                </div>
                <p
                  className={`menudiv-divpara ${
                    filter === category.urlParamNames
                      ? "menudiv-divpara1"
                      : "menudiv-divpara2"
                  }`}>
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>
        <div className="menudiv-cont2">
            <RowContainer flag={false} data={foodItems ?. filter(n => n.category == filter)}/>
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
