(window.webpackJsonp=window.webpackJsonp||[]).push([[15,377],{1009:function(e,t,o){"use strict";o(942)},1010:function(e,t,o){var n=o(6)((function(i){return i[1]}));n.push([e.i,'.overlay{-webkit-overflow-scrolling:touch;-webkit-tap-highlight-color:rgba(0,0,0,0);height:100%;left:0;overflow-x:hidden;overflow-y:auto;position:fixed;top:0;width:100%;z-index:12100}.overlay--bottom{bottom:0;top:auto}.overlay--center{align-items:center;display:flex}.overlay--padded{padding:0 16px}.overlay--padded-top{padding-top:24px}.overlay--mobnav{background-color:var(--white);box-shadow:0 0 16px 0 rgba(0,0,0,.16);max-width:85%;width:320px}@media (min-width:768px){.overlay--mobile{display:none}}.overlay--bg,.overlay--container{-webkit-tap-highlight-color:rgba(0,0,0,0)}.overlay--bg{background:rgba(0,0,0,.4);height:100%;left:0;position:fixed;top:0;width:100%;z-index:12100}@media (min-width:768px){.overlay--bg--mobile{display:none}}.overlay--bg.overlay--blur{-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.overlay--contextmenu{height:auto;max-height:85%;overflow-y:auto}.overlay--contextmenu.overlay--full{bottom:0;height:calc(100% - 64px);max-height:100%;top:auto}.overlay__content{background:#fff;margin:16px;max-width:640px;padding:24px 80px 12px 24px;position:relative}@media (min-width:768px){.overlay__content{padding:32px 80px 32px 32px}}.overlay__title{font-family:nzz-sans-serif,Arial;font-size:1.375rem;line-height:1.36}@media (min-width:768px){.overlay__title{font-size:2.25rem;line-height:1.22}}.overlay__buttons{margin-right:-56px;margin-top:24px}.overlay__close{cursor:pointer;padding:8px;position:absolute;right:0;top:0}@media (min-width:768px){.overlay__buttons{display:flex}}.overlay__button{font-size:.875rem;line-height:3rem;margin-right:16px;white-space:nowrap}.overlay__button-link{-webkit-text-decoration:none;text-decoration:none}.overlay--center-y:after{content:"";height:100%;width:0}.overlay--center-y .overlay__content,.overlay--center-y:after{display:inline-block;vertical-align:middle}.overlay--center-x{text-align:center}.overlay--center-x .overlay__content{text-align:left}',""]),n.locals={},e.exports=n},506:function(e,t,o){"use strict";o.r(t);var n=o(878),l=o(4),r={props:{open:{type:Boolean,default:!1},onssr:{type:Boolean,default:!1},classes:{type:String,default:""},classesBg:{type:String,default:""},transition:{type:String,default:"slide-left"},transitionBg:{type:String,default:"fade"},lockScroll:{type:Function,default:()=>!0}},data:()=>({reserveScrollBarGap:!0}),computed:{isMobileBreakpoint:()=>l.store.isMobileBreakpoint,useBodyScroll(){return this.isMobileBreakpoint}},watch:{open:{handler:function(e){this.handleBodyScroll(e)},immediate:!0}},beforeDestroy(){this.handleBodyScroll(!1)},methods:{close(){this.$emit("close")},closeContent(e){e.target===this.$refs.content&&this.$emit("close")},closeContentGesture(e){e.stopPropagation(),this.closeContent(e)},async handleBodyScroll(e){this.lockScroll()&&this.useBodyScroll&&(e?(await this.$nextTick(),Object(n.disableBodyScroll)(this.$refs.content,{reserveScrollBarGap:this.reserveScrollBarGap})):Object(n.enableBodyScroll)(this.$refs.content))}}},c=(o(1009),o(1)),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"overlay--container"},[t("transition",{attrs:{name:e.transitionBg}},[e.onssr?t("div",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"overlay--bg",class:e.classesBg,on:{"&wheel":function(t){return e.close.apply(null,arguments)},"&touchmove":function(t){return e.close.apply(null,arguments)},click:e.close}}):!e.onssr&&e.open?t("div",{staticClass:"overlay--bg",class:e.classesBg,on:{"&wheel":function(t){return e.close.apply(null,arguments)},"&touchmove":function(t){return e.close.apply(null,arguments)},click:e.close}}):e._e()]),e._v(" "),t("transition",{attrs:{name:e.transition}},[e.onssr?t("div",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],ref:"content",staticClass:"overlay",class:e.classes,attrs:{"data-nzz-tid":"overlay"},on:{"&wheel":function(t){return e.closeContentGesture.apply(null,arguments)},"&touchmove":function(t){return e.closeContentGesture.apply(null,arguments)},click:e.closeContent}},[e._t("default")],2):!e.onssr&&e.open?t("div",{ref:"content",staticClass:"overlay",class:e.classes,attrs:{"data-nzz-tid":"overlay"},on:{"&wheel":function(t){return e.closeContentGesture.apply(null,arguments)},"&touchmove":function(t){return e.closeContentGesture.apply(null,arguments)},click:e.closeContent}},[e._t("default")],2):e._e()])],1)}),[],!1,null,null,null);t.default=component.exports},942:function(e,t,o){var content=o(1010);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(7).default)("6441b3aa",content,!0,{sourceMap:!1})}}]);