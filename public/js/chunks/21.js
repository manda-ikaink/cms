(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{EACl:function(e,t,s){"use strict";t.a={props:{value:{type:Object,required:!0}},computed:{settings:{get:function(){return this.value.settings||{}},set:function(e){this.$set(this.value.settings,e)}},errors:function(){return this.value.errors||{}}}}},Z5aB:function(e,t,s){"use strict";s.r(t);var i=s("EACl"),n=s("Adl2"),o={name:"checkbox-fieldtype-settings",mixins:[i.a],components:{"option-builder":n.default}},l=s("KHd+"),a=Object(l.a)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("ui-select-group",{attrs:{name:"settings.display",label:"Display",help:"Choose whether to display options in a horizontal row or vertical column.",autocomplete:"off",options:[{label:"Column",value:"column"},{label:"Row",value:"row"}],"has-error":e.errors.has("settings.display"),"error-message":e.errors.get("settings.display")},model:{value:e.settings.display,callback:function(t){e.$set(e.settings,"display",t)},expression:"settings.display"}}),e._v(" "),s("div",{staticClass:"col w-full"},[s("option-builder",{model:{value:e.settings.options,callback:function(t){e.$set(e.settings,"options",t)},expression:"settings.options"}})],1)],1)}),[],!1,null,null,null);t.default=a.exports}}]);