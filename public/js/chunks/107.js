(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{prFS:function(t,n,s){"use strict";s.r(n),s.d(n,"getModels",(function(){return i}));function i(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;axios.all([axios.get("/api/updates?page=".concat(n))]).then(axios.spread((function(n){t(null,n.data.data,n.data.meta)}))).catch((function(n){t(new Error("The requested resource could not be found"))}))}var e={name:"updates",data:function(){return{version:!1,versions:[],pagination:[]}},computed:{current:function(){return"v".concat(this.$store.state.fusion.version)},id:function(){return this.findBy("title",this.current).id},isConfirming:function(){return!!this.version}},methods:{findBy:function(t,n){return _.find(this.versions,(function(s){return s[t]==n}))},changePage:function(t){this.refresh(t)},upgrade:function(t){this.version=this.findBy("id",t)},confirm:function(){axios.post("/api/updates",{version:this.version}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},close:function(){this.version=!1},refresh:function(t){var n=this;i((function(t,s,i){t?toast(t.toString(),"danger"):(n.versions=s,n.pagination=i)}),t)}},beforeRouteEnter:function(t,n,s){i((function(t,n,i){s(t?function(n){return toast(t.toString(),"danger")}:function(t){t.versions=n,t.pagination=i})}))}},a=s("KHd+"),o=Object(a.a)(e,(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[s("portal",{attrs:{to:"title"}},[s("page-title",{attrs:{icon:"download"}},[t._v("Updates")])],1),t._v(" "),s("portal",{attrs:{to:"actions"}},[s("a",{attrs:{href:"https://beta.getfusioncms.com/changelog",title:"Changelog",target:"_blank"}},[t._v(t._s(t.current))])]),t._v(" "),t._l(t.versions,(function(n,i){return s("div",{staticClass:"card"},[s("div",{staticClass:"card__header flex items-center justify-between"},[s("h3",{staticClass:"card__title"},[t._v("\n                "+t._s(n.title)+"\n\n                "),s("span",{staticClass:"text-xs block"},[t._v("\n                    Released "+t._s(t.$moment(n.date_published).format("MMM Do, YYYY"))+"\n                ")])]),t._v(" "),s("div",{staticClass:"flex items-center justify-start"},[n._isCurrent?s("p-button",{attrs:{disabled:""}},[t._v("\n                    Current version\n                ")]):t._e(),t._v(" "),t._l(n.attachments,(function(t,n){return s("a",{key:"attachment-"+i+"-"+n,staticClass:"button button--icon ml-1",attrs:{href:t.url,title:t.mime_type}},[s("fa-icon",{staticClass:"icon",attrs:{icon:"download"}})],1)})),t._v(" "),s("a",{staticClass:"button button--icon ml-1",attrs:{href:"https://github.com/fusioncms/fusioncms/releases/tag/"+n.title,title:"View on Github",target:"_blank"}},[s("fa-icon",{staticClass:"icon",attrs:{icon:"code"}})],1)],2)]),t._v(" "),s("div",{staticClass:"card__body"},[s("p",[t._v(t._s(t.versions.content_text))]),t._v(" "),t._l(n._changelog,(function(n,i){return s("div",t._l(n,(function(n,e){return s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("span",{staticClass:"badge"},[t._v(t._s(i))])]),t._v(" "),s("div",{staticClass:"col"},[t._v("\n                        "+t._s(e)+"\n\n                        "),t._l(n,(function(n){return s("a",{key:n,staticClass:"mr-1 text-xs",attrs:{href:"https://github.com/fusioncms/fusioncms/issues/"+n,target:"_blank"}},[t._v("\n                            #"+t._s(n)+"\n                        ")])}))],2)])})),0)}))],2)])})),t._v(" "),t.pagination.total>1?s("div",{staticClass:"mt-6"},[s("p-pagination",{attrs:{total:t.pagination.last_page,value:t.pagination.current_page},on:{input:function(n){return t.changePage(n)}}})],1):t._e(),t._v(" "),s("portal",{attrs:{to:"modals"}},[s("p-modal",{key:"updater_modal",attrs:{name:"updater",title:"Update to "+t.version.title},model:{value:t.isConfirming,callback:function(n){t.isConfirming=n},expression:"isConfirming"}},[s("p",[t._v("Are you sure you want to update to version "+t._s(t.version.title)+"?")]),t._v(" "),s("template",{slot:"footer"},[s("p-button",{staticClass:"button button--primary",attrs:{type:"button"},on:{click:t.confirm}},[t._v("Confirm")]),t._v(" "),s("p-button",{staticClass:"mr-3",attrs:{type:"button"},on:{click:t.close}},[t._v("Cancel")])],1)],2)],1)],2)}),[],!1,null,null,null);n.default=o.exports}}]);