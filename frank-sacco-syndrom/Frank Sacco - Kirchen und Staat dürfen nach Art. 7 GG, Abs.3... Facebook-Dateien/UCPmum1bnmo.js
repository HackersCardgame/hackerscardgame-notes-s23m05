;/*FB_PKG_DELIM*/

__d("GroupsCometRequestToParticipateFromChatDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6151888664894002"}),null);
__d("GroupsCometRequestToParticipateFromChatDialogQuery$Parameters",["GroupsCometRequestToParticipateFromChatDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("GroupsCometRequestToParticipateFromChatDialogQuery_facebookRelayOperation"),metadata:{},name:"GroupsCometRequestToParticipateFromChatDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("GroupsCometCancelForumParticipationRequestDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5236204216436092"}),null);
__d("GroupsCometCancelForumParticipationRequestDialogQuery$Parameters",["GroupsCometCancelForumParticipationRequestDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("GroupsCometCancelForumParticipationRequestDialogQuery_facebookRelayOperation"),metadata:{},name:"GroupsCometCancelForumParticipationRequestDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("GroupsCometCommunityChatsGeneralOneClickChatDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6124987000929784"}),null);
__d("GroupsCometCommunityChatsGeneralOneClickChatDialogQuery$Parameters",["GroupsCometCommunityChatsGeneralOneClickChatDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("GroupsCometCommunityChatsGeneralOneClickChatDialogQuery_facebookRelayOperation"),metadata:{},name:"GroupsCometCommunityChatsGeneralOneClickChatDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("useNuxOnce_nux.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useNuxOnce_nux",selections:[{alias:null,args:null,kind:"ScalarField",name:"nux_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_show",storageKey:null}],type:"DefaultNUX",abstractKey:null};e.exports=a}),null);
__d("GroupsCometRequestToParticipateFromChatDialog.entrypoint",["GroupsCometRequestToParticipateFromChatDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.groupID;return{queries:{myQueryReference:{parameters:c("GroupsCometRequestToParticipateFromChatDialogQuery$Parameters"),variables:{groupID:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("GroupsCometRequestToParticipateFromChatDialog.react").__setRef("GroupsCometRequestToParticipateFromChatDialog.entrypoint")};g["default"]=a}),98);
__d("GroupsCometRequestToParticipateFromChatDialogFbts",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("__JHASH__MkzA14JUv0k__JHASH__");g.RequestToParticipateDialogTitle=a}),98);
__d("useGroupsCometRequestToPartcipateFromChatEntryPointDialog",["CometCardedDialogLoadingStateLegacy.react","GroupsCometRequestToParticipateFromChatDialog.entrypoint","GroupsCometRequestToParticipateFromChatDialogFbts","react","useCometEntryPointDialog"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.groupID;return c("useCometEntryPointDialog")(c("GroupsCometRequestToParticipateFromChatDialog.entrypoint"),{groupID:a},void 0,function(a){return h.jsx(c("CometCardedDialogLoadingStateLegacy.react"),{onClose:a,title:d("GroupsCometRequestToParticipateFromChatDialogFbts").RequestToParticipateDialogTitle,withCloseButton:!0})})}g["default"]=a}),98);
__d("GroupsCometCancelForumParticipationRequestDialog.entrypoint",["GroupsCometCancelForumParticipationRequestDialogQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.groupID;return{queries:{myQueryReference:{parameters:c("GroupsCometCancelForumParticipationRequestDialogQuery$Parameters"),variables:{groupID:a}}}}},root:c("JSResourceForInteraction")("GroupsCometCancelForumParticipationRequestDialog.react").__setRef("GroupsCometCancelForumParticipationRequestDialog.entrypoint")};g["default"]=a}),98);
__d("GroupsCometCancelForumParticipationRequestDialogFbts",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("__JHASH__CmHi9B7qvSB__JHASH__");g.CancelForumParticipationRequestDialogTitle=a}),98);
__d("useGroupsCometCancelForumParticipationRequestEntryPointDialog",["CometCardedDialogLoadingStateLegacy.react","GroupsCometCancelForumParticipationRequestDialog.entrypoint","GroupsCometCancelForumParticipationRequestDialogFbts","react","useCometEntryPointDialog"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.groupID;return c("useCometEntryPointDialog")(c("GroupsCometCancelForumParticipationRequestDialog.entrypoint"),{groupID:a},void 0,function(a){return h.jsx(c("CometCardedDialogLoadingStateLegacy.react"),{onClose:a,title:d("GroupsCometCancelForumParticipationRequestDialogFbts").CancelForumParticipationRequestDialogTitle,withCloseButton:!0})})}g["default"]=a}),98);
__d("GroupsCometCommunityChatsGeneralOneClickChatDialog.entrypoint",["GroupsCometCommunityChatsGeneralOneClickChatDialogQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{queryReference:{parameters:c("GroupsCometCommunityChatsGeneralOneClickChatDialogQuery$Parameters"),variables:{groupID:a.groupID}}}}},root:c("JSResourceForInteraction")("GroupsCometCommunityChatsGeneralOneClickChatDialog.react").__setRef("GroupsCometCommunityChatsGeneralOneClickChatDialog.entrypoint")};b=a;g["default"]=b}),98);
__d("useNuxOnce",["CometLogImpressionFBNuxMutation","RelayHooks","react","useNuxOnce_nux.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;c=d("react");var i=c.useCallback,j=c.useRef;function a(a){var c=d("RelayHooks").useRelayEnvironment();a=d("RelayHooks").useFragment(h!==void 0?h:h=b("useNuxOnce_nux.graphql"),a);var e=a==null?void 0:a.nux_id,f=(a==null?void 0:a.should_show)===!0&&e!=null,g=j(!1);a=i(function(){!g.current&&e!=null&&f&&(g.current=!0,d("CometLogImpressionFBNuxMutation").commit(c,e))},[c,e,f,g]);return[f,a]}g["default"]=a}),98);
__d("XCometGroupChatsThreadViewControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/groups/{idorvanity}/chats/{thread_id}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("GroupsCometChatsBlockedUsersInChatWarningViewerThreadDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4441460415958655"}),null);