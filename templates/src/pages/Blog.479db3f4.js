webpackJsonp([2],{158:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(a),r=n(28);t.default=function(e){var t=e.children,n=e.title,a=e.description,i=(e.tagline,e.image),o=e.path,u=e.tags;return l.default.createElement(r.Head,null,t,o&&l.default.createElement("link",{rel:"canonical",href:o}),n&&l.default.createElement("title",null,n),a&&l.default.createElement("meta",{name:"description",content:a}),u&&l.default.createElement("meta",{name:"keywords",content:u.join(",")}),n&&l.default.createElement("meta",{property:"og:title",content:n}),a&&l.default.createElement("meta",{property:"og:description",content:a}),l.default.createElement("meta",{property:"og:site_name",content:"https://bit-ml.github.io/"}),u&&u.slice(0,6).map(function(e){return l.default.createElement("meta",{key:e,property:"article:tag",content:e})}),i&&l.default.createElement("meta",{property:"og:image",content:i}),l.default.createElement("meta",{name:"twitter:card",content:"summary"}),"",n&&l.default.createElement("meta",{name:"twitter:title",content:n}),a&&l.default.createElement("meta",{name:"twitter:description",content:a}),i&&l.default.createElement("meta",{name:"twitter:image",content:i}),a&&l.default.createElement("meta",{itemProp:"description",content:a}),u&&l.default.createElement("meta",{itemProp:"keywords",content:u.join(",")}),i&&l.default.createElement("meta",{itemProp:"image",content:i}))}},159:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    padding: 0 5rem;\n  "],["\n    padding: 0 5rem;\n  "]),r=n(0),i=a(r),o=n(28),u=n(17),c=a(u),d=n(54),f=a(d),m=c.default.nav.withConfig({displayName:"Navigation__Nav"})(["width:100%;background:",';padding:0 1rem;font-family:"Roboto",Helvetica,Arial,sans-serif;text-align:right;a{padding:1rem;display:inline-block;font-style:normal;font-weight:500;line-height:23px;font-size:14px;text-align:right;text-transform:uppercase;color:',";}a:last-child{padding-right:0;}",""],function(e){return e.bgColor},function(e){return e.fontColor},(0,f.default)("desktop")(l));t.default=function(e){var t=e.pageName,n="home"===t?"#020100":"transparent",a="home"===t?"#A8A8A8":"#333";return i.default.createElement("header",null,i.default.createElement(m,{bgColor:n,fontColor:a},i.default.createElement(o.Link,{exact:!0,to:"/"},"Home"),i.default.createElement(o.Link,{to:"/#research"},"Research"),i.default.createElement(o.Link,{to:"/#team"},"Team")))}},160:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=function(e){var t=e.children;return l.default.createElement("main",null,t)}},58:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    padding-left: 0 0 0 100px;\n  "],["\n    padding-left: 0 0 0 100px;\n  "]),r=n(0),i=a(r),o=n(28),u=n(17),c=a(u),d=n(54),f=a(d),m=n(158),s=a(m),p=n(159),g=a(p),h=n(160),E=a(h),y=c.default.section.withConfig({displayName:"Blog__BlogWrapper"})(["margin:0 auto;max-width:720px;padding:0 1rem;",""],(0,f.default)("desktop")(l)),b=c.default.h1.withConfig({displayName:"Blog__Heading"})(["font-family:'Exo 2',sans-serif;margin:4rem 0;font-style:normal;font-weight:700;line-height:3rem;font-size:2.2rem;letter-spacing:0.03em;color:#333333;"]),_=c.default.ul.withConfig({displayName:"Blog__BlogList"})(['padding-left:0;&>li{font-family:"Roboto",Helvetica,Arial,sans-serif;font-style:normal;font-weight:500;font-size:1.2rem;letter-spacing:0.03em;list-style:none;margin-bottom:1rem;&> a{color:#333;&:hover{color:#E6212B;}}}']);t.default=(0,o.withRouteData)(function(e){var t=e.posts;return i.default.createElement("div",null,i.default.createElement(s.default,{title:"Latest Blog Posts | Bitdefender Research",description:"List of all the recent blog posts by Bitdefender's Machine Learning & Crypto Research Unit.",tags:["machine-learning","research","bitdefender","posts"],image:"https://bit-ml.github.io/tile.png"}),i.default.createElement(g.default,{pageName:"blog"}),i.default.createElement(E.default,null,i.default.createElement(y,null,i.default.createElement(b,null,"Recent Posts"),i.default.createElement(_,null,t.map(function(e,t){return i.default.createElement("li",{key:t},i.default.createElement(o.Link,{to:"/blog/post/"+e.slug+"/"},e.title))})))))})}});