import "./App.css";
import Slider from "./components/Slider";
import images from "../public/data/data.json";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <div className="App">
        <h1>B-Social</h1>
        <Slider data={images}>
          {images.map((image, index) => (
            <motion.div className="item" key={index}>
              <img src={image} alt={`Imagem ${index}`} />
            </motion.div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default App;
