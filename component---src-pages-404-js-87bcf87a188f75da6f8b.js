(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{126:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(147),o=n(136);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},132:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(131),s=n.n(c);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(133),d=n.n(u);n.d(t,"PageRenderer",function(){return d.a});var l=n(29);n.d(t,"parsePath",function(){return l.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},133:function(e,t,n){var a;e.exports=(a=n(135))&&a.default||a},134:function(e){e.exports={data:{allPrismicSiteMetadata:{edges:[{node:{data:{site_name:{text:"Kashi Samaraweera — Web application developer"},site_description:{text:"A web application developer from Sydney with over 10 years of industry experience specialising in data-driven apps. Kashi has experience in developing bespoke and large-scale web applications for government, healthcare and media."},keywords:{text:"web application, JavaScript, Node.js, PHP, .NET Core, ES2015, ES2016, ES2017, ES6, React, Microservices, AWS, Sydney, developer, programmer, front-end, back-end"},author:{text:"Kashi Samaraweera"}}}}]}}}},135:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(47),s=n(2),u=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},136:function(e,t,n){"use strict";n(28);var a=n(134),r=n(0),i=n.n(r),o=n(137),c=n.n(o),s=n(132),u=function(e){var t=e.siteMetadata,n=e.title,a=e.description,r=e.author,o=e.keywords,s=t.allPrismicSiteMetadata.edges[0].node.data,u=s.site_name,d=s.site_description,l=s.keywords,p=s.author,f=u.text,h=d.text,m=l,y=p.text,w=n||f,g=a||h,v=r||y,b=o||m;return i.a.createElement(c.a,{htmlAttributes:{lang:"en-AU"},title:w,meta:[{name:"description",content:g},{property:"og:title",content:w},{property:"og:description",content:g},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:v},{name:"twitter:title",content:w},{name:"twitter:description",content:g}].concat(b.length>0?{name:"keywords",content:b.join(", ")}:[])})};t.a=function(e){return i.a.createElement(s.StaticQuery,{query:"369661623",render:function(t){return i.a.createElement(u,Object.assign({siteMetadata:t},e))},data:a})}},142:function(e){e.exports={data:{site:{siteMetadata:{title:"Kashi Samaraweera — Web application developer"}}}}},143:function(e,t,n){},147:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(142),o=n(0),c=n.n(o),s=n(132),u=(n(143),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).articleRef=c.a.createRef(),t.shadow=function(e){var n=t.articleRef.current;if(!window.matchMedia("screen and (min-width: 768px)").matches)return n.style.boxShadow="",void(n.style.transform="");var a=e.clientX,r=e.clientY;if(a&&r){var i=n.getBoundingClientRect(),o=i.top,c=i.right,s=i.bottom,u=i.left,d=c-u,l=s-o,p=a-(u+c)/2,f=r-(o+s)/2,h=Math.round(p/(d/2)*100)/100,m=Math.round(f/(l/2)*100)/100,y=-(20*h)+"px "+-(20*m)+"px 60px rgba(0,0,0,0.5)";n.style.boxShadow=y;var w="rotateX("+-(2*h)+"deg)",g="rotateY("+-(2*m)+"deg)";n.style.transform=w+" "+g}},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("resize",this.shadow)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.shadow)},n.render=function(){var e=this,t=this.props.children;return c.a.createElement(s.StaticQuery,{query:"1044757290",render:function(n){return c.a.createElement("article",{className:"PageMain",onMouseMove:e.shadow,ref:e.articleRef},t)},data:i})},t}(c.a.Component));t.a=u}}]);
//# sourceMappingURL=component---src-pages-404-js-87bcf87a188f75da6f8b.js.map