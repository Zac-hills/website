import * as THREE from "three";
import React, { Component } from "react";
import Footer from "../Footer/Footer";
import ProjectPage from "../Page/ProjectPage";
import BP from "../Page/BioPage";
import ContactPage from "../Page/ContactPage";
import { TessellateModifier } from "../../tessellation-modifier";
let renderer, scene, camera;

let mesh, uniforms;

let WIDTH = window.innerWidth,
  HEIGHT = window.innerHeight;

class RenderWindow extends Component {
  state = {};
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let loader = new THREE.FontLoader();
    let self = this;
    loader.load(process.env.PUBLIC_URL + "/Ubuntu_Thin_Regular.json", function (
      font
    ) {
      self.init(font);
      self.mount.appendChild(renderer.domElement);
      self.animate();
    });
  }
  init(font) {
    const vertexshader = `
    uniform float amplitude;

    attribute vec3 customColor;
    attribute vec3 displacement;

    varying vec3 vNormal;
    varying vec3 vColor;

    void main() {

      vNormal = normal;
      vColor = customColor;

      vec3 newPosition = position + normal * amplitude * displacement;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );

    }`;

    const fragmentshader = `
    varying vec3 vNormal;
    varying vec3 vColor;

    void main() {

      const float ambient = 0.4;

      vec3 light = vec3( 1.0 );
      light = normalize( light );

      float directional = max( dot( vNormal, light ), 0.0 );

      gl_FragColor = vec4( ( directional + ambient ) * vColor, 1.0 );

    }`;
    camera = new THREE.PerspectiveCamera(40, WIDTH / HEIGHT, 1, 10000);
    camera.position.set(0, 50, 550);

    scene = new THREE.Scene();
    //scene.background = new THREE.Color( 0x050505 );

    //

    let geometry = new THREE.TextGeometry(
      "Zachary Hills, \n Full Stack Developer",
      {
        font: font,

        size: 40,
        height: 5,
        curveSegments: 3,

        bevelThickness: 2,
        bevelSize: 1,
        bevelEnabled: true,
      }
    );

    geometry.center();

    let tessellateModifier = new TessellateModifier(8);

    for (let i = 0; i < 6; i++) {
      tessellateModifier.modify(geometry);
    }

    //

    geometry = new THREE.BufferGeometry().fromGeometry(geometry);

    let numFaces = geometry.attributes.position.count / 3;

    let colors = new Float32Array(numFaces * 3 * 3);
    let displacement = new Float32Array(numFaces * 3 * 3);

    let color = new THREE.Color();
    const colorMap = [
      { h: 352, s: 1, l: 0.682 },
      { h: 0, s: 0, l: 0.286 },
      { h: 0, s: 0.8, l: 0.482 },
    ];
    for (let f = 0; f < numFaces; f++) {
      let index = 9 * f;
      const idx = Math.round(2 * Math.random());
      //let h = 0.3 * Math.random();
      //let s = 0.5 + 0.5 * Math.random();
      //let l = 0.1 + 0.5 * Math.random();
      let h = colorMap[idx].h;
      let s = colorMap[idx].s;
      let l = colorMap[idx].l;

      color.setHSL(h, s, l);

      let d = 10 * (0.5 - Math.random());

      for (let i = 0; i < 3; i++) {
        colors[index + 3 * i] = color.r;
        colors[index + 3 * i + 1] = color.g;
        colors[index + 3 * i + 2] = color.b;

        displacement[index + 3 * i] = d;
        displacement[index + 3 * i + 1] = d;
        displacement[index + 3 * i + 2] = d;
      }
    }

    geometry.setAttribute("customColor", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute(
      "displacement",
      new THREE.BufferAttribute(displacement, 3)
    );

    //

    uniforms = {
      amplitude: { value: 0.0 },
    };

    let shaderMaterial = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexshader,
      fragmentShader: fragmentshader,
    });

    //

    mesh = new THREE.Mesh(geometry, shaderMaterial);

    scene.add(mesh);

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(WIDTH, HEIGHT);
    //
    window.addEventListener("resize", this.onWindowResize.bind(this), false);
  }

  onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.render_text();
  }

  render_text() {
    //console.log(uniforms.amplitude.value);
    let time = Date.now() * 0.001;

    uniforms.amplitude.value = 1.0 + Math.sin(time * 0.5);
    renderer.render(scene, camera);
  }
  render() {
    return (
      <div id="renderwindow">
        <div
          style={{
            height: window.innerHeight - 100,
            backgroundImage: `url("${process.env.PUBLIC_URL}/codebackground.png")`,
          }}
          ref={(ref) => (this.mount = ref)}
        ></div>
        <Footer />
        <BP />
        <ProjectPage cardWidth="400px" cardHeight="450px" />
        <ContactPage />
      </div>
    );
  }
}

export default RenderWindow;
