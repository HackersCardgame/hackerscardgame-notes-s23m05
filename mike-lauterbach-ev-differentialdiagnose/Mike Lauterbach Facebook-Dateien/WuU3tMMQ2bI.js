;/*FB_PKG_DELIM*/

__d("CometFormInputPasswordStateIcon.react",["ix","CometIcon.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){a=a.isVisible;return a?i.jsx(c("CometIcon.react"),{color:"primary",icon:d("fbicon")._(h("491228"),20),testid:void 0}):i.jsx(c("CometIcon.react"),{color:"primary",icon:d("fbicon")._(h("491223"),20),testid:void 0})}g["default"]=a}),98);
__d("CometFormInputValidationStateIcon",["ix","CometIcon.react","CometProgressRingIndeterminate.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("react");b={CORRECT:a.jsx(c("CometIcon.react"),{color:"positive",icon:d("fbicon")._(h("498146"),20),testid:void 0}),ERROR:a.jsx(c("CometIcon.react"),{color:"negative",icon:d("fbicon")._(h("502062"),20),testid:void 0}),LOADING:a.jsx(c("CometProgressRingIndeterminate.react"),{color:"disabled",size:20}),WARN:a.jsx(c("CometIcon.react"),{color:"warning",icon:d("fbicon")._(h("502062"),20),testid:void 0})};g["default"]=b}),98);
__d("CometFormInputWrapperHelperText.react",["TetraTextPairing.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.validationState;a=a.value;return h.jsx(c("TetraTextPairing.react"),{level:4,meta:a,metaColor:b==="ERROR"?"negative":"secondary"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFormInputWrapper.react",["BaseFocusRing.react","CometFormInputValidationStateIcon","CometFormInputWrapperHelperText.react","FocusWithinHandler.react","isBlueprintStylesEnabled","react","stylex","useCometUniqueID","useMergeRefs"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useEffect,k=b.useRef,l=b.useState,m={container:{display:"x78zum5",flexDirection:"xdt5ytf",width:"xh8yej3",$$css:!0},disabled:{backgroundColor:"x1npjb2n",borderTopColor:"x1epquy7",borderEndColor:"xsnmfus",borderBottomColor:"x1562eck",borderStartColor:"xcymrrh",boxShadow:"x1gnnqk1",cursor:"x1h6gzvc",":active_backgroundColor":"x1cn5h38",$$css:!0},error:{borderTopColor:"xmrkho8",borderEndColor:"xa6p843",borderBottomColor:"xfz9iyh",borderStartColor:"xy4nld6",":active_backgroundColor":"x1kxczlb",$$css:!0},errorFocused:{boxShadow:"xrq537t",$$css:!0},errorHovered:{backgroundColor:"xpc7vr0",$$css:!0},headerMask:{backgroundColor:"xjhjgkd",end:"x92rtbv",height:"xlup9mm",position:"x10l6tqk",start:"x16q8cke",top:"xfr5jun",$$css:!0},helperText:{marginTop:"x1xmf6yo",$$css:!0},hiddenHelperText:{clip:"xzpqnlu",clipPath:"x1hyvwdk",height:"xjm9jq1",overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x10l6tqk",width:"x1i1rx1s",$$css:!0},hovered:{borderTopColor:"x4dwnd4",borderEndColor:"xp58pn9",borderBottomColor:"x1hsu73c",borderStartColor:"xvnt4d0",$$css:!0},input:{backgroundColor:"xjbqb8w",flexGrow:"x1iyjqo2",maxWidth:"x193iq5w",minWidth:"xeuugli",position:"x1n2onr6",$$css:!0},inputRow:{display:"x78zum5",width:"xh8yej3",$$css:!0},label:{fontSize:"x1jchvi3",fontWeight:"x1fcty0u",lineHeight:"x132q4wb",maxWidth:"x193iq5w",transformOrigin:"x1al4vs7",$$css:!0},labelDisabled:{color:"x1dntmbh",$$css:!0},labelError:{color:"x1a1m0xk",$$css:!0},labelHighlighted:{color:"xlsksjw",$$css:!0},labelInside:{color:"xi81zsa",cursor:"xmper1u",display:"x1lliihq",end:"x1923su1",overflowX:"x6ikm8r",overflowY:"x10wlt62",pointerEvents:"x47corl",position:"x10l6tqk",start:"x16q8cke",textOverflow:"xlyipyv",top:"xoyzfg9",transitionDuration:"x1k90msu",transitionProperty:"x11xpdln",transitionTimingFunction:"x1qfuztq",whiteSpace:"xuxw1ft",$$css:!0},labelOutside:{color:"xgqhv05",marginBottom:"x1e56ztr",position:"x1n2onr6",$$css:!0},labelShrunk:{end:"x19c1rep",transform:"x1cab348",$$css:!0},root:{backgroundColor:"xjhjgkd",borderTopColor:"x1epquy7",borderEndColor:"xsnmfus",borderBottomColor:"x1562eck",borderStartColor:"xcymrrh",borderTopStartRadius:"x1268tai",borderTopEndRadius:"x1mxuytg",borderBottomEndRadius:"x14hpm34",borderBottomStartRadius:"xqvykr2",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"xq2ru2l",borderEndWidth:"x17qb25w",borderBottomWidth:"xjmv2fv",borderStartWidth:"x1b4qsv2",display:"x78zum5",flexDirection:"xdt5ytf",overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x1n2onr6",zIndex:"x1ja2u2z",":active_backgroundColor":"x1egnk41",$$css:!0},secondary:{display:"x78zum5",$$css:!0},shake:{animationDuration:"x1f7sx64",animationFillMode:"x1u6ievf",animationName:"xcqsoj",animationTimingFunction:"x1ojsi0c",$$css:!0},validationIcon:{paddingEnd:"x1pi30zi",paddingTop:"x109j2v6",$$css:!0},validationIconHideLabel:{paddingTop:"xz9dl7a",$$css:!0},warn:{borderTopColor:"x1xqsql5",borderEndColor:"x1sn40xs",borderBottomColor:"x1gkuw16",borderStartColor:"xg1yei2",":active_backgroundColor":"xhexg4x",$$css:!0},warnFocused:{boxShadow:"x1hliol7",$$css:!0},warnHovered:{backgroundColor:"x12tslg2",$$css:!0}},n={pointer:{cursor:"x1ypdohk",$$css:!0},text:{cursor:"x1ed109x",$$css:!0}},o={root:{borderTopStartRadius:"xyi19xy",borderTopEndRadius:"x1ccrb07",borderBottomEndRadius:"xtf3nb5",borderBottomStartRadius:"x1pc53ja",$$css:!0}};function p(a){if(Array.isArray(a))return a.length===0;else if(typeof a==="object"){if(a)for(var b in a)return!1;return!0}else return a==null||a===""}function a(a){var b=a.addOnBottom,d=a.addOnStart,e=a.alwaysShrinkLabel,f=e===void 0?!1:e,g=a["aria-activedescendant"],q=a["aria-controls"],r=a["aria-expanded"],s=a["aria-haspopup"],t=a.ariaLabel,u=a.auxContent,v=a.children,w=a.comboboxKeyDown;e=a.containerRef;var x=a.cursor,y=a.disabled,z=y===void 0?!1:y,A=a.helperText;y=a.helperTextIsHidden;y=y===void 0?!1:y;var B=a.hideLabel,C=B===void 0?!1:B,D=a.label;B=a.labelLocation_INTERNAL;B=B===void 0?"inside":B;var E=a.labelRef,F=a.onFocusChange,G=a.onPress,H=a.role,I=a.shrinkLabelOnFocus,J=I===void 0?!0:I,K=a.suppressFocusRing,L=a.validationState;I=a.value;a=a.withHeaderMask;var M=a===void 0?!1:a,N=c("useCometUniqueID")(),O=c("useCometUniqueID")();a=l(!1);var P=a[0],Q=a[1];a=l(!1);var R=a[0],S=a[1],T=!p(I),U=B==="outside",V=function(a){return U?h.jsx("label",{className:"x1jchvi3 x1fcty0u x132q4wb x193iq5w x1al4vs7 xgqhv05 x1e56ztr x1n2onr6",suppressHydrationWarning:!0,children:D}):h.jsx("span",{className:c("stylex")(m.label,m.labelInside,L==="ERROR"&&m.labelError,L==null&&a&&m.labelHighlighted,(T||f||a&&J)&&m.labelShrunk,z&&m.labelDisabled),ref:E,children:D})},W=i(function(){R||S(!0)},[R]),X=i(function(){R&&S(!1)},[R]),Y=k(null),Z=k(null),$=c("useMergeRefs")(Y,e);a=l(!1);var aa=a[0],ba=a[1];j(function(){if(w==null)return;var a=Z&&Z.current;if(a!=null){a.addEventListener("keydown",w);return function(){a.removeEventListener("keydown",w)}}},[w]);return h.jsxs("div",{className:"x78zum5 xdt5ytf xh8yej3",ref:Z,children:[U&&V(!1),h.jsx(c("FocusWithinHandler.react"),{onFocusChange:F,children:function(a){return h.jsx(c("BaseFocusRing.react"),{suppressFocusRing:!aa||K,children:function(e){var f;return h.jsxs("label",{"aria-activedescendant":g,"aria-controls":q,"aria-expanded":r,"aria-haspopup":s,"aria-label":(f=t)!=null?f:D,className:c("stylex")(m.root,c("isBlueprintStylesEnabled")()&&o.root,n[x],R&&m.hovered,a&&c("BaseFocusRing.react").focusRingXStyle,L==="WARN"&&[m.warn,R&&m.warnHovered,a&&m.warnFocused],L==="ERROR"&&[m.error,R&&m.errorHovered,a&&m.errorFocused],z&&m.disabled,P&&m.shake,e),htmlFor:N,onAnimationEnd:function(){Q(!1)},onClick:function(a){z?Q(!0):G&&G(a)},onMouseEnter:W,onMouseLeave:X,ref:$,role:G!=null?H!=null?H:"button":void 0,suppressHydrationWarning:!0,tabIndex:G!=null?0:void 0,children:[h.jsxs("div",{className:"x78zum5 xh8yej3",children:[d,h.jsxs("div",{className:"xjbqb8w x1iyjqo2 x193iq5w xeuugli x1n2onr6",children:[M&&!z&&(T||a)&&h.jsx("span",{className:c("stylex")(m.headerMask,L==="WARN"&&R&&m.warnHovered,L==="ERROR"&&R&&m.errorHovered)}),!C&&!U&&V(a),h.jsx(c("FocusWithinHandler.react"),{onFocusChange:ba,children:v({filled:T,focused:a,helperTextID:A!=null&&L!=null?O:void 0,id:N,rootRef:Y})})]}),(u!=null||L!=null)&&h.jsxs("div",{className:"x78zum5",children:[L!=null&&h.jsx("div",{className:c("stylex")(m.validationIcon,C&&m.validationIconHideLabel),children:c("CometFormInputValidationStateIcon")[L]}),u]})]}),b]})}})}}),A!=null&&(y?h.jsx("div",{className:"xzpqnlu x1hyvwdk xjm9jq1 x6ikm8r x10wlt62 x10l6tqk x1i1rx1s",id:O,children:A}):h.jsx("div",{className:"x1xmf6yo",id:O,children:h.jsx(c("CometFormInputWrapperHelperText.react"),{validationState:L,value:A})}))]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFormTextInput.react",["BaseTextInput.react","CometFormInputPasswordStateIcon.react","CometFormInputWrapper.react","CometIcon.react","CometImage.react","CometPressable.react","ImageIconSource","react","useBaseInputValidators"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useState,j={disabled:{backgroundColor:"x443n21",color:"x1dntmbh",cursor:"x1h6gzvc",$$css:!0},emoji:{alignItems:"x6s0dn4",display:"x78zum5",justifyContent:"xl56j7k",paddingStart:"x1ye3gou",pointerEvents:"x47corl",$$css:!0},icon:{paddingStart:"x1swvt13",paddingTop:"x109j2v6",pointerEvents:"x47corl",$$css:!0},imageIcon:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",boxShadow:"xlg9a9y",$$css:!0},input:{backgroundColor:"xjbqb8w",borderTop:"x76ihet",borderEnd:"xwmqs3e",borderBottom:"x112ta8",borderStart:"xxxdfa6",boxSizing:"x9f619",color:"xzsf02u",fontSize:"x1uxerd5",fontWeight:"x1fcty0u",lineHeight:"x132q4wb",paddingBottom:"x1a8lsjc",paddingEnd:"x1pi30zi",paddingStart:"x1swvt13",paddingTop:"x9desvi",width:"xh8yej3","::-ms-clear_display":"x15h3p50","::-ms-reveal_display":"x10emqs4",$$css:!0},largeImageIcon:{alignItems:"x6s0dn4",display:"x78zum5",paddingTop:"xexx8yu",$$css:!0}};function a(a,b){var d=a.autoComplete,e=a.autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD,f=a.auxContent,g=a.disabled,k=g===void 0?!1:g;g=a.emojiSkittle;var l=a.helperText,m=a.helperTextIsHidden;m=m===void 0?!1:m;var n=a.icon,o=a.inputMode,p=a.label,q=a.labelRef,r=a.maxLength,s=a.onBlur,t=a.onClick,u=a.onFocus,v=a.onValueChange,w=a.placeholder,x=a.readOnly,y=a.suppressFocusRing,z=a.testid;z=a.type;z=z===void 0?"text":z;var A=a.validationState,B=a.validator,C=a.value,D=a.xstyle,E=babelHelpers.objectWithoutPropertiesLoose(a,["autoComplete","autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD","auxContent","disabled","emojiSkittle","helperText","helperTextIsHidden","icon","inputMode","label","labelRef","maxLength","onBlur","onClick","onFocus","onValueChange","placeholder","readOnly","suppressFocusRing","testid","type","validationState","validator","value","xstyle"]);B=c("useBaseInputValidators")({validator:B,value:(a=C)!=null?a:""});a=B.topResultReason;B=B.topResultType;var F=z==="password",G=i(!1),H=G[0],I=G[1];G=F&&Boolean(C);G=G?h.jsx("div",{className:"x78zum5",children:h.jsx("div",{className:"x1pi30zi x109j2v6",children:h.jsx(c("CometPressable.react"),{onPress:function(){return I(!H)},overlayDisabled:!0,children:h.jsx(c("CometFormInputPasswordStateIcon.react"),{isVisible:H})})})}):null;var J=F?H?"text":"password":z,K=B!=="CORRECT"?B:A;return h.jsx(c("CometFormInputWrapper.react"),{addOnStart:n!=null&&n instanceof c("ImageIconSource")&&n.height===40&&h.jsx("div",{className:"x1swvt13 x47corl x6s0dn4 x78zum5 xexx8yu",children:h.jsx(c("CometImage.react"),{height:parseInt(n.height,10),src:n.src,width:parseInt(n.width,10),xstyle:j.imageIcon})})||n!=null&&h.jsx("div",{className:"x1swvt13 x109j2v6 x47corl",children:h.jsx(c("CometIcon.react"),{color:"secondary",icon:n})})||g!=null&&h.jsx("div",{className:"x6s0dn4 x78zum5 xl56j7k x1ye3gou x47corl",children:g}),auxContent:(F=G)!=null?F:f,cursor:"text",disabled:k,helperText:a!=null?a:l,helperTextIsHidden:m,label:p,labelRef:q,suppressFocusRing:y,validationState:K,value:C,children:function(a){var f=a.focused,g=a.helperTextID;a=a.id;return h.jsx(c("BaseTextInput.react"),babelHelpers["extends"]({"aria-describedby":g,"aria-invalid":K==="ERROR",autoComplete:d,autoFocus:e,disabled:k,id:a,inputMode:o,maxLength:r,onBlur:s,onClick:t,onFocus:u,onValueChange:v,placeholder:f?w:null,readOnly:x,ref:b,suppressFocusRing:!0,testid:void 0,type:J,value:C,xstyle:[j.input,k&&j.disabled,x!=null&&x===!0&&j.disabled,D]},E))}})}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("CometComposerSizeAndStyleReducer",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){switch(b.type){case"SET_COMPOSER_DIMENSIONS":return g(a,b)}return a}function g(a,b){return babelHelpers["extends"]({},a,{composerSizeAndStyleMetadata:babelHelpers["extends"]({},a.composerSizeAndStyleMetadata,{composerDialogHeight:b.composerDialogHeight,composerDialogWidth:b.composerDialogWidth})})}f["default"]=a}),66);
__d("CometComposerDialogLayout.react",["CometComposerSizeAndStyleReducer","CometScrollableArea.react","react","stylex","useComposerViewStateDispatcher","useComposerViewStateReducer","useResizeObserver"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useCallback,j={body:{display:"x78zum5",flexDirection:"xdt5ytf",flexGrow:"x1iyjqo2",$$css:!0},centerColumn:{display:"x78zum5",flexDirection:"xdt5ytf",maxHeight:"x179dxpb",minHeight:"x1pl0jk3",position:"x1n2onr6",width:"xvue9z","@media (max-width: 583px)_flexGrow":"x8n7wzh","@media (max-width: 583px)_width":"x11pth41",$$css:!0},footer:{paddingBottom:"x1l90r2v",paddingTop:"xyamay9",position:"x1n2onr6",$$css:!0},root:{display:"x78zum5",flexDirection:"x1q0g3np",maxHeight:"xqui1pq",minHeight:"x1pl0jk3",overflowX:"x1plvlek",overflowY:"xryxfnj","@media (max-height: 428px)_maxHeight":"x14ocpvf","@media (max-height: 428px)_minHeight":"x5oemz9","@media (max-height: 428px)_overflowX":"x1lck2f0","@media (max-height: 428px)_overflowY":"xlgs127",$$css:!0}};function a(a){var b=a.body,d=a.footer,e=a.header;a=a.xstyle;c("useComposerViewStateReducer")(c("CometComposerSizeAndStyleReducer"));var f=c("useComposerViewStateDispatcher")(),g=i(function(a){f({composerDialogHeight:Math.round(a.height),composerDialogWidth:Math.round(a.width),type:"SET_COMPOSER_DIMENSIONS"})},[f]);g=c("useResizeObserver")(g);return h.jsx("div",{className:c("stylex")(j.root,a),children:h.jsxs("div",{className:"x78zum5 xdt5ytf x179dxpb x1pl0jk3 x1n2onr6 xvue9z x8n7wzh x11pth41",ref:g,children:[h.jsx("div",{children:e}),h.jsx(c("CometScrollableArea.react"),{horizontal:!1,vertical:!0,xstyle:j.body,children:b}),h.jsx("div",{className:"x1l90r2v xyamay9 x1n2onr6",children:d})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);