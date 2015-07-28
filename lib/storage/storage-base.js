module.exports = StorageBase;

function StorageBase(options) {
  if (!(this instanceof StorageBase)) {
    return new StorageBase(options);
  }

  this.options = options || {};
}

var p = StorageBase.prototype;

p.fetch = function(originalPath, stepsHash, cb) {
  throw new Error('not implemented');
};

p.store = function(originalPath, stepsHash, image, cb) {
  throw new Error('not implemented');
};