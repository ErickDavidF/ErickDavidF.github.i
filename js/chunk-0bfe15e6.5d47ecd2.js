(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bfe15e6"],{"0079":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",{staticClass:"white--text text-center"},[i("v-col",{attrs:{cols:"12"}},[i("h1",[t._v("ADMINISTRAR DOCENTES")])]),i("v-col",{attrs:{cols:"12"}},[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts,"sort-by":"No_Trabajador",dark:"",search:t.search},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":"",dark:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),i("v-spacer"),i("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:"",outlined:""}},"v-btn",a,!1),n),[t._v(" Nuevo Docente ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",{attrs:{dark:""}},[i("v-card-title",{staticClass:"text-center"},[i("span",{staticClass:"text-h5"},[t._v(t._s(t.formTitle))])]),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("p",[t._v("No De Trabajador")]),i("v-otp-input",{attrs:{disabled:t.loading||-1!=t.editedIndex,length:"7",type:"number"},on:{finish:t.onFinish},model:{value:t.editedItem.No_Trabajador,callback:function(e){t.$set(t.editedItem,"No_Trabajador",e)},expression:"editedItem.No_Trabajador"}}),i("v-overlay",{attrs:{absolute:"",value:t.loading}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"Nombre",disabled:""},model:{value:t.editedItem.Nombre,callback:function(e){t.$set(t.editedItem,"Nombre",e)},expression:"editedItem.Nombre"}})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",outlined:""},on:{click:function(e){t.editedItem.No_Trabajador=-1==t.editedIndex?"":t.editedItem.No_Trabajador,t.close()}}},[t._v(" Cancel ")]),i("v-btn",{attrs:{color:"primary",outlined:""},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1),i("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[i("v-card",{attrs:{dark:""}},[i("v-card-title",{staticClass:"text-h5"},[t._v("Quiere borrar a:")]),i("v-card-text",[t._v(" "+t._s(t.editedItem.Nombre)+" ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("OK")]),i("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var n=e.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(n)}}},[t._v(" mdi-pencil ")]),i("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(n)}}},[t._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[i("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v(" Reset ")])]},proxy:!0}])})],1)],1)],1)},a=[],s=(i("a434"),i("99af"),{name:"Administrar_Docentes",data:function(){return{search:"",loading:!1,snackbar:!1,snackbarColor:"default",otp:"",text:"",expectedOtp:"133707",dialog:!1,dialogDelete:!1,headers:[{text:"Nombre",align:"start",sortable:!1,value:"Nombre"},{text:"No Trabajador",value:"No_Trabajador"},{text:"Acciones",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{Nombre:"",No_Trabajador:""},defaultItem:{Nombre:"",No_Trabajador:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"Añadir Docente":"Ver Docente"}},watch:{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}},created:function(){this.initialize()},methods:{initialize:function(){this.desserts=[{Nombre:"Juan Prez",No_Trabajador:"5188987"},{Nombre:"Ricardo M.",No_Trabajador:"5188937"},{Nombre:"Jose Miranda",No_Trabajador:"5188947"}]},editItem:function(t){this.editedIndex=this.desserts.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.editedIndex=this.desserts.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm:function(){this.desserts.splice(this.editedIndex,1),this.closeDelete()},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.desserts[this.editedIndex],this.editedItem):this.desserts.push(this.editedItem),this.close()},onFinish:function(t){var e=this;this.loading=!0,setTimeout((function(){e.loading=!1,e.snackbarColor=t===e.expectedOtp?"success":"warning",e.text='Processed OTP with "'.concat(t,'" (').concat(e.snackbarColor,")"),e.snackbar=!0}),3500)}}}),o=s,r=i("2877"),l=i("6544"),c=i.n(l),d=i("8336"),u=i("b0af"),h=i("99d9"),p=i("62ad"),f=i("a523"),v=i("8fea"),m=i("169a"),b=i("132d"),g=i("1514"),x=i("a797"),I=i("490a"),y=i("0fd9"),k=i("2fa4"),C=i("8654"),_=i("71d9"),D=Object(r["a"])(o,n,a,!1,null,null,null);e["default"]=D.exports;c()(D,{VBtn:d["a"],VCard:u["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:p["a"],VContainer:f["a"],VDataTable:v["a"],VDialog:m["a"],VIcon:b["a"],VOtpInput:g["a"],VOverlay:x["a"],VProgressCircular:I["a"],VRow:y["a"],VSpacer:k["a"],VTextField:C["a"],VToolbar:_["a"]})},1514:function(t,e,i){"use strict";var n=i("2909"),a=i("5530"),s=(i("a9e3"),i("ac1f"),i("1276"),i("a630"),i("3ca3"),i("99af"),i("a15b"),i("d3b7"),i("25f0"),i("caad"),i("4ff9"),i("627d"),i("c37a")),o=i("8654"),r=i("5607"),l=i("80d2"),c=i("d9bd"),d=i("58df"),u=Object(d["a"])(s["a"]);e["a"]=u.extend().extend({name:"v-otp-input",directives:{ripple:r["a"]},inheritAttrs:!1,props:{length:{type:[Number,String],default:6},type:{type:String,default:"text"},plain:Boolean},data:function(){return{badInput:!1,initialValue:null,isBooted:!1,otp:[]}},computed:{outlined:function(){return!this.plain},classes:function(){return Object(a["a"])(Object(a["a"])(Object(a["a"])({},s["a"].options.computed.classes.call(this)),o["a"].options.computed.classes.call(this)),{},{"v-otp-input--plain":this.plain})},isDirty:function(){return s["a"].options.computed.isDirty.call(this)||this.badInput}},watch:{isFocused:"updateValue",value:function(t){this.lazyValue=t}},created:function(){var t;this.$attrs.hasOwnProperty("browser-autocomplete")&&Object(c["a"])("browser-autocomplete","autocomplete",this),this.otp=(null==(t=this.internalValue)?void 0:t.split(""))||[]},mounted:function(){var t=this;requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{focus:function(t,e){this.onFocus(t,e||0)},genInputSlot:function(t){var e=this;return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(l["h"])(this.height)},on:{click:function(){return e.onClick(t)},mousedown:function(i){return e.onMouseDown(i,t)},mouseup:function(i){return e.onMouseUp(i,t)}}}),[this.genDefaultSlot(t)])},genControl:function(t){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(t)])},genDefaultSlot:function(t){return[this.genFieldset(),this.genTextFieldSlot(t)]},genContent:function(){var t=this;return Array.from({length:+this.length},(function(e,i){return t.$createElement("div",t.setTextColor(t.validationState,{staticClass:"v-input",class:t.classes}),[t.genControl(i)])}))},genFieldset:function(){return this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()])},genLegend:function(){var t=this.$createElement("span",{domProps:{innerHTML:"&#8203;"}});return this.$createElement("legend",{style:{width:"0px"}},[t])},genInput:function(t){var e=this,i=Object.assign({},this.listeners$);return delete i.change,this.$createElement("input",{style:{},domProps:{value:this.otp[t],min:"number"===this.type?0:null},attrs:Object(a["a"])(Object(a["a"])({},this.attrs$),{},{disabled:this.isDisabled,readonly:this.isReadonly,type:this.type,id:"".concat(this.computedId,"--").concat(t),class:"otp-field-box--".concat(t),maxlength:1}),on:Object.assign(i,{blur:this.onBlur,input:function(i){return e.onInput(i,t)},focus:function(i){return e.onFocus(i,t)},paste:function(i){return e.onPaste(i,t)},keydown:this.onKeyDown,keyup:function(i){return e.onKeyUp(i,t)}}),ref:"input",refInFor:!0})},genTextFieldSlot:function(t){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genInput(t)])},onBlur:function(t){var e=this;this.isFocused=!1,t&&this.$nextTick((function(){return e.$emit("blur",t)}))},onClick:function(t){this.isFocused||this.isDisabled||!this.$refs.input[t]||this.onFocus(void 0,t)},onFocus:function(t,e){null==t||t.preventDefault(),null==t||t.stopPropagation();var i=this.$refs.input,n=this.$refs.input&&i[e||0];if(n)return document.activeElement!==n?(n.focus(),n.select()):void(this.isFocused||(this.isFocused=!0,n.select(),t&&this.$emit("focus",t)))},onInput:function(t,e){var i=this,n=t.target,a=n.value;this.applyValue(e,n.value,(function(){i.internalValue=i.otp.join("")})),this.badInput=n.validity&&n.validity.badInput;var s=e+1;a&&(s<+this.length?this.changeFocus(s):(this.clearFocus(e),this.onCompleted()))},clearFocus:function(t){var e=this.$refs.input[t];e.blur()},onKeyDown:function(t){t.keyCode===l["y"].enter&&this.$emit("change",this.internalValue),this.$emit("keydown",t)},onMouseDown:function(t,e){t.target!==this.$refs.input[e]&&(t.preventDefault(),t.stopPropagation()),s["a"].options.methods.onMouseDown.call(this,t)},onMouseUp:function(t,e){this.hasMouseDown&&this.focus(t,e),s["a"].options.methods.onMouseUp.call(this,t)},onPaste:function(t,e){var i,a=+this.length-1,s=null==t||null==(i=t.clipboardData)?void 0:i.getData("Text"),o=(null==s?void 0:s.split(""))||[];t.preventDefault();for(var r=Object(n["a"])(this.otp),l=0;l<o.length;l++){var c=e+l;if(c>a)break;r[c]=o[l].toString()}this.otp=r;var d=Math.min(e+o.length,a);this.changeFocus(d),r.length===+this.length&&(this.onCompleted(),this.clearFocus(d))},applyValue:function(t,e,i){var a=Object(n["a"])(this.otp);a[t]=e,this.otp=a,i()},changeFocus:function(t){this.onFocus(void 0,t||0)},updateValue:function(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onKeyUp:function(t,e){t.preventDefault();var i=t.key;if(!["Tab","Shift","Meta","Control","Alt"].includes(i)&&!["Delete"].includes(i))return"ArrowLeft"===i||"Backspace"===i&&!this.otp[e]?e>0&&this.changeFocus(e-1):"ArrowRight"===i?e+1<+this.length&&this.changeFocus(e+1):void 0},onCompleted:function(){var t=this.otp.join("");t.length===+this.length&&this.$emit("finish",t)}},render:function(t){return t("div",{staticClass:"v-otp-input",class:this.themeClasses},this.genContent())}})},"627d":function(t,e,i){}}]);
//# sourceMappingURL=chunk-0bfe15e6.5d47ecd2.js.map