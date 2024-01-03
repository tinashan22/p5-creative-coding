import P5 from "p5";

const sketch = (p5: P5) => {
  //3D canvas for rasterization in 3D
  p5.setup = () => {
    p5.createCanvas(800, 800);
    p5.imageMode("center");
    p5.background("#E1DABE");
  };

  p5.draw = () => {
    let bg = "#E1DABE";
    let fg = "red";
    // p5.background("#E1DABE");
    p5.fill(fg);
    p5.noStroke();
    p5.translate(50, 30);

    const column = 3;
    const row = 13;
    const barW = 200;
    const barH = (800 - 100 - 240) / row;

    for (let i = 0; i < column; i++) {
      for (let j = 0; j < row; j++) {
        //   console.log(tilesX);

        let positionX = i * barW + p5.random(-3, 2) + 26 * i;
        let positionY = j * barH + p5.random(-1, 2) + 23 * j;
        p5.push();
        p5.translate(positionX + barW / 2, positionY + barH / 2);
        // p5.rotate(p5.radians(p5.random(-3, 3)));

        // p5.rotateX(p5.radians(p5.random(0, 1)));
        p5.rotate(p5.radians(p5.random(-3, 2)));
        p5.rect(-barW / 2, -barH / 2, barW, barH);

        p5.pop();
      }
    }

    //@ts-ignore
    p5.stop();
  };
};

new P5(sketch);
