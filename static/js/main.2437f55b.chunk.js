(this["webpackJsonpreact-material-ui-carousel-demo"]=this["webpackJsonpreact-material-ui-carousel-demo"]||[]).push([[0],{112:function(e,a,t){e.exports=t(135)},117:function(e,a,t){},133:function(e,a,t){},134:function(e,a,t){},135:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(11),r=t.n(i),l=(t(117),t(27)),c=t(19),s=t(41),m=t(42),u=t(23),h=t(48),d=t(55),p=t.n(d),g=t(50),y=t.n(g),E=(t(133),t(232)),f=t(228),v=t(139),b=t(226),P=t(229),C=t(227),k=t(231),N=t(230),I=t(235),w=t(233),x=t(236);function A(e){e.newProp&&console.log(e.newProp);for(var a=e.contentPosition?e.contentPosition:"left",t=e.length?e.length:3,n=t-1,i=[],r=o.a.createElement(E.a,{item:!0,xs:12/t,key:"content"},o.a.createElement(f.a,{className:"Content"},o.a.createElement(v.a,{className:"Title"},e.item.Name),o.a.createElement(v.a,{className:"Caption"},e.item.Caption),o.a.createElement(b.a,{variant:"outlined",className:"ViewButton"},"View Now"))),l=0;l<n;l++){var c=e.item.Items[l],s=o.a.createElement(E.a,{item:!0,xs:12/t,key:c.Name},o.a.createElement(P.a,{className:"Media",image:c.Image,title:c.Name},o.a.createElement(v.a,{className:"MediaCaption"},c.Name)));i.push(s)}return"left"===a?i.unshift(r):"right"===a?i.push(r):"middle"===a&&i.splice(i.length/2,0,r),o.a.createElement(C.a,{raised:!0,className:"Banner"},o.a.createElement(E.a,{container:!0,spacing:0,className:"BannerGrid"},i))}var j=[{Name:"Electronics",Caption:"Electrify your friends!",contentPosition:"left",Items:[{Name:"Macbook Pro",Image:"https://source.unsplash.com/featured/?macbook"},{Name:"iPhone",Image:"https://source.unsplash.com/featured/?iphone"}]},{Name:"Home Appliances",Caption:"Say no to manual home labour!",contentPosition:"middle",Items:[{Name:"Washing Machine WX9102",Image:"https://source.unsplash.com/featured/?washingmachine"},{Name:"Learus Vacuum Cleaner",Image:"https://source.unsplash.com/featured/?vacuum,cleaner"}]},{Name:"Decoratives",Caption:"Give style and color to your living room!",contentPosition:"right",Items:[{Name:"Living Room Lamp",Image:"https://source.unsplash.com/featured/?lamp"},{Name:"Floral Vase",Image:"https://source.unsplash.com/featured/?vase"}]}],O=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={autoPlay:!0,timer:500,animation:"fade",indicators:!0},y()(Object(u.a)(t)),t}return Object(h.a)(a,e),Object(c.a)(a,[{key:"toggleAutoPlay",value:function(){this.setState({autoPlay:!this.state.autoPlay})}},{key:"toggleIndicators",value:function(){this.setState({indicators:!this.state.indicators})}},{key:"changeAnimation",value:function(e){this.setState({animation:e.target.value})}},{key:"render",value:function(){return o.a.createElement("div",{style:{marginTop:"50px",color:"#494949"}},o.a.createElement("h2",null,"Example: eBay\u2122 style"),o.a.createElement(p.a,{className:"Example",autoPlay:this.state.autoPlay,timer:this.state.timer,animation:this.state.animation,indicators:this.state.indicators},j.map((function(e,a){return o.a.createElement(A,{item:e,key:a,contentPosition:e.contentPosition})}))),o.a.createElement(k.a,{component:"legend"},"Options"),o.a.createElement(N.a,{control:o.a.createElement(I.a,{onChange:this.toggleAutoPlay,checked:this.state.autoPlay,value:"autoplay",color:"primary"}),label:"Auto-play"}),o.a.createElement(N.a,{control:o.a.createElement(I.a,{onChange:this.toggleIndicators,checked:this.state.indicators,value:"indicators",color:"primary"}),label:"Indicators"}),o.a.createElement(N.a,{control:o.a.createElement(w.a,{name:"animation",value:this.state.animation,onChange:this.changeAnimation,row:!0,style:{marginLeft:"10px"}},o.a.createElement(N.a,{value:"fade",control:o.a.createElement(x.a,{color:"primary"}),label:"Fade"}),o.a.createElement(N.a,{value:"slide",control:o.a.createElement(x.a,{color:"primary"}),label:"Slide"}))}))}}]),a}(o.a.Component),S=t(138);t(134);function B(e){return o.a.createElement(S.a,{className:"Project",style:{backgroundColor:e.item.color},elevation:10},o.a.createElement("h2",null,e.item.name),o.a.createElement("p",null,e.item.description),o.a.createElement(b.a,{className:"CheckButton"},"Check it out!"))}var L=[{name:"Lear Music Reader",description:"A PDF Reader specially designed for musicians.",color:"#64ACC8"},{name:"Hash Code 2019",description:"My Solution on the 2019 Hash Code by Google Slideshow problem.",color:"#7D85B1"},{name:"Terrio",description:"A exciting mobile game game made in the Unity Engine.",color:"#CE7E78"},{name:"React Carousel",description:"A Generic carousel UI component for React using material ui.",color:"#C9A27E"}],M=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={autoPlay:!0,timer:500,animation:"fade",indicators:!0},y()(Object(u.a)(t)),t}return Object(h.a)(a,e),Object(c.a)(a,[{key:"toggleAutoPlay",value:function(){this.setState({autoPlay:!this.state.autoPlay})}},{key:"toggleIndicators",value:function(){this.setState({indicators:!this.state.indicators})}},{key:"changeAnimation",value:function(e){this.setState({animation:e.target.value})}},{key:"render",value:function(){return o.a.createElement("div",{style:{marginTop:"50px",color:"#494949"}},o.a.createElement("h2",null,"Example: Learus Projects (random)"),o.a.createElement(p.a,{className:"SecondExample",autoPlay:this.state.autoPlay,timer:this.state.timer,animation:this.state.animation,indicators:this.state.indicators},L.map((function(e,a){return o.a.createElement(B,{item:e,key:a})}))),o.a.createElement(k.a,{component:"legend"},"Options"),o.a.createElement(N.a,{control:o.a.createElement(I.a,{onChange:this.toggleAutoPlay,checked:this.state.autoPlay,value:"autoplay",color:"primary"}),label:"Auto-play"}),o.a.createElement(N.a,{control:o.a.createElement(I.a,{onChange:this.toggleIndicators,checked:this.state.indicators,value:"indicators",color:"primary"}),label:"Indicators"}),o.a.createElement(N.a,{control:o.a.createElement(w.a,{name:"animation",value:this.state.animation,onChange:this.changeAnimation,row:!0,style:{marginLeft:"10px"}},o.a.createElement(N.a,{value:"fade",control:o.a.createElement(x.a,{color:"primary"}),label:"Fade"}),o.a.createElement(N.a,{value:"slide",control:o.a.createElement(x.a,{color:"primary"}),label:"Slide"}))}))}}]),a}(o.a.Component),R=function(){return o.a.createElement("div",{style:{padding:"40px 100px",backgroundColor:"#ebebeb"}},o.a.createElement("h1",{style:{color:"#494949"}},"React Material UI Carousel Demo"),o.a.createElement("p",{style:{marginBottom:"30px"}},"by ",o.a.createElement("a",{href:"http://learus.github.io",style:{textDecoration:"none",color:"cornflowerblue"}},"Learus"),o.a.createElement("br",null),o.a.createElement("a",{href:"https://github.com/Learus/react-material-ui-carousel.git",style:{textDecoration:"none",color:"cornflowerblue"}},"GitHub Repo")),o.a.createElement(O,null),o.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[112,1,2]]]);
//# sourceMappingURL=main.2437f55b.chunk.js.map