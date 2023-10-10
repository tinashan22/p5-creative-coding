import P5 from "p5";
import "./style.css";
import { drawNoise } from "./noise";

// let img: Image;

const sketch = (p5: P5) => {
  //3D canvas for rasterization in 3D
  p5.setup = () => {
    p5.createCanvas(800, 800);
    p5.imageMode("center");
    p5.background("#E1DABE");
    // p5.noStroke();
    drawNoise(p5, "#736A5B");
    drawNoise(p5, "#E2C8AF");
    drawNoise(p5, "#736A5B");
    drawNoise(p5, "#E2C8AF");
    drawNoise(p5, "#E2C8AF");
  };

  p5.draw = () => {
    let bg = "#E1DABE";
    let fg = "white";

    p5.fill(fg);
    const tilesX = p5.int(p5.random(3, 7));
    const tilesY = p5.int(p5.random(3, 7));
    const tilesW = p5.width / tilesX;
    const tilesH = p5.height / tilesY;

    p5.translate(tilesW / 2, tilesH / 2);
    for (let i = 0; i < tilesX; i++) {
      for (let j = 0; j < tilesY; j++) {
        console.log(tilesX);
        let positionX = i * tilesW + p5.random(-10, 10);
        let positionY = j * tilesH + p5.random(-10, 10);
        p5.noStroke();
        p5.ellipse(
          positionX + p5.int(p5.random(-2, 2)),
          positionY + p5.int(p5.random(-2, 2)),
          p5.int(p5.random(0, 5))
        );
      }
    }
  };
};

new P5(sketch);
