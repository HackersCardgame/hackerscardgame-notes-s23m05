;/*FB_PKG_DELIM*/

__d("GroupsCometEntityMenuChatIcon_thread.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"__relay_internal__pv__GroupsCometEntityMenuUseChatThumbnailsrelayprovider"}],kind:"Fragment",metadata:null,name:"GroupsCometEntityMenuChatIcon_thread",selections:[{condition:"__relay_internal__pv__GroupsCometEntityMenuUseChatThumbnailsrelayprovider",kind:"Condition",passingValue:!0,selections:[{alias:null,args:[{kind:"Literal",name:"height",value:40},{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:"image(height:40,width:40)"}]},{condition:"__relay_internal__pv__GroupsCometEntityMenuUseChatThumbnailsrelayprovider",kind:"Condition",passingValue:!1,selections:[{args:null,kind:"FragmentSpread",name:"useGroupsCometChatIcon_thread"}]}],type:"MessengerFBGroupChat",abstractKey:"__isMessengerFBGroupChat"};e.exports=a}),null);
__d("CometLayoutSidePaneAndMainContentResponsiveContainer.react",["BaseContainerQueryElement.react","BaseHeadingContext","BaseStickyHeader.react","BaseView.react","CometLeftRailLayoutContext","CometLeftRailPrimaryContext","CometRouterFocusRegion.react","react","stylex","useMatchViewport"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j=360,k={containerResponsive:{display:"x78zum5",flexDirection:"x1q0g3np",flexGrow:"x1iyjqo2",minHeight:"x1t2pt76",position:"x1n2onr6","@media (max-width: 899px)_flexDirection":"xvrxa7q","@media (max-width: 899px)_zIndex":"x1nhjfyr",$$css:!0},contentArea:{display:"x78zum5",flexDirection:"xdt5ytf",flexGrow:"x1iyjqo2",minHeight:"x1t2pt76",minWidth:"xeuugli",position:"x1n2onr6",zIndex:"x1ja2u2z",$$css:!0},contentAreaWithLeftRailPrimary:{"@media (max-width: 899px)_display":"x1daaz14",$$css:!0},leftRailResponsive:{display:"x78zum5",flexShrink:"x2lah0s",minHeight:"x1t2pt76",overflowAnchor:"x1xzczws",width:"x1cvmir6",zIndex:"x1vjfegm",$$css:!0},mainContent:{display:"x78zum5",flexGrow:"x1iyjqo2",minHeight:"x1t2pt76","@media (min-width: 900px)_width":"x1lspesw",$$css:!0},responsiveHeader:{display:"x1lliihq",zIndex:"x1vjfegm",$$css:!0}};function a(a){var b=a.hideLeftRail;b=b===void 0?!1:b;var d=a.leftRailContent,e=a.leftRailHeading,f=a.leftRailPrimary;f=f===void 0?!1:f;var g=a.mainContent,l=a.mainContentHeading,m=a.responsiveContainerStyles;a=a.testid;a=i(c("BaseHeadingContext"));a=h.jsx("div",{className:c("stylex")(k.contentArea,f===!0&&k.contentAreaWithLeftRailPrimary),children:h.jsx(c("CometRouterFocusRegion.react"),{children:h.jsx(c("CometLeftRailLayoutContext").Provider,{value:!0,children:h.jsx(c("BaseHeadingContext").Provider,{value:a+1,children:g})})})});g=h.jsx(c("BaseContainerQueryElement.react"),{"aria-label":e,breakpoint:900,"data-testid":void 0,inverseToContainer:!0,maxWidth:j,minWidth:j,role:"navigation",xstyle:k.leftRailResponsive,children:d});var n=c("useMatchViewport")("max","width",899);l=h.jsx(c("BaseContainerQueryElement.react"),{"aria-label":l,breakpoint:900,inverseToContainer:!0,maxWidth:"100%",minWidth:"calc(100% - "+j+"px)",role:"main",xstyle:k.mainContent,children:a});return h.jsx(c("BaseView.react"),{testid:void 0,xstyle:[k.containerResponsive,m],children:h.jsxs(c("CometLeftRailPrimaryContext").Provider,{value:f,children:[n?h.jsx(c("BaseStickyHeader.react"),{xstyle:k.responsiveHeader,children:h.jsx(c("BaseContainerQueryElement.react"),{"aria-label":e,breakpoint:900,"data-testid":void 0,inverseToContainer:!0,maxWidth:"100%",minWidth:j,role:"navigation",children:d})}):!b&&g,l]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometLayoutSidePaneResponsive.react",["CometGlimmer.react","CometLeftRailComponent.react","CometPivotLinkTabs.react","CometResponsiveTopNav.react","react","useMatchViewport"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={glimmerContainer:{paddingEnd:"x1pi30zi",paddingStart:"x1swvt13",$$css:!0},left:{display:"x78zum5",minWidth:"x7ja8zs",$$css:!0},top:{backgroundColor:"x1ve1bff",borderBottom:"xua58t2",display:"x78zum5",paddingTop:"x889kno",paddingBottom:"x1a8lsjc",zIndex:"x1vjfegm",$$css:!0},ufiGlimmer:{borderTopStartRadius:"x8u2fvd",borderTopEndRadius:"x1ht7hnu",borderBottomEndRadius:"x1quq95r",borderBottomStartRadius:"x5yzy4c",height:"x170jfvy",marginTop:"xw7yly9",marginEnd:"xktsk01",marginBottom:"x1yztbdb",marginStart:"x1d52u69",width:"xygnafs",$$css:!0}};function a(a){var b=a.footer,d=a.header,e=a.primaryNav,f=a.search,g=a.secondaryNav,j=a.stickyNav,k=a.topNav;a=a.topTabs;var l=c("useMatchViewport")("max","width",899);if(l){l=(f==null?void 0:f.topSearch)!=null||a!=null?h.jsx(c("CometResponsiveTopNav.react"),{action:f!=null?f.topSearch:void 0,tabs:a!=null?h.jsx(c("CometPivotLinkTabs.react"),{tabs:a}):void 0,xstyle:i.top}):null;return(a=k)!=null?a:l}return h.jsx(c("CometLeftRailComponent.react"),{footer:b,header:d,primaryNav:e,search:f!=null?f.leftSearch:null,secondaryNav:g,stickyNav:j,xstyle:i.left})}a.displayName=a.name+" [from "+f.id+"]";function b(a){var b=a.header;a=a.primaryNavPlaceholder;return h.jsxs(h.Fragment,{children:[h.jsx(c("CometLeftRailComponent.react"),{header:b,primaryNav:a,xstyle:i.left}),h.jsxs("div",{className:["x1ve1bff xua58t2 x78zum5 x889kno x1a8lsjc x1vjfegm","x1pi30zi x1swvt13"],children:[h.jsx(c("CometGlimmer.react"),{index:1,xstyle:i.ufiGlimmer}),h.jsx(c("CometGlimmer.react"),{index:2,xstyle:i.ufiGlimmer}),h.jsx(c("CometGlimmer.react"),{index:3,xstyle:i.ufiGlimmer})]})]})}b.displayName=b.name+" [from "+f.id+"]";g.CometLayoutSidePaneResponsive=a;g.CometLayoutSidePaneResponsiveLoading=b}),98);
__d("AppMessengerFilled20.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsxs("svg",babelHelpers["extends"]({fill:"currentColor",viewBox:"0 0 20 20",width:"1em",height:"1em"},a,{children:[a.title!=null&&h.jsx("title",{children:a.title}),a.children!=null&&h.jsx("defs",{children:a.children}),h.jsx("path",{d:"M10 2a7.72 7.72 0 0 0-8 7.76 7.593 7.593 0 0 0 2.512 5.74.637.637 0 0 1 .215.456l.044 1.423a.64.64 0 0 0 .9.566l1.588-.7a.634.634 0 0 1 .427-.032A8.716 8.716 0 0 0 10 17.52 7.764 7.764 0 1 0 10 2zm4.937 5.915-2.415 3.831a1.234 1.234 0 0 1-1.783.329l-1.921-1.441a.494.494 0 0 0-.594 0L5.63 12.605a.391.391 0 0 1-.567-.52l2.415-3.831a1.234 1.234 0 0 1 1.783-.329l1.921 1.441a.494.494 0 0 0 .594 0L14.37 7.4a.391.391 0 0 1 .567.515z",fillRule:"evenodd"})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("GroupsCometEntityMenuChatIcon.react",["CometIcon.react","CometProfilePhoto.react","CometRelay","FundraiserFallbackImageUtils","GroupsCometEntityMenuChatIcon_thread.graphql","GroupsCometEntityMenuIsChatCentric.relayprovider","GroupsCometEntityMenuUseChatThumbnails.relayprovider","ImageIconSource","cr:3707","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=(e=b("cr:3707"))!=null?e:function(a){return null};function a(a){var e=a.isSelected;a=a.thread;a=d("CometRelay").useFragment(h!==void 0?h:h=b("GroupsCometEntityMenuChatIcon_thread.graphql"),a);var f=j(a);a=a==null?void 0:(a=a.image)==null?void 0:a.uri;if(c("GroupsCometEntityMenuUseChatThumbnails.relayprovider").get()){return i.jsx(c("CometProfilePhoto.react"),{shape:"circle",size:c("GroupsCometEntityMenuIsChatCentric.relayprovider").get()?48:32,source:{uri:(a=a)!=null?a:d("FundraiserFallbackImageUtils").FALLBACK_ICON_URI}})}return i.jsx(c("CometIcon.react"),{color:e?"highlight":void 0,icon:(a=f)!=null?a:new(c("ImageIconSource"))(d("FundraiserFallbackImageUtils").FALLBACK_ICON_URI,20,20),size:20})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoChatLoggingDispatcherContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({setLoggingData:null});g["default"]=b}),98);
__d("VideoChatLoggingContextProvider.react",["VideoChatLoggingDataContext","VideoChatLoggingDispatcherContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useContext,k=b.useMemo,l=b.useState;function a(a){var b=a.children,d=a.initialLoggingData,e=j(c("VideoChatLoggingDataContext"));a=l(function(){var a;return e!=null?babelHelpers["extends"]({},e,d):(a=d)!=null?a:{}});var f=a[0],g=a[1],m=i(function(a){g(babelHelpers["extends"]({},f,a))},[f]);a=k(function(){return{setLoggingData:m}},[m]);return h.jsx(c("VideoChatLoggingDataContext").Provider,{value:f,children:h.jsx(c("VideoChatLoggingDispatcherContext").Provider,{value:a,children:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometSearchEntityScope",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({GROUP:"group",PAGE:"page",USER:"user"});c=a;f["default"]=c}),66);
__d("XCometGroupScopedSearchControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/groups/{idorvanity}/search/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometPageScopedSearchControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/page/{idorvanity}/search/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometUserScopedSearchControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/profile/{idorvanity}/search/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("useCometEntityScopedSearchRouteUrlBuilder",["XCometGroupScopedSearchControllerRouteBuilder","XCometPageScopedSearchControllerRouteBuilder","XCometUserScopedSearchControllerRouteBuilder","react","useSearchCometResultsCommonRouteParamBuilder"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function i(a){switch(a){case"group":return c("XCometGroupScopedSearchControllerRouteBuilder");case"page":return c("XCometPageScopedSearchControllerRouteBuilder");case"user":return c("XCometUserScopedSearchControllerRouteBuilder")}}function a(a){var b=a.entityID,d=a.entityType;a=babelHelpers.objectWithoutPropertiesLoose(a,["entityID","entityType"]);var e=c("useSearchCometResultsCommonRouteParamBuilder")(a);return h(function(a){return i(d).buildURL(babelHelpers["extends"]({idorvanity:b},e.build(a)))},[e,b,d])}g["default"]=a}),98);
__d("AppMessengerOutline20.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsxs("svg",babelHelpers["extends"]({fill:"currentColor",viewBox:"0 0 20 20",width:"1em",height:"1em"},a,{children:[a.title!=null&&h.jsx("title",{children:a.title}),a.children!=null&&h.jsx("defs",{children:a.children}),h.jsx("g",{fillRule:"evenodd",transform:"translate(-446 -398)",children:h.jsxs("g",{children:[h.jsx("path",{fillRule:"nonzero",d:"M97.237 212.031c.033 1.076 1.087 1.77 2.059 1.34l1.831-.807c1.04.285 1.955.436 2.873.436 5.645 0 10-4.227 10-9.778 0-5.54-4.345-9.722-10-9.722s-10 4.181-10 9.722c0 2.767 1.086 5.266 3.002 7.056l.153.14c.023.02.043.04.06.057l.023.024v1.532zm1.5-1.645c-.012-.429-.199-.724-.504-1.014l-.078-.072c-1.693-1.514-2.655-3.665-2.655-6.078 0-4.7 3.66-8.222 8.5-8.222s8.5 3.523 8.5 8.222c0 4.712-3.673 8.278-8.5 8.278-.767 0-1.556-.13-2.479-.384a1.489 1.489 0 0 0-.996.074l-1.788.789v-1.593z",transform:"translate(352 204.5)"}),h.jsx("path",{d:"m109.924 200.978-2.898 4.634a1.474 1.474 0 0 1-2.14.398l-2.305-1.743a.588.588 0 0 0-.712.002l-3.113 2.381c-.416.318-.958-.183-.68-.628l2.898-4.633a1.473 1.473 0 0 1 2.14-.398l2.304 1.742c.212.16.503.16.713-.002l3.113-2.38c.416-.319.958.183.68.627",transform:"translate(352 204.5)"})]})})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("CalendarOutline20.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsxs("svg",babelHelpers["extends"]({fill:"currentColor",viewBox:"0 0 20 20",width:"1em",height:"1em"},a,{children:[a.title!=null&&h.jsx("title",{children:a.title}),a.children!=null&&h.jsx("defs",{children:a.children}),h.jsx("g",{fillRule:"evenodd",transform:"translate(-446 -398)",children:h.jsxs("g",{fillRule:"nonzero",transform:"translate(352.5 204.5)",children:[h.jsx("path",{d:"M109.068 213H97.932A3.941 3.941 0 0 1 94 209.069v-11.137A3.941 3.941 0 0 1 97.932 194h11.136a3.94 3.94 0 0 1 3.932 3.931v11.137a3.94 3.94 0 0 1-3.932 3.932zm0-1.5a2.44 2.44 0 0 0 2.432-2.431v-11.137a2.44 2.44 0 0 0-2.432-2.432H97.932a2.441 2.441 0 0 0-2.432 2.431v11.137a2.441 2.441 0 0 0 2.432 2.432h11.136z"}),h.jsx("path",{d:"M100 199h7a.75.75 0 1 0 0-1.5h-7a.75.75 0 1 0 0 1.5z"}),h.jsx("path",{d:"M94.75 201.958 112.459 201.958 112.459 200.458 94.75 200.458z"}),h.jsx("path",{d:"M94.791 207.5 112.5 207.5 112.5 206 94.791 206z"}),h.jsx("path",{d:"M106 201.25 106 212.5 107.5 212.5 107.5 201.25z"}),h.jsx("path",{d:"M99.5 201.25 99.5 212.5 101 212.5 101 201.25z"})]})})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("GroupsEntityScopedCometTypeaheadDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4958745114174592"}),null);