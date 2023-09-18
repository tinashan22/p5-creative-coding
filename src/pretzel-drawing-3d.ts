import P5 from "p5";

const sketch = (p5: P5) => {
  // p5.preload = () => {
  //   img = p5.loadImage("shadow.jpg");
  // };

  //3D canvas for rasterization in 3D
  p5.setup = () => {
    p5.createCanvas(800, 800, "webgl");
    p5.background(0);

    // p5.translate(-300, -400, 100);
    p5.imageMode("center");
  };

  p5.draw = () => {
    p5.perspective(
      p5.PI / 3.0 + p5.radians(p5.mouseY),
      p5.int(p5.width / p5.height),
      1,
      10000
    );

    const eyeX = p5.width / 2 + p5.map(p5.mouseX, 0, p5.width, -600, 600);
    const eyeY = p5.height / 2 + p5.map(p5.mouseY, 0, p5.height, -600, 600);
    const eyeZ = p5.height / p5.tan(p5.PI / 3) + p5.mouseY;
    const centerX = p5.width / 2;
    const centerY = p5.height / 2;
    const centerZ = 0;
    const upX = 1;
    const upY = 1;
    const upZ = p5.map(p5.mouseY, 0, p5.height, 0, 1);

    const x = p5.sin(p5.radians(p5.frameCount * 3 + p5.PI)) * 100;
    const y = (p5.cos(p5.radians(p5.frameCount * 4)) + p5.PI / 2) * 100;

    p5.fill("white");
    p5.ellipse(p5.width / 2 - x, p5.height / 2 + y, 5, 5);

    p5.fill("pink");
    p5.ellipse(p5.width / 2 + x, p5.height / 2 + y, 5, 5);

    p5.translate(p5.width / 2 - x, p5.height / 2 - y);
    p5.fill("pink");
    p5.sphere(15, 15, 15);

    p5.camera(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ);
  };
};

new P5(sketch);
