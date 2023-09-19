import P5 from "p5";
import "./style.css";

// let img: Image;

const sketch = (p5: P5) => {
  // p5.preload = () => {
  //   img = p5.loadImage("shadow.jpg");
  // };

  //3D canvas for rasterization in 3D
  p5.setup = () => {
    p5.createCanvas(600, 800);
    p5.background(0);
    p5.imageMode("center");
    // img.resize(600, 0);
    p5.noStroke();
  };

  p5.draw = () => {
    p5.background(0);
    p5.fill("white");

    let waveX = p5.sin(p5.radians(p5.frameCount * 2)); //-1,1

    let waveY = p5.cos(p5.radians(p5.frameCount * 2));

    const tilesX = p5.int(p5.map(waveX, -1, 1, 1, 7));
    const tilesY = p5.int(p5.map(waveY, -1, 1, 16, 1));

    const tilesW = (p5.width - 4) / tilesX;
    const tilesH = (p5.height - 4) / tilesY;
    p5.translate(tilesW / 2 + 2, tilesH / 2 + 2);

    for (let x = 0; x < tilesX; x++) {
      for (let y = 0; y < tilesY; y++) {
        p5.push();
        p5.translate(tilesW * x, tilesH * y);
        if ((x + 1) % 2 == 0 && (y + 1) % 3 == 0) {
          p5.fill("yellow");
        }
        if ((x + 1) % 3 == 0 && (y + 1) % 5 == 0) {
          p5.fill("blue");
        }
        if (x % 3 == 0 && (y + 1) % 5 == 0) {
          p5.fill("blue");
        }
        if ((x + 1) % 3 == 0 && y % 5 == 0) {
          p5.fill("red");
        }

        p5.ellipse(0, 0, tilesW, tilesH);
        p5.pop();
      }
    }
  };
};

new P5(sketch);
