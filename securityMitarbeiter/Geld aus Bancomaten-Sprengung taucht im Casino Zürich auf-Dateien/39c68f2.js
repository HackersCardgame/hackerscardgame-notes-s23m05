(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{276:function(e,t,n){"use strict";n.r(t);var r=n(15),o=n.n(r),d={name:"BTA",components:{BTAMoreAndNewest:()=>n.e(13).then(n.bind(null,124)),BTASameAuthor:()=>n.e(20).then(n.bind(null,131)),AdvertisementRecommendations:()=>n.e(213).then(n.bind(null,187))},props:{data:{type:[Object,Array],default:function(){return{}}},articleId:{type:String,default:""},articleTags:{type:Array,default:function(){return[]}},articleLayout:{type:String,default:""},showAdPlaceholder:{type:Boolean,default:!1}},computed:{hasAudienzzBtaRecommendations(){return!this.$store.getters.knownUser.adFree&&(!!this.$store.state.features.advertisements&&(!!this.$store.state.features.articleBTAAds&&!["fullwidth","briefing","briefing-intl"].includes(this.articleLayout)))},hasAudienzzRecommendations(){return!this.$store.getters.knownUser.adFree&&(!!this.$store.state.features.advertisements&&(this.$store.state.features.articleBTAAds,!1))},BTAPersonalizedCompanionFeed(){return this.isWebview?()=>n.e(206).then(n.bind(null,174)):()=>n.e(19).then(n.bind(null,256))},BTAMoreAndNewest(){return this.isWebview?()=>n.e(187).then(n.bind(null,225)):()=>n.e(13).then(n.bind(null,124))},BTASameAuthor(){return this.isWebview?()=>n.e(188).then(n.bind(null,226)):()=>n.e(20).then(n.bind(null,131))},showTestContainers(){return this.$store.state.features.btaAbTesting&&this.$store.state.features.adobeTargetScript},showSameAuthor(){var e,t;return(null===(e=this.$store.state.BTAitems.sameAuthor)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.length)>0},throttledIsVisible(){return o()(this.isVisibleInViewport,1e3)},routeChange(){return this.$store.state.previousRoute.fullPath},isImpressum(){var e,t,n;return!(!this.$store.state.metadata.breadcrumbs||!this.$store.state.metadata.breadcrumbs[0]||"/impressum"!==this.$store.state.metadata.breadcrumbs[0].path)||(null===(e=this.$store.state.BTAitems.sameAuthor)||void 0===e||null===(t=e.meta)||void 0===t||null===(n=t.author)||void 0===n?void 0:n.pageId)===this.articleId},hasNLPromo(){return!["fullwidth","gallery"].includes(this.$store.state.metadata.layout)},showRecommendations:()=>!1,articleRecommendations(){return this.isWebview?()=>n.e(208).then(n.bind(null,237)):()=>n.e(18).then(n.bind(null,338))},isGallery(){return["gallery"].includes(this.$store.state.metadata.layout)}},watch:{routeChange(){window.removeEventListener("scroll",this.throttledIsVisible)}},mounted(){this.hydrated=1,this.addTracking(),setTimeout((()=>{this.throttledIsVisible()})),window.addEventListener("scroll",this.throttledIsVisible)},destroyed(){window.removeEventListener("scroll",this.throttledIsVisible)},methods:{isVisibleInViewport(){const e=this,t=window.digitalData.event.some((e=>"bta section"===e.eventInfo.componentName&&"display"===e.eventInfo.eventAction));this.$el instanceof HTMLElement&&this.$el.getBoundingClientRect().top<window.innerHeight&&!t&&window.deferred((()=>{this.eventBus.emit("tms:event:push",{detail:{...e.eventData(),eventInfo:{...e.eventData().eventInfo,eventAction:"display"}}})})),this.$el instanceof HTMLElement&&this.$el.getBoundingClientRect().bottom<=window.innerHeight&&(window.deferred((()=>{this.eventBus.emit("tms:event:push",{detail:{...e.eventData(),eventInfo:{...e.eventData().eventInfo,eventAction:"complete"}}})})),window.removeEventListener("scroll",this.throttledIsVisible))},addTracking(){window.deferred((()=>{this.eventBus.emit("tms:component:create",{detail:{componentID:`bta-section-${this.articleId}`,componentName:"bta section",componentSubType1:"cms",componentSubType2:"",componentType:"ui"}})}))},eventData(){return{eventInfo:{eventName:"UI Interaction",eventPosition:"",eventValue:"",eventNonInteractive:!0,type:"ui",timeStamp:new Date,componentID:`bta-section-${this.articleId}`,componentName:"bta section"},category:{primaryCategory:"ui",subCategory1:"bta section",subCategory2:"",subCategory3:""}}}}},l=(n(583),n(1)),component=Object(l.a)(d,(function(){var e=this,t=e._self._c;return e.isGallery?e._e():t("div",{staticClass:"container container--bta",class:{"adnz-bta-fixed-placeholder":e.showAdPlaceholder},attrs:{componenttype:"bta"}},[e.showSameAuthor?t(e.BTASameAuthor,{tag:"component",attrs:{"article-id":e.articleId,"is-impressum":e.isImpressum,"data-test-variant":"same-author-"+(e.isImpressum?"impressum":"standard")}}):e._e(),e._v(" "),!e.isRendition&&e.hasNLPromo?[t("ConversionElements",{key:`articlenewsletter-${e.$store.state.metadata.nzzId}`,staticClass:"articlenewsletter",attrs:{filter:"newsletter",position:"middle","element-types":["newsletter"]}}),e._v(" "),t("ConversionElements",{key:`articlenewsletterlogged-${e.$store.state.metadata.nzzId}`,staticClass:"articlenewsletterlogged",attrs:{filter:"newsletterlogged",position:"middle","element-types":["newsletterlogged"]}})]:e._e(),e._v(" "),e.isImpressum?e._e():t(e.BTAMoreAndNewest,{tag:"component",attrs:{"article-id":e.articleId,"article-tags":e.articleTags,"data-bta-tags":"true","data-test-variant":"more-and-newest-standard"}}),e._v(" "),e.hasAudienzzBtaRecommendations&&!e.isImpressum?t("AdvertisementRecommendations",{attrs:{"data-bta-audienzz":"true","adnzz-id":"adnz_bta_1"}}):e._e(),e._v(" "),e.isImpressum?e._e():t(e.BTAPersonalizedCompanionFeed,{tag:"component",attrs:{"article-id":e.articleId,"data-bta-companion":"true","data-test-variant":"companion-standard"}}),e._v(" "),e.hasAudienzzBtaRecommendations&&!e.isImpressum?t("AdvertisementRecommendations",{attrs:{"data-bta-audienzz":"true","adnzz-id":"adnz_bta_2"}}):e._e(),e._v(" "),e.hasAudienzzRecommendations?t("AdvertisementRecommendations"):e._e(),e._v(" "),e.showRecommendations?t(e.articleRecommendations,{tag:"component",attrs:{data:e.data}}):e._e()],2)}),[],!1,null,null,null);t.default=component.exports}}]);