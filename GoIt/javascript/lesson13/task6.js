 var newDisabled = this.disable;
      this.disable = function(){
        newDisabled.call(this);
        clearTimeout(timerId);
      };