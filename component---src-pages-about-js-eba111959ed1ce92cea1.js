(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(151),o=n(170),l=n(155),c=n(156),s=n(171),u=n.n(s);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(c.a,{title:"Info"}),r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",{className:"col-7"},r.a.createElement("h1",null," About "),r.a.createElement("p",null," I'm Violet Lingenfelter. I'm originally from Santa Cruz, California, but right now I'm going to Northeastern University in Boston, Massachusetts. I study Environmental Science, with a concentration in Urban Studies and a minor in Computer Science."),r.a.createElement("p",null," Previously, I've worked at several data visualization and spatial analysis postions. Right now, I'm working on my capstone with the MBTA. I'm developing a new way to visualize crowding on buses and explore how crowding impacts the system."),r.a.createElement("p",null," In my free time, I like to knit, travel, and blog about public transportation. You can check out my ",r.a.createElement(o.OutboundLink,{href:"https://www.etsy.com/shop/LingenfelterStudio"},"Etsy")," or my ",r.a.createElement(i.a,{to:"/blog/"},"blog"),".")),r.a.createElement("div",{className:"col-5"},r.a.createElement("h1",null," Contact "),r.a.createElement("p",null,"Send me an email at ",r.a.createElement("a",{href:"mailto:vlingenfelter5@gmail.com"},"vlingenfelter5@gmail.com"),r.a.createElement("br",null),"Check me out on ",r.a.createElement(o.OutboundLink,{href:"https://www.linkedin.com/in/violet-lingenfelter/"},"LinkedIn"),r.a.createElement("br",null),"See some of my code on ",r.a.createElement(o.OutboundLink,{href:"https://github.com/vlingenfelter"},"GitHub"),r.a.createElement("br",null),"Or see some of my photos on ",r.a.createElement(o.OutboundLink,{href:"https://www.instagram.com/vlingenfelter/"},"Instagram")),r.a.createElement("hr",null),r.a.createElement("p",null,"If you want, you can also take a look at my ",r.a.createElement("a",{href:u.a}," resume ")))))}},151:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(33),c=n.n(l);n.d(t,"a",function(){return c.a});n(152);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,n){var a;e.exports=(a=n(154))&&a.default||a},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Violet Lingenfelter"}}}}},154:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(55),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},155:function(e,t,n){"use strict";var a=n(153),r=n(0),i=n.n(r),o=n(4),l=n.n(o),c=n(151),s=function(){return i.a.createElement("div",{style:{background:"honeydew"}},i.a.createElement("div",{style:{margin:"0 auto",textAlign:"center",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("div",{className:"horizontal"}),i.a.createElement(c.a,{to:"/projects/",className:"nav-link"},"Projects"),i.a.createElement(c.a,{to:"/blog/",className:"nav-link"},"Blog"),i.a.createElement(c.a,{to:"/about/",className:"nav-link"},"Info"),i.a.createElement("div",{className:"horizontal"})))},u=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"honeydew",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",textAlign:"center",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.a,{to:"/",style:{color:"black",textDecoration:"none"}},t)),i.a.createElement(s,null)))};u.propTypes={siteTitle:l.a.string},u.defaultProps={siteTitle:""};var m=u,d=function(){return i.a.createElement("div",{style:{background:"honeydew",padding:"3rem"}},i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("p",null,"Made with ",i.a.createElement("span",{style:{color:"lightSalmon"}},"❤")," in Hollister, CA",i.a.createElement("br",null),"Powered by ",i.a.createElement("a",{href:"https://github.com/gatsbyjs/gatsby"},"Gatsby")," in Boston, MA")))},p=(n(158),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}}," ",t)," ",i.a.createElement(d,null))},data:a})});p.propTypes={children:l.a.node.isRequired};t.a=p},156:function(e,t,n){"use strict";var a=n(157),r=n(0),i=n.n(r),o=n(4),l=n.n(o),c=n(159),s=n.n(c),u=n(151);function m(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(u.b,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m;var d="1025518380"},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Violet Lingenfelter",description:"violetlingenfelter.com",author:"Violet Lingenfelter"}}}}},170:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.OutboundLink=l;var r=a(n(74)),i=a(n(0)),o=a(n(4));function l(e){return i.default.createElement("a",(0,r.default)({},e,{onClick:function(t){"function"==typeof e.onClick&&e.onClick(t);var n=!0;return(0!==t.button||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||t.defaultPrevented)&&(n=!1),e.target&&"_self"!==e.target.toLowerCase()&&(n=!1),window.ga?window.ga("send","event",{eventCategory:"Outbound Link",eventAction:"click",eventLabel:e.href,transport:n?"beacon":"",hitCallback:function(){n&&(document.location=e.href)}}):n&&(document.location=e.href),!1}}))}l.propTypes={href:o.default.string,target:o.default.string,onClick:o.default.func}},171:function(e,t,n){e.exports=n.p+"static/VioletLingenfelterResume-3602a14558534bca78521a01538782bd.pdf"}}]);
//# sourceMappingURL=component---src-pages-about-js-eba111959ed1ce92cea1.js.map