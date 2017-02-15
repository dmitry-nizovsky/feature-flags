function FeatureFlag() {
  this.config = [];

  if (typeof FFLoaderConfig === 'undefined') {
    console.error('Please use "FeatureFlag" plugin for transfer configuration to module.');
  } else {
    this.config = FFLoaderConfig;
  }
};

FeatureFlag.prototype.enabled = function(name) {
  for (var i = 0, max = this.config.length; i < max; i++) {
    if (this.config[i].state && this.config[i].name == name) {
      return true;
    }
  }

  return false;
};

module.exports = new FeatureFlag();
