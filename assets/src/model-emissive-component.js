AFRAME.registerComponent('model-emissive', {
  schema: {default: 1.0},

  init: function () 
  {
    this.el.addEventListener('model-loaded', this.update.bind(this));
  },

  update: function () 
  {
    var mesh = this.el.getObject3D('mesh');
    var data = this.data;
    if (!mesh) { return; }
    mesh.traverse(function (node) {
      if (node.isMesh) {
        node.material.emissiveIntensity = data;
        node.material.needsUpdate = true;
      }
    });
  }

});