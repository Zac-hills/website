import * as PIXI from "pixi.js";
import React, { Component } from "react";
import Footer from "../Footer/Footer";
import ProjectPage from "../Page/ProjectPage";
import BioPage from "../Page/BioPage";

class RenderWindow extends Component {
  state = { pixi_cnt: null, app: null };
  constructor(props) {
    super(props);
    this.state.app = new PIXI.Application({
      width: document.documentElement.clientWidth - 17,
      height: window.innerHeight - 100,
      transparent: true,
      antialias: true
    });
  }
  updatePixi = element => {
    // the element is the DOM object that we will use as container to add pixi stage(canvas)
    this.state.pixi_cnt = element;
    //now we are adding the application to the DOM element which we got from the Ref.
    if (this.state.pixi_cnt && this.state.pixi_cnt.children.length <= 0) {
      this.state.pixi_cnt.appendChild(this.state.app.view);
      new TextParticle(
        "Zachary Hills \n \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFull Stack Developer",
        this.state.app
      );
    }
  };

  render() {
    return (
      <div>
        <div
          style={{
            height: window.innerHeight - 100,
            backgroundImage: 'url("codebackground.png")'
          }}
          ref={this.updatePixi}
        ></div>
        <Footer />
        <BioPage />
        <ProjectPage cardWidth="400px" cardHeight="400px" />
      </div>
    );
  }
}

class TextParticle {
  /**
   *
   * @param {string} text
   * @param {PIXI.Application} app
   * @param {{x:Number, y:Number, anchor:Number}} position
   * @param {{fontWeight:string, fontSize:Number, fontFamily:string, fill:string, align:string}} textSettings
   */
  constructor(text, app, position = null, textSettings = null) {
    if (position != null) {
      this.position = position;
    }
    if (textSettings != null) {
      this.textSettings = textSettings;
    }
    this.message = text;
    this.init(app);
  }
  message = null;
  text = null;
  textSettings = {
    fontWeight: "bold",
    fontSize: 60,
    fontFamily: "Arial",
    fill: "#f0f0f0",
    align: "center"
  };
  particles = [];
  coords = [];
  position = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    anchor: 0.5
  };
  app = null;
  timer = 0;
  /**
   *
   * @param {PIXI.Application} app
   */
  init(app) {
    this.app = app;
    this.text = new PIXI.Text(this.message, this.textSettings);
    this.text.anchor.set(this.position.anchor);
    this.text.x = this.position.x;
    this.text.y = this.position.y;
    app.stage.addChild(this.text);

    let tmpCanvas = app.renderer.plugins.extract.canvas(app.stage);
    let imageData = tmpCanvas
      .getContext("2d")
      .getImageData(0, 0, app.renderer.width, app.renderer.height);

    app.stage.removeChild(this.text);
    let widthDiff = (app.renderer.width - tmpCanvas.width) / 2;
    let heightDiff = (app.renderer.height - tmpCanvas.height) / 2;
    for (let y = 0; y < tmpCanvas.height; ++y) {
      for (let x = 0; x < tmpCanvas.width; ++x) {
        if (imageData.data[(y * imageData.width + x) * 4 + 3] > 128) {
          this.coords.push({ x: x + widthDiff, y: y + heightDiff });
        }
      }
    }
    var sprites = new PIXI.ParticleContainer(this.coords.length, {
      scale: true,
      position: true,
      rotation: false,
      uvs: false,
      alpha: false,
      tint: true
    });
    sprites.interactive = true;
    sprites.interactiveChildren = true;
    let self = this;
    app.stage.addChild(sprites);
    // Set the fill color
    for (let i = 0; i < this.coords.length; ++i) {
      // Draw a circle
      let temp = new PixelSprite(PIXI.Texture.WHITE);
      temp.tint = 0xf0f0f0;
      temp.x = this.coords[i].x;
      temp.y = this.coords[i].y;
      temp.width = 1;
      temp.height = 1;
      const random = function() {
        return -1 + Math.random() * 2;
      };
      temp.direction.x = Math.random() * random();
      temp.direction.y = Math.random() * random();
      temp.origin.x = this.coords[i].x;
      temp.origin.y = this.coords[i].y;
      temp.waitTimer =
        (temp.origin.x / window.innerWidth) * temp.animationTimer;

      sprites.addChild(temp);
    }

    app.ticker.add(function(delta) {
      self.timer += delta * (1.0 / 60.0);
      if (self.timer > 14) {
        for (let i = 0; i < sprites.children.length; ++i) {
          sprites.children[i].animating = true;
        }
        self.timer = 0;
      }
      for (let i = 0; i < sprites.children.length; ++i) {
        sprites.children[i].update(delta);
      }
    });
    //app.ticker.add(changeColor);
  }
}

class PixelSprite extends PIXI.Sprite {
  constructor(texture) {
    super(texture);
    this.interactive = true;
    this.hitArea = this.getBounds();
    this.on("mouseover", function(event) {
      console.log("mouseData");
    });
  }
  direction = { x: 0, y: 0 };
  origin = { x: 0, y: 0 };
  animationTimer = 3.0;
  waitTimer = 3.0;
  currentUpdate = this.wait;
  implodeTimer = this.animationTimer;
  explodeTimer = this.animationTimer;
  animating = true;
  wait(delta) {
    this.waitTimer -= delta / 60;
    if (this.waitTimer < 0) {
      this.waitTimer =
        (this.origin.x / window.innerWidth) * this.animationTimer;
      this.currentUpdate = this.explode;
    }
  }
  explode(delta) {
    this.explodeTimer -= delta / 60;
    this.x += this.direction.x * delta;
    this.y += this.direction.y * delta;
    if (this.explodeTimer < 0) {
      this.explodeTimer = this.animationTimer;
      this.currentUpdate = this.implode;
    }
  }
  implode(delta) {
    this.implodeTimer -= delta / 60;
    this.x -= this.direction.x * delta;
    this.y -= this.direction.y * delta;
    if (this.implodeTimer < 0) {
      this.x = this.origin.x;
      this.y = this.origin.y;
      this.implodeTimer = this.animationTimer;
      this.animating = false;
      this.currentUpdate = this.notAnimating;
    }
  }
  notAnimating(delta) {
    if (this.animating) {
      this.currentUpdate = this.wait;
    }
  }
  update(delta) {
    this.currentUpdate(delta);
  }
  hover(event) {
    console.log("mouseData");
    console.log(event);
    const displacement = 30;
  }
}
export default RenderWindow;
