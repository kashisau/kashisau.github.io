(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{129:function(t,e,n){"use strict";n.r(e);var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(145),u=n(136),c=(n(28),n(161),n(132)),l=n(163),p=n.n(l),d=n(148),h=n.n(d),m=(n(141),n(149)),f=n.n(m),y=n(165),g=n.n(y),v=n(142),b=n.n(v),w=n(143),x=(n(144),function(t){function e(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this).state={loaded:!1},e}r()(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=f()(h.a.mark(function t(){var e,n;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.photo,t.next=3,e.exif;case 3:n=t.sent,this.setState({photo:e,exif:n});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),n.render=function(){var t=this.props.className,e=(this.state.photo?this.state:this.props).photo,n=e.prethumb,a=e.title,r=e.thumb,o=b()(g.a.photo,t);return i.a.createElement("div",{className:g.a.boundary},i.a.createElement(w.LazyLoadImage,{className:o,placeholderSrc:n,effect:"blur",alt:a.text,src:r}))},e}(i.a.Component));x.defaultProps={loadOnIntersection:!0,targetSize:"Desktop",showPrethumb:!0};var E=x,k=function(t){var e=t.title,n=t.slug;return i.a.createElement("li",{className:p.a.photoListItem},i.a.createElement("article",null,i.a.createElement(c.Link,{to:"/"+n,className:p.a.link},i.a.createElement(E,{photo:t}),i.a.createElement("h2",{className:p.a.title},e.text))))},S=n(166),P=n.n(S),q=function(t){var e=t.photos,n=t.children;return i.a.createElement("section",{className:"MainBody"},n,i.a.createElement("ol",{className:P.a.photoList},e.map(function(t,e){return i.a.createElement(k,Object.assign({key:e},t))})))},L=(n(30),n(167)),T=n.n(L),N=n(175),R=n.n(N);function _(){return(_=f()(h.a.mark(function t(e){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",j(e).then(I));case 1:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function j(t){return C.apply(this,arguments)}function C(){return(C=f()(h.a.mark(function t(e){var n;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={redirect:"follow",cache:"no-cache",headers:{"Content-Type":"image/jpeg",Range:"bytes=0-65536"}},t.abrupt("return",R()(e,n).then(function(t){return"buffer"in t?t.buffer():t.arrayBuffer()}));case 2:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function I(t){return M.apply(this,arguments)}function M(){return(M=f()(h.a.mark(function t(e){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(t,n){try{t(T.a.create(e).parse())}catch(t){n(t)}}));case 1:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var A={getExifFromUrl:function(t){return _.apply(this,arguments)}};n.d(e,"query",function(){return U});var K=A.getExifFromUrl,O=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={photos:[]},n.state.photos=e.data.allPrismicPhoto.edges.reduce(function(t,e){var n=e.node.data,a=n.photo_file.url,r=n.photo_file,o=e.node.slugs[0],i=K(a),s={title:n.title,description:n.photo_description,url:a,responsiveImages:r,slug:o,exif:i,thumb:n.photo_file.Thumb.url,prethumb:n.photo_file.Prethumb.url};return t.push(s),t},[]),n}return r()(e,t),e.prototype.render=function(){var t=this.state.photos;return i.a.createElement(q,{photos:t},i.a.createElement(u.a,{title:"Photos",description:"A collection of photos by Kashi Samaraweera"}),i.a.createElement(s.a,{siteTitle:"Photos",subtitle:"shutterbug"}))},e}(i.a.Component),U="2567085665";e.default=O},132:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return m}),n.d(e,"StaticQueryContext",function(){return d}),n.d(e,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(131),u=n.n(s);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return s.withPrefix}),n.d(e,"navigate",function(){return s.navigate}),n.d(e,"push",function(){return s.push}),n.d(e,"replace",function(){return s.replace}),n.d(e,"navigateTo",function(){return s.navigateTo});var c=n(133),l=n.n(c);n.d(e,"PageRenderer",function(){return l.a});var p=n(29);n.d(e,"parsePath",function(){return p.a});var d=r.a.createContext({}),h=function(t){return r.a.createElement(d.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},133:function(t,e,n){var a;t.exports=(a=n(134))&&a.default||a},134:function(t,e,n){"use strict";n.r(e);n(28);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(46),u=n(2),c=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=c},135:function(t){t.exports={data:{allPrismicSiteMetadata:{edges:[{node:{data:{site_name:{text:"Kashi Samaraweera — Web application developer"},site_description:{text:"A web application developer from Sydney with over 10 years of industry experience specialising in data-driven apps. Kashi has experience in developing bespoke and large-scale web applications for government, healthcare and media."},keywords:{text:"web application, JavaScript, Node.js, PHP, .NET Core, ES2015, ES2016, ES2017, ES6, React, Microservices, AWS, Sydney, developer, programmer, front-end, back-end"},author:{text:"Kashi Samaraweera"}}}}]}}}},136:function(t,e,n){"use strict";n(28);var a=n(135),r=n(0),o=n.n(r),i=n(137),s=n.n(i),u=n(132),c=function(t){var e=t.siteMetadata,n=t.title,a=t.description,r=t.author,i=t.keywords,u=e.allPrismicSiteMetadata.edges[0].node.data,c=u.site_name,l=u.site_description,p=u.keywords,d=u.author,h=c.text,m=l.text,f=p,y=d.text,g=n||h,v=a||m,b=r||y,w=i||f;return o.a.createElement(s.a,{htmlAttributes:{lang:"en-AU"},title:g,meta:[{name:"description",content:v},{property:"og:title",content:g},{property:"og:description",content:v},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:b},{name:"twitter:title",content:g},{name:"twitter:description",content:v}].concat(w.length>0?{name:"keywords",content:w.join(", ")}:[])})};e.a=function(t){return o.a.createElement(u.StaticQuery,{query:"369661623",render:function(e){return o.a.createElement(c,Object.assign({siteMetadata:e},t))},data:a})}},140:function(t,e,n){},145:function(t,e,n){"use strict";var a=n(4),r=n.n(a),o=n(0),i=n.n(o),s=(n(140),function(t){var e=t.siteTitle,n=t.subtitle;return i.a.createElement("header",{className:"Header"},i.a.createElement("h1",null,e),i.a.createElement("h2",null,n))});s.propTypes={siteTitle:r.a.string,subtitle:r.a.string},s.defaultProps={siteTitle:""};var u=s;e.a=u},163:function(t,e,n){t.exports={photoListItem:"photo-list-item-module--photoListItem--3oGRw",link:"photo-list-item-module--link--1-skz",thumb:"photo-list-item-module--thumb--3gCIv",title:"photo-list-item-module--title--3Uoeu"}},165:function(t,e,n){t.exports={photoPreload:"photo-module--photoPreload--1XOLi",photo:"photo-module--photo--25bxK",boundary:"photo-module--boundary--2odlt"}},166:function(t,e,n){t.exports={photoList:"photos-index-layout-module--photoList--2bKOm"}}}]);
//# sourceMappingURL=component---src-pages-photos-js-cd4be3ad7b8d5df6853d.js.map