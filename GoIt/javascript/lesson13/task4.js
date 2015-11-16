  var timer;
  
  this.run = function() {
   timer = setTimeout(function(){
     timer = null;
      onReady();
    }, getTimeToBoil());
  };
  
  
 this.isRunning = function() {
    if(timer){
      return true;
    }else{
      return false;
    }
  };