AFRAME.registerComponent('app-manager', {
    init: function () 
    {
        const video = document.querySelector("#caresseSurLoceanVideo")
        const card = document.querySelector("#christmasCard")
        const leftPage = document.querySelector("#leftPage")
        const tree = document.querySelector("#christmasTree")
        let lights = document.querySelector("#lights").children;
        
        video.load()
    
        let PlaySequence = () =>
        {
            card.emit("moveToCenter")
            leftPage.emit("open")
            tree.emit("scaleUp")
            video.play();
    
            setTimeout(()=>
            {
                for (let index = 0; index < lights.length; index++) {
                    const element = lights[index];
                    setTimeout(()=>{
                        element.emit("scale")
                    },100 * index)
                }
            },2000);
        }

        leftPage.addEventListener("click",PlaySequence)
    }
});