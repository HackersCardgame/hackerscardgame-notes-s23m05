;/*FB_PKG_DELIM*/

__d("CometNotificationsReceiveLiveQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6117346301633926"}),null);
__d("CometNotificationsReceiveLiveQuery.graphql",["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql","CometNotificationsReceiveLiveQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"count"},c={defaultValue:null,kind:"LocalArgument",name:"environment"},d={defaultValue:null,kind:"LocalArgument",name:"filter_tokens"},e={defaultValue:null,kind:"LocalArgument",name:"notif_cache_ids"},f={defaultValue:null,kind:"LocalArgument",name:"refresh_num"},g={defaultValue:null,kind:"LocalArgument",name:"scale"},h={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},j=[i],k=[{kind:"Variable",name:"environment_alias_override",variableName:"environment"},{kind:"Variable",name:"filter_tokens",variableName:"filter_tokens"},{kind:"Variable",name:"first",variableName:"count"},{kind:"Variable",name:"notif_cache_ids",variableName:"notif_cache_ids"},{kind:"Literal",name:"notif_query_flags",value:["IS_COMET","INCLUDE_WA_P2B_NOTIFS"]},{kind:"Literal",name:"source",value:"unknown"}],l={alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},m=[l],n={alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:m,storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"prefetch_score",storageKey:null},q={alias:null,args:null,kind:"ScalarField",name:"notif_id",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"notif_cache_id",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"seen_state",storageKey:null},t={alias:"creation_time",args:null,concreteType:"CreationTimeWithRelativeText",kind:"LinkedField",name:"creation_time_with_relative_text",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"timestamp",storageKey:null}],storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"notif_type",storageKey:null};return{fragment:{argumentDefinitions:[a,c,d,e,f,g],kind:"Fragment",metadata:null,name:"CometNotificationsReceiveLiveQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometNotificationsReceiveLiveQuery_notificationsListViewer"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,d,g,e,a,f],kind:"Operation",name:"CometNotificationsReceiveLiveQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[h,{kind:"TypeDiscriminator",abstractKey:"__isActor"},i],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"right_side_widget_container_placement",storageKey:null},{alias:null,args:[{kind:"Literal",name:"environment",value:"COMET"},{kind:"Literal",name:"query_ego_units",value:!1},{kind:"Variable",name:"refresh_num",variableName:"refresh_num"}],concreteType:"SideFeedConnection",kind:"LinkedField",name:"side_feed",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[h,{kind:"InlineFragment",selections:[{args:null,documentName:"CometRightSideHeaderCards_viewerSideFeed",fragmentName:"PagesCometHomeAdminContainer_pagesPanel",fragmentPropName:"pagesPanel",kind:"ModuleImport"}],type:"PagesSideFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometRightSideHeaderCards_viewerSideFeed",fragmentName:"FriendingCometHomeInlineRHCContainer_friendsPanel",fragmentPropName:"friendsPanel",kind:"ModuleImport"}],type:"FriendingRequestsSideFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometRightSideHeaderCards_viewerSideFeed",fragmentName:"CometHomeRemindersContainer_reminderPanel",fragmentPropName:"reminderPanel",kind:"ModuleImport"}],type:"RemindersSideFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometRightSideHeaderCards_viewerSideFeed",fragmentName:"CometHomeRightSideWidgetContainer_widgetContainer",fragmentPropName:"widgetContainer",kind:"ModuleImport"}],type:"CometHomeSideFeedWidgetContainer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometRightSideHeaderCards_viewerSideFeed",fragmentName:"CometHomeRightSideWidgetContainerWithSeeMore_widgetContainer",fragmentPropName:"widgetContainer",kind:"ModuleImport"}],type:"CometHomeSideFeedWidgetContainerWithSeeMore",abstractKey:null},{kind:"InlineFragment",selections:j,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:j,type:"AdsSideFeedUnitItem",abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Variable",name:"environment",variableName:"environment"}],kind:"ScalarField",name:"notifications_unseen_count",storageKey:null},{alias:null,args:k,concreteType:"ViewerNotificationsPageConnection",kind:"LinkedField",name:"notifications_page",plural:!1,selections:[{alias:null,args:null,concreteType:"NotifPageFilterConfig",kind:"LinkedField",name:"filter_config",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"selected_filter_tokens",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"filters",plural:!0,selections:[h,{kind:"InlineFragment",selections:[n,{alias:null,args:null,kind:"ScalarField",name:"notif_filter_token",storageKey:null}],type:"NotifPageSingleFilter",abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"query_id",storageKey:null},{alias:null,args:null,concreteType:"ViewerNotificationsPageEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[h,{alias:null,args:null,kind:"ScalarField",name:"row_type",storageKey:null},o,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"bucket_type",storageKey:null},{alias:null,args:null,concreteType:"NotifPageBucketHeaderLink",kind:"LinkedField",name:"header_link",plural:!1,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null},n],type:"NotifPageBucketHeaderRow",abstractKey:null},{kind:"InlineFragment",selections:[p,{alias:null,args:null,concreteType:"Notification",kind:"LinkedField",name:"notif",plural:!1,selections:[q,i,r,s,t,o],storageKey:null}],type:"NotifPageCachedNotificationRow",abstractKey:null},{kind:"InlineFragment",selections:[p,{alias:null,args:null,concreteType:"Notification",kind:"LinkedField",name:"notif",plural:!1,selections:[q,s,i,r,{alias:null,args:null,kind:"ScalarField",name:"notif_tags",storageKey:null},o,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"notif_attachments",plural:!0,selections:[h,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"sound_urls",storageKey:null}],type:"NotifSoundAttachment",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemFriendRequestAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"FriendRequestNotifAttachment",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemInlineCTAAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"InlineCTACometNotifAttachment",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemPageInviteAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"PageInviteNotifAttachment",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemQuickPromotionAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"QuickPromotionNotifAttachment",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemInlineSurveyAttachment_attachment",fragmentPropName:"attachment",kind:"ModuleImport"},{alias:null,args:null,concreteType:"StructuredSurveySession",kind:"LinkedField",name:"inline_survey",plural:!1,selections:[h],storageKey:null}],type:"InlineSurveyNotifAttachment",abstractKey:null}],storageKey:null},t,u,{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"body",plural:!1,selections:[{args:null,fragment:b("CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"),kind:"FragmentSpread"},l],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:56},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:56}],concreteType:"Image",kind:"LinkedField",name:"notif_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},{alias:null,args:null,concreteType:"GlyphIconData",kind:"LinkedField",name:"icon_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"reaction_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"glyph_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"glyph_icon_url",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"NotificationContextInfo",kind:"LinkedField",name:"context_info",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"short_text",plural:!1,selections:m,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"NotifNavigationEndpoint",kind:"LinkedField",name:"navigation_endpoint",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["TopFansFanNotificationRenderer","CrossProfileNotificationInfo","BusinessMessageNotificationRenderer","GroupsNotificationRenderer"]}],concreteType:null,kind:"LinkedField",name:"comet_custom_renderer",plural:!1,selections:[h,{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsList_viewerConnection",fragmentName:"CometTopFansFanNotificationListItem_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"TopFansFanNotificationRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsList_viewerConnection",fragmentName:"CometCrossProfileNotificationsListItem_cpnInfo",fragmentPropName:"cpnInfo",kind:"ModuleImport"}],type:"CrossProfileNotificationInfo",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsList_viewerConnection",fragmentName:"CometBusinessMessageNotificationListItem_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"BusinessMessageNotificationRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsList_viewerConnection",fragmentName:"CometGroupsNotificationsListItem_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"GroupsNotificationRenderer",abstractKey:null}],storageKey:'comet_custom_renderer(supported:["TopFansFanNotificationRenderer","CrossProfileNotificationInfo","BusinessMessageNotificationRenderer","GroupsNotificationRenderer"])'}],storageKey:null},{kind:"ClientExtension",selections:[{alias:"id_for_entrypoint",args:null,kind:"ScalarField",name:"__id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_hidden",storageKey:null}]}],storageKey:null}],type:"NotifPageNotificationRow",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"invalidation_reason",storageKey:null},{alias:null,args:null,concreteType:"Notification",kind:"LinkedField",name:"notif",plural:!1,selections:[q,u,i],storageKey:null}],type:"NotifPageDebugInvalidationRow",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:k,filters:["environment_alias_override"],handle:"comet_notifications_thin_client",key:"CometNotificationsList_notifications_page",kind:"LinkedHandle",name:"notifications_page"},{alias:null,args:null,kind:"ScalarField",name:"last_update_timestamp",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"notifications_sound_path",storageKey:null}],storageKey:null}]},params:{id:b("CometNotificationsReceiveLiveQuery_facebookRelayOperation"),metadata:{live:{config_id:"comet_notifications_live_query_experimental"}},name:"CometNotificationsReceiveLiveQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometNotificationsReceiveLiveQuery_notificationsListViewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"count"},{kind:"RootArgument",name:"environment"},{kind:"RootArgument",name:"filter_tokens"},{kind:"RootArgument",name:"notif_cache_ids"}],kind:"Fragment",metadata:null,name:"CometNotificationsReceiveLiveQuery_notificationsListViewer",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometToastNotification_actor"}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometRightSideHeaderCards_viewerSideFeed"},{alias:null,args:[{kind:"Variable",name:"environment",variableName:"environment"}],kind:"ScalarField",name:"notifications_unseen_count",storageKey:null},{args:[{kind:"Variable",name:"count",variableName:"count"},{kind:"Variable",name:"filter_tokens",variableName:"filter_tokens"},{kind:"Variable",name:"notif_cache_ids",variableName:"notif_cache_ids"}],kind:"FragmentSpread",name:"CometNotificationsList_viewerConnection"},{args:null,kind:"FragmentSpread",name:"CometNotificationsList_viewerData"},{alias:null,args:null,kind:"ScalarField",name:"last_update_timestamp",storageKey:null}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("CometNotificationsActionsMenu.react",["fbt","ix","CometMenu.react","CometMenuItem.react","XCometNotificationsControllerRouteBuilder","XCometSettingsControllerRouteBuilder","fbicon","gkx","react","requireDeferred","useCometRouterState"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=c("requireDeferred")("NotifSeeAllFalcoEvent").__setRef("CometNotificationsActionsMenu.react");function a(a){var b,e,f=a.actorId,g=a.notificationsListRef,l=a.onSeeAllClick;a=c("useCometRouterState")();a=(a==null?void 0:a.main.route.tabKey)==="notifications";var m=function(){g.current!=null&&g.current.markAllNotificationsAsRead!=null&&g.current.markAllNotificationsAsRead()},n=function(){g.current!=null&&g.current.handleDebugModeClick!=null&&g.current.handleDebugModeClick()};b=g==null?void 0:(b=g.current)==null?void 0:(b=b.debugModeEnabled)==null?void 0:b.current;e=(e=c("gkx")("1491"))!=null?e:!1;return j.jsxs(c("CometMenu.react"),{withArrow:!0,children:[j.jsx(c("CometMenuItem.react"),{icon:d("fbicon")._(i("477820"),20),onClick:m,primaryText:h._("__JHASH___1FiPZgbMIy__JHASH__"),testid:void 0}),j.jsx(c("CometMenuItem.react"),{href:c("XCometSettingsControllerRouteBuilder").buildURL({tab:"notifications"}),icon:d("fbicon")._(i("497570"),20),primaryText:h._("__JHASH__8KYKyWZOZ5Q__JHASH__")}),e?j.jsx(c("CometMenuItem.react"),{icon:d("fbicon")._(i("874274"),20),onClick:n,primaryText:"[FB Only] "+(b===!0?"Disable":"Enable")+" Debug Mode"}):null,!a&&c("gkx")("2886")?j.jsx(c("CometMenuItem.react"),{href:c("XCometNotificationsControllerRouteBuilder").buildURL({}),icon:d("fbicon")._(i("1529371"),20),onClick:function(){l&&l(),k.onReady(function(a){a=a.log;return a(function(){return{notification_data:{user_id:f},ref:"www_tab"}})})},primaryText:h._("__JHASH__Rrr2mk0tIbW__JHASH__")}):null]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("requestLiveQueryExperimental",["invariant","LiveQueryEventsLoggingResolver","ODS","RelayAPIConfig","RelayGraphQLRequestUtils","makeGraphQLLiveQueryRequest","nullthrows","promiseDone","relay-runtime","uuidv4"],(function(a,b,c,d,e,f,g,h){"use strict";function i(a,b){var e=c("uuidv4")(),f={access_token:c("RelayAPIConfig").accessToken,actor_id:c("RelayAPIConfig").actorID,config_id:c("nullthrows")(a.params.metadata.live.config_id,"config_id should not be null")};a={doc_id:c("nullthrows")(a.params.id,"id in request params should not be null"),config_id:f.config_id,actor_id:f.actor_id,variables:b,live_query_request_id:e};f.access_token!==""&&(a=babelHelpers["extends"]({},a,{access_token:f.access_token}));b=d("LiveQueryEventsLoggingResolver").tempResolveLoggingContext();b!=null&&(a=babelHelpers["extends"]({},a,{logging_context:b}));return a}function a(a,b){var e=b.query;b=b.variables;e=d("relay-runtime").getRequest(e);var f=i(e,b),g,j=b;e=d("relay-runtime").createOperationDescriptor(e,b);b=d("relay-runtime").Observable.create(function(a){g=c("makeGraphQLLiveQueryRequest")(f).onResponse(function(b){var e;try{e=c("RelayGraphQLRequestUtils").parsePayload(b),typeof e==="object"||h(0,12937)}catch(b){d("ODS").bumpEntityKey(97,"comet_notifications.new_notification","lq.receive_invalid_payload");return a.error(b)}if(!("errors"in e)&&!("data"in e)){d("ODS").bumpEntityKey(97,"comet_notifications.new_notification","lq.receive_empty_response");return a.error(d("relay-runtime").RelayError.createWarning("EmptyResponseError","Parsed network response is empty"))}if(e.errors)for(var b=e.errors,f=Array.isArray(b),g=0,b=f?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var i;if(f){if(g>=b.length)break;i=b[g++]}else{g=b.next();if(g.done)break;i=g.value}i=i;if(i.severity==="CRITICAL"){i=c("RelayGraphQLRequestUtils").createErrorFromPayload(i);d("ODS").bumpEntityKey(97,"comet_notifications.new_notification","lq.receive_critical_error");return a.error(i)}}a.closed||(d("ODS").bumpEntityKey(97,"comet_notifications.new_notification","lq.receive_notification"),a.next(e))}).onRetryUpdateRequestBody(function(){return JSON.stringify({variables:j})}).send();return function(){c("promiseDone")(g,function(a){a.cancel()})}});a.executeWithSource({operation:e,source:b}).subscribe({});var k=!1,l;return{dispose:function(){!k&&g!=null&&(c("promiseDone")(g,function(a){a.cancel()}),k=!0)},updateVariables:function(a){if(!k&&g!=null){l=a;c("promiseDone")(g,function(a){l!=null&&!k&&(a.amendExperimental({new_variables:l}),j=l,l=null)});return!0}return!1}}}g["default"]=a}),98);
__d("CometNotificationsReceiveLiveQuery",["CometNotificationsReceiveLiveQuery.graphql","CometNotificationsReceiveLiveQuery_notificationsListViewer.graphql","requestLiveQueryExperimental"],(function(a,b,c,d,e,f,g){"use strict";var h,i;h!==void 0?h:h=b("CometNotificationsReceiveLiveQuery_notificationsListViewer.graphql");var j=i!==void 0?i:i=b("CometNotificationsReceiveLiveQuery.graphql");function a(a,b){return c("requestLiveQueryExperimental")(a,{query:j,variables:b})}g.subscribeToNotificationUpdates=a}),98);
__d("CometNotificationsRankingErrorFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1743388");b=d("FalcoLoggerInternal").create("comet_notifications_ranking_error",a);e=b;g["default"]=e}),98);
__d("GriffinTabOpenFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1743657");b=d("FalcoLoggerInternal").create("griffin_tab_open",a);e=b;g["default"]=e}),98);
__d("NoNotificationsFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1894842");b=d("FalcoLoggerInternal").create("no_notifications",a);e=b;g["default"]=e}),98);
__d("NotifBeeperDropFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1835862");b=d("FalcoLoggerInternal").create("notif_beeper_drop",a);e=b;g["default"]=e}),98);
__d("NotifDebugModeFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1836246");b=d("FalcoLoggerInternal").create("notif_debug_mode",a);e=b;g["default"]=e}),98);
__d("NotifFilterClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1836768");b=d("FalcoLoggerInternal").create("notif_filter_click",a);e=b;g["default"]=e}),98);
__d("NotifFilterImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1871");b=d("FalcoLoggerInternal").create("notif_filter_impression",a);e=b;g["default"]=e}),98);
__d("NotifListBottomCollisionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744067");b=d("FalcoLoggerInternal").create("notif_list_bottom_collision",a);e=b;g["default"]=e}),98);
__d("NotifSeeAllFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1836151");b=d("FalcoLoggerInternal").create("notif_see_all",a);e=b;g["default"]=e}),98);
__d("OpenJewelOptionsMenuFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1836319");b=d("FalcoLoggerInternal").create("open_jewel_options_menu",a);e=b;g["default"]=e}),98);