;/*FB_PKG_DELIM*/

__d("TahoeTypedLogger",["Banzai","GeneratedLoggerUtils"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:TahoeLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:TahoeLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:TahoeLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setChainDepth=function(a){this.$1.chain_depth=a;return this};c.setChainingContextIdentifier=function(a){this.$1.chaining_context_identifier=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setIsAutoplaying=function(a){this.$1.is_autoplaying=a;return this};c.setMediaID=function(a){this.$1.media_id=a;return this};c.setUpNextMediaID=function(a){this.$1.up_next_media_id=a;return this};c.setUpNextPosition=function(a){this.$1.up_next_position=a;return this};return a}();c={chain_depth:!0,chaining_context_identifier:!0,event:!0,is_autoplaying:!0,media_id:!0,up_next_media_id:!0,up_next_position:!0};f["default"]=a}),66);
__d("useVideoPlayerCometTahoeMouseInteractions",["VideoPlayerHooks","useVideoPlayerClickToPauseInteraction","useVideoPlayerClickToPlayInteraction"],(function(a,b,c,d,e,f,g){"use strict";function a(a){a=a===void 0?{}:a;a=a.shouldUnmuteOnPlay;var b=d("VideoPlayerHooks").useEnded(),e=d("VideoPlayerHooks").usePlaying();a=c("useVideoPlayerClickToPlayInteraction")({shouldUnmute:a});var f=c("useVideoPlayerClickToPauseInteraction")();e=e?f:a;return b?null:e}g["default"]=a}),98);
__d("validatePlayerSuborigin",[],(function(a,b,c,d,e,f){"use strict";function a(a){return typeof a==="string"?a:null}f["default"]=a}),66);
__d("CometTahoeFubsContext.react",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react").createContext;b=a({paymentSucceeded:!1,setPaymentSucceeded:function(a){}});g["default"]=b}),98);
__d("CometTahoeReplyCommentIDContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({replyCommentID:null,setReplyCommentID:c("emptyFunction")});g["default"]=b}),98);
__d("CometTahoeSidepaneContext.react",["$InternalEnum","emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react").createContext;e=b("$InternalEnum")({GENERIC:"generic",WOODHENGE:"woodhenge"});f=a({activeSidepane:e.GENERIC,setActiveSidepane:function(a){return c("emptyFunction")()}});g.CometTahoeSidepaneType=e;g.context=f}),98);
__d("CometTahoeUFIContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={COMPOSER_AND_ALL_COMMENTS:"COMPOSER_AND_ALL_COMMENTS",COMPOSER_AND_ALL_SPEAKERS:"COMPOSER_AND_ALL_SPEAKERS",COMPOSER_AND_TOP_COMMENT:"COMPOSER_AND_TOP_COMMENT",COMPOSER_ONLY:"COMPOSER_ONLY"};c=a.createContext({showCommentsSpeakersConfig:!0,tahoeCommentComposerConfig:b.COMPOSER_AND_ALL_COMMENTS});g.TahoeCommentComposerConfigEnum=b;g.CometTahoeUFIContext=c}),98);
__d("CometTahoeUpNextVideoContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react").createContext;b=a({setUpNextChainingCursor:function(){},setUpNextTrackingCode:function(){},setUpNextVideoID:null,upNextChainingCursor:null,upNextTrackingCode:null,upNextVideoID:null});g["default"]=b}),98);
__d("CometVideoHomeInjectionPortalingProvider.react",["CometVideoHomeInjectionPortalingContext","GlobalVideoPortsID","react","useRoutePassthroughProps","validatePlayerSuborigin"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo;function a(a){var b=a.children,e=a.injectedVideoID;a=c("useRoutePassthroughProps")();var f=d("GlobalVideoPortsID").ensureVideoID(a==null?void 0:a.portableVideoID),g=(a==null?void 0:a.portalingRouteTracePolicy)!=null?String(a==null?void 0:a.portalingRouteTracePolicy):null,j=c("validatePlayerSuborigin")(a==null?void 0:a.portalingSubOrigin);a=i(function(){return{initialTracePolicy:g,injectedVideoID:e,portableVideoID:f,subOrigin:j}},[g,e,f,j]);return h.jsx(c("CometVideoHomeInjectionPortalingContext").Provider,{value:a,children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoCommentComposerGlimmer.react",["CometGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={comment:{borderTopStartRadius:"xfh8nwu",borderTopEndRadius:"xoqspk4",borderBottomEndRadius:"x12v9rci",borderBottomStartRadius:"x138vmkv",flexGrow:"x1iyjqo2",height:"xc9qbxq",width:"x4kbhth",$$css:!0},composer:{alignItems:"x6s0dn4",display:"x78zum5",$$css:!0},profileCircle:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",flexShrink:"x2lah0s",height:"x1vqgdyp",marginEnd:"x1emribx",width:"x100vrsf",$$css:!0},root:{bottom:"x1ey2m1c",end:"xds687c",marginTop:"xdj266r",marginEnd:"xktsk01",marginBottom:"x1e56ztr",marginStart:"x1d52u69",position:"x10l6tqk",start:"x17qophe",$$css:!0}};function a(a){a=a.index;return h.jsx("div",{className:"x1ey2m1c xds687c xdj266r xktsk01 x1e56ztr x1d52u69 x10l6tqk x17qophe",children:h.jsxs("div",{className:"x6s0dn4 x78zum5",children:[h.jsx(c("CometGlimmer.react"),{index:a,xstyle:i.profileCircle}),h.jsx(c("CometGlimmer.react"),{index:a,xstyle:i.comment})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoProfileInfoGlimmer.react",["CometGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={metadata:{borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",height:"x1kpxq89",width:"x1lraqik",$$css:!0},profileBlock:{display:"x78zum5",$$css:!0},profileCircle:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"xqvfhly",marginEnd:"x1emribx",width:"xzuapc8",$$css:!0},profileInfo:{display:"x78zum5",flexDirection:"xdt5ytf",justifyContent:"xl56j7k",$$css:!0},profileName:{borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",height:"x1kpxq89",marginBottom:"x1e56ztr",width:"x10ew9r4",$$css:!0},root:{display:"x78zum5",flexDirection:"xdt5ytf",$$css:!0},videoInfo:{borderTopStartRadius:"x1a2cdl4",borderTopEndRadius:"xnhgr82",borderBottomEndRadius:"x1qt0ttw",borderBottomStartRadius:"xgk8upj",height:"x1qx5ct2",marginTop:"x14vqqas",width:"x1qvg28z",$$css:!0}};function a(a){var b=a.index;a=a.showVideoInfo;a=a===void 0?!0:a;return h.jsxs("div",{className:"x78zum5 xdt5ytf",children:[h.jsxs("div",{className:"x78zum5",children:[h.jsx(c("CometGlimmer.react"),{index:b,xstyle:i.profileCircle}),h.jsxs("div",{className:"x78zum5 xdt5ytf xl56j7k",children:[h.jsx(c("CometGlimmer.react"),{index:b,xstyle:i.profileName}),h.jsx(c("CometGlimmer.react"),{index:b,xstyle:i.metadata})]})]}),a&&h.jsx(c("CometGlimmer.react"),{index:b,xstyle:i.videoInfo})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometTahoeUpNextItemGlimmer.react",["CometGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={imageGlimmer:{borderTopStartRadius:"x1lcm9me",borderTopEndRadius:"x1yr5g0i",borderBottomEndRadius:"xrt01vj",borderBottomStartRadius:"x10y3i5r",height:"x14baz6b",marginEnd:"xq8finb",width:"x1f2tiqu",$$css:!0},item:{display:"x78zum5",marginTop:"xw7yly9",$$css:!0},subtitleOne:{borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",height:"x1kpxq89",marginTop:"x1anpbxc",width:"x1tucx9d",$$css:!0},subtitleTwo:{borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",height:"x1kpxq89",marginTop:"x1anpbxc",width:"x13oubkp",$$css:!0},title:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",height:"xlup9mm",width:"x1hetxy2",$$css:!0}};function a(){return h.jsxs("div",{className:"x78zum5 xw7yly9",children:[h.jsx(c("CometGlimmer.react"),{index:0,xstyle:i.imageGlimmer}),h.jsxs("div",{children:[h.jsx(c("CometGlimmer.react"),{index:0,xstyle:i.title}),h.jsx(c("CometGlimmer.react"),{index:0,xstyle:i.subtitleOne}),h.jsx(c("CometGlimmer.react"),{index:0,xstyle:i.subtitleTwo})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometTahoeUpNextGlimmer.react",["CometGlimmer.react","CometTahoeUpNextItemGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={root:{display:"x78zum5",flexDirection:"xdt5ytf",$$css:!0},title:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",height:"xlup9mm",width:"x1hetxy2",$$css:!0}},j=3;function a(){return h.jsxs("div",{className:"x78zum5 xdt5ytf",children:[h.jsx(c("CometGlimmer.react"),{index:0,xstyle:i.title}),Array(j).fill().map(function(a,b){return h.jsx(c("CometTahoeUpNextItemGlimmer.react"),{},b)})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometTahoeSidePaneGlimmer.react",["CometTahoeUpNextGlimmer.react","CometVideoCommentComposerGlimmer.react","CometVideoProfileInfoGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(){return h.jsxs("div",{className:"x78zum5 xdt5ytf xw7yly9 xktsk01 x1yztbdb x1d52u69",children:[h.jsx("div",{className:"xh7uebp",children:h.jsx(c("CometVideoProfileInfoGlimmer.react"),{index:0})}),h.jsx(c("CometTahoeUpNextGlimmer.react"),{}),h.jsx("div",{className:"x191j7n5 x10l6tqk",children:h.jsx(c("CometVideoCommentComposerGlimmer.react"),{index:0})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoHomeNewPermalinkConstans",[],(function(a,b,c,d,e,f,g){"use strict";a={heightInNewGrid:{maxHeight:"x1huibft",minHeight:"x1n6yrxt",$$css:!0},leftPaneInNewGrid:{maxWidth:"xyzno7u",minWidth:"x8dqta2",$$css:!0},rightPaneAdjustableWidth:{maxWidth:"x65f84u",minWidth:"x1gvwcb",$$css:!0},rightPaneInNewGrid:{maxWidth:"xmd6oqt",minWidth:"x13o0s5z",$$css:!0}};b=a.heightInNewGrid;c=a.leftPaneInNewGrid;d=a.rightPaneAdjustableWidth;e=a.rightPaneInNewGrid;f=240;a=56;var h=56,i=740,j=540,k=-1,l=46,m=49;g.heightInNewGrid=b;g.leftPaneInNewGrid=c;g.rightPaneAdjustableWidth=d;g.rightPaneInNewGrid=e;g.BOTTOM_GAP_HEIGHT=f;g.FB_TOP_NAV_HEIGHT=a;g.WATCH_TOP_NAV_HEIGHT=h;g.MAX_UNIT_HEIGHT_IN_NEW_GRID=i;g.MIN_UNIT_HEIGHT_IN_NEW_GRID=j;g.FEED_UNIT_POSITION=k;g.TITLE_HEIGHT=l;g.UFI_HEIGHT=m}),98);
__d("useVideoHomeLayoutCalc",["CometAppNavigationConstants","CometGlobalPanelLayoutContext","CometRouteRenderType","CometVideoHomeNewPermalinkConstans","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useContext;function a(){var a=d("CometRouteRenderType").useIsPushView(),b=h(c("CometGlobalPanelLayoutContext"));b=b&&!a?d("CometAppNavigationConstants").GLOBAL_PANEL_WIDTH:0;a=d("CometVideoHomeNewPermalinkConstans").WATCH_TOP_NAV_HEIGHT;a=d("CometAppNavigationConstants").HEADER_HEIGHT+a+d("CometVideoHomeNewPermalinkConstans").BOTTOM_GAP_HEIGHT;var e=d("CometVideoHomeNewPermalinkConstans").MAX_UNIT_HEIGHT_IN_NEW_GRID-d("CometVideoHomeNewPermalinkConstans").TITLE_HEIGHT-d("CometVideoHomeNewPermalinkConstans").UFI_HEIGHT,f=a+d("CometVideoHomeNewPermalinkConstans").TITLE_HEIGHT+d("CometVideoHomeNewPermalinkConstans").UFI_HEIGHT;return{playerMaxWidth:"calc(100vw - "+b+"px - 400px)",playerWidth:"calc(min((100vh - "+f+"px) / 9 * 16,\n      "+e+"px / 9 * 16))",sidePaneWidth:"calc(100vw - "+b+"px - min((100vh -\n    "+f+"px) / 9 * 16,\n      "+e+"px / 9 * 16))",unitHeight:"calc(100vh - "+a+"px)"}}g["default"]=a}),98);
__d("VideoSharingPermalinkLandingFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744468");b=d("FalcoLoggerInternal").create("video_sharing_permalink_landing",a);e=b;g["default"]=e}),98);
__d("CometVideoHomeShareUtils",["ConstUriUtils","VideoSharingPermalinkLandingFalcoEvent"],(function(a,b,c,d,e,f,g){"use strict";var h="extid";a=function(a){var b=d("ConstUriUtils").getUri(window.location.href),c=(b==null?void 0:b.getQueryParam(h))!=null;b!=null&&c&&i(babelHelpers["extends"]({},a,{url:b.toString()}))};var i=function(a){c("VideoSharingPermalinkLandingFalcoEvent").log(function(){return a})};g.sharingTrackingParam=h;g.logPermalinkLandingFromSharingIfQueryParamExists=a;g.logPermalinkLandingFromSharing=i}),98);