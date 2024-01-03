import P5 from "p5";

const sketch = (p5: P5) => {
  //3D canvas for rasterization in 3D
  p5.setup = () => {
    p5.createCanvas(800, 800);
    p5.imageMode("center");
    p5.background("#E1DABE");
  };

  p5.draw = () => {
    p5.fill(204, 102, 0, 70);

    p5.noStroke();
    p5.translate(50, 30);

    const column = 2;
    const row = 2;
    const squareW = 350;

    for (let i = 0; i < column; i++) {
      for (let j = 0; j < row; j++) {
        //   console.log(tilesX);

        let positionX = i * squareW + p5.random(-8, 8);
        let positionY = j * squareW + p5.random(-10, 10);
        p5.push();
        p5.translate(positionX + squareW / 2, positionY + squareW / 2);
        // p5.rotate(p5.radians(p5.random(-3, 3)));

        // p5.rotateX(p5.radians(p5.random(0, 1)));
        // p5.rotate(p5.radians(p5.random(-3, 2)));
        p5.rect(-squareW / 2, -squareW / 2, squareW, squareW);

        p5.pop();
      }
    }

    //@ts-ignore
    p5.stop();
  };
};

new P5(sketch);
