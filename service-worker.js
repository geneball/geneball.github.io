if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let l={};const t=e=>n(e,o),c={module:{uri:o},exports:l,require:t};i[o]=Promise.all(r.map((e=>c[e]||t(e)))).then((e=>(s(...e),l)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"42abb5620034be2b222f.webmanifest",revision:null},{url:"b88d04fba731603756b1.css",revision:null},{url:"bundle.3a7c5af71ffa0b9a77db.js",revision:null},{url:"icon/ClearField.png",revision:"7d9f6e4b58308803ce2324ae7ca8807f"},{url:"icon/trek.png",revision:"6f1c830e9a39145ce2848c79a45d473a"},{url:"index.html",revision:"5fa0fcd27a9d18d818384a6f4bdd0ee9"},{url:"main.css",revision:"5cfaa6dcb369d689273782c482a97a5b"}],{})}));
//# sourceMappingURL=service-worker.js.map
