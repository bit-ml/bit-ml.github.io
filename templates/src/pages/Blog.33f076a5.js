webpackJsonp([3],{159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(a),l=n(28),i="https://bit-ml.github.io";t.default=function(e){var t=e.children,n=e.title,a=e.description,o=(e.tagline,e.image),c=e.path,d=e.tags;return r.default.createElement(l.Head,null,t,c&&r.default.createElement("link",{rel:"canonical",href:c}),n&&r.default.createElement("title",null,n),a&&r.default.createElement("meta",{name:"description",content:a}),d&&r.default.createElement("meta",{name:"keywords",content:d.join(",")}),n&&r.default.createElement("meta",{property:"og:title",content:n}),a&&r.default.createElement("meta",{property:"og:description",content:a}),r.default.createElement("meta",{property:"og:site_name",content:i}),d&&d.slice(0,6).map(function(e){return r.default.createElement("meta",{key:e,property:"article:tag",content:e})}),o&&r.default.createElement("meta",{property:"og:image",content:""+i+o}),r.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.default.createElement("meta",{name:"twitter:site",content:"@Bitdefender"}),n&&r.default.createElement("meta",{name:"twitter:title",content:n}),a&&r.default.createElement("meta",{name:"twitter:description",content:a}),o&&r.default.createElement("meta",{name:"twitter:image",content:""+i+o}),a&&r.default.createElement("meta",{itemProp:"description",content:a}),d&&r.default.createElement("meta",{itemProp:"keywords",content:d.join(",")}),o&&r.default.createElement("meta",{itemProp:"image",content:""+i+o}))}},160:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    padding: 0 5rem;\n    justify-content: flex-end;\n    a {\n      padding: 0.5rem 1rem 0.25rem 1rem;\n    }\n  "],["\n    padding: 0 5rem;\n    justify-content: flex-end;\n    a {\n      padding: 0.5rem 1rem 0.25rem 1rem;\n    }\n  "]),l=n(28),i=n(0),o=a(i),c=n(51),d=a(c),m=n(17),u=a(m),f=u.default.nav.withConfig({displayName:"Navigation__Nav",componentId:"qabwmo-0"})(["width:100%;background:",';padding:0 1rem;font-family:"Roboto",Helvetica,Arial,sans-serif;display:flex;justify-content:space-between;a{padding:0.5rem 0 0.25rem 0;font-style:normal;font-weight:500;line-height:23px;font-size:14px;text-align:right;text-transform:uppercase;color:',";}a:last-child{padding:0.5rem;padding-right:0;}",""],function(e){return e.bgColor},function(e){return e.fontColor},(0,d.default)("desktop")(r));t.default=function(e){var t=e.pageName,n="home"===t?"#020100":"transparent",a="home"===t?"#A8A8A8":"#333";return o.default.createElement("header",null,o.default.createElement(f,{bgColor:n,fontColor:a},o.default.createElement(l.Link,{exact:!0,to:"/"},"Home"),o.default.createElement(l.Link,{to:"/#research"},"Research"),o.default.createElement(l.Link,{to:"/#team"},"Team"),o.default.createElement(l.Link,{to:"/teaching/lectures-and-courses"},"Teaching")))}},185:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=function(e){var t=e.children;return r.default.createElement("main",null,t)}},55:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    padding-left: 0 0 0 100px;\n  "],["\n    padding-left: 0 0 0 100px;\n  "]),l=n(0),i=a(l),o=n(28),c=n(17),d=a(c),m=n(51),u=a(m),f=n(159),s=a(f),p=n(160),g=a(p),h=n(185),E=a(h),y=d.default.section.withConfig({displayName:"Blog__BlogWrapper",componentId:"sc-1owziq9-0"})(["margin:0 auto;max-width:720px;padding:0 1rem;",""],(0,u.default)("desktop")(r)),b=d.default.h1.withConfig({displayName:"Blog__Heading",componentId:"sc-1owziq9-1"})(["font-family:'Exo 2',sans-serif;margin:4rem 0;font-style:normal;font-weight:700;line-height:3rem;font-size:2.2rem;letter-spacing:0.03em;color:#333333;"]),_=d.default.ul.withConfig({displayName:"Blog__BlogList",componentId:"sc-1owziq9-2"})(['padding-left:0;&>li{font-family:"Roboto",Helvetica,Arial,sans-serif;font-style:normal;font-weight:500;font-size:1.2rem;letter-spacing:0.03em;list-style:none;margin-bottom:1rem;&> a{color:#333;&:hover{color:#E6212B;}}}']);t.default=(0,o.withRouteData)(function(e){var t=e.posts;return i.default.createElement("div",null,i.default.createElement(s.default,{title:"Latest Blog Posts | Bitdefender Research",description:"List of all the recent blog posts by Bitdefender's Machine Learning & Crypto Research Unit.",tags:["machine-learning","research","bitdefender","posts"],image:"https://bit-ml.github.io/tile.png"}),i.default.createElement(g.default,{pageName:"blog"}),i.default.createElement(E.default,null,i.default.createElement(y,null,i.default.createElement(b,null,"Recent Posts"),i.default.createElement(_,null,t.map(function(e,t){return i.default.createElement("li",{key:t},i.default.createElement(o.Link,{to:"/blog/post/"+e.data.slug+"/"},e.data.title))})))))})}});
//# sourceMappingURL=Blog.33f076a5.js.map