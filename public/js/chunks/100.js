(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{owoO:function(t,s,n){"use strict";n.r(s);var e={head:{title:function(){return{inner:_.startCase(this.section)+" Settings"||!1}}},components:{"settings-form":n("f+Vk").a},filters:{capitalize:function(t){return _.startCase(t)}},data:function(){return{section:""}},beforeRouteEnter:function(t,s,n){n((function(s){s.section=t.params.section,s.$emit("updateHead")}))}},i=n("KHd+"),a=Object(i.a)(e,(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[n("portal",{attrs:{to:"title"}},[n("app-title",{attrs:{icon:"cog"}},[t._v(t._s(t._f("capitalize")(t.section))+" Settings")])],1),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col w-full"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card__body"},[t.section?n("settings-form",{ref:"form",attrs:{section:t.section}}):t._e()],1)])])]),t._v(" "),n("portal",{attrs:{name:"setting-actions",to:"actions"}},[n("div",{staticClass:"buttons"},[n("router-link",{staticClass:"button",attrs:{to:{name:"settings"}}},[t._v("Go Back")]),t._v(" "),n("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(s){return s.preventDefault(),t.$refs.form.submit(s)}}},[t._v("Save")])],1)])],1)}),[],!1,null,null,null);s.default=a.exports}}]);