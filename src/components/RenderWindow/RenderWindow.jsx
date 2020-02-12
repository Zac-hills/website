import * as PIXI from "pixi.js";
import React, { Component } from "react";

class RenderWindow extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.pixi_cnt = null;
    this.app = new PIXI.Application({
      width: window.outerWidth,
      height: window.innerHeight,
      transparent: false
    });
  }
  updatePixiCnt = element => {
    // the element is the DOM object that we will use as container to add pixi stage(canvas)
    this.pixi_cnt = element;
    //now we are adding the application to the DOM element which we got from the Ref.
    if (this.pixi_cnt && this.pixi_cnt.children.length <= 0) {
      this.pixi_cnt.appendChild(this.app.view);
      new TextParticle(
        "Zachary Hills \n \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFull Stack Developer",
        this.app
      );
    }
  };

  render() {
    return <div ref={this.updatePixiCnt}></div>;
  }
}

class Renderer {
  app = null;
  constructor() {
    this.app = new PIXI.Application({ antialias: true });
  }
  init() {}
  update(element) {
    if (element && !element.children) {
      element.appendChild(this.app.view);
    }
  }
  destroy() {}
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
    fill: "#ffffff",
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
      alpha: false
    });

    let dir = [];
    app.stage.addChild(sprites);
    // Set the fill color
    for (let i = 0; i < this.coords.length; ++i) {
      // Draw a circle
      let temp = PIXI.Sprite.from(PIXI.Texture.WHITE);
      temp.x = this.coords[i].x;
      temp.y = this.coords[i].y;
      temp.scale.x = 0.07;
      temp.scale.y = 0.07;
      const random = function() {
        return -1 + Math.random() * 2;
      };
      dir.push({
        x: Math.random() * random(),
        y: Math.random() * random(),
        origin: { x: temp.x, y: temp.y }
      });

      sprites.addChild(temp);
    }
    let noiseTimer = 0.8;
    let intensity = 50.0;
    let innerForce = 0.5;
    const implode = function(delta) {
      noiseTimer = Math.max(0.0, noiseTimer - app.ticker.deltaMS / 1000);
      if (noiseTimer == 0.0) {
        for (let i = 0; i < sprites.children.length; ++i) {
          sprites.children[i].x = dir[i].origin.x;
          sprites.children[i].y = dir[i].origin.y;
        }
        app.ticker.remove(implode);
        return;
      }
      for (let i = 0; i < sprites.children.length; ++i) {
        sprites.children[i].x += intensity * -dir[i].x * delta;
        sprites.children[i].y += intensity * -dir[i].y * delta;
      }
    };
    const explode = function(delta) {
      noiseTimer = Math.max(0.0, noiseTimer - app.ticker.deltaMS / 1000);
      if (noiseTimer == 0.0) {
        app.ticker.remove(explode);
        app.ticker.add(implode);
        noiseTimer = 0.8;
      }
      for (let i = 0; i < sprites.children.length; ++i) {
        sprites.children[i].x += intensity * dir[i].x * delta;
        sprites.children[i].y += intensity * dir[i].y * delta;
      }
    };
    app.ticker.add(explode);
  }
}

class PixelSprite extends PIXI.Sprite {
  direction = { x: 0, y: 0 };
}
export default RenderWindow;
