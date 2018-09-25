var SuperTable = function(){
  $(window).resize($.proxy(this._resizeFixed, this));
  $(window).scroll($.proxy(this._scrollFixed, this));
};
SuperTable.prototype.Init = function(jTable){
  this._table = $(jTable);
  var jWrapper = $('<div class="container" />');
  if(this._table.hasClass("table-horizontal-scroll")){
    jWrapper.addClass("table-horizontal-scroll-wrapper");
  }
  this._table.wrap(jWrapper);

  this._fixed = this._table.clone();
  this._fixed
    .find("tbody")
    .remove()
    .end()
    .addClass("fixed")
    .css("left", this._table.position().left + "px")
    .insertBefore(this._table);
  this._resizeFixed();
  this._fixedHeight = this._fixed.height();
  this._fixedIsShowing = false;
};
SuperTable.prototype._resizeFixed = function(){
  var thisTable = this._table;
  this._fixed.find("th").each(function(index) {
    var jRelated = thisTable.find("th").eq(index);
    $(this).css("width",jRelated.width()+"px");
  });
};
SuperTable.prototype._scrollFixed = function(){
  var offset = $(window).scrollTop(),
    tableOffsetTop = this._table.offset().top,
    tableOffsetBottom = tableOffsetTop + this._table.height() -this._table.find("thead").height();

    if(offset < tableOffsetTop || offset > tableOffsetBottom){
      this._fixed.hide();
      this._fixedIsShowing = false;
    } else if(
      offset >= tableOffsetTop && 
      offset <= tableOffsetBottom && 
      this._fixed.is(":hidden")
    ) {
      this._fixed.show();
      this._fixedIsShowing = true;
    }
  
    if(this._fixedIsShowing){
      this._fixed.css("top", (offset-tableOffsetTop) + "px")
    }
};

$(document).ready(function(){
  $("table").each(function(){
     var st = new SuperTable();
     st.Init(this);
   })
});