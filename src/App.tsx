import "./App.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Card from "./components/Card/Card";
import Data from "../public/data/data.json";
import Slider from "./components/Slider/Slider";
import Header from "./components/Header/Header";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTagClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="App">
        <Header text="B-Social" />
        <Slider data={Data} activeIndex={activeIndex}>
          {" "}
          {Data.map((data, index) => (
            <motion.div className="item" key={index}>
              <Card image={data.image} title={data.title} text={data.text} tag={data.tag} onTagClick={handleTagClick} />
            </motion.div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default App;
