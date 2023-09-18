import P5 from "p5";

const sketch = (p5: P5) => {
  p5.setup = () => {
    p5.createCanvas(800, 800);
    p5.background(0);

    p5.imageMode("center");
  };

  p5.draw = () => {
    const x = p5.sin(p5.radians(p5.frameCount * 3 + p5.PI)) * 100;
    const y = (p5.cos(p5.radians(p5.frameCount * 4)) + p5.PI / 2) * 100;

    //top pretzel

    p5.fill("pink");

    p5.ellipse(p5.width / 2 + x, p5.height / 2 - y, 5, 5);

    p5.fill("#71260F"); //maroon
    p5.ellipse(p5.width / 2 - x, p5.height / 2 - y, 5, 5);

    //bottom pretzel

    p5.fill("#71260F"); //maroon
    p5.ellipse(p5.width / 2 - x, p5.height / 2 + y, 5, 5);
    p5.fill("pink");
    p5.ellipse(p5.width / 2 + x, p5.height / 2 + y, 5, 5);
  };
};

new P5(sketch);
