// id: type
// onswitch


// value: text
    // Inhalt:
    //https://pastebin.com/LfX5EVjM

// value: video
    // Inhalt:
    /* <iframe width="560" height="315" src="https://www.youtube.com/embed/jvRymJHaduA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */

document.getElementById("type").addEventListener('change', e => {
    let value = e.target.value;
    
    if(value == "text") {
        document.getElementById("contentVideo").style.display = "none";
        document.getElementById("contentText").style.display = "block";
    } else {
        document.getElementById("contentVideo").style.display = "block";
        document.getElementById("contentText").style.display = "none";
    }
});