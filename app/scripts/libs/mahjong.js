function shuffle(n) {
    // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    var rArray = [];

    for (var i = 0; i < n * n; i++) {
        if (!(i % 2)) {
            rArray[i] = i + 1;
        } else {
            rArray[i] = rArray[i - 1];
        }
    }

    var currentIndex = rArray.length, temporaryValue, randomIndex;
    var lArray = rArray;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = lArray[currentIndex];
        lArray[currentIndex] = lArray[randomIndex];
        lArray[randomIndex] = temporaryValue;
    }

    return lArray;
}

function mahjong(n) {
    var cards = shuffle(n);
    var matrix = [];

    for (var i = 0; i < n; i++) {
        matrix[i] = [];

        for (var j = 0; j < n; j++) {
            matrix[i][j] = {
                card: cards[i * n + j],
                x: i,
                y: j,
                visible: false
            };
        }
    }

    return matrix;
}