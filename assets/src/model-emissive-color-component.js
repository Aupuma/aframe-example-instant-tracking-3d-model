AFRAME.registerComponent('model-emissive-color', {
    schema: {default: '#FF0'},
  
    init: function () 
    {
      var data = this.data;

      let changeColor = () => 
      {
          let mesh = this.el.getObject3D('mesh');
          if(!mesh) return;

          mesh.traverse(function(node)
          {
              if(node.isMesh)
              {
                  let mat = node.material;
                  let color = new THREE.Color(data);
                  mat.emissive = color;
                  node.material = mat;
              }
          })
      }

      this.el.addEventListener('model-loaded', function(ev){
        changeColor()
    });  
    }
});