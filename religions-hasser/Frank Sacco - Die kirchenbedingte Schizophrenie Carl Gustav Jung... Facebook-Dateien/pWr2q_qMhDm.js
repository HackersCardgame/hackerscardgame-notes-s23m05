;/*FB_PKG_DELIM*/

__d("useStoriesLWRKeyframes_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:"www",kind:"LocalArgument",name:"variant"}],kind:"Fragment",metadata:null,name:"useStoriesLWRKeyframes_viewer",selections:[{alias:null,args:[{kind:"Variable",name:"variant",variableName:"variant"}],concreteType:"ViewerToStoriesLWRAnimationsConnection",kind:"LinkedField",name:"stories_lwr_animations",plural:!1,selections:[{alias:null,args:null,concreteType:"ViewerToStoriesLWRAnimationsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"StoryCardLWRAnimationConfig",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"feedback_reaction_identifier",storageKey:null},{alias:null,args:null,concreteType:"InspirationsStickerAnimationAsset",kind:"LinkedField",name:"tap_animation_asset",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"keyframe_uri",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("useStoriesLWR_animations.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:"www",kind:"LocalArgument",name:"variant"}],kind:"Fragment",metadata:null,name:"useStoriesLWR_animations",selections:[{args:[{kind:"Variable",name:"variant",variableName:"variant"}],kind:"FragmentSpread",name:"useStoriesLWRKeyframes_viewer"}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("useStoriesSendReplyMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4826141330837571"}),null);
__d("useStoriesSendReplyMutation.graphql",["useStoriesSendReplyMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{kind:"Variable",name:"data",variableName:"input"}],d={alias:null,args:null,kind:"ScalarField",name:"client_mutation_id",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"useStoriesSendReplyMutation",selections:[{alias:null,args:c,concreteType:"DirectMessageReplyResponsePayload",kind:"LinkedField",name:"direct_message_reply",plural:!1,selections:[d,{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryCardStoryInfo",kind:"LinkedField",name:"story_card_info",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"StoriesCardReactionSent_cardInfo"}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"useStoriesSendReplyMutation",selections:[{alias:null,args:c,concreteType:"DirectMessageReplyResponsePayload",kind:"LinkedField",name:"direct_message_reply",plural:!1,selections:[d,{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryCardStoryInfo",kind:"LinkedField",name:"story_card_info",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"first",value:10}],concreteType:"StoryCardReactionsConnection",kind:"LinkedField",name:"story_card_reactions",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryCardReactionsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"MessengerMontageMessageReaction",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"messaging_actor",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},e],storageKey:null},{alias:null,args:null,concreteType:"MessengerMontageMessageActionsOfReactionConnection",kind:"LinkedField",name:"messaging_actions",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null},{alias:"last5",args:[{kind:"Literal",name:"last",value:5}],concreteType:"MessengerMontageMessageActionsOfReactionConnection",kind:"LinkedField",name:"messaging_actions",plural:!1,selections:[{alias:null,args:null,concreteType:"MessengerMontageMessageActionsOfReactionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"MessengerMontageMessageAction",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"reaction",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"messaging_actions(last:5)"},e],storageKey:null}],storageKey:null}],storageKey:"story_card_reactions(first:10)"}],storageKey:null},e],storageKey:null}],storageKey:null}]},params:{id:b("useStoriesSendReplyMutation_facebookRelayOperation"),metadata:{},name:"useStoriesSendReplyMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("FriendListCometCloseFriendsGating",["qex"],(function(a,b,c,d,e,f,g){"use strict";function a(){return c("qex")._("195")&&h()}function b(){return c("qex")._("151")&&h()}function h(){return c("qex")._("834")}g.isPostToStoryEnabled=a;g.isStoriesConsumptionEnabled=b}),98);
__d("StoriesAppSpotifyFilled16IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("1104209"),16);g["default"]=a}),98);
__d("StoriesAudioHiFilled24IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("564391"),24);g["default"]=a}),98);
__d("StoriesAudioOffFilled24IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("564397"),24);g["default"]=a}),98);
__d("StoriesCheckmarkCircleFilled20IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("498146"),20);g["default"]=a}),98);
__d("StoriesChevronDownCircleFilled16IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("533909"),16);g["default"]=a}),98);
__d("StoriesChevronLeftFilled12IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("492482"),12);g["default"]=a}),98);
__d("StoriesChevronLeftFilled24IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("492521"),24);g["default"]=a}),98);
__d("StoriesChevronRightFilled12IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("492530"),12);g["default"]=a}),98);
__d("StoriesChevronRightFilled24IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("492575"),24);g["default"]=a}),98);
__d("StoriesChevronUpOutline20IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("505580"),20);g["default"]=a}),98);
__d("StoriesCrossCircleOutline24IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("491585"),24);g["default"]=a}),98);
__d("StoriesCrossFilled20IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("478233"),20);g["default"]=a}),98);
__d("StoriesDots3HorizontalFilled24IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("484388"),24);g["default"]=a}),98);
__d("StoriesEyeFilled20IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("491228"),20);g["default"]=a}),98);
__d("StoriesFriendsFilled20IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("487558"),20);g["default"]=a}),98);
__d("StoriesGifFilled24IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("687979"),24);g["default"]=a}),98);
__d("StoriesGifOutline24IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("687983"),24);g["default"]=a}),98);
__d("StoriesPauseFilled24IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("497676"),24);g["default"]=a}),98);
__d("StoriesPlayFilled16IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("484862"),16);g["default"]=a}),98);
__d("StoriesPlayFilled24IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("484864"),24);g["default"]=a}),98);
__d("StoriesSendFilled20IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("579031"),20);g["default"]=a}),98);
__d("StoriesStickersFilled20IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("710884"),20);g["default"]=a}),98);
__d("StoriesStickersOutline16IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("687986"),16);g["default"]=a}),98);
__d("StoriesStickersOutline20IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("687988"),20);g["default"]=a}),98);
__d("StoriesCTAButton.react",["CometPressable.react","CometTrackingNodeProvider.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.link,d=a.onClick;a=a.title;a=h.jsx("div",{className:"x1ru42tm x4afe7t x10e4vud x6s0dn4 x1ofb795 x14ctfv x78zum5 x6prxxf x1s688f x1vqgdyp xvq8zen xlyipyv xuxw1ft",children:a});return h.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:86,children:h.jsx("div",{className:"x1ru42tm x4afe7t x10e4vud x1w4261f x105w4n0 x1dgrc15 xgawykw xmigq7r x1c66dkd xng0ele xs1r7wz xzxekdx x9f619 x6ikm8r x10wlt62 x14gfdix x14ya1hp x1vjfegm",children:b!=null?h.jsx(c("CometPressable.react"),{hideHoverOverlay:!0,linkProps:{target:"_blank",url:b},onPress:d,children:a}):a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesCreateContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=!1;c=a.createContext(b);g["default"]=c}),98);
__d("StoriesCreateConstants",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a={DEFAULT:{BODY:h._("__JHASH__2dP-S2NXGWo__JHASH__"),CANCEL:h._("__JHASH__iNbID4Of76-__JHASH__"),CONFIRM:h._("__JHASH__2bGTq0Hn_zL__JHASH__"),TITLE:h._("__JHASH__fy6v2Hc0_3x__JHASH__")}};b={SELECTION_TILE_HEIGHT:330,SELECTION_TILE_WIDTH:220,SPACE_BETWEEN_SELECTOR:20};c={FOOTER_HEIGHT:52,HEADER_HEIGHT:16};d={COMET_PUSH_VIEW_HEIGHT:28,CONTAINER_HORIZONTAL_PADDING:24*2,CONTAINER_MAX_WIDTH:940,CONTAINER_VERTICAL_PADDING:32*2,CONTENT_HEADER_HEIGHT:36,CONTENT_HORIZONTAL_PADDING:16*2,CONTENT_VERTICAL_PADDING:16*2,MAX_OVERLAY_WIDTH:472.5,SIDE_PANE_WIDTH:360};e=h._("__JHASH__b-5wJWOv0zU__JHASH__");f={FOOTER_HEIGHT:12,HEADER_HEIGHT:12};h={EDITING:"editing",NONE:"none"};var i={EMOJI:"emoji",LOCATION:"location",POLL:"poll",TAG:"tag"},j={EDITING:"editing",NONE:"none"},k={HORIZONTAL:"horizontal",NONE:"none"},l=26,m=3,n=4,o={FOOTER_HEIGHT:92},p=Object.freeze({BLACK:"rgb(0, 0, 0)",BLUE:"rgb(41, 134, 174)",BROWN:"rgb(112, 41, 41)",CORAL:"rgb(247, 114, 74)",CYAN:"rgb(94, 213, 255)",GOLD:"rgb(241, 196, 58)",GRAY:"rgb(142, 147, 156)",GREEN:"rgb(136, 191, 75)",LIGHT_BLUE:"rgb(202, 237, 248)",LIGHT_GRAY:"rgb(206, 208, 212)",LIGHT_PURPLE:"rgb(220, 211, 239)",MAGENTA:"rgb(251, 62, 160)",MINT:"rgb(185, 252, 203)",NAVY:"rgb(43, 69, 124)",ORANGE:"rgb(244, 146, 58)",PINK:"rgb(249, 203, 209)",PURPLE:"rgb(148, 31, 177)",RED:"rgb(248, 61, 61)",VIOLET:"rgb(88, 59, 154)",WHITE:"rgb(255, 255, 255)",YELLOW:"rgb(248, 226, 76)"}),q={x:.5,y:.5};g.LEAVE_TEXT=a;g.NULL_STATE_DIMENSIONS=b;g.PHOTO_PREVIEW_DIMENSIONS=c;g.PREVIEW_DIMENSIONS=d;g.SATP_PLACEHOLDER=e;g.SATP_PREVIEW_DIMENSIONS=f;g.STICKER_EDITING_MODE=h;g.STICKER_TYPE=i;g.TEXT_OVERLAY_MODE=j;g.OVERLAY_ALIGNMENT_TYPE=k;g.VIDEO_MAX_DURATION=l;g.VIDEO_MIN_DURATION=m;g.VIDEO_MIN_DURATION_FOR_TRIM=n;g.VIDEO_PREVIEW_DIMENSIONS=o;g.COLOR_NAME_TO_RGB=p;g.ORIGIN=q}),98);
__d("StoriesGradientBackground.react",["StoriesEnums","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useEffect;function a(a){var b=a.direction,c=a.from,e=a.onLoad;a=a.to;i(function(){e&&e()},[e]);a=a;c=c;if(!(a!=null&&c!=null))return null;a=a!=null?a:c;c=c!=null?c:a;var f="";switch(b){case d("StoriesEnums").GRADIENT_DIRECTION.BL_TR:case d("StoriesEnums").GRADIENT_DIRECTION.TR_BL:f="45deg";break;case d("StoriesEnums").GRADIENT_DIRECTION.LEFT_RIGHT:case d("StoriesEnums").GRADIENT_DIRECTION.RIGHT_LEFT:f="to right";break;case d("StoriesEnums").GRADIENT_DIRECTION.TL_BR:case d("StoriesEnums").GRADIENT_DIRECTION.BR_TL:f="135deg";break;case d("StoriesEnums").GRADIENT_DIRECTION.TOP_BOTTOM:case d("StoriesEnums").GRADIENT_DIRECTION.BOTTOM_TOP:f="to bottom";break;default:f="0deg"}b={backgroundImage:"linear-gradient("+f+","+c+" 0%,"+a+" 100%)"};return h.jsx("div",{className:"x5yr21d xh8yej3",style:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useStoriesViewerClose",["CometRouteRenderType","MessengerEnvironment","StoriesLoggerSession","StoriesLoggingConstants","cr:869845","gkx","useCometRouterDispatcher"],(function(a,b,c,d,e,f,g){"use strict";var h=c("gkx")("708253");function a(){var a=d("CometRouteRenderType").useIsPushView(),e=c("useCometRouterDispatcher")();return function(f){var g=d("StoriesLoggerSession").getOpenViewerSource();d("StoriesLoggerSession").setCloseGesture(f);b("cr:869845")?c("MessengerEnvironment").messengerui?b("cr:869845").getInstance().closeDialogMessenger():g===c("StoriesLoggingConstants").ACTION_SOURCE.ARCHIVE?b("cr:869845").getInstance().closeArchiveDialogAndRefresh():b("cr:869845").getInstance().navigateToEntryPoint():h&&f===c("StoriesLoggingConstants").CLOSE_STORY_GESTURE.AUTO_EXIT&&(!a&&e&&e.goBack?e.goBack():a&&e&&e.popPushView&&e.popPushView())}}g["default"]=a}),98);
__d("StoriesCloseButton.react",["fbt","ix","CometPressable.react","IconSource","StoriesLoggingConstants","StoriesSuspensePauseContext","TetraIcon.react","cr:1032347","gkx","react","useStoriesViewerClose"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=d("react").useContext,l=c("gkx")("708253");function a(a){a=a.dark;a=a===void 0?!1:a;var d=c("useStoriesViewerClose")(),e=k(c("StoriesSuspensePauseContext"));e=e.setPause;if(l)return null;var f=function(a){d(c("StoriesLoggingConstants").CLOSE_STORY_GESTURE.CLOSE_BUTTON_EXIT)};a=a?new(c("IconSource"))("FB",i("1351092"),24):new(c("IconSource"))("FB",i("1495001"),24);return j.jsxs("div",{className:"x78zum5 xds687c xbyyjgo x10l6tqk x13vifvy x13dflua x19991ni xz4gly6 x1o7uuvo","data-testid":void 0,children:[b("cr:1032347")&&j.jsx(b("cr:1032347"),{setPause:e}),j.jsx(c("CometPressable.react"),{"aria-label":h._("__JHASH__tnRfHlva-bL__JHASH__"),display:"inline",onPress:f,overlayDisabled:!0,children:j.jsx("div",{className:"x1ypdohk x78zum5 xw7yly9 xktsk01 x1yztbdb x17adc0v",children:j.jsx(c("TetraIcon.react"),{icon:a,size:24})})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesFeedbackCommentStateContextProvider",["StoriesFeedbackCommentStateContext","StoriesGating","StoriesLoggingConstants","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useMemo,j=b.useState,k=d("StoriesGating").shouldUseCommentsSheet();function a(a){var b=a.children;a=a.initialCommentID;var e=j(k?!1:a!==""),f=e[0],g=e[1];e=j(!1);var l=e[0],m=e[1];e=j(k?a!=="":!1);var n=e[0],o=e[1];e=j(a!==""?c("StoriesLoggingConstants").COMMENT_TRIGGER_SOURCE.NOTIFICATION_STORY_UFI:c("StoriesLoggingConstants").COMMENT_TRIGGER_SOURCE.STORY_UFI_BUTTON);var p=e[0],q=e[1],r=d("StoriesGating").isCommentEnabled();a=i(function(){return{commentTriggerSource:p,isCommentingOnForStory:l,isCommentsRightRailOpen:f,isStoryCommentingEnabled:r,setCommentTriggerSource:q,setIsCommentingOnForStory:m,setIsCommentsRightRailOpen:g,setShowCommentsSheetOverlay:o,showCommentsSheetOverlay:n}},[p,l,f,r,n]);return h.jsx(c("StoriesFeedbackCommentStateContext").Provider,{value:a,children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesLWRKeyframe.react",["ViewportAwareKeyframes.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=47,j=30,k=0,l=190,m=400,n=1;function a(a){var b=a.containerWidth,d=a.kf,e=a.kfHOffset;e=e===void 0?j:e;var f=a.kfVOffset;f=f===void 0?k:f;var g=a.kfWidth;g=g===void 0?l:g;var o=a.kfHeight;o=o===void 0?m:o;a=a.reactionWidth;a=a===void 0?i:a;var p=d.assetName,q=d.index,r=d.onRepeatEnd,s=d.random,t=d.scale;t=t===void 0?1:t;d=d.uri;s!=null&&s>=0&&b!=null?s=Math.floor(e+s*(b-e)):s=e+q*a;b={bottom:f+"px",left:s+"px",position:"absolute"};return h.jsx(c("ViewportAwareKeyframes.react"),{assetName:p,className:"x1ey2m1c x47corl x10l6tqk xuuh30",height:o*t,onRepeatEnd:r,playing:"always",projectName:"facebook_stories",repeatCount:n,source:d,style:b,width:g*t})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesFeedbackFlowTypes",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum")({STICKER:0,GIF:1,EMOJI:2,NONE:3});f.StickerReplyTypes=a}),66);
__d("StoriesUniqueID",[],(function(a,b,c,d,e,f){"use strict";var g="js_",h=36,i=0;function a(){return g+(i++).toString(h)}f["default"]=a}),66);
__d("useStoriesLWRKeyframes",["CometRelay","DynamicUFIReactionTypes","StoriesUniqueID","react","useStoriesLWRKeyframes_viewer.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;e=d("react");var i=e.useCallback,j=e.useRef,k=e.useState,l=(f={},f["1635855486666999"]="LIKE",f["1678524932434102"]="LOVE",f["115940658764963"]="HAHA",f["478547315650144"]="WOW",f["908563459236466"]="SORRY",f["444813342392137"]="ANGER",f["613557422527858"]="SUPPORT",f),m=h!==void 0?h:h=b("useStoriesLWRKeyframes_viewer.graphql");function a(a){var b=a.initializeVisualAttributes,e=a.onKeyframesRemoved,f=a.onKeyframesSelected;a=a.viewer;var g=j(null),h=k([]),n=h[0],o=h[1],p=d("CometRelay").useFragment(m,a);a=i(function(a){var d;h=h();if(h==null)return;f!=null&&f();g.current=[].concat((d=g.current)!=null?d:[],[h]);o(g.current);function h(){var d;d=p==null?void 0:(d=p.stories_lwr_animations)==null?void 0:d.edges;if(d==null)return null;var f=null,h=l[a];for(var i=0;i<d.length;++i){var j,k=d==null?void 0:(j=d[i])==null?void 0:j.node;if((k==null?void 0:k.feedback_reaction_identifier)===h){j=function(){var d,i=c("StoriesUniqueID")();d=k==null?void 0:(d=k.tap_animation_asset)==null?void 0:d.keyframe_uri;if(d==null)return"break";var j=b==null?{random:-1,scale:1}:b();d+="&"+i;f=babelHelpers["extends"]({assetName:h,index:c("DynamicUFIReactionTypes").ordering.indexOf(a),key:i,onRepeatEnd:function(){var a;a=((a=g.current)!=null?a:[]).slice();for(var b=0;b<a.length;b++)if(a[b].key===i){a.splice(b,1);break}e!=null&&e(a);g.current=a;o(a)},uri:d},j);return"break"}();if(j==="break")break}}return f}},[p==null?void 0:(h=p.stories_lwr_animations)==null?void 0:h.edges,b,e,f]);h=i(function(){e!=null&&e([]),g.current=[],o(g.current)},[e]);return[n,a,h]}g["default"]=a}),98);
__d("StoryReplyType",[],(function(a,b,c,d,e,f){a=Object.freeze({UNKNOWN:"unknown",TEXT:"text",LIGHT_WEIGHT:"light_weight",MEDIA:"media",STICKER:"sticker",GIF:"gif",PHOTO:"photo",VIDEO:"video",POLL_VOTE:"poll_vote",QUIZ_VOTE:"quiz_vote",SLIDER_VOTE:"slider_vote",REACTION_STICKER_REACT:"reaction_sticker_react",CONTEXTUAL_REPLY:"contextual_reply",AUDIO:"audio",PREDICTION_STICKER_VOTE:"prediction_sticker_vote"});f["default"]=a}),66);
__d("useStoriesShowSentTextToast",["fbt","TetraIcon.react","cometPushToast","cr:3460","react","useToasterStateManager"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a,e){var f=c("useToasterStateManager")(),g=i.jsx(c("TetraIcon.react"),{color:"highlight",icon:b("cr:3460"),size:20}),j=e===!0?h._("__JHASH__UX95e_k-8XA__JHASH__",[h._param("Story's Page's name",a)]):h._("__JHASH__4chvTfnLMSL__JHASH__",[h._param("Story's owner's name",a)]);return function(){d("cometPushToast").cometPushToast({icon:g,message:j},void 0,f)}}g["default"]=a}),98);
__d("useStoriesSendReply",["CometRelay","StoriesActorContext","StoriesGating","StoriesLoggingConstants","StoryReplyType","cometPushToast","react","useMinifiedProductAttribution","useStoriesSendReplyMutation.graphql","useStoriesShowSentTextToast","uuid"],(function(a,b,c,d,e,f,g){"use strict";var h;e=d("react");var i=e.useContext,j=e.useMemo,k=function(a,b,d){var e=a.get(b.storyID);e=e&&e.getLinkedRecord("story_card_info");e=e&&e.getLinkedRecord("story_card_reactions",{first:10});if(e==null)return;var f=null,g=null,h=null,i=e.getLinkedRecords("edges");if(i==null||i.length===0){var j=a.create("client:newNode:"+c("uuid")(),"MessagingActor");j.setValue(d,"id");j.setValue("User","__typename");d=a.create("client:newNode:"+c("uuid")(),"MessengerMontageMessageActionsOfReactionConnection");h=[];d.setLinkedRecords(h,"edges");g=d;var k=a.create("client:newNode:"+c("uuid")(),"MessengerMontageMessageReaction");k.setLinkedRecord(j,"messaging_actor");k.setLinkedRecord(d,"messaging_actions");f=k;j=a.create("client:newNode:"+c("uuid")(),"StoryCardReactionsEdge");j.setLinkedRecord(k,"node");i=[j];e.setLinkedRecords(i,"edges")}else f=i[0]&&i[0].getLinkedRecord("node"),g=f&&f.getLinkedRecord("messaging_actions"),h=g&&g.getLinkedRecords("edges");if(g==null||h==null||f==null)return;d=a.create("client:newNode:"+c("uuid")(),"MessengerMontageMessageAction");d.setValue(b.unicode,"reaction");k=a.create("client:newNode:"+c("uuid")(),"MessengerMontageMessageActionsOfReactionEdge");k.setLinkedRecord(d,"node");h.push(k);g.setLinkedRecords(h,"edges");g.setValue(h.length,"count")},l=h!==void 0?h:h=b("useStoriesSendReplyMutation.graphql");function m(a){var b;return(b=Object.keys(c("StoryReplyType")).find(function(b){return c("StoryReplyType")[b]===a}))!=null?b:"UNKNOWN"}function a(a,b){var e=d("CometRelay").useRelayEnvironment(),f=i(c("StoriesActorContext")),g=f.actorID,h=c("useMinifiedProductAttribution")(),n=c("useStoriesShowSentTextToast")(a,b);return j(function(){var a=function(a,b){return d("CometRelay").commitMutation(e,{mutation:l,onCompleted:function(a,d){n(),b.replyAttemptCompletedLog(c("StoryReplyType").GIF,d==null?null:d[0])},onError:function(a){b.replyAttemptCompletedLog(c("StoryReplyType").GIF,a)},variables:{input:{attribution_id_v2:h,gif_url:a.gifUrl,story_id:a.storyID,story_reply_type:m(c("StoryReplyType").GIF)}}})},b=function(a,b){return d("CometRelay").commitMutation(e,{mutation:l,onCompleted:function(a,d){b.replyAttemptCompletedLog(c("StoryReplyType").LIGHT_WEIGHT,d==null?null:d[0])},onError:function(a){b.replyAttemptCompletedLog(c("StoryReplyType").LIGHT_WEIGHT,a)},optimisticUpdater:function(b){return k(b,a,g)},variables:{input:{attribution_id_v2:h,lightweight_reaction_actions:{offsets:[a.timeOffset||0],reaction:a.unicode},message:a.unicode,story_id:a.storyID,story_reply_type:m(c("StoryReplyType").LIGHT_WEIGHT)}}})},f=function(a,b){var f=a.isContextualReply===!0?c("StoryReplyType").CONTEXTUAL_REPLY:c("StoryReplyType").STICKER;return d("CometRelay").commitMutation(e,{mutation:l,onCompleted:function(a,c){n();b.replyAttemptCompletedLog(f,c==null?null:c[0]);a=c==null;d("StoriesGating").isTest()&&a&&d("cometPushToast").cometPushSimpleToast("sticker reply successful")},onError:function(a){b.replyAttemptCompletedLog(f,a)},variables:{input:{attribution_id_v2:h,sticker_id:a.stickerID,story_id:a.storyID,story_reply_type:m(f)}}})},i=function(a,b,f,g){f.replyLog(c("StoriesLoggingConstants").ACTION_TYPE.SEND_REPLY_ATTEMPT);var i=b===!0?c("StoryReplyType").CONTEXTUAL_REPLY:c("StoryReplyType").TEXT;return d("CometRelay").commitMutation(e,{mutation:l,onCompleted:function(b){function a(a,c){return b.apply(this,arguments)}a.toString=function(){return b.toString()};return a}(function(a,b){n();f.replyAttemptCompletedLog(i,b==null?null:b[0]);g&&g(b);a=b==null;d("StoriesGating").isTest()&&a&&d("cometPushToast").cometPushSimpleToast("text reply successful")}),onError:function(a){f.replyAttemptCompletedLog(i,a)},variables:{input:{attribution_id_v2:h,message:a.message,story_id:a.storyID,story_reply_type:m(i)}}})};return{sendGif:a,sendLWR:b,sendSticker:f,sendText:i}},[g,e,h,n])}g["default"]=a}),98);
__d("useStoriesLWR.react",["CometRelay","CometRouteParams","Random","StoriesEnums","StoriesLoggerContext","StoriesLoggingConstants","StoriesPauseReasons","react","useStoriesLWRKeyframes","useStoriesLWR_animations.graphql","useStoriesSendReply"],(function(a,b,c,d,e,f,g){"use strict";var h;e=d("react");var i=e.useCallback,j=e.useContext,k=.55,l=(f={},f["1635855486666999"]=d("StoriesEnums").LIGHTWEIGHT_REACTION_UNICODES.LIKE,f["1678524932434102"]=d("StoriesEnums").LIGHTWEIGHT_REACTION_UNICODES.LOVE,f["115940658764963"]=d("StoriesEnums").LIGHTWEIGHT_REACTION_UNICODES.HAHA,f["478547315650144"]=d("StoriesEnums").LIGHTWEIGHT_REACTION_UNICODES.WOW,f["908563459236466"]=d("StoriesEnums").LIGHTWEIGHT_REACTION_UNICODES.SORRY,f["444813342392137"]=d("StoriesEnums").LIGHTWEIGHT_REACTION_UNICODES.ANGER,f["613557422527858"]=d("StoriesEnums").LIGHTWEIGHT_REACTION_UNICODES.SUPPORT,f),m=h!==void 0?h:h=b("useStoriesLWR_animations.graphql");function a(a){var b=a.animations,e=a.cardID,f=a.isClicked,g=f===void 0?!1:f,h=a.setPause;f=d("CometRelay").useFragment(m,b);a=j(c("StoriesLoggerContext"));var n=a.logger;b=c("useStoriesSendReply")();var o=b.sendLWR,p=d("CometRouteParams").useRouteParams();a=i(function(){g&&h(!0,d("StoriesPauseReasons").LWR_PLAYBACK)},[g,h]);b=i(function(a){g&&a.length===0&&h(!1,d("StoriesPauseReasons").LWR_PLAYBACK)},[g,h]);var q=i(function(){return g?{random:-1,scale:1}:{random:d("Random").random(),scale:1+d("Random").random()*k}},[g]);q=c("useStoriesLWRKeyframes")({initializeVisualAttributes:q,onKeyframesRemoved:b,onKeyframesSelected:a,viewer:f});b=q[0];var r=q[1];a=i(function(a){e!=null&&g&&(o({storyID:e,unicode:l[a]},n),p.source===c("StoriesLoggingConstants").ACTION_SOURCE.FROM_FEED_INLINE_VIEWER&&n.sifAutoplayLwrLog(c("StoriesLoggingConstants").ACTION_SOURCE.FROM_FEED_INLINE_VIEWER)),r(a)},[r,e,g,n,p.source,o]);return[b,a]}g["default"]=a}),98);
__d("useStoriesShowEpdBlockToast",["fbt","cometPushToast","useToasterStateManager"],(function(a,b,c,d,e,f,g,h){"use strict";function a(){var a=c("useToasterStateManager")(),b=h._("__JHASH__YbdNdxe72vs__JHASH__");return function(){d("cometPushToast").cometPushErrorToast({message:b},void 0,a)}}g["default"]=a}),98);
__d("useStoriesSuspensePause",["StoriesLoggerContext","StoriesPauseReasons","Visibility","cr:809608","react","storiesViewerSuspenseEmitter"],(function(a,b,c,d,e,f,g){"use strict";e=d("react");var h=e.useCallback,i=e.useContext,j=e.useEffect,k=e.useRef,l=e.useState;function a(){var a=l(!1),e=a[0],f=a[1];a=i(c("StoriesLoggerContext"));var g=a.logger,m=k({}),n=h(function(a,b){if(a)m.current[b]=!0,f(a),g.pauseLog(!0,b);else{if(b===d("StoriesPauseReasons").CARD_CHANGE&&(m.current[d("StoriesPauseReasons").VIEWER_SHEET_OVERLAY]===!0||m.current[d("StoriesPauseReasons").COMMENTS_SHEET_OVERLAY]===!0)){if(m.current[d("StoriesPauseReasons").VIEWER_SHEET_OVERLAY]===!0){m.current=(a={},a[d("StoriesPauseReasons").VIEWER_SHEET_OVERLAY]=!0,a)}else if(m.current[d("StoriesPauseReasons").COMMENTS_SHEET_OVERLAY]===!0){m.current=(a={},a[d("StoriesPauseReasons").COMMENTS_SHEET_OVERLAY]=!0,a)}}else if(b===d("StoriesPauseReasons").VISIBILITY_CHANGE&&m.current[d("StoriesPauseReasons").WATCH_AGAIN_OVERLAY]===!0){m.current=(a={},a[d("StoriesPauseReasons").WATCH_AGAIN_OVERLAY]=!0,a)}else b===d("StoriesPauseReasons").CLICK_PAUSE_ICON||b===d("StoriesPauseReasons").KEYBOARD||b===d("StoriesPauseReasons").BUCKET_TRANSITION||b===d("StoriesPauseReasons").CARD_CHANGE||b===d("StoriesPauseReasons").VIEWER_SHEET_OVERLAY||b===d("StoriesPauseReasons").BUCKET_REFRESH||b===d("StoriesPauseReasons").COMMENTS_SHEET_OVERLAY?m.current={}:delete m.current[b];Object.keys(m.current).length===0&&(f(!1),g.pauseLog(!1,b))}},[g]);j(function(){return c("storiesViewerSuspenseEmitter").listenToPauseRequest(function(){return n.apply(void 0,arguments)})},[n]);j(function(){if(b("cr:809608")==null)return;return b("cr:809608")({onJewelHidden:function(){n(!1,d("StoriesPauseReasons").JEWEL)},onJewelShown:function(){n(!0,d("StoriesPauseReasons").JEWEL)}})},[n]);j(function(){var a=[c("Visibility").addListener(c("Visibility").HIDDEN,function(){return n(!0,d("StoriesPauseReasons").VISIBILITY_CHANGE)}),c("Visibility").addListener(c("Visibility").VISIBLE,function(){return n(!1,d("StoriesPauseReasons").VISIBILITY_CHANGE)})];return function(){a.forEach(function(a){return a.remove()})}},[n]);return[e,n]}g["default"]=a}),98);
__d("StoriesSuspensePauseContextProvider.react",["StoriesSuspensePauseContext","react","useStoriesSuspensePause"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo;function a(a){a=a.children;var b=c("useStoriesSuspensePause")(),d=b[0],e=b[1];b=i(function(){return{isPaused:d,setPause:e}},[d,e]);return h.jsx(c("StoriesSuspensePauseContext").Provider,{value:b,children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("EmojiSpan.react",["cx","FBEmojiResource","UnicodeUtils","react"],(function(a,b,c,d,e,f,g,h){var i=d("react");function a(a){var b=a.children;a.contentState;var e=a.decoratedText,f=a.dir,g=a.offsetKey;a=a.size;var h=0,j=e.length,k=[];while(h<j){var l=d("UnicodeUtils").getUTF16Length(e,h);k.push(e.substr(h,l));h+=l}l=c("FBEmojiResource").fromCodepoints(k);h=l!=null?l.getImageURL(a):null;return h!=null?i.jsx("span",{className:"_3gl1 _5zz4","data-offset-key":g,"data-testid":void 0,dir:f,style:{backgroundImage:"url("+h+")",backgroundSize:a+"px "+a+"px",height:a,width:a},children:i.jsx("span",{className:"_ncl",children:b})}):i.jsx("span",{"data-offset-key":g,children:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesFeedbackConsolidatedStickerPickerRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6913909065292769"}),null);