;/*FB_PKG_DELIM*/

__d("CometLeftRailBreadcrumbLink.react",["CometLink.react","TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.isCurrentPage;b=b===void 0?!1:b;a=a.linkInfo;var d="secondary",e=a.url!=null||a.onPress!=null,f=a.replace!=null?a.replace:!1;e=e?h.jsx(c("CometLink.react"),{"aria-current":b?"page":void 0,color:d,href:a.url,onClick:a.onPress,replace:f,target:f===!0?"_self":void 0,weight:"normal",children:a.label}):a.label;return h.jsx(c("TetraText.react"),{color:d,type:"meta3",children:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometLeftRailBreadcrumbs.react",["fbt","CometLeftRailBreadcrumbLink.react","TetraText.react","TetraTextPairing.react","gkx","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.breadcrumbs;a=a.label;var d=" \u203a ",e=b.map(function(a,e){return i.jsxs(i.Fragment,{children:[e===0?null:i.jsx(c("TetraText.react"),{color:"tertiary",type:"meta3",children:d}),i.jsx(c("CometLeftRailBreadcrumbLink.react"),{isCurrentPage:e===b.length-1,linkInfo:a})]},e)});return i.jsx("div",{"aria-label":(a=a)!=null?a:h._("__JHASH__GxBiwUNXJHe__JHASH__"),"data-testid":void 0,role:"navigation",suppressHydrationWarning:!c("gkx")("708253"),children:i.jsx(c("TetraTextPairing.react"),{body:e,level:2})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometLeftRailAndMainContentContainer.react",["BaseHeadingContext","BaseRow.react","BaseRowItem.react","CometLeftRailLayoutContext","CometLeftRailPrimaryContext","CometRouterFocusRegion.react","gkx","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j={container:{display:"x78zum5",flexGrow:"x1iyjqo2",minHeight:"x1t2pt76",position:"x1n2onr6",zIndex:"x1ja2u2z",$$css:!0},containerWithMinWidth:{minWidth:"x1h6rjhl",$$css:!0},contentArea:{display:"x78zum5",flexDirection:"xdt5ytf",flexGrow:"x1iyjqo2",minHeight:"x1t2pt76",minWidth:"xeuugli",position:"x1n2onr6",zIndex:"x1ja2u2z",$$css:!0},contentAreaWithLeftRailPrimary:{"@media (max-width: 899px)_display":"x1daaz14",$$css:!0},hideLeftRail:{display:"x1s85apg",$$css:!0},leftRail:{flexShrink:"x2lah0s",minHeight:"x1t2pt76",overflowAnchor:"x1xzczws",width:"x1cvmir6",zIndex:"x1vjfegm",$$css:!0},leftRailPrimaryResponsive:{"@media (max-width: 899px)_width":"xwn1f64",$$css:!0},leftRailSecondaryResponsive:{"@media (max-width: 899px)_display":"x1daaz14",$$css:!0},mainContent:{display:"x78zum5",minHeight:"x1t2pt76",$$css:!0}};function a(a){var b=a.hideLeftRail;b=b===void 0?!1:b;var d=a.isLeftRailResponsive;d=d===void 0?!1:d;var e=a.leftRailContent,f=a.leftRailHeading,g=a.leftRailPrimary;g=g===void 0?!1:g;var k=a.leftRailRole;k=k===void 0?"navigation":k;var l=a.mainContent,m=a.mainContentHeading;a=a.testid;a=i(c("BaseHeadingContext"));a=h.jsx("div",{className:c("stylex")(j.contentArea,g===!0&&j.contentAreaWithLeftRailPrimary),children:h.jsx(c("CometLeftRailLayoutContext").Provider,{value:!0,children:h.jsx(c("BaseHeadingContext").Provider,{value:a+1,children:l})})});l=k==="main";return h.jsx(c("BaseRow.react"),{align:"start",testid:void 0,xstyle:[j.container,!d&&j.containerWithMinWidth],children:h.jsxs(c("CometLeftRailPrimaryContext").Provider,{value:g,children:[h.jsx(c("BaseRowItem.react"),{"aria-label":f,role:k,suppressHydrationWarning:!c("gkx")("708253"),xstyle:[j.leftRail,d&&!l&&j.leftRailSecondaryResponsive,d&&l&&j.leftRailPrimaryResponsive,b&&j.hideLeftRail],children:l?h.jsx(c("CometRouterFocusRegion.react"),{children:e}):e}),h.jsx(c("BaseRowItem.react"),{"aria-label":m,expanding:!0,role:l?"complementary":"main",suppressHydrationWarning:!c("gkx")("708253"),xstyle:j.mainContent,children:l?a:h.jsx(c("CometRouterFocusRegion.react"),{children:a})})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometLeftRailListItemSeparator.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.marginHorizontal;b=b===void 0?16:b;a=a.marginVertical;a=a===void 0?8:a;return h.jsx("div",{className:"xdppsyt",role:"separator",style:{margin:a+"px "+b+"px"}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometLeftRailShadow.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={leftRailPrimaryShadow:{"@media (max-width: 899px)_display":"x1daaz14",$$css:!0},leftRailShadow:{backgroundImage:"xkj2jnh",backgroundRepeat:"x9wwp8f",backgroundSize:"xlk3v91",bottom:"x1ey2m1c",end:"x4n2nu6",pointerEvents:"x47corl",position:"x10l6tqk",top:"x13vifvy",width:"xci0xqf",$$css:!0}};function a(a){a=a.isLeftRailPrimary;return h.jsx("div",{className:c("stylex")(i.leftRailShadow,a===!0&&i.leftRailPrimaryShadow)})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometLeftRailComponent.react",["BaseHeadingContext","CometBase.react","CometLeftRailListItemSeparator.react","CometLeftRailPrimaryContext","CometLeftRailShadow.react","CometRouteRenderType","CometScrollView.react","gkx","react","stylex","useIsLoggedOut"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useContext,k=b.useState,l=c("gkx")("708253"),m=c("gkx")("1217157"),n=c("gkx")("1745416"),o={headerOnGemini:{marginTop:"xvkph5b",$$css:!0},leftRailContainer:{backgroundColor:"x2bj2ny",boxSizing:"x1afcbsf",display:"x78zum5",flexDirection:"xdt5ytf",minHeight:"x1t2pt76",position:"x1n2onr6",top:"x13vifvy",width:"x1cvmir6","@media (max-width: 899px)_height":"x1p0ryx0","@media (max-width: 899px)_position":"xojf56a","@media (min-width: 900px)_maxHeight":"xcoz2nd","@media (min-width: 900px)_position":"x1r98mxo",$$css:!0},leftRailContainerInBizWeb:{backgroundColor:"x2bj2ny",boxSizing:"x1afcbsf",display:"x78zum5",flexDirection:"xdt5ytf",minHeight:"x1t2pt76",position:"x1n2onr6",top:"x13vifvy",width:"x1cvmir6",$$css:!0},leftRailContainerInDialog:{top:"x13vifvy","@media (max-width: 899px)_minHeight":"x1p5gv8h","@media (max-width: 899px)_position":"xoa9owu","@media (min-width: 900px)_minHeight":"xgfcpv","@media (min-width: 900px)_position":"x1es02x0",$$css:!0},leftRailContainerPermalink:{top:"xxzkxad","@media (max-width: 899px)_height":"xh78kpn","@media (max-width: 899px)_position":"xojf56a","@media (min-width: 900px)_position":"x1r98mxo",$$css:!0},leftRailContainerPermalinkBlue:{top:"x1si2f76","@media (max-width: 899px)_position":"xojf56a","@media (min-width: 900px)_position":"x1r98mxo",$$css:!0},leftRailContainerPermalinkBlueLoggedOut:{top:"x13vifvy","@media (max-width: 899px)_minHeight":"x1p5gv8h","@media (max-width: 899px)_position":"xoa9owu","@media (min-width: 900px)_minHeight":"xgfcpv","@media (min-width: 900px)_position":"x1es02x0",$$css:!0},leftRailContainerPushViewHeader:{boxShadow:"x133r36p",flexShrink:"x2lah0s",height:"x1s65kcs",$$css:!0},leftRailPrimaryContainer:{"@media (max-width: 899px)_height":"xiylbte","@media (max-width: 899px)_position":"xoa9owu","@media (max-width: 899px)_top":"x19d5s1r","@media (max-width: 899px)_width":"xwn1f64",$$css:!0},primaryNav:{marginTop:"x1xmf6yo",$$css:!0},primaryNavExpanding:{display:"x78zum5",flexDirection:"xdt5ytf",flexGrow:"x1iyjqo2",$$css:!0},primaryNavWithSearch:{marginBottom:"x1e56ztr",marginTop:"x1gslohp",$$css:!0},scrollDropShadow:{borderBottom:"xdppsyt",marginStart:"x1d52u69",marginEnd:"xktsk01",$$css:!0},search:{marginBottom:"xod5an3",marginTop:"x1gslohp",$$css:!0},stickyNavWithoutHeader:{marginTop:"x1xmf6yo",$$css:!0},stickyNavWithoutSearch:{marginBottom:"xod5an3",$$css:!0}};function a(a,b){var e=a.footer,f=a.header,g=a.isCometLeftRailInDialog;g=g===void 0?!1:g;var p=a.isNonCometLeftRailWithoutTopSpacing;p=p===void 0?!1:p;var q=a.onLeftRailScroll,r=a.primaryNav,s=a.primaryNavExpanding;s=s===void 0?!1:s;var t=a.search,u=a.secondaryNav,v=a.shouldHidePushViewHeader;v=v===void 0?!1:v;var w=a.stickyNav,x=a.testid;x=a.xstyle;a=c("useIsLoggedOut")();var y=j(c("BaseHeadingContext")),z=d("CometRouteRenderType").useIsPushView(),A=j(c("CometLeftRailPrimaryContext")),B=k(!1),C=B[0],D=B[1];B=i(function(a){q&&q(a),D(!0)},[q]);var E=i(function(){D(!1)},[]);return h.jsxs("div",{className:c("stylex")(n?o.leftRailContainerInBizWeb:o.leftRailContainer,!z&&l&&o.leftRailContainerPermalink,!z&&!l&&!p&&!n&&o.leftRailContainerPermalinkBlue,!z&&!l&&a&&o.leftRailContainerPermalinkBlueLoggedOut,A===!0&&o.leftRailPrimaryContainer,g===!0&&o.leftRailContainerInDialog,x),"data-testid":void 0,ref:b,children:[z&&!v&&h.jsx("div",{className:"x133r36p x2lah0s x1s65kcs"}),m?h.jsx(c("CometBase.react"),{xstyle:o.headerOnGemini,children:f}):f,w!=null&&h.jsx(c("CometBase.react"),{xstyle:[f==null&&o.stickyNavWithoutHeader,t==null&&o.stickyNavWithoutSearch],children:w}),t!=null&&h.jsx(c("CometBase.react"),{xstyle:o.search,children:t}),(f!=null||t!=null||w!=null)&&C&&h.jsx("div",{className:"xdppsyt x1d52u69 xktsk01"}),h.jsx(c("CometScrollView.react"),{onScroll:B,onScrollTop:E,showsHorizontalScrollIndicator:!1,children:h.jsxs(c("BaseHeadingContext").Provider,{value:y+1,children:[r!=null&&h.jsx("div",{className:c("stylex")(f!=null&&t==null&&o.primaryNav,f!=null&&t!=null&&o.primaryNavWithSearch,s&&o.primaryNavExpanding),children:r}),r!=null&&u!=null?h.jsx(c("CometLeftRailListItemSeparator.react"),{}):null,u]})}),e,h.jsx(c("CometLeftRailShadow.react"),{isLeftRailPrimary:A})]})}a.displayName=a.name+" [from "+f.id+"]";e=h.forwardRef(a);g["default"]=e}),98);
__d("CometLeftRailHeader.react",["fbt","ix","BaseHeading.react","BaseRow.react","BaseRowItem.react","CometBase.react","CometGlobalPanelLayoutContext","TetraIcon.react","TetraText.react","TetraTextPairing.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=d("react").useContext,l={auxiliary:{alignItems:"xuk3077",display:"x78zum5",flexBasis:"x1upgvki",flexGrow:"x1c4vz4f",flexShrink:"x2lah0s",justifyContent:"xl56j7k",maxHeight:"x1b12d3d",$$css:!0},auxiliaryFlexBasisAuto:{flexBasis:"xdl72j9",$$css:!0},auxiliaryInner:{display:"x78zum5",flexShrink:"x2lah0s",$$css:!0},backButton:{marginEnd:"x1h5jrl4",$$css:!0},headingRows:{marginTop:"x1sy10c2",marginEnd:"xktsk01",marginBottom:"xod5an3",marginStart:"x1d52u69",$$css:!0},headingRowWithGlobalPanel:{marginTop:"xaqh0s9",$$css:!0},meta:{marginBottom:"xu06os2",$$css:!0},titleBlock:{flexBasis:"x1f0eagk",flexGrow:"x1iyjqo2",$$css:!0},titleBlockFlexBasisAuto:{flexBasis:"xdl72j9",$$css:!0}};function a(a){var b=a.auxiliary,e=a.backActionAddOn,f=a.disableProportional;f=f===void 0?!1:f;var g=a.isPrimaryHeading;g=g===void 0?!0:g;var m=a.meta,n=a.subTitle,o=a.subTitleType,p=a.title;a=a.xstyle;var q=k(c("CometGlobalPanelLayoutContext"));return j.jsxs(c("BaseRow.react"),{verticalAlign:"center",xstyle:[l.headingRows,q&&l.headingRowWithGlobalPanel,a],children:[e!=null&&j.jsx(c("BaseRowItem.react"),{xstyle:l.backButton,children:j.jsx(c("TetraIcon.react"),babelHelpers["extends"]({},e,{"aria-label":h._("__JHASH__NdA_cK5EiDA__JHASH__"),color:"secondary",icon:d("fbicon")._(i("512647"),20)}))}),j.jsx(c("BaseRowItem.react"),{expanding:!0,children:j.jsxs(c("BaseRow.react"),{verticalAlign:"center",children:[j.jsxs(c("BaseRowItem.react"),{expanding:!0,useDeprecatedStyles:!0,xstyle:[l.titleBlock,f&&l.titleBlockFlexBasisAuto],children:[m!=null&&j.jsx(c("CometBase.react"),{xstyle:l.meta,children:m}),j.jsx(c("TetraTextPairing.react"),{headline:j.jsx(c("BaseHeading.react"),{isPrimaryHeading:g,children:p}),level:1,meta:n!=null?j.jsx(c("TetraText.react"),{color:"secondary",type:o!=null?o:"body3",children:n}):void 0})]}),b!=null&&j.jsx(c("BaseRowItem.react"),{xstyle:[l.auxiliary,f&&l.auxiliaryFlexBasisAuto],children:j.jsx("div",{className:"x78zum5 x2lah0s",children:b})})]})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometPillBase.react",["fbt","CometBadge.react","CometIcon.react","CometProfilePhoto.react","CometScreenReaderText.react","TetraText.react","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j={badge:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",display:"x78zum5",end:"x1qhkwwh",overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x10l6tqk",top:"x13vifvy",$$css:!0},icon:{display:"x78zum5",height:"xlup9mm",$$css:!0},iconAfterLabel:{marginStart:"x1mnrxsn",$$css:!0},iconBeforeLabel:{marginEnd:"x1w0mnb",$$css:!0},profile:{display:"x78zum5",marginEnd:"x1w0mnb",marginStart:"xp7jhwk",$$css:!0},profileDisabled:{opacity:"xuzhngd",$$css:!0}};function a(a){var b=a.color,d=a.disabled;d=d===void 0?!1:d;var e=a.hasNewContentBadge;e=e===void 0?!1:e;var f=a.image,g=a.imagePlacement;g=g===void 0?"left":g;var k=a.label,l=a.labelIsHidden;l=l===void 0?!1:l;var m=a.newContentBadgeSize;m=m===void 0?6:m;a=a.selected;a=a===void 0?!1:a;var n=null;if(e){e=h._("__JHASH__ZEV9psumY7i__JHASH__");n=i.jsx("div",{className:"x14yjl9h xudhj91 x18nykt9 xww2gxu x78zum5 x1qhkwwh x6ikm8r x10wlt62 x10l6tqk x13vifvy",children:i.jsx(c("CometBadge.react"),{border:"white",color:d?"gray":"blue",isProfileBadge:!0,label:e,size:m})})}e=b?b:d?"disabled":a===!0?"highlight":"primary";m=null;f!=null&&(f.type==="icon"?m=i.jsx("div",{className:c("stylex")(j.icon,!l&&g==="left"&&j.iconBeforeLabel,!l&&g==="right"&&j.iconAfterLabel),children:i.jsx(c("CometIcon.react"),{color:e,icon:f.icon,size:16})}):f.type==="profile-photo"&&f.source!=null&&(m=i.jsx("div",{className:c("stylex")(j.profile,d&&j.profileDisabled),children:i.jsx(c("CometProfilePhoto.react"),{shape:"circle",size:28,source:f.source})})));b=g==="left"?m:null;a=g==="right"?m:null;l?d=i.jsx(c("CometScreenReaderText.react"),{text:k}):d=i.jsx(c("TetraText.react"),{color:e,numberOfLines:1,type:"button2",children:k});return i.jsxs(i.Fragment,{children:[b,d,a,n]})}a.displayName=a.name+" [from "+f.id+"]";g.CometPillBase=a}),98);
__d("CometPillBaseStyles",[],(function(a,b,c,d,e,f,g){"use strict";a=36;b={pressed:{transform:"x1n5d1j9",$$css:!0},root:{alignItems:"x6s0dn4",backgroundColor:"x1qhmfi1",borderTopStartRadius:"x1tlxs6b",borderTopEndRadius:"x1g8br2z",borderBottomEndRadius:"x1gn5b1j",borderBottomStartRadius:"x230xth",display:"x78zum5",flexDirection:"x1q0g3np",height:"xc9qbxq",justifyContent:"xl56j7k",paddingEnd:"xn6708d",paddingStart:"x1ye3gou",position:"x1n2onr6",width:"xh8yej3",$$css:!0},selected:{backgroundColor:"x1hr4nm9",$$css:!0}};g.PIVOT_HEIGHT=a;g.pillStyles=b}),98);
__d("CometPivotLink.react",["CometPillBase.react","CometPillBaseStyles","CometPressable.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={deemphasized:{backgroundColor:"xjbqb8w",$$css:!0},normal:{backgroundColor:"x1qhmfi1",$$css:!0}},j={selectedOnWashBackground:{backgroundColor:"x1av1boa",$$css:!0}};function a(a,b){var e=a.ariaCurrentType;e=e===void 0?"page":e;var f=a.focusable;a.hitSlop;var g=a.linkProps,k=a.onHoverIn,l=a.onPress,m=a.onWashBackground,n=m===void 0?!1:m;m=a.role;var o=a.testid;o=a.testOnly_pressed;var p=a.type,q=p===void 0?"normal":p;p=babelHelpers.objectWithoutPropertiesLoose(a,["ariaCurrentType","focusable","hitSlop","linkProps","onHoverIn","onPress","onWashBackground","role","testid","testOnly_pressed","type"]);var r=(a=p.selected)!=null?a:!1;a=(a=p.disabled)!=null?a:!1;e=g?{"aria-current":r?e:void 0}:m==="button"||m==null?{"aria-pressed":r}:{"aria-selected":r};return h.jsx(c("CometPressable.react"),babelHelpers["extends"]({},e,{disabled:a,display:"inline",focusable:f,linkProps:g,onHoverIn:k,onPress:a?void 0:l,overlayFocusRingPosition:"inset",overlayRadius:d("CometPillBaseStyles").PIVOT_HEIGHT/2,ref:b,role:m,testOnly_pressed:o,testid:void 0,xstyle:function(a){a=a.pressed;return[d("CometPillBaseStyles").pillStyles.root,i[q],r===!0&&(n?j.selectedOnWashBackground:d("CometPillBaseStyles").pillStyles.selected),a&&d("CometPillBaseStyles").pillStyles.pressed]},children:h.jsx(d("CometPillBase.react").CometPillBase,babelHelpers["extends"]({},p))}))}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("CometPivotLinkPile.react",["CometRow.react","CometRowItem.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={defaultWidth:{maxWidth:"xthy2uy",$$css:!0},fullWidth:{maxWidth:"x193iq5w",$$css:!0}};function a(a){var b=a.align;b=b===void 0?"center":b;var d=a.children,e=a.isFullWidth,f=e===void 0?!1:e;e=babelHelpers.objectWithoutPropertiesLoose(a,["align","children","isFullWidth"]);return h.jsx(c("CometRow.react"),babelHelpers["extends"]({},e,e.paddingVertical==null?{paddingTop:8}:null,{align:b,spacing:8,wrap:"forward",children:h.Children.map(d,function(a){return h.jsx(c("CometRowItem.react"),{xstyle:f?i.fullWidth:i.defaultWidth,children:a})})}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useOnRefreshScrollToTop",["CometOnRefresh.react","react","scrollTo"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a){var b=h(function(){c("scrollTo")({behavior:"smooth",onScrollComplete:a,top:0})},[a]);d("CometOnRefresh.react").useOnRefresh(b)}g["default"]=a}),98);