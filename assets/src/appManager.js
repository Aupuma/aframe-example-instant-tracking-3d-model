var scene = document.querySelector('a-scene');
const placementUI = document.getElementById("zappar-placement-ui");

scene.addEventListener("loaded",()=>{
    placementUI.style.visibility = "visible";
    
    //Listen for when the user taps the UI
    placementUI.addEventListener("click", start);
})

function start()
{
    // Set placement mode to false on our instant tracker
    const instantTracker = document.getElementById("instant-tracker");
    instantTracker.setAttribute("zappar-instant", "placement-mode: false");
    // And remove the placement UI
    placementUI.remove();

    const video = document.querySelector("#caresseSurLoceanVideo")
    const card = document.querySelector("#christmasCard")
    const leftPage = document.querySelector("#leftPage")
    const tree = document.querySelector("#christmasTree")
    const webButton = document.querySelector("#WebsiteButton")
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
            webButton.emit("scale")
        },2000);
    }

    PlaySequence();
}
