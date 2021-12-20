document.addEventListener("DOMContentLoaded", function() 
{
    const IS_IOS =
        /^(iPad|iPhone|iPod)/.test(window.navigator.platform) ||
        (/^Mac/.test(window.navigator.platform) && window.navigator.maxTouchPoints > 1);
    if (IS_IOS) {
        console.log("ios platform")
        window.createImageBitmap = undefined;
    }
    else{
        console.log("not ios platform")
    }
});