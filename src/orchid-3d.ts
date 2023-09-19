import P5 from "p5";

const sketch = (p5: P5) => {
  // p5.preload = () => {
  //   img = p5.loadImage("shadow.jpg");
  // };

  //3D canvas for rasterization in 3D
  p5.setup = () => {
    p5.createCanvas(800, 800, "webgl");
    p5.background(0);
    p5.noStroke();

    p5.imageMode("center");
  };

  p5.draw = () => {
    if (p5.frameCount > 1250) {
      // p5.stop();
    }
    p5.translate(0, 0);
    // p5.rotateY(p5.radians(p5.frameCount * 0.1));
    p5.rotateX(p5.radians(p5.frameCount * 0.5));
    p5.rotateZ(p5.radians(p5.frameCount * 0.5));

    //#54654B olive green
    //#831B2E maroon
    //#E1B03D onion skin
    //#C5716B dusty rose
    //#E1DABE warm mist
    //#CBCFD2 cool mist

    //#382758 purple
    //#BD426E magenta
    //#D3CAD9 light lilac
    //#D5DBD7 cool white

    // let waveRatio = 2.25 * 0.7; //1.575
    // let waveRatio = 2.25 * 0.3; //0.45
    let waveRatio = 1.05;

    p5.fill("#C5716B");
    p5.text(
      `
      a/b
      ` + `${waveRatio}`,
      -25,
      330
    );

    for (let i = 0; i < 100; i++) {
      let waveX =
        p5.sin(p5.radians(p5.frameCount * waveRatio + i)) * p5.width * 0.3;
      let waveX2 = p5.sin(p5.radians(p5.frameCount + i * 5)) * p5.width * 0.1;
      let waveY = p5.cos(p5.radians(p5.frameCount * 0.3 + i)) * p5.height * 0.4;
      p5.fill("#382758");
      p5.ellipse(waveX + waveX2, waveY, 2, 2);
      p5.fill("#E1B03D");
      p5.ellipse(waveX2, waveY, 2, 2);
    }
  };
};

new P5(sketch);
