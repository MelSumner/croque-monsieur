var _this=this;define(["jqueryCookie"],function(){var e;return e=function(){function e(e,t,o,i){if(null==e)throw new Error("Cookie must have at least a key");null==i&&(i="/"),null==o&&(o=365),null==t?(this.key=e,this.value=$.cookie(e)):(this.key=e,this.value=t,$.cookie(e,t,{expires:o,path:i}))}return e.getVal=function(e){return $.cookie(e)},e.prototype.getVal=function(){return this.val},e.prototype.setVal=function(e){return this.value=e,$.cookie(this.key,this.path)},e.remove=function(e){return $.removeCookie(e)},e.prototype.remove=function(){return $.remove(this.key)},e}()});