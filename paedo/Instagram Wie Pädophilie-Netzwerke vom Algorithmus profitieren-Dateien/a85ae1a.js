(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{1278:function(e,t,o){var content=o(1398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(7).default)("bea99d88",content,!0,{sourceMap:!1})},1397:function(e,t,o){"use strict";o(1278)},1398:function(e,t,o){var n=o(6)((function(i){return i[1]}));n.push([e.i,".facebookshare{cursor:pointer;display:flex;margin:-19px -8px;padding:8px}@media (min-width:768px){.facebookshare:hover{opacity:.6}}.facebookshare path{fill:#000;stroke:none;transition:fill .1s ease-in-out}",""]),n.locals={},e.exports=n},598:function(e,t,o){"use strict";o.r(t);var n=o(64);o.e(474).then(o.t.bind(null,1400,7));var r={name:"FacebookShare",props:{item:{type:Object,default:()=>({department:{}})},subType:{type:String,default:""},subType2:{type:String,default:""},width:{type:String,default:"38"},height:{type:String,default:"38"}},data:()=>({loaded:!1,nzzSocialLinks:{}}),mounted(){this.loaded=!0,this.nzzSocialLinks=new n.a({articleLink:this.item.url,metadata:{title:this.item.title,nzzId:this.item.nzzId},clientBaseUrl:this.$config.clientBaseUrl})},methods:{openWindow:function(e,t=!0){this.createFacebookComponent(),window.deferred((()=>{this.eventBus.emit("tms:event:push",{detail:{eventInfo:{eventName:"Social Media Interaction",eventAction:"share",eventPosition:"",eventValue:"",eventNonInteractive:!1,type:"social media",componentID:this.item.nzzId,componentName:this.item.title},category:{primaryCategory:"social shares",subCategory1:"Facebook",subCategory2:"article",subCategory3:"teaser"}}})})),t&&window.open(e,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600")},createFacebookComponent(){window.deferred((()=>{let e="";try{e=window.digitalData.page.category.primaryCategory}catch(e){console.log(e)}this.eventBus.emit("tms:component:create",{detail:{componentID:this.item.nzzId,componentName:this.item.title,componentURL:this.item.url,issueTimestamp:"",headline:this.item.title,abstract:!1,primaryCategory:e,componentSubType1:"teaser",componentSubType2:this.subType2,subCategory1:"",subCategory2:"",subCategory3:"",componentType:"article"}})}))}}},c=(o(1397),o(1)),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return e.loaded||e.isRendition?t("span",{staticClass:"facebookshare",attrs:{id:!!e.item.nzzId&&`id-${e.item.nzzId.replace(".","_")}`,"data-nzz-tid":"facebook-button",onclick:!1},on:{click:function(t){e.openWindow(e.nzzSocialLinks.facebook())}}},[t("transition",{attrs:{name:"fade",mode:"out-in",duration:{enter:80,leave:80}}},[t("svgicon",{attrs:{height:e.height,width:e.width,name:"ico_facebook_48"}})],1)],1):e._e()}),[],!1,null,null,null);t.default=component.exports}}]);