(this["webpackJsonpgame-app"]=this["webpackJsonpgame-app"]||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},21:function(e,t,n){},22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(3),a=n.n(i),c=(n(21),n(13)),l=n(1),s=n(10),u=n(11),d=n(15),f=n(14),p=(n(22),n(4)),h={ROUND_UP:"ROUND_UP",PLAY_AGAIN:"PLAY_AGAIN"};var v=function(e){var t=e.tile,n=t.color,o=t.bc,i=t.id,a=e.clickMe;return r.a.createElement("div",{className:"tile-container",style:{backgroundColor:o},onClick:function(){a(n,i)}},n)},g=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).clickTry=function(e,t){var n=o.state,r=n.firstColor,i=n.stateTiles,a=o.props.roundUp,c=i.find((function(e){return e.id===t})),l=i.indexOf(c);if(i[l].bc=e,o.setState({stateTiles:i}),""===r)o.setState({firstColor:e});else if(r===e){var s=i.filter((function(t){return t.color!==e}));o.setState({firstColor:"",stateTiles:s}),a(s),i.map((function(e){return e.bc="grey"}))}else o.setState({firstColor:""}),i.map((function(e){return e.bc="grey"}))},o.clickRefresh=function(){(0,o.props.playAgain)(),window.location.reload()},o.state={firstColor:"",stateTiles:[]},o}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.tiles;if(1===e.round){var n=t.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{bc:"grey",id:Math.random().toString(34).slice(2)})})).sort((function(e,t){return e.id>t.id?1:t.id>e.id?-1:0}));this.setState({stateTiles:Object(c.a)(n)})}}},{key:"render",value:function(){var e=this,t=this.props.round,n=this.state.stateTiles;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},n&&n.map((function(t){return r.a.createElement(v,{key:t.id,tile:t,clickMe:e.clickTry})}))),9===t?r.a.createElement("button",{onClick:this.clickRefresh},"PLAY AGAIN"):r.a.createElement("h2",null,"ROUND : ",t))}}]),n}(r.a.Component),b=Object(p.b)((function(e){return{round:e.round,tiles:e.tiles}}),(function(e){return{roundUp:function(t){return e({type:h.ROUND_UP,payload:t})},playAgain:function(){return e({type:h.PLAY_AGAIN})}}}))(g),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var y=n(2),k=(n(28),{round:1,tiles:[{color:"red"},{color:"red"},{color:"yellow"},{color:"yellow"},{color:"green"},{color:"green"},{color:"purple"},{color:"purple"},{color:"orange"},{color:"orange"},{color:"pink"},{color:"pink"},{color:"lightBlue"},{color:"lightBlue"},{color:"blue"},{color:"blue"}]}),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.ROUND_UP:var n=e.round+=1;return Object(l.a)(Object(l.a)({},e),{},{round:n,tiles:t.payload});case h.PLAY_AGAIN:return Object(l.a)(Object(l.a)({},e),{},{round:1});default:return e}};var O=Object(y.c)(A,y.a.apply(void 0,[]));a.a.render(r.a.createElement(p.a,{store:O},r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/game",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/game","/service-worker.js");m?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(t,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.4a135953.chunk.js.map