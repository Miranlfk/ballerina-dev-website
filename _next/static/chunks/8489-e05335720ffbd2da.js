(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8489],{6248:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return t}});var l=s(5893),a=(s(7294),s(5607)),r=s(5640),o=s(2157),n=s.n(o);function t(e){var i=function(e,i){return e.position-i.position},s=function(e){c!==e&&(document.querySelectorAll("[item-id='"+c+"']")[0].getElementsByTagName("button")[0].style.color="#20b6b0",document.querySelectorAll("[item-id='"+c+"']")[0].getElementsByTagName("button")[0].style.fontWeight="500"),w&&w!==e&&(document.querySelectorAll("[item-id="+w+"]")[0].getElementsByTagName("button")[0].style.color="#20b6b0",document.querySelectorAll("[item-id="+w+"]")[0].getElementsByTagName("button")[0].style.fontWeight="500"),m&&m!==e&&(document.querySelectorAll("[item-id="+m+"]")[0].getElementsByTagName("button")[0].style.color="#20b6b0",document.querySelectorAll("[item-id="+m+"]")[0].getElementsByTagName("button")[0].style.fontWeight="500")},o=function(e){var i=e.category;return(0,l.jsxs)(a.Z.Item,{eventKey:i.id,className:n().acItem,children:[(0,l.jsx)(a.Z.Header,{className:n().mainDir,onClick:function(){return s(i.id)},"item-id":i.id,children:i.dirName}),(0,l.jsx)(a.Z.Body,{className:n().accordionBody,children:(0,l.jsx)("ul",{className:n().firstTier,children:i.subDirectories?(0,l.jsx)(a.Z,{defaultActiveKey:w,children:(0,l.jsx)(t,{directories:i.subDirectories,activeKey:w})}):null})})]})},t=function(e){return e.directories.sort(i).map((function(e){return(0,l.jsx)(l.Fragment,{children:e.isDir&&e.position>0?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(a.Z.Item,{eventKey:e.id,className:n().acItem,children:[(0,l.jsx)(a.Z.Header,{onClick:function(){return s(e.id)},"item-id":e.id,children:e.dirName}),(0,l.jsx)(a.Z.Body,{className:n().acBody,children:(0,l.jsx)("ul",{className:n().secondTier,children:e.subDirectories?(0,l.jsx)(a.Z,{defaultActiveKey:m,children:(0,l.jsx)(p,{directories:e.subDirectories,activeKey:m})}):null})})]})}):e.position>0?(0,l.jsx)("li",{children:"API Docs"===e.dirName?(0,l.jsx)("a",{id:e.id,className:u===e.id?n().active:null,href:"".concat(r.O)?"".concat(r.O)+e.url:e.url,target:"_blank",rel:"noreferrer",children:e.dirName}):(0,l.jsx)("a",{id:e.id,className:u===e.id?n().active:null,href:"".concat(r.O)?"".concat(r.O)+e.url:e.url,children:e.dirName})},e.id):null})}))},d=e.launcher,u=e.id,c=e.mainDir,w=e.sub,m=e.third,v=e.Toc.subDirectories.sort(i);function p(e){return e.directories.sort(i).map((function(e){return(0,l.jsx)(l.Fragment,{children:e.isDir&&e.position>0?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(a.Z.Item,{eventKey:e.id,className:n().acItem,children:[(0,l.jsx)(a.Z.Header,{onClick:function(){return s(e.id)},"item-id":e.id,children:e.dirName}),(0,l.jsx)(a.Z.Body,{className:n().acBody,children:(0,l.jsx)("ul",{className:n().secondTier,children:e.subDirectories?(0,l.jsx)(a.Z,{defaultActiveKey:m,children:(0,l.jsx)(p,{directories:e.subDirectories,activeKey:m})}):null})})]})}):e.position>0?(0,l.jsx)("li",{children:(0,l.jsx)("a",{id:e.id,className:u===e.id?n().active:null,href:"".concat(r.O)?"".concat(r.O)+e.url:e.url,children:e.dirName})},e.id):null})}))}return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(a.Z,{defaultActiveKey:c,flush:!0,className:n().leftNavAccordian,children:v.map((function(e,i){return{learn:e.position>0?(0,l.jsx)(o,{category:e},i):null,rn:e.position>0?(0,l.jsx)(o,{category:e},i):null,archived:e.position>0?(0,l.jsx)(o,{category:e},i):null}[d]}))})})}},1717:function(e,i,s){"use strict";s.d(i,{Z:function(){return m}});var l=s(4051),a=s.n(l),r=s(5893),o=s(7294),n=s(9380),t=s(4193),d=s(2092);function u(e,i){(null==i||i>e.length)&&(i=e.length);for(var s=0,l=new Array(i);s<i;s++)l[s]=e[s];return l}function c(e,i,s,l,a,r,o){try{var n=e[r](o),t=n.value}catch(d){return void s(d)}n.done?i(t):Promise.resolve(t).then(l,a)}function w(e,i){return function(e){if(Array.isArray(e))return e}(e)||function(e,i){var s=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var l,a,r=[],o=!0,n=!1;try{for(s=s.call(e);!(o=(l=s.next()).done)&&(r.push(l.value),!i||r.length!==i);o=!0);}catch(t){n=!0,a=t}finally{try{o||null==s.return||s.return()}finally{if(n)throw a}}return r}}(e,i)||function(e,i){if(!e)return;if("string"===typeof e)return u(e,i);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(s);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return u(e,i)}(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e){var i=e.source,s=[],l=!1;o.useEffect((function(){window.addEventListener("hashchange",(function(){l=!0,setTimeout((function(){return l=!1}),1e3)})),window.addEventListener("scroll",(function(){l||function(){var e=document.getElementById("markdown-navigation"),i=document.querySelectorAll(".section"),s=window.innerHeight,l=null;if([].forEach.call(i,(function(e){var i=e.getBoundingClientRect();Math.abs(i.top)<s+25&&(s=Math.abs(i.top),l=e)})),l){var a=l.dataset.section,r=Array.prototype.slice.call(document.querySelectorAll('.mdContent [data-section="'+a+'"]')).indexOf(l),o=e.querySelector('[data-section="'.concat(a).concat(r>0?"-".concat(r):"",'"]'));o.classList.contains("active")||(e.querySelector("div.active").classList.remove("active"),o.classList.add("active"))}}()}))}),[]);var u=function(e,i){return e.filter((function(e){return e===i})).length},m=function(e,i){var l,r=w(o.useState({}),2),m=r[0],v=r[1],p=o.useCallback((l=a().mark((function l(){var r,o,c,w,m,p,D,f;return a().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,n.l)().use(t.Z).use(d.Z).process(i);case 2:r=l.sent,o="",c="",w="",m=!0,(p=String(r).match(/h(\d)/)).length>1&&(D=p[1])>0&&D<7&&(o="title-level".concat(D),c=String(r).match(/<h\d>(.*?)<\/h\d>/g).map((function(e){return e.replace(/<\/?h\d>/g,"")}))),w=String(c).replace(/<code>/g,"").replace(/<\/code>/g,"").replace(/[&\/\\#,+()!$~%.'\u2019":*?<>{}]/g,"").replace(/x26;/g,"").toLowerCase().replace(/ /g,"-").replace(/x3c;/g,""),f=u(s,w),s.push(w),0!==f&&(m=!1,w=w+"-"+f),v({level:o,text:c,sectionId:w,active:1===e,unique:m});case 12:case"end":return l.stop()}}),l)})),function(){var e=this,i=arguments;return new Promise((function(s,a){var r=l.apply(e,i);function o(e){c(r,s,a,o,n,"next",e)}function n(e){c(r,s,a,o,n,"throw",e)}o(void 0)}))}),[e,i]);return o.useEffect((function(){p().catch(console.error)}),[p]),m};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{id:"markdown-navigation",className:"markdown-navigation",children:function(e){var i=e.split("\n"),s=0,l=!1,a=i.map((function(e){if(e.match(/^\s*```/)&&(l=!l),e.match(/^#/)&&!l)return s++,m(s,e)}));return a=a.filter((function(e){return void 0!==e}))}(i).map((function(e){return(0,r.jsx)("div",{"data-section":e.sectionId,className:"title-anchor ".concat(e.level).concat(e.active?" active":""),onClick:function(i){return function(e,i,s){var l,a;if("code"===e.tagName.toLowerCase()&&(e=e.parentElement),s)l=i;else{var r=i.match(/(?<id>(?:\w|-)+)-(?<count>\d+)$/);l=r.groups.id,a=r.groups.count}var o,n=document.querySelectorAll("#".concat(l));o=void 0==a?n[0]:n[a],document.querySelectorAll(".title-anchor").forEach((function(e){e.classList.remove("active")})),e.classList.add("active"),location.hash="#"+i,o.scrollIntoView()}(i.target,e.sectionId,e.unique)},dangerouslySetInnerHTML:{__html:e.text}},e.sectionId)}))})})}},7908:function(e,i,s){"use strict";s.d(i,{Z:function(){return u}});var l=s(5893),a=s(9008),r=s(5152),o=s(478),n=s(682),t=s(1608),d=s(4564);function u(e){var i=e.children,u=(0,r.default)((function(){return Promise.all([s.e(6664),s.e(8819),s.e(1915),s.e(4248)]).then(s.bind(s,9075))}),{loadableGenerated:{webpack:function(){return[9075]}},ssr:!1}),c=(0,r.default)((function(){return s.e(9332).then(s.bind(s,9332))}),{loadableGenerated:{webpack:function(){return[9332]}},ssr:!1});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.default,{children:[(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,l.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.setAttributeNode(d.createAttribute('data-ot-ignore'));j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-PSL2TX4');"}}),(0,l.jsx)("script",{type:"text/javascript",crossOrigin:"true",src:"https://cdn.jsdelivr.net/npm/@docsearch/js@alpha"}),(0,l.jsx)("script",{src:"https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js",type:"text/javascript",charSet:"UTF-8","data-domain-script":"630ad396-5fd5-4745-92ae-2765dc8841ee",defer:!0})]}),(0,l.jsx)(c,{}),(0,l.jsxs)(o.Z,{gap:0,className:"main-wrapper",children:[(0,l.jsx)(u,{launcher:"rn"}),(0,l.jsx)(n.Z,{className:"wrap-page-content",fluid:!0,children:(0,l.jsx)(t.Z,{children:i})}),(0,l.jsx)(d.Z,{})]})]})}},2157:function(e){e.exports={leftNavAccordian:"LeftNav_leftNavAccordian__i9BmP",headName:"LeftNav_headName__Z0Gbv",acItem:"LeftNav_acItem__wMNuO",mainDir:"LeftNav_mainDir__aO30Y",collapsed:"LeftNav_collapsed__eO0vU",accordionBody:"LeftNav_accordionBody__mzk_B",firstTier:"LeftNav_firstTier__KPVX9",acBody:"LeftNav_acBody__r7jSH",secondTier:"LeftNav_secondTier__nZWOX",active:"LeftNav_active__7vmPU"}},6799:function(){},1318:function(){},7287:function(e){"use strict";e.exports=JSON.parse('{"dirName":"downloads","level":0,"position":0,"isDir":true,"url":"/downloads","id":"downloads","subDirectories":[{"dirName":"Swan Lake release notes","level":1,"position":1,"isDir":true,"url":"/downloads/swan-lake-release-notes","id":"swan-lake-release-notes","subDirectories":[{"dirName":"2201.2.0 (Swan Lake Update 2)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.2.0","id":"swan-lake-2201.2.0"},{"dirName":"2201.1.2 (Swan Lake Update 1)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.1.2","id":"swan-lake-2201.1.2"},{"dirName":"2201.1.1 (Swan Lake Update 1)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.1.1","id":"swan-lake-2201.1.1"},{"dirName":"2201.1.0 (Swan Lake Update 1)","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.1.0","id":"swan-lake-2201.1.0"},{"dirName":"2201.0.5 (Swan Lake) ","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.0.5","id":"swan-lake-2201.0.5"},{"dirName":"2201.0.4 (Swan Lake) ","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.0.4","id":"swan-lake-2201.0.4"},{"dirName":"2201.0.3 (Swan Lake) ","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.0.3","id":"swan-lake-2201.0.3"},{"dirName":"2201.0.2 (Swan Lake) ","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.0.2","id":"swan-lake-2201.0.2"},{"dirName":"2201.0.1 (Swan Lake) ","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.0.1","id":"swan-lake-2201.0.1"},{"dirName":"2201.0.0 (Swan Lake) ","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-2201.0.0","id":"swan-lake-2201.0.0"},{"dirName":"Swan Lake Beta6","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-beta6","id":"swan-lake-beta6"},{"dirName":"Swan Lake Beta5","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-beta5","id":"swan-lake-beta5"},{"dirName":"Swan Lake Beta4","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-beta4","id":"swan-lake-beta4"},{"dirName":"Swan Lake Beta3","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-beta3","id":"swan-lake-beta3"},{"dirName":"Swan Lake Beta2","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-beta2","id":"swan-lake-beta2"},{"dirName":"Swan Lake Beta1","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-beta1","id":"swan-lake-beta1"},{"dirName":"Swan Lake Alpha5 ","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-alpha5","id":"swan-lake-alpha5"},{"dirName":"Swan Lake Alpha4 ","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-alpha4","id":"swan-lake-alpha4"},{"dirName":"Swan Lake Alpha3","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-alpha3","id":"swan-lake-alpha3"},{"dirName":"Swan Lake Alpha2","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-alpha2","id":"swan-lake-alpha2"},{"dirName":"Swan Lake Alpha1","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-alpha1","id":"swan-lake-alpha1"},{"dirName":"Swan Lake Preview 8","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-preview8","id":"swan-lake-preview8"},{"dirName":"Swan Lake Preview 7","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-preview7","id":"swan-lake-preview7"},{"dirName":"Swan Lake Preview 6","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-preview6","id":"swan-lake-preview6"},{"dirName":"Swan Lake Preview 5","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-preview5","id":"swan-lake-preview5"},{"dirName":"Swan Lake Preview 4","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-preview4","id":"swan-lake-preview4"},{"dirName":"Swan Lake Preview 3","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-preview3","id":"swan-lake-preview3"},{"dirName":"Swan Lake Preview 2","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-preview2","id":"swan-lake-preview2"},{"dirName":"Swan Lake Preview 1","level":2,"position":1,"isDir":false,"url":"/downloads/swan-lake-release-notes/swan-lake-preview1","id":"swan-lake-preview1"},{"dirName":"2201.1.0","level":2,"position":0,"isDir":true,"url":"/downloads/swan-lake-release-notes/2201.1.0","id":"2201.1.0","subDirectories":[]}]},{"dirName":"1.2.x release notes","level":1,"position":2,"isDir":true,"url":"/downloads/1.2.x-release-notes","id":"1.2.x-release-notes","subDirectories":[{"dirName":"1.2.33","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.33","id":"1.2.33"},{"dirName":"1.2.32","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.32","id":"1.2.32"},{"dirName":"1.2.31","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.31","id":"1.2.31"},{"dirName":"1.2.30","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.30","id":"1.2.30"},{"dirName":"1.2.29","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.29","id":"1.2.29"},{"dirName":"1.2.28","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.28","id":"1.2.28"},{"dirName":"1.2.27","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.27","id":"1.2.27"},{"dirName":"1.2.26","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.26","id":"1.2.26"},{"dirName":"1.2.25","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.25","id":"1.2.25"},{"dirName":"1.2.24","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.24","id":"1.2.24"},{"dirName":"1.2.23","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.23","id":"1.2.23"},{"dirName":"1.2.22","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.22","id":"1.2.22"},{"dirName":"1.2.21","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.21","id":"1.2.21"},{"dirName":"1.2.20","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.20","id":"1.2.20"},{"dirName":"1.2.19","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.19","id":"1.2.19"},{"dirName":"1.2.18","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.18","id":"1.2.18"},{"dirName":"1.2.17","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.17","id":"1.2.17"},{"dirName":"1.2.16","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.16","id":"1.2.16"},{"dirName":"1.2.15 ","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.15","id":"1.2.15"},{"dirName":"1.2.14 ","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.14","id":"1.2.14"},{"dirName":"1.2.13 ","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.13","id":"1.2.13"},{"dirName":"1.2.12 ","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.12","id":"1.2.12"},{"dirName":"1.2.11 ","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.11","id":"1.2.11"},{"dirName":"1.2.10 ","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.10","id":"1.2.10"},{"dirName":"1.2.9 ","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.9","id":"1.2.9"},{"dirName":"1.2.8","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.8","id":"1.2.8"},{"dirName":"1.2.7","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.7","id":"1.2.7"},{"dirName":"1.2.6","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.6","id":"1.2.6"},{"dirName":"1.2.5 ","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.5","id":"1.2.5"},{"dirName":"1.2.4","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.4","id":"1.2.4"},{"dirName":"1.2.3","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.3","id":"1.2.3"},{"dirName":"1.2.2","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.2","id":"1.2.2"},{"dirName":"1.2.1","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.1","id":"1.2.1"},{"dirName":"1.2.0","level":2,"position":1,"isDir":false,"url":"/downloads/1.2.x-release-notes/1.2.0","id":"1.2.0"}]},{"dirName":"1.2.x archived versions","level":1,"position":0,"isDir":false,"url":"/downloads/archived","id":"archived"},{"dirName":"Release Note","level":1,"position":0,"isDir":false,"url":"/downloads/RELEASE_NOTE","id":"RELEASE_NOTE"},{"dirName":"Swan Lake Release Notes","level":1,"position":0,"isDir":false,"url":"/downloads/swan-lake-release-notes","id":"swan-lake-release-notes"},{"dirName":"Swan Lake archived versions","level":1,"position":0,"isDir":false,"url":"/downloads/swan-lake-archived","id":"swan-lake-archived"},{"dirName":"1.1.x release notes","level":1,"position":3,"isDir":true,"url":"/downloads/1.1.x-release-notes","id":"1.1.x-release-notes","subDirectories":[{"dirName":"1.1.4","level":2,"position":1,"isDir":false,"url":"/downloads/1.1.x-release-notes/1.1.4","id":"1.1.4","subDirectories":[]},{"dirName":"1.1.3","level":2,"position":1,"isDir":false,"url":"/downloads/1.1.x-release-notes/1.1.3","id":"1.1.3","subDirectories":[]},{"dirName":"1.1.2","level":2,"position":1,"isDir":false,"url":"/downloads/1.1.x-release-notes/1.1.2","id":"1.1.2","subDirectories":[]},{"dirName":"1.1.1","level":2,"position":1,"isDir":false,"url":"/downloads/1.1.x-release-notes/1.1.1","id":"1.1.1","subDirectories":[]},{"dirName":"1.1.0","level":2,"position":1,"isDir":false,"url":"/downloads/1.1.x-release-notes/1.1.0","id":"1.1.0","subDirectories":[]}]},{"dirName":"1.0.x. release notes","level":1,"position":4,"isDir":true,"url":"/downloads/1.0.x-release-notes","id":"1.0.x-release-notes","subDirectories":[{"dirName":"1.0.5","level":2,"position":1,"isDir":false,"url":"/downloads/1.0.x-release-notes/1.0.5","id":"1.0.5","subDirectories":[]},{"dirName":"1.0.4","level":2,"position":1,"isDir":false,"url":"/downloads/1.0.x-release-notes/1.0.4","id":"1.0.4","subDirectories":[]},{"dirName":"1.0.3","level":2,"position":1,"isDir":false,"url":"/downloads/1.0.x-release-notes/1.0.3","id":"1.0.3","subDirectories":[]},{"dirName":"1.0.2","level":2,"position":1,"isDir":false,"url":"/downloads/1.0.x-release-notes/1.0.2","id":"1.0.2","subDirectories":[]},{"dirName":"1.0.1","level":2,"position":1,"isDir":false,"url":"/downloads/1.0.x-release-notes/1.0.1","id":"1.0.1","subDirectories":[]},{"dirName":"1.0.0","level":2,"position":1,"isDir":false,"url":"/downloads/1.0.x-release-notes/1.0.0","id":"1.0.0","subDirectories":[]}]},{"dirName":"0.9.x release notes","level":1,"position":5,"isDir":true,"url":"/downloads/0.9.x-release-notes","id":"0.9.x-release-notes","subDirectories":[{"dirName":"0.991.0","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.991.0","id":"0.991.0","subDirectories":[]},{"dirName":"0.990.3","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.990.3","id":"0.990.3","subDirectories":[]},{"dirName":"0.990.2","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.990.2","id":"0.990.2","subDirectories":[]},{"dirName":"0.990.1","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.990.1","id":"0.990.1","subDirectories":[]},{"dirName":"0.990.0","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.990.0","id":"0.990.0","subDirectories":[]},{"dirName":"0.983.0","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.983.0","id":"0.983.0","subDirectories":[]},{"dirName":"0.982.0","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.982.0","id":"0.982.0","subDirectories":[]},{"dirName":"0.981.1","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.981.1","id":"0.981.1","subDirectories":[]},{"dirName":"0.981.0","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.981.0","id":"0.981.0","subDirectories":[]},{"dirName":"0.980.1","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.980.1","id":"0.980.1","subDirectories":[]},{"dirName":"0.980.0","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.980.0","id":"0.980.0","subDirectories":[]},{"dirName":"0.975.0","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.975.0","id":"0.975.0","subDirectories":[]},{"dirName":"0.970.1","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.970.1","id":"0.970.1","subDirectories":[]},{"dirName":"0.970.0","level":2,"position":1,"isDir":false,"url":"/downloads/0.9.x-release-notes/0.970.0","id":"0.970.0","subDirectories":[]}]},{"dirName":"stable release notes","level":1,"position":0,"isDir":true,"url":"/downloads/stable-release-notes","id":"stable-release-notes","subDirectories":[{"dirName":"0.970.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.970.0","id":"0.970.0","subDirectories":[]},{"dirName":"1.2.14","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.14","id":"1.2.14","subDirectories":[]},{"dirName":"1.1.2","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.1.2","id":"1.1.2","subDirectories":[]},{"dirName":"1.0.3","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.0.3","id":"1.0.3","subDirectories":[]},{"dirName":"1.2.7","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.7","id":"1.2.7","subDirectories":[]},{"dirName":"1.2.13","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.13","id":"1.2.13","subDirectories":[]},{"dirName":"1.2.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.0","id":"1.2.0","subDirectories":[]},{"dirName":"0.980.1","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.980.1","id":"0.980.1","subDirectories":[]},{"dirName":"1.2.8","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.8","id":"1.2.8","subDirectories":[]},{"dirName":"1.2.4","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.4","id":"1.2.4","subDirectories":[]},{"dirName":"1.2.10","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.10","id":"1.2.10","subDirectories":[]},{"dirName":"1.0.1","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.0.1","id":"1.0.1","subDirectories":[]},{"dirName":"1.2.5","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.5","id":"1.2.5","subDirectories":[]},{"dirName":"0.990.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.990.0","id":"0.990.0","subDirectories":[]},{"dirName":"0.970.1","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.970.1","id":"0.970.1","subDirectories":[]},{"dirName":"1.0.4","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.0.4","id":"1.0.4","subDirectories":[]},{"dirName":"1.1.1","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.1.1","id":"1.1.1","subDirectories":[]},{"dirName":"1.1.3","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.1.3","id":"1.1.3","subDirectories":[]},{"dirName":"0.981.1","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.981.1","id":"0.981.1","subDirectories":[]},{"dirName":"1.0.5","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.0.5","id":"1.0.5","subDirectories":[]},{"dirName":"0.983.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.983.0","id":"0.983.0","subDirectories":[]},{"dirName":"0.981.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.981.0","id":"0.981.0","subDirectories":[]},{"dirName":"0.975.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.975.0","id":"0.975.0","subDirectories":[]},{"dirName":"1.2.11","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.11","id":"1.2.11","subDirectories":[]},{"dirName":"1.2.12","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.12","id":"1.2.12","subDirectories":[]},{"dirName":"0.980.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.980.0","id":"0.980.0","subDirectories":[]},{"dirName":"1.2.1","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.1","id":"1.2.1","subDirectories":[]},{"dirName":"1.1.4","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.1.4","id":"1.1.4","subDirectories":[]},{"dirName":"1.2.9","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.9","id":"1.2.9","subDirectories":[]},{"dirName":"1.2.2","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.2","id":"1.2.2","subDirectories":[]},{"dirName":"1.2.6","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.6","id":"1.2.6","subDirectories":[]},{"dirName":"1.0.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.0.0","id":"1.0.0","subDirectories":[]},{"dirName":"0.990.3","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.990.3","id":"0.990.3","subDirectories":[]},{"dirName":"0.990.1","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.990.1","id":"0.990.1","subDirectories":[]},{"dirName":"0.991.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.991.0","id":"0.991.0","subDirectories":[]},{"dirName":"1.2.3","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.2.3","id":"1.2.3","subDirectories":[]},{"dirName":"1.0.2","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.0.2","id":"1.0.2","subDirectories":[]},{"dirName":"0.982.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.982.0","id":"0.982.0","subDirectories":[]},{"dirName":"0.990.2","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/0.990.2","id":"0.990.2","subDirectories":[]},{"dirName":"1.1.0","level":2,"position":1,"isDir":true,"url":"/downloads/stable-release-notes/1.1.0","id":"1.1.0","subDirectories":[]}]},{"dirName":" 1.2.x Release Notes Old","level":1,"position":0,"isDir":false,"url":"/downloads/release-notes","id":"release-notes"}]}')}}]);