function PlaySound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}

function reveal(textId) {
    let text = document.getElementById(textId);
    text.style.visibility = 'visible';
}

function hideText(textId) {
    let text = document.getElementById(textId);
    text.style.visibility = 'hidden';
}