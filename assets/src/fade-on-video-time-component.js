AFRAME.registerComponent('fade-on-video-time', 
{
    schema: {type: 'number'},

    init: function () 
    {        
        var el = this.el;
        var data = this.data;

        let videoSource = document.querySelector("#caresseSurLoceanVideo")
        var hasFaded = false;

        //el.setAttribute('text','opacity',0);

        videoSource.addEventListener('timeupdate', function(evt)
        {
            //console.log("hey")
            if(!hasFaded && videoSource.currentTime > data)
            {
                console.log("fade")
                el.emit("fadeIn");
                hasFaded = true;
            }
        })
    },
});