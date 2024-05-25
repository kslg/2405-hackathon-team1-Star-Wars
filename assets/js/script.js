function PlaySound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}


function PlaySound(soundobj) {
    var lightSaberEffect = document.getElementById('light-saber');
    lightSaberEffect.play();
}

function StopSound(soundobj) {
    var lightSaberEffect = document.getElementById('light-saber');
    lightSaberEffect.pause();
    lightSaberEffect.currentTime = 0;
}


// let lightSaberEffect = document.getElementById('lightSaberEffect');
// let homepageCard = document.querySelectorAll('homepage-card');

// homepageCard.addEventListener('mouseover', function() {
//     lightSaberEffect.play();
// });

// homepageCard.addEventListener('mouseout', function() {
//     lightSaberEffect.pause();
//     lightSaberEffect.currentTime = 0;
// });
