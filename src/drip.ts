import P5 from "p5";
import "./style.css";

import { drawNoise } from "./noise";

// let img: Image;

const sketch = (p5: P5) => {
  //3D canvas for rasterization in 3D
  p5.setup = () => {
    p5.createCanvas(800, 800);
    p5.background("#E1DABE");

    drawNoise(p5, "white");
  };

  let blobs: Blob[] = [];

  let drips: Stroke[] = [];
  p5.draw = () => {
    // let noise = new Noise("white", p5.width, p5.height);
    if (drips.length == 0 && p5.frameCount === 0) {
      drips.push(new Stroke(100, 200, 5));
      drips.push(new Stroke(0, 400, 10));
    }

    for (let i = 0; i < drips.length; i++) {
      drips[i].update();
      drips[i].draw();
      if (drips[i].x > p5.width) {
        // p5.saveCanvas("output/drips###.png");
        // p5.stop();

        drips.splice(0, drips.length);
      }
    }
    if (blobs.length == 0) {
      blobs.push(new Blob(200, 100, 2, 20, 2, 300));
      //   blobs.push(new Crease(400, 550, 3, 10, 2, 750));
    }

    if (p5.frameCount == 100) {
      drips.push(new Stroke(100, 200, 5));
      drips.push(new Stroke(0, 400, 10));
      drips.push(new Stroke(250, 600, 8));
      blobs.push(new Blob(400, 550, 3, 10, 2, 750));
    }
    if (p5.frameCount == 450) {
      blobs.push(new Blob(400, 550, 1, 10, 2, 750));
    }

    if (p5.frameCount == 1100) {
      blobs.push(new Blob(500, 180, 13, 5, 2, 350));
    }

    for (let i = 0; i < blobs.length; i++) {
      blobs[i].update();
      blobs[i].draw();
    }
  };

  class Stroke {
    x: number;
    y: number;
    r: number;
    startR: number;

    constructor(x: number, y: number, r: number) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.startR = r;
    }

    update() {
      this.x += 0.3;
      this.y += p5.random(-0.5, 0.5);
      this.r += p5.random(-0.4, 0.4);
    }

    draw() {
      const a = 20;
      p5.fill(184, 64, 14, a);
      p5.noStroke();
      p5.circle(this.x, this.y, this.r * 2);
    }
  }

  class Blob {
    x: number;
    y: number;
    h: number;
    w: number;
    br: number;
    yLimit: number;

    constructor(
      x: number,
      y: number,
      h: number,
      w: number,
      br: number,
      yLimit: number
    ) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.br = br;
      this.yLimit = yLimit;
    }

    update() {
      this.x += p5.random(-1, 1);
      this.y += 0.3;

      // this.y += p5.random(-0.5, 0.5);
      this.h += p5.random(0, 0.4);

      if (this.w > 80) {
        // this.w -= p5.random(-8, -1);
        this.w -= p5.random(0, 6);
      } else if (this.w === 0) {
        this.w = 0;
      } else {
        this.w += p5.random(-6, 6);
      }
      if (this.h > 5) {
        this.h -= p5.random(0, 0.4);
      } else {
        this.h += p5.random(0, 0.4);
      }
      if (this.y > this.yLimit && p5.abs(this.w) < 15) {
        console.log(this.w);
        this.w = 0;
        this.h = 0;
      }
      this.br = this.h;
    }

    draw() {
      const a = p5.map(p5.sin(p5.radians(p5.frameCount)), -1, 1, 85, 205);
      p5.fill(10, 10, 10, a);
      p5.noStroke();
      p5.rectMode("center");
      p5.rect(
        this.x,
        this.y,
        this.w,
        this.h,
        this.br,
        this.br,
        this.br,
        this.br
      );
    }
  }
};

new P5(sketch);
