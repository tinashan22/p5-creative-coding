import P5, { Image } from "p5";

let img: Image;

const sketch = (p5: P5) => {
  p5.preload = () => {
    img = p5.loadImage("3.jpg");
  };

  //3D canvas for rasterization in 3D
  p5.setup = () => {
    p5.createCanvas(500, 1000, "webgl");

    if (p5.pixelDensity() === 2) {
      p5.pixelDensity(1);
    }

    p5.frameRate(60);

    const res = 80;

    img.resize(res, 160);

    p5.noStroke();
  };

  p5.draw = () => {
    p5.background("white");
    // p5.fill("white");

    p5.directionalLight(255, 255, 255, 0, 1, 0);
    // p5.directionalLight(255, 255, 0, 1, 0, 0);
    // p5.directionalLight(255, 255, 255, -1, 0, 0);

    //tilesX = img.width; tilesY = img.height
    const tilesH = p5.height / img.height;
    const tilesW = p5.width / img.width;
    //rotate before translate to rotate around center of the images

    p5.rotateX(p5.radians(5));
    // p5.rotateY(p5.radians(p5.mouseY / 2));
    // p5.rotateX(p5.radians(p5.mouseX / 2));

    p5.translate(-p5.width / 2, -p5.height / 2, 0);

    for (let x = 0; x < img.width; x++) {
      for (let y = 0; y < img.height; y++) {
        // p5.push();
        //get color of  image
        let color = p5.color(img.get(x, y));

        p5.fill(color);

        p5.push();
        //determine the z value of the voxel
        let brightness = p5.brightness(color);
        //let depth = p5.map(brightness, 0, 255, -200, 200);
        let sizeFactor = p5.map(brightness, 0, 255, 1, 0);
        let depth = p5.map(
          brightness,
          0,
          255,
          0,
          p5.frameCount * p5.frameCount
        );
        p5.translate(x * tilesW, y * tilesH, depth);
        p5.box(tilesW * sizeFactor, tilesH * sizeFactor, tilesW, 0, 0);

        p5.pop();
      }
    }
  };
};

new P5(sketch);
