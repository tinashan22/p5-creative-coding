import P5, { Font, Image } from "p5";
import "./style.css";

// let img: Image;
let montserrat: Font;
let quote: string = "Look here, ma! It's another line. A never ending line.";

const sketch = (p5: P5) => {
  p5.preload = () => {
    // img = p5.loadImage("shadow.jpg");
    montserrat = p5.loadFont("Montserrat-SemiBold.ttf");
  };

  //3D canvas for rasterization in 3D
  p5.setup = () => {
    p5.createCanvas(600, 600, "webgl");
    p5.imageMode("center");
    // p5.frameRate(10);
    // img.resize(600, 0);
    // p5.noStroke();
  };

  //   p5.draw = () => {
  //     p5.background(0);
  //     p5.fill("white");
  //     p5.textFont(montserrat);
  //     p5.textAlign("left", "top");

  //     const fontSize = 50;
  //     p5.textSize(fontSize);

  //     const lineHeight = p5.map(p5.cos(p5.radians(p5.frameCount)), -1, 1, 0, 1);
  //     p5.textLeading(fontSize * lineHeight);

  //     p5.text(quote, 12, 0);
  //   };

  p5.draw = () => {
    p5.background(0);
    p5.fill("white");
    p5.textFont(montserrat);
    p5.perspective(p5.PI / 3.0, p5.int(p5.width / p5.height), 1, 10000);

    const eyeX = p5.width / 2 + p5.map(p5.mouseX, 0, p5.width, -600, 600);
    const eyeY = p5.height / 2 + p5.map(p5.mouseY, 0, p5.height, -600, 600);
    const eyeZ = p5.height / p5.tan(p5.PI / 3) + 400;
    const centerX = p5.width / 2;
    const centerY = p5.height / 2;
    const centerZ = 0;
    const upX = 0;
    const upY = 1;
    const upZ = 0;

    p5.camera(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ);

    // p5.push();

    p5.fill("white");
    p5.textFont(montserrat);
    p5.textSize(60);
    p5.textAlign("left", "center");
    p5.translate(-p5.frameCount, 250, 0);

    p5.text(quote, 12, 0);
    // p5.pop();
  };
};

new P5(sketch);
