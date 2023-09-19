import P5 from "p5";
import "./style.css";

// let img: Image;

const sketch = (p5: P5) => {
  // p5.preload = () => {
  //   img = p5.loadImage("shadow.jpg");
  // };

  //3D canvas for rasterization in 3D
  p5.setup = () => {
    p5.createCanvas(800, 800);
    p5.imageMode("center");
    // img.resize(600, 0);
    // p5.noStroke();
  };

  p5.draw = () => {
    p5.background(0);
    p5.fill("white");
    // p5.text(p5.frameCount, 40, 40);
    p5.box(7, 70, 7);
  };
};

new P5(sketch);
