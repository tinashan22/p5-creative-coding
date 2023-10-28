import P5, { Image } from "p5";

let img: Image;

const sketch = (p5: P5) => {
  p5.preload = () => {
    img = p5.loadImage("6.png");
  };

  //3D canvas for rasterization in 3D
  p5.setup = () => {
    p5.createCanvas(800, 800, "webgl");

    if (p5.pixelDensity() === 2) {
      p5.pixelDensity(1);
    }

    p5.frameRate(60);

    const res = 100;

    img.resize(res, 190);

    p5.noStroke();
  };

  p5.draw = () => {
    p5.background("white");
    // p5.fill("white");

    // p5.directionalLight(0, 0, 0, 0, 1, 0);
    // p5.directionalLight(10, 10, 10, 0, 0, 800);
    // p5.directionalLight(0, 0, 0, -1, 0, 0);

    //tilesX = img.width; tilesY = img.height
    const tilesH = 750 / img.height;
    const tilesW = 600 / img.width;
    //rotate before translate to rotate around center of the images

    // p5.rotateX(p5.radians(p5.mouseX / 2));
    p5.lights();
    p5.camera(0, 0, 750);
    // p5.rotateX(p5.radians(20));
    const rangeY = p5.map(
      p5.sin(p5.radians(p5.frameCount * 4)),
      -1,
      1,
      -20,
      20
    );
    p5.rotateY(p5.radians(rangeY));
    p5.translate(-p5.width / 2 + 30, -p5.height / 2, 0);

    for (let x = 0; x < img.width; x++) {
      for (let y = 0; y < img.height; y++) {
        //get color of  image
        let color = p5.color(img.get(x, y));

        p5.fill(color);

        p5.push();
        //determine the z value of the voxel
        let brightness = p5.brightness(color);

        //depth 1 for non flying image
        let depth = p5.map(brightness, 0, 255, -25, 25);
        //depth 2 for dark parts flying backwards
        // let depth = p5.map(
        //   brightness,
        //   30,
        //   255,
        //   0,
        //   p5.frameCount * p5.frameCount
        // );

        //depth 3 for everything fly towards camera
        // let depth = p5.map(
        //   brightness,
        //   0,
        //   255,
        //   0,
        //   p5.frameCount * p5.frameCount
        // );

        //determine box size based on brightness
        let sizeFactor = p5.map(brightness, 0, 135, 1.1, 0);
        p5.translate(x * tilesW, y * tilesH, depth);
        p5.box(tilesW * sizeFactor, tilesH * sizeFactor, tilesW, 0, 0);

        p5.pop();
      }
    }
  };
};

new P5(sketch);
