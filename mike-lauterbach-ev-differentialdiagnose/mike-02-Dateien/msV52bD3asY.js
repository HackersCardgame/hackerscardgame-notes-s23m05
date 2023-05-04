;/*FB_PKG_DELIM*/

__d("CometVideoGridCardGlimmer.react",["CometGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=146,j=256,k={image:{borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",$$css:!0},root:{display:"x78zum5",flexDirection:"xdt5ytf",$$css:!0},subtitle:{borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",height:"x170jfvy",width:"xygnafs",$$css:!0},title:{borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",height:"x1kpxq89",marginBottom:"xyorhqc",width:"xoa0rjt",$$css:!0},videoInfo:{marginTop:"xw7yly9",$$css:!0}};function a(a){var b=a.index,d=a.height;d=d===void 0?i:d;a=a.width;a=a===void 0?j:a;return h.jsxs("div",{className:"x78zum5 xdt5ytf",children:[h.jsx(c("CometGlimmer.react"),{index:b,xstyle:k.image,children:h.jsx("div",{style:{paddingTop:"calc("+d+" / "+a+" * 100%)"}})}),h.jsxs("div",{className:"xw7yly9",children:[h.jsx(c("CometGlimmer.react"),{index:b,xstyle:k.title}),h.jsx(c("CometGlimmer.react"),{index:b,xstyle:k.subtitle})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoHomeChainingCallerContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(null);g["default"]=b}),98);
__d("CometVideoHomeRowGlimmer.react",["CometFlexibleRow.react","CometGlimmer.react","CometVideoGridCardGlimmer.react","gkx","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=4,j=2,k={card:{backgroundColor:"x1jx94hy",borderTopStartRadius:"x1lcm9me",borderTopEndRadius:"x1yr5g0i",borderBottomEndRadius:"xrt01vj",borderBottomStartRadius:"x10y3i5r",paddingTop:"xyamay9",paddingEnd:"x1pi30zi",paddingBottom:"x1l90r2v",paddingStart:"x1swvt13",$$css:!0},header:{borderTopStartRadius:"x1lcm9me",borderTopEndRadius:"x1yr5g0i",borderBottomEndRadius:"xrt01vj",borderBottomStartRadius:"x10y3i5r",height:"xxk0z11",marginBottom:"x1yztbdb",width:"xqyf9gi",$$css:!0},root:{marginTop:"x1sy10c2",$$css:!0}};function a(a){var b=a.hideHeader,d=a.maxItems;d=d===void 0?i:d;var e=a.numRows;e=e===void 0?1:e;var f=a.useTransparentBackground;f=f===void 0?!1:f;a=a.xstyles;a=a===void 0?[]:a;var g=[],l=[];for(var m=0;m<d;m++)g.push(h.jsx(c("CometVideoGridCardGlimmer.react"),{index:0},m));for(m=0;m<e;m++)l.push(h.jsxs("div",{className:c("stylex")([!f&&k.card,k.root].concat(a)),children:[b!==!0&&h.jsx(c("CometGlimmer.react"),{index:0,xstyle:k.header}),c("gkx")("1779508")?h.jsx(h.Fragment,{children:g}):h.jsx(c("CometFlexibleRow.react"),{columnMaxWidth:350,columnMinWidth:250,maxItems:d,minItems:j,children:g})]},m));return h.jsx(h.Fragment,{children:l})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoHomeRowSectionGlimmer.react",["CometVideoHomeRowGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.glimmerXstyles;a=babelHelpers.objectWithoutPropertiesLoose(a,["glimmerXstyles"]);return h.jsx("div",{className:"x1gja9t x8vdgqj x1sy10c2",children:h.jsx(c("CometVideoHomeRowGlimmer.react"),babelHelpers["extends"]({},a,{xstyles:b}))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoHomeLiveLoggerContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({setTimeRequested:function(){},timeEntered:null,timeRequested:{},totalVideos:0});g["default"]=b}),98);
__d("CometVideoHomeLiveGridConstants",[],(function(a,b,c,d,e,f,g){"use strict";a=3;b=175;c=300;d=8;e=(c+d)*a-d;f={gridWidth:{maxWidth:"x1kdej8s",$$css:!0}};d=f.gridWidth;g.VIDEOS_PER_ROW=a;g.MIN_COLUMN_WIDTH=b;g.MAX_COLUMN_WIDTH=c;g.MAX_WIDTH=e;g.GRID_WIDTH_XSTYLE=d}),98);
__d("CometVideoHomeLiveUtils",["CometVideoHomeLiveTabExperiments"],(function(a,b,c,d,e,f,g){"use strict";function a(a){switch(a){case"WWW_LIVE_NEWS":return"news";case"WWW_LIVE_PAGES_YOU_FOLLOW":return"pages_you_follow";case"WWW_LIVE_SPORTS":return"sports";case"WWW_LIVE_TOP_LIVE_GAMING":return"gaming";case"WWW_LIVE_TOP_LIVE_MUSIC":return"music";case"WWW_LIVE_AUDIO_SUGGESTED_AUDIO":return"audio_suggested_audio";case"WWW_LIVE_SHOPPING":return"shopping";case"WWW_LIVE_TOP_LIVES":return"top_lives";case"WWW_LIVE_UPCOMING_LIVES":return"upcoming_lives";case"WWW_LIVE_WAS_LIVES":return"was_lives";case"WWW_LIVE_NEAR_YOU":return"near_you";case"WWW_LIVE_SCHEDULED_HERO":return"scheduled_hero";case"WWW_LIVE_SCHEDULED_STARTING_SOON":return"scheduled_starting_soon";case"WWW_LIVE_SCHEDULED_SUBSCRIBED":return"scheduled_subscribed";case"WWW_LIVE_SCHEDULED_PAGES_YOU_FOLLOW":return"scheduled_pages_you_follow";case"WWW_LIVE_SCHEDULED_RECOMMENDED":return"scheduled_recommended";case"WWW_LIVE_SCHEDULED_BEAUTY":return"scheduled_beauty";case"WWW_LIVE_SCHEDULED_ENTERTAINMENT":return"scheduled_entertainment";case"WWW_LIVE_SCHEDULED_NEWS":return"scheduled_news";case"WWW_LIVE_SCHEDULED_SPORTS":return"scheduled_sports";case"WWW_LIVE_SPOTLIGHT_PARTNERS":return"spotlight_partners";case"WWW_LIVE_SPIRITUAL":return"spiritual_services";case"WWW_LIVE_FASHION":return"fashion";case"WWW_LIVE_CONTINUE_WATCHING":return"continue_watching";case"WWW_LIVE_IPL":return"ipl";case"WWW_LIVE_IPL_PYML":return"ipl_pyml";case"WWW_LIVE_VIDEO_PLAYLISTS":return"live_video_playlists"}return"unknown"}function b(a){return a==null?null:Date.now()-a}f=["WWW_LIVE_SCHEDULED_SUBSCRIBED","WWW_LIVE_SCHEDULED_STARTING_SOON","WWW_LIVE_SCHEDULED_PAGES_YOU_FOLLOW","WWW_LIVE_SCHEDULED_RECOMMENDED","WWW_LIVE_SCHEDULED_BEAUTY","WWW_LIVE_SCHEDULED_ENTERTAINMENT","WWW_LIVE_SCHEDULED_NEWS","WWW_LIVE_SCHEDULED_SPORTS"];var h=["WWW_LIVE_MAP_HEATMAP","WWW_LIVE_CONTINUE_WATCHING","WWW_LIVE_PAGES_YOU_FOLLOW","WWW_LIVE_TOP_LIVES","WWW_LIVE_IPL","WWW_LIVE_UPCOMING_LIVES","WWW_LIVE_NEWS","WWW_LIVE_AUDIO_SUGGESTED_AUDIO","WWW_LIVE_NEAR_YOU","WWW_LIVE_TOP_LIVE_MUSIC","WWW_LIVE_SHOPPING","WWW_LIVE_TOP_LIVE_GAMING","WWW_LIVE_SPORTS","WWW_LIVE_SPIRITUAL","WWW_LIVE_WAS_LIVES"],i=f.concat(h);function c(a,b,c){if(!d("CometVideoHomeLiveTabExperiments").dedupEnabled())return!1;for(var e=0;e<i.length;e++){var f=i[e];if(f===b)return!1;f=c[f];if(f&&f.includes(a))return!0}return!1}function e(a){return i.reduce(function(b,c){return b+(a[c]?a[c].length:0)},0)}g.convertToFeedModule=a;g.getTimeSpent=b;g.DUPE_PRIORITY=i;g.videoIsDupe=c;g.calculateTotalVisible=e}),98);
__d("LiveVideoDestinationTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:LiveVideoDestinationLoggerConfig")}),null);