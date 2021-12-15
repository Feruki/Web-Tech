

function getViewportWidth() {
    if(window.innerWidth) {
        return window.innerWidth;
    }
    else {
        return document.documentElement.clientWidth;
    }
}

window.addEventListener('resize', function(event) {
    console.log(window.screen);
})

document.getElementById('test123').addEventListener('click', function() {
    console.log(getViewportWidth());
});