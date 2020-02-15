import * as PIXI from "pixi.js";
import React, { Component } from "react";

class RenderWindow extends Component {
  state = { pixi_cnt: null, app: null };
  constructor(props) {
    super(props);
    this.state.app = new PIXI.Application({
      width: window.outerWidth,
      height: window.innerHeight,
      transparent: false
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
    return <div ref={this.updatePixi}></div>;
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

      sprites.addChild(temp);
    }
    let noiseTimer = 0.8;
    let intensity = 50.0;
    const changeColor = function(delta) {
      for (let i = 0; i < sprites.children.length; ++i) {
        sprites.children[i].tint = Math.floor(
          sprites.children[i].x + sprites.children[i].y
        );
      }
    };
    const implode = function(delta) {
      noiseTimer = Math.max(0.0, noiseTimer - app.ticker.deltaMS / 1000);
      if (noiseTimer == 0.0) {
        app.ticker.remove(implode);
        for (let i = 0; i < sprites.children.length; ++i) {
          sprites.children[i].x = sprites.children[i].origin.x;
          sprites.children[i].y = sprites.children[i].origin.y;
        }
        return;
      }
      for (let i = 0; i < sprites.children.length; ++i) {
        sprites.children[i].x +=
          intensity * -sprites.children[i].direction.x * delta;
        sprites.children[i].y +=
          intensity * -sprites.children[i].direction.y * delta;
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
        sprites.children[i].x +=
          intensity * sprites.children[i].direction.x * delta;
        sprites.children[i].y +=
          intensity * sprites.children[i].direction.y * delta;
      }
    };
    app.ticker.add(explode);
    app.ticker.add(changeColor);
  }
}

class PixelSprite extends PIXI.Sprite {
  constructor(texture) {
    super(texture);
    this.on("mouseover", this.hover.bind(this));
  }
  direction = { x: 0, y: 0 };
  origin = { x: 0, y: 0 };

  hover(mouseData) {
    console.log(mouseData);
    const displacement = 30;
  }
}
export default RenderWindow;
