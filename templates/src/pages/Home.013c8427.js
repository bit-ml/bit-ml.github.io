webpackJsonp([1],{158:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(i),l=n(28);t.default=function(e){var t=e.children,n=e.title,i=e.description,r=(e.tagline,e.image),o=e.path,d=e.tags;return a.default.createElement(l.Head,null,t,o&&a.default.createElement("link",{rel:"canonical",href:o}),n&&a.default.createElement("title",null,n),i&&a.default.createElement("meta",{name:"description",content:i}),d&&a.default.createElement("meta",{name:"keywords",content:d.join(",")}),n&&a.default.createElement("meta",{property:"og:title",content:n}),i&&a.default.createElement("meta",{property:"og:description",content:i}),a.default.createElement("meta",{property:"og:site_name",content:"https://bit-ml.github.io/"}),d&&d.slice(0,6).map(function(e){return a.default.createElement("meta",{key:e,property:"article:tag",content:e})}),r&&a.default.createElement("meta",{property:"og:image",content:r}),a.default.createElement("meta",{name:"twitter:card",content:"summary"}),"",n&&a.default.createElement("meta",{name:"twitter:title",content:n}),i&&a.default.createElement("meta",{name:"twitter:description",content:i}),r&&a.default.createElement("meta",{name:"twitter:image",content:r}),i&&a.default.createElement("meta",{itemProp:"description",content:i}),d&&a.default.createElement("meta",{itemProp:"keywords",content:d.join(",")}),r&&a.default.createElement("meta",{itemProp:"image",content:r}))}},159:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    padding: 0 5rem;\n  "],["\n    padding: 0 5rem;\n  "]),l=n(0),r=i(l),o=n(28),d=n(17),f=i(d),u=n(54),c=i(u),p=f.default.nav.withConfig({displayName:"Navigation__Nav"})(["width:100%;background:",';padding:0 1rem;font-family:"Roboto",Helvetica,Arial,sans-serif;text-align:right;a{padding:1rem;display:inline-block;font-style:normal;font-weight:500;line-height:23px;font-size:14px;text-align:right;text-transform:uppercase;color:',";}a:last-child{padding-right:0;}",""],function(e){return e.bgColor},function(e){return e.fontColor},(0,c.default)("desktop")(a));t.default=function(e){var t=e.pageName,n="home"===t?"#020100":"transparent",i="home"===t?"#A8A8A8":"#333";return r.default.createElement("header",null,r.default.createElement(p,{bgColor:n,fontColor:i},r.default.createElement(o.Link,{exact:!0,to:"/"},"Home"),r.default.createElement(o.Link,{to:"/#research"},"Research"),r.default.createElement(o.Link,{to:"/#team"},"Team")))}},161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default=function(e){var t=e.children;return a.default.createElement("main",null,t)}},176:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.Hero=void 0;var l=a(["\n    padding: 0 5rem;\n    height: 95vh;\n    background-size: contain;\n    background-position: bottom;\n    @media screen and (orientation:portrait) {\n      background-size: 1512px;\n      background-position: -700px bottom;\n    }\n  "],["\n    padding: 0 5rem;\n    height: 95vh;\n    background-size: contain;\n    background-position: bottom;\n    @media screen and (orientation:portrait) {\n      background-size: 1512px;\n      background-position: -700px bottom;\n    }\n  "]),r=a(["\n    padding: 0 5rem;\n    height: 95vh;\n    background-size: contain;\n    background-position: bottom;\n\n    @media screen and (orientation:portrait) {\n      background-size: 2048px;\n      background-position: -700px bottom;\n    }\n  "],["\n    padding: 0 5rem;\n    height: 95vh;\n    background-size: contain;\n    background-position: bottom;\n\n    @media screen and (orientation:portrait) {\n      background-size: 2048px;\n      background-position: -700px bottom;\n    }\n  "]),o=a(["\n    font-size: 64px;\n    line-height: 92px;\n  "],["\n    font-size: 64px;\n    line-height: 92px;\n  "]),d=n(0),f=i(d),u=n(17),c=i(u),p=n(54),s=i(p),m=n(177),g=i(m),h=t.Hero=c.default.div.withConfig({displayName:"Hero"})(["display:inline-block;width:100%;margin:0 auto;height:92vh;padding:0 1rem;background:#020100 url('/hero_avatar.jpg') no-repeat bottom;background-size:1024px;background-position:-600px bottom;"," ",""],(0,s.default)("tablet")(l),(0,s.default)("desktop")(r)),b=c.default.h1.withConfig({displayName:"Hero__Heading"})(["max-width:800px;font-family:'Exo 2',sans-serif;font-style:normal;font-weight:500;font-size:36px;line-height:3rem;color:#E4E4E4;"," ",""],(0,s.default)("tablet")(o),(0,s.default)("desktop")(o));t.default=function(e){var t=e.props;return f.default.createElement(h,null,f.default.createElement(b,null,t.tagline," "),f.default.createElement(g.default,{props:t}))}},177:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var l=a(["\n    bottom: -5px;\n  "],["\n    bottom: -5px;\n  "]),r=a(["\n    padding: 0 5rem;\n  "],["\n    padding: 0 5rem;\n  "]),o=a(["\n    flex-basis: 50%;\n    padding: 1rem;\n  "],["\n    flex-basis: 50%;\n    padding: 1rem;\n  "]),d=n(0),f=i(d),u=n(28),c=n(17),p=i(c),s=n(54),m=i(s),g=p.default.div.withConfig({displayName:"Featured__FeaturedContainer"})(["background:rgba(24,27,42,0.8);left:0;bottom:-5px;position:absolute;width:100%;",""],(0,m.default)("desktop")(l)),h=p.default.div.withConfig({displayName:"Featured__FeaturedWrapper"})(["display:flex;margin:0 auto;padding:0 1rem;color:#fff;"," ",""],(0,m.default)("tablet")(r),(0,m.default)("desktop")(r)),b=(0,p.default)(u.Link).withConfig({displayName:"Featured__FeaturedLink"})(["background:rgba(98,118,207,0);transition:all 0.2s cubic-bezier(0.25,0.46,0.45,0.94);color:#E4E4E4;&:hover{color:#fff;background:rgba(98,118,207,0.3);}"," ",""],(0,m.default)("tablet")(o),(0,m.default)("desktop")(o)),x=p.default.h2.withConfig({displayName:"Featured__FeaturedHeading"})(["font-family:'Exo 2',sans-serif;font-style:normal;font-weight:500;font-size:1.4rem;line-height:2rem;color:#89cdf0;"]),y=p.default.p.withConfig({displayName:"Featured__FeaturedSynopsis"})(["line-height:1.4;"]);t.default=function(e){e.posts;return f.default.createElement(g,null,f.default.createElement(h,null,f.default.createElement(b,{to:"/blog/post/bitdefender_at_tmlss2018/"},f.default.createElement(x,null,"Bitdefender at TMLSS 2018"),f.default.createElement(y,null,"Bitdefender participated with eight of its members at the first edition of the Transylvania Machine Learning Summer School that took place at the end of July 2018 in Cluj-Napoca."))))}},178:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.SpecialtyPanel=t.SpecialtyWrapper=void 0;var l=a(["\n    max-width: 100%;\n    display: flex;\n    justify-content: space-between;\n  "],["\n    max-width: 100%;\n    display: flex;\n    justify-content: space-between;\n  "]),r=a(["\n    position: sticky;\n    top: 0;\n    left: 0;\n\n    display: flex;\n    flex-direction: column;\n\n    height: 100vh;\n    width: 38%;\n    overflow: hidden;\n\n    .specItem {\n      flex-grow: 1;\n      flex-shrink: 1;\n      flex-basis: auto;\n      justify-content: center;\n\n      &.grows {\n        display: flex;\n        flex-grow: 20;\n        align-items: center;\n      }\n    }\n  "],["\n    position: sticky;\n    top: 0;\n    left: 0;\n\n    display: flex;\n    flex-direction: column;\n\n    height: 100vh;\n    width: 38%;\n    overflow: hidden;\n\n    .specItem {\n      flex-grow: 1;\n      flex-shrink: 1;\n      flex-basis: auto;\n      justify-content: center;\n\n      &.grows {\n        display: flex;\n        flex-grow: 20;\n        align-items: center;\n      }\n    }\n  "]),o=a(["\n    position: sticky;\n    top: 0;\n\n    height: 100vh;\n    width: 38%;\n    overflow: hidden;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n\n    .specItem {\n      flex-grow: 1;\n      flex-shrink: 1;\n      flex-basis: auto;\n      justify-content: center;\n\n      &.grows {\n        display: flex;\n        flex-grow: 20;\n        align-items: center;\n      }\n    }\n  "],["\n    position: sticky;\n    top: 0;\n\n    height: 100vh;\n    width: 38%;\n    overflow: hidden;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n\n    .specItem {\n      flex-grow: 1;\n      flex-shrink: 1;\n      flex-basis: auto;\n      justify-content: center;\n\n      &.grows {\n        display: flex;\n        flex-grow: 20;\n        align-items: center;\n      }\n    }\n  "]),d=a(["\n    font-size: 6vw;\n    line-height: 5vw;\n    margin-top: -2px;\n\n    @media screen and (orientation:portrait) {\n      margin-top: -7px;\n    }\n  "],["\n    font-size: 6vw;\n    line-height: 5vw;\n    margin-top: -2px;\n\n    @media screen and (orientation:portrait) {\n      margin-top: -7px;\n    }\n  "]),f=a(["\n    position: initial;\n    top: initial;\n\n    //font-size: 96px;\n    //line-height: 78px;\n    font-size: 6vw;\n    line-height: 5vw;\n    margin-top: -3px;\n  "],["\n    position: initial;\n    top: initial;\n\n    //font-size: 96px;\n    //line-height: 78px;\n    font-size: 6vw;\n    line-height: 5vw;\n    margin-top: -3px;\n  "]),u=a(["\n    font-size: 3vmin;\n    line-height: 5vmin;\n    padding: 0 2rem;\n\n    @media screen and (orientation:landscape) {\n      //background: palevioletred;\n    }\n  "],["\n    font-size: 3vmin;\n    line-height: 5vmin;\n    padding: 0 2rem;\n\n    @media screen and (orientation:landscape) {\n      //background: palevioletred;\n    }\n  "]),c=a(["\n    font-size: 2.4vmin;\n    line-height: 4vmin;\n    padding: 0 8.5vmin;\n\n    //line-height: 2.25rem;\n    //padding: 0 5rem;\n  "],["\n    font-size: 2.4vmin;\n    line-height: 4vmin;\n    padding: 0 8.5vmin;\n\n    //line-height: 2.25rem;\n    //padding: 0 5rem;\n  "]),p=a(["\n    font-size: 2vmin;\n    line-height: 3.8vmin;\n    padding: 0 2rem;\n  "],["\n    font-size: 2vmin;\n    line-height: 3.8vmin;\n    padding: 0 2rem;\n  "]),s=a(["\n    //padding: 0 5rem;\n    font-size: 1.8vmin;\n    line-height: 3vmin;\n    padding: 0 8.5vmin;\n  "],["\n    //padding: 0 5rem;\n    font-size: 1.8vmin;\n    line-height: 3vmin;\n    padding: 0 8.5vmin;\n  "]),m=a(["\n    max-width: 62%;\n  "],["\n    max-width: 62%;\n  "]),g=n(0),h=i(g),b=n(17),x=i(b),y=n(54),v=i(y),w=t.SpecialtyWrapper=x.default.div.withConfig({displayName:"Specialty__SpecialtyWrapper"})(["position:relative;background:#EDEBEB;"," ",""],(0,v.default)("desktop")(l),(0,v.default)("tablet")(l)),_=t.SpecialtyPanel=x.default.div.withConfig({displayName:"Specialty__SpecialtyPanel"})(["background:",";overflow:hidden;"," "," .specialtyHeading{}"],function(e){return e.bg},(0,v.default)("desktop")(r),(0,v.default)("tablet")(o)),E=x.default.h2.withConfig({displayName:"Specialty__Heading"})(["margin:0;font-family:'Bitter',serif;font-style:normal;font-weight:400;font-size:62px;line-height:50px;letter-spacing:0.08em;text-transform:uppercase;color:rgba(255,255,255,0.2);"," ",""],(0,v.default)("tablet")(d),(0,v.default)("desktop")(f)),k=x.default.p.withConfig({displayName:"Specialty__Description"})(['font-family:"Roboto",Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;line-height:1.6rem;font-size:1.2rem;color:rgba(255,255,255,0.8);padding:0 1rem;'," ",""],(0,v.default)("tablet")(u),(0,v.default)("desktop")(c)),z=x.default.p.withConfig({displayName:"Specialty__Team"})(['font-family:"Roboto",Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;line-height:23px;font-size:14px;color:rgba(255,255,255,0.5);padding:0 1rem;'," ",""],(0,v.default)("tablet")(p),(0,v.default)("desktop")(s)),j=x.default.div.withConfig({displayName:"Specialty__ProjectsWrapper"})([""," ",""],(0,v.default)("tablet")(m),(0,v.default)("desktop")(m)),C=["#E6212B","#00B2CB","#12161E","#C700CB"];t.default=function(e){var t=e.children,n=e.props,i=e.bgIdx;return h.default.createElement(w,null,h.default.createElement(_,{bg:C[i]},h.default.createElement(E,{className:"specItem"},n.title," "),h.default.createElement("div",{className:"specItem grows"},h.default.createElement(k,null,n.description," ")),h.default.createElement(z,{className:"specItem"},n.people," ")),h.default.createElement(j,null,t))}},179:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var l=a(["\n    display: flex;\n    align-items: center;\n    min-height: 100vh;\n  "],["\n    display: flex;\n    align-items: center;\n    min-height: 100vh;\n  "]),r=a(["\n    padding: 0 5rem;\n  "],["\n    padding: 0 5rem;\n  "]),o=a(["\n    //padding: 0 15rem;\n    padding: 0 24vmin;\n  "],["\n    //padding: 0 15rem;\n    padding: 0 24vmin;\n  "]),d=n(0),f=i(d),u=n(17),c=i(u),p=n(54),s=i(p),m=c.default.div.withConfig({displayName:"Project"})([""," ",""],(0,s.default)("tablet")(l),(0,s.default)("desktop")(l)),g=c.default.section.withConfig({displayName:"Project__ProjectContent"})(["display:inline-block;padding:0 1rem;"," ",""],(0,s.default)("tablet")(r),(0,s.default)("desktop")(o)),h=c.default.h3.withConfig({displayName:"Project__Heading"})(["font-family:'Exo 2',sans-serif;font-style:normal;font-weight:700;line-height:37px;font-size:22px;letter-spacing:0.03em;text-transform:uppercase;color:#333333;"]),b=c.default.p.withConfig({displayName:"Project__Text"})(['font-family:"Roboto",Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;line-height:26px;font-size:1.1rem;letter-spacing:0.03em;color:#333333;']),x=c.default.ul.withConfig({displayName:"Project__BibList"})(["margin-top:3rem;padding-left:0;li>a{font-weight:normal;color:inherit;}"]),y=c.default.li.withConfig({displayName:"Project__BibItem"})(["padding:.5rem;list-style:none;font-family:Roboto;font-style:italic;font-weight:400;line-height:20px;font-size:14px;letter-spacing:0.03em;color:#828282;&:hover{background-color:#e0dcdc;transition:background-color 0.2s cubic-bezier(0.25,0.46,0.45,0.94);}"]),v=c.default.a.withConfig({displayName:"Project__BibLink"})([""]),w=c.default.span.withConfig({displayName:"Project__BibAuthors"})(["font-style:normal;color:#E6212B;"]),_=c.default.span.withConfig({displayName:"Project__BibYear"})(["font-style:normal;"]),E=function(e,t){var n=e.authors,i=e.title,a=e.year,l=e.link;return f.default.createElement(y,{key:t},f.default.createElement(v,{href:l,target:"_blank"},f.default.createElement(w,null,n),", "+i+", ",f.default.createElement(_,null,a)))},k=function(e){return e.children.split("\n").map(function(e,t){return f.default.createElement(b,{key:t},e)})};t.default=function(e,t){var n=e.title,i=e.description,a=e.papers;return f.default.createElement(m,{key:t},f.default.createElement(g,null,f.default.createElement(h,null,n),f.default.createElement(k,null,i),f.default.createElement(x,null,a.map(E))))}},180:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.BioBox=void 0;var l=a(["\n    &:hover {\n      background-color: #fff;\n      box-shadow: 0px 0px 17px -4px rgba(115,108,108,1);\n      transform: scale(1.05);\n      //transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n\n      div>a {opacity: 1}\n    }\n  "],["\n    &:hover {\n      background-color: #fff;\n      box-shadow: 0px 0px 17px -4px rgba(115,108,108,1);\n      transform: scale(1.05);\n      //transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n\n      div>a {opacity: 1}\n    }\n  "]),r=a(["\n    >a {\n      opacity: 0;\n    }\n  "],["\n    >a {\n      opacity: 0;\n    }\n  "]),o=n(0),d=i(o),f=n(17),u=i(f),c=n(54),p=i(c),s=t.BioBox=u.default.div.withConfig({displayName:"Bio__BioBox"})(["margin-left:5px;margin-right:5px;flex:1 1 350px;padding:0.6rem;@supports (display:grid){margin:0;}display:flex;align-items:flex-start;transition:all 0.2s cubic-bezier(0.25,0.46,0.45,0.94);",""],(0,p.default)("desktop")(l)),m=u.default.figure.withConfig({displayName:"Bio__MediaFigure"})(["margin-right:1rem;max-width:96px;max-height:96px;border-radius:50%;border:5px solid #fff;overflow:hidden;"]),g=u.default.div.withConfig({displayName:"Bio__MediaBody"})(["flex:1;"]),h=u.default.h4.withConfig({displayName:"Bio__Heading"})(["font-family:'Exo 2',serif;font-style:normal;font-weight:600;line-height:27px;font-size:1rem;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 1rem 0;"]),b=u.default.p.withConfig({displayName:"Bio"})(["font-family:Exo 2;font-style:normal;font-weight:normal;line-height:23px;font-size:1rem;color:#828282;margin-top:0;"]),x=u.default.div.withConfig({displayName:"Bio__ContactBox"})(["display:flex;align-items:flex-start;flex-wrap:nowrap;margin-bottom:1rem;>a{width:33.33%;text-align:center;font-weight:normal !important;color:#828282 !important;padding:0.5rem;border:1px solid #edebeb;margin-right:5px;transition:all 0.2s cubic-bezier(0.25,0.46,0.45,0.94);&:hover{background-color:#edebeb;}}",""],(0,p.default)("desktop")(r));t.default=function(e,t){var n=e.name,i=e.bio,a=e.img,l=e.contact;return d.default.createElement(s,{key:t},d.default.createElement(m,null,d.default.createElement("img",{src:"./bio/"+(a||"hal_9000.jpg"),alt:a})),d.default.createElement(g,null,d.default.createElement(h,null,n," "),d.default.createElement(b,null,i," "),d.default.createElement(x,null,l.mail&&d.default.createElement("a",{href:"mailto:"+l.mail},"email"),l.github&&d.default.createElement("a",{href:"https://github.com/"+l.github},"github"),l.twitter&&d.default.createElement("a",{href:"https://twitter.com/"+l.twitter},"twitter"))))}},181:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.ResearchTeam=void 0;var l=a(["\n    padding: 10rem 5rem;\n\n    @media screen and (orientation:portrait) {\n      //background: palevioletred;\n      padding: 10rem 10rem;\n    }\n  "],["\n    padding: 10rem 5rem;\n\n    @media screen and (orientation:portrait) {\n      //background: palevioletred;\n      padding: 10rem 10rem;\n    }\n  "]),r=a(["\n    padding: 10rem 5rem;\n  "],["\n    padding: 10rem 5rem;\n  "]),o=n(0),d=i(o),f=n(17),u=i(f),c=n(54),p=i(c),s=t.ResearchTeam=u.default.div.withConfig({displayName:"ResearchTeam"})(["display:flex;flex-wrap:wrap;display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));grid-auto-rows:minmax(150px,auto);grid-gap:3rem;padding:6rem 1rem;background:#F5F2F2;"," ",""],(0,p.default)("tablet")(l),(0,p.default)("desktop")(r));t.default=function(e){var t=e.children,n=e.id;return d.default.createElement(s,{id:n},t)}},57:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),l=i(a),r=n(28),o=n(17),d=i(o),f=n(158),u=i(f),c=n(159),p=i(c),s=n(161),m=i(s),g=n(176),h=i(g),b=n(178),x=i(b),y=n(179),v=i(y),w=n(180),_=i(w),E=n(181),k=i(E),z=d.default.div.withConfig({displayName:"Home__SpecialtyContainer"})([""]);t.default=(0,r.withRouteData)((0,r.withSiteData)(function(e){return l.default.createElement("div",null,l.default.createElement(u.default,{title:e.title+" | "+e.tagline,description:e.description,tagline:e.tagline,tags:e.tags,image:"https://bit-ml.github.io/tile.png"}),l.default.createElement(p.default,{pageName:"home"}),l.default.createElement(m.default,null,l.default.createElement(h.default,{props:e}),l.default.createElement(z,{id:"research"},e.specialties.map(function(e,t){return l.default.createElement(x.default,{props:e,key:t,bgIdx:t},e.projects.map(v.default))})),l.default.createElement(k.default,{id:"team"},e.people.map(_.default))))}))}});