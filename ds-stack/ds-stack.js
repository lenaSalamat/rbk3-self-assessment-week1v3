var Stack = function() {
    this._storage ={};
    this._count=0
    this.add = function(value){
     this._storage[value]=value;
     this._count++;
    };
    this.remove = function() {
      var del=this._storage[value];
         delete this._storage[value];
         this._count--;
         return del;
    };

  };