var Vertice;Vertice=function(){function o(t){this.content=t,this.color=o.colors.WHITE}return o.colors={WHITE:0,GREY:1,BLACK:2},o.prototype.getContent=function(){return this.content},o.prototype.isWhite=function(){return this.color===o.colors.WHITE},o.prototype.isGrey=function(){return this.color===o.colors.GREY},o.prototype.isBlack=function(){return this.color===o.colors.BLACK},o.prototype.setWhite=function(){return this.color=o.colors.WHITE},o.prototype.setGrey=function(){return this.color=o.colors.GREY},o.prototype.setBlack=function(){return this.color=o.colors.BLACK},o}();