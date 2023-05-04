;/*FB_PKG_DELIM*/

__d("CometPrivacySelectorForScope_scope.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Variable",name:"renderLocation",variableName:"renderLocation"}];return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"tags"}],kind:"Fragment",metadata:null,name:"CometPrivacySelectorForScope_scope",selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["PrivacyScopeEditableRenderer","PrivacyScopeUneditableRenderer"]}],concreteType:null,kind:"LinkedField",name:"privacy_scope_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:a,documentName:"CometPrivacySelectorForScope_scope",fragmentName:"CometPrivacySelectorEditable_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeEditableRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:a,documentName:"CometPrivacySelectorForScope_scope",fragmentName:"CometPrivacySelectorUneditable_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeUneditableRenderer",abstractKey:null},{args:null,kind:"FragmentSpread",name:"useCometPrivacySelectorEntryPointTestID_renderer"}],storageKey:'privacy_scope_renderer(supported:["PrivacyScopeEditableRenderer","PrivacyScopeUneditableRenderer"])'}],type:"PrivacyScope",abstractKey:null}}();e.exports=a}),null);
__d("CometPrivacySelectorPickerContainerQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6096201933793219"}),null);
__d("CometPrivacySelectorPickerContainerQuery$Parameters",["CometPrivacySelectorPickerContainerQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometPrivacySelectorPickerContainerQuery_facebookRelayOperation"),metadata:{},name:"CometPrivacySelectorPickerContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("useCometPrivacySelectorCanOpenSelector_scope.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometPrivacySelectorCanOpenSelector_scope",selections:[{alias:null,args:null,kind:"ScalarField",name:"can_viewer_edit",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"privacy_write_id",storageKey:null}],type:"PrivacyScope",abstractKey:null};e.exports=a}),null);
__d("useCometPrivacySelectorDialog_scope.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometPrivacySelectorDialog_scope",selections:[{args:null,kind:"FragmentSpread",name:"useCometPrivacySelectorCanOpenSelector_scope"},{alias:null,args:null,kind:"ScalarField",name:"privacy_write_id",storageKey:null}],type:"PrivacyScope",abstractKey:null};e.exports=a}),null);
__d("useCometPrivacySelectorEntryPointTestID_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometPrivacySelectorEntryPointTestID_renderer",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"PrivacySelectorRenderer",abstractKey:"__isPrivacySelectorRenderer"};e.exports=a}),null);
__d("CometList.react",["CometCompositeStructureContext","CometFocusGroup.react","focusScopeQueries","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo,j={margins:{marginBottom:"x1oo3vh0",marginTop:"x1rdy4ex",$$css:!0}};function a(a,b){var e=a.children,f=a.items,g=a.keyNavOrientation,k=a.label,l=a.role,m=a.withNegativeMargins,n=(a=l)!=null?a:"list";a=i(function(){return{role:n}},[n]);var o=typeof e==="function"?((f=f)!=null?f:[]).map(function(a,b){return e({item:a,props:{key:(a=a.key)!=null?a:b}})}):e;return g!=null?h.jsx(c("CometFocusGroup.react"),{orientation:g,role:l,tabScopeQuery:d("focusScopeQueries").tabbableScopeQuery,children:function(a){return h.jsx("div",{className:c("stylex")(a,m&&j.margins),role:(a=l)!=null?a:void 0,children:o})}}):h.jsx("div",{"aria-label":(f=k)!=null?f:void 0,className:c("stylex")(m&&j.margins),ref:b,role:n,children:h.jsx(c("CometCompositeStructureContext").Provider,{value:a,children:o})})}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("TetraList.react",["CometList.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsx(c("CometList.react"),babelHelpers["extends"]({withNegativeMargins:!0},a))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometPrivacySelectorPickerContainer.entrypoint",["CometPrivacySelectorPickerContainerQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.localPrivacyRow,e=a.privacyWriteID,f=a.renderLocation;a=a.tags;return{queries:{queryReference:{options:{fetchPolicy:"store-and-network"},parameters:c("CometPrivacySelectorPickerContainerQuery$Parameters"),variables:{localPrivacyRow:b,privacyWriteID:e,renderLocation:f,scale:d("WebPixelRatio").get(),tags:a}}}}},root:c("JSResourceForInteraction")("CometPrivacySelectorPickerContainer.react").__setRef("CometPrivacySelectorPickerContainer.entrypoint")};g["default"]=a}),98);
__d("CometPrivacySelectorDialog.entrypoint",["CometPrivacySelectorPickerContainer.entrypoint","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{entryPoints:{containerEntryPoint:{entryPoint:b("CometPrivacySelectorPickerContainer.entrypoint"),entryPointParams:a}}}},root:c("JSResourceForInteraction")("CometPrivacySelectorDialog.react").__setRef("CometPrivacySelectorDialog.entrypoint")};g["default"]=a}),98);
__d("CometPrivacySelectorContextInitialState",[],(function(a,b,c,d,e,f){"use strict";a={localPrivacyRow:null};f["default"]=a}),66);
__d("CometPrivacySelectorContext",["CometPrivacySelectorContextInitialState","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=function(){};e=a.createContext([c("CometPrivacySelectorContextInitialState"),b]);g["default"]=e}),98);
__d("CometPrivacySelectorContextWrapper",["CometPrivacySelectorContext","CometPrivacySelectorContextInitialState","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useMemo,j=b.useReducer;function k(a,b){var c=b.type;switch(c){case"setLocalPrivacyRow":return{localPrivacyRow:b.localPrivacyRow};default:return a}}function a(a){var b;b=j(k,(b=a.initialState)!=null?b:c("CometPrivacySelectorContextInitialState"));var d=b[0],e=b[1];b=i(function(){var b;return[(b=a.state)!=null?b:d,(b=a.dispatch)!=null?b:e]},[a.dispatch,a.state,d]);return h.jsx(c("CometPrivacySelectorContext").Provider,{value:b,children:a.children})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useCometPrivacySelectorEntryPointTestID",["CometRelay","react","useCometPrivacySelectorEntryPointTestID_renderer.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react").useMemo;function a(a){a=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometPrivacySelectorEntryPointTestID_renderer.graphql"),a);var c=a.id;return i(function(){if(c==null)return void 0;try{var a;a=(a=JSON.parse((a=atob(c))==null?void 0:a.substring(23)))==null?void 0:a.id;return a==null?void 0:"privacy_selector_"+a}catch(a){return void 0}},[c])}g["default"]=a}),98);
__d("CometPrivacySelectorForScope.react",["CometPrivacySelectorContextWrapper","CometPrivacySelectorForScope_scope.graphql","CometRelay","react","stylex","unrecoverableViolation","useCometPrivacySelectorEntryPointTestID"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useMemo,k={root:{alignItems:"x6s0dn4",display:"x3nfvp2",justifyContent:"xl56j7k",$$css:!0},rootFullWidth:{display:"x78zum5",$$css:!0}};function a(a){var e=a.isFullWidth;e=e===void 0?!1:e;var f=a.localPrivacyRow,g=a.plugins,l=a.scope;a=babelHelpers.objectWithoutPropertiesLoose(a,["isFullWidth","localPrivacyRow","plugins","scope"]);l=d("CometRelay").useFragment(h!==void 0?h:h=b("CometPrivacySelectorForScope_scope.graphql"),l);if(l==null)throw c("unrecoverableViolation")("CometPrivacySelectorForScope did not receive a PrivacyScope","comet_privacy_selector");var m=l.privacy_scope_renderer;if(m==null)throw c("unrecoverableViolation")("CometPrivacySelectorForScope did not receive a PrivacyScopeRenderer","comet_privacy_selector");m=c("useCometPrivacySelectorEntryPointTestID")(m);m=j(function(){return{localPrivacyRow:f}},[f]);return i.jsx("div",{className:c("stylex")(k.root,e&&k.rootFullWidth),"data-testid":void 0,children:i.jsxs(c("CometPrivacySelectorContextWrapper"),{initialState:m,children:[i.jsx(d("CometRelay").MatchContainer,{match:l.privacy_scope_renderer,props:babelHelpers["extends"]({},a,{renderer:l.privacy_scope_renderer})}),g]})})}a.displayName=a.name+" [from "+f.id+"]";e=i.memo(a);g["default"]=e}),98);
__d("useCometPrivacySelectorCanOpenSelector",["CometRelay","killswitch","recoverableViolation","useCometPrivacySelectorCanOpenSelector_scope.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){a=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometPrivacySelectorCanOpenSelector_scope.graphql"),a);a=(a=a)!=null?a:{};var e=a.can_viewer_edit;a=a.privacy_write_id;if(c("killswitch")("COMET_PRIVACY_SELECTOR_EDITABLE_DISABLED"))return!1;if(e==null&&a==null){c("recoverableViolation")("Trying to load a Privacy Selector Dialog without a scope.","comet_privacy_selector");return!1}if(e!==!0){c("recoverableViolation")("Trying to load a Privacy Selector Dialog for a non editable scope.","comet_privacy_selector");return!1}if(a==null){c("recoverableViolation")("Trying to load a Privacy Selector Dialog with a missing write ID.","comet_privacy_selector");return!1}return!0}g["default"]=a}),98);
__d("useCometPrivacySelectorDialog",["CometPrivacySelectorDialog.entrypoint","CometRelay","JSResourceForInteraction","qpl","react","useCometEntryPointDialog","useCometInteractionTracing","useCometPrivacySelectorCanOpenSelector","useCometPrivacySelectorDialog_scope.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;e=d("react");var i=e.useCallback,j=e.useMemo,k=e.useRef,l=c("JSResourceForInteraction")("CometPrivacySelectorDialog.react").__setRef("useCometPrivacySelectorDialog");function a(a,e,f,g,m){var n;a=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometPrivacySelectorDialog_scope.graphql"),a);var o=(n=a==null?void 0:a.privacy_write_id)!=null?n:"",p=k(null);n=c("useCometEntryPointDialog")(c("CometPrivacySelectorDialog.entrypoint"),{localPrivacyRow:f==null?void 0:f.localPrivacyRow,privacyWriteID:o,renderLocation:e.renderLocation,tags:e.tags});var q=n[0],r=c("useCometPrivacySelectorCanOpenSelector")(a),s=c("useCometInteractionTracing")(c("qpl")._(30605326,"2342"),"responsive","INTERACTION"),t=i(function(){if(o==null)return;var a=l.getModuleIfRequired()!=null;s(function(b){b.onComplete(function(){a&&b.addMetadata("revisit",1)}),q(babelHelpers["extends"]({},e,{dispatch:g,privacyWriteID:o,state:f}),m)})},[g,e,o,q,f,s]);return j(function(){return[r?t:null,p]},[r,t,p])}g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("CometIXTFacebookContentTriggerRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6085612348213233"}),null);
__d("CometIXTFacebookContentTriggerRootQuery$Parameters",["CometIXTFacebookContentTriggerRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometIXTFacebookContentTriggerRootQuery_facebookRelayOperation"),metadata:{},name:"CometIXTFacebookContentTriggerRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometIXTFacebookContentTriggerEntryPoint.entrypoint",["CometIXTFacebookContentTriggerRootQuery$Parameters","JSResourceForInteraction","React","WebPixelRatio","uuid"],(function(a,b,c,d,e,f,g){"use strict";c("React");a={getPreloadProps:function(a){return{queries:{reference:{parameters:c("CometIXTFacebookContentTriggerRootQuery$Parameters"),variables:{input:babelHelpers["extends"]({},a,{nt_context:null,trigger_session_id:c("uuid")()}),scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("CometIXTFacebookContentTriggerRoot.react").__setRef("CometIXTFacebookContentTriggerEntryPoint.entrypoint")};b=a;g["default"]=b}),98);
__d("useIXTContentTriggerDialog",["cr:2988","cr:3116"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return b("cr:3116")(b("cr:2988"),a)}g["default"]=a}),98);
__d("cometReportBugDefaultOptions",["fbt","ix","fbicon"],(function(a,b,c,d,e,f,g,h,i){"use strict";a="public";b=h._("__JHASH__Sqzl58OucnB__JHASH__");c={addOnPrimary:{icon:d("fbicon")._(i("899558"),24),size:60,type:"contained-icon"},body:h._("__JHASH__5q7igOED7sX__JHASH__"),dialogTitle:h._("__JHASH__OPf0ZWrh9kh__JHASH__"),headline:h._("__JHASH__mBwCXx86-aM__JHASH__")};e={addOnPrimary:{icon:d("fbicon")._(i("502063"),24),size:60,type:"contained-icon"},body:h._("__JHASH__T0wDs12oUvR__JHASH__"),dialogTitle:h._("__JHASH__d8pLVqIL7yK__JHASH__"),headline:h._("__JHASH__06damxz0Ivb__JHASH__")};g.defaultProductListType=a;g.defaultInitialTitle=b;g.defaultFeedbackProblemTypeItem=c;g.defaultBugProblemTypeItem=e}),98);
__d("useCometReportBug",["fbt","CometCardedDialogLoadingStateLegacy.react","JSResourceForInteraction","cometReportBugDefaultOptions","promiseDone","react","useCometLazyDialog"],(function(a,b,c,d,e,f,g,h){"use strict";b=d("react");var i=c("react"),j=b.useCallback,k=b.useRef,l=c("JSResourceForInteraction")("CometBugReportingDialog.react").__setRef("useCometReportBug"),m=c("JSResourceForInteraction")("VideoPlayerShakaPerformanceLogger").__setRef("useCometReportBug"),n=!1;function a(a){var b=k(null),e=c("useCometLazyDialog")(l,function(b){return i.jsx(c("CometCardedDialogLoadingStateLegacy.react"),{onClose:b,title:a==null?h._("__JHASH__Sqzl58OucnB__JHASH__"):h._("__JHASH___hkwAd2dM-2__JHASH__",[h._param("product name",a)]),withCloseButton:!0})}),f=e[0];e=j(function(b,e){if(!n){var g;c("promiseDone")(m.load().then(function(a){a.flushQueuedLogs()}));f(babelHelpers["extends"]({productName:a},b,{bugProblemTypeItem:(g=b==null?void 0:b.bugProblemTypeItem)!=null?g:d("cometReportBugDefaultOptions").defaultBugProblemTypeItem,feedbackProblemTypeItem:(g=b==null?void 0:b.feedbackProblemTypeItem)!=null?g:d("cometReportBugDefaultOptions").defaultFeedbackProblemTypeItem,initialTitle:(g=b==null?void 0:b.initialTitle)!=null?g:d("cometReportBugDefaultOptions").defaultInitialTitle,productListType:(g=b==null?void 0:b.productListType)!=null?g:d("cometReportBugDefaultOptions").defaultProductListType}),function(){e!=null&&e(),n=!1});n=!0}},[f]);return[e,b]}g["default"]=a}),98);
__d("AddOnEndOverride.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,b){var d=a.children,e=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","xstyle"]);return h.jsx("div",babelHelpers["extends"]({},a,{className:c("stylex")(e),ref:b,children:d}))}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("useLaunchFRXFlow",["react","useIXTContentTriggerDialog"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useRef;function a(a){var b=h(null);a=c("useIXTContentTriggerDialog")(a);var d=a[0],e=a[1],f=a[2];a=a[3];return[d,b,e,f,a]}g["default"]=a}),98);
__d("InformTreatmentRenderingType",[],(function(a,b,c,d,e,f){a=Object.freeze({GEOBLOCK:"geoblock",MEDIA_LABEL:"media_label",POST_COVER:"post_cover",POST_LABEL:"post_label",WARNING_SCREENS:"warning_screens"});f["default"]=a}),66);/*FB_PKG_DELIM*/
__d("CometListCellPulseEffect.react",["CometPulseEffect.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={pulseEffect:{display:"x1lliihq",marginStart:"x1i64zmx",marginEnd:"x1emribx",maxWidth:"x193iq5w",$$css:!0},pulseInner:{borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",$$css:!0}};function a(a){var b=a.children,d=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","xstyle"]);return h.jsx(c("CometPulseEffect.react"),babelHelpers["extends"]({},a,{xstyle:[i.pulseEffect,d],children:function(a){return h.jsx("div",{className:"xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xdj266r x11i5rnm xat24cr x1mh8g0r",ref:a,children:b})}}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useProfileSwitcherEngagementClickCallback",["react","recoverableViolation","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useMemo,j=c("requireDeferred")("ProfileEngagementTypedLoggerLite").__setRef("useProfileSwitcherEngagementClickCallback"),k="2220391788200892";function a(a,b){var d=i(function(){return babelHelpers["extends"]({appid:k,engagement_type:"click"},a)},[a]);d.product_bucket==null&&(c("recoverableViolation")("product_bucket is a required field for profile engagement logging","profile_comet"),d=babelHelpers["extends"]({},d,{product_bucket:"unknown"}));return h(function(a){j.onReady(function(a){a=a.log;a(d)}),b&&b(a)},[b,d])}g["default"]=a}),98);
__d("useSecretConversationsLogOut",["EBStateDBLogout","Promise","cr:5619","useCometLogout","useMAWSecretConversationsLogOut"],(function(a,b,c,d,e,f,g){"use strict";var h=b("cr:5619")?b("cr:5619")==null?void 0:b("cr:5619").useHook:function(){return function(){return b("Promise").resolve()}};function a(a){var e=d("useCometLogout").useCometLogout(),f=c("useMAWSecretConversationsLogOut")(a),g=h(),i=d("EBStateDBLogout").useHook();return function(){return b("Promise").all([g(),f(),i()]).then(function(a){e(),b("Promise").resolve()})}}g["default"]=a}),98);
__d("XAdsAccountQualityControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/accountquality/{?primary_id}/{?secondary_id}/",Object.freeze({tab:"available_for_review",source:"link",asset_view_type:"customer_feedback",landing_page:"unknown",redirect_to_app:!0}),void 0);b=a;g["default"]=b}),98);