if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,r,d)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const c={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return i;case"module":return c;default:return e(s)}})).then(e=>{const s=d(...e);return i.default||(i.default=s),i})}))}}define("./sw.js",["./workbox-93e820a6"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"assets/css/bulma.min.css",revision:"cd5a0f658bbd926caafe04c7f49de3f2"},{url:"assets/css/styles.css",revision:"ba70f675992bc9c27af6ee1cfda7f7d0"},{url:"assets/images/architecture.svg",revision:"f9a8afc95917d2f36ca7469b23ea0e8a"},{url:"assets/images/cezerin-dashboard-products.png",revision:"d12868b5b583ddfcecee66559caa2e9c"},{url:"assets/images/cezerin-logo.png",revision:"aa507001e29a4b74669845ef83ca3c35"},{url:"assets/images/cezerin-logo/cezerin-dashboard-products.webp",revision:"d7b1ec445816d2727e673ace45c2dda2"},{url:"assets/images/cezerin-logo/cezerin-logo.webp",revision:"9cbf7ad880d1f70211690d62fcca7875"},{url:"assets/images/cezerin-logo/cezerin-mobile-order-summary.webp",revision:"952c52739bc5171f2a5e3578d3f8b821"},{url:"assets/images/cezerin-logo/cezerin-mobile-product.webp",revision:"f36ec318b47704ec2e308a36d3c17bf3"},{url:"assets/images/cezerin-logo/cezerin-signin-email.webp",revision:"52dae6366f111d7e88d8859d2e84d221"},{url:"assets/images/cezerin-mobile-order-summary.png",revision:"a4969b27a32abb2b0d582f3c0c780274"},{url:"assets/images/cezerin-mobile-product.png",revision:"1bb26f267ce1667ffbf67c4675fdb74c"},{url:"assets/images/cezerin-signin-email.png",revision:"1f20fa30fe207bf5d4e31de8cb431b12"},{url:"assets/images/cezerin-store-lighthouse-pwa-audit.png",revision:"036ba705373480f8f7d7b136dad4e0df"},{url:"assets/images/cezerin-store-lighthouse-pwa-audit.webp",revision:"009174c0138f1e88359e95b25350abcd"},{url:"assets/images/logo.svg",revision:"716896d048c7c478f22916384a7f39da"},{url:"assets/images/shortcut.png",revision:"e22dd4e390f5ec04fed2947f45ecf53f"},{url:"assets/images/twitter.svg",revision:"a7a925c7c07f163f3274df0c1ab2c321"},{url:"assets/manifest.json",revision:"5d63a8a64274109526f989415848b17f"},{url:"assets/scripts/script.js",revision:"5f501a234e4b9a248883b05e962db544"},{url:"docs/_sidebar.md",revision:"fd113d4ff1a31b8d7185d35a81cfd430"},{url:"docs/deploy-on-web-cezerin-configs.md",revision:"df7dbca51dc3b72eddff49937f9b722a"},{url:"docs/deploy-on-web-cezerin.md",revision:"dda4cace980d7eef57d67ecdf1381dd6"},{url:"docs/deploy-on-web-cloudflare.md",revision:"5618bd887a09bde78efcb982dbfa22ff"},{url:"docs/deploy-on-web-droplet.md",revision:"847f21743d582b4f03f244d536111ccb"},{url:"docs/deploy-on-web-final-checks.md",revision:"0e1812a9674821b7cefbff316208a17f"},{url:"docs/deploy-on-web-hosting.md",revision:"c6ce1e83f6d9b21198342b4c77243f1e"},{url:"docs/deploy-on-web-mern.md",revision:"ab297fb203340ebb34624fa927bd6388"},{url:"docs/deploy-on-web-mongodb.md",revision:"f78473c7421bd26a186087a07bf3a5ba"},{url:"docs/deploy-on-web-nginx.md",revision:"31c750cf9d78e6b6bab37a3b7f461413"},{url:"docs/deploy-on-web-production-mode.md",revision:"d46c7242a1b9ee6becc54c8925a92cf6"},{url:"docs/deploy-on-web-start.md",revision:"29931c6702a044ba8a707e7aa0776026"},{url:"docs/faq.md",revision:"f187019d2c6b6aa2e920920a56aeb4b7"},{url:"docs/help-and-support.md",revision:"2cac5344dad02027a85b873e8bce6f21"},{url:"docs/howtos.md",revision:"7aa16e2e3497fcd5171106c8c5e98f35"},{url:"docs/index.html",revision:"a90a585a3703a640cf32bbfce98695be"},{url:"docs/prerequisites.md",revision:"846f11440c6d68c317e9292ed14e281d"},{url:"docs/README.md",revision:"8e863f5f7cf10703f8aa6836f772367d"},{url:"docs/setup-database.md",revision:"c5b584684195f36cf828570fefc87a13"},{url:"docs/using-docker.md",revision:"e90ddf28c27d26a9bf3705e4f4e5988d"},{url:"docs/using-source-code.md",revision:"67d270b505fc078d8e03802b856c87c2"},{url:"index.html",revision:"68ad882e31ab56f597cf953420ddf9b3"},{url:"package.json",revision:"54ab0d9c02c4e2d01747fa35b5bb8113"},{url:"params.json",revision:"ac0638a94978d82cd6416167b8bd1335"},{url:"README.md",revision:"c8a68f596489b82f81483cb852db36ab"},{url:"workbox-config.js",revision:"ec1cefe6ec2d7f4dfbfce8765f00a9d7"},{url:"yarn.lock",revision:"76b0283229d8dc5ce67fbb1342b98564"}],{})}));
//# sourceMappingURL=sw.js.map
