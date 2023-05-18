;/*FB_PKG_DELIM*/

__d("MWCommunityMessagingNUXQuickPromotionQuery.graphql",["MWCommunityMessagingNUXQuickPromotionQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"isFolderRoute"}],c={kind:"Literal",name:"surface_nux_id",value:10706},d=[c,{kind:"Literal",name:"trigger",value:"COMMUNITY_MESSAGING_THREAD_OPEN"}],e=[{kind:"Literal",name:"supported",value:["CometQuickPromotionMessengerWebCommunityMessagingNUXRendererStrategy"]}],f={kind:"InlineFragment",selections:[{args:null,documentName:"MWCommunityMessagingNUXQuickPromotionQuery_wellbeing",fragmentName:"CometQuickPromotionMessengerWebCommunityMessagingNUXRendererStrategy_quickPromotionRef",fragmentPropName:"quickPromotionRef",kind:"ModuleImport"}],type:"CometQuickPromotionMessengerWebCommunityMessagingNUXRendererStrategy",abstractKey:null};c=[c,{kind:"Literal",name:"trigger",value:"COMMUNITY_MESSAGING_FOLDER_OPEN"}];var g=[{kind:"Literal",name:"supported",value:["CometQuickPromotionMessengerWebCommunityMessagingOnboardingNUXRendererStrategy"]}],h={kind:"InlineFragment",selections:[{args:null,documentName:"MWCommunityMessagingNUXQuickPromotionQuery_onboarding",fragmentName:"CometQuickPromotionMessengerWebCommunityMessagingOnboardingNUXRendererStrategy_quickPromotionRef",fragmentPropName:"quickPromotionRef",kind:"ModuleImport"}],type:"CometQuickPromotionMessengerWebCommunityMessagingOnboardingNUXRendererStrategy",abstractKey:null},i={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"MWCommunityMessagingNUXQuickPromotionQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{condition:"isFolderRoute",kind:"Condition",passingValue:!1,selections:[{alias:"wellbeing",args:d,concreteType:"ViewerEligibleQuickPromotionsConnection",kind:"LinkedField",name:"eligible_promotions",plural:!1,selections:[{alias:null,args:null,concreteType:"QuickPromotion",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,concreteType:"CometQuickPromotionSections",kind:"LinkedField",name:"comet_qp_sections",plural:!1,selections:[{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"renderer_strategy",plural:!1,selections:[f],storageKey:'renderer_strategy(supported:["CometQuickPromotionMessengerWebCommunityMessagingNUXRendererStrategy"])'}],storageKey:null}],storageKey:null}],storageKey:'eligible_promotions(surface_nux_id:10706,trigger:"COMMUNITY_MESSAGING_THREAD_OPEN")'}]},{alias:"onboarding",args:c,concreteType:"ViewerEligibleQuickPromotionsConnection",kind:"LinkedField",name:"eligible_promotions",plural:!1,selections:[{alias:null,args:null,concreteType:"QuickPromotion",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,concreteType:"CometQuickPromotionSections",kind:"LinkedField",name:"comet_qp_sections",plural:!1,selections:[{alias:null,args:g,concreteType:null,kind:"LinkedField",name:"renderer_strategy",plural:!1,selections:[h],storageKey:'renderer_strategy(supported:["CometQuickPromotionMessengerWebCommunityMessagingOnboardingNUXRendererStrategy"])'}],storageKey:null}],storageKey:null}],storageKey:'eligible_promotions(surface_nux_id:10706,trigger:"COMMUNITY_MESSAGING_FOLDER_OPEN")'}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"MWCommunityMessagingNUXQuickPromotionQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{condition:"isFolderRoute",kind:"Condition",passingValue:!1,selections:[{alias:"wellbeing",args:d,concreteType:"ViewerEligibleQuickPromotionsConnection",kind:"LinkedField",name:"eligible_promotions",plural:!1,selections:[{alias:null,args:null,concreteType:"QuickPromotion",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,concreteType:"CometQuickPromotionSections",kind:"LinkedField",name:"comet_qp_sections",plural:!1,selections:[{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"renderer_strategy",plural:!1,selections:[i,f],storageKey:'renderer_strategy(supported:["CometQuickPromotionMessengerWebCommunityMessagingNUXRendererStrategy"])'}],storageKey:null},j],storageKey:null}],storageKey:'eligible_promotions(surface_nux_id:10706,trigger:"COMMUNITY_MESSAGING_THREAD_OPEN")'}]},{alias:"onboarding",args:c,concreteType:"ViewerEligibleQuickPromotionsConnection",kind:"LinkedField",name:"eligible_promotions",plural:!1,selections:[{alias:null,args:null,concreteType:"QuickPromotion",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,concreteType:"CometQuickPromotionSections",kind:"LinkedField",name:"comet_qp_sections",plural:!1,selections:[{alias:null,args:g,concreteType:null,kind:"LinkedField",name:"renderer_strategy",plural:!1,selections:[i,h],storageKey:'renderer_strategy(supported:["CometQuickPromotionMessengerWebCommunityMessagingOnboardingNUXRendererStrategy"])'}],storageKey:null},j],storageKey:null}],storageKey:'eligible_promotions(surface_nux_id:10706,trigger:"COMMUNITY_MESSAGING_FOLDER_OPEN")'}],storageKey:null}]},params:{id:b("MWCommunityMessagingNUXQuickPromotionQuery_facebookRelayOperation"),metadata:{},name:"MWCommunityMessagingNUXQuickPromotionQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("MWCommunityMessagingNUXQuickPromotion.react",["CometQuickPromotionLoggerContext.react","CometRelay","CurrentEnvironment","MWCommunityMessagingNUXQuickPromotionQuery.graphql","react","useQuickPromotionFalcoEvent"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function j(a){var b=c("useQuickPromotionFalcoEvent")({context_surface_id:10706,context_trigger:"community_messaging_thread_open"});return i.jsx(c("CometQuickPromotionLoggerContext.react").Provider,{value:b,children:i.jsx(d("CometRelay").MatchContainer,{match:a.renderStrategy})})}j.displayName=j.name+" [from "+f.id+"]";function k(a){var b=c("useQuickPromotionFalcoEvent")({context_surface_id:10706,context_trigger:"community_messaging_folder_open"});return i.jsx(c("CometQuickPromotionLoggerContext.react").Provider,{value:b,children:i.jsx(d("CometRelay").MatchContainer,{match:a.renderStrategy,props:{folderId:a.folderId}})})}k.displayName=k.name+" [from "+f.id+"]";function a(a){var c,e=a.extraProps;a=a.queries;a=a.queryRef;a=d("CometRelay").usePreloadedQuery(h!==void 0?h:h=b("MWCommunityMessagingNUXQuickPromotionQuery.graphql"),a);var f=d("CurrentEnvironment").messengerdotcom,g=(e==null?void 0:e.isFolderRoute)||!1;c=a==null?void 0:(c=a.viewer)==null?void 0:(c=c.wellbeing)==null?void 0:(c=c.nodes)==null?void 0:(c=c[0])==null?void 0:(c=c.comet_qp_sections)==null?void 0:c.renderer_strategy;if(c!=null&&!(f&&g))return i.jsx(j,{renderStrategy:c});g=a==null?void 0:(f=a.viewer)==null?void 0:(g=f.onboarding)==null?void 0:(c=g.nodes)==null?void 0:(a=c[0])==null?void 0:(f=a.comet_qp_sections)==null?void 0:f.renderer_strategy;return g!=null&&e!=null?i.jsx(k,{folderId:e.folderId,renderStrategy:g}):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWCMComposerNudgeText.react",["fbt","MWCMThreadTypes.react","MWXText.react","ReQL","ReQLSuspense","react","useReStore"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=h._("__JHASH__Zz8_jw1xmo6__JHASH__",[h._param("megaphoneEmoji",String.fromCodePoint(128227))]);function a(a){var b=a.thread,e=c("useReStore")();a=d("ReQLSuspense").useArray(function(){return d("ReQL").fromTableAscending(e.table("messages")).getKeyRange(b.threadKey).filter(function(a){return!a.isAdminMessage&&!a.isUnsent})},[e,b.threadKey],f.id+":53");var g=d("MWCMThreadTypes.react").isBroadcastThread(b.threadType),h=b.cannotReplyReason==="broadcast_chat_read_only";return a.length>0||h||!g?null:i.jsx("div",{className:"x6s0dn4 xzg4506 x78zum5 xl56j7k xjkvuk6 x1swvt13 x1pi30zi xyamay9",children:i.jsx(c("MWXText.react"),{align:"center",color:"secondary",type:"body4",children:j})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);