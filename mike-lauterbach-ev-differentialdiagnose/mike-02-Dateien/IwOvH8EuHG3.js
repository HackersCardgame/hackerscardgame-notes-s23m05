;/*FB_PKG_DELIM*/

__d("CometFeedStoryVideoCTAScreenCallToAction_attachment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryVideoCTAScreenCallToAction_attachment",selections:[{alias:"cta_screen_renderer",args:[{kind:"Literal",name:"supported",value:["StoryAttachmentLinkOpenCallToActionRenderer","StoryAttachmentLeadGenCallToActionRenderer"]}],concreteType:null,kind:"LinkedField",name:"call_to_action_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedStoryVideoCTAScreenCallToAction_attachment",fragmentName:"CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"StoryAttachmentLinkOpenCallToActionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedStoryVideoCTAScreenCallToAction_attachment",fragmentName:"CometFeedStoryVideoCTAScreenLeadGenCallToAction_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"StoryAttachmentLeadGenCallToActionRenderer",abstractKey:null}],storageKey:'call_to_action_renderer(supported:["StoryAttachmentLinkOpenCallToActionRenderer","StoryAttachmentLeadGenCallToActionRenderer"])'}],type:"StoryAttachment",abstractKey:null};e.exports=a}),null);
__d("CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_link",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"link_display",storageKey:null},{alias:null,args:[{kind:"Literal",name:"scale",value:2}],concreteType:"Image",kind:"LinkedField",name:"link_video_endscreen_icon",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:"link_video_endscreen_icon(scale:2)"},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"LinkOpenActionLink",abstractKey:null}],storageKey:null}]};e.exports=a}),null);
__d("CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_link",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"link_display",storageKey:null},{alias:null,args:[{kind:"Literal",name:"scale",value:2}],concreteType:"Image",kind:"LinkedField",name:"link_video_endscreen_icon",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:"link_video_endscreen_icon(scale:2)"},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"LinkOpenActionLink",abstractKey:null}],storageKey:null}],type:"StoryAttachmentLinkOpenCallToActionRenderer",abstractKey:null};e.exports=a}),null);
__d("CometFeedStoryVideoCTAScreenOverlay_attachment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryVideoCTAScreenOverlay_attachment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_links",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"link_style",storageKey:null}],type:"LinkOpenActionLink",abstractKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometFeedStoryVideoCTAScreenCallToAction_attachment"}],type:"StoryAttachment",abstractKey:null};e.exports=a}),null);
__d("CometFeedVideoPlayerPlaceholder_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedVideoPlayerPlaceholder_video",selections:[{args:null,kind:"FragmentSpread",name:"VideoPlayerCometFeedThumbnail_video"}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("useCometFeedStoryVideoCTAScreenOverlay_attachment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometFeedStoryVideoCTAScreenOverlay_attachment",selections:[{args:null,kind:"FragmentSpread",name:"CometFeedStoryVideoCTAScreenOverlay_attachment"},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_links",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],type:"StoryAttachment",abstractKey:null};e.exports=a}),null);
__d("CometFeedStoryVideoCTAScreenCallToAction.react",["CometFeedStoryVideoCTAScreenCallToAction_attachment.graphql","CometRelay","CometTrackingNodeProvider.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.attachment;a=babelHelpers.objectWithoutPropertiesLoose(a,["attachment"]);e=d("CometRelay").useFragment(h!==void 0?h:h=b("CometFeedStoryVideoCTAScreenCallToAction_attachment.graphql"),e);return e.cta_screen_renderer==null?null:i.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:186,children:i.jsx(d("CometRelay").MatchContainer,{match:e.cta_screen_renderer,props:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react",["CometImage.react","CometPressable.react","TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={image:{height:"x1vqgdyp",width:"x100vrsf",$$css:!0},interactiveArea:{height:"x5yr21d",position:"x10l6tqk",start:"x17qophe",width:"xh8yej3",$$css:!0},root:{alignItems:"x6s0dn4",display:"x78zum5",flexDirection:"x1q0g3np",position:"x1n2onr6",textAlign:"x1yc453h",$$css:!0},smallImage:{height:"x1qx5ct2",width:"xw4jnvo",$$css:!0},smallText:{lineHeight:"xo5v014",paddingStart:"x1e558r4",position:"x1n2onr6",whiteSpace:"xuxw1ft",$$css:!0},text:{lineHeight:"xo5v014",paddingStart:"x1ye3gou",position:"x1n2onr6",whiteSpace:"xuxw1ft",$$css:!0},textLinkDisplay:{marginTop:"x1gslohp",maxWidth:"x1racy4e",$$css:!0}};function a(a){var b=a.buttonSize;b=b===void 0?"large":b;var d=a.iconImageUri,e=a.label,f=a.linkDisplay,g=a.title,j=a.triggerRef;a=babelHelpers.objectWithoutPropertiesLoose(a,["buttonSize","iconImageUri","label","linkDisplay","title","triggerRef"]);return b==="small"?h.jsxs("div",{className:"x6s0dn4 x78zum5 x1q0g3np x1n2onr6 x1yc453h",children:[h.jsx(c("CometImage.react"),{alt:e,src:d,xstyle:i.smallImage}),h.jsx("div",{className:"xo5v014 x1e558r4 x1n2onr6 xuxw1ft",children:h.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"body4",children:g})}),h.jsx(c("CometPressable.react"),babelHelpers["extends"]({},a,{label:e,ref:j,xstyle:i.interactiveArea}))]}):h.jsxs("div",{className:"x6s0dn4 x78zum5 x1q0g3np x1n2onr6 x1yc453h",children:[h.jsx(c("CometImage.react"),{alt:e,src:d,xstyle:i.image}),h.jsxs("div",{className:"xo5v014 x1ye3gou x1n2onr6 xuxw1ft",children:[h.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"headlineEmphasized3",children:g}),f!=null&&b!=="large_without_link"?h.jsx("div",{className:"x1gslohp x1racy4e",children:h.jsx(c("TetraText.react"),{color:"primaryOnMedia",numberOfLines:1,type:"headline3",children:f})}):null]}),h.jsx(c("CometPressable.react"),babelHelpers["extends"]({},a,{label:e,ref:j,xstyle:i.interactiveArea}))]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedStoryVideoCTAScreenLinkOpenCallToAction.react",["CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink.graphql","CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react","CometRelay","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e,f,g=a.actionLink;a=a.buttonSize;a=a===void 0?"large":a;g=d("CometRelay").useFragment(h!==void 0?h:h=b("CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink.graphql"),g);g=g.action_link;if(g==null||g.url==null||g.title==null)return null;var j=g.url;e=(e=g.title)!=null?e:"";f=(f=g.link_display)!=null?f:"";g=(g=(g=g.link_video_endscreen_icon)==null?void 0:g.uri)!=null?g:"/images/calltoaction/videoendscreen/learnmore_40dp-2x.png";j={rel:"nofollow",target:"_blank",url:j};return i.jsx(c("CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react"),{buttonSize:a,iconImageUri:g,label:e,linkDisplay:f,linkProps:j,title:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedStoryVideoCTAScreenOverlay.react",["fbt","CometFeedStoryVideoCTAScreenCallToAction.react","CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react","CometFeedStoryVideoCTAScreenOverlay_attachment.graphql","CometImage.react","CometPressable.react","CometRelay","CometTrackingNodeProvider.react","TetraText.react","VideoPlayerHooks","VideoPlayerInteractionOverlay.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=d("react").useState,l=["BUTTON_WITH_TEXT_ONLY","ATTACHMENT_AND_ENDSCREEN","VIDEO_DR_STYLE"],m={image:{height:"x1qx5ct2",width:"xw4jnvo",$$css:!0},interactiveArea:{height:"x5yr21d",position:"x10l6tqk",start:"x17qophe",width:"xh8yej3",$$css:!0},root:{alignItems:"x6s0dn4",bottom:"x1ey2m1c",display:"x78zum5",flexDirection:"x1q0g3np",paddingTop:"xyinxu5",paddingEnd:"x1ou2tus",paddingBottom:"x1g2khh7",paddingStart:"x1egjynq",position:"x10l6tqk",start:"x17qophe",$$css:!0},title:{lineHeight:"xo5v014",paddingStart:"x1e558r4",verticalAlign:"x3ajldb",$$css:!0}};function n(a){var b=a.iconImageUri,d=a.label,e=a.onClick;a=a.title;var f=k(!1),g=f[0],h=f[1];return j.jsxs("div",{className:"x6s0dn4 x1ey2m1c x78zum5 x1q0g3np xyinxu5 x1ou2tus x1g2khh7 x1egjynq x10l6tqk x17qophe",onMouseLeave:function(){h(!1)},onMouseOver:function(){h(!0)},children:[j.jsx(c("CometImage.react"),{src:b,xstyle:m.image}),g?j.jsx("div",{className:"xo5v014 x1e558r4 x3ajldb",children:j.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"headlineEmphasized4",children:a})}):null,j.jsx(c("CometPressable.react"),{label:d,onPress:e,xstyle:m.interactiveArea})]})}n.displayName=n.name+" [from "+f.id+"]";function a(a){var e,f=a.adClientToken,g=a.adID,k=a.attachment,m=a.buttonSize;m=m===void 0?"large":m;a=a.ctaScreenOverlayType;k=d("CometRelay").useFragment(i!==void 0?i:i=b("CometFeedStoryVideoCTAScreenOverlay_attachment.graphql"),k);var o=d("VideoPlayerHooks").useController();if(k==null)return null;e=(e=k.action_links)!=null?e:[];e=e[0];if(e!=null&&e.__typename==="LinkOpenActionLink"&&(e.link_style!=null&&l.indexOf(e.link_style)===-1))return null;e=j.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:186,children:j.jsx(c("CometFeedStoryVideoCTAScreenCallToAction.react"),{adClientToken:f,adID:g,attachment:k,buttonSize:m})});f=a==="pausescreen"?j.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:206,children:j.jsx(c("CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react"),{buttonSize:m,iconImageUri:"/images/video/play_circle_40dp-2x.png",label:h._("__JHASH__W6u25edj0NP__JHASH__"),onPress:function(){o.play("user_initiated")},title:h._("__JHASH__YFf-NQx2b67__JHASH__")})}):null;g=a==="endscreen"?j.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:188,children:m==="small"?j.jsx(c("CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react"),{buttonSize:m,iconImageUri:"/images/video/replay_20dp-2x.png",label:h._("__JHASH__W6u25edj0NP__JHASH__"),onPress:function(){o.play("user_initiated")},title:h._("__JHASH__lKcDNU8LjG___JHASH__")}):j.jsx(n,{iconImageUri:"/images/video/replay_20dp-2x.png",label:h._("__JHASH__W6u25edj0NP__JHASH__"),onClick:function(){o.play("user_initiated")},title:h._("__JHASH__lKcDNU8LjG___JHASH__")})}):null;return m==="small"?j.jsx(d("VideoPlayerInteractionOverlay.react").VideoPlayerInteractionOverlay,{children:j.jsxs("div",{className:"x6s0dn4 xjb1437 x1ey2m1c x9f619 x78zum5 xds687c xdt5ytf xl56j7k x10l6tqk x17qophe x13vifvy x1d8287x x19991ni xl405pv",children:[j.jsxs("div",{className:"x78zum5 xdt5ytf xl56j7k x1n2onr6",children:[f,f!=null?j.jsx("div",{className:"x1qx5ct2"}):null,e]}),g!=null?j.jsx("div",{className:"x1qx5ct2"}):null,j.jsx("div",{className:"x78zum5 xdt5ytf xl56j7k x1n2onr6",children:g})]})}):j.jsx(d("VideoPlayerInteractionOverlay.react").VideoPlayerInteractionOverlay,{children:j.jsxs("div",{className:"x6s0dn4 xjb1437 x1ey2m1c x9f619 x78zum5 xds687c xdt5ytf xl56j7k x10l6tqk x17qophe x13vifvy x1d8287x x19991ni xl405pv",children:[j.jsxs("div",{className:"x78zum5 xdt5ytf xl56j7k x1n2onr6",children:[f,f!=null?j.jsx("div",{className:"x1qx5ct2"}):null,e]}),g]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedVideoPlayerPlaceholder.react",["fbt","CometFeedVideoPlayerPlaceholder_video.graphql","CometPressable.react","CometRelay","VideoPlayerCometFeedThumbnail.react","VideoPlayerPlayButton.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k={pressable:{cursor:"x1ypdohk",display:"x1lliihq",pointerEvents:"x67bb7w",$$css:!0},root:{alignItems:"x6s0dn4",bottom:"x1ey2m1c",boxSizing:"x9f619",display:"x78zum5",end:"xds687c",justifyContent:"xl56j7k",pointerEvents:"x47corl",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0}};function a(a){var e=d("CometRelay").useFragment(i!==void 0?i:i=b("CometFeedVideoPlayerPlaceholder_video.graphql"),a.video);e=j.jsxs(j.Fragment,{children:[j.jsx(c("VideoPlayerCometFeedThumbnail.react"),{video:e}),j.jsx(c("VideoPlayerPlayButton.react"),{isVisible:!0})]});return typeof a.onClick==="function"?j.jsx(c("CometPressable.react"),{display:"block",label:h._("__JHASH__pymzrO9zrya__JHASH__"),onPress:a.onClick,overlayDisabled:!0,xstyle:[k.root,k.pressable],children:e}):j.jsx("div",{className:"x6s0dn4 x1ey2m1c x9f619 x78zum5 xds687c xl56j7k x47corl x10l6tqk x17qophe x13vifvy",children:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometObserveChildrenRenderedAnyDOM.react",["react","useStable"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");e=d("react");var h=e.useEffect,i=e.useLayoutEffect,j=e.useRef,k={attributes:!1,characterData:!0,childList:!0,subtree:!1};function a(a){var b=a.children,d=a.onChanged,e=j(d);i(function(){e.current=d;return function(){e.current=null}},[d]);var f=j(!1),g=j(null),l=j(null);a=c("useStable")(function(){function a(){var a=e.current;if(a){var b,c=f.current;b=((b=l.current)==null?void 0:b.firstChild)!=null;f.current=b;b!==c&&a(b)}}function b(b){if(b!==l.current){l.current=b;var c=g.current;c&&(c.disconnect(),g.current=null);if(b==null)a();else{c=new MutationObserver(function(b){a()});g.current=c;c.observe(b,k);a()}}}return b});h(function(){return function(){g.current&&(g.current.disconnect(),g.current=null)}},[]);return b({containerElementRefCallback:a})}a.displayName=a.name+" [from "+f.id+"]";d=b.memo(a);g["default"]=d}),98);
__d("VideoPlayerObserveChildrenRenderedAnyDOM.react",["CometObserveChildrenRenderedAnyDOM.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useCallback;function a(a){var b=a.children;a=a.onChanged;var d=i(function(a){a=a.containerElementRefCallback;return h.jsx("div",{className:"xqtp20y x1plvlek xryxfnj x1uhb9sk xnalus7",ref:a,children:b})},[b]);return h.jsx(c("CometObserveChildrenRenderedAnyDOM.react"),{onChanged:a,children:d})}a.displayName=a.name+" [from "+f.id+"]";b=h.memo(a);g["default"]=b}),98);
__d("useCometFeedStoryVideoCTAScreenOverlay",["CometFeedStoryVideoCTAScreenOverlay.react","CometRelay","VideoPlayerHooks","VideoPlayerObserveChildrenRenderedAnyDOM.react","react","useCometFeedStoryVideoCTAScreenOverlay_attachment.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useEffect,k=e.useState,l=["LinkOpenActionLink","LeadGenActionLink"];function a(a){var e=a.adClientToken,f=a.adID,g=a.attachment;a=a.buttonSize;a=a===void 0?"large":a;g=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometFeedStoryVideoCTAScreenOverlay_attachment.graphql"),g);var m=k(!1),n=m[0];m=m[1];var o=d("VideoPlayerHooks").useVideoPlaybackEnded(),p=d("VideoPlayerHooks").useEnded(),q=d("VideoPlayerHooks").useIsFullscreen(),r=d("VideoPlayerHooks").usePaused(),s=k(!1),t=s[0],u=s[1];s=g==null?void 0:g.action_links.some(function(a){return l.includes(a.__typename)});j(function(){r||u(!0)},[r]);q=!q&&s===!0;s=q&&o?"endscreen":q&&t&&r&&!p?"pausescreen":null;o=g!=null&&s!=null?i.jsx(c("VideoPlayerObserveChildrenRenderedAnyDOM.react"),{onChanged:m,children:i.jsx(c("CometFeedStoryVideoCTAScreenOverlay.react"),{adClientToken:e,adID:f,attachment:g,buttonSize:a,ctaScreenOverlayType:s})}):null;return{ctaScreenOverlayElement:o,ctaScreenOverlayType:s,isRenderedCTAScreenOverlay:n}}g["default"]=a}),98);
__d("CometComposerStoryLinkAttachmentPreviewContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j=h.createContext(!1);function a(a){return h.jsx(j.Provider,{value:!0,children:a.children})}a.displayName=a.name+" [from "+f.id+"]";function b(){return i(j)}g.CometComposerStoryLinkAttachmentPreviewContextProvider=a;g.useCometComposerStoryLinkAttachmentPreviewContext=b}),98);