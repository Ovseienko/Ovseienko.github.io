Array.prototype.reverse = function() {
  for(var i = 0, j=this.length - 1; i<j; i++, j--){
    var v = this[i];
    this[i] = this[j];
    this[j] = v;
  }
      return this;
};