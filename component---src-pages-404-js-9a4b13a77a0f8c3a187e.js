(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(155),o=a(156);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},151:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(152);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Violet Lingenfelter"}}}}},154:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},155:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(151),s=function(){return i.a.createElement("div",{style:{background:"honeydew"}},i.a.createElement("div",{style:{margin:"0 auto",textAlign:"center",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("div",{className:"horizontal"}),i.a.createElement(c.a,{to:"/projects/",className:"nav-link"},"Projects"),i.a.createElement(c.a,{to:"/blog/",className:"nav-link"},"Blog"),i.a.createElement(c.a,{to:"/about/",className:"nav-link"},"Info"),i.a.createElement("div",{className:"horizontal"})))},u=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"honeydew",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",textAlign:"center",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.a,{to:"/",style:{color:"black",textDecoration:"none"}},t)),i.a.createElement(s,null)))};u.propTypes={siteTitle:l.a.string},u.defaultProps={siteTitle:""};var d=u,m=function(){return i.a.createElement("div",{style:{background:"honeydew",padding:"3rem"}},i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("p",null,"Made with ",i.a.createElement("span",{style:{color:"lightSalmon"}},"❤")," in Hollister, CA",i.a.createElement("br",null),"Powered by ",i.a.createElement("a",{href:"https://github.com/gatsbyjs/gatsby"},"Gatsby")," in Boston, MA")))},p=(a(158),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}}," ",t)," ",i.a.createElement(m,null))},data:n})});p.propTypes={children:l.a.node.isRequired};t.a=p},156:function(e,t,a){"use strict";var n=a(157),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(159),s=a.n(c),u=a(151);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(u.b,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var m="1025518380"},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Violet Lingenfelter",description:"Personal site for Violet Lingenfelter",author:"Violet Lingenfelter"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-9a4b13a77a0f8c3a187e.js.map