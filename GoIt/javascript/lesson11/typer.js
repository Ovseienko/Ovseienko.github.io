var typer = (function() {
  
  return {
    isNumber:    function (x) { return typeof x != "undefined" && typeof x.valueOf() == "number" && !isNaN(x.valueOf()) },
    isString: function(x){return typeof x != "undefined" && typeof x.valueOf() == "string" },
    isArray: function(x){return x instanceof Array},
    isFunction:function(x){return typeof x == 'function'},
    isDate: function(x){return x instanceof Date},
    isRegExp: function(x){return x instanceof RegExp},
    isBoolean: function(x){return typeof x.valueOf() == "boolean"  && typeof x != "undefined"},
    isError: function(x){return x instanceof Error},
    isNull: function(x){return x === null},
    isUndefined: function(x){return typeof x == 'undefined'}
  };
}(null));