;/*FB_PKG_DELIM*/

__d("LSDeleteMessage",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.fe(b.ftr(b.db.table(12).fetch([[[a[0]]]]),function(c){return c.messageId===a[1]&&b.i64.eq(c.threadKey,a[0])}),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("LSSetPinnedMessage",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.i64.eq(a[3],b.i64.cast([0,1]))?b.seq([function(c){return b.fe(b.db.table(205).fetch([[[a[0],a[1]]]]),function(a){return a["delete"]()})},function(c){return b.fe(b.ftr(b.db.table(205).fetch([[[a[0],a[1],a[2]]]]),function(c){return b.i64.eq(c.threadKey,a[0])&&c.messageId===a[1]&&b.i64.eq(c.pinnedTimestampMs,a[2])&&b.i64.lt(c.authorityLevel,b.i64.cast([0,80]))}),function(a){return a["delete"]()})},function(c){return b.db.table(205).add({threadKey:a[0],messageId:a[1],pinnedTimestampMs:a[2],authorityLevel:b.i64.cast([0,80])})}]):b.fe(b.db.table(205).fetch([[[a[0],a[1]]]]),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("CometFRXQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6275407765899887"}),null);
__d("CometFRXQuery$Parameters",["CometFRXQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometFRXQuery_facebookRelayOperation"),metadata:{},name:"CometFRXQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("MWChatMessageBothOrientationFocusGroup.bs",["fbt","CometComponentWithKeyCommands.react","CometKeys","FocusGroup.react","focusScopeQueries","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("FocusGroup.react").createFocusGroup(d("focusScopeQueries").tabbableScopeQuery);e=b[0];d=b[1];b={key:c("CometKeys").UP};var j={key:c("CometKeys").DOWN},k={key:c("CometKeys").LEFT},l={key:c("CometKeys").RIGHT},m=[{command:b,description:h._("__JHASH__HYvhkJNYo2M__JHASH__"),handler:function(){}},{command:j,description:h._("__JHASH__6tFY25IlnV4__JHASH__"),handler:function(){}},{command:k,description:h._("__JHASH__6tFY25IlnV4__JHASH__"),handler:function(){}},{command:l,description:h._("__JHASH__HYvhkJNYo2M__JHASH__"),handler:function(){}}];function a(a){a=a.children;return i.jsx(c("CometComponentWithKeyCommands.react"),{commandConfigs:m,xstyle:!1,children:a})}a.displayName=a.name+" [from "+f.id+"]";h=a;g.FocusGroup=e;g.FocusGroupItem=d;g.keyUp=b;g.keyDown=j;g.keyLeft=k;g.keyRight=l;g.commandConfigs=m;g.keyCommands=h}),98);
__d("CometFRX.entrypoint",["CometFRXQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.conformed_interface_override,e=a.entryPoint,f=a.id,g=a.location;a=a.responsible_id;return{queries:{frx:{parameters:c("CometFRXQuery$Parameters"),variables:{input:{conformed_interface_override:b,entry_point:e,id:f,location:g,responsible_id:a},scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("CometFRX.react").__setRef("CometFRX.entrypoint")};g["default"]=a}),98);