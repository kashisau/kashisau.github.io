(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{126:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(136),o=n(137);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},130:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return h}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(129),u=n.n(s);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return s.withPrefix}),n.d(e,"navigate",function(){return s.navigate}),n.d(e,"push",function(){return s.push}),n.d(e,"replace",function(){return s.replace}),n.d(e,"navigateTo",function(){return s.navigateTo});var c=n(131),d=n.n(c);n.d(e,"PageRenderer",function(){return d.a});var l=n(29);n.d(e,"parsePath",function(){return l.a});var p=r.a.createContext({}),f=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},131:function(t,e,n){var a;t.exports=(a=n(133))&&a.default||a},132:function(t){t.exports={data:{site:{siteMetadata:{title:"Website 2018"}}}}},133:function(t,e,n){"use strict";n.r(e);n(28);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(49),u=n(2),c=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=c},134:function(t,e,n){},135:function(t){t.exports={data:{site:{siteMetadata:{title:"Website 2018",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"Kashi Samaraweera"}}}}},136:function(t,e,n){"use strict";var a=n(132),r=n(0),i=n.n(r),o=n(4),s=n.n(o),u=n(130),c=(n(134),function(t){var e=t.children,n=i.a.createRef(),r=function(t){var e=n.current;if(!window.matchMedia("screen and (min-width: 768px)").matches)return e.style.boxShadow="",void(e.style.transform="");var a=t.clientX,r=t.clientY;if(a&&r){var i=e.getBoundingClientRect(),o=i.top,s=i.right,u=i.bottom,c=i.left,d=s-c,l=u-o,p=a-(c+s)/2,f=r-(o+u)/2,h=Math.round(p/(d/2)*100)/100,m=Math.round(f/(l/2)*100)/100,y=-(20*h)+"px "+-(20*m)+"px 60px rgba(0,0,0,0.5)";e.style.boxShadow=y;var g="rotateX("+-(2*h)+"deg)",w="rotateY("+-(2*m)+"deg)";e.style.transform=g+" "+w}};return window.addEventListener("resize",r),i.a.createElement(u.StaticQuery,{query:"2994927498",render:function(t){return i.a.createElement("article",{className:"PageMain",onMouseMove:r,ref:n},e)},data:a})});c.propTypes={children:s.a.node.isRequired};var d=c;e.a=d},137:function(t,e,n){"use strict";var a=n(135),r=n(0),i=n.n(r),o=n(4),s=n.n(o),u=n(138),c=n.n(u),d=n(130);function l(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,s=t.title;return i.a.createElement(d.StaticQuery,{query:f,render:function(t){var a=e||t.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired};var p=l,f="1691925375";e.a=p}}]);
//# sourceMappingURL=component---src-pages-404-js-34fcbd7c394e8115123f.js.map