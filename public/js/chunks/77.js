(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{"0K47":function(e,t,a){"use strict";a.r(t);var s=a("Bhyg"),r=a.n(s),i={name:"code-fieldtype",props:{field:{type:Object,required:!0},value:{required:!1,default:""}},data:function(){return{editor:Object}},computed:{braceClass:function(){return this.field.handle+"-brace"},textareaClass:function(){return this.braceClass+"_textarea"},syntax:function(){return this.field.settings.syntax||"html"}},mounted:function(){var e=this;e.loadSyntax(e.syntax),a("lbgY"),e.editor=r.a.edit(e.$refs[e.braceClass]),e.editor.setOptions({showPrintMargin:!1,minLines:5,maxLines:1/0}),e.editor.setTheme("ace/theme/chrome"),e.editor.$blockScrolling=1/0,e.editor.setValue(e.value||"",-1),e.editor.getSession().setUseWrapMode(!0),e.editor.getSession().setMode("ace/mode/".concat(this.syntax)),e.editor.getSession().on("change",(function(){e.$refs[e.textareaClass].value=e.editor.getSession().getValue(),e.$emit("input",e.editor.getSession().getValue())}))},methods:{loadSyntax:function(e){switch(e){case"css":a("FG3S");break;case"html":a("vp08");break;case"javascript":a("uzal");break;case"json":a("gYtI");break;case"markdown":a("wam1");break;case"python":a("iIKA");break;case"xml":a("BpZR");break;default:a("uzal")}}}},n=a("KHd+"),l=Object(n.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"form__group"},[a("label",{staticClass:"form__label",attrs:{for:e.field.handle}},[e._v(e._s(e.field.name))]),e._v(" "),a("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:e.textareaClass,attrs:{name:e.field.handle,id:e.field.handle},domProps:{value:e.value}}),e._v(" "),a("div",{ref:e.braceClass,staticClass:"border rounded",attrs:{id:e.braceClass+"_id"}}),e._v(" "),e.field.help?a("div",{staticClass:"form__control--meta"},[a("div",{staticClass:"form__help"},[e.help?a("span",{domProps:{innerHTML:e._s(e.help)}}):e._e()])]):e._e()])])}),[],!1,null,null,null);t.default=l.exports}}]);