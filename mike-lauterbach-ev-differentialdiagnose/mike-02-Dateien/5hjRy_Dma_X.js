;/*FB_PKG_DELIM*/

__d("CometUFIConversationGuideContainerQuery.graphql",["CometUFIConversationGuideContainerQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"feedLocation"},{defaultValue:null,kind:"LocalArgument",name:"feedbackID"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],c=[{kind:"Variable",name:"id",variableName:"feedbackID"}],d={alias:null,args:[{kind:"Variable",name:"feed_location",variableName:"feedLocation"}],concreteType:"ComposerConversationGuideRenderer",kind:"LinkedField",name:"comet_conversation_guide_renderer",plural:!1,selections:[{args:null,documentName:"CometUFIConversationGuideContainerQuery",fragmentName:"CometUFIConversationGuide_conversationGuide",fragmentPropName:"conversationGuide",kind:"ModuleImport"}],storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometUFIConversationGuideContainerQuery",selections:[{alias:null,args:c,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[d],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometUFIConversationGuideContainerQuery",selections:[{alias:null,args:c,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[d,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]},params:{id:b("CometUFIConversationGuideContainerQuery_facebookRelayOperation"),metadata:{},name:"CometUFIConversationGuideContainerQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("CometUFIConversationGuideContainer.react",["CometRelay","CometUFIComposerThreadingContainer.react","CometUFIConversationGuideContainerQuery.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.props;a=a.queries;var f=e.depth,g=e.feedbackID,j=e.hasSubmitComment;e=e.threaded;a=a.queryReference;a=d("CometRelay").usePreloadedQuery(h!==void 0?h:h=b("CometUFIConversationGuideContainerQuery.graphql"),a);a=(a=a.feedback)==null?void 0:a.comet_conversation_guide_renderer;return a==null?null:i.jsx(c("CometUFIComposerThreadingContainer.react"),{depth:f,hasChildren:!1,isLast:!1,threaded:e,type:"composer-addon",children:i.jsx(d("CometRelay").MatchContainer,{match:a,props:{conversationGuideRef:a,feedbackID:g,hasSubmitComment:j}})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometAppSectionFriendsListPrivacyDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5158185470976567"}),null);