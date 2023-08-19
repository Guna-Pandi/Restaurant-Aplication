import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../src/components/Header";
import MainContainer from "../src/components/MainContainer";
import CreateContainer from "../src/components/CreateContainer";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { useEffect } from "react";
import { actionType } from "./context/reducer";

function App() {
  const [{foodItems}, dispatch] = useStateValue();
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="App">
        <Router>
          <Header />
          <div className="main-page">
            <Routes>
              <Route exact path="/" element={<MainContainer />} />
              <Route
                exact
                path="/createcontainer"
                element={<CreateContainer />}
              />
            </Routes>
          </div>
        </Router>
      </div>
    </AnimatePresence>
  );
}

export default App;
