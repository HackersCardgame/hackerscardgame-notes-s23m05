;/*FB_PKG_DELIM*/

__d("ProfileCometAboutAppSectionQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6416969208341745"}),null);
__d("ProfileCometAboutAppSectionQuery$Parameters",["ProfileCometAboutAppSectionQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("ProfileCometAboutAppSectionQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometAboutAppSectionQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometTopAppSectionQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6083446978440470"}),null);
__d("ProfileCometTopAppSectionQuery$Parameters",["ProfileCometTopAppSectionQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("ProfileCometTopAppSectionQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometTopAppSectionQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometAboutTabRouteRoot.entrypoint",["JSResourceForInteraction","ProfileCometAboutAppSectionQuery$Parameters","WebPixelRatio","buildCometProfileRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometProfileRoute.entrypoint")(c("JSResourceForInteraction")("ProfileCometAboutTabRoot.react").__setRef("ProfileCometAboutTabRouteRoot.entrypoint"),function(a){var b;a=a.routeProps;var e=a.collectionToken,f=a.rawSectionToken,g=a.sectionToken;a=a.userID;return{queries:{aboutAppSectionQueryReference:{environmentProviderOptions:{ssrBoundary:"root"},parameters:c("ProfileCometAboutAppSectionQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"ProfileCometAboutAppSectionQuery",appSectionFeedKey:"ProfileCometAppSectionFeed_timeline_nav_app_sections__"+((b=f)!=null?b:g),collectionToken:e,pageID:String(a),rawSectionToken:f,scale:d("WebPixelRatio").get(),sectionToken:g,showReactions:!0,userID:String(a)}}}}});g["default"]=a}),98);
__d("ProfileCometCollectionRouteRoot.entrypoint",["JSResourceForInteraction","ProfileCometTopAppSectionQuery$Parameters","WebPixelRatio","buildCometProfileRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometProfileRoute.entrypoint")(c("JSResourceForInteraction")("ProfileCometCollectionRoot.react").__setRef("ProfileCometCollectionRouteRoot.entrypoint"),function(a){a=a.routeProps;var b=a.collectionToken,e=a.sectionToken;a=a.userID;return{extraProps:{collectionToken:b},queries:{topAppSectionQueryReference:{environmentProviderOptions:{ssrBoundary:"root"},parameters:c("ProfileCometTopAppSectionQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"ProfileCometCollectionRootQuery",collectionToken:b,displayCommentsContextEnableComment:!0,displayCommentsContextIsAdPreview:!1,displayCommentsContextIsAggregatedShare:!1,displayCommentsContextIsStorySet:!1,displayCommentsFeedbackContext:null,feedbackSource:65,feedLocation:"COMET_MEDIA_VIEWER",scale:d("WebPixelRatio").get(),sectionToken:e,userID:String(a)}}}}});g["default"]=a}),98);