
			import * as THREE from "three";
			import { TessellateModifier } from "./tessellation-modifier";

			var renderer, scene, camera;

			var mesh, uniforms;

			var WIDTH = window.innerWidth,
                HEIGHT = window.innerHeight;
                const vertexshader=`
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

			var loader = new THREE.FontLoader();
			loader.load( 'fonts/helvetiker_bold.typeface.json', function ( font ) {

				init( font );
				animate();

			} );

			function init( font ) {

				camera = new THREE.PerspectiveCamera( 40, WIDTH / HEIGHT, 1, 10000 );
				camera.position.set( - 100, 100, 200 );

				scene = new THREE.Scene();
				scene.background = new THREE.Color( 0x050505 );

				//

				var geometry = new THREE.TextGeometry( "THREE.JS", {

					font: font,

					size: 40,
					height: 5,
					curveSegments: 3,

					bevelThickness: 2,
					bevelSize: 1,
					bevelEnabled: true

				} );

				geometry.center();

				var tessellateModifier = new TessellateModifier( 8 );

				for ( var i = 0; i < 6; i ++ ) {

					tessellateModifier.modify( geometry );

				}

				//

				geometry = new THREE.BufferGeometry().fromGeometry( geometry );

				var numFaces = geometry.attributes.position.count / 3;

				var colors = new Float32Array( numFaces * 3 * 3 );
				var displacement = new Float32Array( numFaces * 3 * 3 );

				var color = new THREE.Color();

				for ( var f = 0; f < numFaces; f ++ ) {

					var index = 9 * f;

					var h = 0.2 * Math.random();
					var s = 0.5 + 0.5 * Math.random();
					var l = 0.5 + 0.5 * Math.random();

					color.setHSL( h, s, l );

					var d = 10 * ( 0.5 - Math.random() );

					for ( var i = 0; i < 3; i ++ ) {

						colors[ index + ( 3 * i ) ] = color.r;
						colors[ index + ( 3 * i ) + 1 ] = color.g;
						colors[ index + ( 3 * i ) + 2 ] = color.b;

						displacement[ index + ( 3 * i ) ] = d;
						displacement[ index + ( 3 * i ) + 1 ] = d;
						displacement[ index + ( 3 * i ) + 2 ] = d;

					}

				}

				geometry.setAttribute( 'customColor', new THREE.BufferAttribute( colors, 3 ) );
				geometry.setAttribute( 'displacement', new THREE.BufferAttribute( displacement, 3 ) );

				//

				uniforms = {

					amplitude: { value: 0.0 }

				};

				var shaderMaterial = new THREE.ShaderMaterial( {
					uniforms: uniforms,
					vertexShader: vertexshader,
					fragmentShader: fragmentshader
				} );

				//

				mesh = new THREE.Mesh( geometry, shaderMaterial );

				scene.add( mesh );

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( WIDTH, HEIGHT );

				var container = document.getElementById( 'container' );
				container.appendChild( renderer.domElement );
				//
				window.addEventListener( 'resize', onWindowResize, false );
			}

			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );
			}

			function animate() {

				requestAnimationFrame( animate );

				render();

			}

			function render() {

				var time = Date.now() * 0.001;

				uniforms.amplitude.value = 1.0 + Math.sin( time * 0.5 );
				renderer.render( scene, camera );

			}

