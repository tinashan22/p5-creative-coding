import P5, { Color, Graphics, Image } from "p5";
import "./style.css";

let img: Image;

const sketch = (p5: P5) => {
  p5.preload = () => {
    img = p5.loadImage("shadow.jpg");

    //data = loadFont('assets/filename.ttf');
    //data = loadStrings(('assets/filename.txt'))
    //data = loadModel('assets/filename.obj');
    //data = loadSound('assets/filename.mp3');
  };
  let colors: string[] = [];

  //pick color from image where the mouse is
  p5.setup = () => {
    p5.createCanvas(600, 790);
    p5.imageMode("center");
    img.resize(600, 700);
    p5.noStroke();

    p5.pixelDensity(2);
    colors[0] = "black";
    colors[1] = "blue";
    colors[2] = "pink";
    colors[3] = "white";
  };

  p5.draw = () => {
    p5.background(0);

    const tilesX = 100;
    const tilesY = (p5.height / p5.width) * tilesX;
    const tileW = p5.width / tilesX;
    const tileH = p5.height / tilesY;

    let wave = p5.map(p5.sin(p5.radians(p5.frameCount)), -1, 1, 0, 100);

    for (let x = 0; x < tilesX; x++) {
      for (let y = 0; y < tilesY; y++) {
        let posX = p5.int(x * tileW);
        let posY = p5.int(y * tileH);
        let c = img.get(posX, posY);

        let b = p5.brightness(c) * p5.sin(p5.frameCount / 10);
        //use wave effect for color separation based on brightness
        // if (b < wave) {
        //   p5.fill("red");
        // } else {
        //   p5.fill("blue");
        // }
        // if (p5.frameCount > 100) {
        //   p5.fill(c);
        // }
        // p5.fill(b);

        //use wave effect on animated color change based on brightness
        let selector = p5.int(p5.map(b, -60, 65, 0, colors.length - 1));

        p5.fill(colors[selector]);
        // p5.fill(c);
        p5.rect(posX, posY, tileW, tileH);
      }
    }

    // p5.imageMode("center");
    // p5.image(img, p5.width / 2, p5.height / 2, 600, 0);

    // p5.ellipse(p5.mouseX, p5.mouseY, 100, 100);
  };

  //create a rotating mask using graphics object
  // p5.setup = () => {
  //   p5.createCanvas(600, 600);
  //   // p5.rectMode("center");
  //   p5.imageMode("center");
  //   pg = p5.createGraphics(600, 600);
  //   pg.noStroke;
  // };
  // p5.draw = () => {
  //   p5.background(0);
  //   img.resize(400, 0);
  //   pg.clear(0, 0, 0, 0);
  //   pg.fill(250, 0, 250);
  //   pg.rectMode("center");
  //   pg.push();
  //   pg.translate(p5.width / 2, p5.height / 2);
  //   pg.rotate(p5.radians(p5.frameCount));
  //   pg.rect(0, 0, 80, 400);
  //   pg.pop();

  //   let buffer = img.get();
  //   buffer.mask(pg);
  //   p5.image(buffer, p5.width / 2, p5.height / 2, p5.width / 2, p5.height / 2);
  // };
};

new P5(sketch);
