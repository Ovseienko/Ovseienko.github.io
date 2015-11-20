function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
}

Ship.prototype.isWorthIt = function(){

if(this.draft - (this.crew * 1.5)> 20){
return true;
}else{
return false;
};
}