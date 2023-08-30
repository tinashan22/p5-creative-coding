import P5, { Image } from "p5";
import "./style.css";

let img: Image;

const sketch = (p5: P5) => {
  p5.preload = () => {
    img = p5.loadImage("shadow.jpg");
  };

  //3D canvas for rasterization in 3D
  p5.setup = () => {
    p5.createCanvas(800, 800, "webgl");
    p5.imageMode("center");
    img.resize(600, 0);
    p5.noStroke();
  };

  p5.draw = () => {
    p5.background(0);
    const tilesX = 200;
    const tilesY = (p5.height / p5.width) * tilesX;
    const tileW = p5.width / tilesX;
    const tileH = p5.height / tilesY;
    p5.rectMode("center");
    img.resize(200, 0);

    // p5.translate(p5.width / 2, p5.height / 2);
    p5.scale(0.8);
    const rotation = p5.map(
      p5.sin(p5.radians(p5.frameCount * 4)),
      1,
      -1,
      -45,
      45
    );

    p5.rotateY(p5.radians(rotation));

    for (let x = 0; x < tilesX; x++) {
      for (let y = 0; y < tilesY; y++) {
        // the color of the pixel
        const c = img.get(x, y);

        // the brightness of the pixel
        const b = p5.brightness(c);

        // the scalar for the tiles
        // the brightness, mapped to a range between 1 and 0
        const s = p5.map(b, 0, 225, 1, 0);

        // position z
        // the brightness, mapped to a range between -1 and 1
        const z = p5.map(b, 0, 225, -1, 1);

        // magnitude of the tiles on the z-axis
        const mag = 200;

        p5.push();
        p5.translate(
          x * tileW - p5.width / 2,
          y * tileH - p5.height / 2,
          z * mag
        );
        p5.fill("white");
        p5.rect(0, 0, tileW * s * 1.5, tileH * s * 1.5);
        // p5.rect(0, 0, 100, 100);
        p5.pop();
      }
    }

    p5.pop();
  };
};

new P5(sketch);
