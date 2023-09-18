import P5 from "p5";

const sketch = (p5: P5) => {
  // p5.preload = () => {
  //   img = p5.loadImage("shadow.jpg");
  // };

  //3D canvas for rasterization in 3D
  p5.setup = () => {
    p5.createCanvas(800, 800);
    p5.background(0);
    p5.noStroke();

    p5.imageMode("center");
  };

  p5.draw = () => {
    p5.translate(400, 400);

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

    for (let i = 0; i < 9; i++) {
      let waveRatio = 2.25 * 0.7; //1.575
      //   let waveRatio = 2.25 * 0.3; //0.45

      p5.fill("gray");
      p5.text(
        ` 
      a/b
      ` + `${waveRatio}`,
        -25,
        300
      );
      let waveX = p5.sin(p5.radians(p5.frameCount * waveRatio + i)) * 200;
      let waveY = p5.cos(p5.radians(p5.frameCount + i)) * 200;

      const x = p5.sin(p5.radians(p5.frameCount * waveRatio + i)) * 200;
      const y = p5.cos(p5.radians(p5.frameCount + i)) * 200;

      //   p5.fill(`#D5DBD` + `${i}`);
      p5.fill(`#E` + `${i}` + `DABE`);
      p5.ellipse(waveX + i, -waveY - i, 5, 5);
      p5.fill(`#3827` + `${i}` + `1`); //purple to olive
      p5.ellipse(waveX, -waveY - i, 5, 5);

      p5.fill("pink");
      p5.fill(`#BD42` + `${i}` + `E`); //pink to orange
      p5.ellipse(-x + i, y + i, 5, 5);
      p5.fill(`#D5DBD` + `${i}`);
      p5.fill(`#E` + `${i}` + `DABE`);
      p5.ellipse(-x, y, 5, 5);
    }
  };
};

new P5(sketch);
