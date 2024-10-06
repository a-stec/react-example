function maximum(arr) {
    return arrUnique(arr).reduce((maxNum, num) => {
        if (maxNum < num)
            maxNum = num;
        return maxNum;
    }, arr[0]);
}

function arrUnique(arr) {
    return [...new Set(arr)];
}

export {maximum as max}
