(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{134:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(6),i=n.n(a),l=(n(155),function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("article",{className:"PageMain"},e)},t}(o.a.Component)),u=n(140),s=(n(68),n(166)),c=n.n(s),f=n(142),p=n.n(f),d=n(143),h=(n(144),function(e){var t=e.photo,n=t.prethumb,r=t.title.text,a=t.file,i=t.exif,l=new Date(1e3*i.tags.DateTimeOriginal),u=i.tags.ExposureTime,s=u>=1?u+"s":"1/"+parseInt(1/u)+"s",f=i.tags.LensModel,h=p()(c.a.fullPhoto,c.a["ratio"+t.aspectRatio.split(":").join("x")]);return o.a.createElement("article",null,o.a.createElement("div",{className:p()(c.a.boundary)},o.a.createElement(d.LazyLoadImage,{className:h,placeholderSrc:n,effect:"blur",alt:r,src:a.Desktop.url})),o.a.createElement("header",null,o.a.createElement("h1",null,r),o.a.createElement("ul",{className:c.a.data},o.a.createElement("li",{className:c.a.photoDate},o.a.createElement("time",{dateTime:l.toISOString()},l.toLocaleDateString()+" at "+l.toLocaleTimeString())),o.a.createElement("li",{className:c.a.cameraModel},o.a.createElement("span",{hidden:!0},"Camera: "),i.tags.Model),o.a.createElement("li",{className:c.a.focalLength},o.a.createElement("span",{hidden:!0},"Focal length: "),i.tags.FocalLength,"mm"),o.a.createElement("li",{className:c.a.apeture},o.a.createElement("span",{hidden:!0},"Apeture: "),"f/",i.tags.FNumber,"mm"),o.a.createElement("li",{className:c.a.shutterSeed},o.a.createElement("span",{hidden:!0},"Shutter speed: "),s),o.a.createElement("li",{className:c.a.lens},o.a.createElement("span",{hidden:!0},"Lens: "),f))),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.description.html}}))});t.default=function(e){var t=e.pageContext;console.log("PHOTO: ",t);var n=t.title.text;return o.a.createElement(l,null,o.a.createElement(u.a,{title:n}),o.a.createElement(h,{photo:t}))}},136:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return y}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return d}),n.d(t,"useStaticQuery",function(){return h});var r=n(0),o=n.n(r),a=n(4),i=n.n(a),l=n(135),u=n.n(l);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(137),c=n.n(s);n.d(t,"PageRenderer",function(){return c.a});var f=n(29);n.d(t,"parsePath",function(){return f.a});var p=o.a.createContext({}),d=function(e){return o.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})},h=function(e){o.a.useContext;var t=o.a.useContext(p);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},137:function(e,t,n){var r;e.exports=(r=n(139))&&r.default||r},138:function(e){e.exports={data:{allPrismicSiteMetadata:{edges:[{node:{data:{site_name:{text:"Kashi Samaraweera — Web application developer"},site_description:{text:"A web application developer from Sydney with over 10 years of industry experience specialising in data-driven apps. Kashi has experience in developing bespoke and large-scale web applications for government, healthcare and media."},keywords:{text:"web application, JavaScript, Node.js, PHP, .NET Core, ES2015, ES2016, ES2017, ES6, React, Microservices, AWS, Sydney, developer, programmer, front-end, back-end"},author:{text:"Kashi Samaraweera"}}}}]}}}},139:function(e,t,n){"use strict";n.r(t);n(28);var r=n(0),o=n.n(r),a=n(4),i=n.n(a),l=n(47),u=n(2),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},140:function(e,t,n){"use strict";n(28);var r=n(138),o=n(0),a=n.n(o),i=n(141),l=n.n(i),u=n(136),s=function(e){var t=e.siteMetadata,n=e.title,r=e.description,o=e.author,i=e.keywords,u=t.allPrismicSiteMetadata.edges[0].node.data,s=u.site_name,c=u.site_description,f=u.keywords,p=u.author,d=s.text,h=c.text,y=f,b=p.text,m=n||d,v=r||h,g=o||b,w=i||y;return a.a.createElement(l.a,{htmlAttributes:{lang:"en-AU"},title:m,meta:[{name:"description",content:v},{property:"og:title",content:m},{property:"og:description",content:v},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:g},{name:"twitter:title",content:m},{name:"twitter:description",content:v}].concat(w.length>0?{name:"keywords",content:w.join(", ")}:[])})};t.a=function(e){return a.a.createElement(u.StaticQuery,{query:"369661623",render:function(t){return a.a.createElement(s,Object.assign({siteMetadata:t},e))},data:r})}},142:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(o.apply(this,r));else if("object"===a)for(var i in r)n.call(r,i)&&r[i]&&e.push(this&&this[i]||i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},143:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){e.exports=n(0)},function(e,t,n){e.exports=n(10)()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return"undefined"!=typeof window&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n(0)),a=n(1),i=s(n(4)),l=s(n(12)),u=s(n(2));function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=e.afterLoad,o=e.beforeLoad,a=e.scrollPosition,i=e.visibleByDefault;return n.state={visible:i},i&&(o(),r()),n.onVisible=n.onVisible.bind(n),n.isScrollTracked=a&&Number.isFinite(a.x)&&a.x>=0&&Number.isFinite(a.y)&&a.y>=0,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidUpdate",value:function(e,t){t.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var e=this.props,t=e.className,n=e.height,r=e.placeholder,a=e.scrollPosition,s=e.style,c=e.threshold,f=e.width;return this.isScrollTracked||(0,u.default)()?o.default.createElement(i.default,{className:t,height:n,onVisible:this.onVisible,placeholder:r,scrollPosition:a,style:s,threshold:c,width:f}):o.default.createElement(l.default,{className:t,height:n,onVisible:this.onVisible,placeholder:r,style:s,threshold:c,width:f})}}]),t}();c.propTypes={afterLoad:a.PropTypes.func,beforeLoad:a.PropTypes.func,visibleByDefault:a.PropTypes.bool},c.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},visibleByDefault:!1},t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=s(n(0)),i=s(n(5)),l=n(1),u=s(n(2));function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=(0,u.default)();if(n.LAZY_LOAD_OBSERVER={supportsObserver:r},r){var o=e.threshold;n.LAZY_LOAD_OBSERVER.observer=new IntersectionObserver(n.checkIntersections,{rootMargin:o+"px"})}return n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"checkIntersections",value:function(e){e.forEach(function(e){e.isIntersecting&&e.target.onVisible()})}},{key:"componentDidMount",value:function(){this.placeholder&&this.LAZY_LOAD_OBSERVER&&this.LAZY_LOAD_OBSERVER.observer&&(this.placeholder.onVisible=this.props.onVisible,this.LAZY_LOAD_OBSERVER.observer.observe(this.placeholder)),this.LAZY_LOAD_OBSERVER&&!this.LAZY_LOAD_OBSERVER.supportsObserver&&this.updateVisibility()}},{key:"componentWillUnMount",value:function(){this.LAZY_LOAD_OBSERVER&&this.LAZY_LOAD_OBSERVER.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.LAZY_LOAD_OBSERVER&&!this.LAZY_LOAD_OBSERVER.supportsObserver&&this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.scrollPosition,t=this.placeholder.getBoundingClientRect(),n=i.default.findDOMNode(this.placeholder).style,r=parseInt(n.getPropertyValue("margin-left"),10)||0,o=parseInt(n.getPropertyValue("margin-top"),10)||0;return{bottom:e.y+t.bottom+o,left:e.x+t.left+r,right:e.x+t.right+r,top:e.y+t.top+o}}},{key:"isPlaceholderInViewport",value:function(){if("undefined"==typeof window||!this.placeholder)return!1;var e=this.props,t=e.scrollPosition,n=e.threshold,r=this.getPlaceholderBoundingBox(t),o=t.y+window.innerHeight,a=t.x,i=t.x+window.innerWidth,l=t.y;return Boolean(l-n<=r.bottom&&o+n>=r.top&&a-n<=r.right&&i+n>=r.left)}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,o=t.height,i=t.placeholder,l=t.style,u=t.width;return i&&"function"!=typeof i.type?a.default.cloneElement(i,{ref:function(t){return e.placeholder=t}}):a.default.createElement("span",{className:n,ref:function(t){return e.placeholder=t},style:r({display:"inline-block",height:o,width:u},l)},i)}}]),t}();c.propTypes={onVisible:l.PropTypes.func.isRequired,className:l.PropTypes.string,height:l.PropTypes.number,placeholder:l.PropTypes.element,threshold:l.PropTypes.number,scrollPosition:l.PropTypes.shape({x:l.PropTypes.number.isRequired,y:l.PropTypes.number.isRequired}),width:l.PropTypes.number},c.defaultProps={className:"",height:0,placeholder:null,threshold:100,width:0},t.default=c},function(e,t){e.exports=n(31)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=p(n(0)),i=p(n(5)),l=n(1),u=p(n(13)),s=p(n(14)),c=p(n(2)),f=p(n(15));function p(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(){return"undefined"==typeof window?0:window.scrollX||window.pageXOffset},y=function(){return"undefined"==typeof window?0:window.scrollY||window.pageYOffset};t.default=function(e){var t=function(t){function n(e){!function(e,t){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this);var t=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));if((0,c.default)())return d(t);var r=t.onChangeScroll.bind(t);return"debounce"===e.delayMethod?t.delayedScroll=(0,u.default)(r,e.delayTime):"throttle"===e.delayMethod&&(t.delayedScroll=(0,s.default)(r,e.delayTime)),t.state={scrollPosition:{x:h(),y:y()}},t.baseComponentRef=a.default.createRef(),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,a.default.Component),o(n,[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){"undefined"==typeof window||(0,c.default)()||(0,f.default)(i.default.findDOMNode(this.baseComponentRef.current))!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){"undefined"==typeof window||(0,c.default)()||(this.scrollElement=(0,f.default)(i.default.findDOMNode(this.baseComponentRef.current)),this.scrollElement.addEventListener("scroll",this.delayedScroll),window.addEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll))}},{key:"removeListeners",value:function(){"undefined"==typeof window||(0,c.default)()||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){(0,c.default)()||this.setState({scrollPosition:{x:h(),y:y()}})}},{key:"render",value:function(){var t=this.props,n=(t.delayMethod,t.delayTime,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["delayMethod","delayTime"])),o=(0,c.default)()?null:this.state.scrollPosition;return a.default.createElement(e,r({ref:this.baseComponentRef,scrollPosition:o},n))}}]),n}();return t.propTypes={delayMethod:l.PropTypes.oneOf(["debounce","throttle"]),delayTime:l.PropTypes.number},t.defaultProps={delayMethod:"throttle",delayTime:300},t}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.trackWindowScroll=t.LazyLoadComponent=t.LazyLoadImage=void 0;var r=i(n(9)),o=i(n(3)),a=i(n(6));function i(e){return e&&e.__esModule?e:{default:e}}t.LazyLoadImage=r.default,t.LazyLoadComponent=o.default,t.trackWindowScroll=a.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=u(n(0)),i=n(1),l=u(n(3));function u(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={loaded:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"onImageLoad",value:function(){var e=this;return this.state.loaded?null:function(){e.props.afterLoad(),e.setState({loaded:!0})}}},{key:"getImg",value:function(){var e=this.props,t=(e.afterLoad,e.beforeLoad,e.delayMethod,e.delayTime,e.effect,e.placeholder,e.placeholderSrc,e.scrollPosition,e.threshold,e.visibleByDefault,e.wrapperClassName,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","visibleByDefault","wrapperClassName"]));return a.default.createElement("img",r({onLoad:this.onImageLoad()},t))}},{key:"getLazyLoadImage",value:function(e){var t=this.props,n=t.beforeLoad,r=t.className,o=t.delayMethod,i=t.delayTime,u=t.height,s=t.placeholder,c=t.scrollPosition,f=t.style,p=t.threshold,d=t.visibleByDefault,h=t.width;return a.default.createElement(l.default,{beforeLoad:n,className:r,delayMethod:o,delayTime:i,height:u,placeholder:s,scrollPosition:c,style:f,threshold:p,visibleByDefault:d,width:h},e)}},{key:"getWrappedLazyLoadImage",value:function(e){var t=this.props,n=t.effect,r=t.height,o=t.placeholderSrc,i=t.width,l=t.wrapperClassName,u=this.state.loaded,s=u?" lazy-load-image-loaded":"";return a.default.createElement("span",{className:l+" lazy-load-image-background "+n+s,style:{backgroundImage:u?"":"url( "+o+")",backgroundSize:u?"":"100% 100%",color:"transparent",display:"inline-block",height:r,width:i}},e)}},{key:"render",value:function(){var e=this.props,t=e.effect,n=e.placeholderSrc,r=e.visibleByDefault,o=this.state.loaded,a=this.getImg(),i=o?a:this.getLazyLoadImage(a);return!t&&!n||r?i:this.getWrappedLazyLoadImage(i)}}]),t}();s.propTypes={afterLoad:i.PropTypes.func,beforeLoad:i.PropTypes.func,delayMethod:i.PropTypes.string,delayTime:i.PropTypes.number,effect:i.PropTypes.string,placeholderSrc:i.PropTypes.string,threshold:i.PropTypes.number,visibleByDefault:i.PropTypes.bool,wrapperClassName:i.PropTypes.string},s.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:"",threshold:100,visibleByDefault:!1,wrapperClassName:""},t.default=s},function(e,t,n){"use strict";var r=n(11);function o(){}e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(0)),a=l(n(4)),i=l(n(6));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement(a.default,this.props)}}]),t}();t.default=(0,i.default)(u)},function(e,t,n){(function(t){var n=NaN,r="[object Symbol]",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,f=s||c||Function("return this")(),p=Object.prototype.toString,d=Math.max,h=Math.min,y=function(){return f.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==r}(e))return n;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var s=i.test(e);return s||l.test(e)?u(e.slice(2),s?2:8):a.test(e)?n:+e}e.exports=function(e,t,n){var r,o,a,i,l,u,s=0,c=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=r,a=o;return r=o=void 0,s=t,i=e.apply(a,n)}function g(e){var n=e-u;return void 0===u||n>=t||n<0||f&&e-s>=a}function w(){var e=y();if(g(e))return O(e);l=setTimeout(w,function(e){var n=t-(e-u);return f?h(n,a-(e-s)):n}(e))}function O(e){return l=void 0,p&&r?v(e):(r=o=void 0,i)}function E(){var e=y(),n=g(e);if(r=arguments,o=this,u=e,n){if(void 0===l)return function(e){return s=e,l=setTimeout(w,t),c?v(e):i}(u);if(f)return l=setTimeout(w,t),v(u)}return void 0===l&&(l=setTimeout(w,t)),i}return t=m(t)||0,b(n)&&(c=!!n.leading,a=(f="maxWait"in n)?d(m(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),E.cancel=function(){void 0!==l&&clearTimeout(l),s=0,r=u=o=l=void 0},E.flush=function(){return void 0===l?i:O(y())},E}}).call(this,n(7))},function(e,t,n){(function(t){var n="Expected a function",r=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,p=c||f||Function("return this")(),d=Object.prototype.toString,h=Math.max,y=Math.min,b=function(){return p.Date.now()};function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&d.call(e)==o}(e))return r;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=l.test(e);return n||u.test(e)?s(e.slice(2),n?2:8):i.test(e)?r:+e}e.exports=function(e,t,r){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError(n);return m(r)&&(o="leading"in r?!!r.leading:o,a="trailing"in r?!!r.trailing:a),function(e,t,r){var o,a,i,l,u,s,c=0,f=!1,p=!1,d=!0;if("function"!=typeof e)throw new TypeError(n);function g(t){var n=o,r=a;return o=a=void 0,c=t,l=e.apply(r,n)}function w(e){var n=e-s;return void 0===s||n>=t||n<0||p&&e-c>=i}function O(){var e=b();if(w(e))return E(e);u=setTimeout(O,function(e){var n=t-(e-s);return p?y(n,i-(e-c)):n}(e))}function E(e){return u=void 0,d&&o?g(e):(o=a=void 0,l)}function _(){var e=b(),n=w(e);if(o=arguments,a=this,s=e,n){if(void 0===u)return function(e){return c=e,u=setTimeout(O,t),f?g(e):l}(s);if(p)return u=setTimeout(O,t),g(s)}return void 0===u&&(u=setTimeout(O,t)),l}return t=v(t)||0,m(r)&&(f=!!r.leading,i=(p="maxWait"in r)?h(v(r.maxWait)||0,t):i,d="trailing"in r?!!r.trailing:d),_.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=s=a=u=void 0},_.flush=function(){return void 0===u?l:E(b())},_}(e,t,{leading:o,maxWait:t,trailing:a})}}).call(this,n(7))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){return"undefined"==typeof getComputedStyle?e.style[t]:getComputedStyle(e,null).getPropertyValue(t)},o=function(e){return r(e,"overflow")+r(e,"overflow-y")+r(e,"overflow-x")};t.default=function(e){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(o(t)))return t;t=t.parentNode}return window}}])},144:function(e,t,n){},155:function(e,t,n){},166:function(e,t,n){e.exports={fullPhoto:"photo-stage-module--fullPhoto--WEIQD",boundary:"photo-stage-module--boundary--3xj2g",ratio3x2:"photo-stage-module--ratio3x2--5Q1jj",ratio2x3:"photo-stage-module--ratio2x3--2gPO-",ratio4x3:"photo-stage-module--ratio4x3--1Q1TL",ratio3x4:"photo-stage-module--ratio3x4--21gdo",data:"photo-stage-module--data--3aEQS",photoDate:"photo-stage-module--photoDate--2FFRR"}}}]);
//# sourceMappingURL=component---src-pages-photo-js-30a978a08d2dabf3217f.js.map