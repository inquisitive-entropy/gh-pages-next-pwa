if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,a,t)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const r={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return n;case"module":return r;default:return e(s)}}))).then((e=>{const s=t(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/gh-pages-next-pwa/_next/static/chunks/framework-64eb7138163e04c228e4.js",revision:"p96eoCkfNbOWBR6ymQ_tz"},{url:"/gh-pages-next-pwa/_next/static/chunks/main-802c26a5f17202141fbb.js",revision:"p96eoCkfNbOWBR6ymQ_tz"},{url:"/gh-pages-next-pwa/_next/static/chunks/pages/_app-4d556e576f5e08aee885.js",revision:"p96eoCkfNbOWBR6ymQ_tz"},{url:"/gh-pages-next-pwa/_next/static/chunks/pages/_error-a0e21b9b223f827fe1f2.js",revision:"p96eoCkfNbOWBR6ymQ_tz"},{url:"/gh-pages-next-pwa/_next/static/chunks/pages/index-2a7b27b1a0d9e078d5b6.js",revision:"p96eoCkfNbOWBR6ymQ_tz"},{url:"/gh-pages-next-pwa/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"p96eoCkfNbOWBR6ymQ_tz"},{url:"/gh-pages-next-pwa/_next/static/chunks/webpack-62c09bd69a4f8b728a74.js",revision:"p96eoCkfNbOWBR6ymQ_tz"},{url:"/gh-pages-next-pwa/_next/static/css/01db3197b29cb52779ce.css",revision:"p96eoCkfNbOWBR6ymQ_tz"},{url:"/gh-pages-next-pwa/_next/static/css/0bf87fab37fa1b5aa795.css",revision:"p96eoCkfNbOWBR6ymQ_tz"},{url:"/gh-pages-next-pwa/_next/static/p96eoCkfNbOWBR6ymQ_tz/_buildManifest.js",revision:"p96eoCkfNbOWBR6ymQ_tz"},{url:"/gh-pages-next-pwa/_next/static/p96eoCkfNbOWBR6ymQ_tz/_ssgManifest.js",revision:"p96eoCkfNbOWBR6ymQ_tz"},{url:"/gh-pages-next-pwa/favicon.ico",revision:"4ff59fef4ad8bd2547e3db47bac48f20"},{url:"/gh-pages-next-pwa/icons/apple-touch-icon.png",revision:"7090a7b2693181947331e38efa4f3486"},{url:"/gh-pages-next-pwa/icons/icon-128x128.png",revision:"d626cfe7c65e6e5403bcbb9d13aa5053"},{url:"/gh-pages-next-pwa/icons/icon-144x144.png",revision:"e53a506b62999dc7a4f8b7222f8c5add"},{url:"/gh-pages-next-pwa/icons/icon-152x152.png",revision:"18b3958440703a9ecd3c246a0f3f7c72"},{url:"/gh-pages-next-pwa/icons/icon-16x16.png",revision:"83703514f19796ee15151e450984416d"},{url:"/gh-pages-next-pwa/icons/icon-192x192.png",revision:"27dc12f66697a47b6a8b3ee25ba96257"},{url:"/gh-pages-next-pwa/icons/icon-32x32.png",revision:"25e2c6ee34840568012b32e4314278df"},{url:"/gh-pages-next-pwa/icons/icon-384x384.png",revision:"a40324a3fde2b0b26eeffd4f08bf8be8"},{url:"/gh-pages-next-pwa/icons/icon-512x512.png",revision:"93d6e8e15cfa78dfee55446f607d9a28"},{url:"/gh-pages-next-pwa/icons/icon-72x72.png",revision:"f2ffc41b3482888f3ae614e0dd2f6980"},{url:"/gh-pages-next-pwa/icons/icon-96x96.png",revision:"fba02a40f7ba6fc65be8a2f245480f6d"},{url:"/gh-pages-next-pwa/manifest.json",revision:"86f2789b28f4f948c82dfdb2b43a4073"},{url:"/gh-pages-next-pwa/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/gh-pages-next-pwa",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600,purgeOnQuotaError:!0})]}),"GET")}));
