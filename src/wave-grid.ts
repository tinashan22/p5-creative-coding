import P5 from "p5";
import "./style.css";

// let img: Image;

const sketch = (p5: P5) => {
  // p5.preload = () => {
  //   img = p5.loadImage("shadow.jpg");
  // };

  //3D canvas for rasterization in 3D
  p5.setup = () => {
    p5.createCanvas(700, 500, "webgl");
    p5.imageMode("center");
    p5.background(0);
    p5.noStroke();
  };

  p5.draw = () => {
    p5.background(0);
    p5.fill("gray");

    const tilesX = 140;
    const tilesY = 100;
    const tileW = p5.width / tilesX;
    const tileH = p5.height / tilesY;
    p5.translate(0, 0, 100);

    p5.rotateZ(p5.radians(p5.frameCount * 1));
    p5.rotateX(p5.radians(p5.frameCount * 0.01));
    p5.rotateY(p5.radians(p5.frameCount));

    for (let x = 0; x < tilesX; x++) {
      for (let y = 0; y < tilesY; y++) {
        //shimmering grid
        // let waveX = p5.sin(p5.radians(p5.frameCount + x * 10)) * 250;
        // let waveY = p5.sin(p5.radians(p5.frameCount + y * 10)) * 250;

        // p5.push();
        // p5.translate(tileW * x + waveX, tileH * y + waveY);
        // p5.ellipse(0, 0, tileW / 2, tileH / 2);
        // p5.pop();

        //kissing curve meshes
        let waveX = p5.sin(p5.radians(p5.frameCount + x * 5 + y * 3)) * 250;
        let waveY = p5.cos(p5.radians(p5.frameCount + x * 1 + y * 3)) * 250;
        let waveZ = p5.tan(p5.radians(p5.frameCount + x * 1 + y * 3)) * 250;
        p5.push();
        // p5.translate(tileW * x + waveX, tileH * y + waveY);
        p5.translate(x + waveX, y + waveY, waveZ);
        p5.ellipse(0, 0, tileW / 2, tileH / 2);
        p5.pop();
      }
    }
  };
};

new P5(sketch);
