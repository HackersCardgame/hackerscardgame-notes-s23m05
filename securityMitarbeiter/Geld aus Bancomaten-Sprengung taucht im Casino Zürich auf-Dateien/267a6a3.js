(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{136:function(t,e,r){"use strict";r.r(e);var n=r(35),o={name:"MoreToSubject",components:{SimpleArticle:()=>Promise.resolve().then(r.bind(null,51))},mixins:[r(379).a],props:{data:{type:Object,default:()=>({containers:{"moreToSubject-area":[]},content:{}})}},data:()=>({size:"articlelist-a"}),computed:{relevantTopic(){return this.$store.state.features.bta&&this.data&&this.data.content&&this.data.content.relevantTopic?this.data.content.relevantTopic.trim().replace(/\s+/g,"-"):null},title(){var t,e;return null===(t=this.data)||void 0===t||null===(e=t.content)||void 0===e?void 0:e.title}},methods:{transformArticleData:n.b}},c=r(1),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return t.data.containers["moreToSubject-area"]?e("section",{staticClass:"pageelement pageelement--moretosubject",class:{"article-tags-above":t.data.content&&t.data.content.hasArticleTags},attrs:{"data-grws-bta":t.$store.state.features.bta?"default":null}},[e("div",{staticClass:"pageelement__inner"},[t.title?e("div",{staticClass:"container container--moretosubject"},[e("div",{staticClass:"container__header-title container__header-title--moretosubject",class:{"container__header-title--bta-moretosubject":t.$store.state.features.bta}},[e("span",{staticClass:"container__header-text container__header-text--moretosubject",domProps:{innerHTML:t._s(t.title)}})])]):t._e(),t._v(" "),e("div",{staticClass:"widget__row widget__row--noBorder",class:{"widget__row--bta-moretosubject":t.$store.state.features.bta}},[e("div",{class:`widget--${t.size}`,attrs:{"data-source-element-widget":t.relevantTopic,"data-team-more-to-subject":""}},t._l(t.transformArticleData({articles:t.data.containers["moreToSubject-area"].map((t=>t.content.article))},t.$store.state.header.pagetype),(function(article,i){return e("SimpleArticle",{key:`article-${article.metadata.nzzId}-${i}`,attrs:{data:article,index:i,styles:t.data.styles,size:t.size,"referrer-type":t.relevantTopic?"btaArticleTeaser":"articleTeaser","add-datetime-attr":!1}})})),1)])])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);