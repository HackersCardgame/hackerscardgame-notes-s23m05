;/*FB_PKG_DELIM*/

__d("useCometGlobalPanelGroupSnippet_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometGlobalPanelGroupSnippet_group",selections:[{alias:null,args:[{kind:"Literal",name:"badging_query_method",value:"RECENT_UNSEEN"},{kind:"Literal",name:"badging_style",value:"HIGHLIGHT_WITH_METADATA"},{kind:"Literal",name:"location",value:"COMMUNITY_PANEL"}],concreteType:"GroupSnippetsConnection",kind:"LinkedField",name:"group_snippets",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupSnippet",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"snippet_type_name",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:'group_snippets(badging_query_method:"RECENT_UNSEEN",badging_style:"HIGHLIGHT_WITH_METADATA",location:"COMMUNITY_PANEL")'}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("useGroupsCometChatsGetCMFolderForLightspeed_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGroupsCometChatsGetCMFolderForLightspeed_group",selections:[{alias:null,args:null,concreteType:"MessengerCommunity",kind:"LinkedField",name:"community",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("CometGlobalPanelGroupBadgingUtils",[],(function(a,b,c,d,e,f){"use strict";var g="community_panel_summary_snippet",h={badging_query_method:"RECENT_UNSEEN",badging_style:"HIGHLIGHT_WITH_METADATA",location:"COMMUNITY_PANEL"};a=function(a){a=a.getLinkedRecord("group_snippets",h);if(a!=null){var b=a.getLinkedRecords("nodes");b=((b=b)!=null?b:[]).filter(function(a){return(a==null?void 0:a.getValue("snippet_type_name"))!==g});a.setLinkedRecords(b,"nodes")}};f.COMMUNITY_PANEL_SNIPPET_TYPE=g;f.removeCommunityPanelSnippets=a}),66);
__d("useCometGlobalPanelGroupSnippet",["CometGlobalPanelGroupBadgingUtils","CometRelay","useCometGlobalPanelGroupSnippet_group.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){a=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometGlobalPanelGroupSnippet_group.graphql"),a);a=(a=(a=a.group_snippets)==null?void 0:a.nodes)!=null?a:[];return{hasUnreadPosts:a.filter(function(a){a=a.snippet_type_name;return a===d("CometGlobalPanelGroupBadgingUtils").COMMUNITY_PANEL_SNIPPET_TYPE}).length>0,snippet:(a=a[0])==null?void 0:(a=a.title)==null?void 0:a.text}}g["default"]=a}),98);
__d("useGroupsCometChatsGetCMFolderForLightspeed",["CometRelay","I64","useGroupsCometChatsGetCMFolderForLightspeed_group.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){a=d("CometRelay").useFragment(h!==void 0?h:h=b("useGroupsCometChatsGetCMFolderForLightspeed_group.graphql"),a);return d("I64").of_string_opt((a=a==null?void 0:(a=a.community)==null?void 0:a.id)!=null?a:"")}g["default"]=a}),98);
__d("GroupsCometEntityMenuUtil",["fbt","GroupsCometEntityMenuIsChatCentric.relayprovider","gkx"],(function(a,b,c,d,e,f,g,h){"use strict";b=c("GroupsCometEntityMenuIsChatCentric.relayprovider").get()?["CHATS"]:["MENTORSHIP_APPLICATION","EVENTS","JOINABLE_VIDEO_CHATS","CHATS","CLIMATE_PLEDGES"].filter(Boolean);d=h._("__JHASH__lOh4YCnHb-u__JHASH__");function a(){return c("gkx")("749")}g.EM_PLINKS_FILTER=b;g.HOME_NAV_TITLE=d;g.isUpdatedPublicChannelIconEnabled=a}),98);
__d("isGroupNameMatchingKeywords",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){if(b==="")return!0;b=g(b).split(" ").reduce(function(a,b){return a+"(?=.*"+b+")"},"");return RegExp(b,"gi").test(a)}function g(a){return a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}f["default"]=a}),66);
__d("AppRoomsFilled20.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsxs("svg",babelHelpers["extends"]({fill:"currentColor",viewBox:"0 0 20 20",width:"1em",height:"1em"},a,{children:[a.title!=null&&h.jsx("title",{children:a.title}),a.children!=null&&h.jsx("defs",{children:a.children}),h.jsx("g",{fillRule:"evenodd",transform:"translate(-446 -350)",children:h.jsx("path",{d:"M457.25 361H455v2.25a1 1 0 0 1-2 0V361h-2.25a1 1 0 0 1 0-2H453v-2.25a1 1 0 0 1 2 0V359h2.25a1 1 0 0 1 0 2m8.241-5.889a.962.962 0 0 0-.998.063L462 356.938v-1.188a2.754 2.754 0 0 0-2.75-2.75h-10.5a2.754 2.754 0 0 0-2.75 2.75v8.5a2.754 2.754 0 0 0 2.75 2.75h10.5a2.754 2.754 0 0 0 2.75-2.75v-1.188l2.503 1.77a.953.953 0 0 0 .988.057.95.95 0 0 0 .509-.841v-8.096a.95.95 0 0 0-.509-.841"})})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);