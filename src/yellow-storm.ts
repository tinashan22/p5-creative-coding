import P5, { Image, Color } from "p5";

let img1: Image;
let img2: Image;

const sketch = (p5: P5) => {
  p5.preload = () => {
    img1 = p5.loadImage("1.jpg");
    img2 = p5.loadImage("2.jpg");
  };

  //3D canvas for rasterization in 3D
  p5.setup = () => {
    p5.createCanvas(1000, 1000, "webgl");
    // p5.imageMode("center");
    // p5.rectMode("center");

    if (p5.pixelDensity() === 2) {
      p5.pixelDensity(1);
    }

    p5.frameRate(60);

    const res = 100;

    img1.resize(res, res);
    img2.resize(res, res);
    p5.noStroke();
  };

  p5.draw = () => {
    p5.background(0);
    // p5.fill("white");

    p5.directionalLight(255, 255, 255, 0, 1, 0);
    p5.directionalLight(255, 255, 0, 1, 0, 0);
    p5.directionalLight(255, 255, 255, -1, 0, 0);

    //tilesX = img.width; tilesY = img.height
    const tilesH = p5.height / img1.height;
    const tilesW = p5.width / img1.width;
    //rotate before translate to rotate around center of the images
    const rangeY = p5.map(p5.tan(p5.radians(p5.frameCount)), -1, 1, -40, 40);
    p5.rotateY(p5.radians(rangeY));
    // p5.rotateX(p5.radians(45));
    // p5.rotateY(p5.radians(p5.mouseY / 2));
    // p5.rotateX(p5.radians(p5.mouseX / 2));
    //p5.rotateY(p5.radians(p5.frameCount));
    p5.scale(0.5);
    p5.translate(-p5.width / 2, -p5.height / 2 - 100, 0);

    // p5.translate(0, 0);

    for (let x = 0; x < img1.width; x++) {
      for (let y = 0; y < img1.height; y++) {
        // p5.push();
        //get color of first image
        let color1 = p5.color(img1.get(x, y));
        //get color of second image
        let color2 = p5.color(img2.get(x, y));

        //w adds gradient to lerpValue
        let w = p5.norm(
          p5.sin(p5.radians(p5.frameCount + x * 2 + y * 2)),
          -1,
          1
        );

        let lerpValue = p5.map(
          p5.sin(p5.radians(p5.frameCount * 5)),
          -1,
          1,
          0,
          1
        );
        let lerpColor = p5.lerpColor(color1, color2, w);
        p5.fill(lerpColor);

        p5.push();
        //determine the z value of the voxel
        let brightness = p5.brightness(lerpColor);
        //let depth = p5.map(brightness, 0, 255, -200, 200);
        let sizeFactor = p5.map(brightness, 0, 255, 1, 0);
        let depth = p5.map(
          brightness,
          0,
          255,
          0,
          (p5.frameCount * p5.frameCount) / 15
        );
        p5.translate(x * tilesW, y * tilesH, depth);
        p5.box(tilesW * sizeFactor, tilesH * sizeFactor, tilesW, 0, 0);

        p5.pop();
      }
    }
  };
};

new P5(sketch);
