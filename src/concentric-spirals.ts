import P5 from "p5";

const sketch = (p5: P5) => {
  //3D canvas for rasterization in 3D
  p5.setup = () => {
    p5.createCanvas(800, 800);
    p5.imageMode("center");
    p5.background("#E1DABE");
  };

  p5.draw = () => {
    // let bg = "#E1DABE";
    //let fg = "red";

    // p5.fill(0);
    // p5.translate(400, 400);
    let circles = 180;
    let size = 2;

    let width = 800;

    // let originX = width / 2;
    // let originY = width / 2;
    // let outterR = 80;

    // for (let i = 0; i < circles; i++) {
    //   let ratio = i / circles;
    //   let spiralR = outterR * ratio;
    //   let angleIncrement = p5.radians(2);
    //   let angle = i * angleIncrement;

    //   let x = originX + p5.cos(angle) * spiralR * (i / 180);
    //   let y = originY + p5.sin(angle) * spiralR * (i / 180);
    //   p5.ellipse(x, y, size, size);
    // }

    // n_points = 300
    // angle = radians(360) / n_points
    // radius = 300

    // beginShape()
    // strokeWeight(4)
    // for e in range(n_points):
    //     n = noise(map(e, 0, n_points, 0, 3))
    //     x = cos(angle * e) * radius * n
    //     y = sin(angle * e) * radius * n
    //     vertex(width / 2 + x, height / 2 + y)
    // endShape(CLOSE)
    p5.noFill();
    let numOfCircles = 330;
    let angle = p5.radians(360) / numOfCircles;
    let radius = 8;
    p5.translate(width / 2, width / 2);
    p5.rotate(p5.radians(-60));

    for (let r = 12; r < 390; r += 20) {
      p5.beginShape();
      p5.strokeWeight(3);

      for (let i = 0; i < numOfCircles; i++) {
        let noise = p5.map(i, 0, numOfCircles, -4.2, 3.2);
        let x = p5.cos(angle * i) * r + noise;
        let y = p5.sin(angle * i) * r + noise;
        p5.vertex(x, y);
        //p5.vertex(width / 2 + x, width / 2 + y);
      }
      p5.endShape();
    }
  };
};

new P5(sketch);
