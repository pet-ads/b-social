import "./App.css";
import { motion } from "framer-motion";
import Card from "./components/Card/Card";
import Data from "../public/data/data.json";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <>
      <div className="App">
        <h1>B-Social</h1>
        <Slider data={Data}>
          {Data.map((data, index) => (
            <motion.div className="item" key={index}>
              <Card image={data.image} title={data.title} text={data.text} tag={data.tag} />
            </motion.div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default App;
