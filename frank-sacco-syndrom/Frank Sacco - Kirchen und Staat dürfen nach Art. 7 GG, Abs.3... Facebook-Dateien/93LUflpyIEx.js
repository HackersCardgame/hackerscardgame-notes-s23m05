;/*FB_PKG_DELIM*/

__d("LSOptimisticSetPinnedMessage",["LSIssueNewTask","LSIssueNewTaskWithExtraOperations","LSSetPinnedMessage"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[],f;return c.seq([function(e){return c.seq([function(d){return c.sp(b("LSSetPinnedMessage"),a[0],a[1],a[2],a[3])},function(e){return c.i64.eq(a[3],c.i64.cast([0,1]))?(d[0]=new c.Map(),d[0].set("thread_key",a[0]),d[0].set("message_id",a[1]),d[0].set("timestamp_ms",a[2]),d[1]=d[0].get("thread_key"),d[0],d[2]=c.toJSON(d[0]),c.sp(b("LSIssueNewTaskWithExtraOperations"),["pin_msg_v2","_",c.i64.to_string(d[1])].join(""),c.i64.cast([0,430]),d[2],f,f,c.i64.cast([0,0]),c.i64.cast([0,0]),f,f,c.i64.cast([0,0]),f)):(d[0]=new c.Map(),d[0].set("thread_key",a[0]),d[0].set("message_id",a[1]),d[0].set("timestamp_ms",a[2]),d[1]=d[0].get("thread_key"),d[0],d[2]=c.toJSON(d[0]),c.sp(b("LSIssueNewTask"),["unpin_msg_v2","_",c.i64.to_string(d[1])].join(""),c.i64.cast([0,431]),d[2],f,f,c.i64.cast([0,0]),c.i64.cast([0,0]),f,f,c.i64.cast([0,0])))}])},function(a){return c.resolve(e)}])}c=a;f["default"]=c}),66);
__d("LSReportMessageInCommunityChannel",["LSIssueNewError","LSIssueNewTaskAndGetTaskID"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[],f;return c.seq([function(g){return c.seq([function(a){return c.sb(c.db.table(115).fetch(),[["timestampMs","DESC"]]).next().then(function(a,b){var c=a.done;a=a.value;return c?d[0]=!1:(b=a.item,d[0]=b.errorShouldBeShown)})},function(a){return d[0]===!0?c.seq([function(a){return c.localizeV2Async(c.i64.cast([0,2285622730]),f).then(function(a){return d[7]=a})},function(a){return c.localizeV2Async(c.i64.cast([0,1919524925]),f).then(function(a){return d[8]=a})},function(a){return c.sp(b("LSIssueNewError"),f,c.i64.cast([0,1545093]),d[7],d[8],f,f)}]):c.resolve()},function(e){return d[2]=new c.Map(),d[2].set("thread_key",a[0]),d[2].set("message_id",a[1]),c.i64.gt(c.i64.cast([0,0]),c.i64.cast([0,0]))?(d[7]=c.i64.of_float(Date.now()),d[3]=c.i64.add(d[7],c.i64.cast([0,0]))):d[3]=c.i64.cast([0,0]),d[4]=d[2].get("thread_key"),d[2],d[5]=c.toJSON(d[2]),c.sp(b("LSIssueNewTaskAndGetTaskID"),c.i64.to_string(d[4]),c.i64.cast([0,374]),d[5],f,f,c.i64.cast([0,0]),c.i64.cast([0,0]),f,f,d[3]).then(function(a){return a=a,d[6]=a[0],a})},function(a){return e[0]=d[6]}])},function(a){return c.resolve(e)}])}c=a;f["default"]=c}),66);
__d("AudioClipsBrowserAllowMicAccessFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("72");b=d("FalcoLoggerInternal").create("audio_clips_browser_allow_mic_access",a);e=b;g["default"]=e}),98);
__d("AudioClipsBrowserBlockMicAccessFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("73");b=d("FalcoLoggerInternal").create("audio_clips_browser_block_mic_access",a);e=b;g["default"]=e}),98);
__d("AudioClipsCancelledByUserFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("39");b=d("FalcoLoggerInternal").create("audio_clips_cancelled_by_user",a);e=b;g["default"]=e}),98);
__d("AudioClipsDialogNotnowMicAccessFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("74");b=d("FalcoLoggerInternal").create("audio_clips_dialog_notnow_mic_access",a);e=b;g["default"]=e}),98);
__d("AudioClipsDialogOkMicAccessFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("75");b=d("FalcoLoggerInternal").create("audio_clips_dialog_ok_mic_access",a);e=b;g["default"]=e}),98);
__d("AudioClipsMicAccessCheckFailedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("76");b=d("FalcoLoggerInternal").create("audio_clips_mic_access_check_failed",a);e=b;g["default"]=e}),98);
__d("AudioClipsPlaybackPauseFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("44");b=d("FalcoLoggerInternal").create("audio_clips_playback_pause",a);e=b;g["default"]=e}),98);
__d("AudioClipsPlaybackResumeFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("45");b=d("FalcoLoggerInternal").create("audio_clips_playback_resume",a);e=b;g["default"]=e}),98);
__d("AudioClipsPlaybackStartFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("47");b=d("FalcoLoggerInternal").create("audio_clips_playback_start",a);e=b;g["default"]=e}),98);
__d("AudioClipsSendFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("49");b=d("FalcoLoggerInternal").create("audio_clips_send",a);e=b;g["default"]=e}),98);
__d("AudioClipsStartRecordingClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("51");b=d("FalcoLoggerInternal").create("audio_clips_start_recording_click",a);e=b;g["default"]=e}),98);
__d("AudioClipsStopRecordingClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("52");b=d("FalcoLoggerInternal").create("audio_clips_stop_recording_click",a);e=b;g["default"]=e}),98);
__d("Ls1lcFeatureOpenFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("153");b=d("FalcoLoggerInternal").create("ls_1lc_feature_open",a);e=b;g["default"]=e}),98);
__d("MWChatAudioLog.bs",["AudioClipsBrowserAllowMicAccessFalcoEvent","AudioClipsBrowserBlockMicAccessFalcoEvent","AudioClipsCancelledByUserFalcoEvent","AudioClipsDialogNotnowMicAccessFalcoEvent","AudioClipsDialogOkMicAccessFalcoEvent","AudioClipsMicAccessCheckFailedFalcoEvent","AudioClipsPlaybackPauseFalcoEvent","AudioClipsPlaybackResumeFalcoEvent","AudioClipsPlaybackStartFalcoEvent","AudioClipsSendFalcoEvent","AudioClipsStartRecordingClickFalcoEvent","AudioClipsStopRecordingClickFalcoEvent","I64","Ls1lcFeatureOpenFalcoEvent"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return d("I64").to_string(d("I64").of_float(a))}function b(a){c("AudioClipsStopRecordingClickFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:d("I64").to_string(d("I64").of_float(a)),entry_point:void 0,error_code:void 0,error_message:void 0,has_access_token:void 0,is_prefetch:"true",position:void 0,relative_url_path:void 0,rtc_call_type:void 0,source_click_category:2,with_captions:void 0}})}function e(){c("AudioClipsStartRecordingClickFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:void 0,entry_point:void 0,error_code:void 0,error_message:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,relative_url_path:void 0,rtc_call_type:void 0,source_click_category:2,with_captions:void 0}}),c("Ls1lcFeatureOpenFalcoEvent").log(function(){return{extra:void 0,feature:13,feature_sessionid:void 0,screen_orientation:void 0,stage:7,thread:void 0}})}function f(){c("AudioClipsCancelledByUserFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:void 0,entry_point:void 0,error_code:void 0,error_message:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,relative_url_path:void 0,rtc_call_type:void 0,source_click_category:2,with_captions:void 0}})}function h(){c("AudioClipsBrowserBlockMicAccessFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:void 0,entry_point:void 0,error_code:void 0,error_message:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,relative_url_path:void 0,rtc_call_type:void 0,source_click_category:2,with_captions:void 0}})}function i(){c("AudioClipsBrowserAllowMicAccessFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:void 0,entry_point:void 0,error_code:void 0,error_message:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,relative_url_path:void 0,rtc_call_type:void 0,source_click_category:2,with_captions:void 0}})}function j(a){c("AudioClipsSendFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:d("I64").to_string(d("I64").of_float(a)),entry_point:void 0,error_code:void 0,error_message:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,relative_url_path:void 0,rtc_call_type:void 0,source_click_category:2,with_captions:void 0}}),c("Ls1lcFeatureOpenFalcoEvent").log(function(){return{extra:void 0,feature:13,feature_sessionid:void 0,screen_orientation:void 0,stage:5,thread:void 0}})}function k(a){c("AudioClipsPlaybackStartFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:d("I64").to_string(d("I64").of_float(a)),entry_point:void 0,error_code:void 0,error_message:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,relative_url_path:void 0,rtc_call_type:void 0,source_click_category:2,with_captions:void 0}})}function l(a,b){c("AudioClipsPlaybackPauseFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:d("I64").to_string(d("I64").of_float(a)),entry_point:void 0,error_code:void 0,error_message:void 0,has_access_token:void 0,is_prefetch:void 0,position:d("I64").to_string(d("I64").of_float(b)),relative_url_path:void 0,rtc_call_type:void 0,source_click_category:2,with_captions:void 0}})}function m(a,b){c("AudioClipsPlaybackResumeFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:d("I64").to_string(d("I64").of_float(a)),entry_point:void 0,error_code:void 0,error_message:void 0,has_access_token:void 0,is_prefetch:void 0,position:d("I64").to_string(d("I64").of_float(b)),relative_url_path:void 0,rtc_call_type:void 0,source_click_category:2,with_captions:void 0}})}function n(){c("AudioClipsDialogOkMicAccessFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:void 0,entry_point:void 0,error_code:void 0,error_message:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,relative_url_path:void 0,rtc_call_type:void 0,source_click_category:2,with_captions:void 0}})}function o(){c("AudioClipsDialogNotnowMicAccessFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:void 0,entry_point:void 0,error_code:void 0,error_message:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,relative_url_path:void 0,rtc_call_type:void 0,source_click_category:2,with_captions:void 0}})}function p(){c("AudioClipsMicAccessCheckFailedFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:void 0,entry_point:void 0,error_code:void 0,error_message:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,relative_url_path:void 0,rtc_call_type:void 0,source_click_category:2,with_captions:void 0}})}g.floatToInt64String=a;g.logClickStopRecording=b;g.logClickStartRecording=e;g.logDeleteRecording=f;g.logBrowserDenyAccess=h;g.logBrowserAllowAccess=i;g.logSendRecording=j;g.logPlaybackStart=k;g.logPlaybackPause=l;g.logPlaybackResume=m;g.logDialogOk=n;g.logDialogNotNow=o;g.logMicAccessCheckFailed=p}),98);
__d("useMWLSMessageReportingToken",["I64","Int64Hooks"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){return d("Int64Hooks").useMemoInt64(function(){return window.btoa("message_thread:"+d("I64").to_string(b)+":"+a)},[a,b])}g["default"]=a}),98);
__d("cometMessengerFileUploadComposerPluginSupportedTypes",[],(function(a,b,c,d,e,f){"use strict";a=["photo","video","file"];b=a;f["default"]=b}),66);
__d("useCometMessengerFileUploadPaste",["react","useCometLexicalFileDragAndDrop"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a){var b=a.editor,d=a.handlePastedFiles;a=a.isMimeTypeAcceptable;var e=h(function(a){a.length>0&&d(a)},[d]);c("useCometLexicalFileDragAndDrop")({editor:b,isMimeTypeAcceptable:a,onSubmit:e})}g["default"]=a}),98);
__d("CometMessengerHandlePastedFileComposerPlugin",["cometIsMimeTypeForMedia","cometMessengerFileUploadComposerPluginSupportedTypes","useCometMessengerFileUploadPaste"],(function(a,b,c,d,e,f,g){"use strict";function h(a){if(a.kind!=="file")return!1;for(var b=c("cometMessengerFileUploadComposerPluginSupportedTypes"),e=Array.isArray(b),f=0,b=e?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=b.length)break;g=b[f++]}else{f=b.next();if(f.done)break;g=f.value}g=g;switch(g){case"photo":if(d("cometIsMimeTypeForMedia").isMimeTypeForPhoto(a.type))return!0;break;case"video":if(d("cometIsMimeTypeForMedia").isMimeTypeForVideo(a.type))return!0;break;case"file":if(d("cometIsMimeTypeForMedia").isMimeTypeForFile(a.type))return!0;break;default:g}}return!1}function a(a){var b=a.editor;a=a.handlePastedFiles;c("useCometMessengerFileUploadPaste")({editor:b,handlePastedFiles:a,isMimeTypeAcceptable:h});return null}g["default"]=a}),98);
__d("MWOpenMediaManagerUtils.bs",["I64","LSFactory","LSGenerateTraceId","LSIntEnum","LSMarkSubJobCompletedV2","MWConsole","MWPComposerMediaUploadUtil.bs","MWPOpenComposerUtils.bs","OfflineThreadingId","Promise","ReQL.bs","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return b("Promise").resolve(d("OfflineThreadingId").createForItemsInOrder(a))}function e(a,e,f,g){var h=function(b,e){e=e.event;if(!e.lengthComputable)return;var f=e.loaded/e.total;c("promiseDone")(a.runInTransaction(function(a){return d("MWPOpenComposerUtils.bs").updateMediaStaging(a,b,function(a){return{attachmentType:a.attachmentType,durationMs:a.durationMs,fbid:a.fbid,filename:a.filename,fileSize:a.fileSize,hasError:a.hasError,isSent:a.isSent,mailboxType:a.mailboxType,mimeType:a.mimeType,offlineAttachmentId:a.offlineAttachmentId,offlineThreadingId:a.offlineThreadingId,previewHeight:a.previewHeight,previewUrl:a.previewUrl,previewWidth:a.previewWidth,progress:f,threadKey:a.threadKey}})},"readwrite"))},i=function(f,g){c("promiseDone")(a.runInTransaction(function(a){var h=d("MWPOpenComposerUtils.bs").updateMediaStaging(a,f,function(a){return{attachmentType:a.attachmentType,durationMs:a.durationMs,fbid:d("I64").of_float(g),filename:a.filename,fileSize:a.fileSize,hasError:a.hasError,isSent:a.isSent,mailboxType:a.mailboxType,mimeType:a.mimeType,offlineAttachmentId:a.offlineAttachmentId,offlineThreadingId:a.offlineThreadingId,previewHeight:a.previewHeight,previewUrl:a.previewUrl,previewWidth:a.previewWidth,progress:1,threadKey:a.threadKey}}),i=a.table("media_send_jobs").get({hd:f,tl:0}).then(function(h){if(h==null)return b("Promise").resolve();var i=c("LSFactory")(a),j=h.offlineThreadingId,k=h.offlineAttachmentId;return c("LSMarkSubJobCompletedV2")(f,d("I64").of_float(g),void 0,void 0,void 0,i).then(function(){return d("MWPOpenComposerUtils.bs").deleteMediaStaging(a,f)}).then(function(){return d("MWPOpenComposerUtils.bs").updateAttachment(a,e,j,k,function(a){return babelHelpers["extends"]({},a,{attachmentFbid:g.toString()})})}).then(function(){return d("MWPOpenComposerUtils.bs").resumeSendJob(i,j,c("LSGenerateTraceId")())})});return b("Promise").all([h,i])},"readwrite"))},j=function(e,f){c("promiseDone")(a.runInTransaction(function(a){return d("MWPOpenComposerUtils.bs").updateMediaStaging(a,e,function(a){return{attachmentType:a.attachmentType,durationMs:a.durationMs,fbid:a.fbid,filename:a.filename,fileSize:a.fileSize,hasError:!0,isSent:a.isSent,mailboxType:a.mailboxType,mimeType:a.mimeType,offlineAttachmentId:a.offlineAttachmentId,offlineThreadingId:a.offlineThreadingId,previewHeight:a.previewHeight,previewUrl:a.previewUrl,previewWidth:a.previewWidth,progress:a.progress,threadKey:a.threadKey}}).then(function(){return a.table("media_send_jobs").get({hd:e,tl:0}).then(function(c){if(c!=null)return d("ReQL.bs").first(d("ReQL.bs").getKeyRange(d("ReQL.bs").fromIndexAscending(a.table("messages").index("optimistic")),{hd:c.offlineThreadingId,tl:0})).then(function(c){if(c==null)return b("Promise").resolve();c=babelHelpers["extends"]({},c,{sendStatusV2:d("LSIntEnum").ofNumber(4)});return a.table("messages").put(c)});else return b("Promise").resolve()})})},"readwrite"))},k=f.map(function(a){return a[1]});f=f.map(function(a){return a[0]});return d("MWPComposerMediaUploadUtil.bs").startUpload(h,i,j,void 0,f,k,g)}g.preprocess=a;g.upload=e}),98);
__d("MWPinnedMessagesDialogNUXFactoryRequireNUX.react",["nux:345"],(function(a,b,c,d,e,f,g){"use strict";a=function(){return b("nux:345")==null?void 0:b("nux:345")("WEB_MSGR_PINNED_MESSAGES_NUX")};c=a;g["default"]=c}),98);
__d("useMWPinnedMessageLimitReached",["ReQL","ReQLSuspense","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h=50;function a(a){var b=c("useReStore")(),e=d("ReQLSuspense").useArray(function(){return d("ReQL").fromTableAscending(b.table("msg_pinned_messages_v2")).getKeyRange(a)},[b,a],f.id+":27").length;return e>=h}g["default"]=a}),98);
__d("LSPinnedMessageState",[],(function(a,b,c,d,e,f){a=Object.freeze({NOT_PINNED:0,PINNED:1});f["default"]=a}),66);
__d("useMWTogglePinMessage",["I64","LSFactory","LSOptimisticSetPinnedMessage","LSPinnedMessageState","MWPActor.react","MWPBumpEntityKey","ServerTime","asyncToGeneratorRuntime","promiseDone","react","requireDeferred","useMWPIsMessagePinned","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback,i=c("requireDeferred")("MWLogMessageAction").__setRef("useMWTogglePinMessage");function a(a,e){var f=c("useReStore")(),g=c("useMWPIsMessagePinned")(a),j=a.messageId,k=a.threadKey,l=d("ServerTime").getMillis(),m=d("MWPActor.react").useActor(),n=function(){var h=b("asyncToGeneratorRuntime").asyncToGenerator(function*(){yield f.runInTransaction(function(b){var h=g?c("LSPinnedMessageState").NOT_PINNED:c("LSPinnedMessageState").PINNED,n=g?"unpin":"pin";e==="message_dot_menu"?i.onReady(function(b){return c("promiseDone")(b.log(f,a.messageId,k,e,n,void 0,void 0,void 0,a.senderId,void 0,m))}):n==="unpin"&&e==="pinned_message_list_dot_menu"&&d("MWPBumpEntityKey").bumpEntityKeyWithAppId("mw_pinned_messages","unpin");return c("LSOptimisticSetPinnedMessage")(k,j,d("I64").of_int32(l),d("I64").of_int32(h),c("LSFactory")(b))},"readwrite")});return function(){return h.apply(this,arguments)}}();return h(n,[f,g,j,d("I64").to_string(k),l])}g["default"]=a}),98);
__d("MWPinMessageMenuItem.react",["fbt","JSResourceForInteraction","MWPinnedMessagesDialogNUXFactoryRequireNUX.react","MWXMenuItem.react","promiseDone","react","useCometLazyDialog","useMWPIsMessagePinned","useMWPinnedMessageLimitReached","useMWTogglePinMessage"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=c("JSResourceForInteraction")("MWPinnedMessageLimitReachedDialog.react").__setRef("MWPinMessageMenuItem.react");function a(a){var b=a.message,d=a.onPinCompleted,e=h._("__JHASH__SDjIWKr-fud__JHASH__"),f=h._("__JHASH__mSiYCxxiHcw__JHASH__"),g=c("useMWPIsMessagePinned")(b),k=c("MWPinnedMessagesDialogNUXFactoryRequireNUX.react")();a=c("useCometLazyDialog")(j);var l=a[0],m=c("useMWTogglePinMessage")(b,"message_dot_menu"),n=c("useMWPinnedMessageLimitReached")(b.threadKey);a=function(a){return k!=null?k({children:a,dialogProps:{onClose:function(){},pinMessageHandler:function(){return c("promiseDone")(m(),d)}}}):i.jsx(i.Fragment,{children:a(function(){return c("promiseDone")(m(),d)})})};var o=function(a){return i.jsx(c("MWXMenuItem.react"),{onClick:function(d){if(n&&!g)return l({onClose:function(){},threadKey:b.threadKey});!g?a():c("promiseDone")(m())},primaryText:g?f:e})};return a(o)}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWV2CopyMessageLinkMenuItem.react",["fbt","Clipboard","CurrentEnvironment","I64","MWInboxCommunityThreadsRouteBuilder.bs","MWInboxRouteBuilder.bs","MWXMenuItem.react","react","useCommunityFolder"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function j(a,b){a=c("useCommunityFolder")(a);a!=null?a=d("MWInboxCommunityThreadsRouteBuilder.bs").routeBuilderModule.buildUriForMessage({folder_id:d("I64").to_string(a.folderId),mid:b.messageId,thread_key:d("I64").to_string(b.threadKey)}):a=d("MWInboxRouteBuilder.bs").routeBuilderModule.buildUriForMessage({mid:b.messageId,thread_key:d("I64").to_string(b.threadKey)});b=c("CurrentEnvironment").facebookdotcom?"facebook.com":"messenger.com";return(a=a)==null?void 0:(a=a.setDomain(b))==null?void 0:(b=a.setProtocol("https"))==null?void 0:b.toString()}function a(a){var b=a.message;a=a.thread;var e=j(a,b);if(e==null)return null;a=h._("__JHASH__e0SY7seQYxK__JHASH__");return i.jsx(c("MWXMenuItem.react"),{"aria-label":a,onClick:function(){d("Clipboard").copy(e)},primaryText:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWV2ForwardMenuItem.bs",["fbt","Int64Hooks","MWV2UseMessageForwardAction.bs","MWXMenuItem.react","ReQL.bs","ReQLSubscription.bs","react","useReStore"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function j(a,b){return d("ReQLSubscription.bs").useFirstExn(d("Int64Hooks").useMemoInt64(function(){return d("ReQL.bs").getKeyRange(d("ReQL.bs").fromTableAscending(a.table("threads")),{hd:b.threadKey,tl:0})},[a,b.threadKey]),"q1s4fagq")}function a(a){a=a.message;var b=c("useReStore")();b=j(b,a);b=d("MWV2UseMessageForwardAction.bs").useHook(b,a);a=h._("__JHASH__GvPr2MwluxY__JHASH__");return i.jsx(c("MWXMenuItem.react"),{"aria-label":a,onClick:b,primaryText:a,testid:void 0})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWV2RemoveMenuItem.bs",["fbt","CometLazyDialogTrigger.react","I64","Int64Hooks","JSResourceForInteraction","LSDeleteMessage","LSFactory","LSIntEnum","MWCMIsAnyCMThread","MWV2LogMessageClick.bs","MWXMenuItem.react","ReQL.bs","ReQLSubscription.bs","promiseDone","react","useReStore"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.canRemoveMessageGlobally,e=a.learnMoreOnMessageRemove,f=a.message,g=c("useReStore")(),j=h._("__JHASH__xWxZXNnPg5R__JHASH__"),k=f.messageId,l=f.threadKey;a=d("ReQLSubscription.bs").useFirstExn(d("Int64Hooks").useMemoInt64(function(){return d("ReQL.bs").getKeyRange(d("ReQL.bs").fromTableAscending(g.table("threads")),{hd:l,tl:0})},[g,l]),"iy3a84ps");var m=c("MWCMIsAnyCMThread")(a.threadType)&&d("I64").equal(f.sendStatusV2,d("LSIntEnum").ofNumber(4)),n=d("Int64Hooks").useCallbackInt64(function(){c("promiseDone")(g.runInTransaction(function(a){return c("LSDeleteMessage")(l,k,c("LSFactory")(a))},"readwrite"))},[g,l,k]),o=i.useRef(null);return i.jsx(c("CometLazyDialogTrigger.react"),{dialogProps:{canRemoveMessageGlobally:b,message:f,thread:a,learnMoreOnMessageRemove:e},dialogResource:c("JSResourceForInteraction")("MWV2RemoveMessageDialog.bs").__setRef("MWV2RemoveMenuItem.bs"),children:function(a){return i.jsx(c("MWXMenuItem.react"),{"aria-label":j,onClick:function(){d("MWV2LogMessageClick.bs").log(g,f,45);return f.subscriptErrorMessage!=null&&m?n():a()},primaryText:h._("__JHASH__OBeSQ3xvN5u__JHASH__"),ref:o,testid:void 0})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWV2ReplyMenuItem.bs",["fbt","MWPReplyContext.bs","MWXMenuItem.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.message;a=h._("__JHASH__xFCj85w6vra__JHASH__");var e=i.useContext(d("MWPReplyContext.bs").context),f=e.setReply;return i.jsx(c("MWXMenuItem.react"),{"aria-label":a,onClick:function(){return f({messageId:b.messageId,offlineThreadingId:b.offlineThreadingId,sendStatusV2:b.sendStatusV2,timestampMs:b.timestampMs},b.threadKey)},primaryText:a,testid:void 0})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWV2ReportMessageMenuItem.bs",["fbt","I64","LSFactory","LSIntEnum","LSInternetConnectionState","LSReportMessageInCommunityChannel","MWXMenuItem.react","ReQL.bs","ReQLSubscription.bs","cometPushToast","promiseDone","react","useCometConfirmationDialog","useReStore"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.message,e=c("useReStore")(),f=d("ReQLSubscription.bs").useFirst(i.useMemo(function(){return d("ReQL.bs").fromTableAscending(e.table("connectivity_status"))},[e]),"b04ki76t"),g=h._("__JHASH__d_L8PCP9wn0__JHASH__"),j=i.useCallback(function(){c("promiseDone")(e.runInTransaction(function(a){return c("LSReportMessageInCommunityChannel")(b.threadKey,b.messageId,c("LSFactory")(a))},"readwrite"),function(){if(f!=null&&d("I64").equal(f.internetConnectionState,d("LSIntEnum").ofNumber(c("LSInternetConnectionState").CONNECTED))){d("cometPushToast").cometPushSimpleToast(g);return}})},[e,b.messageId,d("I64").to_string(b.threadKey)]),k=c("useCometConfirmationDialog")();a=i.useCallback(function(){return k({body:h._("__JHASH__N-iMIiU3yyg__JHASH__"),cancel:h._("__JHASH__ko1T7DvDF-J__JHASH__"),confirm:h._("__JHASH__Se9aOBDM-5h__JHASH__"),title:h._("__JHASH__ZQlRxOvru63__JHASH__")},function(){return j()},function(){})},[k,j]);var l=h._("__JHASH__Un1168J6Rxb__JHASH__");return i.jsx(c("MWXMenuItem.react"),{"aria-label":l,onClick:a,primaryText:l,testid:void 0})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWV2ReportMessageToFBMenuItem.react",["CometEntryPointDialogTrigger.react","CometFRX.entrypoint","MWXMenuItem.react","react","useMWLSMessageReportingToken"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.menuItemLabel,d=a.messageId,e=a.onReportLogger;a=a.threadKey;d=c("useMWLSMessageReportingToken")(d,a);a={entryPoint:"report_long_press",id:d,location:"messenger_community_messaging_group_thread_details"};return h.jsx(c("CometEntryPointDialogTrigger.react"),{dialogEntryPoint:c("CometFRX.entrypoint"),otherProps:{},preloadParams:a,children:function(a){return h.jsx(c("MWXMenuItem.react"),{"aria-label":b,onClick:function(){e&&e(),a()},primaryText:b})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWV2ContextualActionsMenu.react",["fbt","CometPopover.react","MWChatMessageBothOrientationFocusGroup.bs","MWPinMessageMenuItem.react","MWV2CopyMessageLinkMenuItem.react","MWV2ForwardMenuItem.bs","MWV2RemoveMenuItem.bs","MWV2ReplyMenuItem.bs","MWV2ReportMessageMenuItem.bs","MWV2ReportMessageToFBMenuItem.react","MWXMenu.react","cr:4140","cr:5790","focusScopeQueries","react","useMWEntrypoint","useMWFalcoFeatureEventLogger"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var e=a.canRemoveMessageGlobally,f=a.extraActions,g=a.learnMoreOnMessageRemove,j=a.message,k=a.showCopyMessageLinkMenu,l=a.showForwardActionInContextualMenu,m=a.showPinMessageActionInContextualMenu,n=a.showReplyActionInContextualMenu,o=a.showReportCommunityMessageToAdmin,p=a.showReportCommunityMessageToFacebook,q=a.showUnsendInContextualMenu;a=a.thread;var r=a.threadKey,s=a.threadType,t=c("useMWEntrypoint")(),u=c("useMWFalcoFeatureEventLogger")(r,s);r=h._("__JHASH__xVGUtEB2kuN__JHASH__");return i.jsx(c("CometPopover.react"),{withArrow:!0,children:i.jsx(d("MWChatMessageBothOrientationFocusGroup.bs").keyCommands,{children:i.jsx(d("MWChatMessageBothOrientationFocusGroup.bs").FocusGroup,{allowModifiers:!0,orientation:"both",preventScrollOnFocus:!1,tabScopeQuery:d("focusScopeQueries").tabbableScopeQuery,children:i.jsxs(c("MWXMenu.react"),{label:r,size:"full",children:[b("cr:4140")?i.jsx(b("cr:4140"),{message:j}):null,q?i.jsx(c("MWV2RemoveMenuItem.bs"),{canRemoveMessageGlobally:e,learnMoreOnMessageRemove:g,message:j}):null,l?i.jsx(c("MWV2ForwardMenuItem.bs"),{message:j}):null,n?i.jsx(c("MWV2ReplyMenuItem.bs"),{message:j}):null,m?i.jsx(c("MWPinMessageMenuItem.react"),{message:j,onPinCompleted:function(){u(t,"pin_message")}}):null,o?i.jsx(c("MWV2ReportMessageMenuItem.bs"),{message:j}):null,p?i.jsx(c("MWV2ReportMessageToFBMenuItem.react"),{menuItemLabel:h._("__JHASH__2SjbZXVdFlO__JHASH__"),messageId:j.messageId,threadKey:j.threadKey}):null,k?i.jsx(c("MWV2CopyMessageLinkMenuItem.react"),{message:j,thread:a}):null,b("cr:5790")?i.jsx(b("cr:5790"),{message:j,thread:a}):null,f]})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWPinnedMessagesDialogNUXFactory.react",["CometLazyDialogTrigger.react","JSResourceForInteraction","MWInboxPersistedUIState","declareNUXRequireable","react","useSharedNUX"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useMemo,k=c("JSResourceForInteraction")("MWPinnedMessagesDialogNUX.react").__setRef("MWPinnedMessagesDialogNUXFactory.react");function a(a){return function(b){var e=b.children,f=b.dialogProps;b=c("useSharedNUX")(a);var g=b[0],l=b[1];b=d("MWInboxPersistedUIState").usePersistedUIState(void 0,"__MWSimpleNux."+a+"__");b[0];var m=b[1],n=i(function(){m(void 0),l.onDismiss()},[l,m]);b=j(function(){return{onClose:function(){},onDismiss:n,pinMessageHandler:f.pinMessageHandler}},[f,n]);return g?h.jsx(c("CometLazyDialogTrigger.react"),{dialogProps:b,dialogResource:k,children:function(a){return e(a)}}):e(f.pinMessageHandler)}}e=c("declareNUXRequireable")(a);g["default"]=e}),98);
__d("MlsMessageActionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1401");b=d("FalcoLoggerInternal").create("mls_message_action",a);e=b;g["default"]=e}),98);
__d("MWLogMessageAction",["I64","MWLSContactTypeExactUtils","MlsMessageActionFalcoEvent","ReQL","asyncToGeneratorRuntime"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,c,d,e,f,g,i,j,k,l){return h.apply(this,arguments)}function h(){h=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,b,e,f,g,h,i,j,k,l,m){var n=(yield d("ReQL").firstAsync(d("ReQL").fromTableAscending(a.table("threads")).getKeyRange(e))),o=(yield d("ReQL").toArrayAsync(d("ReQL").fromTableAscending(a.table("participants")).getKeyRange(e))),p=(yield d("ReQL").firstAsync(d("ReQL").mergeJoin(d("ReQL").fromTableAscending(a.table("participants")).getKeyRange(e),d("ReQL").fromTableAscending(a.table("contacts"))).filter(function(a){a[0];a=a[1];return d("MWLSContactTypeExactUtils").isIgContact(a)})))!=null;n!=null&&c("MlsMessageActionFalcoEvent").log(function(){var a;return{action:g,browser_window_height:window.innerHeight,browser_window_width:window.innerWidth,device_screen_height:window.screen.height,device_screen_width:window.screen.width,error_text:i,extra:h,group_size:String(o.length),is_xac_thread:p,ls_thread_type:d("I64").to_int32(n.threadType),message_type:(a=l)!=null?a:"text",mid:b,reaction:j,recipient_id:k!=null?d("I64").to_string(k):void 0,sender_id:d("I64").to_string(m),source:f,thread_id:d("I64").to_string(e)}})});return h.apply(this,arguments)}g.log=a}),98);
__d("ZenonUserActionLoggerCommon",["cr:11085"],(function(a,b,c,d,e,f,g){"use strict";g.logClick=b("cr:11085").logClick,g.logImpression=b("cr:11085").logImpression}),98);
__d("MessengerDiscoverableBroadcastChatsClientEventsFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("4148");b=d("FalcoLoggerInternal").create("messenger_discoverable_broadcast_chats_client_events",a);e=b;g["default"]=e}),98);