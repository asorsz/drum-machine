(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],[,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(1),o=t.n(c),r=t(3),d=t.n(r),i=(t(9),t(10),t(4)),a=(t(11),t(12),t(0)),s=function(e){return Object(a.jsx)("div",{id:"display",children:e.playing})},u=(t(14),[{key:"Q",keyCode:81,sound:"clap"},{key:"W",keyCode:87,sound:"hihat"},{key:"E",keyCode:69,sound:"openhat"},{key:"A",keyCode:65,sound:"tink"},{key:"S",keyCode:83,sound:"ride"},{key:"D",keyCode:68,sound:"snare"},{key:"Z",keyCode:90,sound:"kick"},{key:"X",keyCode:88,sound:"boom"},{key:"C",keyCode:67,sound:"tom"}]),y=function(e){var n=function(n){var t="click"===n.type?n.target.dataset.key:n.key.toUpperCase(),c=document.querySelector("#".concat(t)),o="click"===n.type?n.target:document.querySelector('[data-key="'.concat(t,'"]')),r=o.id;c&&(e.setPlaying(r),o.classList.add("playing"),c.currentTime=0,c.play())},t=function(e){"transform"===e.propertyName&&e.target.classList.remove("playing")};return Object(c.useEffect)((function(){return document.querySelectorAll(".drum-pad").forEach((function(e){return e.addEventListener("transitionend",t)})),window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n),document.querySelectorAll(".drum-pad").forEach((function(e){return e.removeEventListener("transitionend",t)}))}})),Object(a.jsx)("div",{id:"drum-pad",onKeyPress:function(e){return n(e)},children:u.map((function(e){return Object(a.jsxs)("div",{id:e.sound,"data-key":e.key,className:"drum-pad",onClick:function(e){return n(e)},children:[e.key,Object(a.jsx)("audio",{src:"./audio/".concat(e.sound,".wav"),id:e.key,className:"clip"})]},e.keyCode)}))})},l=function(){var e=Object(c.useState)("hello"),n=Object(i.a)(e,2),t=n[0],o=n[1];return Object(a.jsx)("div",{id:"wrapper",className:"container text-center d-flex flex-column justify-content-center align-items-center",children:Object(a.jsxs)("div",{id:"drum-machine",children:[Object(a.jsx)(s,{playing:t}),Object(a.jsx)(y,{setPlaying:o})]})})};d.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(l,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.ef076554.chunk.js.map