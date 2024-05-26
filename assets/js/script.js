function PlaySound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.volume = 0.1;
    thissound.play();
}

function StopSound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}
