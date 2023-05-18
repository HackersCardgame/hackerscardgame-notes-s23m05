;/*FB_PKG_DELIM*/

__d("useGroupsCometMemberCount_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"showOnlyCount"},{defaultValue:"COMPRESSED",kind:"LocalArgument",name:"type"}],kind:"Fragment",metadata:null,name:"useGroupsCometMemberCount_group",selections:[{kind:"RequiredField",field:{alias:null,args:null,concreteType:"GroupMemberProfilesConnection",kind:"LinkedField",name:"group_member_profiles",plural:!1,selections:[{alias:null,args:[{kind:"Variable",name:"show_only_count",variableName:"showOnlyCount"},{kind:"Variable",name:"type",variableName:"type"}],kind:"ScalarField",name:"formatted_count_text",storageKey:null}],storageKey:null},action:"THROW",path:"group_member_profiles"}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("GroupsCometColorWrapper_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometColorWrapper_group",selections:[{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"if_viewer_can_see_expanded_color",plural:!1,selections:[{args:null,documentName:"GroupsCometColorWrapper_group_canSeeExpandedColor",fragmentName:"GroupsCometColorExpandedWrapper_group",fragmentPropName:"group",kind:"ModuleImport"}],storageKey:null},{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"if_viewer_cannot_see_expanded_color",plural:!1,selections:[{args:null,documentName:"GroupsCometColorWrapper_group_cannotSeeExpandedColor",fragmentName:"GroupsCometColorDefaultWrapper_group",fragmentPropName:"group",kind:"ModuleImport"}],storageKey:null}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("GroupsCometMoreActionMenuQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6196054223822670"}),null);
__d("GroupsCometMoreActionMenuQuery$Parameters",["GroupsCometMoreActionMenuQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("GroupsCometMoreActionMenuQuery_facebookRelayOperation"),metadata:{},name:"GroupsCometMoreActionMenuQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("useIdOrVanityRouteBuilder_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useIdOrVanityRouteBuilder_group",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"group_address",storageKey:null}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("GroupsCometMoreActionMenu.entrypoint",["GroupsCometMoreActionMenuQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.groupID;return{queries:{queryReference:{parameters:b("GroupsCometMoreActionMenuQuery$Parameters"),variables:{groupID:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("GroupsCometMoreActionMenu.react").__setRef("GroupsCometMoreActionMenu.entrypoint")};g["default"]=a}),98);
__d("GroupsCometJoinButtonWithMenu.react",["fbt","ix","CometEntryPointPopoverTrigger.react","GroupsCometMoreActionMenu.entrypoint","TetraButtonGroup.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){var b=a.disableSecondaryButton,e=b===void 0?!1:b;b=a.groupID;var f=a.primaryButtonConfig;return j.jsx(c("CometEntryPointPopoverTrigger.react"),{align:"middle",entryPointParams:{groupID:b},otherProps:{},popoverEntryPoint:c("GroupsCometMoreActionMenu.entrypoint"),preloadTrigger:"button",children:function(a,b,g,k,l,m){return j.jsx(c("TetraButtonGroup.react"),{paddingHorizontal:0,primary:f,secondaryIcon:{disabled:e,icon:d("fbicon")._(i("484386"),16),label:h._("__JHASH__vsPR1PMxOLr__JHASH__"),onHoverIn:k,onHoverOut:l,onPress:b,onPressIn:m,ref:a}})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useGroupsCometMemberCount",["CometRelay","useGroupsCometMemberCount_group.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){a=a.group$key;a=d("CometRelay").useFragment(h!==void 0?h:h=b("useGroupsCometMemberCount_group.graphql"),a);return(a=a.group_member_profiles.formatted_count_text)!=null?a:null}g["default"]=a}),98);
__d("GroupsCometCreatePreviewContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={isPreview:!1};c=a.createContext(b);g["default"]=c}),98);
__d("GroupsCometColorWrapper.react",["CometRelay","GroupsCometColorWrapper_group.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var c=a.children,e=a.group,f=a.isDefaultColorApplied;f=f===void 0?!0:f;var g=a.properties;a=a.testid;e=d("CometRelay").useFragment(h!==void 0?h:h=b("GroupsCometColorWrapper_group.graphql"),e);if((e==null?void 0:e.if_viewer_can_see_expanded_color)!=null)return i.jsx(d("CometRelay").MatchContainer,{match:e==null?void 0:e.if_viewer_can_see_expanded_color,props:{children:c,properties:g,testid:a}});return(e==null?void 0:e.if_viewer_cannot_see_expanded_color)&&f?i.jsx(d("CometRelay").MatchContainer,{match:e.if_viewer_cannot_see_expanded_color,props:{children:c,testid:a}}):c}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useIdOrVanityRouteBuilder",["CometRelay","isStringNullOrEmpty","useIdOrVanityRouteBuilder_group.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,e,f){e=d("CometRelay").useFragment(h!==void 0?h:h=b("useIdOrVanityRouteBuilder_group.graphql"),e);var g=e==null?void 0:e.id;e=e==null?void 0:e.group_address;g=c("isStringNullOrEmpty")(e)?g:e;return g==null?null:a.buildURL(babelHelpers["extends"]({idorvanity:g},f))}g["default"]=a}),98);
__d("GroupsCometPersistentJoinedStatusAvailabilityContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(!1);g["default"]=b}),98);
__d("usePreviousSurfaceForGroupLogging",["useRoutePassthroughProps","useRouteReferrer"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=c("useRoutePassthroughProps")(),b=c("useRouteReferrer")();switch(a==null?void 0:a.ref){case"community_panel":return"community_panel";case"feed_story":case"actor_hovercard":if((b==null?void 0:b.tracePolicy)==="comet.groups.feed")return"groups_targeted_tab";else if((b==null?void 0:b.tracePolicy)==="comet.home")return"newsfeed";else if((b==null?void 0:b.tracePolicy)==="comet.profile.collection.groups")return"timeline";else return"unknown";case"your_groups":return"other";case"groups_card":if((b==null?void 0:b.tracePolicy)==="comet.groups.discover")return"groups_discover_tab";else if((b==null?void 0:b.tracePolicy)==="comet.home")return"gysj";else return"unknown";case"notification":return"notification";case"bookmark":return"bookmarks";default:return"unknown"}}g["default"]=a}),98);
__d("VideoChatLoggingDataContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react").createContext;b=a(null);g["default"]=b}),98);
__d("XCometGroupAboutControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/groups/{idorvanity}/about/",Object.freeze({accept_recruiting_group_rules:!1,maybe_open_membership_questions:!1}),void 0);b=a;g["default"]=b}),98);
__d("GroupFeedRankingSetting",[],(function(a,b,c,d,e,f){a=Object.freeze({CHRONOLOGICAL:"CHRONOLOGICAL",RECENT_ACTIVITY:"RECENT_ACTIVITY",TOP_POSTS:"TOP_POSTS",MOST_POPULAR:"MOST_POPULAR",TOP_LISTINGS:"TOP_LISTINGS",RECENT_LISTING_ACTIVITY:"RECENT_LISTING_ACTIVITY",NEARBY_LISTINGS:"NEARBY_LISTINGS",CHRONOLOGICAL_LISTINGS:"CHRONOLOGICAL_LISTINGS",PHOTO_POSTS:"PHOTO_POSTS",VIDEO_POSTS:"VIDEO_POSTS",MEDIA_POSTS:"MEDIA_POSTS"});f["default"]=a}),66);/*FB_PKG_DELIM*/
__d("GroupCometComposerCreateDialogQuery$Parameters",["GroupCometComposerCreateDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("GroupCometComposerCreateDialogQuery_facebookRelayOperation"),metadata:{},name:"GroupCometComposerCreateDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("GroupCometComposerCreateDialog.entrypoint",["GroupCometComposerCreateDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.actorID,e=a.feedLocation;a=a.groupID;return{queries:{queryReference:{environmentProviderOptions:{actorID:b},parameters:c("GroupCometComposerCreateDialogQuery$Parameters"),variables:{actorID:b,feedLocation:(b=e)!=null?b:"GROUP",groupID:a,privacySelectorRenderLocation:"COMET_COMPOSER",scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("GroupCometComposerCreateDialog.react").__setRef("GroupCometComposerCreateDialog.entrypoint")};g["default"]=a}),98);
__d("useGroupCometComposerCreateDialog",["cr:1962"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:1962")}),98);
__d("useGroupsCometComposerCreateDialogImpl",["fbt","Actor","CometCardedDialogLegacy.react","FeedComposerCometGlimmer.react","GroupCometComposerCreateDialog.entrypoint","RelayUFI2CommentsKeyContext","TCometComposerTarget","cometComposerLogger","composerCometCardedDialogProps","react","useCometEntryPointDialog","uuidv4"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useContext,l=b.useRef;function m(){return i.jsx(c("CometCardedDialogLegacy.react"),babelHelpers["extends"]({title:h._("__JHASH__x9xe6O7Tanu__JHASH__")},c("composerCometCardedDialogProps"),{children:i.jsx(c("FeedComposerCometGlimmer.react"),{})}))}m.displayName=m.name+" [from "+f.id+"]";function a(a){a=a||{};var b=a.actorID_DO_NOT_USE_UNLESS_YOU_KNOW_EXACTLY_WHAT_YOU_ARE_DOING,e=a.feedLocation,f=a.groupID,g=a.onBeforeClose,h=a.onClose,n=a.onErr,o=a.onSave,p=a.onSubmitCommit,q=a.onSubmitComplete,r=a.setHidePendingContentCard;a=d("Actor").useActor();a=a[0];b=(b=b)!=null?b:a;a=l(null);b=c("useCometEntryPointDialog")(c("GroupCometComposerCreateDialog.entrypoint"),{actorID:b,feedLocation:e,groupID:f},void 0,function(){return i.jsx(m,{})});var s=b[0];e=b[1];f=b[2];b=b[3];var t=k(c("RelayUFI2CommentsKeyContext")),u=j(function(a){if(a.workDraftFor!=null)return;g&&g(a)},[g]);return[j(function(a){var b,e;a=a||{};var f=a.beginningViewState,g=a.composerEntryPointName,i=a.composerSourceSurface,j=a.feedLocation,k=a.groupID,l=a.localBackupTargetID,m=a.pushedPageOnLoad;a=a.renderLocation;b=(b=f==null?void 0:f.creationSessionID)!=null?b:c("uuidv4")();e={composerEntryPointName:(e=g)!=null?e:"inline_composer",composerSourceSurface:(e=i)!=null?e:"group",composerType:"group"};e={fields:e,type:"COMPOSER_ENTRY"};var v={target:{id:k,type:d("TCometComposerTarget").ComposerTargetType.Group}};c("cometComposerLogger")(e,b,v);s({beginningViewState:f,commentsKey:t,composerEntryPointName:g,composerSourceSurface:i,feedLocation:j,groupID:k,localBackupTargetID:l,onBeforeClose:u,onErr:n,onSave:o,onSubmitCommit:p,onSubmitComplete:q,pushedPageOnLoad:m,renderLocation:a,setHidePendingContentCard:r},h)},[t,u,h,n,o,p,q,r,s]),a,e,f,b]}g["default"]=a}),98);
__d("GroupRoomUpdaterUtils",["CometRelay","objectValues","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h="GroupRoomRHCCard_joinable_video_chats",i="GroupRoomGamingAudioRHCCard_joinable_video_chats",j="GroupRoomTab_joinable_video_chats",k="GroupJoinableVideoChatRHCUnitRoot_joinable_video_chats",l="GroupsJoinableVideoChatsList_joinable_video_chats",m="GroupJoinableVideoChatsEdge";function n(a){return d("CometRelay").ConnectionHandler.getConnection(a,h,{allows_guests:!1})}function o(a){return d("CometRelay").ConnectionHandler.getConnection(a,i,{allows_guests:!1,group_room_type:"GAMING_AUDIO"})}function p(a){return d("CometRelay").ConnectionHandler.getConnection(a,k,{allows_guests:!1})}function q(a){return d("CometRelay").ConnectionHandler.getConnection(a,j,{allows_guests:!1})}function r(a){return d("CometRelay").ConnectionHandler.getConnection(a,l,{allows_guests:!1})}function s(a){return{blueRhcConnection:p(a),blueTabConnection:r(a),gamingAudioRhcConnection:o(a),rhcConnection:n(a),tabConnection:q(a)}}function a(a,b,e){a=a.get(b);if(a==null){c("recoverableViolation")("group is not found in relay store for groupID: "+b,"groups_comet");return}b=s(a);a=b.blueRhcConnection;var f=b.blueTabConnection,g=b.gamingAudioRhcConnection,h=b.rhcConnection;b=b.tabConnection;f!=null&&d("CometRelay").ConnectionHandler.deleteNode(f,e);a!=null&&d("CometRelay").ConnectionHandler.deleteNode(a,e);g!=null&&d("CometRelay").ConnectionHandler.deleteNode(g,e);b!=null&&d("CometRelay").ConnectionHandler.deleteNode(b,e);h!=null&&d("CometRelay").ConnectionHandler.deleteNode(h,e)}function t(a,b,e){var f;if(!e)return;a=d("CometRelay").ConnectionHandler.createEdge(a,e,b,m);if(!a){c("recoverableViolation")("GroupRoomUpdaterUtils: Failed to create new edge","groups_comet");return}b=e.getLinkedRecords("edges");if(!b){c("recoverableViolation")("GroupRoomUpdaterUtils: Expected connection to have edges","groups_comet");return}f=(f=a.getLinkedRecord("node"))==null?void 0:f.getDataID();for(var b=b,g=Array.isArray(b),h=0,b=g?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var i;if(g){if(h>=b.length)break;i=b[h++]}else{h=b.next();if(h.done)break;i=h.value}i=i;if(f!=null&&(i==null?void 0:(i=i.getLinkedRecord("node"))==null?void 0:i.getDataID())===f)return}d("CometRelay").ConnectionHandler.insertEdgeBefore(e,a)}function b(a,b,d){var e=a.get(d);if(e==null){c("recoverableViolation")("group is not found in relay store for groupID: "+d,"groups_comet");return}c("objectValues")(s(e)).map(function(c){t(a,b,c)})}g.getConnections=s;g.groupsDeleteRoomUpdater=a;g.addNodeToGroupsConnections=b}),98);
__d("XCometGroupJoinableVideoChatsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/groups/{idorvanity}/rooms/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);/*FB_PKG_DELIM*/
__d("useRoomsRoomDefaultValues_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:60,kind:"LocalArgument",name:"profile_pic_width"},{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"useRoomsRoomDefaultValues_user",selections:[{alias:"profile_pic",args:[{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Variable",name:"width",variableName:"profile_pic_width"}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"short_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"gender",storageKey:null}],type:"User",abstractKey:null};e.exports=a}),null);
__d("RoomsRelayStoreUtils",["CometRelay","GroupRoomUpdaterUtils","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){var e,f;e=(e=a.getRoot().getLinkedRecord("viewer"))==null?void 0:e.getLinkedRecord("joinable_video_chats");if(!e)return;(f=d("CometRelay").ConnectionHandler.getConnection(e,"RoomsNullStateDialog_published_self_room_cards"))==null?void 0:f.invalidateRecord();f=d("CometRelay").ConnectionHandler.getConnection(e,"useRoomsSelfRooms_published_self_room_cards");if(!f){c("recoverableViolation")("Missing published_self_room_cards","rooms");return}h(b,f,a,"JoinableVideoChatsViewerFieldsPublishedSelfRoomCardsEdge");f=d("CometRelay").ConnectionHandler.getConnection(e,"CometHomeRightRailRoomsUnit_published_self_room_cards");f&&h(b,f,a,"JoinableVideoChatsViewerFieldsPublishedSelfRoomCardsEdge");b=e.getLinkedRecord("published_self_room_cards");f=i(b==null?void 0:b.getValue("count"));b==null?void 0:b.setValue(f+1,"count")}function b(a,b){var e;e=(e=a.getRoot().getLinkedRecord("viewer"))==null?void 0:e.getLinkedRecord("actor");if(!e){c("recoverableViolation")("Missing actor","rooms");return}var f=d("CometRelay").ConnectionHandler.getConnection(e,"RoomsTrayRoot_fb_room_cards");f&&h(b,f,a,"UserToFBRoomCardsEdge");f=d("CometRelay").ConnectionHandler.getConnection(e,"RoomsHomeAllRoomsSection_fb_room_cards");f&&h(b,f,a,"UserToFBRoomCardsEdge");f=d("CometRelay").ConnectionHandler.getConnection(e,"CometHomeRightRailRoomsUnit_fb_room_cards");f&&h(b,f,a,"UserToFBRoomCardsEdge")}function h(a,b,c,e){var f;f=(f=b.getLinkedRecords("edges"))!=null?f:[];var g=a.getDataID();if(g==null||f.find(function(a){return(a==null?void 0:(a=a.getLinkedRecord("node"))==null?void 0:a.getDataID())===g})!=null)return;f=d("CometRelay").ConnectionHandler.createEdge(c,b,a,e);d("CometRelay").ConnectionHandler.insertEdgeBefore(b,f)}function e(a,b,e,f){var g=a.get(b);if(g==null||g.getValue("link_hash")!==e)return;e=(g=a.getRoot().getLinkedRecord("viewer"))==null?void 0:g.getLinkedRecord("actor");if(!e)return;g=d("CometRelay").ConnectionHandler.getConnection(e,"RoomsTrayRoot_fb_room_cards");g&&d("CometRelay").ConnectionHandler.deleteNode(g,b);g=d("CometRelay").ConnectionHandler.getConnection(e,"RoomsHomeAllRoomsSection_fb_room_cards");g&&d("CometRelay").ConnectionHandler.deleteNode(g,b);g=d("CometRelay").ConnectionHandler.getConnection(e,"CometHomeRightRailRoomsUnit_fb_room_cards");g&&d("CometRelay").ConnectionHandler.deleteNode(g,b);f!=null&&d("GroupRoomUpdaterUtils").groupsDeleteRoomUpdater(a,f,b);f=(g=a.getRoot().getLinkedRecord("viewer"))==null?void 0:g.getLinkedRecord("joinable_video_chats");if(!f){c("recoverableViolation")("Missing joinable_video_chats","rooms");return}(a=d("CometRelay").ConnectionHandler.getConnection(f,"RoomsNullStateDialog_published_self_room_cards"))==null?void 0:a.invalidateRecord();g=d("CometRelay").ConnectionHandler.getConnection(f,"useRoomsSelfRooms_published_self_room_cards");if(!g){c("recoverableViolation")("Missing published_self_room_cards","rooms");return}d("CometRelay").ConnectionHandler.deleteNode(g,b);a=d("CometRelay").ConnectionHandler.getConnection(f,"CometHomeRightRailRoomsUnit_published_self_room_cards");a&&d("CometRelay").ConnectionHandler.deleteNode(a,b);g=f.getLinkedRecord("published_self_room_cards");a=i(g==null?void 0:g.getValue("count"));g==null?void 0:g.setValue(Math.max(a-1,0),"count");((f=e.getLinkedRecord("profile_active_messenger_room",{render_location:"NEWSFEED"}))==null?void 0:(g=f.getLinkedRecord("room"))==null?void 0:g.getValue("id"))===b&&e.setValue(null,"profile_active_messenger_room",{render_location:"NEWSFEED"})}function i(a){a=Number((a=a)!=null?a:0);return isNaN(a)?0:a}g.addSelfRoom=a;g.addFriendRoom=b;g.deleteRoom=e}),98);
__d("useRoomsRoomDefaultValues",["fbt","CometRelay","GraphQLGender","unrecoverableViolation","useRoomsRoomDefaultValues_user.graphql","useServerTime"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i!==void 0?i:i=b("useRoomsRoomDefaultValues_user.graphql"),k=String.fromCodePoint(128075);function a(a){var b,e,f=c("useServerTime")();a=d("CometRelay").useFragment(j,a);b=a==null?void 0:(b=a.profile_pic)==null?void 0:b.uri;e=new(c("GraphQLGender"))((e=a==null?void 0:a.gender)!=null?e:"UNKNOWN").toIntlVariationsEnum();a=h._("__JHASH__1lvekt4xu8x__JHASH__",[h._name("ownerName",(a=a==null?void 0:a.short_name)!=null?a:"",e)]).toString();e=a;if(b==null)throw c("unrecoverableViolation")("defaultProfileUri should be non-null","rooms");return{defaultDate:Math.floor(f.getTime()/1e3),defaultEmoji:k,defaultProfileUri:b,defaultRoomName:e}}g["default"]=a}),98);