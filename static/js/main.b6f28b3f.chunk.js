(this.webpackJsonpwebframework=this.webpackJsonpwebframework||[]).push([[0],{31:function(e,t,a){},40:function(e,t,a){e.exports=a(68)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},56:function(e,t,a){},61:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(25),o=a.n(i);a(45),a(46);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l,s,c,h,d,m=a(4),u=a(9),p=a(6),g=a(5),f=(a(31),a(10)),v=a(15),w=(a(47),null),b=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={scale:.05,renderArrow:!1},n.onScroll=n.onScroll.bind(Object(v.a)(n)),n.onTime=n.onTime.bind(Object(v.a)(n)),n}return Object(u.a)(a,[{key:"onScroll",value:function(e){this.state.renderArrow&&this.setState({renderArrow:!1})}},{key:"onTime",value:function(){console.log(window.scrollY),0==window.scrollY&&(window.addEventListener("scroll",this.onScroll),this.setState({renderArrow:!0})),window.clearInterval(w)}},{key:"componentDidMount",value:function(){console.log("mounted"),w=window.setInterval(this.onTime,2e3)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll)}},{key:"onArrowClick",value:function(){window.scrollBy({top:window.innerHeight-100,behavior:"smooth"})}},{key:"render",value:function(){var e=r.a.createElement("div",null);return this.state.renderArrow&&(e=r.a.createElement("div",{className:"arrow-head",style:{opacity:1},onClick:this.onArrowClick.bind(this)})),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{style:{display:"flex",width:"50vw",height:"100%"}},r.a.createElement("button",{className:"footer-button",onClick:function(){document.getElementById("renderwindow").scrollIntoView({behavior:"smooth"})}},"HOME"),r.a.createElement("button",{className:"footer-button",onClick:function(){document.getElementById("bio").scrollIntoView({behavior:"smooth"})}},"BIO"),r.a.createElement("button",{className:"footer-button",onClick:function(){document.getElementById("projects").scrollIntoView({behavior:"smooth"})}},"PROJECTS"),r.a.createElement("button",{className:"footer-button",onClick:function(){document.getElementById("contact").scrollIntoView({behavior:"smooth"})}},"CONTACT")),e,r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",alignContent:"flex-end",width:"47vw",height:"100%"}},r.a.createElement("a",{href:"https://www.linkedin.com/in/zachary-hills-031333185/",style:{display:"flex",alignItems:"flex-end"}},r.a.createElement("img",{className:"icon",src:"".concat("","/linkedIn.png"),style:{marginRight:"2vw",paddingBottom:"15%"}})),r.a.createElement("a",{href:"https://github.com/Zac-hills",style:{display:"flex",alignItems:"flex-end"}},r.a.createElement("img",{className:"icon",src:"".concat("","/github.png"),style:{marginRight:"2vw",paddingBottom:"15%"}}))))}}]),a}(n.Component),y=a(21),x=a(20),E=a.n(x),k=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={clicked:!1},n}return Object(u.a)(a,[{key:"onClick",value:function(){null!=this.props.redirectCallback&&this.props.redirectCallback(this.props.url)}},{key:"render",value:function(){return n.createElement(y.a,{className:"shadow",style:{width:this.props.cardWidth,height:this.props.cardHeight,cursor:"pointer",flex:0,margin:"15px",borderRadius:"2rem"},onClick:this.onClick.bind(this)},n.createElement(y.a.Img,{variant:"top",src:this.props.imageName,style:{width:this.props.cardWidth,height:"50%",borderTopLeftRadius:"2rem",borderTopRightRadius:"2rem",objectFit:this.props.objectFit,backgroundColor:"white"}}),n.createElement(y.a.Body,null,n.createElement(y.a.Title,{style:{marginTop:"5px",display:"flex",justifyContent:"center",fontSize:"19.2px"}},n.createElement("b",null,this.props.title)),n.createElement(y.a.Text,{style:{margin:"0px",padding:"15px",textAlign:"left",fontSize:"19.2px"}},this.props.text)))}}]),a}(n.Component),j=a(37),C=(a(56),a(19)),N=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={redirect:!1},n}return Object(u.a)(a,[{key:"setRedirect",value:function(e){this.setState({redirectURL:e,redirect:!0})}},{key:"render",value:function(){return this.state.redirect?r.a.createElement(C.a,{push:!0,to:this.state.redirectURL}):r.a.createElement("div",{id:"projects",className:"projectpage"},r.a.createElement("p",{className:"title",style:{paddingTop:"50px"}},"Projects"),r.a.createElement("div",{style:{marginLeft:"5%",marginRight:"5%",paddingTop:"30px",paddingBottom:"30px"}},r.a.createElement(j.a,{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}},r.a.createElement(k,{cardWidth:this.props.cardWidth,cardHeight:this.props.cardHeight,redirectCallback:this.setRedirect.bind(this),title:"Consilium Maps",imageName:"/leadlag.png",text:"A web application that determines Canada's academic standing in comparison to the rest of the world based on given keywords.",url:"/Projects/LeadLag",objectFit:"cover"}),r.a.createElement(k,{cardWidth:this.props.cardWidth,cardHeight:this.props.cardHeight,redirectCallback:this.setRedirect.bind(this),title:"Spatial Evaluation",imageName:"/spatial_visual.png",text:"An application that evaluates the spatial limitations for Convolutional Neural Networks through the use of Unmanned Aerial Vehicles.",url:"/Projects/SpatialEval",objectFit:"cover"}),r.a.createElement(k,{cardWidth:this.props.cardWidth,cardHeight:this.props.cardHeight,redirectCallback:this.setRedirect.bind(this),title:"Citation Galaxy",imageName:"/citation-galaxy.png",text:"A web based tool to aid in the pursuit of understanding how, where and when citations occur. Features text analysis tools and the ability to export data.",url:"/Projects/CitationGalaxy",objectFit:"cover"}),r.a.createElement(k,{cardWidth:this.props.cardWidth,cardHeight:this.props.cardHeight,redirectCallback:this.setRedirect.bind(this),title:"Tied in Knots",imageName:"/tied-in-knots.png",text:"Tied in Knots is a visualization tool to aid the exploration and understanding of sexual assaults in an academic environment. With the main objective of maintaining individual accounts.",url:"/Projects/TiedInKnots",objectFit:"cover"}))))}}]),a}(n.Component),T=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"50%"}},r.a.createElement("img",{style:{height:"100%",objectFit:"scale-down",borderRadius:"5px",boxShadow:" 20px 20px 60px #c9c9c9, -20px -20px 60px #ffffff"},src:this.props.src}))}}]),a}(n.Component),O=a(22),S=(a(61),function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"fuzzy",value:function(e,t){return t?e<=65?"Novice":e<80?"Intermediate":e>=80?"Advanced":void 0:""}},{key:"render",value:function(){return r.a.createElement(O.a,{style:{margin:"0.5vmin",textAlign:"center",height:"2vmin",fontSize:"2vmin"}},r.a.createElement(O.a,{variant:"success",now:35,label:this.props.label}),r.a.createElement(O.a,{variant:"warning",now:this.props.now-45}),r.a.createElement(O.a,{variant:"info",now:10,label:"".concat(this.fuzzy(this.props.now,this.props.shouldLabel))}))}}]),a}(n.Component)),I=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"getStyle",value:function(){var e=this.props,t=e.inViewport,a=e.enterCount;return t&&1===a?{WebkitTransition:"opacity 0.75s ease-in-out"}:!t&&a<1?{WebkitTransition:"none",opacity:"0"}:{}}},{key:"componentDidMount",value:function(){for(var e=document.querySelector("#profile-text");e.scrollHeight>e.clientHeight;){var t=window.getComputedStyle(e,null).getPropertyValue("font-size"),a=parseFloat(t);if(a<=1)break;e.style.fontSize=a-1+"px"}}},{key:"render",value:function(){return r.a.createElement("div",{id:"bio"},r.a.createElement("p",{className:"title",style:this.getStyle()},"BIO"),r.a.createElement("div",{className:"backgroundcard",style:this.getStyle()},r.a.createElement("div",{className:"profile-div"},r.a.createElement("div",{style:{padding:"5%",height:"90%"}},r.a.createElement(T,{src:"/profilePicture.jpg"}),r.a.createElement("div",{id:"profile-text",style:{height:"40%",padding:"5%",textAlign:"left"}},"I am a full stack developer working at the"," ",r.a.createElement("a",{href:"http://vialab.science.uoit.ca/"},"vialab"),". I have a passion for technology solutions and a never ending drive to learn new things. I have experience in a wide array of subjects such as machine learning, web development, database management, robotics, and data visualizations."))),r.a.createElement("div",{style:{display:"inline-block",width:"50%",height:"100%"}},r.a.createElement("div",{className:"skills-div"},r.a.createElement("label",{style:{margin:"10px",color:"white"}},"Advanced"),r.a.createElement(S,{now:80,label:"C++"}),r.a.createElement(S,{now:80,label:"C#"}),r.a.createElement(S,{now:80,label:"JS"}),r.a.createElement(S,{now:80,label:"NodeJS"}),r.a.createElement(S,{now:80,label:"ML"}),r.a.createElement(S,{now:80,label:"WebGL"}),r.a.createElement(S,{now:80,label:"CV"}),r.a.createElement("label",{style:{margin:"10px",color:"white"}},"Intermediate"),r.a.createElement(S,{now:75,label:"Java"}),r.a.createElement(S,{now:75,label:"MongoDB"}),r.a.createElement(S,{now:75,label:"SQL"}),r.a.createElement(S,{now:70,label:"CSS"}),r.a.createElement(S,{now:70,label:"React"})))),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",{className:"bio-div",style:this.getStyle()},r.a.createElement("img",{className:"bio-icon",src:"/code.svg"}),r.a.createElement("p",null,"Front End Solutions")),r.a.createElement("div",{className:"bio-div",style:this.getStyle()},r.a.createElement("img",{className:"bio-icon",src:"/database.svg"}),r.a.createElement("p",null,"Database Solutions")),r.a.createElement("div",{className:"bio-div",style:this.getStyle()},r.a.createElement("img",{className:"bio-icon",src:"/process.svg"}),r.a.createElement("p",null,"Back End Solutions"))))}}]),a}(n.Component),R=E()(I,{rootMargin:"-1.0px"}),W=a(38),z=a(23),L=a(39),A=a(29),H=a.n(A),F=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"getStyle",value:function(){var e=this.props,t=e.inViewport,a=e.enterCount;return t&&1===a?{WebkitTransition:"opacity 0.75s ease-in-out"}:!t&&a<1?{WebkitTransition:"none",opacity:"0"}:{}}},{key:"componentDidMount",value:function(){console.log("component mounted"),H.a.init("user_ZO3mBYY8RpFxXqV19WLmI")}},{key:"onSubmit",value:function(e){var t=e.currentTarget;console.log(t),H.a.send("gmail","template_HxjMScy6",{message_html:t[1].value,from_name:t[0].value}).then((function(e){console.log("Email successfully sent!")})).catch((function(e){return console.error("Oh well, you failed. Here some thoughts on the error that occured:",e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"contact",id:"contact"},r.a.createElement("p",{className:"title",style:Object(W.a)({paddingTop:"50px",color:"white",marginTop:"0px"},this.getStyle())},"Contact"),r.a.createElement(z.a,{onSubmit:this.onSubmit},r.a.createElement(z.a.Group,{controlId:"exampleForm.ControlInput1"},r.a.createElement(z.a.Control,{type:"email",placeholder:"your email - name@example.com",className:"formfield",style:{borderWidth:"0px"}})),r.a.createElement(z.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(z.a.Control,{as:"textarea",rows:"3",placeholder:"message..",className:"formfield",style:{height:"15vh",borderWidth:"0px"}})),r.a.createElement(L.a,{style:{margin:"20px",borderWidth:"0px"},variant:"primary",type:"submit",className:"formsubmit"},"Submit")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/zachary-hills-031333185/"},r.a.createElement("img",{className:"icon",src:"/linkedIn.png",width:64,height:64,style:{left:"0%"}})),r.a.createElement("a",{href:"https://github.com/Zac-hills"},r.a.createElement("img",{className:"icon",src:"/github.png",width:64,height:64,style:{left:"0%"}}))),r.a.createElement("div",{style:{marginTop:"50px",textDecoration:"none",fontSize:"8px"}},"Icons made by"," ",r.a.createElement("a",{style:{color:"black",textDecoration:"none"},href:"https://www.flaticon.com/authors/icongeek26",title:"Icongeek26"},"Icongeek26")," ","from"," ",r.a.createElement("a",{style:{color:"black",textDecoration:"none"},href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")),r.a.createElement("div",{style:{textDecoration:"none",fontSize:"8px"}},"Icons made by"," ",r.a.createElement("a",{style:{color:"black",textDecoration:"none"},href:"https://www.flaticon.com/authors/phatplus",title:"phatplus"},"phatplus")," ","from"," ",r.a.createElement("a",{style:{color:"black",textDecoration:"none"},href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")))}}]),a}(n.Component),M=E()(F,{rootMargin:"-1.0px"}),U=function(e){this.maxEdgeLength=e};U.prototype.modify=function(e){for(var t,a=[],n=[],r=this.maxEdgeLength*this.maxEdgeLength,i=0,o=e.faceVertexUvs.length;i<o;i++)n[i]=[];for(i=0,o=e.faces.length;i<o;i++){var l=e.faces[i];if(l instanceof f.d){var s=l.a,c=l.b,h=l.c,d=e.vertices[s],m=e.vertices[c],u=e.vertices[h],p=d.distanceToSquared(m),g=m.distanceToSquared(u),v=d.distanceToSquared(u);if(p>r||g>r||v>r){var w=e.vertices.length,b=l.clone(),y=l.clone();if(p>=g&&p>=v){if((x=d.clone()).lerp(m,.5),b.a=s,b.b=w,b.c=h,y.a=w,y.b=c,y.c=h,3===l.vertexNormals.length)(E=l.vertexNormals[0].clone()).lerp(l.vertexNormals[1],.5),b.vertexNormals[1].copy(E),y.vertexNormals[0].copy(E);if(3===l.vertexColors.length)(k=l.vertexColors[0].clone()).lerp(l.vertexColors[1],.5),b.vertexColors[1].copy(k),y.vertexColors[0].copy(k);t=0}else if(g>=p&&g>=v){if((x=m.clone()).lerp(u,.5),b.a=s,b.b=c,b.c=w,y.a=w,y.b=h,y.c=s,3===l.vertexNormals.length)(E=l.vertexNormals[1].clone()).lerp(l.vertexNormals[2],.5),b.vertexNormals[2].copy(E),y.vertexNormals[0].copy(E),y.vertexNormals[1].copy(l.vertexNormals[2]),y.vertexNormals[2].copy(l.vertexNormals[0]);if(3===l.vertexColors.length)(k=l.vertexColors[1].clone()).lerp(l.vertexColors[2],.5),b.vertexColors[2].copy(k),y.vertexColors[0].copy(k),y.vertexColors[1].copy(l.vertexColors[2]),y.vertexColors[2].copy(l.vertexColors[0]);t=1}else{var x,E,k;if((x=d.clone()).lerp(u,.5),b.a=s,b.b=c,b.c=w,y.a=w,y.b=c,y.c=h,3===l.vertexNormals.length)(E=l.vertexNormals[0].clone()).lerp(l.vertexNormals[2],.5),b.vertexNormals[2].copy(E),y.vertexNormals[0].copy(E);if(3===l.vertexColors.length)(k=l.vertexColors[0].clone()).lerp(l.vertexColors[2],.5),b.vertexColors[2].copy(k),y.vertexColors[0].copy(k);t=2}a.push(b,y),e.vertices.push(x);for(var j=0,C=e.faceVertexUvs.length;j<C;j++)if(e.faceVertexUvs[j].length){var N=e.faceVertexUvs[j][i],T=N[0],O=N[1],S=N[2];if(0===t){(W=T.clone()).lerp(O,.5);var I=[T.clone(),W.clone(),S.clone()],R=[W.clone(),O.clone(),S.clone()]}else if(1===t){(W=O.clone()).lerp(S,.5);I=[T.clone(),O.clone(),W.clone()],R=[W.clone(),S.clone(),T.clone()]}else{var W;(W=T.clone()).lerp(S,.5);I=[T.clone(),O.clone(),W.clone()],R=[W.clone(),O.clone(),S.clone()]}n[j].push(I,R)}}else{a.push(l);for(j=0,C=e.faceVertexUvs.length;j<C;j++)n[j].push(e.faceVertexUvs[j][i])}}}e.faces=a,e.faceVertexUvs=n};var B=window.innerWidth,D=window.innerHeight,P=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=new f.e,t=this;e.load("/Ubuntu_Thin_Regular.json",(function(e){t.init(e),t.mount.appendChild(l.domElement),t.animate()}))}},{key:"init",value:function(e){(c=new f.g(40,B/D,1,1e4)).position.set(0,50,550),s=new f.h;var t,a=new f.j("Zachary Hills, \n Full Stack Developer",{font:e,size:(t=B,Math.floor(34*t/2160)+6),height:5,curveSegments:3,bevelThickness:2,bevelSize:1,bevelEnabled:!0});a.center();for(var n=new U(8),r=0;r<6;r++)n.modify(a);for(var i=(a=(new f.b).fromGeometry(a)).attributes.position.count/3,o=new Float32Array(3*i*3),m=new Float32Array(3*i*3),u=new f.c,p=[{h:352,s:1,l:.682},{h:0,s:0,l:.286},{h:0,s:.8,l:.482}],g=0;g<i;g++){var v=9*g,w=Math.round(2*Math.random()),b=p[w].h,y=p[w].s,x=p[w].l;u.setHSL(b,y,x);for(var E=10*(.5-Math.random()),k=0;k<3;k++)o[v+3*k]=u.r,o[v+3*k+1]=u.g,o[v+3*k+2]=u.b,m[v+3*k]=E,m[v+3*k+1]=E,m[v+3*k+2]=E}a.setAttribute("customColor",new f.a(o,3)),a.setAttribute("displacement",new f.a(m,3)),d={amplitude:{value:0}};var j=new f.i({uniforms:d,vertexShader:"\n    uniform float amplitude;\n\n    attribute vec3 customColor;\n    attribute vec3 displacement;\n\n    varying vec3 vNormal;\n    varying vec3 vColor;\n\n    void main() {\n\n      vNormal = normal;\n      vColor = customColor;\n\n      vec3 newPosition = position + normal * amplitude * displacement;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );\n\n    }",fragmentShader:"\n    varying vec3 vNormal;\n    varying vec3 vColor;\n\n    void main() {\n\n      const float ambient = 0.4;\n\n      vec3 light = vec3( 1.0 );\n      light = normalize( light );\n\n      float directional = max( dot( vNormal, light ), 0.0 );\n\n      gl_FragColor = vec4( ( directional + ambient ) * vColor, 1.0 );\n\n    }"});h=new f.f(a,j),s.add(h),(l=new f.k({alpha:!0,antialias:!0})).setPixelRatio(window.devicePixelRatio),l.setSize(B,D),window.addEventListener("resize",this.onWindowResize.bind(this),!1)}},{key:"onWindowResize",value:function(){c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)}},{key:"animate",value:function(){requestAnimationFrame(this.animate.bind(this)),this.render_text()}},{key:"render_text",value:function(){var e=.001*Date.now();d.amplitude.value=1+Math.sin(.5*e),l.render(s,c)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"renderwindow"},r.a.createElement("div",{style:{height:window.innerHeight-100,backgroundImage:'url("'.concat("",'/codebackground.png")')},ref:function(t){return e.mount=t}}),r.a.createElement(b,null),r.a.createElement(R,null),r.a.createElement(N,{cardWidth:"350px",cardHeight:"450px"}),r.a.createElement(M,null))}}]),a}(n.Component),V=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("article",{className:"contentfield"},r.a.createElement(P,null))}}]),a}(n.Component),G=a(14),_=a(18),q=(a(66),a(67),n.Component,null),J=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={redirect:!1,scale:.05,renderArrow:!1},n.onScroll=n.onScroll.bind(Object(v.a)(n)),n.onTime=n.onTime.bind(Object(v.a)(n)),n}return Object(u.a)(a,[{key:"onScroll",value:function(e){this.state.renderArrow&&this.setState({renderArrow:!1})}},{key:"componentDidMount",value:function(){console.log("mounted"),q=window.setInterval(this.onTime,2e3)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll)}},{key:"onClick",value:function(){null!=this.props.redirectCallback&&this.props.redirectCallback("/")}},{key:"onTime",value:function(){0==window.scrollY&&(window.addEventListener("scroll",this.onScroll),this.setState({renderArrow:!0})),window.clearInterval(q)}},{key:"onArrowClick",value:function(){window.scrollBy({top:window.innerHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=r.a.createElement("div",null);return this.state.renderArrow&&(e=r.a.createElement("div",{className:"arrow-head",style:{opacity:1},onClick:this.onArrowClick})),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{style:{float:"left",width:"50vw",height:"100%",paddingLeft:"2vw"}},r.a.createElement("button",{className:"footer-button",onClick:this.onClick.bind(this)},"HOME")),e,r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",alignContent:"flex-end",width:"47vw",height:"100%"}},r.a.createElement("a",{href:"https://www.linkedin.com/in/zachary-hills-031333185/",style:{display:"flex",alignItems:"flex-end"}},r.a.createElement("img",{className:"icon",src:"".concat("","/linkedIn.png"),style:{marginRight:"1vw",paddingBottom:"15%"}})),r.a.createElement("a",{href:"https://github.com/Zac-hills",style:{display:"flex",alignItems:"flex-end"}},r.a.createElement("img",{className:"icon",src:"".concat("","/github.png"),style:{marginRight:"2vw",paddingBottom:"15%"}}))))}}]),a}(n.Component),K=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={redirect:!1},n}return Object(u.a)(a,[{key:"setRedirect",value:function(e){this.setState({redirect:!0,redirectURL:e})}},{key:"render",value:function(){return this.state.redirect?r.a.createElement(C.a,{push:!0,to:this.state.redirectURL}):r.a.createElement("div",null,r.a.createElement(_.a,{className:"banner-container"},r.a.createElement("img",{src:"".concat("","/leadlag-header.png"),alt:"leadlag-header",className:"banner"})),r.a.createElement(J,{redirectCallback:this.setRedirect.bind(this)}),r.a.createElement("div",{style:{margin:"auto",width:"50%",marginTop:"10% ",maxWidth:"800px"}},r.a.createElement("h2",null,"Consilium Maps"),r.a.createElement("p",{className:"article-text"},"Consilium Maps is a data exploratory tool with a basis of the lead lag metric. The lead lag metric is used to calculate the offset of two frequency. The frequencies in this case is each countries paper output for each year that have the given keyword or phrase within. For example, the above picture shows a search result for the keyword spinach, the color for each country denotes how far ahead or behind that country is relative to Canada's output. The basis behind this tool is the dataset"," ",r.a.createElement("a",{href:"https://www.dimensions.ai/"},"Dimensions.AI"),". The Dimensions data set has over 108 million papers with meta data such as authors, institution affiliation, funding, paper citations and patents."),r.a.createElement("p",{className:"article-text"},"The sheer size of the data presented a challenge, in order to load all of this data during run time we implemented a progressive loader that allows you to interact with the partially loaded data. The scrubber represents all of Canada's currently loaded data.",r.a.createElement("img",{src:"".concat("","/leadlag-scrubber.png"),style:{width:"50%",height:"auto",float:"left",margin:"20px"}}),"This allows the user to gauge areas of interest. The scrubber can be resized which changes the selection size. The minimum amount of years that can be selected is 3 and the maximum is 10. Another feature that helps the user determine areas of interest is the event graphs."),r.a.createElement("p",{className:"article-text",style:{marginTop:"100px"}},r.a.createElement("img",{src:"".concat("","/leadlag-events.png"),style:{width:"50%",height:"auto",float:"right",margin:"20px"}}),"The event graphs inform the user which areas have the most lead, most lag, most amount of lead and lag, and the most countries participating."),r.a.createElement("p",{className:"article-text",style:{marginTop:"100px"}},"Once a timespan is selected the user can now view individual institutions and their output relative to Canada.",r.a.createElement("img",{src:"".concat("","/leadlag-nodes.png"),style:{width:"50%",height:"auto",float:"right",margin:"20px",marginRight:"-80px"}}),"The nodes color is the amount of lead or lag the institution is relative to Canada. The line on the node depicts their output trend for the time span. If the line is moving up the institution's output has increased 5% or more."),r.a.createElement("p",{className:"article-text"},"The objective of Consilium Maps was to create a tool capable of informing our stake holders of how institutions are performing for certain concepts. Ultimately, we provided a tool that can depict how well institutions / countries are performing on a global scale for searched concepts.")),r.a.createElement(N,{cardWidth:"350px",cardHeight:"450px"}))}}]),a}(n.Component),Y=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo({top:0,left:0,behavior:"auto"})}},{key:"render",value:function(){return this.props.children}}]),a}(n.Component),Z=Object(C.g)(Y),Q=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(u.a)(a,[{key:"setRedirect",value:function(e){this.setState({redirect:!0,redirectURL:e})}},{key:"render",value:function(){return this.state.redirect?r.a.createElement(C.a,{push:!0,to:this.state.redirectURL}):r.a.createElement("div",null,r.a.createElement(_.a,{className:"banner-container"},r.a.createElement("iframe",{className:"banner",style:{width:"100%"},src:"https://www.youtube.com/embed/4phJmMGCcCc?autoplay=1",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),r.a.createElement(J,{redirectCallback:this.setRedirect.bind(this)}),r.a.createElement("div",{style:{margin:"auto",width:"50%",marginTop:"10% ",maxWidth:"800px"}},r.a.createElement("h2",null,"Spatial Evaluation of Convolutional Neural Networks using UAVs"),r.a.createElement("p",{className:"article-text"},"Convolutional Neural Networks suffer from a lack of explaination when it comes to their use. The current standard for depicting a convolutional neural network's capability has a dependency on the dataset that was used to train and test it. For example, this convolutional neural network has a 92% accuracy using some dataset. In order for you to comprehend the convolutional neural networks capabilities you have to be an expert on the dataset used. Even if you are an expert, it still does not define how well the convolutional neural network will preform in a 3 dimensional environment. For example, questions such as at what distance does the network start to lose accuracy, what are the weak view points such as the front or back of the object, and how well does the network preform when both the viewpoint and distance are dynamic."),r.a.createElement("p",{className:"article-text"},"This projects presents another approach to depicting the behaviour of a convolutional neural network. I am not stating that the previous approach is worse, it is the appropriate approach for debugging and training a network. The change in accuracy for a datasets depicts how your network topology changes are impacting the accuracy of the network. However, once the network is fully trained and the parameters are tuned there must be a better way to help developers understand the limitations of the network.",r.a.createElement("img",{src:"".concat("","/spatial_visual.png"),style:{width:"50%",height:"auto",float:"left",margin:"20px",marginLeft:"-80px"}}),"This project uses unmanned aerial vehicles to circle the object logging the images and spatial data relative to the object. The result is a detailed visual analysis of the spatial limitations of the neural network. By providing the spatial limitations engineers who are looking to use the network will have a better understanding of how the network will perform making it easier for the engineers to make decisions. Take Tesla for example, they have two sets of convolutional neural network models, one network for objects that are closer and another for further away objects, this is a perfect example of where understanding the spatial limitations is a neccessity."),r.a.createElement("p",{className:"article-text",style:{marginTop:"100px"}},"The above image depicts a single distance from the object of 25 meters, for a more detailed analysis it is crucial to have more than a single pass around the object. Below is an image that depicts a composite of multiple fly bys with a distance of 10, 15, 20, and 25m from the object. The angle of incidence is represented, where the 0 degree is true north. The object's front should face true north to better calculate the angle of incidence relative to the object's rotation, for objects that are symmetrical this is not mandatory.",r.a.createElement("img",{src:"".concat("","/visualmodel.PNG"),style:{width:"10vw",height:"8vw",float:"right",margin:"20px",marginRight:"0px"}})),r.a.createElement("p",{className:"article-text",style:{marginTop:"100px"}},"In conclusion this work is an approach to help engineers be informed about the spatial limitations of convolutional neural networks. The project uses data visualization to help aid in the understanding of the limitations, and uses an unmanned aerial vehicle to gather the spatial data.")),r.a.createElement(N,{cardWidth:"350px",cardHeight:"450px"}))}}]),a}(n.Component),X=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={redirect:!1},n}return Object(u.a)(a,[{key:"setRedirect",value:function(e){this.setState({redirect:!0,redirectURL:e})}},{key:"render",value:function(){return this.state.redirect?r.a.createElement(C.a,{push:!0,to:this.state.redirectURL}):r.a.createElement("div",null,r.a.createElement(_.a,{className:"banner-container"},r.a.createElement("img",{src:"".concat("","/citation-galaxy.png"),alt:"leadlag-header",className:"banner"})),r.a.createElement(J,{redirectCallback:this.setRedirect.bind(this)}),r.a.createElement("div",{style:{margin:"auto",width:"50%",marginTop:"10% ",maxWidth:"800px"}},r.a.createElement("h2",null,"Citation Galaxy"),r.a.createElement("p",{className:"article-text"},"Citation Galaxy is a web based tool to aid bibliometricians in their work. Bibliometrician's work is centered around how, where and when citations occur in academic texts. Their work is paramount to the understanding of where funding should be distributed to have the most impact. Their work is especially relevant in Canada because the government uses the funding as an economic stimulus."),r.a.createElement("p",{className:"article-text",style:{marginTop:"100px"}},"The web based tool uses two different datasets"," ",r.a.createElement("a",{href:"https://pubmed.ncbi.nlm.nih.gov/"},"Pubmed")," and"," ",r.a.createElement("a",{href:"https://www.erudit.org/en/"},"Erudit"),". The Pubmed data was parsed using"," ",r.a.createElement("a",{href:"https://github.com/titipata/pubmed_parser"},"pubmed_parser"),". Each text is broken down into two parts: the distance a word is from the nearest citation (in words), and the distance in sentences. The data is stored in a PostgreSQL database. Knowing the distance a word is relative to a citation allows for rules to be created."),r.a.createElement("p",{className:"article-text",style:{marginTop:"100px"}},"The rule page allows the user to create compound rules to find specific instances where they occur in text. For example, a user could create a simple rule where they would like to find all instances in the texts where the word cancer and heart occur within a distance of 2 sentences of a citation. The rules page supports several logical operators such as NOT, OR, and AND. These operators allow the users to create a complex set of rules in order to find the exact instances they are trying to find in the text. Users can create multiple rulesets to search for in the database. Each ruleset is assigned a color to help display what ruleset is triggered in specific areas of the text.",r.a.createElement("img",{src:"".concat("","/rules-page.png"),style:{width:"130%",height:"auto",float:"left",margin:"20px"}})),r.a.createElement("p",{className:"article-text",style:{marginTop:"100px"}},"The home page is a visualization that denotes the amount of rules that are triggered in that specific area of text. For example, the visualization could denote that one of your rules triggers only in the first 15% of sentences in academic texts. The texts are organized into columns based on the year the paper was published. By sorting the texts into their year of publication users can start to see how the rules change over time.",r.a.createElement("img",{src:"".concat("","/overview-vis.png"),style:{width:"130%",height:"auto",float:"left",margin:"20px"}})),r.a.createElement("p",{className:"article-text",style:{marginTop:"100px"}},"The papers view page is a more refined view into the occurences of the rules in specific papers. The users can analyze the text surrounding the rules.",r.a.createElement("img",{src:"".concat("","/papers-view.png"),style:{width:"130%",height:"auto",float:"left",margin:"20px"}})),r.a.createElement("p",{className:"article-text",style:{marginTop:"100px"}},"Lastly, the export page allows the users to export the specific instances that triggered the rules allowing them to perform manual analysis on a more refined dataset.")),r.a.createElement(N,{cardWidth:"350px",cardHeight:"450px"}))}}]),a}(n.Component),$=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={redirect:!1},n}return Object(u.a)(a,[{key:"setRedirect",value:function(e){this.setState({redirect:!0,redirectURL:e})}},{key:"render",value:function(){return this.state.redirect?r.a.createElement(C.a,{push:!0,to:this.state.redirectURL}):r.a.createElement("div",null,r.a.createElement(_.a,{className:"banner-container"},r.a.createElement("iframe",{className:"banner",style:{width:"100%"},src:"https://vialab.github.io/tied-in-knots/#/"})),r.a.createElement(J,{redirectCallback:this.setRedirect.bind(this)}),r.a.createElement("div",{style:{margin:"auto",width:"50%",marginTop:"10% ",maxWidth:"800px"}},r.a.createElement("h2",null,"Tied In Knots"),r.a.createElement("p",{className:"article-text"},"Tied in Knots is an interactive visualization with the objective of providing insight and spread awareness about sexual assaults in academia. One of the challenges of this project is to provide analytics without minimizing the individual accounts. The typical methods for data visualization use some form of summary in order to simplify the dataset allowing the user to gleam insights more quickly with less \"clutter\". When the data you are dealing with is the individual's first hand account of their traumatic experience the traditional methods of summary is not only incorrect and inappropriate -- the traditional approaches are damaging and minimizes the individual's traumatic experience."),r.a.createElement("p",{className:"article-text",style:{marginTop:"100px"}},'The challenge of keeping every data point as part of the visualization brought a necessity for high performance rendering. There was also the goal for mobile and tablet support which further increased the need for a high performance rendering solution. The original solution used D3 and SVG in order to create the text that followed the spline. Upon clicking the text the text would unravel allowing the user to see the first hand accounts of that particular person. The "knots" themselves are tied based on their ',r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Coding_(social_sciences)"},"manual coding"),". Due to the use of text and the necessity for grouping and performing animations on them the initial prototype struggled to run on modern laptops."),r.a.createElement("p",{className:"article-text",style:{marginTop:"100px"}},"My task was to increase performance while keeping the same design. D3 uses SVG which is a mature technology however it lacks the performance that WebGL can offer. The solution that gave the best performance was switching to a WebGL based rendering system using the library Pixi.js. Even with WebGL's performance increases it was not enough to support straight text rendering. I created a tool that exported the SVG text to a png at the required resolution, the new images were added to a texture atlas so the application only had to do one texture binding which dramatically increased performance. To address the unraveling of the text a hybrid method was created. When the user clicks on one of the text images, a svg is created with the text and the knot is unravelled. The overall solution gave a performance increase of over 1400%, while meeting all of the design and platform criteria.")),r.a.createElement(N,{cardWidth:"350px",cardHeight:"450px"}))}}]),a}(n.Component);o.a.render(r.a.createElement(n.Fragment,null,r.a.createElement(G.a,null,r.a.createElement(Z,null,r.a.createElement(C.d,null,r.a.createElement(C.b,{exact:!0,path:"/",component:V}),r.a.createElement(C.b,{path:"/Projects/LeadLag",component:function(){return r.a.createElement(K,null)}}),r.a.createElement(C.b,{path:"/Projects/SpatialEval",component:Q}),r.a.createElement(C.b,{path:"/Projects/CitationGalaxy",component:X}),r.a.createElement(C.b,{path:"/Projects/TiedInKnots",component:$}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.b6f28b3f.chunk.js.map