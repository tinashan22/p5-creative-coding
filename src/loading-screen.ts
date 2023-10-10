import P5 from "p5";
import "./style.css";

const sketch = (p5: P5) => {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
  };

  p5.draw = () => {
    p5.background(0);
    p5.translate(p5.windowWidth / 2, p5.windowHeight / 2);
    p5.strokeWeight(8);
    p5.noFill();
    for (let i = 0; i < 200; i++) {
      let wave = p5.tan(p5.radians(p5.frameCount + i * 0.1)) * 100;
      let c = p5.map(p5.sin(p5.radians(p5.frameCount * 4 + i)), -1, 1, 0, 255);
      p5.push();
      p5.stroke(c);
      p5.ellipse(wave, 0, p5.windowHeight * 0.8, p5.windowHeight * 0.8);
      p5.pop();
    }

    let textWave = p5.tan(p5.radians(p5.frameCount)) * 100;
    let textColor = p5.map(
      p5.cos(p5.radians(p5.frameCount * 2)),
      -1,
      1,
      0,
      255
    );
    p5.push();
    p5.fill(textColor);
    p5.text("loading", textWave, (p5.height * 0.9) / 2);
    p5.pop();
  };
};

new P5(sketch);
