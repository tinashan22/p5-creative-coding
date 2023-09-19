import P5 from "p5";
import "./style.css";

// let img: Image;

const sketch = (p5: P5) => {
  p5.setup = () => {
    p5.createCanvas(600, 800);
    p5.background(0);
    p5.rectMode("center");

    p5.noStroke();
  };

  p5.draw = () => {
    p5.background(255);
    p5.fill("black");

    const tilesX = 80;
    const tilesY = 20;

    const tilesW = p5.width / tilesX;
    const tilesH = p5.height / tilesY;
    p5.translate(tilesW / 2, tilesH / 2);

    const colors = [
      "#000000",
      "#736A5B",
      "#736A5B",
      "#B8400E",
      "#000000",
      "#B8400E",
      "#E2C8AF",
      "#B8400E",
      "#B8400E",

      "#000000",
      "#E2C8AF",
    ];
    let w = p5.int(p5.map(p5.sin(p5.radians(p5.frameCount * 1)), -10, 5, 1, 2));
    for (let x = 0; x < tilesX; x++) {
      for (let y = 0; y < tilesY; y++) {
        p5.push();
        p5.translate(tilesW * x, tilesH * y);
        let a = p5.int(
          p5.map(p5.tan(p5.radians((x + 1) * 1 + (y + 1) * 1)), -1, 1, -8, 8)
        );
        let i = p5.int(
          p5.map(
            p5.cos(p5.radians(p5.frameCount * 1 + (y + 1) * a * w)),
            -1,
            1,
            0,
            10
          )
        );
        p5.fill(colors[i]);
        p5.rect(0, 0, tilesW, tilesH);
        p5.pop();
      }
    }
  };
};

new P5(sketch);
