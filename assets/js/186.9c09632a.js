(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{1520:function(n,e,t){"use strict";t(361)},1541:function(n,e,t){"use strict";t.r(e);t(77),t(27),t(72),t(176),t(177),t(28),t(39);var i=t(327),s={props:["node"],data:function(){var n=i.nodes[this.node].properties,e=n.filter((function(n){if("operation"===n.name)return n})),t=n.filter((function(n){if("resource"===n.name)return n})),s=[];if(t.length>0&&t[0].options){s=t[0].options.map((function(n){return{name:n.name,value:n.value,resource:!0}}));for(var o=function(n){e.map((function(e){if(e.displayOptions.show.resource.includes(s[n].value))return s[n].operations=e.options}))},r=0;r<s.length;r++)o(r)}else e[0]&&e[0].options&&(s=e[0].options.map((function(n){return{name:n.name,value:n.value,description:n.description}})));return{items:s}}},o=(t(1520),t(26)),r=Object(o.a)(s,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("br"),n._v(" "),t("div",[n.items[0]&&n.items[0].resource?t("div",n._l(n.items,(function(e){return t("details",{key:e.name,staticClass:"details"},[t("summary",[n._v(n._s(e.name))]),n._v(" "),t("ul",{staticClass:"operations"},n._l(e.operations,(function(e){return t("li",{key:e.description},[e.description?t("span",[n._v(n._s(e.description))]):t("span",[n._v(n._s(e.name))])])})),0)])})),0):t("div",n._l(n.items,(function(e){return t("ul",{key:e.name},[t("li",[n._v(n._s(e.description))])])})),0)])])}),[],!1,null,"61c44a99",null);e.default=r.exports},361:function(n,e,t){}}]);