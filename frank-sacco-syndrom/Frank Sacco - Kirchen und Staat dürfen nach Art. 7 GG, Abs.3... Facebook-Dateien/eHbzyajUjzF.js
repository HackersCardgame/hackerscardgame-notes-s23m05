;/*FB_PKG_DELIM*/

__d("ProfilePlusAdFluencyInsightEventsFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("4438");b=d("FalcoLoggerInternal").create("profile_plus_ad_fluency_insight_events",a);e=b;g["default"]=e}),98);
__d("ProfilePlusAdFluencyInsightLoggingUtils",["ProfilePlusAdFluencyInsightEventsFalcoEvent","react","useFullViewImpression"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function i(a,b){var d=h(function(){c("ProfilePlusAdFluencyInsightEventsFalcoEvent").log(function(){return{event:"impression",extra_data:b,location:a}})},[b,a]);return c("useFullViewImpression")({onFullViewStart:d})}function j(a){return h(function(b){c("ProfilePlusAdFluencyInsightEventsFalcoEvent").log(function(){return{event:"primary_click",extra_data:b,location:a}})},[a])}function k(a){return h(function(b,d){c("ProfilePlusAdFluencyInsightEventsFalcoEvent").log(function(){return{event:b,extra_data:d,location:a}})},[a])}function a(a,b){return[i(a,b),j(a)]}function b(a,b){return[i(a,b),k(a)]}function e(a,b,d){c("ProfilePlusAdFluencyInsightEventsFalcoEvent").log(function(){return{event:b,extra_data:d,location:a}})}g.useAdFluencyInsightFullViewImpressionLogger=i;g.useAdFluencyInsightClickLogger=j;g.useAdFluencyInsightEventLogger=k;g.useAdFluencyInsightCTRLogger=a;g.useAdFluencyImpressionAndEventLogger=b;g.adFluencyInsightEventLogger=e}),98);