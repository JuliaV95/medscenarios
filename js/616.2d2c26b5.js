(self["webpackChunkmedscenarios"]=self["webpackChunkmedscenarios"]||[]).push([[616],{8737:function(t){var e=/^(attrs|props|on|nativeOn|class|style|hook)$/;function r(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}}t.exports=function(t){return t.reduce((function(t,n){var s,i,o,a,l;for(o in n)if(s=t[o],i=n[o],s&&e.test(o))if("class"===o&&("string"===typeof s&&(l=s,t[o]=s={},s[l]=!0),"string"===typeof i&&(l=i,n[o]=i={},i[l]=!0)),"on"===o||"nativeOn"===o||"hook"===o)for(a in i)s[a]=r(s[a],i[a]);else if(Array.isArray(s))t[o]=s.concat(i);else if(Array.isArray(i))t[o]=[s].concat(i);else for(a in i)s[a]=i[a];else t[o]=n[o];return t}),{})}},616:function(t,e,r){"use strict";r.r(e);var n=r(8737),s=r.n(n);e["default"]={name:"StarIcon",props:{size:{type:String,default:"24",validator:function(t){return!isNaN(t)||t.length>=2&&!isNaN(t.slice(0,t.length-1))&&"x"===t.slice(-1)}}},functional:!0,render:function(t,e){var r="x"===e.props.size.slice(-1)?e.props.size.slice(0,e.props.size.length-1)+"em":parseInt(e.props.size)+"px",n=e.data.attrs||{};return n.width=n.width||r,n.height=n.height||r,e.data.attrs=n,t("svg",s()([{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},class:"feather feather-star"},e.data]),[t("polygon",{attrs:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}})])}}}}]);
//# sourceMappingURL=616.2d2c26b5.js.map