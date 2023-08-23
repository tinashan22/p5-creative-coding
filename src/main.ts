import P5 from "p5";
import "./style.css";

const sketch = (p5: P5) => {
  p5.setup = () => {
    p5.createCanvas(800, 800);
    p5.background("pink");
  };

  p5.draw = () => {};
};

new P5(sketch);
