webpackJsonp([1],{152:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(a),o=n(28);t.default=function(e){var t=e.children,n=e.title,a=e.description,l=(e.tagline,e.image),r=e.path,d=e.tags;return i.default.createElement(o.Head,null,t,r&&i.default.createElement("link",{rel:"canonical",href:r}),n&&i.default.createElement("title",null,n),a&&i.default.createElement("meta",{name:"description",content:a}),d&&i.default.createElement("meta",{name:"keywords",content:d.join(",")}),n&&i.default.createElement("meta",{property:"og:title",content:n}),a&&i.default.createElement("meta",{property:"og:description",content:a}),i.default.createElement("meta",{property:"og:site_name",content:"https://bit-ml.github.io/"}),d&&d.slice(0,6).map(function(e){return i.default.createElement("meta",{key:e,property:"article:tag",content:e})}),l&&i.default.createElement("meta",{property:"og:image",content:l}),i.default.createElement("meta",{name:"twitter:card",content:"summary"}),"",n&&i.default.createElement("meta",{name:"twitter:title",content:n}),a&&i.default.createElement("meta",{name:"twitter:description",content:a}),l&&i.default.createElement("meta",{name:"twitter:image",content:l}),a&&i.default.createElement("meta",{itemProp:"description",content:a}),d&&i.default.createElement("meta",{itemProp:"keywords",content:d.join(",")}),l&&i.default.createElement("meta",{itemProp:"image",content:l}))}},153:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    padding: 0 5rem;\n  "],["\n    padding: 0 5rem;\n  "]),o=n(0),l=a(o),r=n(28),d=n(17),f=a(d),c=n(51),u=a(c),p=f.default.nav.withConfig({displayName:"Navigation__Nav",componentId:"qabwmo-0"})(["width:100%;background:",';padding:0 1rem;font-family:"Roboto",Helvetica,Arial,sans-serif;text-align:right;a{padding:1rem;display:inline-block;font-style:normal;font-weight:500;line-height:23px;font-size:14px;text-align:right;text-transform:uppercase;color:',";}a:last-child{padding-right:0;}",""],function(e){return e.bgColor},function(e){return e.fontColor},(0,u.default)("desktop")(i));t.default=function(e){var t=e.pageName,n="home"===t?"#020100":"transparent",a="home"===t?"#A8A8A8":"#333";return l.default.createElement("header",null,l.default.createElement(p,{bgColor:n,fontColor:a},l.default.createElement(r.Link,{exact:!0,to:"/"},"Home"),l.default.createElement(r.Link,{to:"/#research"},"Research"),l.default.createElement(r.Link,{to:"/#team"},"Team")))}},155:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=function(e){var t=e.children;return i.default.createElement("main",null,t)}},170:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.Hero=void 0;var o=i(["\n    padding: 0 5rem;\n    height: 95vh;\n    background-size: contain;\n    background-position: bottom;\n    @media screen and (orientation:portrait) {\n      background-size: 1512px;\n      background-position: -700px bottom;\n    }\n  "],["\n    padding: 0 5rem;\n    height: 95vh;\n    background-size: contain;\n    background-position: bottom;\n    @media screen and (orientation:portrait) {\n      background-size: 1512px;\n      background-position: -700px bottom;\n    }\n  "]),l=i(["\n    padding: 0 5rem;\n    height: 95vh;\n    background-size: contain;\n    background-position: bottom;\n\n    @media screen and (orientation:portrait) {\n      background-size: 2048px;\n      background-position: -700px bottom;\n    }\n  "],["\n    padding: 0 5rem;\n    height: 95vh;\n    background-size: contain;\n    background-position: bottom;\n\n    @media screen and (orientation:portrait) {\n      background-size: 2048px;\n      background-position: -700px bottom;\n    }\n  "]),r=i(["\n    font-size: 64px;\n    line-height: 92px;\n  "],["\n    font-size: 64px;\n    line-height: 92px;\n  "]),d=n(0),f=a(d),c=n(17),u=a(c),p=n(51),s=a(p),m=n(171),g=a(m),h=t.Hero=u.default.div.withConfig({displayName:"Hero",componentId:"ajom9h-0"})(["display:inline-block;width:100%;margin:0 auto;height:92vh;padding:0 1rem;background:#020100 url('/hero_avatar.jpg') no-repeat bottom;background-size:1024px;background-position:-600px bottom;"," ",""],(0,s.default)("tablet")(o),(0,s.default)("desktop")(l)),b=u.default.h1.withConfig({displayName:"Hero__Heading",componentId:"ajom9h-1"})(["max-width:800px;font-family:'Exo 2',sans-serif;font-style:normal;font-weight:500;font-size:36px;line-height:3rem;color:#E4E4E4;"," ",""],(0,s.default)("tablet")(r),(0,s.default)("desktop")(r));t.default=function(e){var t=e.props;return f.default.createElement(h,null,f.default.createElement(b,null,t.tagline," "),f.default.createElement(g.default,{props:t}))}},171:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var o=i(["\n    bottom: -5px;\n  "],["\n    bottom: -5px;\n  "]),l=i(["\n    padding: 0 5rem;\n  "],["\n    padding: 0 5rem;\n  "]),r=i(["\n    flex-basis: 50%;\n    padding: 1rem;\n  "],["\n    flex-basis: 50%;\n    padding: 1rem;\n  "]),d=n(0),f=a(d),c=n(28),u=n(17),p=a(u),s=n(51),m=a(s),g=p.default.div.withConfig({displayName:"Featured__FeaturedContainer",componentId:"xm4c49-0"})(["background:rgba(24,27,42,0.8);left:0;bottom:-5px;position:absolute;width:100%;",""],(0,m.default)("desktop")(o)),h=p.default.div.withConfig({displayName:"Featured__FeaturedWrapper",componentId:"xm4c49-1"})(["display:flex;margin:0 auto;padding:0 1rem;color:#fff;"," ",""],(0,m.default)("tablet")(l),(0,m.default)("desktop")(l)),b=(0,p.default)(c.Link).withConfig({displayName:"Featured__FeaturedLink",componentId:"xm4c49-2"})(["background:rgba(98,118,207,0);transition:all 0.2s cubic-bezier(0.25,0.46,0.45,0.94);color:#E4E4E4;&:hover{color:#fff;background:rgba(98,118,207,0.3);}"," ",""],(0,m.default)("tablet")(r),(0,m.default)("desktop")(r)),x=p.default.h2.withConfig({displayName:"Featured__FeaturedHeading",componentId:"xm4c49-3"})(["font-family:'Exo 2',sans-serif;font-style:normal;font-weight:500;font-size:1.4rem;line-height:2rem;color:#89cdf0;"]),y=p.default.p.withConfig({displayName:"Featured__FeaturedSynopsis",componentId:"xm4c49-4"})(["line-height:1.4;"]);t.default=function(e){e.posts;return f.default.createElement(g,null,f.default.createElement(h,null,f.default.createElement(b,{to:"/blog/post/bitdefender_at_EEML2019/"},f.default.createElement(x,null,"Bitdefender at EEML 2019"),f.default.createElement(y,null,"Read about our team's experience of organizing and participating at Eastern European Machine Learning summer school in Bucharest.")),f.default.createElement(b,{to:"/blog/post/bitdefender_at_tmlss2018/"},f.default.createElement(x,null,"Bitdefender at TMLSS 2018"),f.default.createElement(y,null,"Bitdefender participated with eight of its members at the first edition of the Transylvania Machine Learning Summer School that took place at the end of July 2018 in Cluj-Napoca."))))}},172:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.SpecialtyPanel=t.SpecialtyWrapper=void 0;var o=i(["\n    max-width: 100%;\n    display: flex;\n    justify-content: space-between;\n  "],["\n    max-width: 100%;\n    display: flex;\n    justify-content: space-between;\n  "]),l=i(["\n    position: sticky;\n    top: 0;\n    left: 0;\n\n    display: flex;\n    flex-direction: column;\n\n    height: 100vh;\n    width: 38%;\n    overflow: hidden;\n\n    .specItem {\n      flex-grow: 1;\n      flex-shrink: 1;\n      flex-basis: auto;\n      justify-content: center;\n\n      &.grows {\n        display: flex;\n        flex-grow: 20;\n        align-items: center;\n      }\n    }\n  "],["\n    position: sticky;\n    top: 0;\n    left: 0;\n\n    display: flex;\n    flex-direction: column;\n\n    height: 100vh;\n    width: 38%;\n    overflow: hidden;\n\n    .specItem {\n      flex-grow: 1;\n      flex-shrink: 1;\n      flex-basis: auto;\n      justify-content: center;\n\n      &.grows {\n        display: flex;\n        flex-grow: 20;\n        align-items: center;\n      }\n    }\n  "]),r=i(["\n    position: sticky;\n    top: 0;\n\n    height: 100vh;\n    width: 38%;\n    overflow: hidden;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n\n    .specItem {\n      flex-grow: 1;\n      flex-shrink: 1;\n      flex-basis: auto;\n      justify-content: center;\n\n      &.grows {\n        display: flex;\n        flex-grow: 20;\n        align-items: center;\n      }\n    }\n  "],["\n    position: sticky;\n    top: 0;\n\n    height: 100vh;\n    width: 38%;\n    overflow: hidden;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n\n    .specItem {\n      flex-grow: 1;\n      flex-shrink: 1;\n      flex-basis: auto;\n      justify-content: center;\n\n      &.grows {\n        display: flex;\n        flex-grow: 20;\n        align-items: center;\n      }\n    }\n  "]),d=i(["\n    font-size: 7.2vw;\n    margin-top: -3px;\n\n    @media screen and (orientation:landscape) {\n      margin-top: -5px;\n    }\n  "],["\n    font-size: 7.2vw;\n    margin-top: -3px;\n\n    @media screen and (orientation:landscape) {\n      margin-top: -5px;\n    }\n  "]),f=i(["\n    position: initial;\n    top: initial;\n\n    //font-size: 96px;\n    //line-height: 78px;\n    font-size: 7.3vw;\n    margin-top: -8px;\n  "],["\n    position: initial;\n    top: initial;\n\n    //font-size: 96px;\n    //line-height: 78px;\n    font-size: 7.3vw;\n    margin-top: -8px;\n  "]),c=i(["\n    font-size: 2vh;\n    padding: 0 2rem;\n\n    @media screen and (orientation:landscape) {\n      font-size: 2.4vh;\n    }\n  "],["\n    font-size: 2vh;\n    padding: 0 2rem;\n\n    @media screen and (orientation:landscape) {\n      font-size: 2.4vh;\n    }\n  "]),u=i(["\n    font-size: 2.8vh;\n    padding: 0 8vh;\n    line-height: 4vh;\n  "],["\n    font-size: 2.8vh;\n    padding: 0 8vh;\n    line-height: 4vh;\n  "]),p=i(["\n    padding: 0 2rem;\n  "],["\n    padding: 0 2rem;\n  "]),s=i(["\n    padding: 0 8vh;\n  "],["\n    padding: 0 8vh;\n  "]),m=i(["\n    max-width: 62%;\n  "],["\n    max-width: 62%;\n  "]),g=n(0),h=a(g),b=n(17),x=a(b),y=n(51),w=a(y),v=t.SpecialtyWrapper=x.default.div.withConfig({displayName:"Specialty__SpecialtyWrapper",componentId:"pq5osx-0"})(["position:relative;background:#EDEBEB;"," ",""],(0,w.default)("desktop")(o),(0,w.default)("tablet")(o)),_=t.SpecialtyPanel=x.default.div.withConfig({displayName:"Specialty__SpecialtyPanel",componentId:"pq5osx-1"})(["background:",";overflow:hidden;"," "," .specialtyHeading{}"],function(e){return e.bg},(0,w.default)("desktop")(l),(0,w.default)("tablet")(r)),E=x.default.h2.withConfig({displayName:"Specialty__Heading",componentId:"pq5osx-2"})(["margin:0;font-family:'Exo 2',sans-serif;font-style:normal;font-weight:700;font-size:19.4vw;line-height:0.75;text-transform:uppercase;color:rgba(255,255,255,0.2);margin-top:-5px;"," ",""],(0,w.default)("tablet")(d),(0,w.default)("desktop")(f)),k=x.default.p.withConfig({displayName:"Specialty__Description",componentId:"pq5osx-3"})(['font-family:"Roboto",Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;line-height:1.6rem;font-size:1.2rem;color:rgba(255,255,255,0.8);padding:3rem 1rem;'," ",""],(0,w.default)("tablet")(c),(0,w.default)("desktop")(u)),z=x.default.p.withConfig({displayName:"Specialty__Team",componentId:"pq5osx-4"})(['font-family:"Roboto",Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;line-height:1.4;font-size:1rem;color:rgba(255,255,255,0.5);padding:0 1rem;'," ",""],(0,w.default)("tablet")(p),(0,w.default)("desktop")(s)),j=x.default.div.withConfig({displayName:"Specialty__ProjectsWrapper",componentId:"pq5osx-5"})([""," ",""],(0,w.default)("tablet")(m),(0,w.default)("desktop")(m)),C=["#E6212B","#00B2CB","#12161E","#C700CB"];t.default=function(e){var t=e.children,n=e.props,a=e.bgIdx;return h.default.createElement(v,null,h.default.createElement(_,{bg:C[a]},h.default.createElement(E,{className:"specItem"},n.title," "),h.default.createElement("div",{className:"specItem grows"},h.default.createElement(k,null,n.description," ")),h.default.createElement(z,{className:"specItem"},n.people," ")),h.default.createElement(j,null,t))}},173:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var o=i(["\n    display: flex;\n    align-items: center;\n    min-height: 100vh;\n  "],["\n    display: flex;\n    align-items: center;\n    min-height: 100vh;\n  "]),l=i(["\n    padding: 0 5rem;\n  "],["\n    padding: 0 5rem;\n  "]),r=i(["\n    //padding: 0 15rem;\n    padding: 0 24vmin;\n  "],["\n    //padding: 0 15rem;\n    padding: 0 24vmin;\n  "]),d=n(0),f=a(d),c=n(17),u=a(c),p=n(51),s=a(p),m=u.default.div.withConfig({displayName:"Project",componentId:"d9zx3a-0"})([""," ",""],(0,s.default)("tablet")(o),(0,s.default)("desktop")(o)),g=u.default.section.withConfig({displayName:"Project__ProjectContent",componentId:"d9zx3a-1"})(["display:inline-block;padding:0 1rem;"," ",""],(0,s.default)("tablet")(l),(0,s.default)("desktop")(r)),h=u.default.h3.withConfig({displayName:"Project__Heading",componentId:"d9zx3a-2"})(["font-family:'Exo 2',sans-serif;font-style:normal;font-weight:700;line-height:37px;font-size:22px;letter-spacing:0.03em;text-transform:uppercase;color:#333333;"]),b=u.default.p.withConfig({displayName:"Project__Text",componentId:"d9zx3a-3"})(['font-family:"Roboto",Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;line-height:26px;font-size:1.1rem;letter-spacing:0.03em;color:#333333;']),x=u.default.ul.withConfig({displayName:"Project__BibList",componentId:"d9zx3a-4"})(["margin-top:3rem;padding-left:0;li>a{font-weight:normal;color:inherit;}"]),y=u.default.li.withConfig({displayName:"Project__BibItem",componentId:"d9zx3a-5"})(["padding:.5rem;list-style:none;font-family:Roboto;font-style:italic;font-weight:400;line-height:20px;font-size:14px;letter-spacing:0.03em;color:#828282;&:hover{background-color:#e0dcdc;transition:background-color 0.2s cubic-bezier(0.25,0.46,0.45,0.94);}"]),w=u.default.a.withConfig({displayName:"Project__BibLink",componentId:"d9zx3a-6"})([""]),v=u.default.span.withConfig({displayName:"Project__BibAuthors",componentId:"d9zx3a-7"})(["font-style:normal;color:#E6212B;"]),_=u.default.span.withConfig({displayName:"Project__BibYear",componentId:"d9zx3a-8"})(["font-style:normal;"]),E=u.default.span.withConfig({displayName:"Project__BibPublished",componentId:"d9zx3a-9"})(["font-style:normal;"]),k=function(e,t){var n=e.authors,a=e.title,i=e.year,o=e.link,l=e.published;return f.default.createElement(y,{key:t},f.default.createElement(w,{href:o,target:"_blank"},f.default.createElement(v,null,n),", "+a+", ",l&&f.default.createElement(E,null,l+", "),f.default.createElement(_,null,i)))},z=function(e){return e.children.split("\n").map(function(e,t){return f.default.createElement(b,{key:t},e)})};t.default=function(e,t){var n=e.title,a=e.description,i=e.papers;return f.default.createElement(m,{key:t},f.default.createElement(g,null,f.default.createElement(h,null,n),f.default.createElement(z,null,a),f.default.createElement(x,null,i.map(k))))}},174:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.BioBox=void 0;var o=i(["\n    &:hover {\n      background-color: #fff;\n      box-shadow: 0px 0px 17px -4px rgba(115,108,108,1);\n      transform: scale(1.05);\n      //transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n\n      div>a {opacity: 1}\n    }\n  "],["\n    &:hover {\n      background-color: #fff;\n      box-shadow: 0px 0px 17px -4px rgba(115,108,108,1);\n      transform: scale(1.05);\n      //transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n\n      div>a {opacity: 1}\n    }\n  "]),l=i(["\n    >a {\n      opacity: 0;\n    }\n  "],["\n    >a {\n      opacity: 0;\n    }\n  "]),r=n(0),d=a(r),f=n(17),c=a(f),u=n(51),p=a(u),s=t.BioBox=c.default.div.withConfig({displayName:"Bio__BioBox",componentId:"sc-13auz32-0"})(["margin-left:5px;margin-right:5px;flex:1 1 350px;padding:0.6rem;@supports (display:grid){margin:0;}display:flex;align-items:flex-start;transition:all 0.2s cubic-bezier(0.25,0.46,0.45,0.94);",""],(0,p.default)("desktop")(o)),m=c.default.figure.withConfig({displayName:"Bio__MediaFigure",componentId:"sc-13auz32-1"})(["margin-right:1rem;max-width:96px;max-height:96px;border-radius:50%;border:5px solid #fff;overflow:hidden;"]),g=c.default.div.withConfig({displayName:"Bio__MediaBody",componentId:"sc-13auz32-2"})(["flex:1;"]),h=c.default.h4.withConfig({displayName:"Bio__Heading",componentId:"sc-13auz32-3"})(["font-family:'Exo 2',serif;font-style:normal;font-weight:600;line-height:27px;font-size:1rem;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 1rem 0;"]),b=c.default.p.withConfig({displayName:"Bio",componentId:"sc-13auz32-4"})(["font-family:Exo 2;font-style:normal;font-weight:normal;line-height:23px;font-size:1rem;color:#828282;margin-top:0;"]),x=c.default.div.withConfig({displayName:"Bio__ContactBox",componentId:"sc-13auz32-5"})(["display:flex;align-items:flex-start;flex-wrap:nowrap;margin-bottom:1rem;>a{width:33.33%;text-align:center;font-weight:normal !important;color:#828282 !important;padding:0.5rem;border:1px solid #edebeb;margin-right:5px;transition:all 0.2s cubic-bezier(0.25,0.46,0.45,0.94);&:hover{background-color:#edebeb;}}",""],(0,p.default)("desktop")(l));t.default=function(e,t){var n=e.name,a=e.bio,i=e.img,o=e.contact;return d.default.createElement(s,{key:t},d.default.createElement(m,null,d.default.createElement("img",{src:"./bio/"+(i||"hal_9000.jpg"),alt:i})),d.default.createElement(g,null,d.default.createElement(h,null,n," "),d.default.createElement(b,null,a," "),d.default.createElement(x,null,o.mail&&d.default.createElement("a",{href:"mailto:"+o.mail},"email"),o.github&&d.default.createElement("a",{href:"https://github.com/"+o.github},"github"),o.twitter&&d.default.createElement("a",{href:"https://twitter.com/"+o.twitter},"twitter"))))}},175:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.ResearchTeam=void 0;var o=i(["\n    padding: 10rem 5rem;\n\n    @media screen and (orientation:portrait) {\n      //background: palevioletred;\n      padding: 10rem 10rem;\n    }\n  "],["\n    padding: 10rem 5rem;\n\n    @media screen and (orientation:portrait) {\n      //background: palevioletred;\n      padding: 10rem 10rem;\n    }\n  "]),l=i(["\n    padding: 10rem 5rem;\n  "],["\n    padding: 10rem 5rem;\n  "]),r=n(0),d=a(r),f=n(17),c=a(f),u=n(51),p=a(u),s=t.ResearchTeam=c.default.div.withConfig({displayName:"ResearchTeam",componentId:"dl300p-0"})(["display:flex;flex-wrap:wrap;display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));grid-auto-rows:minmax(150px,auto);grid-gap:3rem;padding:6rem 1rem;background:#F5F2F2;"," ",""],(0,p.default)("tablet")(o),(0,p.default)("desktop")(l));t.default=function(e){var t=e.children,n=e.id;return d.default.createElement(s,{id:n},t)}},54:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),o=a(i),l=n(28),r=n(17),d=a(r),f=n(152),c=a(f),u=n(153),p=a(u),s=n(155),m=a(s),g=n(170),h=a(g),b=n(172),x=a(b),y=n(173),w=a(y),v=n(174),_=a(v),E=n(175),k=a(E),z=d.default.div.withConfig({displayName:"Home__SpecialtyContainer",componentId:"sc-1ffwrsf-0"})([""]);t.default=(0,l.withRouteData)((0,l.withSiteData)(function(e){return o.default.createElement("div",null,o.default.createElement(c.default,{title:e.title+" | "+e.tagline,description:e.description,tagline:e.tagline,tags:e.tags,image:"https://bit-ml.github.io/tile.png"}),o.default.createElement(p.default,{pageName:"home"}),o.default.createElement(m.default,null,o.default.createElement(h.default,{props:e}),o.default.createElement(z,{id:"research"},e.specialties.map(function(e,t){return o.default.createElement(x.default,{props:e,key:t,bgIdx:t},e.projects.map(w.default))})),o.default.createElement(k.default,{id:"team"},e.people.map(_.default))))}))}});
//# sourceMappingURL=Home.5de0f1f7.js.map