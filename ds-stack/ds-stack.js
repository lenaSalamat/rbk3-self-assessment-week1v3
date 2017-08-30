var Stack = function() {
	var StackMethod={};
    this._storage ={};
    this._count=0;
    StackMethod.add = function(value){
     this._storage[value]=value;
     this._count++;
    };
    StackMethod.remove = function() {
      var del=this._storage[value];
         delete this._storage[value];
         this._count--;
         return del;
    };

  };

/////////////////////////////////////////////////////
  var Stack = function() {
    this._storage =[];
    this._count=0;
   this.add = function(value){
     this._storage.push(value);
     this._count++;
    };
    StackMethod.remove = function() {
      var del=this._storage[this.count];
         pop. (this._storage[this.count])
         this.count--;
         return del;
    };

  };