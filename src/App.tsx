import "./App.css";
import { motion } from "framer-motion";
import Slider from "./components/Slider/Slider";
import Data from "../public/data/data.json";
import Card from "./components/Card/Card";

function App() {
  {
    /*const tag: TagType = { text: "etaa", backgroundColor: "blue", textColor: "white", number: "59" };*/
  }

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
