(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6248],{6248:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(5893),i=(r(7294),r(5607)),c=r(5640),a=r(2157),s=r.n(a);function o(e){var t=function(e,t){return e.position-t.position},r=function(e){u!==e&&(document.querySelectorAll("[item-id='"+u+"']")[0].getElementsByTagName("button")[0].style.color="#20b6b0",document.querySelectorAll("[item-id='"+u+"']")[0].getElementsByTagName("button")[0].style.fontWeight="500"),m&&m!==e&&(document.querySelectorAll("[item-id="+m+"]")[0].getElementsByTagName("button")[0].style.color="#20b6b0",document.querySelectorAll("[item-id="+m+"]")[0].getElementsByTagName("button")[0].style.fontWeight="500"),f&&f!==e&&(document.querySelectorAll("[item-id="+f+"]")[0].getElementsByTagName("button")[0].style.color="#20b6b0",document.querySelectorAll("[item-id="+f+"]")[0].getElementsByTagName("button")[0].style.fontWeight="500")},a=function(e){var t=e.category;return(0,n.jsxs)(i.Z.Item,{eventKey:t.id,className:s().acItem,children:[(0,n.jsx)(i.Z.Header,{className:s().mainDir,onClick:function(){return r(t.id)},"item-id":t.id,children:t.dirName}),(0,n.jsx)(i.Z.Body,{className:s().accordionBody,children:(0,n.jsx)("ul",{className:s().firstTier,children:t.subDirectories?(0,n.jsx)(i.Z,{defaultActiveKey:m,children:(0,n.jsx)(o,{directories:t.subDirectories,activeKey:m})}):null})})]})},o=function(e){return e.directories.sort(t).map((function(e){return(0,n.jsx)(n.Fragment,{children:e.isDir&&e.position>0?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(i.Z.Item,{eventKey:e.id,className:s().acItem,children:[(0,n.jsx)(i.Z.Header,{onClick:function(){return r(e.id)},"item-id":e.id,children:e.dirName}),(0,n.jsx)(i.Z.Body,{className:s().acBody,children:(0,n.jsx)("ul",{className:s().secondTier,children:e.subDirectories?(0,n.jsx)(i.Z,{defaultActiveKey:f,children:(0,n.jsx)(y,{directories:e.subDirectories,activeKey:f})}):null})})]})}):e.position>0?(0,n.jsx)("li",{children:"API Docs"===e.dirName?(0,n.jsx)("a",{id:e.id,className:d===e.id?s().active:null,href:"".concat(c.O)?"".concat(c.O)+e.url:e.url,target:"_blank",rel:"noreferrer",children:e.dirName}):(0,n.jsx)("a",{id:e.id,className:d===e.id?s().active:null,href:"".concat(c.O)?"".concat(c.O)+e.url:e.url,children:e.dirName})},e.id):null})}))},l=e.launcher,d=e.id,u=e.mainDir,m=e.sub,f=e.third,v=e.Toc.subDirectories.sort(t);function y(e){return e.directories.sort(t).map((function(e){return(0,n.jsx)(n.Fragment,{children:e.isDir&&e.position>0?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(i.Z.Item,{eventKey:e.id,className:s().acItem,children:[(0,n.jsx)(i.Z.Header,{onClick:function(){return r(e.id)},"item-id":e.id,children:e.dirName}),(0,n.jsx)(i.Z.Body,{className:s().acBody,children:(0,n.jsx)("ul",{className:s().secondTier,children:e.subDirectories?(0,n.jsx)(i.Z,{defaultActiveKey:f,children:(0,n.jsx)(y,{directories:e.subDirectories,activeKey:f})}):null})})]})}):e.position>0?(0,n.jsx)("li",{children:(0,n.jsx)("a",{id:e.id,className:d===e.id?s().active:null,href:"".concat(c.O)?"".concat(c.O)+e.url:e.url,children:e.dirName})},e.id):null})}))}return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.Z,{defaultActiveKey:u,flush:!0,className:s().leftNavAccordian,children:v.map((function(e,t){return{learn:e.position>0?(0,n.jsx)(a,{category:e},t):null,rn:e.position>0?(0,n.jsx)(a,{category:e},t):null,archived:e.position>0?(0,n.jsx)(a,{category:e},t):null}[l]}))})})}},2157:function(e){e.exports={leftNavAccordian:"LeftNav_leftNavAccordian__i9BmP",headName:"LeftNav_headName__Z0Gbv",acItem:"LeftNav_acItem__wMNuO",mainDir:"LeftNav_mainDir__aO30Y",collapsed:"LeftNav_collapsed__eO0vU",accordionBody:"LeftNav_accordionBody__mzk_B",firstTier:"LeftNav_firstTier__KPVX9",acBody:"LeftNav_acBody__r7jSH",secondTier:"LeftNav_secondTier__nZWOX",active:"LeftNav_active__7vmPU"}},5607:function(e,t,r){"use strict";r.d(t,{Z:function(){return B}});var n=r(4184),i=r.n(n),c=r(7294),a=r(5446),s=r(6792),o=r(6518);function l(e,t){return Array.isArray(e)?e.includes(t):e===t}const d=c.createContext({});d.displayName="AccordionContext";var u=d,m=r(5893);const f=c.forwardRef((({as:e="div",bsPrefix:t,className:r,children:n,eventKey:a,...d},f)=>{const{activeEventKey:v}=(0,c.useContext)(u);return t=(0,s.vE)(t,"accordion-collapse"),(0,m.jsx)(o.Z,{ref:f,in:l(v,a),...d,className:i()(r,t),children:(0,m.jsx)(e,{children:c.Children.only(n)})})}));f.displayName="AccordionCollapse";var v=f;const y=c.createContext({eventKey:""});y.displayName="AccordionItemContext";var N=y;const x=c.forwardRef((({as:e="div",bsPrefix:t,className:r,...n},a)=>{t=(0,s.vE)(t,"accordion-body");const{eventKey:o}=(0,c.useContext)(N);return(0,m.jsx)(v,{eventKey:o,children:(0,m.jsx)(e,{ref:a,...n,className:i()(r,t)})})}));x.displayName="AccordionBody";var h=x;const j=c.forwardRef((({as:e="button",bsPrefix:t,className:r,onClick:n,...a},o)=>{t=(0,s.vE)(t,"accordion-button");const{eventKey:d}=(0,c.useContext)(N),f=function(e,t){const{activeEventKey:r,onSelect:n,alwaysOpen:i}=(0,c.useContext)(u);return c=>{let a=e===r?null:e;i&&(a=Array.isArray(r)?r.includes(e)?r.filter((t=>t!==e)):[...r,e]:[e]),null==n||n(a,c),null==t||t(c)}}(d,n),{activeEventKey:v}=(0,c.useContext)(u);return"button"===e&&(a.type="button"),(0,m.jsx)(e,{ref:o,onClick:f,...a,"aria-expanded":d===v,className:i()(r,t,!l(v,d)&&"collapsed")})}));j.displayName="AccordionButton";var b=j;const _=c.forwardRef((({as:e="h2",bsPrefix:t,className:r,children:n,onClick:c,...a},o)=>(t=(0,s.vE)(t,"accordion-header"),(0,m.jsx)(e,{ref:o,...a,className:i()(r,t),children:(0,m.jsx)(b,{onClick:c,children:n})}))));_.displayName="AccordionHeader";var p=_;const g=c.forwardRef((({as:e="div",bsPrefix:t,className:r,eventKey:n,...a},o)=>{t=(0,s.vE)(t,"accordion-item");const l=(0,c.useMemo)((()=>({eventKey:n})),[n]);return(0,m.jsx)(N.Provider,{value:l,children:(0,m.jsx)(e,{ref:o,...a,className:i()(r,t)})})}));g.displayName="AccordionItem";var A=g;const K=c.forwardRef(((e,t)=>{const{as:r="div",activeKey:n,bsPrefix:o,className:l,onSelect:d,flush:f,alwaysOpen:v,...y}=(0,a.Ch)(e,{activeKey:"onSelect"}),N=(0,s.vE)(o,"accordion"),x=(0,c.useMemo)((()=>({activeEventKey:n,onSelect:d,alwaysOpen:v})),[n,d,v]);return(0,m.jsx)(u.Provider,{value:x,children:(0,m.jsx)(r,{ref:t,...y,className:i()(l,N,f&&`${N}-flush`)})})}));K.displayName="Accordion";var B=Object.assign(K,{Button:b,Collapse:v,Item:A,Header:p,Body:h})}}]);