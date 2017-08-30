var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

    return {
      _storage: [],
      retrieve: function(key) {
        return this._storage[hashFn(key, max)];
      },

      insert: function(key, value) {
      	var puket=[];
      	var topel=[];
      	if(this._storage===undefined){
         this.topel[0]=key;
         this.topel[1]=value;
         this.puket.push(this.topel)
          }
        if(this._storage[hashFn(key, max)]= value ){
        	this.topel[0]=key;
            this.topel[1]=value;
            this._storage[hashFn(key, max)].push(topels)
        }
       
    }
  }
  
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};