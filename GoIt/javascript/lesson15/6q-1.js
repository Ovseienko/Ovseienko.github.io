function NamedOne(first, last) {

    this.firstName = first;
    this.lastName = last;
  Object.defineProperty(this, 'fullName', {
    get: function(){
      return this.firstName + ' ' + this.lastName;
    },
    set: function(name){
      var namePart = name.split(' ');
      if(namePart.length === 2 ){
      this.firstName = namePart[0];
      this.lastName = namePart[1];
      }
    }
  });
}