/*
how it should go:
1. Click button
    - Make onclick event handler
2. Begin random selection
    - Use intervals to go through the roulette.
    - Decrease speed every 15 items.
    - Decreases 5 times before finalizing.
    - Speeds: 20, 60, 100, 200, 300
    - After about 75 rolls, clear the interval.
3. Show results in popup.
    - Use jQueryUI to display a modal.
*/

var json = `
    {
    "title": [
        "Yeah",
        "Cool",
        "Nice",
        "Okay",
        "Good",
        "Great",
        "Bad",
        "Worse",
        "Horrible",
        "Meh",
        "Perfect",
        "So-So",
        "Mid",
        "Best",
        "Awful"
    ],
    "info": [
        "That was pretty good.",
        "That was completely rad!",
        "That was very pleasant.",
        "That was alright I guess.",
        "That was not bad at all.",
        "That was extraordinary!",
        "That wasn't very good...",
        "That was REALLY not good...",
        "That was absolute garbage!",
        "That was not bad but not good either.",
        "That was spot-on! Good Job!",
        "That was pretty mediocre...",
        "That was very underwhelming",
        "That was the greatest!",
        "That was shit..."
    ]
    }
`;
var list = JSON.parse(json);
console.log(list);

var loops = 0;
var i = 0;
var selectedID = 0;

function spin() {
    selectedID = Math.round(Math.random() * (list.title.length - 1));
    $("#result").text(list.title[selectedID]);
    i++
    console.log(i);
    if (i % 15 == 0) {
        loops++;
        loopFunc(loops);
    }
}

function loopFunc(i) {
    switch(i){
        case 0:
            break;
        case 1:
            clearInterval(interval);
            interval = window.setInterval(spin, 60);
            break;
        case 2:
            clearInterval(interval);
            interval = window.setInterval(spin, 100);
            break;
        case 3:
            clearInterval(interval);
            interval = window.setInterval(spin, 200);
            break;
        case 4:
            clearInterval(interval);
            interval = window.setInterval(spin, 300);
            break;
        case 5:
            clearInterval(interval);
            $("#spin-btn").attr("disabled", false);
            revealResult();
            break;
    }
}

function revealResult() {
    $("#result").attr("style", "display: none;");
    $("#final-result").text(list.title[selectedID]);
    $("#info").text(list.info[selectedID]);
    $("#popup").attr("style", false);
}

function startSpin() {
    $("#spin-btn").attr("disabled", true);
    $("#result").attr("style", false);
    $("#popup").attr("style", "display: none;");
    i = 0
    loops = 0;
    interval = window.setInterval(spin, 20)
}

var interval = 0;