webpackJsonp([1],{158:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(a),l=n(28);t.default=function(e){var t=e.children,n=e.title,a=e.description,r=(e.tagline,e.image),o=e.path,d=e.tags;return i.default.createElement(l.Head,null,t,o&&i.default.createElement("link",{rel:"canonical",href:o}),n&&i.default.createElement("title",null,n),a&&i.default.createElement("meta",{name:"description",content:a}),d&&i.default.createElement("meta",{name:"keywords",content:d.join(",")}),n&&i.default.createElement("meta",{property:"og:title",content:n}),a&&i.default.createElement("meta",{property:"og:description",content:a}),i.default.createElement("meta",{property:"og:site_name",content:"https://bit-ml.github.io/"}),d&&d.slice(0,6).map(function(e){return i.default.createElement("meta",{key:e,property:"article:tag",content:e})}),r&&i.default.createElement("meta",{property:"og:image",content:r}),i.default.createElement("meta",{name:"twitter:card",content:"summary"}),"",n&&i.default.createElement("meta",{name:"twitter:title",content:n}),a&&i.default.createElement("meta",{name:"twitter:description",content:a}),r&&i.default.createElement("meta",{name:"twitter:image",content:r}),a&&i.default.createElement("meta",{itemProp:"description",content:a}),d&&i.default.createElement("meta",{itemProp:"keywords",content:d.join(",")}),r&&i.default.createElement("meta",{itemProp:"image",content:r}))}},159:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    padding: 0 5rem;\n  "],["\n    padding: 0 5rem;\n  "]),l=n(0),r=a(l),o=n(28),d=n(17),f=a(d),u=n(54),c=a(u),s=f.default.nav.withConfig({displayName:"Navigation__Nav"})(["width:100%;background:",';padding:0 1rem;font-family:"Roboto",Helvetica,Arial,sans-serif;text-align:right;a{padding:1rem;display:inline-block;font-style:normal;font-weight:500;line-height:23px;font-size:14px;text-align:right;text-transform:uppercase;color:',";}a:last-child{padding-right:0;}",""],function(e){return e.bgColor},function(e){return e.fontColor},(0,c.default)("desktop")(i));t.default=function(e){var t=e.pageName,n="home"===t?"#020100":"transparent",a="home"===t?"#A8A8A8":"#333";return r.default.createElement("header",null,r.default.createElement(s,{bgColor:n,fontColor:a},r.default.createElement(o.Link,{exact:!0,to:"/"},"Home"),r.default.createElement(o.Link,{to:"/#research"},"Research"),r.default.createElement(o.Link,{to:"/#team"},"Team")))}},161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=function(e){var t=e.children;return i.default.createElement("main",null,t)}},176:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.Hero=void 0;var l=i(["\n    padding: 0 5rem;\n    height: 95vh;\n    background-size: contain;\n    background-position: bottom;\n    @media screen and (orientation:portrait) {\n      background-size: 1512px;\n      background-position: -700px bottom;\n    }\n  "],["\n    padding: 0 5rem;\n    height: 95vh;\n    background-size: contain;\n    background-position: bottom;\n    @media screen and (orientation:portrait) {\n      background-size: 1512px;\n      background-position: -700px bottom;\n    }\n  "]),r=i(["\n    padding: 0 5rem;\n    height: 95vh;\n    background-size: contain;\n    background-position: bottom;\n\n    @media screen and (orientation:portrait) {\n      background-size: 2048px;\n      background-position: -700px bottom;\n    }\n  "],["\n    padding: 0 5rem;\n    height: 95vh;\n    background-size: contain;\n    background-position: bottom;\n\n    @media screen and (orientation:portrait) {\n      background-size: 2048px;\n      background-position: -700px bottom;\n    }\n  "]),o=i(["\n    font-size: 64px;\n    line-height: 92px;\n  "],["\n    font-size: 64px;\n    line-height: 92px;\n  "]),d=n(0),f=a(d),u=n(17),c=a(u),s=n(54),p=a(s),m=n(177),g=a(m),h=t.Hero=c.default.div.withConfig({displayName:"Hero"})(["display:inline-block;width:100%;margin:0 auto;height:92vh;padding:0 1rem;background:#020100 url('/hero_avatar.jpg') no-repeat bottom;background-size:1024px;background-position:-600px bottom;"," ",""],(0,p.default)("tablet")(l),(0,p.default)("desktop")(r)),b=c.default.h1.withConfig({displayName:"Hero__Heading"})(["max-width:800px;font-family:'Exo 2',sans-serif;font-style:normal;font-weight:500;font-size:36px;line-height:3rem;color:#E4E4E4;"," ",""],(0,p.default)("tablet")(o),(0,p.default)("desktop")(o));t.default=function(e){var t=e.props;return f.default.createElement(h,null,f.default.createElement(b,null,t.tagline," "),f.default.createElement(g.default,{props:t}))}},177:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var l=i(["\n    bottom: -5px;\n  "],["\n    bottom: -5px;\n  "]),r=i(["\n    padding: 0 5rem;\n  "],["\n    padding: 0 5rem;\n  "]),o=i(["\n    flex-basis: 50%;\n    padding: 1rem;\n  "],["\n    flex-basis: 50%;\n    padding: 1rem;\n  "]),d=n(0),f=a(d),u=n(28),c=n(17),s=a(c),p=n(54),m=a(p),g=s.default.div.withConfig({displayName:"Featured__FeaturedContainer"})(["background:rgba(24,27,42,0.8);left:0;bottom:-5px;position:absolute;width:100%;",""],(0,m.default)("desktop")(l)),h=s.default.div.withConfig({displayName:"Featured__FeaturedWrapper"})(["display:flex;margin:0 auto;padding:0 1rem;color:#fff;"," ",""],(0,m.default)("tablet")(r),(0,m.default)("desktop")(r)),b=(0,s.default)(u.Link).withConfig({displayName:"Featured__FeaturedLink"})(["background:rgba(98,118,207,0);transition:all 0.2s cubic-bezier(0.25,0.46,0.45,0.94);color:#E4E4E4;&:hover{color:#fff;background:rgba(98,118,207,0.3);}"," ",""],(0,m.default)("tablet")(o),(0,m.default)("desktop")(o)),y=s.default.h2.withConfig({displayName:"Featured__FeaturedHeading"})(["font-family:'Exo 2',sans-serif;font-style:normal;font-weight:500;font-size:1.4rem;line-height:2rem;color:#89cdf0;"]),x=s.default.p.withConfig({displayName:"Featured__FeaturedSynopsis"})(["line-height:1.4;"]);t.default=function(e){e.posts;return f.default.createElement(g,null,f.default.createElement(h,null,f.default.createElement(b,{to:"/blog/post/bitdefender_at_tmlss2018/"},f.default.createElement(y,null,"Bitdefender at TMLSS 2018"),f.default.createElement(x,null,"Bitdefender participated with eight of its members at the first edition of the Transylvania Machine Learning Summer School that took place at the end of July 2018 in Cluj-Napoca."))))}},178:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.SpecialtyPanel=t.SpecialtyWrapper=void 0;var l=i(["\n    max-width: 100%;\n    display: flex;\n    justify-content: space-between;\n  "],["\n    max-width: 100%;\n    display: flex;\n    justify-content: space-between;\n  "]),r=i(["\n    position: sticky;\n    top: 0;\n    left: 0;\n\n    display: flex;\n    flex-direction: column;\n\n    height: 100vh;\n    width: 38%;\n    overflow: hidden;\n\n    .specItem {\n      flex-grow: 1;\n      flex-shrink: 1;\n      flex-basis: auto;\n      justify-content: center;\n\n      &.grows {\n        display: flex;\n        flex-grow: 20;\n        align-items: center;\n      }\n    }\n  "],["\n    position: sticky;\n    top: 0;\n    left: 0;\n\n    display: flex;\n    flex-direction: column;\n\n    height: 100vh;\n    width: 38%;\n    overflow: hidden;\n\n    .specItem {\n      flex-grow: 1;\n      flex-shrink: 1;\n      flex-basis: auto;\n      justify-content: center;\n\n      &.grows {\n        display: flex;\n        flex-grow: 20;\n        align-items: center;\n      }\n    }\n  "]),o=i(["\n    position: sticky;\n    top: 0;\n\n    height: 100vh;\n    width: 38%;\n    overflow: hidden;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n\n    .specItem {\n      flex-grow: 1;\n      flex-shrink: 1;\n      flex-basis: auto;\n      justify-content: center;\n\n      &.grows {\n        display: flex;\n        flex-grow: 20;\n        align-items: center;\n      }\n    }\n  "],["\n    position: sticky;\n    top: 0;\n\n    height: 100vh;\n    width: 38%;\n    overflow: hidden;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n\n    .specItem {\n      flex-grow: 1;\n      flex-shrink: 1;\n      flex-basis: auto;\n      justify-content: center;\n\n      &.grows {\n        display: flex;\n        flex-grow: 20;\n        align-items: center;\n      }\n    }\n  "]),d=i(["\n    font-size: 7.2vw;\n    margin-top: -3px;\n\n    @media screen and (orientation:landscape) {\n      margin-top: -5px;\n    }\n  "],["\n    font-size: 7.2vw;\n    margin-top: -3px;\n\n    @media screen and (orientation:landscape) {\n      margin-top: -5px;\n    }\n  "]),f=i(["\n    position: initial;\n    top: initial;\n\n    //font-size: 96px;\n    //line-height: 78px;\n    font-size: 7.3vw;\n    margin-top: -8px;\n  "],["\n    position: initial;\n    top: initial;\n\n    //font-size: 96px;\n    //line-height: 78px;\n    font-size: 7.3vw;\n    margin-top: -8px;\n  "]),u=i(["\n    font-size: 2vh;\n    padding: 0 2rem;\n\n    @media screen and (orientation:landscape) {\n      font-size: 2.4vh;\n    }\n  "],["\n    font-size: 2vh;\n    padding: 0 2rem;\n\n    @media screen and (orientation:landscape) {\n      font-size: 2.4vh;\n    }\n  "]),c=i(["\n    font-size: 2.8vh;\n    padding: 0 8vh;\n    line-height: 4vh;\n  "],["\n    font-size: 2.8vh;\n    padding: 0 8vh;\n    line-height: 4vh;\n  "]),s=i(["\n    padding: 0 2rem;\n  "],["\n    padding: 0 2rem;\n  "]),p=i(["\n    padding: 0 8vh;\n  "],["\n    padding: 0 8vh;\n  "]),m=i(["\n    max-width: 62%;\n  "],["\n    max-width: 62%;\n  "]),g=n(0),h=a(g),b=n(17),y=a(b),x=n(54),w=a(x),v=t.SpecialtyWrapper=y.default.div.withConfig({displayName:"Specialty__SpecialtyWrapper"})(["position:relative;background:#EDEBEB;"," ",""],(0,w.default)("desktop")(l),(0,w.default)("tablet")(l)),_=t.SpecialtyPanel=y.default.div.withConfig({displayName:"Specialty__SpecialtyPanel"})(["background:",";overflow:hidden;"," "," .specialtyHeading{}"],function(e){return e.bg},(0,w.default)("desktop")(r),(0,w.default)("tablet")(o)),E=y.default.h2.withConfig({displayName:"Specialty__Heading"})(["margin:0;font-family:'Exo 2',sans-serif;font-style:normal;font-weight:700;font-size:19.4vw;line-height:0.75;text-transform:uppercase;color:rgba(255,255,255,0.2);margin-top:-5px;"," ",""],(0,w.default)("tablet")(d),(0,w.default)("desktop")(f)),k=y.default.p.withConfig({displayName:"Specialty__Description"})(['font-family:"Roboto",Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;line-height:1.6rem;font-size:1.2rem;color:rgba(255,255,255,0.8);padding:3rem 1rem;'," ",""],(0,w.default)("tablet")(u),(0,w.default)("desktop")(c)),j=y.default.p.withConfig({displayName:"Specialty__Team"})(['font-family:"Roboto",Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;line-height:1.4;font-size:1rem;color:rgba(255,255,255,0.5);padding:0 1rem;'," ",""],(0,w.default)("tablet")(s),(0,w.default)("desktop")(p)),z=y.default.div.withConfig({displayName:"Specialty__ProjectsWrapper"})([""," ",""],(0,w.default)("tablet")(m),(0,w.default)("desktop")(m)),C=["#E6212B","#00B2CB","#12161E","#C700CB"];t.default=function(e){var t=e.children,n=e.props,a=e.bgIdx;return h.default.createElement(v,null,h.default.createElement(_,{bg:C[a]},h.default.createElement(E,{className:"specItem"},n.title," "),h.default.createElement("div",{className:"specItem grows"},h.default.createElement(k,null,n.description," ")),h.default.createElement(j,{className:"specItem"},n.people," ")),h.default.createElement(z,null,t))}},179:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var l=i(["\n    display: flex;\n    align-items: center;\n    min-height: 100vh;\n  "],["\n    display: flex;\n    align-items: center;\n    min-height: 100vh;\n  "]),r=i(["\n    padding: 0 5rem;\n  "],["\n    padding: 0 5rem;\n  "]),o=i(["\n    //padding: 0 15rem;\n    padding: 0 24vmin;\n  "],["\n    //padding: 0 15rem;\n    padding: 0 24vmin;\n  "]),d=n(0),f=a(d),u=n(17),c=a(u),s=n(54),p=a(s),m=c.default.div.withConfig({displayName:"Project"})([""," ",""],(0,p.default)("tablet")(l),(0,p.default)("desktop")(l)),g=c.default.section.withConfig({displayName:"Project__ProjectContent"})(["display:inline-block;padding:0 1rem;"," ",""],(0,p.default)("tablet")(r),(0,p.default)("desktop")(o)),h=c.default.h3.withConfig({displayName:"Project__Heading"})(["font-family:'Exo 2',sans-serif;font-style:normal;font-weight:700;line-height:37px;font-size:22px;letter-spacing:0.03em;text-transform:uppercase;color:#333333;"]),b=c.default.p.withConfig({displayName:"Project__Text"})(['font-family:"Roboto",Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;line-height:26px;font-size:1.1rem;letter-spacing:0.03em;color:#333333;']),y=c.default.ul.withConfig({displayName:"Project__BibList"})(["margin-top:3rem;padding-left:0;li>a{font-weight:normal;color:inherit;}"]),x=c.default.li.withConfig({displayName:"Project__BibItem"})(["padding:.5rem;list-style:none;font-family:Roboto;font-style:italic;font-weight:400;line-height:20px;font-size:14px;letter-spacing:0.03em;color:#828282;&:hover{background-color:#e0dcdc;transition:background-color 0.2s cubic-bezier(0.25,0.46,0.45,0.94);}"]),w=c.default.a.withConfig({displayName:"Project__BibLink"})([""]),v=c.default.span.withConfig({displayName:"Project__BibAuthors"})(["font-style:normal;color:#E6212B;"]),_=c.default.span.withConfig({displayName:"Project__BibYear"})(["font-style:normal;"]),E=c.default.span.withConfig({displayName:"Project__BibPublished"})(["font-style:normal;"]),k=function(e,t){var n=e.authors,a=e.title,i=e.year,l=e.link,r=e.published;return f.default.createElement(x,{key:t},f.default.createElement(w,{href:l,target:"_blank"},f.default.createElement(v,null,n),", "+a+", ",r&&f.default.createElement(E,null,r+", "),f.default.createElement(_,null,i)))},j=function(e){return e.children.split("\n").map(function(e,t){return f.default.createElement(b,{key:t},e)})};t.default=function(e,t){var n=e.title,a=e.description,i=e.papers;return f.default.createElement(m,{key:t},f.default.createElement(g,null,f.default.createElement(h,null,n),f.default.createElement(j,null,a),f.default.createElement(y,null,i.map(k))))}},180:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.BioBox=void 0;var l=i(["\n    &:hover {\n      background-color: #fff;\n      box-shadow: 0px 0px 17px -4px rgba(115,108,108,1);\n      transform: scale(1.05);\n      //transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n\n      div>a {opacity: 1}\n    }\n  "],["\n    &:hover {\n      background-color: #fff;\n      box-shadow: 0px 0px 17px -4px rgba(115,108,108,1);\n      transform: scale(1.05);\n      //transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n\n      div>a {opacity: 1}\n    }\n  "]),r=i(["\n    >a {\n      opacity: 0;\n    }\n  "],["\n    >a {\n      opacity: 0;\n    }\n  "]),o=n(0),d=a(o),f=n(17),u=a(f),c=n(54),s=a(c),p=t.BioBox=u.default.div.withConfig({displayName:"Bio__BioBox"})(["margin-left:5px;margin-right:5px;flex:1 1 350px;padding:0.6rem;@supports (display:grid){margin:0;}display:flex;align-items:flex-start;transition:all 0.2s cubic-bezier(0.25,0.46,0.45,0.94);",""],(0,s.default)("desktop")(l)),m=u.default.figure.withConfig({displayName:"Bio__MediaFigure"})(["margin-right:1rem;max-width:96px;max-height:96px;border-radius:50%;border:5px solid #fff;overflow:hidden;"]),g=u.default.div.withConfig({displayName:"Bio__MediaBody"})(["flex:1;"]),h=u.default.h4.withConfig({displayName:"Bio__Heading"})(["font-family:'Exo 2',serif;font-style:normal;font-weight:600;line-height:27px;font-size:1rem;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 1rem 0;"]),b=u.default.p.withConfig({displayName:"Bio"})(["font-family:Exo 2;font-style:normal;font-weight:normal;line-height:23px;font-size:1rem;color:#828282;margin-top:0;"]),y=u.default.div.withConfig({displayName:"Bio__ContactBox"})(["display:flex;align-items:flex-start;flex-wrap:nowrap;margin-bottom:1rem;>a{width:33.33%;text-align:center;font-weight:normal !important;color:#828282 !important;padding:0.5rem;border:1px solid #edebeb;margin-right:5px;transition:all 0.2s cubic-bezier(0.25,0.46,0.45,0.94);&:hover{background-color:#edebeb;}}",""],(0,s.default)("desktop")(r));t.default=function(e,t){var n=e.name,a=e.bio,i=e.img,l=e.contact;return d.default.createElement(p,{key:t},d.default.createElement(m,null,d.default.createElement("img",{src:"./bio/"+(i||"hal_9000.jpg"),alt:i})),d.default.createElement(g,null,d.default.createElement(h,null,n," "),d.default.createElement(b,null,a," "),d.default.createElement(y,null,l.mail&&d.default.createElement("a",{href:"mailto:"+l.mail},"email"),l.github&&d.default.createElement("a",{href:"https://github.com/"+l.github},"github"),l.twitter&&d.default.createElement("a",{href:"https://twitter.com/"+l.twitter},"twitter"))))}},181:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.ResearchTeam=void 0;var l=i(["\n    padding: 10rem 5rem;\n\n    @media screen and (orientation:portrait) {\n      //background: palevioletred;\n      padding: 10rem 10rem;\n    }\n  "],["\n    padding: 10rem 5rem;\n\n    @media screen and (orientation:portrait) {\n      //background: palevioletred;\n      padding: 10rem 10rem;\n    }\n  "]),r=i(["\n    padding: 10rem 5rem;\n  "],["\n    padding: 10rem 5rem;\n  "]),o=n(0),d=a(o),f=n(17),u=a(f),c=n(54),s=a(c),p=t.ResearchTeam=u.default.div.withConfig({displayName:"ResearchTeam"})(["display:flex;flex-wrap:wrap;display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));grid-auto-rows:minmax(150px,auto);grid-gap:3rem;padding:6rem 1rem;background:#F5F2F2;"," ",""],(0,s.default)("tablet")(l),(0,s.default)("desktop")(r));t.default=function(e){var t=e.children,n=e.id;return d.default.createElement(p,{id:n},t)}},57:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),l=a(i),r=n(28),o=n(17),d=a(o),f=n(158),u=a(f),c=n(159),s=a(c),p=n(161),m=a(p),g=n(176),h=a(g),b=n(178),y=a(b),x=n(179),w=a(x),v=n(180),_=a(v),E=n(181),k=a(E),j=d.default.div.withConfig({displayName:"Home__SpecialtyContainer"})([""]);t.default=(0,r.withRouteData)((0,r.withSiteData)(function(e){return l.default.createElement("div",null,l.default.createElement(u.default,{title:e.title+" | "+e.tagline,description:e.description,tagline:e.tagline,tags:e.tags,image:"https://bit-ml.github.io/tile.png"}),l.default.createElement(s.default,{pageName:"home"}),l.default.createElement(m.default,null,l.default.createElement(h.default,{props:e}),l.default.createElement(j,{id:"research"},e.specialties.map(function(e,t){return l.default.createElement(y.default,{props:e,key:t,bgIdx:t},e.projects.map(w.default))})),l.default.createElement(k.default,{id:"team"},e.people.map(_.default))))}))}});