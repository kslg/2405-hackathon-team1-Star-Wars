function PlaySound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}

// function reveal() {
//     let logoText = document.getElementById('logo-text')
//     let quizText = document.getElementById('quiz-text')
//     let wikiText = document.getElementById('wiki-text')
//     logoText.style.visibility = 'visible'
//     quizText.style.visibility = 'visible'
//     wikiText.style.visibility = 'visible'
// }

// function hideText() {
//     let logoText = document.getElementById('logo-text')
//     let quizText = document.getElementById('quiz-text')
//     let wikiText = document.getElementById('wiki-text')
//     logoText.style.visibility = 'hidden'
//     quizText.style.visibility = 'hidden'
//     wikiText.style.visibility = 'hidden'
// }

function reveal(textId) {
    let text = document.getElementById(textId);
    text.style.visibility = 'visible';
}

function hideText(textId) {
    let text = document.getElementById(textId);
    text.style.visibility = 'hidden';
}