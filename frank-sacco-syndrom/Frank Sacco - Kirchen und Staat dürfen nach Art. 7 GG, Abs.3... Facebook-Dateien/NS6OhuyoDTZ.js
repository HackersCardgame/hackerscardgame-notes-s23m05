;/*FB_PKG_DELIM*/

__d("CometComposerSendUpdatesAttachmentPreview.react",["ix","TetraButton.react","TetraTextPairing.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.topicAttachmentCTA,e=a.topicAttachmentMetaText;a=a.topicTitle;return i.jsxs("div",{className:"x47corl x6s0dn4 xmjcpbm xwmqs3e xxxdfa6 x78zum5 x1q0g3np x1qughib xyamay9 x1pi30zi x1l90r2v x1swvt13 x1n2onr6",children:[i.jsx("div",{className:"x1iyjqo2 xeuugli",children:i.jsx(c("TetraTextPairing.react"),{headline:a,headlineLineLimit:2,level:4,meta:e,metaLineLimit:1,metaLocation:"above"})}),i.jsx("div",{className:"x78zum5 xdt5ytf xl56j7k x1egjynq x1vjfegm",children:i.jsx(c("TetraButton.react"),{icon:d("fbicon")._(h("505616"),16),label:b,onPress:function(){},size:"medium",testid:void 0,type:"secondary"},"cta_icon_button")})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometComposerSendUpdatesAttachmentArea.react",["CometComposerGenericAttachmentPendingPreview.react","CometComposerSendUpdatesAttachmentPreview.react","CometPlaceholder.react","ComposerMediaAttachmentUploadFileButton.react","composerAttachmentAreaChecker","composerAttachmentAreaReducer","composerGetMessagesChecker","composerGetMessagesReducer","react","useComposerViewStateReducer","withComposerViewStatePart"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.marketingMessagesTopic;a=a.mediaAttachments;c("useComposerViewStateReducer")(d("composerAttachmentAreaReducer").composerAttachmentAreaReducer,c("composerAttachmentAreaChecker"));c("useComposerViewStateReducer")(c("composerGetMessagesReducer"),c("composerGetMessagesChecker"));return b!=null?a!=null&&a.length>0?h.jsx(c("CometComposerSendUpdatesAttachmentPreview.react"),{topicAttachmentCTA:b.topicAttachmentCTA,topicAttachmentMetaText:b.topicAttachmentMetaText,topicTitle:b.topicTitle}):h.jsx("div",{className:"xt7dq6l xh8yej3",children:h.jsxs(c("CometPlaceholder.react"),{fallback:h.jsx(c("CometComposerGenericAttachmentPendingPreview.react"),{}),children:[h.jsx(c("ComposerMediaAttachmentUploadFileButton.react"),{activateMediaAttachment:!0,disableVideo:!0}),h.jsx(c("CometComposerSendUpdatesAttachmentPreview.react"),{topicAttachmentCTA:b.topicAttachmentCTA,topicAttachmentMetaText:b.topicAttachmentMetaText,topicTitle:b.topicTitle})]})}):null}a.displayName=a.name+" [from "+f.id+"]";b=c("withComposerViewStatePart")(a,function(a){return{marketingMessagesTopic:a.marketingMessagesTopic,mediaAttachments:a.mediaAttachments}});g["default"]=b}),98);
__d("CometVideoLinkingReelsComposerStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("__JHASH__ept3KImtFuv__JHASH__");b=h._("__JHASH__EuYoAyBcsxi__JHASH__");c=h._("__JHASH__EshZdMyaDBX__JHASH__");d=h._("__JHASH__zkLKAAdSLMw__JHASH__");e=h._("__JHASH__qzK8wt17lJp__JHASH__");f=h._("__JHASH__kP_xy6VOf9C__JHASH__");var i=h._("__JHASH__QycJTCwFFC___JHASH__"),j=h._("__JHASH__JyU8cE93cZa__JHASH__"),k=h._("__JHASH__sNl7dobIvqg__JHASH__"),l=h._("__JHASH__0r_NFQ_iQv8__JHASH__"),m=h._("__JHASH___be4cAmoIgq__JHASH__");h=h._("__JHASH__sc2JlISC2fp__JHASH__");g.RWC_VIDEO_LINKING_TOOL_INTRO_HEADER=a;g.RWC_VIDEO_LINKING_TOOL_INTRO_DESCRIPTION=b;g.RWC_VIDEO_LINKING_TOGGLE_LABEL=c;g.COMPOSER_VIDEO_LINKING_TOAST_MESSAGE=d;g.COMPOSER_VIDEO_LINKING_TOAST_LINK_CTA=e;g.COMPOSER_VIDEO_LINKING_MODAL_PRIMARY_BUTTON=f;g.COMPOSER_VIDEO_LINKING_MODAL_SECONDARY_BUTTON=i;g.COMPOSER_VIDEO_LINKING_MODAL_HEADER=j;g.COMPOSER_VIDEO_LINKING_MODAL_VALUE_PROP_1_TITLE=k;g.COMPOSER_VIDEO_LINKING_MODAL_VALUE_PROP_1_BODY=l;g.COMPOSER_VIDEO_LINKING_MODAL_VALUE_PROP_2_TITLE=m;g.COMPOSER_VIDEO_LINKING_MODAL_VALUE_PROP_2_BODY=h}),98);