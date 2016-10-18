const starsRow = function (starCount) {
    let Space = '';

    for (let a = 1; a <= starCount; a++) {
        Space = Space + '*';
    }

    return Space;
};

const spaceRow = function (spaceCount) {
    let Space = '';

    for (let a = 1; a <= spaceCount; a++) {
        Space = Space + ' ';
    }

    return Space;
};

const upperDiamond = function (length) {
    const aCount = (length + 1) / 2;
    let Stars = 1;
    let rowSpace = (length - 1) / 2;

    for (let a = 1; a <= aCount; a++) {
        console.log(spaceRow(rowSpace) + starsRow(Stars));

        Stars = Stars + 2;
        rowSpace = rowSpace - 1;
    }
};

const lowerDiamond = function (length) {
    const aCount = (length - 1) / 2;
    let Stars = length - 2;
    let rowSpace = 1;

    for (let a = 1; a <= aCount; a++) {
        console.log(spaceRow(rowSpace) + starsRow(Stars));

        Stars = Stars - 2;
        rowSpace = rowSpace + 1;
    }
};

const diamond = function (length) {
    if (length % 2 === 0) {
        length = length + 1;
    }

    upperDiamond(length);
    lowerDiamond(length);
};

diamond(7);