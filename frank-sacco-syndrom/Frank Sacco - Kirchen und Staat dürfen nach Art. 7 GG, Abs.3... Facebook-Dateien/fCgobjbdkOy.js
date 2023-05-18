;/*FB_PKG_DELIM*/

__d("GroupsCometMemberCount_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"showOnlyCount"},{defaultValue:"COMPRESSED",kind:"LocalArgument",name:"type"}],kind:"Fragment",metadata:null,name:"GroupsCometMemberCount_group",selections:[{args:[{kind:"Variable",name:"showOnlyCount",variableName:"showOnlyCount"},{kind:"Variable",name:"type",variableName:"type"}],kind:"FragmentSpread",name:"useGroupsCometMemberCount_group"}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("GroupsCometFeedRightRailChatsRootQuery.graphql",["GroupsCometFeedRightRailChatsRootQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"scale"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},e=[d,c];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"GroupsCometFeedRightRailChatsRootQuery",selections:[{kind:"RequiredField",field:{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"GroupsCometFeedRightRailJoinedChats_viewer"},{args:null,kind:"FragmentSpread",name:"GroupsCometFeedRightRailGroupsWithoutChats_viewer"},{args:null,kind:"FragmentSpread",name:"GroupsCometFeedRightRailSuggestedChats_viewer"}],storageKey:null},action:"THROW",path:"viewer"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"GroupsCometFeedRightRailChatsRootQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupsTab",kind:"LinkedField",name:"groups_tab",plural:!1,selections:[{alias:"chats_with_creation",args:[{kind:"Literal",name:"first",value:1},{kind:"Literal",name:"list_type",value:"ALL_GROUPS"}],concreteType:"GroupsTabGroupsForChatCreationConnection",kind:"LinkedField",name:"groups_for_chat_creation",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:'groups_for_chat_creation(first:1,list_type:"ALL_GROUPS")'},{alias:null,args:[{kind:"Literal",name:"first",value:3},{kind:"Literal",name:"list_type",value:"GROUPS_WITHOUT_CHATS"}],concreteType:"GroupsTabGroupsForChatCreationConnection",kind:"LinkedField",name:"groups_for_chat_creation",plural:!1,selections:[{alias:null,args:null,concreteType:"MessengerCommunity",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"group",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:48},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:48}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"GroupMemberProfilesConnection",kind:"LinkedField",name:"group_member_profiles",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"show_only_count",value:!1},{kind:"Literal",name:"type",value:"COMPRESSED"}],kind:"ScalarField",name:"formatted_count_text",storageKey:'formatted_count_text(show_only_count:false,type:"COMPRESSED")'}],storageKey:null},c,{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"if_viewer_can_request_to_participate_in_forum",plural:!1,selections:e,storageKey:null},{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"if_viewer_can_see_pending_forum_participant_experience",plural:!1,selections:e,storageKey:null},{alias:null,args:null,concreteType:"MessengerCommunity",kind:"LinkedField",name:"community",plural:!1,selections:[{alias:null,args:null,concreteType:"MessengerCommunity",kind:"LinkedField",name:"if_viewer_can_see_admod_chat",plural:!1,selections:[{alias:"admod_create_chat_nux",args:[{kind:"Literal",name:"nux_id",value:10013}],concreteType:null,kind:"LinkedField",name:"nux",plural:!1,selections:[d,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"nux_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_show",storageKey:null}],type:"DefaultNUX",abstractKey:null},c],storageKey:"nux(nux_id:10013)"},c],storageKey:null},{alias:null,args:null,concreteType:"MessengerCommunity",kind:"LinkedField",name:"if_viewer_can_use_chat_templates",plural:!1,selections:e,storageKey:null},{alias:null,args:null,concreteType:"MessengerCommunity",kind:"LinkedField",name:"if_viewer_can_create_chat_as_admod",plural:!1,selections:e,storageKey:null},{alias:null,args:null,concreteType:"MessengerCommunity",kind:"LinkedField",name:"if_viewer_can_create_member_chat_as_member",plural:!1,selections:e,storageKey:null},c],storageKey:null}],storageKey:null},c],storageKey:null}],storageKey:'groups_for_chat_creation(first:3,list_type:"GROUPS_WITHOUT_CHATS")'},{alias:null,args:null,concreteType:"MessengerGlobalFBGroupChat",kind:"LinkedField",name:"suggested_chats",plural:!0,selections:[c],storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:b("GroupsCometFeedRightRailChatsRootQuery_facebookRelayOperation"),metadata:{},name:"GroupsCometFeedRightRailChatsRootQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("GroupsCometFeedRightRailGroupsWithoutChatsListItem_community.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"GroupsCometFeedRightRailGroupsWithoutChatsListItem_community",selections:[{kind:"RequiredField",field:{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"group",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:48},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:48}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"GroupsCometMemberCount_group"},{args:null,kind:"FragmentSpread",name:"useGroupsCometOnClickChatCreate_group"}],storageKey:null},action:"THROW",path:"group"}],type:"MessengerCommunity",abstractKey:null};e.exports=a}),null);
__d("GroupsCometFeedRightRailGroupsWithoutChats_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometFeedRightRailGroupsWithoutChats_viewer",selections:[{alias:null,args:null,concreteType:"GroupsTab",kind:"LinkedField",name:"groups_tab",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"first",value:3},{kind:"Literal",name:"list_type",value:"GROUPS_WITHOUT_CHATS"}],concreteType:"GroupsTabGroupsForChatCreationConnection",kind:"LinkedField",name:"groups_for_chat_creation",plural:!1,selections:[{alias:null,args:null,concreteType:"MessengerCommunity",kind:"LinkedField",name:"nodes",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"GroupsCometFeedRightRailGroupsWithoutChatsListItem_community"}],storageKey:null}],storageKey:'groups_for_chat_creation(first:3,list_type:"GROUPS_WITHOUT_CHATS")'}],storageKey:null}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("GroupsCometFeedRightRailJoinedChats_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometFeedRightRailJoinedChats_viewer",selections:[{alias:null,args:null,concreteType:"GroupsTab",kind:"LinkedField",name:"groups_tab",plural:!1,selections:[{alias:"chats_with_creation",args:[{kind:"Literal",name:"first",value:1},{kind:"Literal",name:"list_type",value:"ALL_GROUPS"}],concreteType:"GroupsTabGroupsForChatCreationConnection",kind:"LinkedField",name:"groups_for_chat_creation",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:'groups_for_chat_creation(first:1,list_type:"ALL_GROUPS")'}],storageKey:null}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("GroupsCometFeedRightRailSuggestedChats_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometFeedRightRailSuggestedChats_viewer",selections:[{alias:null,args:null,concreteType:"GroupsTab",kind:"LinkedField",name:"groups_tab",plural:!1,selections:[{alias:null,args:null,concreteType:"MessengerGlobalFBGroupChat",kind:"LinkedField",name:"suggested_chats",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("GroupsCometMemberCount.react",["CometRelay","GroupsCometMemberCount_group.graphql","useGroupsCometMemberCount"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){a=a.group$key;a=d("CometRelay").useFragment(h!==void 0?h:h=b("GroupsCometMemberCount_group.graphql"),a);return c("useGroupsCometMemberCount")({group$key:a})}g["default"]=a}),98);
__d("GroupsCometChatsConstants",[],(function(a,b,c,d,e,f){"use strict";a=4;b=30;f.RIGHT_RAIL_NUM_DISPLAYED_CHATS=a;f.RIGHT_RAIL_MAX_NUM_DISPLAYED_CHATS=b}),66);
__d("GroupsCometFeedRightRailChatsSection.react",["CometUnit.react","CometUnitHeader.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.action,d=a.children,e=a.onActionHoverIn,f=a.onActionHoverOut,g=a.onActionPress,i=a.onActionPressIn;a=a.title;return h.jsx("div",{className:"x1gvwcb",children:h.jsx(c("CometUnit.react"),{header:h.jsx(c("CometUnitHeader.react"),{action:b,headline:a,level:3,onActionHoverIn:e,onActionHoverOut:f,onActionPress:g,onActionPressIn:i}),paddingBottom:16,type:"transparent",children:d})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometFeedRightRailGroupsWithoutChats.react",["fbt","CometListCellStrict.react","CometRelay","GroupsCometFeedRightRailChatsSection.react","GroupsCometFeedRightRailGroupsWithoutChatsListItem_community.graphql","GroupsCometFeedRightRailGroupsWithoutChats_viewer.graphql","GroupsCometMemberCount.react","qex","react","useGroupsCometOnClickChatCreate.react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=d("react");function a(a){a=a.viewer;a=d("CometRelay").useFragment(i!==void 0?i:i=b("GroupsCometFeedRightRailGroupsWithoutChats_viewer.graphql"),a);a=(a=(a=a.groups_tab)==null?void 0:(a=a.groups_for_chat_creation)==null?void 0:a.nodes)!=null?a:[];return!a.length||c("qex")._("159")===!1?null:k.jsx(c("GroupsCometFeedRightRailChatsSection.react"),{title:h._("__JHASH__nVCHaGkXSss__JHASH__"),children:a.map(function(a,b){return k.jsx(l,{community:a},b)})})}a.displayName=a.name+" [from "+f.id+"]";function l(a){a=a.community;a=d("CometRelay").useFragment(j!==void 0?j:j=b("GroupsCometFeedRightRailGroupsWithoutChatsListItem_community.graphql"),a);var e=c("useGroupsCometOnClickChatCreate.react")({entryPoint:"fb_groups:tab_chats_rail",group$key:a.group,loggingExtras:{entry_point:"fb_groups:tab_chats_rail"},surface:"groups_tab"}),f=e.canSeeCreateButton;e=e.onClickCreate;return!f?null:k.jsx(c("CometListCellStrict.react"),{addOnEnd:{label:h._("__JHASH__oBohHykhRA9__JHASH__"),onPress:e,reduceEmphasis:!0,type:"primary-button"},addOnStart:{shape:"roundedRect",size:48,source:{uri:(f=(f=a.group)==null?void 0:(e=f.profile_picture)==null?void 0:e.uri)!=null?f:""},type:"profile-photo"},body:k.jsx(c("GroupsCometMemberCount.react"),{group$key:a.group}),headline:(e=a.group)==null?void 0:e.name,level:4})}l.displayName=l.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometFeedRightRailThreadListItem.react",["CometGlimmer.react","CometPlaceholder.react","CometProfilePhoto.react","LSMediaUrl.bs","MWPThreadIsPage.react","MWThreadKey.bs","MWThreadListGlimmer.react","MWThreadListItem.bs","react","useCommunityFolder"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={groupThumbnail:{end:"xds687c",position:"x10l6tqk",top:"x13vifvy",$$css:!0},threadThumbnail:{backgroundColor:"x2bj2ny",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",bottom:"x1o583il",paddingTop:"xyqdw3p",paddingEnd:"x10ogl3i",paddingBottom:"xg8j3zb",paddingStart:"x1k2j06m",position:"x10l6tqk",start:"x1181uw3",$$css:!0},thumbnail:{height:"xsdox4t",position:"x1n2onr6",width:"x1useyqa",$$css:!0},thumbnailGlimmer:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",height:"xsdox4t",width:"x1useyqa",$$css:!0}};function a(a){a=a.thread;return h.jsx(c("CometPlaceholder.react"),{fallback:h.jsx("div",{role:"row",children:h.jsx(c("MWThreadListGlimmer.react"),{role:"gridcell"})}),children:h.jsx(d("MWPThreadIsPage.react").Provider,{threadKey:a.threadKey,children:h.jsx(d("MWThreadKey.bs").make,{id:a.threadKey,children:h.jsx(d("MWThreadListItem.bs").make,{lsEntryPoint:"groupTab",messagingEntrypoint:"group_tab",renderThreadPhoto:function(a){return h.jsx(j,{thread:a})},responsive:!0,selected:!1,size:48,thread:a})})})})}a.displayName=a.name+" [from "+f.id+"]";function j(a){a=a.thread;var b=c("useCommunityFolder")(a);b=d("LSMediaUrl.bs").CommunityFolder.folderPictureUrl(b);a=d("LSMediaUrl.bs").Thread.threadPictureUrl(a);var e=b==null?h.jsx(c("CometGlimmer.react"),{index:0,xstyle:i.thumbnailGlimmer}):h.jsx("div",{className:"xds687c x10l6tqk x13vifvy",children:h.jsx(c("CometProfilePhoto.react"),{shape:"roundedRect",size:32,source:{uri:b}})});b=a!=null&&b!=null?h.jsx("div",{className:"x2bj2ny x14yjl9h xudhj91 x18nykt9 xww2gxu x1o583il xyqdw3p x10ogl3i xg8j3zb x1k2j06m x10l6tqk x1181uw3",children:h.jsx(c("CometProfilePhoto.react"),{shape:"circle",size:32,source:{uri:a}})}):null;return h.jsxs("div",{className:"xsdox4t x1n2onr6 x1useyqa",children:[e,b]})}j.displayName=j.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWPThreadItemsContainer.react",["FocusRegion.react","MWThreadListFocusableTable.react","focusScopeQueries","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.children;a=a.gridLabel;return h.jsx("div",{"aria-label":a,"data-testid":void 0,role:"grid",children:h.jsx(d("FocusRegion.react").FocusRegion,{autoRestoreFocus:!0,recoverFocusQuery:d("focusScopeQueries").tabbableScopeQuery,children:h.jsx(d("MWThreadListFocusableTable.react").MWThreadListFocusableTable,{children:b})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometFeedRightRailThreadList.react",["fbt","CometColumn.react","CometColumnItem.react","GroupsCometChatsConstants","GroupsCometFeedRightRailChatsSection.react","GroupsCometFeedRightRailThreadListItem.react","MWPThreadItemsContainer.react","TetraButton.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.expanded,e=a.onExpand,f=a.threads,g=a.title;a=babelHelpers.objectWithoutPropertiesLoose(a,["expanded","onExpand","threads","title"]);var j=f.map(function(a){return i.jsx(c("GroupsCometFeedRightRailThreadListItem.react"),{thread:a},a.threadKey)}).slice(0,b?f.length:d("GroupsCometChatsConstants").RIGHT_RAIL_NUM_DISPLAYED_CHATS);return i.jsx(c("GroupsCometFeedRightRailChatsSection.react"),babelHelpers["extends"]({},a,{title:g,children:i.jsxs(c("CometColumn.react"),{children:[i.jsx(c("CometColumnItem.react"),{children:i.jsx(c("MWPThreadItemsContainer.react"),{gridLabel:g,children:j})}),f.length>d("GroupsCometChatsConstants").RIGHT_RAIL_NUM_DISPLAYED_CHATS&&!b&&i.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,paddingTop:12,children:i.jsx(c("TetraButton.react"),{label:h._("__JHASH__0JedzAqEnYj__JHASH__"),onPress:e,type:"secondary"})})]})}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometFeedRightRailJoinedChats.react",["fbt","CometRelay","GroupsCometChatsConstants","GroupsCometFeedRightRailJoinedChats_viewer.graphql","GroupsCometFeedRightRailThreadList.react","GroupsCometGlobalChatCreationDialog.entrypoint","LSIntEnum","ReQL","ReQLSuspense","qex","react","useCometEntryPointDialog","useReStore"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useState,l=e.useTransition;function a(a){a=a.viewer;a=d("CometRelay").useFragment(i!==void 0?i:i=b("GroupsCometFeedRightRailJoinedChats_viewer.graphql"),a);var e=c("useReStore")(),g=k(!1),m=g[0],n=g[1];g=d("ReQLSuspense").useArray(function(){return d("ReQL").union(d("ReQL").fromTableDescending(e.table("threads").index("threadTypeLastActivityTimestampMs")).getKeyRange(d("LSIntEnum").ofNumber(23)),d("ReQL").fromTableDescending(e.table("threads").index("threadTypeLastActivityTimestampMs")).getKeyRange(d("LSIntEnum").ofNumber(18)),d("ReQL").fromTableDescending(e.table("threads").index("threadTypeLastActivityTimestampMs")).getKeyRange(d("LSIntEnum").ofNumber(21))).take(m?d("GroupsCometChatsConstants").RIGHT_RAIL_MAX_NUM_DISPLAYED_CHATS:d("GroupsCometChatsConstants").RIGHT_RAIL_NUM_DISPLAYED_CHATS+1)},[e,m],f.id+":61");var o=l();o[0];var p=o[1];o=c("useCometEntryPointDialog")(c("GroupsCometGlobalChatCreationDialog.entrypoint"),{});var q=o[0],r=o[1],s=o[2];o=o[3];if(!g.length)return null;a=((a=(a=a.groups_tab)==null?void 0:(a=a.chats_with_creation)==null?void 0:a.count)!=null?a:0)>0&&c("qex")._("993")===!0;a=a?{action:h._("__JHASH__nHm18tWodqv__JHASH__"),onActionHoverIn:r,onActionHoverOut:s,onActionPress:function(){return q({entrypoint:"fb_groups:tab_chats_rail"})},onActionPressIn:o}:{};return j.jsx(c("GroupsCometFeedRightRailThreadList.react"),babelHelpers["extends"]({},a,{expanded:m,onExpand:function(){return p(function(){return n(!0)})},threads:g,title:h._("__JHASH__KL_UOHBAiay__JHASH__")}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometFeedRightRailSuggestedChats.react",["fbt","CometRelay","GroupsCometFeedRightRailSuggestedChats_viewer.graphql","GroupsCometFeedRightRailThreadList.react","I64","MWCMThreadTypes.react","ReQL","ReQLSuspense","react","useReStore"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useMemo,l=e.useState;function a(a){a=a.viewer;var e=d("CometRelay").useFragment(i!==void 0?i:i=b("GroupsCometFeedRightRailSuggestedChats_viewer.graphql"),a),g=c("useReStore")();a=l(!1);var m=a[0],n=a[1],o=k(function(){var a;return((a=e==null?void 0:(a=e.groups_tab)==null?void 0:a.suggested_chats)!=null?a:[]).map(function(a){return a.id}).filter(Boolean)},[e==null?void 0:(a=e.groups_tab)==null?void 0:a.suggested_chats]);a=d("ReQLSuspense").useArray(function(){return d("ReQL").fromTableDescending(g.table("threads").index("lastActivityTimestampMs")).filter(function(a){return o.includes(d("I64").to_string(a.threadKey))&&d("MWCMThreadTypes.react").isUnjoinedCMThread(a.threadType)})},[o,g],f.id+":59");if(!a.length)return null;a=a.sort(function(a,b){return o.indexOf(d("I64").to_string(a.threadKey))-o.indexOf(d("I64").to_string(b.threadKey))});return j.jsx(c("GroupsCometFeedRightRailThreadList.react"),{expanded:m,onExpand:function(){return n(!0)},threads:a,title:h._("__JHASH__JisdECH1ZTN__JHASH__")})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometFeedRightRailChatsRoot.react",["CometRelay","GroupsCometFeedRightRailChatsRootQuery.graphql","GroupsCometFeedRightRailGroupsWithoutChats.react","GroupsCometFeedRightRailJoinedChats.react","GroupsCometFeedRightRailSuggestedChats.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){a=a.chatsQueryReference;a=d("CometRelay").usePreloadedQuery(h!==void 0?h:h=b("GroupsCometFeedRightRailChatsRootQuery.graphql"),a);a=a.viewer;return i.jsxs(i.Fragment,{children:[i.jsx(c("GroupsCometFeedRightRailJoinedChats.react"),{viewer:a}),i.jsx(c("GroupsCometFeedRightRailGroupsWithoutChats.react"),{viewer:a}),i.jsx(c("GroupsCometFeedRightRailSuggestedChats.react"),{viewer:a})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometFeedWithRightRailChats.react",["CometAppNavigationConstants","CometErrorBoundary.react","CometFeedWidthStyles","CometGlobalPanelLayoutContext","CometResponsiveColumns.react","CometScrollView.react","FBLogger","GroupsCometFeedRightRailChatsRoot.react","react","stylex","useMatchMedia"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j=d("CometFeedWidthStyles").getResponsiveColumnWidthStyles(),k={primary:{display:"x78zum5",flexGrow:"x1iyjqo2",justifyContent:"xl56j7k",width:"xvue9z",$$css:!0},root:{boxSizing:"x9f619",display:"x78zum5",paddingStart:"x1swvt13",paddingEnd:"x1pi30zi",width:"xh8yej3",$$css:!0},rootResponsive:{flexWrap:"x8hhl5t",$$css:!0},scrollView:{display:"x78zum5",maxHeight:"x1wtsk8d",$$css:!0},scrollViewResponsive:{display:"x78zum5",maxHeight:"x1v1v3ea",$$css:!0},secondary:{marginStart:"x1d52u69",maxWidth:"xxc7z9f",$$css:!0},secondaryCard:{backgroundColor:"x2bj2ny",borderTopStartRadius:"x1qpq9i9",borderTopEndRadius:"xdney7k",borderBottomEndRadius:"xu5ydu1",borderBottomStartRadius:"xt3gfkd",boxShadow:"xquyuld",width:"xh8yej3",$$css:!0},secondarySticky:{position:"x7wzq59",top:"xt5m03i",$$css:!0}},l=1279;function a(a){var b=a.chatsQueryReference;a=a.feedContents;var e=i(c("CometGlobalPanelLayoutContext"));e=c("useMatchMedia")("(max-width: "+(e?l+d("CometAppNavigationConstants").GLOBAL_PANEL_WIDTH:l)+"px");a=h.jsx(d("CometResponsiveColumns.react").Container,{children:h.jsx(d("CometResponsiveColumns.react").Column,{columnType:"FEED",children:a})});b=h.jsx(c("CometErrorBoundary.react"),{onError:function(a){c("FBLogger")("community_core_experience_comet").catching(a).mustfix("Failed to render chats in groups tab")},children:h.jsx("div",{className:c("stylex")(k.secondaryCard,e&&j.FEED,!e&&k.secondarySticky),children:h.jsx("div",{className:c("stylex")(e?k.scrollViewResponsive:k.scrollView),children:h.jsx(c("CometScrollView.react"),{showsHorizontalScrollIndicator:!1,children:h.jsx(c("GroupsCometFeedRightRailChatsRoot.react"),{chatsQueryReference:b})})})})});return h.jsxs("div",{className:c("stylex")(k.root,e&&k.rootResponsive),children:[h.jsx("div",{className:"x78zum5 x1iyjqo2 xl56j7k xvue9z",children:a}),h.jsx("div",{className:c("stylex")(e?k.primary:k.secondary),children:b})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useGroupsCometChatsPreloader",["LSFactory","LSIssueCommunitiesBlendedInboxRangeQuery","MWChatLoadingDelay.react","ReQL","asyncToGeneratorRuntime","react","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useEffect;d("MWChatLoadingDelay.react").interrupt("user_interaction");var i=!1;function a(){var a=c("useReStore")();h(function(){a.runInTransaction(function(){var a=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){if(!i){var b;i=!0;var e="fetch_community_blended_inbox";b=((b=(yield d("ReQL").firstAsync(d("ReQL").fromTableAscending(a.table("pending_tasks").index("queueNameTaskId")).bounds({gte:{hd:e,tl:0}}))))==null?void 0:b.queueName)===e;b||(yield c("LSIssueCommunitiesBlendedInboxRangeQuery")(c("LSFactory")(a)))}});return function(b){return a.apply(this,arguments)}}(),"readwrite")},[a])}g["default"]=a}),98);