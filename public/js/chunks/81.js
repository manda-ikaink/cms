(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{BYpF:function(t,e,i){"use strict";i.r(e);function l(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,l=new Array(e);i<e;i++)l[i]=t[i];return l}var s={name:"file-fieldtype",mixins:[i("Huo5").default],data:function(){return{files:[]}},props:{field:{type:Object,required:!0},value:{required:!1,default:function(){return[]}}},computed:{multiple:function(){return _.defaultTo(this.field.settings.multiple,!1)},accept:function(){return _.defaultTo(this.field.settings.accept,"")},required:function(){return String(this.field.validation).includes("required")}},methods:{onChange:function(t){var e=t.target.files;0==e.length?this.$emit("input",this.files):this.$emit("input",e)}},mounted:function(){_.isArray(this.value)&&(this.files=l(this.value))}},r=i("KHd+"),a=Object(r.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"field"},[i("div",{staticClass:"form__group"},[i("label",{staticClass:"form__label",attrs:{for:t.field.handle},domProps:{innerHTML:t._s(t.field.name)}}),t._v(" "),i("input",{attrs:{type:"file",id:t.field.handle,name:t.field.handle+"[]",accept:t.accept,multiple:t.multiple,required:t.required},on:{input:t.onChange}}),t._v(" "),t.field.help?i("div",{staticClass:"form__control--meta"},[i("div",{staticClass:"form__help"},[i("span",{staticClass:"field__help",domProps:{innerHTML:t._s(t.field.help)}})])]):t._e(),t._v(" "),t.files.length?i("div",{staticClass:"bg-white shadow rounded-md mt-2"},[i("ul",t._l(t.files,(function(e,l){return i("li",{key:"file."+l},[i("div",{staticClass:"p-2 sm:px-4"},[i("div",{staticClass:"flex items-center justify-between"},["image"==e.type?i("img",{staticClass:"upload__file--preview max-w-12",attrs:{src:e.url,alt:e.name}}):i("img",{staticClass:"upload__file--preview max-w-12",attrs:{src:"/vendor/fusion/img/"+e.type+"-large.svg",alt:e.name}}),t._v(" "),i("div",{staticClass:"upload__file--name",domProps:{textContent:t._s(e.name)}}),t._v(" "),i("div",{staticClass:"upload__file--size",domProps:{textContent:t._s(t.filesize(e.bytes))}})])])])})),0)]):t._e(),t._v(" "),t.files.length?i("div",{staticClass:"rounded-md shadow bg-yellow-100 p-2 mt-2"},[i("div",{staticClass:"flex"},[i("div",{staticClass:"flex-shrink-0"},[i("svg",{staticClass:"h-5 w-5 text-yellow-400",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"}})])]),t._v(" "),t._m(0)])]):t._e()])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"px-2"},[e("div",{staticClass:"text-sm leading-5 text-yellow-700"},[this._v("\n            \t\t\tUploading new files will clear existing files.\n            \t\t")])])}],!1,null,null,null);e.default=a.exports}}]);