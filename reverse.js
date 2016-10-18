const reverse = function (array) {
    const rev = [];
    const length = array.length;

    for (let step = length - 1; step >= 0; step--) {
        rev.push(array[step]);
    }

    return rev;
};