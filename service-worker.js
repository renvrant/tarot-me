"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/tarot-me/index.html","216b88676ab4ee4f340c5c70e84b9f22"],["/tarot-me/static/css/main.ac024d0a.css","61f73589bd57e35377b768a30af0ac0d"],["/tarot-me/static/js/main.d7ce419e.js","c33ce1b8a93fb0d0430af9449d7125ac"],["/tarot-me/static/media/0.e59783db.svg","e59783db3d51bd3b8a4860503f6fc874"],["/tarot-me/static/media/1.4ed100bf.svg","4ed100bff71e3a91035a2ef6ee2ec53d"],["/tarot-me/static/media/10.58ea8906.svg","58ea8906989efebe67b22c424a77d385"],["/tarot-me/static/media/11.f38f3eeb.svg","f38f3eeb37698c7391a1affdb004a9f5"],["/tarot-me/static/media/12.fb12fd4e.svg","fb12fd4ee9fae6cf91d5b0be523bd1b9"],["/tarot-me/static/media/13.8636b282.svg","8636b2825395f4eaf48de5549a2a8895"],["/tarot-me/static/media/14.0d2b1237.svg","0d2b1237920e5294ecfcf5103441f126"],["/tarot-me/static/media/15.e3a0c28e.svg","e3a0c28e6e5815caf3bd5539763c890e"],["/tarot-me/static/media/16.d0da1070.svg","d0da107015856d6fa1aeeb20736562c1"],["/tarot-me/static/media/17.d88d9441.svg","d88d94419466ddd40ee84fed70d71e2c"],["/tarot-me/static/media/18.b03dc4e0.svg","b03dc4e033a2d1b66f6bd9739ea34aa5"],["/tarot-me/static/media/19.84226a06.svg","84226a06cea874122a461e847190f2a2"],["/tarot-me/static/media/2.3d5ce9a3.svg","3d5ce9a32d532113ad8d311da148391e"],["/tarot-me/static/media/20.7725eac5.svg","7725eac5b1ce1160e3b8ad421bd879f7"],["/tarot-me/static/media/21.5d35850c.svg","5d35850c2c13839b10c5bfed4c7dd217"],["/tarot-me/static/media/3.f914b0db.svg","f914b0db1213e2af4581ce6a6da1a5ae"],["/tarot-me/static/media/4.0d0f5512.svg","0d0f5512b91796e91ddf56acd5049e41"],["/tarot-me/static/media/5.2141f25e.svg","2141f25e52b4013034e2b5f9255c24d5"],["/tarot-me/static/media/6.07f9e513.svg","07f9e5131917da8b501c86953a8f6085"],["/tarot-me/static/media/7.3f33c0c0.svg","3f33c0c0e8bc1fdd7bb9ef0c2c7bccc0"],["/tarot-me/static/media/8.cbe18e7e.svg","cbe18e7ebc480a662fa46eec9544168b"],["/tarot-me/static/media/9.61368dd8.svg","61368dd8766777683c45b61c0ef37b54"],["/tarot-me/static/media/back.52ef5f80.svg","52ef5f80670f4d0558bc73310807da23"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),c=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/tarot-me/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});