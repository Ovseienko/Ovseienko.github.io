var Singleton = function(){
 if(Singleton.ins)return Singleton.ins;
 Singleton.ins = this;
};