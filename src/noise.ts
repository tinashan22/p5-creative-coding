import P5 from "p5";
import "./style.css";

// let img: Image;

export const drawNoise = (p5: P5, color: string | undefined) => {
  const tilesX = p5.int(p5.random(3, 7));
  const tilesY = p5.int(p5.random(3, 7));
  const tilesW = p5.width / tilesX;
  const tilesH = p5.height / tilesY;

  const c = color ?? "white";

  //p5.translate(tilesW / 2, tilesH / 2);
  for (let i = 0; i < tilesX; i++) {
    for (let j = 0; j < tilesY; j++) {
      console.log(tilesX);
      let positionX = i * tilesW + p5.random(-10, 10);
      let positionY = j * tilesH + p5.random(-10, 10);
      //circles
      p5.noStroke();
      p5.fill(c);
      p5.ellipse(
        positionX + p5.int(p5.random(-100, 100)),
        positionY + p5.int(p5.random(-100, 100)),
        p5.int(p5.random(0, 5))
      );
      //lines
      p5.stroke(c);
      p5.strokeWeight(1);
      p5.line(
        positionX + p5.int(p5.random(-10, 10)),
        positionY + p5.int(p5.random(-10, 10)),
        positionX + p5.int(p5.random(-2, 4)),
        positionY + p5.int(p5.random(-2, 4))
      );

      if ((i + 1) % 2) {
        //filled-in specks
        p5.arc(
          positionX + p5.int(p5.random(-100, 100)),
          positionY + p5.int(p5.random(-100, 100)),
          6,
          6,
          p5.radians(p5.random(0, 80)),
          p5.radians(p5.random(80, 180)),
          "pie"
        );
        //   arcs;
        p5.noFill();
        p5.arc(
          positionX + p5.int(p5.random(-100, 100)),
          positionY + p5.int(p5.random(-100, 100)),
          6,
          6,
          p5.radians(p5.random(0, 80)),
          p5.radians(p5.random(80, 180)),
          "chord"
        );
      } else {
        //curves
        p5.curveTightness(-0.5);
        p5.noFill();
        p5.curve(
          positionX + p5.int(p5.random(-100, 100)), //x1
          positionY + p5.int(p5.random(-100, 100)), //y1
          positionX + p5.int(p5.random(-10, 10)), //x2
          positionY + p5.int(p5.random(10, 20)), //y2
          positionX + p5.int(p5.random(-10, 10)), //x3
          positionY + p5.int(p5.random(10, 20)), //y3
          positionX + p5.int(p5.random(-100, 100)), //x4
          positionY + p5.int(p5.random(-100, 100)) //y4
        );
      }
    }
  }
};
