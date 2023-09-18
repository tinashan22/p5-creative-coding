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
      for (let j = 0; j < 9; j++) {
        let waveRatio = 2.25 * 0.7; //1.575
        //   let waveRatio = 2.25 * 0.3; //0.45

        p5.fill("gray");
        p5.text(
          ` 
            a/b
            ` + `${waveRatio}`,
          -35,
          300
        );
        let waveX =
          p5.sin(p5.radians(p5.frameCount * waveRatio * 0.6 + i)) * 200;
        let waveY = p5.cos(p5.radians(p5.frameCount * 0.6 + i)) * 200;

        const x = p5.sin(p5.radians(p5.frameCount * waveRatio * 0.8 + i)) * 200;
        const y = p5.cos(p5.radians(p5.frameCount * 0.8 + i)) * 200;

        const colorVariation = p5.int(
          p5.map(p5.sin(p5.frameCount), -1, 1, 0, 9)
        );

        p5.fill(`#3D29` + `${colorVariation}` + `${colorVariation}`); //brown purple
        p5.ellipse(waveX, waveY - i, 3, 3);

        p5.fill(`#E` + `${j}` + `${i}` + `A` + `${colorVariation}` + `1`); //sunset weave
        p5.ellipse(x + i, y, 5, 5);

        p5.fill(
          `#d` +
            `${j + colorVariation}` +
            `d` +
            `${colorVariation}` +
            `1` +
            `${colorVariation + i}`
        ); //white, lilac, grass speckle
        p5.ellipse(-waveX - i, waveY + i, 5, 5);

        // //   p5.fill("pink");
        // p5.fill(`#BD4` + `${colorVariation}` + `${i}` + `E`); //pink to orange
        // p5.ellipse(x, y - i, 5, 5);
        //   p5.fill(`#D5DBD` + `${i}`);
      }
    }
  };
};

new P5(sketch);
