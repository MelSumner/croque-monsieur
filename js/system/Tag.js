var _this=this;miam("system/Tag",["system/Utils"],function(){var t;return t=function(){function t(t){var r,n,o,e,i;for(r=Utils.explode(".",t),o=Utils.explode("#",r[0]),this.tag=$("<"+o[0]+"></"+o[0]+">"),o.length>1&&this.setId(o[1]),n=e=1,i=r.length-1;i>=1?i>=e:e>=i;n=i>=1?++e:--e)this.addClass(r[n])}return t.prototype.addClass=function(t){return this.tag.addClass(t)},t.prototype.setId=function(t){return this.tag.attr("id",t)},t.prototype.setContent=function(t){return this.tag.html(t)},t.prototype.setAttr=function(t,r){return this.tag.attr(t,r)},t.prototype.setDataElement=function(t,r){return this.tag.attr("data-"+t,r)},t.prototype.toString=function(){return this.tag.prop("outerHTML")},t.prototype.appendTo=function(t){return null==t&&(t="body"),$(t).append(this.tag)},t.prototype.horizontal=function(r){return t.horizontal(this.tag,r)},t.horizontal=function(t,r){return null==r&&(r=$("body")),t.css({left:(r.outerWidth()-t.outerWidth())/2})},t.prototype.vertical=function(r){return t.vertical(this.tag,r)},t.vertical=function(t,r){return null==r&&(r=$("body")),t.css({top:(r.outerHeight()-t.outerHeight())/2})},t.prototype.centerize=function(t){return this.horizontal(t),this.vertical(t)},t.centerize=function(r,n){return t.horizontal(r,n),t.vertical(r,n)},t.prototype.toJQuery=function(){return this.tag},t.prototype.toJS=function(){return this.tag.get()[0]},t}()});