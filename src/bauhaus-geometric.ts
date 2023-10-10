import P5 from "p5";
import "./style.css";
import { drawNoise } from "./noise";

// let img: Image;

const sketch = (p5: P5) => {
  //3D canvas for rasterization in 3D
  p5.setup = () => {
    p5.createCanvas(800, 800);
    // p5.imageMode("center");
    p5.frameRate(30);
    // img.resize(600, 0);
    // p5.noStroke();
  };

  p5.draw = () => {
    p5.background(0);

    drawNoise(p5, "white");

    const radius: number = p5.width / 2 - 10;
    const x1 = p5.map(p5.sin(p5.radians(p5.frameCount)), -1, 1, 0, p5.width);

    p5.fill("white");
    p5.noStroke();

    p5.triangle(x1, 10, x1 - radius, radius * 2, x1 + radius, radius * 2);

    const x2 = p5.map(p5.cos(p5.radians(p5.frameCount)), -1, 1, 0, p5.width);
    p5.fill(0);
    p5.circle(x2, p5.height / 2, radius * 2);
  };
};

new P5(sketch);
