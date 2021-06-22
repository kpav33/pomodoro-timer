(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var n=s(2),c=s.n(n),a=s(6),r=s.n(a),i=s(4),o=s(1),u=c.a.createContext();function j(e){var t=e.children,s=Object(n.useState)("session"),c=Object(i.a)(s,2),a=c[0],r=c[1],j=Object(n.useState)(5),b=Object(i.a)(j,2),l=b[0],d=b[1],O=Object(n.useState)(25),h=Object(i.a)(O,2),x=h[0],m=h[1],f=Object(n.useState)(25),v=Object(i.a)(f,2),p=v[0],k=v[1],g=Object(n.useState)(0),S=Object(i.a)(g,2),L=S[0],B=S[1],N=Object(n.useState)(!1),y=Object(i.a)(N,2),C=y[0],P=y[1],w=Object(n.useRef)(),I=Object(n.useState)(!1),V=Object(i.a)(I,2),M=V[0],R=V[1];if(0===p&&0===L&&M){w.current.load();var T=w.current.play();void 0!==T&&T.then((function(){})).catch((function(e){return console.log(e)}))}function E(){R(0===p),0===p&&0===L?"session"===a?(r("break"),B(0),k(l)):(r("session"),B(0),k(x)):0===L?(k((function(e){return e-1})),B(59)):B((function(e){return e-1}))}return Object(n.useEffect)((function(){if(C){var e=setTimeout(E,1e3);return function(){clearTimeout(e)}}})),Object(o.jsx)(u.Provider,{value:{breakLength:l,setBreakLength:d,sessionLength:x,setSessionLength:m,seconds:L,setSeconds:B,playPauseButton:C,setPlayPauseButton:P,minutes:p,setMinutes:k,state:a,setState:r,audioSrc:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav",audioRef:w},children:t})}s(13);var b=function(){return Object(o.jsx)("div",{className:"title",children:Object(o.jsx)("h1",{children:"25 + 5 Clock"})})},l=s(3);var d=function(e){var t=e.buttonId,s=e.setLength,c=e.stateValue,a=Object(n.useContext)(u),r=a.playPauseButton,i=a.setMinutes;return Object(o.jsx)("button",{"aria-label":"Increment value",className:"arrow",id:t,onClick:function(){!1===r&&s((function(e){return e<60?e+1:e})),c&&!1===r&&i((function(e){return e<60?e+1:e}))},children:Object(o.jsx)(l.b,{className:r?"arrow-disabled":"arrow"})})};var O=function(e){var t=e.buttonId,s=e.setLength,c=e.stateValue,a=Object(n.useContext)(u),r=a.playPauseButton,i=a.setMinutes;return Object(o.jsx)("button",{"aria-label":"Decrement value",className:"arrow",id:t,onClick:function(){!1===r&&s((function(e){return e>1?e-1:1})),c&&!1===r&&i((function(e){return e>1?e-1:1}))},children:Object(o.jsx)(l.a,{className:r?"arrow-disabled":"arrow-enabled"})})};var h=function(){var e=Object(n.useContext)(u),t=e.breakLength,s=e.setBreakLength,c=e.sessionLength,a=e.setSessionLength,r=e.state,i=e.playPauseButton;return Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsxs)("div",{id:"break-label",className:"label",children:[Object(o.jsx)("h2",{children:"Break Length"}),Object(o.jsxs)("div",{className:"breaks",style:{opacity:i?"0.8":"1"},children:[Object(o.jsx)(O,{buttonId:"break-decrement",setLength:s,stateValue:"break"===r}),Object(o.jsx)("span",{id:"break-length",children:t}),Object(o.jsx)(d,{buttonId:"break-increment",setLength:s,stateValue:"break"===r})]})]}),Object(o.jsxs)("div",{id:"session-label",className:"label",children:[Object(o.jsx)("h2",{children:"Session Length"}),Object(o.jsxs)("div",{className:"sessions",style:{opacity:i?"0.8":"1"},children:[Object(o.jsx)(O,{buttonId:"session-decrement",setLength:a,stateValue:"session"===r}),Object(o.jsx)("span",{id:"session-length",children:c}),Object(o.jsx)(d,{buttonId:"session-increment",setLength:a,stateValue:"session"===r})]})]})]})},x=s(7);var m=function(){var e=Object(n.useContext)(u),t=e.playPauseButton,s=e.setPlayPauseButton,c=e.audioRef,a=e.setMinutes,r=e.setSeconds,i=e.setSessionLength,j=e.setBreakLength,b=e.setState;return Object(o.jsxs)("div",{className:"controlButtons",children:[Object(o.jsx)("div",{id:"playPauseButtons",children:t?Object(o.jsx)("button",{"aria-label":"Pause button",id:"start_stop",onClick:function(){return s(!1)},children:Object(o.jsx)(l.c,{})}):Object(o.jsx)("button",{"aria-label":"Play button",id:"start_stop",onClick:function(){return s(!0)},children:Object(o.jsx)(l.d,{})})}),Object(o.jsx)("button",{id:"reset",onClick:function(){c.current.pause(),c.current.currentTime=0,s(!1),a(25),r(0),i(25),j(5),b("session")},children:Object(o.jsx)(x.a,{})})]})};var f=function(){var e=Object(n.useContext)(u),t=e.state,s=e.minutes,c=e.seconds;return Object(o.jsxs)("div",{className:"clock",children:[Object(o.jsx)("div",{id:"timer-label",children:"session"===t?"Session":"Break"}),Object(o.jsx)("div",{id:"time-left",children:"".concat(s<10?"0"+s:s,":").concat(c<10?"0"+c:c)}),Object(o.jsx)(m,{})]})};var v=function(){var e=Object(n.useContext)(u),t=e.audioSrc,s=e.audioRef;return Object(o.jsxs)("div",{className:"pomodoroTimer",children:[Object(o.jsx)(h,{}),Object(o.jsx)(f,{}),Object(o.jsx)("audio",{id:"beep",preload:"auto",src:t,className:"clip",ref:s})]})};var p=function(){return Object(o.jsx)("div",{className:"app",children:Object(o.jsxs)("div",{className:"panel",children:[Object(o.jsx)(b,{}),Object(o.jsx)(v,{})]})})};r.a.render(Object(o.jsx)(j,{children:Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(p,{})})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f3d665c4.chunk.js.map