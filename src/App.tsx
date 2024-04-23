import "./App.css";
import { motion } from "framer-motion";
import Slider from "./components/Slider/Slider";
import images from "../public/data/data.json";
import Card from "./components/Card/Card";
import { TagType } from "./components/Card/subComponent/TagTypeInterface";

function App() {
  const tag: TagType = {text: "etaa", backgroundColor: "blue", textColor: "white", number: "59"};
  
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
      <Card image={"exImage_1.png"} title={"Titulo"} text={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus efficitur velit, a pharetra ligula venenatis at. Vestibulum luctus ante et purus iaculis, nec consequat nibh faucibus.'}
        tag={tag}/>
    </>
  );
}

export default App;
