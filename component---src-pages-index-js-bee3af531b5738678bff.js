(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return s});var a=n(0),r=n.n(a),i=n(142),o=n(141),c=n(135),s="1922222976";t.default=function(e){var t=e.data.allPrismicHomePage.edges[0].node.data,n=t.title,a=t.subtitle,s=t.body;return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:n.text}),r.a.createElement(i.a,{siteTitle:n.text,subtitle:a.text}),r.a.createElement("section",{className:"MainBody",dangerouslySetInnerHTML:{__html:s.html}}))}},131:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(130),s=n.n(c);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(132),d=n.n(u);n.d(t,"PageRenderer",function(){return d.a});var l=n(29);n.d(t,"parsePath",function(){return l.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},132:function(e,t,n){var a;e.exports=(a=n(133))&&a.default||a},133:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(46),s=n(2),u=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},134:function(e){e.exports={data:{allPrismicSiteMetadata:{edges:[{node:{data:{site_name:{text:"Kashi Samaraweera — Web application developer"},site_description:{text:"A web application developer from Sydney with over 10 years of industry experience specialising in data-driven apps. Kashi has experience in developing bespoke and large-scale web applications for government, healthcare and media."},keywords:{text:"web application, JavaScript, Node.js, PHP, .NET Core, ES2015, ES2016, ES2017, ES6, React, Microservices, AWS, Sydney, developer, programmer, front-end, back-end"},author:{text:"Kashi Samaraweera"}}}}]}}}},135:function(e,t,n){"use strict";n(28);var a=n(134),r=n(0),i=n.n(r),o=n(138),c=n.n(o),s=n(131),u=function(e){var t=e.siteMetadata,n=e.title,a=e.description,r=e.author,o=e.keywords,s=t.allPrismicSiteMetadata.edges[0].node.data,u=s.site_name,d=s.site_description,l=s.keywords,p=s.author,f=u.text,m=d.text,h=l,y=p.text,g=n||f,w=a||m,v=r||y,b=o||h;return i.a.createElement(c.a,{htmlAttributes:{lang:"en-AU"},title:g,meta:[{name:"description",content:w},{property:"og:title",content:g},{property:"og:description",content:w},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:v},{name:"twitter:title",content:g},{name:"twitter:description",content:w}].concat(b.length>0?{name:"keywords",content:b.join(", ")}:[])})};t.a=function(e){return i.a.createElement(s.StaticQuery,{query:"369661623",render:function(t){return i.a.createElement(u,Object.assign({siteMetadata:t},e))},data:a})}},136:function(e){e.exports={data:{site:{siteMetadata:{title:"Kashi Samaraweera — Web application developer"}}}}},137:function(e,t,n){},139:function(e,t,n){},141:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(136),o=n(0),c=n.n(o),s=n(131),u=(n(137),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).articleRef=c.a.createRef(),t.shadow=function(e){var n=t.articleRef.current;if(!window.matchMedia("screen and (min-width: 768px)").matches)return n.style.boxShadow="",void(n.style.transform="");var a=e.clientX,r=e.clientY;if(a&&r){var i=n.getBoundingClientRect(),o=i.top,c=i.right,s=i.bottom,u=i.left,d=c-u,l=s-o,p=a-(u+c)/2,f=r-(o+s)/2,m=Math.round(p/(d/2)*100)/100,h=Math.round(f/(l/2)*100)/100,y=-(20*m)+"px "+-(20*h)+"px 60px rgba(0,0,0,0.5)";n.style.boxShadow=y;var g="rotateX("+-(2*m)+"deg)",w="rotateY("+-(2*h)+"deg)";n.style.transform=g+" "+w}},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("resize",this.shadow)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.shadow)},n.render=function(){var e=this,t=this.props.children;return c.a.createElement(s.StaticQuery,{query:"1044757290",render:function(n){return c.a.createElement("article",{className:"PageMain",onMouseMove:e.shadow,ref:e.articleRef},t)},data:i})},t}(c.a.Component));t.a=u},142:function(e,t,n){"use strict";var a=n(4),r=n.n(a),i=n(0),o=n.n(i),c=(n(139),function(e){var t=e.siteTitle,n=e.subtitle;return o.a.createElement("header",{className:"Header"},o.a.createElement("h1",null,t),o.a.createElement("h2",null,n))});c.propTypes={siteTitle:r.a.string,subtitle:r.a.string},c.defaultProps={siteTitle:""};var s=c;t.a=s}}]);
//# sourceMappingURL=component---src-pages-index-js-bee3af531b5738678bff.js.map