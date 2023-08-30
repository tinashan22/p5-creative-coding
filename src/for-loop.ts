import P5 from "p5";
import "./style.css";

const sketch = (p5: P5) => {
  p5.setup = () => {
    p5.createCanvas(500, 500);
    p5.rectMode("center");
    // p5.frameRate(4);
  };
  ///a grid of circles that zoom in and out with mouseX mvmt
  // p5.draw = () => {
  //   p5.background(0);
  //   p5.noStroke();
  //   let amount = p5.mouseX / 20;
  //   let diameter = p5.width / amount;
  //   p5.translate(diameter / 2, 0);
  //   for (let i = 0; i < amount; i++) {
  //     for (let j = 0; j < amount; j++) {
  //       p5.ellipse(i * diameter, j * diameter, diameter, diameter);
  //     }
  //     // p5.ellipse(i * diameter, i * diameter, diameter, diameter);
  //   }
  // };
  ///a circle of circles that increase in opacity
  // p5.draw = () => {
  //   p5.background(0);
  //   let amount = 15;
  //   let step = 360 / amount;
  //   p5.translate(p5.width / 2, p5.height / 2);
  //   p5.noStroke();
  //   for (let i = 0; i < amount; i++) {
  //     // p5.fill("#f1f1f1");
  //     p5.push();
  //     p5.fill(180, 102, 80, 50 + i * 20);
  //     p5.rotate(p5.radians(i * step));
  //     p5.ellipse(0, 300, 70, 70);
  //     p5.pop();
  //   }
  // };
  ///a circle of rectangles with alternating colors
  // p5.draw = () => {
  //   let fg = "white";
  //   let primary = "blue";
  //   let secondary = "yellow";
  //   let frameCountFactor;
  //   p5.background(0);
  //   let amount = 18; //put in any number divisible by 3
  //   let step = 360 / amount;
  //   p5.push();
  //   p5.translate(p5.width / 2, p5.height / 2);
  //   p5.noStroke();
  //   p5.rectMode("center");
  //   for (let i = 0; i < amount; i++) {
  //     //pick color
  //     if (i % 3 == 0) {
  //       p5.fill(fg);
  //       frameCountFactor = 2;
  //     } else if (i % 2 == 0) {
  //       p5.fill(primary);
  //       frameCountFactor = 4;
  //     } else {
  //       p5.fill(secondary);
  //       frameCountFactor = 6;
  //     }
  //     p5.push();
  //     p5.rotate(p5.radians(i * step * p5.frameCount));
  //     p5.translate(290, 0);
  //     p5.rect(0, 0, 228, 60);
  //     p5.pop();
  //   }
  //   p5.pop();
  // };
  // p5.draw = () => {
  //   p5.background(0);
  //   let tiles = 100;
  //   let step = 360 / tiles;
  //   p5.noStroke();
  //   p5.push();
  //   p5.translate(p5.width / 2, p5.height / 2);
  //   p5.rectMode("center");
  //   for (let i = 0; i < tiles; i++) {
  //     p5.push();
  //     p5.fill(220, 200, 220, (i * p5.frameCount) / 2);
  //     p5.rotate(p5.radians(i * step * p5.frameCount * 0.8));
  //     p5.translate(i * 3, 0);
  //     p5.rect(0, 0, 35, 35);
  //     p5.pop();
  //   }
  //   p5.pop();
  // };
  //draw a grid of circles that change shape and color according to mouse mvmt
  // p5.draw = () => {
  //   p5.background(0);
  //   let tilesX = p5.mouseX / 30;
  //   let tilesY = p5.mouseY / 30;
  //   let tilesW = p5.width / tilesX;
  //   let tilesH = p5.height / tilesY;
  //   p5.translate(tilesW / 2, tilesH / 2);
  //   p5.noStroke();
  //   let fg = "black";
  //   let bg = "white";
  //   if (p5.mouseX > p5.height / 2) {
  //     fg = "black";
  //     bg = "white";
  //   } else {
  //     fg = "white";
  //     bg = "black";
  //   }
  //   p5.background(bg);
  //   p5.fill(fg);
  // for (let x = 0; x < tilesX; x++) {
  //   for (let y = 0; y < tilesY; y++) {
  //     let posX = x * tilesW;
  //     let posY = y * tilesH;
  //     let w = tilesW;
  //     let h = tilesH;
  //     p5.ellipse(posX, posY, w, h);
  //   }
  //   }
  // };
  ///basic grid drawing ellipse set up
  // p5.draw = () => {
  //   p5.background(0);
  //   p5.fill("#f1f1f1");
  //   p5.rectMode("center");
  //   p5.noStroke();
  //   let amount = p5.int(1 + p5.mouseX * 0.1);
  //   let diameter = p5.width / amount;
  //   p5.translate(diameter / 2, diameter / 2);
  //   for (let x = 0; x < amount; x++) {
  //     for (let y = 0; y < amount; y++) {
  //       let posX = x * diameter;
  //       let posY = y * diameter;
  //       let w = diameter;
  //       let h = diameter;
  //       p5.ellipse(posX, posY, w, h);
  //     }
  //   }
  // };
  //draw tile variations that rotate with frame
  // p5.draw = () => {
  //   p5.background(0);
  //   p5.noStroke();
  //   p5.fill("#f1f1f1");
  //   let tilesX = 1 + p5.frameCount / 50;
  //   let tilesY = tilesX;
  //   let tileW = p5.width / tilesX;
  //   let tileH = p5.height / tilesY;
  //   let selector = 0;
  //   p5.translate(tileW / 2, tileH / 2);
  //   if (p5.frameCount > 200) {
  //     p5.exit();
  //   }
  //   for (let x = 0; x < tilesX; x++) {
  //     for (let y = 0; y < tilesY; y++) {
  //       let posX = x * tileW;
  //       let posY = y * tileH;
  //       p5.push();
  //       p5.translate(posX, posY);
  //       let rot = p5.frameCount;
  //       let scalar = 0.9;
  //       if (selector == 0) {
  //         p5.rotate(p5.radians(45 + rot));
  //         p5.rect(0, 0, tileW * scalar, tileH * 0.1);
  //         selector++;
  //       } else if (selector == 1) {
  //         p5.rotate(p5.radians(90 + rot));
  //         p5.rect(0, 0, tileW * scalar, tileH * 0.5);
  //         selector++;
  //       } else if (selector == 2) {
  //         p5.rotate(p5.radians(135 + rot));
  //         p5.rect(0, 0, tileW * scalar, tileH * 0.33);
  //         selector = 0;
  //       }
  //       p5.pop();
  //     }
  //   }
  // };
  //modulo operation with color change
  // let switchColors = true;
  // let fg: string;
  // let bg: string;
  // let tilesX: number;
  // let resetParams = () => {
  //   switchColors = !switchColors;
  //   tilesX = p5.int(p5.random(5, 20));
  //   if (switchColors == true) {
  //     fg = "black";
  //     bg = "white";
  //   } else {
  //     fg = "white";
  //     bg = "black";
  //   }
  // };
  // p5.setup = () => {
  //   p5.createCanvas(500, 500);
  //   p5.rectMode("center");
  //   // resetParams();
  // };
  // p5.draw = () => {
  //   if (p5.frameCount % 50 == 0) {
  //     resetParams();
  //   }
  //   p5.fill(fg);
  //   p5.background(bg);
  //   p5.noStroke();
  //   const tilesY = tilesX;
  //   const tilesW = p5.width / tilesX;
  //   const tilesH = p5.height / tilesY;
  //   p5.translate(tilesX / 2, tilesY / 2);
  //   let counter = 0;
  //   for (let x = 0; x < tilesX; x++) {
  //     for (let y = 0; y < tilesY; y++) {
  //       let posX = tilesW * x;
  //       let posY = tilesH * y;
  //       if (counter % 7 == 0) {
  //         p5.push();
  //         p5.ellipse(posX, posY, tilesW / 2, tilesH / 2);
  //         p5.pop();
  //       }
  //       if (counter % 6 == 0) {
  //         p5.push();
  //         //tranlate before rotating == rotating in place
  //         p5.translate(x * tilesW, y * tilesH);
  //         p5.rotate(p5.radians(p5.frameCount * 2));
  //         p5.rect(0, 0, tilesW / 5, tilesH * 3);
  //         p5.pop();
  //       }
  //       counter++;
  //     }
  //   }
  // };
  // p5.draw = () => {
  //   p5.background(0);
  //   p5.fill("white");
  //   p5.noStroke();
  //   const amount = p5.int(1 + p5.mouseX * 0.1);
  //   const diameter = p5.width / amount;
  //   p5.translate(diameter / 2, diameter / 2);
  //   for (let x = 0; x < amount; x++) {
  //     for (let y = 0; y < amount; y++) {
  //       let posX = x * diameter;
  //       let posY = y * diameter;
  //       p5.push();
  //       if (p5.random(1) < 0.5) {
  //         p5.ellipse(posX, posY, diameter, diameter);
  //       } else {
  //         if (p5.random(1) < 0.5) {
  //           // p5.push();
  //           p5.rect(posX, posY, diameter, diameter);
  //           // p5.pop();
  //         } else {
  //           const x1 = posX;
  //           const y1 = posY;
  //           const x2 = posX + diameter / 2;
  //           const y2 = posY - diameter;
  //           const x3 = posX + diameter;
  //           const y3 = posY;
  //           p5.push();
  //           p5.translate(-diameter / 2, diameter / 2);
  //           p5.triangle(x1, y1, x2, y2, x3, y3);
  //           p5.pop();
  //         }
  //       }
  //       p5.pop();
  //     }
  //   }
  // };
  //webGL rotating grid
  // p5.setup = () => {
  //   p5.createCanvas(500, 500, "webgl");
  // };
  // const tileX = 11;
  // const tileY = 11;
  // let mag;
  // p5.draw = () => {
  //   p5.background(0);
  //   p5.noStroke();
  //   mag = p5.mouseX;
  //   p5.push();
  //   //p5.rotateY(p5.radians(p5.frameCount));
  //   p5.rotateX(p5.radians(p5.frameCount * 0.8));
  //   p5.rotateZ(p5.radians(p5.frameCount * 0.8));
  //   for (let x = 0; x < tileX; x++) {
  //     for (let y = 0; y < tileY; y++) {
  //       let posX = p5.map(x, 0, tileX, -mag, mag);
  //       let posY = p5.map(y, 0, tileY, -mag, mag);
  //       p5.push();
  //       p5.translate(posX, posY);
  //       p5.sphere(8);
  //       p5.pop();
  //     }
  //   }
  //   p5.pop();
  // };
};

new P5(sketch);
