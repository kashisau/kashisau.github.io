(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{129:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(136),o=(a(28),a(162),a(133)),s=a(143),l=a.n(s),d=a(164),c=a.n(d),u=function(e){var t=e.title,a=e.slug;return r.a.createElement("li",{className:c.a.photoListItem},r.a.createElement(o.Link,{to:"/"+a,className:c.a.link},r.a.createElement("div",{className:c.a.photoFrame},r.a.createElement(l.a,{className:c.a.photo,fluid:e.file.localFile.childImageSharp.fluid})),r.a.createElement("h2",{className:c.a.title},t.text)))},f=a(139),p=a(165),h=a.n(p),m=function(e){var t=e.photos,a=e.children;return r.a.createElement("section",{className:"MainBody"},r.a.createElement(f.a,{siteTitle:"Photos",className:h.a.Header}),r.a.createElement("p",{className:h.a.intro},"A selection of photos taken by Kashi Samaraweera"),a,r.a.createElement("ol",{className:h.a.photoList},t.map(function(e,t){return r.a.createElement(u,Object.assign({key:t},e))})))},g=a(166),y=a.n(g).a;a.d(t,"query",function(){return b});var b="3568048335";t.default=function(e){var t=e.data.allPrismicPhoto.edges.reduce(function(e,t){var a=t.node.data,i=a.photo_file.url,r=t.node.slugs[0],n=a.photo_file.localFile.fields.exif,o={width:n.exif.PixelXDimension,height:n.exif.PixelYDimension},s=y.getAspectRatio(o),l={title:a.title,description:a.photo_description,aspectRatio:s,file:a.photo_file,url:i,slug:r,exif:n};return e.push(l),e},[]);return r.a.createElement(m,{photos:t},r.a.createElement(n.a,{title:"Photos",description:"A collection of photos by Kashi Samaraweera"}))}},132:function(e,t,a){var i;e.exports=(i=a(135))&&i.default||i},133:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var i=a(0),r=a.n(i),n=a(4),o=a.n(n),s=a(131),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var d=a(132),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(29);a.d(t,"parsePath",function(){return u.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},134:function(e){e.exports={data:{allPrismicSiteMetadata:{edges:[{node:{data:{site_name:{text:"Kashi Samaraweera — Web application developer"},site_description:{text:"A web application developer from Sydney with over 10 years of industry experience specialising in data-driven apps. Kashi has experience in developing bespoke and large-scale web applications for government, healthcare and media."},keywords:{text:"web application, JavaScript, Node.js, PHP, .NET Core, ES2015, ES2016, ES2017, ES6, React, Microservices, AWS, Sydney, developer, programmer, front-end, back-end"},author:{text:"Kashi Samaraweera"}}}}]}}}},135:function(e,t,a){"use strict";a.r(t);a(28);var i=a(0),r=a.n(i),n=a(4),o=a.n(n),s=a(47),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},136:function(e,t,a){"use strict";a(28);var i=a(134),r=a(0),n=a.n(r),o=a(140),s=a.n(o),l=a(133),d=function(e){var t=e.siteMetadata,a=e.title,i=e.description,r=e.author,o=e.keywords,l=t.allPrismicSiteMetadata.edges[0].node.data,d=l.site_name,c=l.site_description,u=l.keywords,f=l.author,p=d.text,h=c.text,m=u,g=f.text,y=a||p,b=i||h,v=r||g,w=o||m;return n.a.createElement(s.a,{htmlAttributes:{lang:"en-AU"},title:y,meta:[{name:"description",content:b},{property:"og:title",content:y},{property:"og:description",content:b},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:v},{name:"twitter:title",content:y},{name:"twitter:description",content:b}].concat(w.length>0?{name:"keywords",content:w.join(", ")}:[])})};t.a=function(e){return n.a.createElement(l.StaticQuery,{query:"369661623",render:function(t){return n.a.createElement(d,Object.assign({siteMetadata:t},e))},data:i})}},137:function(e,t,a){var i;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var n=typeof i;if("string"===n||"number"===n)e.push(this&&this[i]||i);else if(Array.isArray(i))e.push(r.apply(this,i));else if("object"===n)for(var o in i)a.call(i,o)&&i[o]&&e.push(this&&this[o]||o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}()},138:function(e,t,a){e.exports={Header:"header-module--Header--10RMb",title:"header-module--title--3UnVV",subtitle:"header-module--subtitle--3ykwq"}},139:function(e,t,a){"use strict";var i=a(4),r=a.n(i),n=a(0),o=a.n(n),s=a(137),l=a.n(s),d=a(138),c=a.n(d),u=function(e){var t=e.siteTitle,a=e.subtitle,i=e.className,r=l()(c.a.Header,i);return o.a.createElement("header",{className:r},o.a.createElement("h1",{className:c.a.title},t),o.a.createElement("h2",{className:c.a.subtitle},a))};u.propTypes={siteTitle:r.a.string,subtitle:r.a.string},u.defaultProps={siteTitle:""};var f=u;t.a=f},143:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,n=i(a(6)),o=i(a(46)),s=i(a(141)),l=i(a(142)),d=i(a(0)),c=i(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},h=[];var m=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+r+"<img "+s+l+t+o+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,r=e.onError,n=(0,s.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},n,{onLoad:i,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!0,n=!1,s=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!1,n=!0),"undefined"==typeof window&&(i=!1,r=!1),t.critical&&(i=!0,r=!1,n=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:r,IOSupported:n,fadeIn:s,hasNoScript:c,seenBefore:l},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.Tag,w="boolean"==typeof b?"lightgray":b,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),E=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),x={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(h){var L=h;return d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),L.base64&&d.default.createElement(y,(0,l.default)({src:L.base64},x)),L.tracedSVG&&d.default.createElement(y,(0,l.default)({src:L.tracedSVG},x)),w&&d.default.createElement(v,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,L.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),d.default.createElement("source",{srcSet:L.srcSet,sizes:L.sizes}),d.default.createElement(y,{alt:a,title:t,src:L.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},L))}}))}if(m){var R=m,I=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},n);return"inherit"===n.display&&delete I.display,d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&d.default.createElement(y,(0,l.default)({src:R.base64},x)),R.tracedSVG&&d.default.createElement(y,(0,l.default)({src:R.tracedSVG},x)),w&&d.default.createElement(v,{title:t,style:{backgroundColor:w,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),d.default.createElement(y,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,Tag:c.default.string};var S=b;t.default=S},162:function(e,t,a){"use strict";a(163)("link",function(e){return function(t){return e(this,"a","href",t)}})},163:function(e,t,a){var i=a(23),r=a(21),n=a(22),o=/"/g,s=function(e,t,a,i){var r=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(i).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),i(i.P+i.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},164:function(e,t,a){e.exports={photoListItem:"photo-list-item-module--photoListItem--3oGRw",photo:"photo-list-item-module--photo--KBwWi",photoFrame:"photo-list-item-module--photoFrame--3miGw",title:"photo-list-item-module--title--3Uoeu"}},165:function(e,t,a){e.exports={Header:"photos-index-layout-module--Header--1Jjsx",intro:"photos-index-layout-module--intro--5ixgj",photoList:"photos-index-layout-module--photoList--2bKOm"}},166:function(e,t,a){a(66);var i=["3:2","2:3","4:3","3:4","16:9","9:16","5:4","4:5","1:1"];t.getAspectRatio=function(e){var t=e.width/e.height;return i.reduce(function(e,a){var i=a.split(":"),r=parseFloat(i.shift()),n=parseFloat(i.shift());return Math.round(r/t*100)/100===n?a:e},void 0)}}}]);
//# sourceMappingURL=component---src-pages-photos-js-880abaaf75dba5bd667b.js.map