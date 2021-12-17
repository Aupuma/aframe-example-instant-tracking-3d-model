AFRAME.registerComponent('color-fix', {
    init: function () 
    {
        this.el.addEventListener("model-loaded", e => {
            // grab the mesh
            const mesh = this.el.getObject3D("mesh");
            mesh.traverse(node => {
              // grab the material and change the encoding
              if (!node.material) return;
              node.material.map.encoding = THREE.LinearEncoding
            })
        })
    }
});