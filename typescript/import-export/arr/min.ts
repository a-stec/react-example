function minimum(arr) {
    return arr.reduce((minNum, num) => {
        if (minNum > num)
            minNum = num;
        return minNum;
    }, arr[0]);
}

export {minimum as min}
