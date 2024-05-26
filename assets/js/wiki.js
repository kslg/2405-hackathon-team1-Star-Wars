const histories = document.getElementsByClassName('history-content');
const headers = document.getElementsByTagName('h2');
const lines = document.getElementsByTagName('hr');
const summaries = document.getElementsByClassName('summary');
const details = document.getElementsByClassName('details');

/* styles the history items alternately to the right and left of the timeline */
for (let i = 0; i < histories.length; i++) {
    details[i].style.display = "none";
    if (i % 2 == 0) {
        /* place item to the right*/
        histories[i].style.left = "0px";
        /* for items on the right, the horizontal line comes first, then the header */
        headers[i].style.flexDirection = "row";
        /* place a small gap to the right of the line before the header */
        lines[i].style.margin = "0px 10px 0px 0px"
        /* keep the text in the middle of the screen on different screen sizes */
        if (window.innerWidth < 500) {
            details[i].style.right = "45vw"
        } else {
            details[i].style.right = "30vw"
        }

    } else {
        /* place item to the left */
        histories[i].style.right = "0px";
        /* for items on the left, the header comes first, then the horizontal line */
        headers[i].style.flexDirection = "row-reverse";
        /* place a small gap to the left of the line after the header */
        lines[i].style.margin = "0px 0px 0px 10px"
        /* keep the text in the middle of the screen on different screen sizes */
        if (window.innerWidth < 500) {
            details[i].style.left = "-5vw"
        } else {
            details[i].style.left = "10vw"
        }
    }
    /* show the details when the header is clicked */
    summaries[i].addEventListener('click', function () { expandDetails(i) });
}

function expandDetails(index) {
    if (details[index].style.display == "none") {
        /* hide and other details that are displayed */
        for (detail of details){
            detail.style.display= "none";
        }
        /* show this one */
        details[index].style.display = "block";
    } else {
        details[index].style.display = "none";
    }
}

/* Updates the styles if the window if resized after the document is loaded */
window.addEventListener('resize', updateStlyes)

function updateStlyes() {
    for (i = 0; i < histories.length; i++) {
        if (i % 2 == 0) {
            if (window.innerWidth < 500) {
                details[i].style.right = "45vw";
            } else {
                details[i].style.right = "30vw";
            }
        } else {
            if (window.innerWidth < 500) {
                details[i].style.left = "-5vw"
            } else {
                details[i].style.left = "10vw"
            }
        }
    }
}